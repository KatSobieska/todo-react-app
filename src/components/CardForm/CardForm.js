import styles from "./CardForm.module.scss";
import Button from "../Button/Button.js";
import TextInput from "../TextInput/TextInput.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CardForm = (props) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const columnId = props.columnId;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CARD", payload: { title, columnId } });
    setTitle("");
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
