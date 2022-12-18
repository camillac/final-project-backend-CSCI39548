/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://media.cntraveler.com/photos/631b4fe1f2f54501e692c5d3/master/pass/University%20of%20Michigan_GettyImages-470656298.jpg",
  },
});

// Export the campus model
module.exports = Campus;
