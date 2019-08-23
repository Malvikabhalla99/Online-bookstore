const route = require('express').Router()
const { User } = require('../models/db')
const { BookData_mtech } = require('../models/coursesdb')
route.get('/', (req, res) => {
  let ans7=[];
  if (req.user) {
    BookData_mtech.findAll()
    .then((subjecty)=>{
      subjecty.forEach((bookdatamtech)=>{
        ans7.push({task:bookdatamtech})
      })
    })
      return res.render('mtech',{result7: ans7})  
    //return res.render('mtech', {user: req.user})
  }
  res.redirect('/login')

})


module.exports = route