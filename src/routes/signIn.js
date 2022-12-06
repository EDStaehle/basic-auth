'use strict';
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const express = require('express');
const { logInModel } = require('../models');
const loginSchema = require('../models/login.schema');

const logInRouter = express.Router();
logInRouter.post('/signin', async (req, res) => {


  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':');

  try {
    const user = await logInModel.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }

});
module.exports = logInRouter
