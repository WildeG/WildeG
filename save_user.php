<!DOCTYPE html>
<html>
<head>
<link href="content/css/registration.css" rel="stylesheet" type="text/css" />	
<link href="content/css/style.css" rel="stylesheet" type="text/css" />	
<title>Error</title>
</head>
<body>
<div id="regpage">
<?php
  include ("bd.php");
  $reg=false;
  if (isset($_POST['submit'])){
    if(empty($_POST['login']))  {
      echo '<center>Введите логин.</center>';
    }
    elseif (!preg_match("/^\w{3,16}$/", $_POST['login'])) {
      echo '<center><a class="inscription">В поле "Логин" введены недопустимые символы! Только латинские буквы, цифры и подчеркивание!</center>';
    }
    elseif (!preg_match("/\A(\w){6,16}\Z/", $_POST['password'])) {
      echo '<center><a class="inscription">Пароль слишком короткий! Пароль должен быть не менее 6 символов!</a></center>';
    }
    elseif($_POST['password'] != $_POST['password_repeat']) {
      echo '<center><a class="inscription">Введенные пароли не совпадают!</a></center>';
  	}
    elseif(empty($_POST['nickname'])) {
    echo '<center><a class="inscription">Введите ник.</a></center>';
  	}
  	elseif((!preg_match("#\w+\@\w+\.\w+#", $_POST['email'])) and (!empty($_POST['email']))) { /*проверка знаков, введенных в поле мыла. Нужен фикс.*/
  	echo '<center><a class="iscription">Неверно введен E-Mail.</a></center>';
  	}
    else{
      	$login = $_POST['login'];
	    $password = md5($_POST['password']);
	    $nickname=$_POST['nickname'];
	    $date_reg = date("Y-m-d");	
	    $query_login = ("SELECT id_users FROM users WHERE login='$login'");
	    $sql = mysqli_query($db,$query_login) or die(mysql_error());
	  	$name=$_POST['name'];
	  	$lastname=$_POST['lastname'];
	  	$email=$_POST['email'];
	  	$date_of_birth=$_POST['date_of_birth'];
	  	$secretq=$_POST['secretq'];
	  	$answer=$_POST['answer'];
        if (mysqli_num_rows($sql) > 0) {
        	echo 'Пользователь с таким логином зарегистрирован!';
        }
        	else{
				$query = "INSERT INTO users (login, nickname, password, name, lastname, date_of_registration,date_of_birth,email,secretq,answer) VALUES ('$login', '$nickname', '$password', '$name', '$lastname', '$date_reg','$date_of_birth','$email','$secretq','$answer')";
            	$result = mysqli_query($db,$query) or die(mysql_error());;
            	$reg=true;	/*проверка успешной регистрации*/
            	echo '<center><a class="inscription">Вы успешно зарегистрировались!</a></center>';  								
            }
        }
    } 
if ($reg!=true) {	/*проверка успешной регистрации*/
echo '<center><a href="/registration.html">К регистрации</a></center>'; 
}
?>
<div>
<center><a href='index.php'>На главную</a></center>
</div>
</div>

</body>
</html>