const router = require('express').Router();
const controller = require ('../controller/controller.js')

router.route('/thoughts')
  .get(controller.getAllThoughts)
  .post(controller.handleThoughtsPost)

  module.exports = router;