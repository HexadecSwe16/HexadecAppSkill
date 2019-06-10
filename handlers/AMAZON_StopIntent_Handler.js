"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmazonStopIntentHandler = /** @class */ (function () {
    function AmazonStopIntentHandler() {
    }
    AmazonStopIntentHandler.prototype.canHandle = function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent';
    };
    AmazonStopIntentHandler.prototype.handle = function (handlerInput) {
        var responseBuilder = handlerInput.responseBuilder;
        return responseBuilder.speak('welcome from typescript')
            .getResponse();
    };
    return AmazonStopIntentHandler;
}());
exports.AmazonStopIntentHandler = AmazonStopIntentHandler;
