const Bike = require("../models/bike");

const getAll = async (req, res) => {
  try {
    const catalog = await Bike.findAll();
    res.render("index", { catalog });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = { getAll };
//DB-MODELS-CONTROLLER-ROUTES
