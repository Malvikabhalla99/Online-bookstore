const route = require('express').Router()
const { User } = require('../models/db')
const {  BookData_mae } = require('../models/coursesdb')
route.get('/', (req, res) => {
  let ans4=[];
  if (req.user) {

    BookData_mae.findAll()
    .then((subjecty)=>{
      subjecty.forEach((bookdatacse)=>{
        ans4.push({task:bookdatacse})
      })
    })
      return res.render('mae',{result4: ans4})  
   // return res.render('mae', {user: req.user})
  }
  res.redirect('/login')

})


module.exports = route