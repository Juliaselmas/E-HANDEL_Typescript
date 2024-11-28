//import React from "react";
import { useEffect, useState } from "react";
import { ItemModel } from "../Models/ItemModel";
import { GridList } from "../Components/GridList";
import { LoadItems } from "../Utilities/LoadItems";
//import { useNavigate } from "react-router-dom";


export const ItemsPage = () => {
    const [items, setItems] = useState<ItemModel[]>([]);
    //const navigate = useNavigate();


    useEffect(() => {
        loadItems();
    }, []);


    const loadItems = async () => {
        const itemsData = await LoadItems("/items");
        setItems(itemsData);
    };

return (
    <>
    <h1>ItemsPage</h1>
   
        <GridList items={items} />
    
    </>
);
};