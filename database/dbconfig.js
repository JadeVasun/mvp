const Sequelize = require ('sequelize');

const dburl = 'postgres://htxydmau:1bOQCKnnJ9AAcGAiVonq1LqEkOFZqD47@elmer.db.elephantsql.com:5432/htxydmau';

const db = new Sequelize (dburl, {dialect: 'postgres'});

db.authenticate()
  .then(() => console.log('db authenticated'))
  .catch(() => console.log('failed authentication'))

module.exports = db