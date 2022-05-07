import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav>
      <container>
        <div className={styles.navbar}>
          <span className="fa fa-tasks"></span>
          <ul className={styles.list}>
            <li>Home</li>
            <li>Favorite</li>
            <li>About</li>
          </ul>
        </div>
      </container>
    </nav>
  );
};

export default NavBar;
