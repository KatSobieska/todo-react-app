import styles from "./PageTitle.module.scss";

const PageTitle = (props) => {
  return <h2 className={styles.title}>{props.pageTitle}</h2>;
};
export default PageTitle;
