"use strict";
import {
  checkForSavedRecipe,
  removeSavedRecipe,
  allSavedRecipes,
  comparedRecipes,
} from "./recipe_section";

class SavedRecipe {
  constructor(title, image, source) {
    this.title = title;
    this.image = image;
    this.source = source;
  }
}

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
  let tag = document.createElement("div");
  tag.classList.add("recipeBox");
  section.appendChild(tag);

  let title = document.createElement("h3");
  title.classList.add("recipeTitle");
  title.innerHTML = recipe.title;
  tag.appendChild(title);

  let image = document.createElement("img");
  image.classList.add("recipeImage");
  image.src = recipe.image[0];
  tag.appendChild(image);

  let source = document.createElement("p");
  source.classList.add("recipeSource");
  source.innerHTML = `<b>Zubereitung: </b><a href=${recipe.sourceURL}>${recipe.source}</a>`;
  tag.appendChild(source);

  let difficulty = document.createElement("p");
  difficulty.classList.add("recipeDifficulty");
  if (recipe.difficulty === "" || recipe.difficulty === undefined) {
    recipe.difficulty = "nicht angegeben";
  }
  difficulty.innerHTML = "<b>Schwierigkeit: </b>" + recipe.difficulty;
  tag.appendChild(difficulty);

  let portions = document.createElement("p");
  portions.classList.add("recipePortions");
  portions.innerHTML = "<b>Portionen: </b>" + recipe.portions;
  tag.appendChild(portions);

  let time = document.createElement("p");
  time.classList.add("recipeTime");
  time.innerHTML = "<b>Kochzeit: </b>" + recipe.time + " Minuten";
  tag.appendChild(time);

  let allIngredients = document.createElement("div");
  allIngredients.classList.add("allIngredients");
  let ingHead = document.createElement("h4");
  ingHead.classList.add("ingHead");
  ingHead.innerHTML = "Zutaten:";
  allIngredients.appendChild(ingHead);
  tag.appendChild(allIngredients);

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

    let ingAmount = document.createElement("span");
    ingAmount.innerHTML = ingredient.amount + " ";
    ingBox.appendChild(ingAmount);

    let ingUnit = document.createElement("span");
    ingUnit.innerHTML = ingredient.unit + " ";
    ingBox.appendChild(ingUnit);

    let ingName = document.createElement("span");
    ingName.innerHTML = ingredient.name;
    ingBox.appendChild(ingName);
  }

  let printButton = document.createElement("button");
  printButton.classList.add("printButton");
  printButton.title = "Drucken";
  let printIcon = document.createElement("i");
  printIcon.classList.add("fa-solid", "fa-print");
  printButton.append(printIcon);
  tag.appendChild(printButton);

  let shareButton = document.createElement("button");
  shareButton.classList.add("shareButton");
  shareButton.title = "Teilen";
  let shareIcon = document.createElement("i");
  shareIcon.classList.add("fa-solid", "fa-share-nodes");
  shareButton.appendChild(shareIcon);
  tag.appendChild(shareButton);

  let saveButton = document.createElement("button");
  saveButton.classList.add("saveButton");
  saveButton.title = "Speichern";
  let saveIcon = document.createElement("i");
  saveIcon.classList.add("fa-solid", "fa-floppy-disk");
  saveButton.appendChild(saveIcon);
  tag.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    let recipeCheck = checkForSavedRecipe(recipe.title);
    if (recipeCheck) {
      let savedRecipe = new SavedRecipe(
        recipe.title,
        recipe.image,
        recipe.sourceURL
      );
      const sideBar = document.getElementById("recipeSidebar");
      let savedRecipeBox = document.createElement("div");
      savedRecipeBox.classList.add("savedRecipeBox");
      sideBar.appendChild(savedRecipeBox);
      let savedTitle = document.createElement("a");
      savedTitle.href = savedRecipe.source;
      savedTitle.classList.add("savedTitle");
      savedTitle.innerHTML = savedRecipe.title;
      savedRecipeBox.appendChild(savedTitle);
      let savedImage = document.createElement("img");
      savedImage.classList.add("savedImage");
      savedImage.src = savedRecipe.image;
      savedRecipeBox.appendChild(savedImage);

      let removeButton = document.createElement("button");
      removeButton.classList.add("removeButton");
      removeButton.innerHTML = "X";
      savedRecipeBox.appendChild(removeButton);
      removeButton.addEventListener("click", () => {
        removeSavedRecipe(savedTitle.innerHTML);
        removeButton.parentElement.remove();
      });
    }
  });
  let compareButton = document.createElement("button");
  compareButton.classList.add("compareButton");
  compareButton.innerHTML = "<i class='fa-solid fa-table-columns'></i>";
  compareButton.title = "Vergleichen";
  tag.appendChild(compareButton);
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
}

export {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
  createRecipeTags,
  createAIRecipeTag,
};
