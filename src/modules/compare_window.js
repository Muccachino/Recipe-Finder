"use strict";

import { createTags, expandHtml } from "./tag_functions";
import { comparedRecipes } from "./recipe_section";

const loadCompareWindow = () => {
  let compareWindowOuter = createTags("div", null, "compareWindowOuter");
  expandHtml(document.body, compareWindowOuter);

  let closeCompareWindow = createTags(
    "button",
    null,
    "closeCompareWindow",
    "X"
  );
  expandHtml(compareWindowOuter, closeCompareWindow);

  let compareWindowInner = createTags("div", null, "compareWindowInner");
  expandHtml(compareWindowOuter, compareWindowInner);
};

const loadEventlistener_Compare = () => {
  const compareAllButton = document.getElementById("compareAll");
  compareAllButton.addEventListener("click", () => {
    const allReps = document.querySelectorAll(".recipeBox");
    console.log("allReps", allReps);
    allReps.forEach((rep) => {
      if (rep.classList.contains("compare")) {
        let recipeCopy = rep.cloneNode(true);
        recipeCopy.querySelectorAll("button").forEach((el) => el.remove());
        compareWindowInner.appendChild(recipeCopy);
      }
    });
    compareWindowOuter.style.zIndex = "20";
    if (filterOptions.classList.contains("hidden")) {
      compareWindowOuter.style.height = "calc(82.6vh + 226px)";
    } else {
      compareWindowOuter.style.height = "calc(82.6vh + 304px)";
    }
    compareWindowInner.style.zIndex = "21";
    compareWindowInner.style.gridTemplateColumns = `repeat(${comparedRecipes}, 300px)`;
  });

  closeCompareWindow.addEventListener("click", () => {
    compareWindowInner.innerHTML = "";
    compareWindowOuter.style.zIndex = "1";
    compareWindowInner.style.zIndex = "1";
    comparedRecipes = 0;
    const allReps = document.querySelectorAll(".recipeBox");
    allReps.forEach((rep) => {
      if (rep.classList.contains("compare")) {
        rep.classList.remove("compare");
      }
    });
    compareAllButton.classList.add("hidden");
    compareCounter.classList.add("hidden");
    compareWindowOuter.style.height = "80vh";
  });
};

export { loadCompareWindow, loadEventlistener_Compare };
