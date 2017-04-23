var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var retweet = function(){
    var params = {
        q: '#freecodecamp, #TeslaMotors, #Tesla, #AstonMartin, #ISS, #space',
        result_type: 'recent',
        lang: 'en'
    }
}

