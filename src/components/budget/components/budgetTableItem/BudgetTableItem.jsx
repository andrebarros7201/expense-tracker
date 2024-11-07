import styles from "../budget.module.scss";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { BudgetContext } from "../../Budget.jsx";

export default function BudgetTableItem({ item }) {
  const { updateBudgetItem, deleteBudgetItem } = useContext(BudgetContext);
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

  return <></>;
}

BudgetTableItem.propTypes = {
  item: PropTypes.object,
};
