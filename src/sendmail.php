<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// От кого письмо
$mail->setForm('9149444@gmail.com')

// Кому отправить
$mail->addAddress('artemliradev@gmail.com');

// Тема письма
$mail->Subject = "Форма с сайта"

// Тело письма
$body = '<h1>Данные формы:</h1>';

if(trim(!empty($_POST['name']))){
  $body = '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['phone']))){
  $body = '<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
}

$mail->Body = $body;

// Отправляем
if(!$mail->send()){
  $message = 'Ошибка отправки';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>