<?php

/* https://api.telegram.org/bot645099356:AAGm5tzuKzlXev2EIJMIA8G5byPx95TolbU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


// $method = $_SERVER['REQUEST_METHOD'];

// //Script Foreach
// $c = true;
// if ( $method === 'POST' ) {

// 	$project_name = trim($_POST["project_name"]);
// 	$admin_email  = trim($_POST["admin_email"]);
// 	$site_email = "nickmychka@gmail.com";

// 	foreach ( $_POST as $key => $value ) {
// 		if ( $value != "" && $key != "project_name" && $key != "admin_email") {
// 			$message .= "
// 			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
// 				<td style='padding: 10px; border: #44b759 1px solid;'><b>$key</b></td>
// 				<td style='padding: 10px; border: #44b759 1px solid;'>$value</td>
// 			</tr>
// 			";
// 		}
// 	}
// }

// $message = "<table style='width: 100%;'>$message</table>";

// function adopt($text) {
// 	return '=?UTF-8?B?'.Base64_encode($text).'?=';
// }

// $headers = "MIME-Version: 1.0" . PHP_EOL .
// "Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <'.$site_email.'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;

// mail($admin_email, adopt($form_subject), $message, $headers );

$name = trim($_POST['Имя']);
$phone = trim($_POST['Телефон']);
$title = 'Новый контакт из сайта Bible Study Group';

$token = "645099356:AAGm5tzuKzlXev2EIJMIA8G5byPx95TolbU";
$chat_id = "-211992653";
$arr = array(
	'' => $title,
	'Меня зовут: ' => $name,
	'Мой телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
