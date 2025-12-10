import { useState } from "react"
import "./Card.css"

function Card({ id, image, info, price, name, removeTour }: { id: number; image: string; info: string; price: string; name: string; removeTour: (id: number) => void }) {
    const [readmore,setReadmore]= useState(false);
    const description = readmore ? info:`${info.substring(0,20)}...`;
    return (
        <div className="card" >
            <img src={image} className="image"></img>
            <div className="tourinfo">
                <div className="tourdetails">
                    <h4 className="tourprice text-fuchsia-700">{price}</h4>
                    <h4 className="tourname text-rose-500">{name}</h4>
                </div>

                <div className="desc font-medium">
                    {description}
                    <span className="readmore text-red-400" onClick={()=>setReadmore(!readmore)}>
                        {readmore ?` <<<Show less`:` Read More`}
                    </span>
                </div>
            </div>
            <button className = "btnred bg-red-300 border-2 border-red-400 p-2 rounded-lg hover:bg-red-200 transition-all" onClick={()=>removeTour(id)} >Not Interested</button>
        </div>
    );
}

export default Card;