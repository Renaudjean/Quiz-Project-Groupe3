let express = require('express');
let router = express.Router();
const { Router } = require('express');
const { route } = require('express/lib/router');
let {quiz_Gen} = require('./app.js')
let {question_Gen} = require('./api_questions.js')
let {answer_Gen} = require('./api_answers.js')

router.get('/', quiz_Gen);
router.get('/question/:id',question_Gen);
router.get('/answer/:id',answer_Gen);
router.get('/login/check', )
router.get('/correct-answer/:id',answer_Gen)

module.exports = router;