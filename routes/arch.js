const route = require('express').Router()
const { User } = require('../models/db')
const { BookData_archi  } = require('../models/coursesdb')
route.get('/', (req, res) => {
  let ans5=[];
  if (req.user) {
    BookData_archi .findAll()
    .then((subjecty)=>{
      subjecty.forEach((bookdataarchi)=>{
        ans5.push({task:bookdataarchi})
      })
    })
      return res.render('arch',{result5: ans5})  
    
  }
  res.redirect('/login')

})


module.exports = route