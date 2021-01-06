var express = require('express');
var router = express.Router();
var CircularJSON = require('circular-json');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send(CircularJSON.stringify({
  "fulfillmentMessages": [
    {
      "text": {
        "text": [
          "ggg"
        ]
      }
    }
  ]
}));
});

module.exports = router;
