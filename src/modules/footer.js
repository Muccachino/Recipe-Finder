"use strict";

import { createMultipleTags, createTags, expandHtml } from "./tag_functions";

const content = document.getElementById("app");

const loadFooter = () => {
  const footer = createTags("footer", "footer");
  expandHtml(content, footer);

  const terms = createTags("div", "terms");
  expandHtml(footer, terms);

  const termsLinks = createMultipleTags("span", 1, terms, [
    "<a href='#'>Nutzungsbedingungen</a>",
    "<a href='#'>Privatsphäre Einstellungen</a>",
  ]);

  const socialMedia = createTags("div", "socialmedia");
  expandHtml(footer, socialMedia);

  const follow = createTags("span", null, null, "Folge uns auf:");
  expandHtml(socialMedia, follow);

  const socialMediaLinks = createMultipleTags("a", 2, socialMedia);
  const socialMediaIcon1 = createTags("i", "fa-brands");
  socialMediaIcon1.classList.add("fa-facebook");
  expandHtml(socialMedia.children[1], socialMediaIcon1);

  const socialMediaIcon2 = createTags("i", "fa-brands");
  socialMediaIcon2.classList.add("fa-instagram");
  expandHtml(socialMedia.children[2], socialMediaIcon2);

  const socialMediaIcon3 = createTags("i", "fa-brands");
  socialMediaIcon3.classList.add("fa-twitter");
  expandHtml(socialMedia.children[3], socialMediaIcon3);
};

export { loadFooter };
