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

loadHeader();
loadInputSection();
loadRecipeSection();
loadFooter();

const content = document.getElementById("app");
const recipeSection = document.getElementById("recipeSection");
const finderButton = document.getElementById("finderButton");

class Recipe {
  constructor(
    title,
    difficulty,
    portions,
    ingredients,
    time,
    source,
    sourceURL,
    image
  ) {
    this.title = title;
    this.difficulty = difficulty;
    this.portions = portions;
    this.ingredients = ingredients;
    this.time = time / 60;
    this.source = source;
    this.sourceURL = sourceURL;
    this.image = image;
  }
}

const getRecipeList = async (input) => {
  const url = `https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=${input}&page=1&per_page=2`;
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
    await displayRecipes(result);
  } catch (error) {
    console.error(error);
  }
};

const displayRecipes = async (list) => {
  recipeSection.innerHTML = "";
  list.forEach((entry) => {
    let recipe = new Recipe(
      entry.title,
      entry.difficulty,
      entry.portions,
      entry.ingredients,
      entry.totalTime,
      entry.source_url,
      entry.source,
      entry.image_urls
    );
    createRecipeTags(recipe, recipeSection);
  });
};

finderButton.addEventListener("click", () => {
  let finderTextInput = document.getElementById("finderInput").value;
  finderTextInput = encodeURIComponent(finderTextInput);
  getRecipeList(finderTextInput);
});
