const Sequelize = require("sequelize");
const connection = require("../database/db");

const Bike = connection.define(
  "bikes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    marca: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    modelo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

const initTable = async () => {
  await Bike.sync();
};

initTable();

module.exports = Bike;