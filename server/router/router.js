const router = require('express').Router();
const thoughtsController = require('../Controller/thoughtsController')
const userController = require('../Controller/userController')
router.route('/thoughts')
  .get(thoughtsController.getAllThoughts)
  .post(thoughtsController.handleThoughtsPosts)

router.route('/user')
  .get(userController.getAllUsers)
  .post(userController.handleNewUsers)

  module.exports = router