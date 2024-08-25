import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
