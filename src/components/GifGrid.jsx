import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {
    
    useEffect(() => {
        getGifs(category);
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div>
                <p>Información de la categoria</p>
            </div>
        </>
    )
} 