// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드되었을 때 실행될 함수를 등록
document.addEventListener('DOMContentLoaded', () => {
  // 모달 요소를 가져옴
  const modal = document.getElementById('myModal');
  // 모달 닫기 버튼 (x 버튼) 요소를 가져옴
  const closeBtn = document.querySelector('.close');
  // 취소 버튼 요소를 가져옴
  const cancelButton = document.getElementById('cancelButton');
  // 선택 버튼 요소를 가져옴
  const selectButton = document.getElementById('selectButton');

  // 모달 닫기 함수 정의
  function closeModal() {
    modal.style.display = "none"; // 모달을 숨김
  }

  // 닫기 버튼 클릭 시 모달 닫기
  closeBtn.addEventListener('click', closeModal);

  // 취소 버튼 클릭 시 모달 닫기
  cancelButton.addEventListener('click', closeModal);

  // 선택 버튼 클릭 시 알림 및 모달 닫기
  selectButton.addEventListener('click', () => {
    alert('선택 되었습니다.');
    closeModal();
  });
});

// 모달 열기
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
