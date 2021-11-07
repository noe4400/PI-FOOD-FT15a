const { Router } = require("express");
const recipeController = require("../controller/recipeController");
const router = Router();

router
  .route("/api/v2/recipes")
  .get(recipeController.getRecipes)
  .post(recipeController.createRecipe);

router.route("/api/v2/recipes/:id").get(recipeController.getRecipe);
router.route("/api/v2/recipes/diets/types").get(recipeController.getTypes);

module.exports = router;
