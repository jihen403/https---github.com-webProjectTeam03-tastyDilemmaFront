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


  
  