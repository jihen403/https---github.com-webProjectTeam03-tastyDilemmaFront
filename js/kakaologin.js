// Kakao 로그인 함수
function loginWithKakao() {
  Kakao.Auth.login({
      success: function(authObj) {
          // 로그인 성공 시 처리할 내용
          console.log('로그인 성공:', authObj);
      },
      fail: function(err) {
          // 로그인 실패 시 처리할 내용
          console.error('로그인 실패:', err);
      }
  });
}