// 모달 열기
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // 모달 닫기
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  