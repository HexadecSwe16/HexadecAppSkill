"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SessionEndedHandler = /** @class */ (function () {
    function SessionEndedHandler() {
    }
    SessionEndedHandler.prototype.canHandle = function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    };
    SessionEndedHandler.prototype.handle = function (handlerInput) {
        var responseBuilder = handlerInput.responseBuilder;
        return responseBuilder.getResponse();
    };
    return SessionEndedHandler;
}());
exports.SessionEndedHandler = SessionEndedHandler;
