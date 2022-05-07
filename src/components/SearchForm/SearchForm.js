import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getSearchString, updateSearchString } from "../../redux/store";

const SearchForm = () => {
  const currentSearchString = useSelector(getSearchString);

  const [searchString, setSearchString] = useState(currentSearchString);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        searchString={searchString.toString()}
        value={searchString}
        onChange={(e) => setSearchString(e.target.value.toString())}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
