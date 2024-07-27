import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {

    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div>
                <p>Información de la categoria</p>
            </div>
        </>
    )
}

