import React from "react";
import { useEffect, useState } from "react";
import { Item } from "../Models/Item";
import { GridList } from "../Components/GridList";
import { LoadItems } from "../Utilities/LoadItems";


export const ItemsPage = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        loadItems();
    }, []);


const loadItems = async() => {
    setItems(await LoadItems("/items"));

};

return (
    <>
    <h1>ItemsPage</h1>
    <section>
        <GridList items={items} />
    </section>
    </>
);
};