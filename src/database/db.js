// const Sequelize = require("sequelize");

// const connection = new Sequelize(
//   process.env.DB_BASE,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     port: 5432,
//     dialect: "postgres",
//   }
// );

// module.exports = connection;

const Sequelize = require("sequelize");

const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = connection;