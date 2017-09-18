const userDefinition = require ('../../database/model/model.js').User
const thoughtsDefinition = require('../../database/model/model.js').Thoughts

module.exports = {
  getAllThoughts: (req, res) => {
    console.log('successfully in the get')
    thoughtsDefinition.findAll()
      .then((thoughts) => {
        res.status(200).send(thoughts)
      })
      .catch(() => {
        res.status(404).send('failed')
      })
  },
  handleThoughtsPost: (req, res) => {
    thoughtsDefinition.create()
      .then((thoughts) => {
        thoughts: ''
        res.status(200).send(thoughts)
      })
      .catch(() => {
        res.status(404).send(thoughts)
      })
  }
  

  //get all thoughts
  //thoughtsDef.findAll
    //then
    //catch
  
  //thoughts post
    //thoughtsDef.create
      //thoughts: req.body.thoughts
      //.then (user)
      //.catch

}

//then make router