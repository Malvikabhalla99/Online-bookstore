const route = require('express').Router()
const { User } = require('../models/db')
const { mastersubone } = require('../models/course')
/*route.get('/', (req, res) => {
 let ans=[];
  if (req.user) {

    //console.log(req.user)

    mastersubone.findAll()
    .then((subjecty)=>{
      subjecty.forEach((subj)=>{
        console.log("this is subj")
        console.log(subj)
        ans.push({task:subj})
        
      })
      
    });
   // console.log("this is ans")
    //console.log(ans)
     
    return res.render('mca',{result: ans})
   
  }
  res.redirect('/login')

})*/

route.get('/', async (req,res)=>{
  if(req.user){
    const articles = await  mastersubone.findAll()

    return res.render('mcaone', {articles})
  }

  res.redirect('/login');
 
})



module.exports = route