import { useEffect, useState } from "react";
import Selector from "./components/Selector";
import RecipeView from "./components/RecipeView";
import "./App.css";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState(null);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3002/all-recipes");
    const resData = await response.json();
    setAllRecipes(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Selector allRecipes={allRecipes} setChosenRecipe={setChosenRecipe} />
      {chosenRecipe ? (
        <RecipeView chosenRecipe={chosenRecipe} />
      ) : (
        <div>No recipe chosen.</div>
      )}
    </div>
  );
}

export default App;
