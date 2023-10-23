const express = require("express");
const router = express.Router();
const queries = require("../_query_project/_index.js");

router.get("/projets", (req, res, next) => {
  const projet = req.query.projet;
  const queryResult = queries.getProjetQuery(projet);
  res.locals.import = "chunks/pages/" + projet + ".js";
  res.locals.location = projet;
  if (queryResult != undefined)
    res.render(queryResult, { layout: "layout/index" });
  else res.redirect("/error");
});

module.exports = (app) => {
  app.use("/", router);
};
