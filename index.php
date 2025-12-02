<?php
// Простий PHP-роутер для сайту Maybelline

// Поточний маршрут (?route=home, ?route=signin, ?route=signup і т.д.)
$route = isset($_GET['route']) ? $_GET['route'] : 'home';

// Доступні сторінки сайту
$routes = [
    'home' => [
        'file'  => 'home.php',
        'title' => 'Maybelline New York – Офіційний сайт',
    ],
    'signin' => [
        'file'  => 'login.php',
        'title' => 'Вхід',
    ],
    'signup' => [
        'file'  => 'register.php',
        'title' => 'Реєстрація',
    ],
    'api-demo' => [
        'file'  => 'api-demo.php',
        'title' => 'Cats API',
    ],
];

// Елементи навігації
$navItems = [
    'home'     => 'Головна',
    'signin'   => 'Вхід',
    'signup'   => 'Реєстрація',
    'api-demo' => '🐱 Cats API',
];

// Визначаємо, яку сторінку завантажувати
if (isset($routes[$route]) && file_exists(__DIR__ . '/' . $routes[$route]['file'])) {
    $pageTitle    = $routes[$route]['title'];
    $currentRoute = $route;
    include __DIR__ . '/' . $routes[$route]['file'];
} else {
    // 404 — сторінка не знайдена
    http_response_code(404);
    $pageTitle    = '404 – Сторінка не знайдена';
    $currentRoute = null;
    include __DIR__ . '/404.php';
}


