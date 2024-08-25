import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';


const DeleteRecipeButton = ({ recipeId }) => {
  const DeleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    DeleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};
export default DeleteRecipeButton;