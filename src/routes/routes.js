const routes = require("express").Router();

const CatalogController = require("../controllers/CatalogController");
routes.get("/", CatalogController.getAll);
routes.get("/signup", CatalogController.signup);
routes.post("/create", CatalogController.create);
routes.get("/getById/:id/:method", CatalogController.getById);
routes.post("/update/:id", CatalogController.update);
routes.get("/remove/:id", CatalogController.remove);

module.exports = routes;
