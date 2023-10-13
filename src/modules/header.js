"use strict";

import { createTags, expandHtml, createMultipleTags } from "./tag_functions";

const content = document.getElementById("app");

const loadHeader = () => {
  const header = createTags("header", "header");
  expandHtml(content, header);

  const pageTitle = createTags("h1", null, "pageTitle", "Gusto Search");
  expandHtml(header, pageTitle);

  const headerNavi = createTags("ul", "nav");
  expandHtml(header, headerNavi);
  createMultipleTags("li", 1, headerNavi, ["Home", "Impressum"], "nav");
};

export { loadHeader };
