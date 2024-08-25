import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = (props) => {
  const editRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editRecipe({ id: props.recipe.id, title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Edit Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
