<?php

header('Content-Type: application/json');

require_once __DIR__.DIRECTORY_SEPARATOR.'local.php';

try {
	$telegram = filter_input(INPUT_POST, 'telegram', FILTER_SANITIZE_STRING);
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

	$message = sprintf('User "%s" has requested code review', $telegram);

	$headers = [
		'From: "YourCodeReview.com" <noreply@yourcodereview.com>',
		'Reply-To: "YourCodeReview.com" <noreply@yourcodereview.com>',
		'X-Mailer: PHP/' . phpversion(),
		'MIME-Version: 1.0',
		'Content-type: text/html; charset=utf-8',
	];

	$result = mail($email, 'New review request', $message, implode("\r\n", $headers));
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
