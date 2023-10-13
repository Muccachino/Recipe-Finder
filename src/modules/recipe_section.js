"use strict";

import {
  createMultipleTags,
  createTags,
  expandHtml,
  createRecipeTags,
  createAIRecipeTag,
} from "./tag_functions";
import { getRecipeList } from "./fetchAPI_functions";
import { Recipe, AIRecipe } from "./recipe_Classes";
import {
  pageCounter,
  filterMaxIng,
  filterMaxTime,
  filterDiet,
} from "./input_section";

const content = document.getElementById("app");
let allSavedRecipes = [];
let comparedRecipes = 0;

//Erstellen der HTML Elemente für Rezept und Sidebar Section
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

//Erstellen der Rezepte und die Darstellung
const displayRecipes = async (list, clearPage) => {
  const recipeSection = document.getElementById("recipeSection");
  //Löschen der Section Inhalte falls eine neue Suche gestartet wird
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

//Erstellen und Funktion für den Button um mehr Rezepte anzeigen zu lassen
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

//Prüfung ob ein Rezept schon in der Sidebar ist
const checkForSavedRecipe = (title) => {
  let titleCheck = true;
  for (let i = 0; i < allSavedRecipes.length; i++) {
    if (allSavedRecipes[i] === title) {
      titleCheck = false;
    }
  }
  //Öffnen der Sidebar, wenn ein Rezept gespeichert wird
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

//Entfernen eines Rezepts aus der Liste und Schließen der Sidebar, falls sie leer ist
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

//Erstellen der KI Rezepte und die Darstellung
const displayAIRecipe = (rec) => {
  let recipe = new AIRecipe(
    rec.title,
    rec.portions,
    rec.ingredients,
    rec.totalTime,
    rec.steps
  );
  createAIRecipeTag(recipe, recipeSection);
};

export {
  loadRecipeSection,
  loadRecipeSidebar,
  checkForSavedRecipe,
  removeSavedRecipe,
  allSavedRecipes,
  comparedRecipes,
  displayRecipes,
  displayAIRecipe,
};
