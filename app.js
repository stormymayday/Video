// selections
const switchBtn = document.querySelector('.switch-btn');
const videoContainer = document.querySelector('.video-container');

switchBtn.addEventListener('click', function () {

    // checking if the button has .slide class
    if (!switchBtn.classList.contains('slide')) {
        switchBtn.classList.add('slide');
    } else {
        switchBtn.classList.remove('slide');
    }

});