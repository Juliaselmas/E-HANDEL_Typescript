import { ItemModel } from "../Models/ItemModel";
import { ItemCard } from "./ItemCard";
import styles from "./GridList.module.css"

export const GridList = ({items}: {items: ItemModel[]}) => {
    return (
        <section className={styles.gridList}>
          {items.map((item: ItemModel) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </section>
      );
    };