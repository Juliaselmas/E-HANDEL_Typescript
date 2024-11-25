import { Item } from "../Models/Item";
import styles from "./ItemCard.module.css"

export const ItemCard = ({ item }: {item: Item}) => {
    //const img: string = "/Users/julia/Desktop/KOD/JAVASCRIPT4/E-HANDEL/Frontend/images/xmas-cookies.jpg";
    return (
        <section>
            <div className={styles.itemCard}>
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <h5>{item.price}</h5>
            </div>
        </section>
    )
}