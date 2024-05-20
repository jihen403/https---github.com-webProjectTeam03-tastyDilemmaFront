// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드되었을 때 실행될 함수를 등록
document.addEventListener('DOMContentLoaded', () => {
  // 오버레이 요소를 가져옴
  const overlay = document.getElementById('overlay');
  // 모달 요소를 가져옴
  const modal = document.getElementById('myModal');
  // 모달 닫기 버튼 (x 버튼) 요소를 가져옴
  const closeBtn = document.querySelector('.close');
  // 취소 버튼 요소를 가져옴
  const cancelButton = document.getElementById('cancelButton');
  // 선택 버튼 요소를 가져옴
  const selectButton = document.getElementById('selectButton');
});

// 모달 열기
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// 모달 닫기
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


// 메시지를 수신하여 처리하는 함수 정의
function handleMessage(event) {
    if (event.data === 'closeIframe') {
        // 특정 div의 display 속성을 none으로 변경
        document.getElementById('myModal').style.display = 'none';
    }
}

// 메시지 이벤트 리스너 등록
window.addEventListener('message', handleMessage);

// 부모 페이지로 메시지를 보내는 함수 정의
  function sendMessageToParent(message) {
      window.parent.postMessage(message, '*');
  }
  
  // 닫기 버튼 클릭 이벤트 리스너 등록
  document.getElementById('cancelButton').addEventListener('click', function() {
      sendMessageToParent('closeIframe');
  });

  
  