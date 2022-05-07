import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav>
      <container>
        <div className={styles.navbar}>
          <span className="fa fa-tasks"></span>
          <ul className={styles.list}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/favorite">Favorite</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </container>
    </nav>
  );
};

export default NavBar;
