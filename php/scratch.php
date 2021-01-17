<?php
// Inside the <?php |CODE| is treated as PHP, outside is treated as HTML
$title = "This is my title";
$heading = "This is my Heading"
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- USING ECHO I CAN INJECT PHP VARIABLES INTO MY HTML -->
    <title><?php echo($title); ?></title>
</head>
<body>

    <h1><?php echo($heading); ?></h1>
    
</body>
</html>