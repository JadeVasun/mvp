const database = require('../dbconfig');
const Sequelize = require('sequelize');

const User = database.define('user', {
  user: Sequelize.STRING
})

const Thoughts = database.define ('thoughts', {
  thoughts: Sequelize.STRING
})

User.sync()
  .then(() => console.log('User Table Created'))
  .catch(() => console.log('User Table Failed'))

Thoughts.sync()
  .then (() => console.log('Thoughts Table Created'))
  .catch(() => console.log('Thoughts Table Failed'))

User.hasMany(Thoughts)
Thoughts.belongsTo(User)


module.exports = {
  User: User,
  Thoughts: Thoughts
}



