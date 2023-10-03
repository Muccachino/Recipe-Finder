"use strict";

import "./styles.scss";
import {
  createTags,
  createMultipleTags,
  expandHtml,
} from "./modules/tag_functions";
import { loadHeader } from "./modules/header";
import { loadInputSection } from "./modules/input_section";
import { loadRecipeSection } from "./modules/recipe_section";
import { loadFooter } from "./modules/footer";

const content = document.getElementById("app");

/* const getRecipe = async () => {
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
    createMultipleTags("div", result.length - 1, content, result, "recipe");
  } catch (error) {
    console.error(error);
  }
};

const recipeList = getRecipe(); */

loadHeader();
loadInputSection();
loadRecipeSection();
loadFooter();
