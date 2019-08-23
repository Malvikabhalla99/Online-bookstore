const route = require('express').Router()
const { User } = require('../models/db')
const { BookData_it } = require('../models/coursesdb')
route.get('/', (req, res) => {
  let ans2=[];
  if (req.user) {

   
  
 BookData_it.findAll()
    .then((subjecty)=>{
      subjecty.forEach((bookdatay)=>{
        ans2.push({task:bookdatay})
      })
    })
      return res.render('cseit',{result2: ans2}) 
    
  }
  res.redirect('/login')

})


module.exports = route