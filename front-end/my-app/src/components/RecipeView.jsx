import { useEffect, useState } from "react";

const RecipeView = (props) => {
  const [recipeData, setRecipeData] = useState(null);

  const fetchData = async() => {
   const response = await fetch(`http://localhost:3002/therecipe?recipe=${props.recipe}`);
   const resData = await response.json();
   setRecipeData(resData);
    console.log("i'm used here");;
  }

  useEffect(() => {
    fetchData();  
  }, [])

  if (recipeData) {
    return <div>
    <p>Name: {recipeData[0].name}</p>
    <p>Ingredients: {recipeData[0].ingredients}</p>
    <p>Instructions: {recipeData[0].instructions}</p>
  </div>
  } else {
    return <div></div>
  }
  
}

export default RecipeView;