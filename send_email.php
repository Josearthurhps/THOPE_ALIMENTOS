<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configurações de email
    $to = "seu_email@example.com";
    $subject = "Nova mensagem de contato de $name";
    $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";

    // Envia o email
    if (mail($to, $subject, $body)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar o email.";
    }
} else {
    echo "Este arquivo não deve ser acessado diretamente.";
}
?>
