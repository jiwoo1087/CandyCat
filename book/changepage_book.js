document.addEventListener('DOMContentLoaded', () => {
    // 선언
    const all_books_btn = document.getElementById('all_books_btn');
    const stroybook_btn = document.getElementById('stroybook_btn');
    const softbook_btn = document.getElementById('softbook_btn');
    
    //클릭시 이벤트 (화면 전환)
    all_books_btn.addEventListener('click', () => {
        location.href = 'all_books.html'; 
    });
    stroybook_btn.addEventListener('click', () => {
        location.href = 'stroybook.html'; 
    });
    softbook_btn.addEventListener('click', () => {
        location.href = 'softbook.html'; 
    });


});