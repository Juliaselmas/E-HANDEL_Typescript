import { Item } from "../Models/Item";

export const ItemCard = ({ item }: {item: Item}) => {
    //const img: string = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
        <section>
            <div className="item-card">
                <h3>{item.title}</h3>
                <h5>{item.price}</h5>
               {/* <img src={item.image} alt={item.title}/> */} 

            </div>
        </section>
    )
}