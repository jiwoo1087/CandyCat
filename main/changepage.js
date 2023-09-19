document.addEventListener('DOMContentLoaded', () => {
    // 선언
    const main_btn = document.getElementById('main_btn');
    const animal_btn = document.getElementById('animal_btn');
    const personalised_btn = document.getElementById('personalised_btn');
    const book_btn = document.getElementById('book_btn');
    const mypage_btn = document.getElementById('mypage_btn');
    const basket_btn = document.getElementById('basket_btn');
    
    //클릭시 이벤트 (화면 전환)
    main_btn.addEventListener('click', () => {
        location.href = '../main/main.html'; 
    });
    animal_btn.addEventListener('click', () => {
        location.href = '../animal/animal.html'; 
    });
    personalised_btn.addEventListener('click', () => {
        location.href = '../personalised/personalised.html'; 
    });
    book_btn.addEventListener('click', () => {
        location.href = '../book/book.html'; 
    });
    mypage_btn.addEventListener('click', () => {
        location.href = '../mypage/mypage.html'; 
    });
    basket_btn.addEventListener('click', () => {
        location.href = 'basket.html';
    });

});