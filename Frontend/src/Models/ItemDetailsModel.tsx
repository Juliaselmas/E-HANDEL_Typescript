import { ItemModel } from "./ItemModel";

export interface ItemDetailsModel extends ItemModel {
    backgroundImage: string,
    description: string,
    quantity: number  
}

