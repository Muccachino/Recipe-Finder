"use strict";

import { expandHtml, createTags, createMultipleTags } from "./tag_functions";

const content = document.getElementById("app");

const loadInputSection = () => {
  const inputSection = createTags("section", null, "inputSection");
  expandHtml(content, inputSection);

  const finderLabel = createTags(
    "h2",
    null,
    "finderLabel",
    "Enter Keywords to search for recipes from our databank"
  );
  expandHtml(inputSection, finderLabel);

  const finderInput = createTags("input", null, "finderInput");
  expandHtml(inputSection, finderInput);

  const finderButton = createTags("button", null, "finderButton", "Search");
  expandHtml(inputSection, finderButton);

  const generatorLabel = createTags(
    "h2",
    null,
    "generatorLabel",
    "Enter a dish to create an AI recipe"
  );
  expandHtml(inputSection, generatorLabel);

  const generatorInput = createTags("input", null, "generatorInput");
  expandHtml(inputSection, generatorInput);

  const generatorButton = createTags(
    "button",
    null,
    "generatorButton",
    "Create"
  );
  expandHtml(inputSection, generatorButton);
};

export { loadInputSection };
