const route = require('express').Router()
const { User } = require('../models/db')
const {BookData} = require('../models/coursesdb')

//const {dbo}  = require('../models/db')

const {BookData_it} = require('../models/coursesdb')

const {BookData_ece} = require('../models/coursesdb')

const {BookData_mca} = require('../models/coursesdb')

const {BookData_mae} = require('../models/coursesdb')

const {BookData_novels} = require('../models/coursesdb')

const {BookData_phd} = require('../models/coursesdb')

const {BookData_archi} = require('../models/coursesdb')

const {BookData_mtech} = require('../models/coursesdb')
 

route.get('/', (req, res) => {

  if (req.user) {
    return res.render('addbooks', {user: req.user})
  }
  res.redirect('/login')

})


route.post('/',(req,res)=>{

  if(req.body.branch=="IT" || req.body.branch=="CSE")

  {

      BookData_it.create({

          name : req.body.name,

          email: req.body.email,

          college: req.body.college,

          book: req.body.book,

          price : req.body.price,

      })

  }

  else if(req.body.branch=="MAE")

  {

      BookData_mae.create({

          name : req.body.name,

          email: req.body.email,

          college: req.body.college,

          book: req.body.book,

          price : req.body.price,

      })

  }

  else if(req.body.branch=="ECE")

  {

      BookData_ece.create({

          name : req.body.name,

          email: req.body.email,

          college: req.body.college,

          book: req.body.book,

          price : req.body.price,
 
      })

  }

  else if(req.body.branch=="MCA")

  {

      BookData_mca.create({

          name : req.body.name,

          email: req.body.email,

          college: req.body.college,

          book: req.body.book,

          price : req.body.price,

      })

  }

  else if(req.body.branch=="M.Tech")

  {

      BookData_mtech.create({

          name : req.body.name,

          email: req.body.email,

          college: req.body.college,

          book: req.body.book,

          price : req.body.price,

      })

  }

    else if(req.body.branch=="Novels")

    {

        BookData_novels.create({

            name : req.body.name,

            email: req.body.email,

            college: req.body.college,

            book: req.body.book,

            price : req.body.price,

        })

    }

    else if(req.body.branch=="Architecture")

    {

        BookData_archi.create({

            name : req.body.name,

            email: req.body.email,

            college: req.body.college,

            book: req.body.book,

            price : req.body.price,

        })

    }

    else if(req.body.branch=="Phd")

    {

        BookData_phd.create({

            name : req.body.name,

            email: req.body.email,

            college: req.body.college,

            book: req.body.book,

            price : req.body.price,

        })

    }

  else

  {

      BookData.create({

          name : req.body.name,

          email: req.body.email,

          college: req.body.college,

          book: req.body.book,

          price : req.body.price,

           branch: req.body.branch,

      })

  }
    res.redirect(req.originalUrl)

})

module.exports = route