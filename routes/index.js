var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'the start of a chatbot' });
});

router.get('/chat', function(req, res, next){
  res.render('chat', { });
})

module.exports = router;
