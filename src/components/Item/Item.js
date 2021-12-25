import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteGradient } from "../../redux/gradientOperations";
import styles from "./Item.module.css";
import GradientBlock from "../GradientBlock/GradientBlock";

export default function Item({ item }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const editIconHandler = (e) => {
    const li = e.target.closest("LI");
    history.push(`/edit/${li.id}`);
  };

  const deleteIconHandler = (e) => {
    const li = e.target.closest("LI");
    dispatch(deleteGradient(li.id));
  };

  return (
    <li key={item.id} id={item.id} className={styles.item}>
      <GradientBlock item={item} />

      <button className={styles.button} onClick={editIconHandler}>
        Edit
      </button>
      <button className={styles.button} onClick={deleteIconHandler}>
        Delete
      </button>
      </li>
  );
}
