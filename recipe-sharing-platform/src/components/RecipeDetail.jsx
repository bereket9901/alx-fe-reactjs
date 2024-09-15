import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/path/to/data.json'); // Replace with the correct path
        const data = await response.json();
        const recipeDetails = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeDetails);
      } catch (error) {
        console.error('Error fetching recipe data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{recipe.name}</h1>
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
      />

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
