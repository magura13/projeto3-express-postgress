const res = require("express/lib/response");
const Bike = require("../models/bike");

let message = "";
let type = "";

const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
      type = "";
    }, 1000);
    const catalog = await Bike.findAll();
    res.render("index", {
      catalog,
      bikePut: null,
      bikeDel: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const signup = (req, res) => {
  try {
    res.render("signup", { message, type });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const bike = req.body;

    if (!bike.marca || !bike.modelo || !bike.tipo || !bike.img) {
      message = "Fill all the blanks.";
      type = "danger";
      return res.redirect("/signup");
    }

    await Bike.create(bike);
    message = "New Bike add to catalog.";
    type = "Sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const catalog = await Bike.findAll();
    const bike = await Bike.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        catalog,
        bikePut: bike,
        bikeDel: null,
        message,
        type,
      });
    } else {
      res.render("index", {
        catalog,
        bikePut: null,
        bikeDel: bike,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const bike = req.body;
    await Bike.update(bike, { where: { id: req.params.id } });
    message = "Bike update.";
    type = "Sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Bike.destroy({ where: { id: req.params.id } });
    message = "Bike removed.";
    type = "Sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = { getAll, signup, create, getById, update, remove };
//DB-MODELS-CONTROLLER-ROUTES
