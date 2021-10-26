const { Router } = require("express");
const { Recipe, DietType } = require("../db");
const { Op, DataTypes } = require("sequelize");
const { API_KEY } = process.env;
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const createDietTypes = () => {
  const dietTypesArray = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto vegetarian",
    "ovo vegetarian",
    "vegan",
    "pescatarian",
    "paleo",
    "primal",
    "whole 30",
  ];

  const results = dietTypesArray.map(async (diet) => {
    const createDataType = await DietType.create({
      name: diet,
    });
  });

  return results;
};

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/:id", async (req, res) => {
  let { id } = req.params;

  if (!id) return res.status(404).send("invalid id");

  if (id.includes("-")) {
    const getlocalRecipeById = await Recipe.findOne({
      where: { id: id },
      include: {
        model: DietType,
        as: "diets",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    if (!getlocalRecipeById) return res.status(404).send("Not found");

    return res.send(getlocalRecipeById);
  }

  const getReceipeById = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );

  if (!getReceipeById) return res.status(404).send("Not found");

  res.send(getReceipeById.data);
});

router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  var url;

  if (name) {
    url = `https://api.spoonacular.com/recipes/complexSearch?titleMatch=${name}&number=100&addRecipeInformation=true&apiKey=${API_KEY}`;
  } else {
    url = `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`;
  }
  const apiRequest = await axios.get(url);
  let responseApi = apiRequest.data.results;
  let filterResponse;
  if (responseApi.length > 0) {
    filterResponse = responseApi.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      dishTypes: recipe.dishTypes,
      healthscore: recipe.healthScore,
      score: recipe.spoonacularScore,
      diets: recipe.diets,
    }));
  }
  let getRecipe;
  if (name) {
    getRecipe = await Recipe.findAll({
      where: { title: { [Op.iLike]: `%${name}%` } },
      include: {
        model: DietType,
        as: "diets",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  } else {
    getRecipe = await Recipe.findAll({
      include: {
        model: DietType,
        as: "diets",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  }

  if (getRecipe.length > 0 && responseApi.length > 0) {
    filterResponse = [...filterResponse, ...getRecipe];
  }
  if (responseApi.length === 0 && getRecipe.length > 0) {
    filterResponse = [...getRecipe];
  }

  if (!filterResponse) return res.status(404).send("Not items were found");

  res.status(200).send(filterResponse);
});

router.get("/types", async (req, res) => {
  let getTypes = await DietType.findAll();

  if (getTypes.length > 0) return res.send(getTypes);

  const promisesResult = await Promise.all(createDietTypes());

  getTypes = await DietType.findAll();
  res.send(getTypes);
});

router.post("/recipe", async (req, res) => {
  const { title, summary, score, healthscore, instructions, dietTypes } =
    req.body;
  try {
    const newRecipe = await Recipe.create({
      title,
      summary,
      score,
      healthscore,
      instructions,
    });

    dietTypes.forEach(async (types) => {
      let getDietType = await DietType.findOne({
        where: {
          name: types,
        },
      });
      if (!getDietType) {
        const promisesResult = await Promise.all(createDietTypes());
      }

      getDietType = await DietType.findOne({
        where: {
          name: types,
        },
      });

      newRecipe.addDiets(getDietType);
    });

    res.status(200).send(newRecipe);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

module.exports = router;
