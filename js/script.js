
function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    // Crear un array de objetos con información de préstamos
    const loans = [
        { id: 1, amount: 1000, interest: 5, years: 5 },
        { id: 2, amount: 2000, interest: 6, years: 3 },
        { id: 3, amount: 3000, interest: 7, years: 10 },
    ];

    // Filtrar los préstamos que tienen un interés mayor a 6%
    const highInterestLoans = loans.filter(loan => loan.interest > 6);
    console.log(highInterestLoans); // [{ id: 3, amount: 3000, interest: 7, years: 10 }]

    // Encontrar el préstamo con el id 2
    const loan2 = loans.find(loan => loan.id === 2);
    console.log(loan2); // { id: 2, amount: 2000, interest: 6, years: 3 }

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').textContent = `Pago Mensual: $${monthly.toFixed(2)}`;
        document.getElementById('total-payment').textContent = `Pago Total: $${(monthly * calculatePayments).toFixed(2)}`;
        document.getElementById('total-interest').textContent = `Interés Total: $${((monthly * calculatePayments) - principal).toFixed(2)}`;

        document.getElementById('results').style.display = 'block';
    } else {
        alert('Por favor, ingrese valores válidos');
    }
}