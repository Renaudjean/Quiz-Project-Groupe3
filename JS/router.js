let express = require('express');
let router = express.Router();
const { Router } = require('express');
const { route } = require('express/lib/router');
let {quiz_Gen} = require('./app.js')
let {question_Gen} = require('./api_questions.js')
let {answer_Gen} = require('./api_answers.js');
let {sign_check} = require('./api_login.js');
let {sign_up} = require('./api_sign_up.js');


router.get('/', quiz_Gen);
router.get('/question/:id',question_Gen);
router.get('/answer/:id',answer_Gen);
router.get('/login/check', sign_check)
router.get('/login/up', sign_up)
router.get('/correct-answer/:id',answer_Gen)

module.exports = router;