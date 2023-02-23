// selections
const switchBtn = document.querySelector('.switch-btn');
const videoContainer = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

// preloader functionality
window.addEventListener('load', function () {

    preloader.classList.add('hide-preloader');

});

// switch button functionality
switchBtn.addEventListener('click', function () {

    // checking if the button has .slide class
    if (!switchBtn.classList.contains('slide')) {

        // adding the slide class
        switchBtn.classList.add('slide');

        // pausing the video
        videoContainer.pause();

    } else {

        // removing the slide class
        switchBtn.classList.remove('slide');

        // playing the video
        videoContainer.play();
    }

});