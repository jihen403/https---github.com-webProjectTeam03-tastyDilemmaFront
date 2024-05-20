<script>
    // 폼 제출 이벤트를 처리하는 함수
    document.getElementById('write-form').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 제출 기본 동작 방지
        const formData = new FormData(this);
        const newPost = {
            title: formData.get('title'),
            content: formData.get('content'),
            author: '홍길동', // 작성자 정보 추가
            visibility: formData.get('btnradio')
        };

        // 새 게시글을 localStorage에 저장
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));

        // 게시글이 저장되었다는 알림 등의 처리
        alert('게시글이 성공적으로 작성되었습니다.');
        // board.html로 이동
        window.location.href = 'board.html';
    });
</script>
