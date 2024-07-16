import styles from "../../styles/components/budget.module.css";
import containerComponent from "../../styles/container/containerComponent.module.css";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AppContext } from "../../App.jsx";

export default function BudgetTableItem({ item }) {
  const { updateBudgetItem, deleteBudgetItem } = useContext(AppContext);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item);

  function handleSaveEdit(e) {
    e.preventDefault();
    updateBudgetItem(item, newItem);
    setIsEditing(false);
  }

  function handleCopyItemChange(field, value) {
    setNewItem({ ...newItem, [field]: value });
  }

  return (
    <div
      className={containerComponent["container-table-item"]}
      data-testid="budgetCRUDITem"
    >
      <div className={styles["budget-table-top"]}>
        {!isEditing ? (
          <>
            <p>{item.name}</p>
            <p>{item.proportion} %</p>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
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
              <p>{itemDetail.proportion} %</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

BudgetTableItem.propTypes = {
  item: PropTypes.object,
};
