const route = require('express').Router()
const {
  User
} = require('../models/db')

route.get('/', (req, res) => {
  res.render('signup')
})

route.post('/', async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    res.redirect('/login')
  } catch (e) {
    res.render('signup',{
        message : "User already exists"
    })
  }

})

module.exports = route