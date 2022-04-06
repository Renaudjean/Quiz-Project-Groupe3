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
let {get_last_quiz_id}= require('./api_last_quiz');
let {get_last_question_id}= require('./api_last_question');
const { sign_logout } = require('./api_logout.js');
const api_score_page= require('./api_score_page.js');

// Home page
router.get('/', quiz_Gen);
router.get('/quizz/:id', photo_Gen);

// Quizz Generation
router.get('/question/:id',question_Gen);
router.get('/answer/:id',answer_Gen);
router.get('/correct-answer/:id',answer_Gen);

//login sessions
router.post('/login/check', sign_check);
router.get('/login/up', sign_up_check_mail);
router.get('/login/logout', sign_logout);
router.post('/login/createUsers', sign_up_create_users);
// new quiz
router.post('/new-quiz/', create_new_quiz);
router.get('/new-quiz/getid', get_last_quiz_id);
router.get('/new-quiz/getquestid', get_last_question_id);
router.post('/admin/', admin_Gen);

// Score Collect
router.post('/quiz/score/', send_Scores);
router.get('/quiz/avrscore/:id', score_Collect);

// Profile
router.get('/score', api_score_page.score_Page);
router.post('/score/bestscore/', api_score_page.best_Score_Page);
router.get('/score/bestscore/', api_score_page.best_Score_Page);
router.post('/score/bestscore/scorelimit', api_score_page.noQuestion);
router.get('/score/bestscore/scorelimit', api_score_page.noQuestion);

// admin privileges
router.get('/admin', admin_Gen);
router.get('/deletethis/:id', delete_This);

module.exports = router;