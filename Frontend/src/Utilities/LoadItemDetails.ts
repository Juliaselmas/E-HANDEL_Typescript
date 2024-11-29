import axios from "axios";
import { ItemDetailsModel } from "../Models/ItemDetailsModel";

export const LoadItemDetails = async (itemId: string): Promise<ItemDetailsModel | null> => {
  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5005";
  const url = `${baseUrl}/items/${itemId}`; // Endast om API:et stöder detta

  try {
    const response = await axios.get(url);
    return response.data.data as ItemDetailsModel;
  } catch (error) {
    console.error("Error fetching item details:", error);
    return null;
  }
};
