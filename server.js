const express = require('express')
const session = require('express-session')
const hbs = require('express-hbs')
const path = require('path')
// this db is for user data (login logout)
const {
  db
} = require('./models/db')
var handlebars = require('handlebars');
var layouts = require('handlebars-layouts');

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// this as of now not needed 
const{dby}= require('./models/course')
const {dbo, db_it , db_mae , db_ece  , db_mca , db_mtech , db_novels , db_phd , db_archi } = require('./models/coursesdb')
const passport = require('./passport')
var flash    = require('connect-flash');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'wfjgb23o4ubg0384hg3490-gh34-09gh43-gi',
  name: 'mycookiename'
}))
app.use(flash()); 
app.use(passport.initialize())
app.use(passport.session())

// for adding stylesheet
app.use('/assets',express.static('assets'));
app.use('/js',express.static('js'));
//app.use('/assests');

app.engine('hbs', hbs.express4({
  partialsDir: path.join(__dirname, '../doing passport/views/partials'),
  
}))

app.set('view engine', 'hbs')


app.use((req, res, next) => {
  console.log('session')
  console.log(req.session)
  next()
})
app.get('/',(req,res)=>{
  res.render('index')
})
app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))
app.use('/profile', require('./routes/profile'))
app.use('/home', require('./routes/home'))
app.use('/cseit', require('./routes/cseit'))
app.use('/addbooks', require('./routes/addbooks'))
app.use('/ece', require('./routes/ece'))
app.use('/mae', require('./routes/mae'))
app.use('/mca', require('./routes/mca'))
app.use('/mtech', require('./routes/mtech'))
app.use('/novels', require('./routes/novels'))
app.use('/phd', require('./routes/phd'))
app.use('/arch', require('./routes/arch'))
app.use('/logout', require('./routes/logout'));

dby.sync()
dbo.sync()
db_it.sync()
db_mae.sync()  
db_ece.sync() 
//db_mae.sync() 
db_mca.sync() 
db_mtech.sync()   
db_novels.sync()  
db_phd.sync()  
db_archi.sync() 

// syncing users db
db.sync()
  .then(() => {
    app.listen(7676, () => {
      console.log('Started on http://localhost:7676')
    })
  })
  .catch(console.error)