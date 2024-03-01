function agendarSala() {
    var nome = document.getElementById("nome").value;
    var ambiente = document.getElementById("ambiente").value;
    var data = document.getElementById("data").value;
    var hora = document.getElementById("hora").value;

    // Exibir os dados em um alerta
    alert("Agendamento Confirmado:\n\nNome: " + nome + "\nAmbiente: " + ambiente + "\nData: " + data + "\nHora: " + hora);
}