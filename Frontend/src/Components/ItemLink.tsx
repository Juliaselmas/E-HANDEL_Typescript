import { Link } from "react-router-dom";
import styles from "./ItemLink.module.css"

export const ItemLink = ({ to, children}: {to:string; children: React.ReactNode }) => {
    return (
        <Link to={to} className={styles.itemLink}>
            {children}
        </Link>
    )
};