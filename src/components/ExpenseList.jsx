function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) return <p>No expenses yet.</p>;
  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          <div>
            <h3>{expense.title}</h3>
            <p>
              ${expense.amount.toFixed(2)} - {expense.date}
            </p>
          </div>
          <button className="delete-btn" onClick={() => onDelete(expense.id)}>
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
