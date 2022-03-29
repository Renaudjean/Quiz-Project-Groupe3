let express = require('express');
let router = express.Router();
const { Router } = require('express');
const { route } = require('express/lib/router');
let {quiz_Gen} = require('./app.js')
let {question_Gen} = require('./api_questions.js')
let {answer_Gen} = require('./api_answers.js')
let {admin_Gen} = require('./api_adminhome.js')
let {delete_This} = require('./api_deletethis.js')
let {photo_Gen} = require('./api_quiz.js');



router.get('/', quiz_Gen);
router.get('/admin', admin_Gen);
router.get('/question/:id',question_Gen);
router.get('/answer/:id',answer_Gen);
router.get('/login/check', );
router.get('/correct-answer/:id',answer_Gen);
router.get('/quizz/:id', photo_Gen);

router.get('/deletethis/:id', delete_This)

module.exports = router;