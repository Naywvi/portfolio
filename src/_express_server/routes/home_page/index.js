const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home_page/index", { layout: "layout/index" });
});

module.exports = (app) => {
  app.use("/", router);
};
