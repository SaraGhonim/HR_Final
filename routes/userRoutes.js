const express = require('express');
const router = express.Router();
const Joi = require('joi');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');

router.post('/register', async (req, res) => {
  try{
    const { error } = validate1(req.body); 
    if (error) return res.send(error.details[0].message);
  
    let user = await User.User.findOne({ email: req.body.email });
    if (user) return res.send('User already registered.');
  
    user = new User.User(_.pick(req.body, ['userName', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.send('Generated successfully');
  }
  catch(error){
    console.log(error.message)
  }
  });

router.post('/login', async (req, res) => {
  try{  
    const { error } = validate2(req.body); 
    if (error) return res.send(error.details[0].message);
  
    let user = await User.User.findOne({ email: req.body.email });
    if (!user) return res.send('Invalid email.');
  
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.send('Invalid password.');
  
    res.send("success");}
  catch(error){
    console.log(error.message)
  }
  });
  
function validate1(req) {
    const schema = {
      userName: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(req, schema);
  }

function validate2(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(req, schema);
  }

  
module.exports = router;