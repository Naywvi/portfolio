const fs = require("fs");
const path = require("path");

module.exports = async (app) => {
  async function loadRoutesFromFolder(folderPath) {
    const folderContents = fs.readdirSync(folderPath);
    folderContents.forEach((item) => {
      const itemPath = path.join(folderPath, item);
      if (fs.statSync(itemPath).isDirectory()) {
        console.log(itemPath);
        loadRoutesFromFolder(itemPath);
      } // Parcourez récursivement les sous-dossiers
      else if (item === "index.js") {
        const routes = require(itemPath);
        routes(app); // Exécutez la fonction exportée pour charger les routes
      }
    });
  }
  await loadRoutesFromFolder(path.join(__dirname));
  const err = require("./error_page/err.js");
  err(app);
};
