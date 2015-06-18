<?php
session_start();// вся процедура работает на сессиях. Именно в ней хранятся данные пользователя, пока он находится на сайте. Очень важно запустить их в самом начале странички!!!
$link = "http://www.wilde-gard.loc/";
?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html"; charset='utf8'>
		<title>Вход</title>
		<link href="content/css/login.css" rel="stylesheet" type="text/css">
		<link href="content/css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<div id="logpage">	
			<?php
			// Проверяем, пусты ли переменные логина и id пользователя
			if (empty($_SESSION['login']) or empty($_SESSION['id'])) {
						echo 
				"<form id='login' action='login.php' method='post' enctype='multipart/form-data'></form><div id='login'>
					<center>
					<h1>Вход</h1>
					</center>
					
						<a class='inscriptions'>Логин:</a><br>
						<input class='field' size='30' form='login' type='text' name='login'> <br>
						<a class='inscriptions'>Пароль:</a><br>
						<input class='field' size='30' form='login' type='password' name='password'> <br>
						<input id='button' value='Вход' form='login' type='submit'> <br>
					
					<a href='registration.html'>Нет учетной записи? </a>
					<a href='forgot.html'>Забыли пароль? </a> <br>
				</div>";
			}
			else { 
					echo 
					"<div id='band'>
					<div id='user'><center>
					<a href='user.php' title='Редактировать информацию о себе''>Вы вошли как<br><h1>".$_SESSION['lastname']."&nbsp".$_SESSION['name']."</h1></a><br>
					<a href='exit.php' >(Выход)</a></center>
			</div>
		</div> ";
				  } ?>
			<div id="copyright">
				<strong>Copyright © 2015. Михайлов Олег. Все права защищены.</strong>
				<p>Перепечатка материалов и использование их в любой форме, в том 
				числе и в электронных СМИ, возможны только с письменного разрешения 
				администрации сайта. При этом ссылка на сайт обязательна.</p>
			</div> 
		</div>
	</body>
</html>