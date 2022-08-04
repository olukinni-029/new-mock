// imported our packages
const express = require('express');

// created our router mapper
const router = express.Router();

// import our models
const User = require('../models/user.model');

// @desc    create a new user
// @route   POST  /api/create
// @access  Public
router.post('/create', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'internal server error' });
  }
});

// @desc    create a new user
// @route   POST  /api/users
// @access  Public

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(201).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'internal server error' });
  }
});

// @desc    update a single user by id
// @route   POST  /api/user/:id
// @access  Public
router.put('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { last_name, first_name } = req.body;
    const update_user = await User.findOneAndUpdate(
      id,
      {
        last_name,
        first_name,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(update_user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'internal server error' });
  }
});

module.exports = router;
