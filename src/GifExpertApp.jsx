import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = ( newCategory ) => {
        // if( categories.includes(newCategory) ) return;
        const isEqual = categories.find( category => {
            if(category.toLowerCase() === newCategory.toLowerCase())
                return newCategory;
        });

        // Si el valor se encuentra en el array no se agrega
        if(!!isEqual) return;
        
        setCategories([ newCategory, ...categories ])
        // setCategories( cat => [...cat, 'X-Men'] ) // Otra opción
    }

    console.log('render');

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ event => onAddCategory(event) }
                // setCategories={ setCategories } 
            />

            {
                categories.map( (category) => (
                    <GifGrid key={ category } category={ category } />
                ))
            }

        </>
    )
}
