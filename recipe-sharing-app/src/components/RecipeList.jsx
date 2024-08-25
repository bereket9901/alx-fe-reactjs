import RecipeDetails from './RecipeDetails';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <RecipeDetails key={recipe.id} recipeId={recipe.id} />
      ))}
    </div>
  );
};
export default RecipeList;