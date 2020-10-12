var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/done', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });
 router.post('/done', function(req, res, next) {
   console.log("made it to inedx.js")
   let newbird = {
      Species: req.body.Species,
      Nickname: req.body.Nickname,
      Status: req.body.Status,
  }

 
  console.log(newbird);
  res.redirect('/users');
 });

router.get('/api/v1/weather', function(req, res, next) {
   let weatherData= {
    
      Temp: 90.5,
      unit: 'fahrenheit',
      Cloudy: false,
      PrecipitationChance: 0
   }
   res.send(weatherData);
});

module.exports = router;
