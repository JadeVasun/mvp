const thoughtsDefinition = require('../../Database/Models/models').Thoughts

module.exports = {
  getAllThoughts: (req, res) => {
    thoughtsDefinition.findAll()
      .then((thoughts) => {
        res.status(200).send(thoughts)
      })
      .catch (() => {
        res.status(404).send('failed getAllThoughts Requst')
      })
  },
  handleThoughtsPosts: (req, res) => {
    thoughtsDefinition.create({
      thoughts: ''
    })
    .then((thoughts) => {
        res.status(201).send(thoughts)
    })
    .catch(() => {
        res.status(404).send('failed post request')
    })
  }
}