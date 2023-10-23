const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

module.exports = {
  run(PORT) {
    var req_function = require("./routes/_index");
    var app = express();

    app.set("views", path.join(__dirname, "/views/"));
    app.set("view engine", "hbs");
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "../_web_site/static")));

    req_function(app);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  },
};
