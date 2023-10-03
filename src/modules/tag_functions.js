"use strict";

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
  title.innerHTML = recipe.title;
  tag.appendChild(title);

  let source = document.createElement("a");
  source.href = recipe.sourceURL;
  source.innerHTML = "Source:" + recipe.source;
  tag.appendChild(source);

  let difficulty = document.createElement("p");
  difficulty.innerHTML = "Difficulty" + recipe.difficulty;
  tag.appendChild(difficulty);

  let portions = document.createElement("p");
  portions.innerHTML = "Portions" + recipe.portions;
  tag.appendChild(portions);

  let time = document.createElement("p");
  time.innerHTML = "Time" + recipe.time;
  tag.appendChild(time);

  for (let ingredient of recipe.ingredients) {
    let ingBox = document.createElement("div");
    tag.appendChild(ingBox);

    let ingAmount = document.createElement("span");
    ingAmount.innerHTML = ingredient.amount;
    ingBox.appendChild(ingAmount);

    let ingUnit = document.createElement("span");
    ingUnit.innerHTML = ingredient.unit;
    ingBox.appendChild(ingUnit);

    let ingName = document.createElement("span");
    ingName.innerHTML = ingredient.name;
    ingBox.appendChild(ingName);
  }
}

export {
  createTags,
  expandHtml,
  addPicture,
  createMultipleTags,
  createRecipeTags,
};
