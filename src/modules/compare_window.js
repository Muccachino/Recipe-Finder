"use strict";

import { createTags, expandHtml } from "./tag_functions";

const loadCompareWindow = () => {
  let compareWindowOuter = createTags("div", null, "compareWindowOuter");
  expandHtml(document.body, compareWindowOuter);

  let compareWindowInner = createTags("div", null, "compareWindowInner");
  expandHtml(compareWindowOuter, compareWindowInner);
};

export { loadCompareWindow };
