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
import { loadRecipeSection, loadRecipeSidebar } from "./modules/recipe_section";
import { loadFooter } from "./modules/footer";
import { loadCompareWindow } from "./modules/compare_window";

loadHeader();
loadInputSection();
loadRecipeSection();
loadRecipeSidebar();
loadFooter();
loadCompareWindow();

const content = document.getElementById("app");
const recipeSection = document.getElementById("recipeSection");
const finderButton = document.getElementById("finderButton");
const compareAllButton = document.getElementById("compareAll");
const compareWindowOuter = document.getElementById("compareWindowOuter");
const compareWindowInner = document.getElementById("compareWindowInner");

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

compareAllButton.addEventListener("click", () => {
  const allReps = document.querySelectorAll(".recipeBox");
  console.log("allReps", allReps);
  allReps.forEach((rep) => {
    if (rep.classList.contains("compare")) {
      console.log(rep);
      compareWindowInner.appendChild(rep);
    }
  });
  compareWindowOuter.style.zIndex = "20";
  compareWindowInner.style.zIndex = "21";
});
