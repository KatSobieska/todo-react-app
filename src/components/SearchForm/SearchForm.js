import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SearchForm = () => {
  const [searchString, setSearchString] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_SEARCHSTRING", searchString });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        searchString={searchString.toString()}
        onChange={(e) => setSearchString(e.target.value.toString())}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
