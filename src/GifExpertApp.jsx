import { useState } from "react"
import { AddCAtegory } from "./components/AddCAtegory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onNewCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCAtegory
                onNewCategory={onNewCategory}
            />

            <ol>
                {
                    categories.map(category => (
                        <li key={category}>{category}</li>
                    ))
                }
            </ol>
        </>
    )
}