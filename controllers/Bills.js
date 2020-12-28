'use strict';

var utils = require('../utils/writer.js');
var Bills = require('../service/BillsService');

module.exports.fetchBillById = function fetchBillById (req, res, next) {
  var body = req.swagger.params['body'].value;
  Bills.fetchBillById(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fetchBillStatus = function fetchBillStatus (req, res, next) {
  var body = req.swagger.params['body'].value;
  Bills.fetchBillStatus(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBillPayment = function updateBillPayment (req, res, next) {
  var body = req.swagger.params['body'].value;
  Bills.updateBillPayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
