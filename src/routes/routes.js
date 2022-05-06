const routes = require("express").Router();

const CatalogController = require("../controllers/CatalogController");
routes.get("/", CatalogController.getAll);

module.exports = routes;
