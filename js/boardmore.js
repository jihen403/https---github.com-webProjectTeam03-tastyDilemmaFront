document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.querySelector('.comment-form');
  const commentList = document.querySelector('.comment-list');

  commentForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const contentInput = document.getElementById('comment-content');

      if (contentInput.value.trim() === '') {
          alert('댓글 내용을 입력해주세요.');
          return;
      }

      const newComment = document.createElement('li');
      newComment.classList.add('comment-item');

      const authorParagraph = document.createElement('p');
      const contentParagraph = document.createElement('p');

      // 임의로 로그인된 사용자 이름을 할당합니다. 실제 구현에서는 로그인한 사용자 이름을 사용해야 합니다.
      const loggedInUser = '홍길동';

      authorParagraph.innerHTML = `<strong>${loggedInUser}</strong>`;
      contentParagraph.textContent = contentInput.value;

      newComment.appendChild(authorParagraph);
      newComment.appendChild(contentParagraph);

      commentList.appendChild(newComment);

      contentInput.value = '';
  });
});
