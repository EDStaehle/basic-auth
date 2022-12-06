'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const {signUpModel} = require('../models');

const signUpRouter = express.Router();

signUpRouter.post('/signup', async (req, res) => {

  try {
    let { username, password } = req.body;
    let encryptedPassword = await bcrypt.hash(password, 5);

    let record = await signUpModel.create({
      username,
      password: encryptedPassword,
    });
    res.status(200).json(record);
  } catch (e) { res.status(403).send(e.message); }
});
module.exports = signUpRouter
