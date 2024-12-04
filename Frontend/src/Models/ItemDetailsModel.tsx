import { ItemModel } from "./ItemModel";

export interface ItemDetailsModel extends ItemModel {
    secondImage: string,
    description: string,
    quantity: number  
}

