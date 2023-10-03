"use strict";

import { createMultipleTags, createTags, expandHtml } from "./tag_functions";

const content = document.getElementById("app");

const loadRecipeSection = () => {
  const recipeSection = createTags("section", null, "recipeSection");
  expandHtml(content, recipeSection);
};

export { loadRecipeSection };
