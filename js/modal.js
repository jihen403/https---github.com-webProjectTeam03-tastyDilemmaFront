// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드되었을 때 실행될 함수를 등록
document.addEventListener('DOMContentLoaded', () => {
  // 오버레이 요소를 가져옴
  const overlay = document.getElementById('overlay');
  // 모달 요소를 가져옴
  const modal = document.getElementById('myModal');
  // 모달 닫기 버튼 (x 버튼) 요소를 가져옴
  const closeBtn = document.querySelector('.close');
  // 선택 버튼 요소를 가져옴


  // 카테고리 선택 버튼 클릭 시 동작 정의
  const categorySelectButton = document.getElementById('categorySelectButton');

  categorySelectButton.addEventListener('click', () => {
    document.getElementById('myModal2').style.display = 'none';
    document.getElementById('myModal3').style.display = 'block';
    // 추가 동작을 여기에 추가
  });

  // 모든 닫기 버튼에 대한 이벤트 리스너 등록
  const cancelButtons = document.querySelectorAll('.btn-primary');
  cancelButtons.forEach(button => {
    button.addEventListener('click', () => {
      sendMessageToParent('closeIframe');
    });
  });

 // 취소 버튼 클릭 이벤트 리스너 등록
const cancelButton1 = document.getElementById('cancelButton1');
cancelButton1.addEventListener('click', () => {
  closeModal();
    // 메시지를 수신하여 처리하는 함수 정의
    window.addEventListener('message', handleMessage);
});

const cancelButton2 = document.getElementById('cancelButton2');
    cancelButton2.addEventListener('click', () => {
      closeModal('myModal2');
    });
});

// 모달 열기 함수
function openModal() {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('myModal');
  modal.style.display = "block";

  if(overlay) {
    overlay.style.display = 'block'; // 오버레이를 보이도록 설정
  }
}

// 모달 닫기 함수 수정
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// 메시지를 수신하여 처리하는 함수 정의
function handleMessage(event) {
  if (event.data === 'closeIframe') {
    // 특정 div의 display 속성을 none으로 변경
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
    window.removeEventListener('message', handleMessage, false);
  }
}
// 부모 페이지로 메시지를 보내는 함수 정의
function sendMessageToParent(message) {
  window.parent.postMessage(message, '*');
}

  // 메시지를 수신하여 처리하는 함수 정의
  window.addEventListener('message', handleMessage);  




