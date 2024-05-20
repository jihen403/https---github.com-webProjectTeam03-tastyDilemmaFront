// Kakao 로그인 함수
function loginWithKakao() {
  Kakao.Auth.login({
    success: function(authObj) {
      // 로그인 성공 시 처리할 내용
      console.log(authObj); //access 토큰 값
      alert(JSON.stringify('로그인 성공')) //알림
      Kakao.Auth.setAccessToken(authObj.access_token); // access토큰값 저장
      getInfo(); // ※ 미정의: 정의 필요
      loginSuccess(); //로그인 성공 시 main 페이지 리다이렉트
    },
    fail: function(err) {
      // 로그인 실패 시 처리할 내용
      console.error('로그인 실패:', err);
    }
  });
}

// Kakao 로그인 성공 시 main.html로 리다이렉트
function loginSuccess() {
  window.location.href = "src/main.html";
}

// 엑세스 토큰을 발급받고, 아래 함수를 호출시켜서 사용자 정보를 받아옴.
function getInfo() {
  Kakao.API.request({
      url: '/v2/user/me',
      success: function (res) {
          console.log(res);
          // 이메일, 성별, 닉네임, 프로필이미지
          // var email = res.kakao_account.email;
          // var gender = res.kakao_account.gender;
          // var profile_nickname = res.kakao_account.profile.nickname;
          // var profile_image = res.kakao_account.profile.thumbnail_image_url;
          // var birthday = res.kakao_account.birthday;

          console.log(email, gender, profile_nickname, profile_image, birthday);
      },
      fail: function (error) {
          alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요.' + JSON.stringify(error));
      }
  });
}