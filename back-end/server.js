const express = require("express");
const app = express();
const cors = require("cors");

const recipesModel = require("./src/recipes/recipesModel");

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3002;

app.get("/all-recipes", async (req, res) => {
  const recipes = await recipesModel.getAll();
  res.send(recipes);
});

app.get("/recipe", async (req, res) => {
  const chosenRecipe = await recipesModel.getById(req.query.recipe);
  res.send(chosenRecipe);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
