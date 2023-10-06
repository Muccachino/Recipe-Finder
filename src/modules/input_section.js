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
    "Geben Sie Suchbegriffe ein um in unserer Datenbank mit über 200.000 Rezepten zu stöbern"
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
    "Geben Sie ein Gericht ihrer Wahl ein und unser KI gestützter Rezept Generator erstellt ihnen ein fertiges Rezept (Beta)"
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

  const compareAllButton = createTags(
    "button",
    "hidden",
    "compareAll",
    "Ausgewählte vergleichen"
  );
  expandHtml(inputSection, compareAllButton);

  const compareCounter = createTags(
    "p",
    "hidden",
    "compareCounter",
    "0/4 Rezepte"
  );
  expandHtml(inputSection, compareCounter);
};

export { loadInputSection };
