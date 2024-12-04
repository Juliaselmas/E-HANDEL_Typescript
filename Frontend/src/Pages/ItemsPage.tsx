import { useEffect, useState } from "react";
import { ItemModel } from "../Models/ItemModel";
import { GridList } from "../Components/GridList";
import { LoadItems } from "../Utilities/LoadItems";

export const ItemsPage = () => {
    const [items, setItems] = useState<ItemModel[]>([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const itemsData = await LoadItems("/items");
        setItems(itemsData);
    };

return (
    <>
        <GridList items={items} />
    </>
);
};