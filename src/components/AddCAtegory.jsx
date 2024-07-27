import { useState } from "react"

export const AddCAtegory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    // Funcion para actualizar el estado del input
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    // Funcion para agregar la categoria al estado
    const onSubmit = (e) => {
        e.preventDefault();
        const newCategory = inputValue.trim();
        if(newCategory.length <= 1) return; // Si el input esta vacio no se agrega la categoria

        onNewCategory(newCategory);
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

 