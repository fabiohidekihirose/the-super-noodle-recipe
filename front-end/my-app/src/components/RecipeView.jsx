import { useEffect, useState } from "react";

const RecipeView = (props) => {
  const [recipeData, setRecipeData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:3002/recipe?recipe=${props.chosenRecipe}`
    );
    const resData = await response.json();
    setRecipeData(resData);
  };

  useEffect(() => {
    fetchData();
  }, [props.chosenRecipe]);

  if (recipeData) {
    return (
      <div>
        <p>Name: {recipeData[0].name}</p>
        <p>Ingredients: {recipeData[0].ingredients}</p>
        <p>Instructions: {recipeData[0].instructions}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RecipeView;
