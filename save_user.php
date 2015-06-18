<!DOCTYPE html>
<html>
<head>
<link href="content/css/registration.css" rel="stylesheet" type="text/css" />	
<link href="content/css/style.css" rel="stylesheet" type="text/css" />	
<title></title>
</head>
<body>
<div id="regpage">
<?php
  include ("bd.php");

  if (isset($_POST['submit'])){
    if(empty($_POST['login']))  {
      echo '<br><font color="red">Введите логин! </font>';
    }
    elseif (!preg_match("/^\w{3,16}$/", $_POST['login'])) {
      echo '<center><a class="inscription">В поле "Логин" введены недопустимые символы! Только латинские буквы, цифры и подчеркивание!</center>';
    }
    elseif (!preg_match("/\A(\w){6,16}\Z/", $_POST['password'])) {
      echo '<br><font color="red">Пароль слишком короткий! Пароль должен быть не менее 6 символов! </font>';
    }
    elseif($_POST['password'] != $_POST['password_repeat']) {
      echo '<br><font color="red">Введенные пароли не совпадают!</font>';
  	}
    else{
        $login = $_POST['login'];
        $password = $_POST['password'];
        $name = $_POST['name'];
        $family = $_POST['lastname'];
        $date_reg = date("Y-m-d");
  			
        $query_login = ("SELECT id_users FROM users WHERE login='$login'");
        $sql = mysql_query($query_login) or die(mysql_error());
  			
        if (mysql_num_rows($sql) > 0) {
        	echo '<font color="red"><img border="0" src="error.gif" align="middle"> Пользователь с таким логином зарегистрирован!</font>';
        	}
        	else{
				$query = "INSERT INTO users (login, password, name, family, date_of_registration )
            	VALUES ('$login', '$mdPassword', '$name', '$family', '$date_reg')";
            	$result = mysql_query($query) or die(mysql_error());;
            	echo '<font color="green"><img border="0" src="ok.gif" align="middle"> Вы успешно зарегистрировались!</font><br><a href="index.php">На главную</a>';  								
            }
        }
    }   
?>
</div>
</body>
</html>