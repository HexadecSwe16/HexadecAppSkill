"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomErrorHandler = /** @class */ (function () {
    function CustomErrorHandler() {
    }
    CustomErrorHandler.prototype.canHandle = function (handlerInput) {
        return true;
    };
    CustomErrorHandler.prototype.handle = function (handlerInput, error) {
        var request = handlerInput.requestEnvelope.request;
        console.log("Error handled: " + error.message);
        console.log("Original Request was: " + JSON.stringify(request, null, 2));
        return handlerInput.responseBuilder
            .speak('Sorry, I can not understand the command.  Please say again.')
            .reprompt('Sorry, I can not understand the command.  Please say again.')
            .getResponse();
    };
    return CustomErrorHandler;
}());
exports.CustomErrorHandler = CustomErrorHandler;
