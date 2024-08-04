document.addEventListener("DOMContentLoaded", function() {
    const transactions = [
        { date: '2023-07-01', type: 'Top Up', amount: 50, details: 'Visa ending 6900' },
        { date: '2023-07-05', type: 'Transfer', amount: 100, details: 'To: John Doe, Account: 12345678' },
        // Add more transactions as needed
    ];

    const transactionList = document.getElementById('transactionList');

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.date} - ${transaction.type}: $${transaction.amount} (${transaction.details})`;
        transactionList.appendChild(listItem);
    });
});
