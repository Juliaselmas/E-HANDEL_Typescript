import { ItemModel } from "../Models/ItemModel";
import styles from "./ItemCard.module.css"
import { ItemLink } from "./ItemLink";

export const ItemCard = ({ item }: {item: ItemModel}) => {
    //const img: string = "/Users/julia/Desktop/KOD/JAVASCRIPT4/E-HANDEL/Frontend/images/xmas-cookies.jpg";
    return (
        <section className={styles.itemCard}>
            <ItemLink to={`/items/${item.id}`}>
                <img src={item.image} alt={item.title}/>
                <div className={styles.textBox}>
                <h3>{item.title}</h3>
                <h5>{item.price}</h5>
                </div>
            </ItemLink>
            
        </section>
    )
}