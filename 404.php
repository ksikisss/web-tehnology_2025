<?php

?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle ?? '404 – Сторінка не знайдена', ENT_QUOTES, 'UTF-8'); ?></title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body class="not-found-page">
<?php include __DIR__ . '/nav.php'; ?>
    <main class="not-found-main">
        <section class="not-found-content">
            <h1>404</h1>
            <p>На жаль, такої сторінки не існує.</p>
            <p><a href="index.php?route=home">Повернутися на головну</a></p>
        </section>
    </main>
</body>
</html>


