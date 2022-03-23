let express = require('express');
let router = express.Router();
const { Router } = require('express');
const { route } = require('express/lib/router');
let {quiz_Gen} = require('./app.js')
let {question_Gen} = require('./api.js')

router.get('/', quiz_Gen);
router.get('/question/:id',question_Gen);


module.exports = router;