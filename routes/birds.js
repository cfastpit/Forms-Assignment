var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/birds', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/birds/create', function(req, res, next) {
    res.render('birds', { title: 'Express' });
  });
  router.post('/birds/createcreate', function(req, res, next) {
    console.log("made it to birds.js")
  });
/*router.get('/api/v1/weather2', function(req, res, next) {
   let weatherData= {
    
      Temp: 90.5,
      unit: 'fahrenheit',
      Cloudy: false,
      PrecipitationChance: 100
   }
   res.send(weatherData);
});
*/
module.exports = router;
