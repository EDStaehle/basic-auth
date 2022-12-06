'use strict';

// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const logInRouter = require('./routes/signIn');
const signUpRouter = require('./routes/signUp');
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(logInRouter);
app.use(signUpRouter);
app.use(express.urlencoded({ extended: true }));


app.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});
function start() {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
  }

  module.exports = { app, start }



