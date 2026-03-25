function generateCollatz() {
    const input = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    let n = parseInt(input.value);

    // Validálás
    if (isNaN(n) || n < 1) {
        resultDiv.innerHTML = "<p style='color:red;'>Kérlek, adj meg egy 0-nál nagyobb számot!</p>";
        return;
    }

    resultDiv.innerHTML = "<strong>Sorozat:</strong><br>";
    let steps = 0;

    // Az algoritmus magja
    while (n !== 1) {
        resultDiv.innerHTML += `<div class='step'>${steps + 1}. lépés: <b>${n}</b></div>`;
        
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (3 * n) + 1;
        }
        steps++;
    }

    // Utolsó elem (az 1-es)
    resultDiv.innerHTML += `<div class='step'>${steps + 1}. lépés: <span class='highlight'>1</span></div>`;
    resultDiv.innerHTML += `<p>Összesen: <b>${steps}</b> lépés.</p>`;
}