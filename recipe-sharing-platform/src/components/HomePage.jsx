import { useState, useEffect } from 'react'
import data from '../data.json';


export default function HomePage() {
    const [recipeData, setRecipeData] = useState();
    useEffect(() => {
        setRecipeData(data);
    }, [])

    return (<>
        <h1>Recipe</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {recipeData && recipeData.map((recipe, index) => {
                return (
                    <div className='bg-slate-800 px-1 py-5 m-10 w-72 shadow-blue-900 shadow-lg rounded-3xl hover:shadow-2xl hover:shadow-blue-500' key={index}>
                        <img src={recipe.image} className='mx-auto m-5' alt="recipe-image" />
                        <h2 className='font-bold text-lg'>{recipe.title}</h2>
                        <p className='text-sm'>{recipe.summary}</p>
                    </div>
                );
            })}
        </div>
    </>

    );
}
