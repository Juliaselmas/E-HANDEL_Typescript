import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailsModel } from "../Models/ItemDetailsModel";
import { LoadItemDetails } from "../Utilities/LoadItemDetails";
import { ItemDetailsCard } from "../Components/ItemDetailsCard";

export const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemDetailsModel | null>(null);

  useEffect(() => {
    const loadItemDetails = async () => {
      if (id) {
        const details = await LoadItemDetails(id);
        if (details) {
          
          setItem(details);
        }
      }
    };
    loadItemDetails();
  }, [id]);

  if (!item) {
    return <p>Not able to load item. Please try again.</p>;
  }

  return (
    <div
      className="itemPage">
      <div className="contentContainer">
        <ItemDetailsCard key={item.id} item={item} />
      </div>
    </div>
  );
};
