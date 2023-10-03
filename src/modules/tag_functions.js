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

export { createTags, expandHtml, addPicture, createMultipleTags };
