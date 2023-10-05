"use strict";

import { createMultipleTags, createTags, expandHtml } from "./tag_functions";

const content = document.getElementById("app");

const loadRecipeSection = () => {
  const recipeSection = createTags("section", null, "recipeSection");
  expandHtml(content, recipeSection);
};

const loadRecipeSidebar = () => {
  const recipeSidebar = createTags("nav", null, "recipeSidebar");
  expandHtml(content, recipeSidebar);
};

export { loadRecipeSection, loadRecipeSidebar };
