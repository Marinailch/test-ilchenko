<?php if (isset($_POST["yourname"])) {
$to =  "marina_ilch@mail.ru";
// $from = 'vladimir@emis.com.ua';
$from = 'marina1981ilch@gmail.com';
$charset = "utf-8";
$subject = '=?'.$charset.'?B?'.base64_encode("Сообщение с сайта").'?=';
$headerss ="Content-type: text/html; charset=$charset\r\n";
$name = '=?'.$charset.'?B?'.base64_encode("От пользователя").'?=';  //Имя_отправителя   c//
$headerss.="From: $name <$from>\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s')."\r\n";
$msg = "Сообщение: <br>Имя: ".$_POST["yourname"].'<br>Телефон: '.$_POST["yourphone"].'<br>Сообщение: '.$_POST["yourmsg"].'<br>Город: '.$_POST["yourtown"].'<br>Email: '.$_POST["yourmail"];
mail($to, $subject, $msg, $headerss);
echo 'Сообщение успешно отправлено!';
}
?>