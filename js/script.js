function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').textContent = `Pago Mensual: $${monthly.toFixed(2)}`;
        document.getElementById('total-payment').textContent = `Pago Total: $${(monthly * calculatePayments).toFixed(2)}`;
        document.getElementById('total-interest').textContent = `Interés Total: $${((monthly * calculatePayments) - principal).toFixed(2)}`;

        document.getElementById('results').style.display = 'block';
    } else {
        alert('Por favor, ingrese valores válidos');
    }
}
