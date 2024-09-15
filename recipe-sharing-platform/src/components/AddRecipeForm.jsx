import { useState } from 'react';

const AddRecipeForm = () => {
  // State to hold the form data and validation
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const  name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value, // Use the name attribute to update the corresponding state
    });
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    
    // Check if title is empty
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    }
    
    // Check if ingredients is empty or has fewer than two items
    const ingredientsArray = formData.ingredients.split(',').map(item => item.trim());
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredientsArray.length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients, separated by commas.';
    }

    // Check if steps is empty
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (validate()) {
      // If valid, process the form data
      console.log('Form submitted:', formData);

      // Clear the form
      setFormData({
        title: '',
        ingredients: '',
        steps: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 mb-2">Ingredients (comma separated)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
            rows="4"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.steps ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
            rows="4"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
