const Sequelize = require('sequelize')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodetutorial',
//     password: 'apple@17'
// });

const sequelize = new Sequelize('expensetracker', 'root', 'nalini@200026',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize