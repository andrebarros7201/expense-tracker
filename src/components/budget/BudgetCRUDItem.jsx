import styles from "../../styles/components/budget/budgetCrud.module.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AppContext } from "../../App.jsx";

export default function BudgetCRUDItem({ item }) {
  const { updateBudgetItem, deleteBudgetItem } = useContext(AppContext);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item);

  function handleIsEditing() {
    setIsEditing(true);
  }

  function handleSaveEdit(e) {
    e.preventDefault();
    updateBudgetItem(item, newItem);
    setIsEditing(false);
  }

  function handleCopyItemChange(field, value) {
    setNewItem({ ...item, [field]: value });
  }

  return (
    <div className={styles["budgetCRUDITem"]} data-testid="budgetCRUDITem">
      <div className={styles["budgetCRUDITem-top"]}>
        {!isEditing ? (
          <>
            <p>{item.name}</p>
            <p>{item.proportion}</p>
            <button onClick={handleIsEditing}>Edit</button>
            <button>{detailsOpen ? "Close" : "Open"} Details</button>
          </>
        ) : (
          <>
            <input
              type="text"
              id={"name"}
              value={newItem.name}
              onChange={(e) => handleCopyItemChange("name", e.target.value)}
            />
            <input
              type="number"
              id={"proportion"}
              min={0}
              value={newItem.proportion}
              onChange={(e) =>
                handleCopyItemChange("proportion", e.target.value)
              }
            />
            <button onClick={(e) => handleSaveEdit(e)}>Save</button>
            <button>{detailsOpen ? "Close" : "Open"} Details</button>
          </>
        )}
        <button onClick={() => deleteBudgetItem(item)}>Delete</button>
      </div>
      {detailsOpen && (
        <div className={styles["budgetCRUDItem-bottom"]}>
          {item.detail.map((itemDetail) => (
            <div key={itemDetail.name}>
              <p>{itemDetail.name}</p>
              <p>{itemDetail.proportion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

BudgetCRUDItem.propTypes = {
  item: PropTypes.object,
};
