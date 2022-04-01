let express = require('express');
let router = express.Router();
const { Router } = require('express');
const { route } = require('express/lib/router');
let {quiz_Gen} = require('./app.js')
let {question_Gen} = require('./api_questions.js')
let {sign_check} = require('./api_login.js');
let {sign_up_check_mail} = require('./api_sign_up.js');
let {sign_up_create_users} = require('./api_create_users.js');
let {answer_Gen} = require('./api_answers.js')
let {admin_Gen} = require('./api_adminhome.js')
let {delete_This} = require('./api_deletethis.js')
let {photo_Gen} = require('./api_quiz.js');
let {send_Scores}= require('./api_score.js');
let {score_Collect} = require('./api_scorecollect.js');


router.get('/', quiz_Gen);
router.get('/admin', admin_Gen);
router.get('/question/:id',question_Gen);
router.get('/answer/:id',answer_Gen);
router.get('/login/check', sign_check);
router.get('/login/up', sign_up_check_mail);
router.post('/login/createUsers', sign_up_create_users);
router.get('/correct-answer/:id',answer_Gen);
router.get('/quizz/:id', photo_Gen);

router.get('/deletethis/:id', delete_This);

router.post('/quiz/score/', send_Scores);
router.post('/quiz/avrscore/', score_Collect);
module.exports = router;