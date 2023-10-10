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
import {
  comparedRecipes,
  loadRecipeSection,
  loadRecipeSidebar,
} from "./modules/recipe_section";
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
const filterButton = document.getElementById("filterButton");
const generatorButton = document.getElementById("generatorButton");
const compareAllButton = document.getElementById("compareAll");
const compareCounter = document.getElementById("compareCounter");
const compareWindowOuter = document.getElementById("compareWindowOuter");
const compareWindowInner = document.getElementById("compareWindowInner");
const closeCompareWindow = document.getElementById("closeCompareWindow");

let pageCounter = 0;
let filterMaxIng;
let filterMaxTime;
let filterDiet;

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

const getRecipeList = async (input, page, clearPage, maxIng, maxTime, diet) => {
  let url = `https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=${input}&page=${page}`;
  if (maxIng != "" && maxIng > 0) {
    url = url + `&ingLimit=${maxIng}`;
  }
  if (maxTime != "") {
    url = url + `&timeLimit=${maxTime}`;
  }
  if (diet != "") {
    url = url + `&diet=${diet}`;
  }
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c72a468f81msh5bef70481e9758fp184594jsnfcd5eea33aa0",
      "X-RapidAPI-Host": "gustar-io-deutsche-rezepte.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    await displayRecipes(result, clearPage);
  } catch (error) {
    console.error(error);
  }
};

const displayRecipes = async (list, clearPage) => {
  if (clearPage) {
    recipeSection.innerHTML = "";
  }
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
  addMoreRecipes();
};

const addMoreRecipes = () => {
  let moreRecipesButton = document.createElement("button");
  moreRecipesButton.classList.add("moreRecipesButton");
  moreRecipesButton.innerHTML = "Mehr Rezepte";
  recipeSection.appendChild(moreRecipesButton);
  moreRecipesButton.addEventListener("click", () => {
    let finderTextInput = document.getElementById("finderInput").value;
    finderTextInput = encodeURIComponent(finderTextInput);
    getRecipeList(
      finderTextInput,
      pageCounter,
      false,
      filterMaxIng,
      filterMaxTime,
      filterDiet
    );
    pageCounter++;
    moreRecipesButton.remove();
  });
};

const generateRecipe = async () => {
  const url =
    "https://gustar-io-deutsche-rezepte.p.rapidapi.com/generateRecipe";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "c72a468f81msh5bef70481e9758fp184594jsnfcd5eea33aa0",
      "X-RapidAPI-Host": "gustar-io-deutsche-rezepte.p.rapidapi.com",
    },
    body: {
      text: "Ein zuckerfreier Kuchen mit Cashews",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

/* generatorButton.addEventListener("click", () => {
  console.log(filterDiet);
}); */

finderButton.addEventListener("click", () => {
  pageCounter = 0;
  let finderTextInput = document.getElementById("finderInput").value;
  finderTextInput = encodeURIComponent(finderTextInput);
  filterMaxIng = document.getElementById("maxIngInput").value;
  filterMaxTime = document.getElementById("maxTimeInput").value * 60;
  filterDiet = document.getElementById("dietSelect").value;
  if (filterDiet === "Vegetarisch") {
    filterDiet = "vegetarian";
  } else if (filterDiet === "Vegan") {
    filterDiet = "vegan";
  } else {
    filterDiet = "";
  }
  getRecipeList(
    finderTextInput,
    pageCounter,
    true,
    filterMaxIng,
    filterMaxTime,
    filterDiet
  );
  pageCounter++;
});

filterButton.addEventListener("click", () => {
  const filterOptions = document.getElementById("filterOptions");
  filterOptions.classList.toggle("hidden");
});

compareAllButton.addEventListener("click", () => {
  const allReps = document.querySelectorAll(".recipeBox");
  console.log("allReps", allReps);
  allReps.forEach((rep) => {
    if (rep.classList.contains("compare")) {
      let recipeCopy = rep.cloneNode(true);
      recipeCopy.querySelectorAll("button").forEach((el) => el.remove());
      compareWindowInner.appendChild(recipeCopy);
    }
  });
  compareWindowOuter.style.zIndex = "20";
  compareWindowInner.style.zIndex = "21";
  compareWindowInner.style.gridTemplateColumns = `repeat(${comparedRecipes}, 300px)`;
});

closeCompareWindow.addEventListener("click", () => {
  compareWindowInner.innerHTML = "";
  compareWindowOuter.style.zIndex = "1";
  compareWindowInner.style.zIndex = "1";
  comparedRecipes = 0;
  const allReps = document.querySelectorAll(".recipeBox");
  allReps.forEach((rep) => {
    if (rep.classList.contains("compare")) {
      rep.classList.remove("compare");
    }
  });
  compareAllButton.classList.add("hidden");
  compareCounter.classList.add("hidden");
});
