"use strict";

class SavedRecipe {
  constructor(title, image) {
    (this.title = title), (this.image = image);
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

  let source = document.createElement("a");
  source.classList.add("recipeSource");
  source.href = recipe.sourceURL;
  source.innerHTML = "Quelle: " + recipe.source;
  tag.appendChild(source);

  let difficulty = document.createElement("p");
  difficulty.classList.add("recipeDifficulty");
  if (recipe.difficulty === "" || recipe.difficulty === undefined) {
    recipe.difficulty = "nicht angegeben";
  }
  difficulty.innerHTML = "Schwierigkeit: " + recipe.difficulty;
  tag.appendChild(difficulty);

  let portions = document.createElement("p");
  portions.classList.add("recipePortions");
  portions.innerHTML = "Portionen: " + recipe.portions;
  tag.appendChild(portions);

  let time = document.createElement("p");
  time.classList.add("recipeTime");
  time.innerHTML = "Kochzeit: " + recipe.time + " Minuten";
  tag.appendChild(time);

  let allIngredients = document.createElement("div");
  allIngredients.classList.add("allIngredients");
  let ingHead = document.createElement("h4");
  ingHead.innerHTML = "Zutaten:";
  allIngredients.appendChild(ingHead);
  tag.appendChild(allIngredients);

  for (let ingredient of recipe.ingredients) {
    let ingBox = document.createElement("div");
    ingBox.classList.add("recipeIngBox");
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
  let printIcon = document.createElement("i");
  printIcon.classList.add("fa-solid", "fa-print");
  printButton.append(printIcon);
  tag.appendChild(printButton);

  let shareButton = document.createElement("button");
  shareButton.classList.add("shareButton");
  let shareIcon = document.createElement("i");
  shareIcon.classList.add("fa-solid", "fa-share-nodes");
  shareButton.appendChild(shareIcon);
  tag.appendChild(shareButton);

  let saveButton = document.createElement("button");
  saveButton.classList.add("saveButton");
  let saveIcon = document.createElement("i");
  saveIcon.classList.add("fa-solid", "fa-floppy-disk");
  saveButton.appendChild(saveIcon);
  tag.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    let savedRecipe = new SavedRecipe(title, image);
    console.log(savedRecipe);
    const sideBar = document.getElementById("recipeSidebar");
    let savedRecipeBox = document.createElement("div");
    sideBar.appendChild(savedRecipeBox);
    let savedTitle = document.createElement("h5");
    savedTitle.classList.add("savedTitle");
    savedTitle.innerHTML = savedRecipe.title;
    savedRecipeBox.appendChild(savedTitle);
    let savedImage = document.createElement("img");
    savedImage.classList.add("savedImage");
    savedImage.src = savedRecipe.image;
    savedRecipeBox.appendChild(savedImage);
  });
}

export {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
  createRecipeTags,
};
