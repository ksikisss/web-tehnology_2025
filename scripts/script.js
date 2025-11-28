const videos = [
    'assets/videos/video1.mp4',
    'assets/videos/video3.mp4',
    'assets/videos/video2.mp4'
];

let currentIndex = 0;
const videoPlayer = document.getElementById('video-player');

// Функция смены видео
function changeVideo() {
    videoPlayer.src = videos[currentIndex];
    videoPlayer.play();
}

// Запуск первого видео
changeVideo();

// При завершении видео переключаемся на следующее
videoPlayer.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % videos.length;
    changeVideo();
});
//3.1.кількість параграфів <p> на вашій сторінці index.html
const paragraphCount = document.getElementsByTagName('p').length;
console.log(`Кількість параграфів на сторінці: ${paragraphCount}`);

//3.2.кількість заголовків <h2> на вашій сторінці index.html
const h2Count = document.getElementsByTagName('h2').length;
console.log(`Кількість заголовків <h2> на сторінці: ${h2Count}`);

//3.3.значення background-color елементу <body>
const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
console.log(`Background-color елементу <body>: ${bodyBgColor}`);

//3.4.значення font-size елементу <h1>
const h1FontSize = window.getComputedStyle(document.querySelector('h1')).fontSize;
console.log(`Font-size елементу <h1>: ${h1FontSize}`);  
