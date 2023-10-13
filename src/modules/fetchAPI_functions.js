"use strict";

import { displayRecipes } from "./recipe_section";

//API Call für Rezepte aus Datenbank
const getRecipeList = async (input, page, clearPage, maxIng, maxTime, diet) => {
  let url = `https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=${input}&page=${page}`;
  //Einfügen von Filtern falls vorhanden
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

//API Call für den KI Rezept Generator
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

export { getRecipeList, generateRecipe };
