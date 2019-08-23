const route = require('express').Router()
const { User } = require('../models/db')

route.get('/', (req, res) => {

  if (req.user) {
    return res.render('profile', {user: req.user})
  }
  res.redirect('/login')

})


module.exports = route