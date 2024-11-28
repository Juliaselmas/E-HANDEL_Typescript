import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailsModel } from "../Models/ItemDetailsModel";
import { LoadItemDetails } from "../Utilities/LoadItemDetails";
import { ItemDetailsCard } from "../Components/ItemDetailsCard";

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemDetailsModel | null>(null);

  useEffect(() => {
    if (id) {
      loadItemDetails(id);
    }
  }, [id]);

  const loadItemDetails = async (itemId: string) => {
    const details = await LoadItemDetails(itemId);
    setItem(details);
  };

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ItemDetailsCard key={item.id} item={item} />
    </>
  );
};
