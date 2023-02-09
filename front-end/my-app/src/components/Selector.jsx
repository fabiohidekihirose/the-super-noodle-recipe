import { useEffect, useState } from "react";

const Selector = (props) => {

    useEffect(()=>{
    console.log("i'm running the selector");
    },[])
  return (
    <div className="city-picker">
      Recipe:
      <select
        onChange={(e) => {
          let recipe = e.target.value;
          props.setRecipe(recipe ? recipe : null);
        }}
      >
        <option value="">No chosen recipe</option>
        {props.recipes.map((recipeOption) => (
          <option key={recipeOption.id} value={recipeOption.id}>
            {recipeOption.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;