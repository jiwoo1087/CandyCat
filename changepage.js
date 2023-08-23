document.addEventListener('DOMContentLoaded', () => {
    // 선언
    const animal_btn = document.getElementById('animal_btn');
    const personalized_btn = document.getElementById('personalized_btn');
    const book_btn = document.getElementById('book_btn');
    const mypage_btn = document.getElementById('mypage_btn');
    
    //클릭시 이벤트 (화면 전환)
    animal_btn.addEventListener('click', () => {
        location.href = 'http://127.0.0.1:5500/animal.html'; 
    });
    personalized_btn.addEventListener('click', () => {
        location.href = 'http://127.0.0.1:5500/personalized.html'; 
    });
    book_btn.addEventListener('click', () => {
        location.href = 'http://127.0.0.1:5500/book.html'; 
    });
    mypage_btn.addEventListener('click', () => {
        location.href = 'http://127.0.0.1:5500/MyPage.html'; 
    });


});