const express = require("express");
const router = express.Router();

router.get("/curriculum", (req, res, next) => {
  res.render("curriculum_page/index", { layout: "layout/index" });
});

module.exports = (app) => {
  app.use("/", router);
};
