"use strict";

import {
  createMultipleTags,
  createTags,
  expandHtml,
  createRecipeTags,
} from "./tag_functions";

const content = document.getElementById("app");
let allSavedRecipes = [];
let comparedRecipes = 0;

const loadRecipeSection = () => {
  const recipeSection = createTags("section", null, "recipeSection");
  recipeSection.style.width = "100vw";
  expandHtml(content, recipeSection);
};

const loadRecipeSidebar = () => {
  const recipeSidebar = createTags("nav", "hidden", "recipeSidebar");
  recipeSidebar.style.width = "0vw";
  expandHtml(content, recipeSidebar);
  const sidebarTitle = createTags(
    "h3",
    null,
    "sidebarTitle",
    "Gespeicherte Rezepte"
  );
  expandHtml(recipeSidebar, sidebarTitle);
};

const checkForSavedRecipe = (title) => {
  let titleCheck = true;
  for (let i = 0; i < allSavedRecipes.length; i++) {
    if (allSavedRecipes[i] === title) {
      titleCheck = false;
    }
  }
  if (titleCheck) {
    const recipeSidebar = document.getElementById("recipeSidebar");
    const recipeSection = document.getElementById("recipeSection");
    recipeSidebar.classList.remove("hidden");
    recipeSection.style.width = "80vw";
    recipeSidebar.style.width = "20vw";
    allSavedRecipes.push(title);
  }
  return titleCheck;
};

const removeSavedRecipe = (title) => {
  allSavedRecipes = allSavedRecipes.filter((x) => x !== title);
  if (allSavedRecipes.length === 0) {
    const recipeSidebar = document.getElementById("recipeSidebar");
    const recipeSection = document.getElementById("recipeSection");
    recipeSidebar.classList.add("hidden");
    recipeSidebar.style.width = "0vw";
    recipeSection.style.width = "100vw";
  }
};

export {
  loadRecipeSection,
  loadRecipeSidebar,
  checkForSavedRecipe,
  removeSavedRecipe,
  allSavedRecipes,
  comparedRecipes,
};
