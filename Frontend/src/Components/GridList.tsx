import { Item } from "../Models/Item";
import { ItemCard } from "./ItemCard";
import styles from "./GridList.module.css"

export const GridList = ({items}: {items: Item[]}) => {
    return (
        <section className={styles.gridList}>
          {items.map((item: Item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </section>
      );
    };