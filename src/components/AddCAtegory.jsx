import { useState } from "react"

export const AddCAtegory = ({categories,setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    // Funcion para actualizar el estado del input
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    // Funcion para agregar la categoria al estado
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return; // Si el input esta vacio no se agrega la categoria
        
        setCategories([...categories, inputValue]); // Se agrega la categoria al estado
        setInputValue(''); // Se vacia el input cada vez que se agrega una categoria
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange } 
                />
        </form>
    )
}

 