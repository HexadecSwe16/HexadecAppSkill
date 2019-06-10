"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmazonCancelIntentHandler = /** @class */ (function () {
    function AmazonCancelIntentHandler() {
    }
    AmazonCancelIntentHandler.prototype.canHandle = function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent';
    };
    AmazonCancelIntentHandler.prototype.handle = function (handlerInput) {
        var responseBuilder = handlerInput.responseBuilder;
        return responseBuilder.speak('Okay, talk to you later!')
            .withShouldEndSession(true)
            .getResponse();
    };
    return AmazonCancelIntentHandler;
}());
exports.AmazonCancelIntentHandler = AmazonCancelIntentHandler;
