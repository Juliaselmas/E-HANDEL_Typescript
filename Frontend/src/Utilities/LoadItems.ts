import axios from 'axios';
import { ItemModel } from '../Models/ItemModel';

export const LoadItems = async (endpoint: string): Promise<ItemModel[]> => {
    const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5005";
    const url = `${baseUrl}${endpoint}`;
   
try {
    const result = await axios.get(url);
    return result.data.data;
} catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};