import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = (props) => {
  const DeleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <div>
      <button onClick={() => DeleteRecipe(props.recipeId)}>Delete Recipe</button>
    </div>
  );
};
export default DeleteRecipeButton;