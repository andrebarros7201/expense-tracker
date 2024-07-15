import styles from "../../styles/components/budget/budgetCrud.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function BudgetCRUDItem({ item }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [copyItem, setCopyItem] = useState(item);

  function handleIsEditing() {
    setIsEditing(true);
  }

  function handleSaveEdit() {
    setIsEditing(false);
  }

  function handleCopyItemChange(field, value) {
    setCopyItem({ ...item, [field]: value });
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
              value={copyItem.name}
              onChange={(e) => handleCopyItemChange("name", e.target.value)}
            />
            <input
              type="number"
              id={"proportion"}
              min={0}
              value={copyItem.proportion}
              onChange={(e) =>
                handleCopyItemChange("proportion", e.target.value)
              }
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button>{detailsOpen ? "Close" : "Open"} Details</button>
          </>
        )}
        <button>Delete</button>
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
