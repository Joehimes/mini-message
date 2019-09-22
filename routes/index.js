var express = require('express');
var router = express.Router();

const messages = [{text: "Hi there", user: "Armando", added: new Date()}, {text: "Hello World", user: "Charlse", added: new Date()}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get("/new", function(req, res, next) {
  res.render('form')
});

router.post('/new', function(req, res, next) {
  var message = req.body;
  messages.push({text: message.message, user: message.name, added: new Date()});
  res.redirect('/');
});

module.exports = router;
