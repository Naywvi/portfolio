const location = [
  "forum",
  "ip_grinde",
  "letsp",
  "maze",
  "monkey_format",
  "monkey_scrap",
  "naluos_engine",
  "naluos_rpg",
  "nlook_up",
  "nnvm",
  "revochat",
  "scriptio",
  "spooky_project",
  "undefined",
];

module.exports = {
  getProjetQuery: (projet) => {
    if (location.find((name) => name === projet))
      return "presentation_project_page/index";
    else if (projet === undefined) return "project_page/index";
  },
};
