const route = require('express').Router()
const { User } = require('../models/db')
const { BookData_ece } = require('../models/coursesdb')
route.get('/', (req, res) => {
  let ans3=[];
  if (req.user) {

    BookData_ece.findAll()
    .then((subjecty)=>{
      subjecty.forEach((bookdataece)=>{
        ans3.push({task:bookdataece})
      })
    })
      return res.render('ece',{result3: ans3})  
    //return res.render('ece', {user: req.user})
  }
  res.redirect('/login')

})


module.exports = route