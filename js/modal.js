// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드되었을 때 실행될 함수를 등록
document.addEventListener('DOMContentLoaded', () => {
  // 오버레이 요소를 가져옴
  const overlay = document.getElementById('overlay');
  // 모달 요소를 가져옴
  const modal = document.getElementById('myModal');
  // 모달 닫기 버튼 (x 버튼) 요소를 가져옴
  const closeBtn = document.querySelector('.close');
  // 선택 버튼 요소를 가져옴
  const selectButton = document.getElementById('selectButton');

  // 선택 버튼 클릭 시 페이지로 이동하는 함수 등록
  selectButton.addEventListener('click', openRecommendationDetail);
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
 
// 선택 버튼 클릭 이벤트 핸들러 등록
document.getElementById('selectButton').addEventListener('click', function() {
  // 모달을 닫습니다.
  closeModal();

  // 선택한 지역 정보를 가져옵니다.
  const selectedRegion = document.getElementById('selectRegion').value;
  const selectedDistrict = document.getElementById('selectDistrict').value;

  // 선택한 지역 정보를 URL 파라미터 형식으로 만듭니다.
  const queryParams = `?region=${selectedRegion}&district=${selectedDistrict}`;

  // 선택한 지역 정보를 포함하여 새로운 페이지로 이동합니다.
  window.location.href = `/src/recommandation/detail.html${queryParams}`;
});

 // 선택 버튼 클릭 시 모달을 닫고 페이지로 이동하는 함수 등록
 selectButton.addEventListener('click', () => {
  closeModal(); // 모달을 닫음
  openRecommendationDetail(); // 페이지로 이동
});

// 선택 버튼 클릭 시 현재 창으로 이동하는 함수
function openRecommendationDetail() {
  // 새로운 페이지로 이동
  window.location.href = "/src/recommandation/detail.html"; // 변경할 페이지의 URL로 수정하세요
}