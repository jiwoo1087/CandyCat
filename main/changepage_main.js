document.addEventListener('DOMContentLoaded', () => {
    // 선언
    const animal_btn2 = document.getElementById('animal_btn2');
    const personalised_btn2 = document.getElementById('personalised_btn2');
    const book_btn2 = document.getElementById('book_btn2');
    const mypage_btn2 = document.getElementById('mypage_btn2');
    
    //클릭시 이벤트 (화면 전환)
    animal_btn2.addEventListener('click', () => {
        location.href = '../animal/animal.html'; 
    });
    personalised_btn2.addEventListener('click', () => {
        location.href = '../personalised/personalised.html'; 
    });
    book_btn2.addEventListener('click', () => {
        location.href = '../book/book.html'; 
    });
    mypage_btn2.addEventListener('click', () => {
        location.href = '../mypage/mypage.html'; 
    });


});