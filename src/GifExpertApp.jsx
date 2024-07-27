import { useState } from "react"
import { AddCAtegory } from "./components/AddCAtegory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCAtegory
                categories={categories}
                setCategories={setCategories}
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