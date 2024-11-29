import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailsModel } from "../Models/ItemDetailsModel";
import { LoadItemDetails } from "../Utilities/LoadItemDetails";
import { ItemDetailsCard } from "../Components/ItemDetailsCard";

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemDetailsModel | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const loadItemDetails = async () => {
      if (id) {
        const details = await LoadItemDetails(id);
        if (details) {
          setBackgroundImage(details.backgroundImage);
          setItem(details);
        }
      }
    };
    loadItemDetails();
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="itemPage"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="backgroundImage" />
      <div className="contentContainer">
        <ItemDetailsCard key={item.id} item={item} />
      </div>
    </div>
  );
};
