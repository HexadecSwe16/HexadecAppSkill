"use strict";
exports.__esModule = true;
var dynamo_1 = require("../lambda/dynamo");
var LaunchRequestHandler = /** @class */ (function () {
    function LaunchRequestHandler() {
    }
    LaunchRequestHandler.prototype.canHandle = function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    };
    LaunchRequestHandler.prototype.handle = function (handlerInput) {
        var responseBuilder = handlerInput.responseBuilder;
        var dynamo = new dynamo_1.DB('1');
        var speakOutput = getUser(dynamo);
        return responseBuilder.speak('Which workflow would you like to run ' + speakOutput + '?')
            .getResponse();
    };
    return LaunchRequestHandler;
}());
exports.LaunchRequestHandler = LaunchRequestHandler;
function getUser(dynamo) {
    var prom = dynamo.getUserInfo();
    return (prom);
    // .catch((error) => "non funziona";);
}
