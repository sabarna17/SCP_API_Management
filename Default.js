'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

var random = require('../node_modules/random-number');

module.exports.playWithNumberGET = function playWithNumberGET (req, res, next) {
  Default.playWithNumberGET()
    .then(function (response) {
      var gen = random.generator({min:  0, max:  1000, integer: true});
      response = {'randomNumber':gen()};
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playWithNumberPOST = function playWithNumberPOST (req, res, next) {
  var testsap = req.swagger.params['testsap'].value;
  
  Default.playWithNumberPOST(testsap)
    .then(function (response) {
      response = {'sum':testsap.number1 + testsap.number2};
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
