import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
        <h2> crafty christmas</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/items">Products</NavLink>
          </li>
        {/*<NavLink> to="/cart"</NavLink>*/}
        </ul>
    </div>
  )
}
