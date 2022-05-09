import styles from "./Favorite.module.scss";
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getFavoriteCard } from "../../redux/store";
import Card from "../Card/Card";

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCard(state));
  console.log("favCArds", favoriteCards);

  if (favoriteCards.length === 0)
    return (
      <div className={styles.hero}>
        <PageTitle title="Favorite" />
        <p className={styles.subtitle}>UPS...No cards...</p>
      </div>
    );

  return (
    <div className={styles.hero}>
      <PageTitle title="Favorite" />
      <p className={styles.subtitle}>
        Your favorites <span className="fa fa-star-o"></span>
      </p>
      <ul className={styles.column}>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            cardId={card.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default Favorite;
