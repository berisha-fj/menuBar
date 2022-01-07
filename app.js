
const trigger = document.querySelector('.trigger'); 
const backdrop = document.querySelector('.backdrop');
const fullScreen = document.querySelector('.full-screen');

trigger.addEventListener('click', function () {
    fullScreen.classList.add('open-nav') 
        console.log('open-nav')
    });

 backdrop.addEventListener('click', function () {
    fullScreen.classList.remove('open-nav')
        console.log('open-nav')
    });

