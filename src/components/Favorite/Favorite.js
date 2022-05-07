import styles from "./Favorite.module.scss";
import PageTitle from "../PageTitle/PageTitle";

const Favorite = () => {
  return (
    <div className={styles.title}>
      <PageTitle pageTitle="Favorite" />
    </div>
  );
};
export default Favorite;
