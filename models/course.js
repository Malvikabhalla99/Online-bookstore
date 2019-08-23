const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const dby = new Sequelize({
  // mysql -> params
  // dialect: 'mysql',
  // username: '',
  // database: '',
  // password: '',
  // host: 'localhost',
  // port: '',

  // sqlite -> params
  dialect: 'sqlite',
  storage: __dirname + '/mca.db'
})

const mastersubone = dby.define('subj', {
  name: {
    type: DT.STRING(50),
    allowNull: false,
    
  },
  author: {
    type: DT.STRING(100),
  },
  seller: {
    type: DT.STRING,
    allowNull: false
  }
})

module.exports = {
  dby, mastersubone
}