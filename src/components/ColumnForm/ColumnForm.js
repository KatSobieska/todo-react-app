import styles from "./ColumnForm.module.scss";
import Button from "../Button/Button.js";
import TextInput from "../TextInput/TextInput.js";
import { useState } from "react";

const ColumnForm = (props) => {
  const [value, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: value, icon: icon });
    setTitle("");
    setIcon("");
  };

  const TextInput = (props) => {
    return (
      <input
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      Title:
      <TextInput placeholder="Title..." />
      Icon:
      <TextInput placeholder="Icon..." />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
