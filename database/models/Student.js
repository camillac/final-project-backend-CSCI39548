/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://images.squarespace-cdn.com/content/v1/58962c6a440243be53fd739d/1501788229215-54S3CNHM498H1OIP929E/image-asset.gif",
  },

  gpa: {
    type: Sequelize.DOUBLE,
    validate:{min:0.0, max :4.0},
  },
});

// Export the student model
module.exports = Student;
