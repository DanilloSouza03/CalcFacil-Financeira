document.getElementById('roi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const lucro = parseFloat(document.getElementById('lucro').value);
    const investimento = parseFloat(document.getElementById('investimento').value);

    const roi = (lucro - investimento) / investimento * 100;

    document.getElementById('resultado').innerHTML = `<strong>ROI:</strong> ${roi.toFixed(2)}%`;
    document.getElementById('resultado').style.display = 'block';
});