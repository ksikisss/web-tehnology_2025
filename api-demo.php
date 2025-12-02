<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Cats API</title>
</head>
<body>
    <h1>Cats API</h1>

    <input type="number" id="code" value="200" placeholder="HTTP код">
    <button onclick="getCat()">Отримати кота</button>

    <div id="result"></div>

    <script>

        function getCat() {
            const code = document.getElementById('code').value;
            const result = document.getElementById('result');

            const url = `https://http.cat/${code}`;

            result.innerHTML = `
                <h2>Код: ${code}</h2>
                <img src="${url}" alt="HTTP Cat ${code}" style="max-width:400px;"
                     onload="hideError()"
                     onerror="showError('${code}')">
                <div id="error-msg" style="display:none; color:red; margin-top:10px;">
                    Помилка: Зображення для коду ${code} не знайдено
                </div>
            `;
        }

        function hideError() {
            const errorMsg = document.getElementById('error-msg');
            if (errorMsg) errorMsg.style.display = 'none';
        }

        function showError(code) {
            const errorMsg = document.getElementById('error-msg');
            if (errorMsg) {
                errorMsg.style.display = 'block';
                errorMsg.textContent = `Помилка: Зображення для HTTP коду ${code} не знайдено`;
            }
        }

        window.addEventListener('DOMContentLoaded', function() {
            getCat();
        });
    </script>
</body>
</html>
