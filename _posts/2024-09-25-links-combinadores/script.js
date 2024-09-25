// Pergunta de exemplo
const question = "Escreva uma função em JavaScript que retorne 'Hello, World!'.";
document.getElementById("question").innerText = question;

// Função para verificar a resposta
function submitAnswer() {
    const answer = document.getElementById("answer").value;
    const correctAnswer = `function sayHello() { return "Hello, World!"; }`;

    // Verificar se a resposta é correta
    if (answer.trim() === correctAnswer) {
        document.getElementById("feedback").innerText = "Correto! Parabéns!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerText = "Errado. Tente novamente.";
        document.getElementById("feedback").style.color = "red";
    }
}




