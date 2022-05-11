import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCardFavorite } from "../../redux/cardsRedux";
import styles from "./Card.module.scss";
import clsx from "clsx";

const Card = (props) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const cardId = props.cardId;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.buttons}>
        <button
          className={clsx(
            styles.favoriteButton,
            isFavorite && styles.isFavorite
          )}
          onClick={handleSubmit}
        >
          <span className="fa fa-star-o"></span>
        </button>
        <button className={styles.removeButton} onClick={handleSubmit}>
          <span className="fa fa-trash"></span>
        </button>
      </div>
    </li>
  );
};

export default Card;
