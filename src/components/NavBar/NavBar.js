import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <container>
        <div className={styles.navbar}>
          <span className="fa fa-tasks"></span>
          <ul className={styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </container>
    </nav>
  );
};

export default NavBar;
