require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');



const loginSchema = require('./login.schema');
const signUpSchema = require('./signup.schema')




const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory:'
  : process.env.DATABASE_URL;


  const sequelize = new Sequelize(DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });



const logInModel = loginSchema(sequelize, DataTypes);
const signUpModel = signUpSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  logInModel,
  signUpModel
}

