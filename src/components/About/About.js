import styles from "./About.module.scss";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <div className={styles.title}>
      <PageTitle pageTitle="About" />
    </div>
  );
};

export default About;
