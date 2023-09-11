document.addEventListener('DOMContentLoaded', () => {
    // 선언
    const all_personalised_btn = document.getElementById('all_personalised_btn');
    const personbunni_btn = document.getElementById('personbunni_btn');
    const personsoothers_btn = document.getElementById('personsoothers_btn');
    const personjumper_btn = document.getElementById('personjumper_btn');
    
    //클릭시 이벤트 (화면 전환)
    all_personalised_btn.addEventListener('click', () => {
        location.href = 'all_personalised.html'; 
    });
    personbunni_btn.addEventListener('click', () => {
        location.href = 'personbunni.html'; 
    });
    personsoothers_btn.addEventListener('click', () => {
        location.href = 'personsoothers.html'; 
    });
    personjumper_btn.addEventListener('click', () => {
        location.href = 'personjumper.html'; 
    });


});