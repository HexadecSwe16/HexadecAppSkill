"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask_sdk_1 = require("ask-sdk");
var LaunchRequestHandler_1 = require("./handlers/LaunchRequestHandler");
var AMAZON_CancelIntent_Handler_1 = require("./handlers/AMAZON_CancelIntent_Handler");
var AMAZON_StopIntent_Handler_1 = require("./handlers/AMAZON_StopIntent_Handler");
var StartWorkflowHandler_1 = require("./handlers/StartWorkflowHandler");
var SessionEndedHandler_1 = require("./handlers/SessionEndedHandler");
var CustomErrorHandler_1 = require("./handlers/CustomErrorHandler");
function buildLambdaSkill() {
    return ask_sdk_1.SkillBuilders.standard()
        .addRequestHandlers(new LaunchRequestHandler_1.LaunchRequestHandler(), new StartWorkflowHandler_1.StartWorkflowHandler(), new AMAZON_CancelIntent_Handler_1.AmazonCancelIntentHandler, new AMAZON_StopIntent_Handler_1.AmazonStopIntentHandler, new SessionEndedHandler_1.SessionEndedHandler())
        .addErrorHandlers(new CustomErrorHandler_1.CustomErrorHandler())
        .lambda();
}
// Lambda handler - entry point for skill
exports.handler = buildLambdaSkill();
