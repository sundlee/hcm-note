module.exports = {
  title: "HTML/CSS Master 학습 노트",
  description: "HTML/CSS Master 학습 노트",
  base: "/hcm-note/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        title: "Day 1",
        collapsable: true,
        children: ["/prerequisite", "/webaccessibility", "/responsive"],
      },
      {
        title: "Day 2",
        collapsable: true,
        children: ["/formspree", "/search-form", "/spoqa-font"],
      },
      {
        title: "Day 3",
        collapsable: true,
        children: ["/media", "/flex", "/pseudo-element"],
      },
      {
        title: "Day 4",
        collapsable: false,
        children: ["/position", "/display", "/nth-child"],
      },
      {
        title: "Day 5",
        collapsable: false,
        children: ["/transform", "/jquery", "/transition"],
      },
    ],
  },
};
