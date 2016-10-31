var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Pet Store - Home' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'My Pet Store - Products' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'My Pet Store - Contact' });
});

module.exports = router;
