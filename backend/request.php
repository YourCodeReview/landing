<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\MailerException;

header('Content-Type: application/json');

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/local.php';

function sendEmail(string $email, string $subject, string $message): bool {
	$mail = new PHPMailer(true);

	//Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    // $mail->isSMTP();                                            //Send using SMTP
    // $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
    // $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    // $mail->Username   = 'user@example.com';                     //SMTP username
    // $mail->Password   = 'secret';                               //SMTP password
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    // $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`


	$mail->setFrom('noreply@yourcodereview.com', 'YourCodeReview.com');

	$mail->addAddress($email);
	$mail->Subject = $subject;
	$mail->msgHTML($message);

	return $mail->send();
}

try {
	$telegram = filter_input(INPUT_POST, 'telegram', FILTER_SANITIZE_STRING);
    /*$telegram = filter_var(
        $telegram, 
        FILTER_VALIDATE_REGEXP,
        [
            'options' => ['regexp' => "#^(https:\/\/t\.me\/|@)?[\w]{5,}|\+\d{7,}$#"],
        ]
    );*/
	if (empty($telegram)) {
		throw new Exception('"telegram" is not valid!');
	}

    if (!defined('REQUESTS_EMAIL')) {
        throw new Exception('"REQUESTS_EMAIL" is not defined!');
    }

	$email = filter_var(REQUESTS_EMAIL, FILTER_SANITIZE_EMAIL);
	if (empty($email)) {
		throw new Exception('"REQUESTS_EMAIL" is not valid email!');
	}

    $utm_content = $_POST['utm_content'] ?? '-';
    $add_name_parameter = $_POST['add_name_parameter'] ?? '-';

	$message = "User '{$telegram}' has requested code review".PHP_EOL.
        "utm_content: {$utm_content}".PHP_EOL.
        "add_name_parameter: {$add_name_parameter}".PHP_EOL;

    $recipients = [
        $email,
    ];
    if (defined('OBSERVER_EMAIL')) {
        $recipients[] = $email;
    }

	$result = sendEmail(implode(',', $recipients), 'New review request', $message);
	if (!$result) {
		throw new Exception('Failed to send email!');
	}

	$response = ['result' => true];
} catch (Throwable $exception) {
	$response = [
		'result' => false,
		'error' => $exception->getMessage(),
	];
}
echo json_encode($response);
exit(0);
