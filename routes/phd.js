const route = require('express').Router()
const { User } = require('../models/db')

const {BookData_phd } = require('../models/coursesdb')

route.get('/', (req, res) => {
  let ans6=[];
  if (req.user) {
    BookData_phd.findAll()
    .then((subjecty)=>{
      subjecty.forEach((bookdataphd)=>{
        ans6.push({task:bookdataphd})
      })
    })
      return res.render('phd',{result6: ans6})  
    //return res.render('phd', {user: req.user})
  }
  res.redirect('/login')

})


module.exports = route