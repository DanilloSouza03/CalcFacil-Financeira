document.getElementById('payback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const investimento = parseFloat(document.getElementById('investimento').value);
    const retornoAnual = parseFloat(document.getElementById('retorno-anual').value);

    if (retornoAnual <= 0) {
        document.getElementById('resultado').innerHTML = "O retorno anual deve ser maior que zero.";
        return;
    }

    const payback = investimento / retornoAnual;
    const meses = 12 * payback

    document.getElementById('resultado').innerHTML = `<strong>O Payback Simples</strong> é de ${payback.toFixed(2)} anos, (aproximadamente ${meses.toFixed(0)} meses).`;
    document.getElementById('resultado').style.display = 'block';
});