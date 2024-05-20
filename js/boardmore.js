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

      // 답글 폼 추가
      const replyForm = document.createElement('form');
      replyForm.classList.add('comment-form');
      replyForm.innerHTML = `
          <div class="form-group">
              <label for="reply-content">답글 작성</label>
              <textarea id="reply-content" class="form-control" rows="3" placeholder="답글 내용을 입력하세요"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">등록</button>
          <button type="button" class="btn btn-secondary cancel-reply">취소</button>
      `;

      // 취소 버튼 클릭 시 답글 폼 제거
      replyForm.querySelector('.cancel-reply').addEventListener('click', function() {
          replyForm.remove();
      });

      // 답글 폼 제출 시 처리
      replyForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const replyContent = replyForm.querySelector('#reply-content').value;
          console.log('답글 내용:', replyContent);
          // 여기서 서버에 답글을 전송하는 등의 로직을 추가하면 됩니다.

          // 답글 폼 제거
          replyForm.remove();
      });

      newComment.appendChild(replyForm);

      commentList.appendChild(newComment);

      contentInput.value = '';
  });
});
