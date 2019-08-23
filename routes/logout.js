const route = require('express').Router()



route.get('/', (req, res) => {

    req.logout();
  //res.redirect('/');

  req.session.destroy(function (err) {

    if (err) throw err



    res.redirect('/')

  })

})



module.exports = route