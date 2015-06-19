<html>
<head><title>Введите код</title>
<link href="content/css/login.css" rel="stylesheet" type="text/css" />	
</head>
<body>
<div id='logpage'>
<?php
	session_start();
	$link = "http://www.wilde-gard.loc/";
	if (isset($_POST['code'])) { $code = $_POST['code']; if ($code == '') { unset($code);} }
	if(empty($code)){
		exit('Введите код.');
	}
	include('bd.php');
	$check=("SELECT code FROM check_ WHERE code='$code'");
	$check2=("SELECT usedcode FROM check_ WHERE usedcode='$code'");
	$sql=mysqli_query($db,$check) or die(mysql_error());
	$sql2=mysqli_query($db,$check2) or die(mysql_error());
	if(mysqli_num_rows($sql)!=0){
		echo'<center>Вы ввели правильный код!<br><a href="/registration.html">Перейти к регистрации</a></center>';
		$date=date('Y-m-d');
		$del=("DELETE FROM check_ WHERE code='$code'");
		$add=("INSERT INTO check_ (usedcode,entertime) VALUES ('$code','$date')");
		$result = mysqli_query($db,$del) or die(mysql_error());
		$result2 = mysqli_query($db,$add) or die(mysql_error());
	}
	elseif(mysqli_num_rows($sql2) > 0){
		echo'<center>Этот код уже использован.<br><a href="/check.html">Назад</a></center>';		
	}
	else{
		echo'<center>Вы ввели неправильный код. Попробуйте еще раз.<br><a href="/check.html">Назад</a></center>';
	}
?>
</div>
</body>
</html>