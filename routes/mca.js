const route = require('express').Router()
const { User } = require('../models/db')

const {  BookData_mca } = require('../models/coursesdb')

route.get('/', (req, res) => {
    let ans=[];
  
    if (req.user) {
  
        BookData_mca.findAll()
        .then((subjecty)=>{
          subjecty.forEach((bookdatamca)=>{
            ans.push({task:bookdatamca})
          })
        })
          return res.render('mca',{result: ans}) 
      //return res.render('ece', {user: req.user})
    }
    res.redirect('/login')
  
  })
  
  module.exports = route