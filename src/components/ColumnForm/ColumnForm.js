import styles from "./ColumnForm.module.scss";
import Button from "../Button/Button.js";
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

  return (
    <form onSubmit={handleSubmit}>
      Title:{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:{" "}
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
