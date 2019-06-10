"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StartWorkflowHandler = /** @class */ (function () {
    function StartWorkflowHandler() {
    }
    StartWorkflowHandler.prototype.canHandle = function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'startWorkflowIntent';
    };
    StartWorkflowHandler.prototype.handle = function (handlerInput) {
        console.log('hello request init');
        var responseBuilder = handlerInput.responseBuilder;
        return responseBuilder
            .speak('hello to you too')
            .reprompt('what was that?')
            .getResponse();
    };
    return StartWorkflowHandler;
}());
exports.StartWorkflowHandler = StartWorkflowHandler;
