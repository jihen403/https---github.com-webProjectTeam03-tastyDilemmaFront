// Kakao 로그인 함수
function loginWithKakao() {
  Kakao.Auth.login({
    success: function(authObj) {
      // 로그인 성공 시 처리할 내용
      console.log(authObj); //access 토큰 값
      Kakao.Auth.setAccessToken(authObj.access_token); // access토큰값 저장
      getInfo(); // ※ 미정의: 정의 필요
      var favoriteModal = new bootstrap.Modal(document.getElementById('favoriteModal'));
      favoriteModal.show();
    },
    fail: function(err) {
      // 로그인 실패 시 처리할 내용
      console.error('로그인 실패:', err);
    }
  });
}

// 엑세스 토큰을 발급받고, 아래 함수를 호출시켜서 사용자 정보를 받아옴.
function getInfo() {
  Kakao.API.request({
    url: '/v2/user/me',
    success: function (res) {
      console.log(res);
      이메일, 닉네임, 프로필이미지
      var email = res.kakao_account.email;
      var profile_nickname = res.kakao_account.profile.nickname;
      var profile_image = res.kakao_account.profile.thumbnail_image_url;
      // 가입 여부 확인 요청
      checkUser(email, profile_nickname, profile_image);
    },
    fail: function (error) {
      alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요.' + JSON.stringify(error));
    }
  });
}

// Kakao 로그인 성공 시 main.html로 리다이렉트
function loginSuccess() {
  window.location.href = "src/main.html";
}

// 서버에 사용자 존재 여부 확인 요청
function checkUser(email, profile_nickname, profile_image) {
  fetch('/api/check-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, profile_nickname, profile_image })
  })
  .then(response => response.json())
  .then(data => {
    if (data.exists) {
      // 사용자가 이미 존재하면 메인 페이지로 이동
      loginSuccess();
    } else {
      // 사용자가 존재하지 않으면 모달 열기
      openModal();
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// 모달이 닫힐 때 이벤트 리스너 추가
document.getElementById('favoriteModal').addEventListener('hidden.bs.modal', function () {
  loginSuccess();
});