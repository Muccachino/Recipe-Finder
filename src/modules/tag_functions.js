"use strict";
import {
  checkForSavedRecipe,
  removeSavedRecipe,
  allSavedRecipes,
  comparedRecipes,
} from "./recipe_section";
import { SavedRecipe } from "./recipe_Classes";

function createTags(htmlTags, className, idName, innerHtml) {
  let element = document.createElement(htmlTags);
  if (className != null) {
    element.classList.add(className);
  }
  if (idName != null) {
    element.id = idName;
  }
  if (innerHtml != null) {
    element.innerHTML = innerHtml;
  }
  return element;
}

function expandHtml(expand, tags) {
  expand.appendChild(tags);
}

function addPicture(picImportName, parent) {
  let myPic = new Image();
  myPic.src = picImportName;
  parent.appendChild(myPic);
}

function createMultipleTags(node, amount, parent, innerHtml, className) {
  for (let i = 0; i <= amount; i++) {
    let tag = document.createElement(node);
    if (innerHtml != null) {
      tag.innerHTML = innerHtml[i];
    }
    if (className != null) {
      tag.classList.add(`${className}${i}`);
    }
    parent.appendChild(tag);
  }
}

function createRecipeTags(recipe, section) {
  let tag = createTags("div", "recipeBox");
  expandHtml(section, tag);

  let title = createTags("h3", "recipeTitle", null, recipe.title);
  expandHtml(tag, title);

  let image = createTags("img", "recipeImage");
  image.src = recipe.image[0];
  expandHtml(tag, image);

  let source = createTags(
    "p",
    "recipeSource",
    null,
    `<b>Zubereitung: </b><a href=${recipe.sourceURL}>${recipe.source}</a>`
  );
  expandHtml(tag, source);

  if (recipe.difficulty === "" || recipe.difficulty === undefined) {
    recipe.difficulty = "nicht angegeben";
  }
  let difficulty = createTags(
    "p",
    "recipeDifficulty",
    null,
    "<b>Schwierigkeit: </b>" + recipe.difficulty
  );
  expandHtml(tag, difficulty);

  let portions = createTags(
    "p",
    "recipePortions",
    null,
    "<b>Portionen: </b>" + recipe.portions
  );
  expandHtml(tag, portions);

  let time = createTags(
    "p",
    "recipeTime",
    null,
    "<b>Kochzeit: </b>" + recipe.time + " Minuten"
  );
  expandHtml(tag, time);

  let allIngredients = createTags("div", "allIngredients");
  expandHtml(tag, allIngredients);

  let ingHead = createTags("h4", "ingHead", null, "Zutaten:");
  expandHtml(allIngredients, ingHead);

  for (let ingredient of recipe.ingredients) {
    let ingBox = document.createElement("div");
    if (
      recipe.ingredients.indexOf(ingredient) % 2 === 0 ||
      recipe.ingredients.indexOf(ingredient) === 0
    ) {
      ingBox.classList.add("recipeIngBox", "color");
    } else {
      ingBox.classList.add("recipeIngBox");
    }
    allIngredients.appendChild(ingBox);

    let ingAmount = createTags("span", null, null, ingredient.amount + " ");
    expandHtml(ingBox, ingAmount);

    let ingUnit = createTags("span", null, null, ingredient.unit + " ");
    expandHtml(ingBox, ingUnit);

    let ingName = createTags("span", null, null, ingredient.name);
    expandHtml(ingBox, ingName);
  }

  let printButton = createTags(
    "button",
    "printButton",
    null,
    "<i class='fa-solid fa-print'></i>"
  );
  printButton.title = "Drucken";
  expandHtml(tag, printButton);

  let shareButton = createTags(
    "button",
    "shareButton",
    null,
    "<i class='fa-solid fa-share-nodes'></i>"
  );
  shareButton.title = "Teilen";
  expandHtml(tag, shareButton);

  let saveButton = createTags(
    "button",
    "saveButton",
    null,
    "<i class='fa-solid fa-floppy-disk'></i>"
  );
  saveButton.title = "Speichern";
  expandHtml(tag, saveButton);

  let compareButton = createTags(
    "button",
    "compareButton",
    null,
    "<i class='fa-solid fa-table-columns'></i>"
  );
  compareButton.title = "Vergleichen";
  expandHtml(tag, compareButton);

  eventListeners_RecipeButtons(recipe, saveButton, compareButton);
}

function eventListeners_RecipeButtons(recipe, saveButton, compareButton) {
  saveButton.addEventListener("click", () => {
    let recipeCheck = checkForSavedRecipe(recipe.title);
    if (recipeCheck) {
      let savedRecipe = new SavedRecipe(
        recipe.title,
        recipe.image,
        recipe.sourceURL
      );
      const sideBar = document.getElementById("recipeSidebar");
      let savedRecipeBox = createTags("div", "savedRecipeBox");
      expandHtml(sideBar, savedRecipeBox);

      let savedTitle = createTags("a", "savedTitle", null, savedRecipe.title);
      savedTitle.href = savedRecipe.source;
      expandHtml(savedRecipeBox, savedTitle);

      let savedImage = createTags("img", "savedImage");
      savedImage.src = savedRecipe.image;
      expandHtml(savedRecipeBox, savedImage);

      let removeButton = createTags("button", "removeButton", null, "X");
      expandHtml(savedRecipeBox, removeButton);
      removeButton.addEventListener("click", () => {
        removeSavedRecipe(savedTitle.innerHTML);
        removeButton.parentElement.remove();
      });
    }
  });

  compareButton.addEventListener("click", () => {
    const compareAllButton = document.getElementById("compareAll");
    const compareCounter = document.getElementById("compareCounter");

    if (compareButton.parentElement.classList.contains("compare")) {
      compareButton.parentElement.classList.remove("compare");
      comparedRecipes--;
    } else if (
      !compareButton.parentElement.classList.contains("compare") &&
      comparedRecipes < 4
    ) {
      compareButton.parentElement.classList.add("compare");
      comparedRecipes++;
    }

    if (comparedRecipes != 0) {
      compareAllButton.classList.remove("hidden");
      compareCounter.classList.remove("hidden");
      compareCounter.innerHTML = comparedRecipes + "/4 Rezepte";
    } else {
      compareAllButton.classList.add("hidden");
      compareCounter.classList.add("hidden");
    }
  });
}

function createAIRecipeTag(recipe, section) {
  section.innerHTML = "";
  let aiRecipeBox = createTags("div", null, "aiRecipeBox");
  expandHtml(section, aiRecipeBox);

  let aiRecipeTitle = createTags("h1", null, "aiRecipeTitle", recipe.title);
  expandHtml(aiRecipeBox, aiRecipeTitle);

  let aiRecipePortions = createTags(
    "p",
    null,
    "aiRecipePortions",
    "<b>Portionen: </b>" + recipe.portions
  );
  expandHtml(aiRecipeBox, aiRecipePortions);

  let aiRecipeTime = createTags(
    "p",
    null,
    "aiRecipeTime",
    "<b>Kochzeit: </b>" + recipe.time + " Minuten"
  );
  expandHtml(aiRecipeBox, aiRecipeTime);

  let aiAllIngredients = createTags("div", null, "aiAllIngredients");
  expandHtml(aiRecipeBox, aiAllIngredients);
  let aiAllIngTitle = createTags("h3", null, "aiAllIngTitle", "Zutaten:");
  expandHtml(aiAllIngredients, aiAllIngTitle);

  for (let ingredient of recipe.ingredients) {
    let aiIngBox = createTags("div", "aiIngBox");
    if (
      recipe.ingredients.indexOf(ingredient) % 2 === 0 ||
      recipe.ingredients.indexOf(ingredient) === 0
    ) {
      aiIngBox.classList.add("color");
    }
    expandHtml(aiAllIngredients, aiIngBox);

    let aiIngAmount = createTags(
      "span",
      null,
      "aiIngAmount",
      ingredient.amount + " "
    );
    expandHtml(aiIngBox, aiIngAmount);

    let aiIngUnit = createTags(
      "span",
      null,
      "aiIngUnit",
      ingredient.unit + " "
    );
    expandHtml(aiIngBox, aiIngUnit);

    let aiIngName = createTags("span", null, "aiIngName", ingredient.name);
    expandHtml(aiIngBox, aiIngName);
  }

  let aiSteps = createTags("div", null, "aiSteps");
  expandHtml(aiRecipeBox, aiSteps);
  let aiStepsHead = createTags("h3", null, "aiStepsHead", "Zubereitung: ");
  expandHtml(aiSteps, aiStepsHead);

  for (let j = 0; j < recipe.steps.length; j++) {
    let stepTag = createTags("p", "steps", null, recipe.steps[j]);
    expandHtml(aiSteps, stepTag);
  }

  let aiPrintButton = createTags(
    "button",
    null,
    "aiPrintButton",
    "<i class='fa-solid fa-print'></i>"
  );
  aiPrintButton.title = "Drucken";
  expandHtml(aiRecipeBox, aiPrintButton);

  let aiShareButton = createTags(
    "button",
    null,
    "aiShareButton",
    "<i class='fa-solid fa-share-nodes'></i>"
  );
  aiShareButton.title = "Teilen";
  expandHtml(aiRecipeBox, aiShareButton);

  let aiSaveButton = createTags(
    "button",
    null,
    "aiSaveButton",
    "<i class='fa-solid fa-floppy-disk'></i>"
  );
  aiSaveButton.title = "Speichern";
  expandHtml(aiRecipeBox, aiSaveButton);

  eventListeners_AI_RecipeButtons(recipe, section);
}

function eventListeners_AI_RecipeButtons(recipe, section) {
  aiSaveButton.addEventListener("click", () => {
    let recipeCheck = checkForSavedRecipe(recipe.title);
    if (recipeCheck) {
      const sideBar = document.getElementById("recipeSidebar");

      let savedRecipeBox = createTags("div", "savedRecipeBox");
      expandHtml(sideBar, savedRecipeBox);
      let savedTitle = createTags("p", "savedTitle", null, recipe.title);
      expandHtml(savedRecipeBox, savedTitle);

      let aiSavedImage = createTags(
        "div",
        "aiSavedImage",
        null,
        '<i class="fa-solid fa-robot"></i>'
      );
      expandHtml(savedRecipeBox, aiSavedImage);

      let removeButton = createTags("button", "removeButton", null, "X");
      expandHtml(savedRecipeBox, removeButton);

      removeButton.addEventListener("click", () => {
        removeSavedRecipe(savedTitle.innerHTML);
        removeButton.parentElement.remove();
      });

      savedTitle.addEventListener("click", () => {
        createAIRecipeTag(recipe, section);
      });
    }
  });
}

export {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
  createRecipeTags,
  createAIRecipeTag,
};
