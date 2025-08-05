import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !amount || !date) return;
    onAddExpense({ title, amount: parseFloat(amount), date });
    setTitle('');
    setAmount(0);
    setDate('');
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        min={0}
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button>Add Expnse</button>
    </form>
  );
}

export default ExpenseForm;
