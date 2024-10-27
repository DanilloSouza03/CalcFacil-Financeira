document.getElementById('juros-compostos-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const inicial = parseFloat(document.getElementById('principal').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);

    const montante = inicial * (1 + taxa) ** tempo;
    const juros = montante - inicial;

    document.getElementById('resultado').innerHTML = `<strong>Juros:</strong> ${juros.toFixed(2)}<br><strong>Montante:</strong> ${montante.toFixed(2)}`;
    document.getElementById('resultado').style.display = 'block';
});