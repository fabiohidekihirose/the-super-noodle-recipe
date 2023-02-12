const Selector = (props) => {
  return (
    <div>
      Recipe:
      <select
        onChange={(e) => {
          let recipe = e.target.value;
          props.setChosenRecipe(recipe ? recipe : null);
        }}
      >
        <option value="">No chosen recipe</option>
        {props.allRecipes.map((recipeOption) => (
          <option key={recipeOption.id} value={recipeOption.id}>
            {recipeOption.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
