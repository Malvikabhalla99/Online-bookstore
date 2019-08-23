const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const dbo = new Sequelize({

  dialect: 'sqlite',
  storage: __dirname + './bookdata.db',
})
//  this is general database in which branch is stored if it is different from dropdown
const BookData = dbo.define('bookdata', {

    name: DataTypes.STRING,

    email: DataTypes.STRING,

    college: DataTypes.STRING,

    book: DataTypes.STRING,

    price : DataTypes.INTEGER,

    branch: DataTypes.STRING,

})

 

const db_it = new Sequelize({

    dialect: 'sqlite',
    storage: __dirname + './it_book.db',

  })

  const BookData_it = db_it.define('bookdatay', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })

  const db_ece = new Sequelize({

    dialect: 'sqlite',
    storage: __dirname + './ece_book.db',

  })

  const BookData_ece = db_ece.define('bookdataece', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })

  const db_mca = new Sequelize({

    dialect: 'sqlite',
    storage: __dirname + './mca_book.db',

  })

  const BookData_mca = db_mca.define('bookdatamca', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })

  const db_mtech= new Sequelize({

    dialect: 'sqlite',
    storage: __dirname + './mtech_book.db',

  })

  const BookData_mtech = db_mtech.define('bookdatamtech', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })

  const db_novels = new Sequelize({

    dialect: 'sqlite',

    storage: __dirname + './novels_book.db',

  })

  const BookData_novels = db_novels.define('bookdatanovels', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })

  const db_phd = new Sequelize({

    dialect: 'sqlite',

    storage: __dirname + './phd_book.db',

  })

  const BookData_phd= db_phd.define('bookdataphd', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })

  const db_archi = new Sequelize({

    dialect: 'sqlite',

    storage: __dirname + './archi_book.db',

  })

  const BookData_archi = db_archi.define('bookdataarchi', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })

  const db_mae = new Sequelize({

    dialect: 'sqlite',

    storage: __dirname + './cse_book.db',

  })

  const BookData_mae = db_mae.define('bookdatacse', {

      name: DataTypes.STRING,

      email: DataTypes.STRING,

      college: DataTypes.STRING,

      book: DataTypes.STRING,

      price : DataTypes.INTEGER

  })


module.exports = {

    dbo,BookData,db_it,BookData_it,db_ece,BookData_ece,db_mca,BookData_mca,db_novels,BookData_novels,db_mae,BookData_mae,db_phd,BookData_phd,db_archi,BookData_archi,db_mtech,BookData_mtech

}