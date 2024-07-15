import { useState } from "react";

export default function BudgetAddItem() {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div>
      {!isAdding ? (
        <button>Add New Item</button>
      ) : (
        <>
          <input type="text" />
          <input type="number" />
        </>
      )}
    </div>
  );
}
