"use strict";
exports.__esModule = true;
var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient({ 'region': 'eu-west-1' });
var ris = "risultato: ";
var DB = /** @class */ (function () {
    function DB(idUser) {
        this.idUser = idUser;
    }
    ;
    DB.prototype.getWorkflow = function (work) {
        var _this = this;
        var tableName = 'Workflow';
        return new Promise(function (resolve, reject) {
            var params = {
                TableName: tableName,
                KeyConditionExpression: 'IDUser = :id AND WorkflowName = :wf',
                ExpressionAttributeValues: {
                    ':id': _this.idUser,
                    ':wf': work
                }
            };
            docClient.query(params, function (err, data) {
                if (err) {
                    //console.log("Unable to insert =>", JSON.stringify(err))
                    return reject("Unable to get data");
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    DB.prototype.getUserInfo = function () {
        var tableName = 'User';
        var params = {
            TableName: tableName,
            KeyConditionExpression: 'IDUser = :id',
            ExpressionAttributeValues: {
                ':id': this.idUser
            }
        };
        console.log("prima della query");
        /*let res : any =  docClient.query((params), (err, data) => {
            if (err) {
                console.log("errore");
            }
            else {
                console.log("madio cane");
            }
        });*/
        docClient.query(params, function (err, data) {
            if (err) {
            }
            else {
                console.log(JSON.stringify(data.Items));
                ris = ris.concat(JSON.stringify(data.Items));
            }
        });
        // let ris = <UserType []> res.Items;
        // console.log(JSON.stringify(ris)); //QUESTO STAMPA undefined
        return ris; // QUESTO MI DICE : Error handled: Cannot read property '0' of undefined
        // return res.then((val) => val[0].Username)
        // let risultato = <UserType> res.Items[0];
        // return risultato.Username;
    };
    return DB;
}());
exports.DB = DB;
