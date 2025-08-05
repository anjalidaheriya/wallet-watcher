import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';
import { useState } from 'react';

const initialExpneses = [
  {
    id: 1,
    title: 'Groceries',
    amount: 60,
    date: '2025-05-01',
  },
  {
    id: 2,
    title: 'House Rent',
    amount: 600,
    date: '2025-05-02',
  },
  {
    id: 3,
    title: 'Internet Bills',
    amount: 50,
    date: '2025-04-25',
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpneses);

  function addExpense(expense) {
    setExpenses((prevExpenses) => [
      {
        ...expense,
        id: Date.now(),
      },
      ...prevExpenses,
    ]);
  }

  function handleDelete(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }
  return (
    <div className="tracker">
      <h1>React Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
