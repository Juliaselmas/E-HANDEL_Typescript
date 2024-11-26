import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../Models/Item";
import { LoadItems } from "../Utilities/LoadItems";

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>(); // Hämtar id från URL:en
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (id) {
      fetchItem(id);
    }
  }, [id]);

  const fetchItem = async (itemId: string) => {
    const items = await LoadItems(`/items`);
    const selectedItem = items.find((item) => item.id === Number(itemId));
    setItem(selectedItem || null);
  };

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{item.title}</h1>
      {/*<p>{item.description}</p>*/}
      <p>Price: {item.price} SEK</p>
      <img src={item.image} alt={item.title} />
    </>
  );
};
