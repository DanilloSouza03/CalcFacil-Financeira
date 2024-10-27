document.getElementById('juros-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const inicial = parseFloat(document.getElementById('principal').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);

    const juros = inicial * taxa * tempo;
    const total = inicial + juros;

    document.getElementById('resultado').innerHTML = `<strong>Juros:</strong> ${juros.toFixed(2)}<br><strong>Total:</strong> ${total.toFixed(2)}`;
    document.getElementById('resultado').style.display = 'block';
});