const route = require('express').Router()
//const flash = require('connect-flash')
const { User } = require('../models/db')
const passport = require('passport')



route.get('/', (req, res) => {
  console.log('GET /login')

  res.render('login',{ message: req.flash('signupMessage') })


})
route.post('/',
    passport.authenticate('local', 
   
    {
      //successRedirect: '/profile',
      successRedirect: '/home',
      failureRedirect: '/login',
      failureFlash: true
    }
    
   // req.flash("message")
   //{ failureFlash: 'Invalid username or password.' }
    )
    //flash("hello")

)


module.exports = route