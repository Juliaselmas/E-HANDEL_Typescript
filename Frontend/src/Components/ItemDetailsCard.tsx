import { ItemDetailsModel } from "../Models/ItemDetailsModel";
import styles from "./ItemDetailsCard.module.css"

export const ItemDetailsCard = ({ item }: {item: ItemDetailsModel}) => {
    return (
        <section>
            <div className={styles.itemCard}>
                <img src={item.image} alt={item.title}/>
                <img src={item.backgroundImage} alt={item.title} className={styles.backgroundImage}/>
                <div className={styles.textBox}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h5>{item.price}</h5>
                </div>
                
            </div>
        </section>
    )
}