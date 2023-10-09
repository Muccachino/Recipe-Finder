"use strict";

import { createTags, expandHtml } from "./tag_functions";

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

export { loadCompareWindow };
