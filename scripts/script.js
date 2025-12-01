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


    // ----- Валідація форми авторизації -----
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const loginInput = document.getElementById('login');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');

            const login = loginInput.value.trim();
            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();

            const errors = [];

            // Перевірка логіну через RegExp + match
            const loginPattern = /^[A-Za-z0-9]{3,16}$/;
            if (!login.match(loginPattern)) {
                errors.push('Логін має містити 3–16 латинських літер або цифр без пробілів.');
            }

            // Перевірка email через RegExp + search
            const emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
            if (email.search(emailPattern) === -1) {
                errors.push('Введіть коректну електронну пошту (формат типу user@example.com).');
            }

            // Перевірка телефону через RegExp + match
            const phonePattern = /^\+?\d{9,13}$/;
            if (!phone.match(phonePattern)) {
                errors.push('Телефон має містити від 9 до 13 цифр, допускається знак "+" на початку.');
            }

            if (errors.length > 0) {
                alert(errors.join('\n'));
            } else {
                alert('Дані введені коректно!');
                // Тут за потреби можна відправити форму на сервер
                // loginForm.submit();
            }
        });
    };
