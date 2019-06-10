"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmazonHelpIntentHandler = /** @class */ (function () {
    function AmazonHelpIntentHandler() {
    }
    AmazonHelpIntentHandler.prototype.canHandle = function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    };
    AmazonHelpIntentHandler.prototype.handle = function (handlerInput) {
        var responseBuilder = handlerInput.responseBuilder;
        return responseBuilder.speak('welcome from typescript')
            .getResponse();
    };
    return AmazonHelpIntentHandler;
}());
exports.AmazonHelpIntentHandler = AmazonHelpIntentHandler;
