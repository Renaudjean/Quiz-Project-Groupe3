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
let {score_Collect}= require('./api_scorecollect.js');
let {create_new_quiz}= require('./api_new_quiz');
let {question_Update}= require('./api_question_update');
let {answers_Update}= require('./api_answers_update');
let {update_quiz}= require('./api_update.js');
// let apiUpdate = require('./api_update.js');

const { sign_logout } = require('./api_logout.js');



router.get('/', quiz_Gen);
router.get('/admin', admin_Gen);
router.get('/question/:id',question_Gen);
router.get('/answer/:id',answer_Gen);
router.post('/login/check', sign_check);
router.get('/login/up', sign_up_check_mail);
router.get('/login/logout', sign_logout);
router.post('/login/createUsers', sign_up_create_users);

router.post('/update', update_quiz);
// router.post('/update', apiUpdate.update_quiz);

router.post('/fetchQuest', question_Update);
router.post('/fetchAnswers', answers_Update)
router.get('/correct-answer/:id',answer_Gen);
router.get('/quizz/:id', photo_Gen);
router.get('/deletethis/:id', delete_This);
router.post('/new-quiz/', create_new_quiz);
router.post('/admin/', admin_Gen);
router.post('/quiz/score/', send_Scores);
router.get('/quiz/avrscore/:id', score_Collect);
module.exports = router;