import {useEffect, useState} from 'react';
import Selector from './components/Selector';
import RecipeView from './components/RecipeView';
import './App.css';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);

  const fetchData = async() => {
    const response = await fetch("http://localhost:3002/recipe");
    console.log(" running app ");
    const resData = await response.json();
    setRecipes(resData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Selector recipes={recipes} setRecipe={setRecipe}/>
      {recipe ? (<RecipeView recipe={recipe}/>) :
       (<div className="content-area info-msg">No recipe chosen.</div>)}
    </div>
  );
}

export default App;
