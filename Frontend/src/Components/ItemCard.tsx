import { ItemModel } from "../Models/ItemModel";
import styles from "./ItemCard.module.css"
import { ItemLink } from "./ItemLink";

export const ItemCard = ({ item }: {item: ItemModel}) => {
    
    return (
        <section className={styles.itemCard}>
            <ItemLink to={`/items/${item.id}`}>
                <img src={item.image} alt={item.title}/>
                <div className={styles.textBox}>
                <h3>{item.title}</h3>
                <h5>{item.price} kr</h5>
                </div>
            </ItemLink>
            
        </section>
    )
}