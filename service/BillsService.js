'use strict';


/**
 * Fetch bill by Id
 * 
 *
 * body Bill order placed for purchasing the pet
 * returns Bill
 **/
exports.fetchBillById = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 70700,
  "billDate" : "2000-01-23T04:56:07.000+00:00",
  "billNo" : "RCRQ/2020-07-17/6418619"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch bill payment status
 * Fetch payment status for a bill
 *
 * body BillStatusRequest 
 * returns BillStatusResponse
 **/
exports.fetchBillStatus = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "responseReason": "Successful",
  "approvalRefNum": "AB123456",
  "responseCode": "000"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update bill payment
 * Update payment for a bill
 *
 * body BillPaymentRequest 
 * returns BillStatusResponse
 **/
exports.updateBillPayment = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "responseReason": "Successful",
      "approvalRefNum": "AB123456",
      "responseCode": "000"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

