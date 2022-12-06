'use strict'


module.exports = (sequelizeDataBase, DataTypes) => sequelizeDataBase.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

