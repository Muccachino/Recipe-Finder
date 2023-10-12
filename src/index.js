"use strict";

import "./styles.scss";
import { loadHeader } from "./modules/header";
import {
  loadInputSection,
  loadEventlistener_Input,
} from "./modules/input_section";
import { loadRecipeSection, loadRecipeSidebar } from "./modules/recipe_section";
import { loadFooter } from "./modules/footer";
import {
  loadCompareWindow,
  loadEventlistener_Compare,
} from "./modules/compare_window";

loadHeader();
loadInputSection();
loadRecipeSection();
loadRecipeSidebar();
loadFooter();
loadCompareWindow();
loadEventlistener_Compare();
loadEventlistener_Input();

/* const loadLocalStorage = () => {
  const storagedRecipes = JSON.parse(localStorage.getItem("recipeBoxes"));
  console.log(storagedRecipes);
  if (storagedRecipes) {
    const sideBar = document.getElementById("recipeSidebar");

    storagedRecipes.forEach((recipeBox) => {
      const box = document.createElement("div");
      box.innerHTML = recipeBox;
      sideBar.appendChild(box);
    });
  }
};

loadLocalStorage(); */
