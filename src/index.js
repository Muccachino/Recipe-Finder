"use strict";

import "./styles.scss";
import {
  createTags,
  createMultipleTags,
  expandHtml,
  createRecipeTags,
} from "./modules/tag_functions";
import { loadHeader } from "./modules/header";
import { loadInputSection } from "./modules/input_section";
import { loadRecipeSection } from "./modules/recipe_section";
import { loadFooter } from "./modules/footer";

const content = document.getElementById("app");
const recipeSection = document.getElementById("recipeSection");

class Recipe {
  constructor(
    title,
    difficulty,
    portions,
    ingredients,
    time,
    source,
    sourceURL
  ) {
    this.title = title;
    this.difficulty = difficulty;
    this.portions = portions;
    this.ingredients = ingredients;
    this.time = time / 60;
    this.source = source;
    this.sourceURL = sourceURL;
  }
}

const getRecipeList = async () => {
  const url =
    "https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=K%C3%A4se";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1f98616057msh05389b767bd090fp133c7bjsn34cb1de9bfa7",
      "X-RapidAPI-Host": "gustar-io-deutsche-rezepte.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

//const recipeList = getRecipeList();

const displayRecipes = (list) => {
  list.forEach((entry) => {
    let recipe = new Recipe(
      entry.title,
      entry.difficulty,
      entry.portions,
      entry.ingredients,
      entry.totalTime,
      entry.source_url,
      entry.source
    );
    createRecipeTags(recipe, recipeSection);
  });
};

displayRecipes(recipeList);

loadHeader();
loadInputSection();
loadRecipeSection();
loadFooter();
