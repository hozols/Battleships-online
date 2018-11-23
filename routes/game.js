var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('game', { title: 'Express', rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  });
});

module.exports = router;
