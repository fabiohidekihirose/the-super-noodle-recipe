const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const recipesModel = require("./src/recipes/recipesModel") ;

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

app.get("/recipe", async (req,res)=>{
    const recipes = await recipesModel.getAll();
    res.send(recipes);
})

app.get("/therecipe", async (req,res)=>{
    console.log("ENTERING THE ONE RECIPE")
    const recipes = await recipesModel.getById(req.query.recipe);
    console.log(recipes)
    res.send(recipes);
})