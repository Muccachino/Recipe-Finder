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

  const filterButton = createTags(
    "button",
    null,
    "filterButton",
    "<i class='fa-solid fa-filter'></i>"
  );
  filterButton.title = "Filter";
  expandHtml(inputSection, filterButton);

  const finderInput = createTags("input", null, "finderInput");
  expandHtml(inputSection, finderInput);

  const finderButton = createTags(
    "button",
    null,
    "finderButton",
    "<i class='fa-solid fa-magnifying-glass'></i>"
  );
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
    "<i class='fa-solid fa-wand-magic-sparkles'></i>"
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

  const filterOptions = createTags("div", "hidden", "filterOptions");
  expandHtml(inputSection, filterOptions);

  const maxIngLabel = createTags(
    "p",
    null,
    "maxIngLabel",
    "maximale Zutaten: "
  );
  expandHtml(filterOptions, maxIngLabel);

  const maxIngInput = createTags("input", null, "maxIngInput");
  expandHtml(filterOptions, maxIngInput);

  const maxTimeLabel = createTags(
    "p",
    null,
    "maxTimeLabel",
    "maximale Kochzeit (in Minuten): "
  );
  expandHtml(filterOptions, maxTimeLabel);

  const maxTimeInput = createTags("input", null, "maxTimeInput");
  expandHtml(filterOptions, maxTimeInput);

  const dietLabel = createTags("p", null, "dietLabel", "Ernährungsform: ");
  expandHtml(filterOptions, dietLabel);

  const dietSelect = createTags("select", null, "dietSelect");
  expandHtml(filterOptions, dietSelect);
  const allDiets = createMultipleTags(
    "option",
    2,
    dietSelect,
    ["Keine", "Vegetarisch", "Vegan"],
    "diet"
  );
};

export { loadInputSection };
