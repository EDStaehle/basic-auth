'use strict';

const { start} = require('./src/app');
const { sequelize } = require('./src/models');

sequelize.sync()
  .then(() => {
    console.log('Connected');
    start();
  })
  .catch((e) => console.error(e));
