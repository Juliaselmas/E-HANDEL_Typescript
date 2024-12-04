import { ItemDetailsModel } from "../Models/ItemDetailsModel";
import styles from "./ItemDetailsCard.module.css";

export const ItemDetailsCard = ({ item }: { item: ItemDetailsModel }) => {
  return (
    <section className={styles.itemDetailsCard}>
      <img src={item.image} alt={item.title} className={styles.itemImage} />
      <div className={styles.textBox}>
        <h3>{item.title}</h3>
        <h5>{item.price} kr</h5>
        <p>{item.description}</p>
        <p className={styles.stock}>In stock: {item.quantity}</p>
        {/*<button>Add to cart </button>*/}
       
      </div>
    </section>
  );
};
