const userDefinition = require('../../Database/Models/models').User

module.exports = {
  getAllUsers: (req, res) => {
    userDefinition.findAll()
      .then((users) => {
        res.status(200).send(users)
      })
      .catch(() => {
        res.status(404).send('failed username get request')
      })
  },

  handleNewUsers: (req, res) => {
    userDefinition.create({
      userName: req.body.userName
    })
    .then ((userName) => {
      res.status(201).send(userName)
    })
    .catch (() => {
      res.status(404).send('failed username post request ')
    })
  }
}