const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.post("/create", recipeController.createRecipe);
router.get("/getAll", recipeController.getAllRecipes);
router.get("/get/:id", recipeController.getRecipeById);
router.put("/edit/:id", recipeController.updateRecipe);
router.delete("/delete/:id", recipeController.deleteRecipe);

module.exports = router;
