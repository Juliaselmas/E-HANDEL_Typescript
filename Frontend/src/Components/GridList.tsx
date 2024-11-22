import { Item } from "../Models/Item";
import { ItemCard } from "./ItemCard";

export const GridList = ({items}: {items: Item[]}) => {
    return (
        <section className="grid-list">
          {items.map((item: Item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </section>
      );
    };