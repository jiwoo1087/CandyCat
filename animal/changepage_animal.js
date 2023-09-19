document.addEventListener('DOMContentLoaded', () => {
    // 선언
    const all_animal_btn = document.getElementById('all_animal_btn');
    const land_animal_btn = document.getElementById('land_animal_btn');
    const marine_animal_btn = document.getElementById('marine_animal_btn');
    const reptile_btn = document.getElementById('reptile_btn');
    
    //클릭시 이벤트 (화면 전환)
    all_animal_btn.addEventListener('click', () => {
        location.href = 'all_animal.html'; 
    });
    land_animal_btn.addEventListener('click', () => {
        location.href = 'land_animal.html'; 
    });
    marine_animal_btn.addEventListener('click', () => {
        location.href = 'marine_animal.html'; 
    });
    reptile_btn.addEventListener('click', () => {
        location.href = 'reptile.html'; 
    });


});