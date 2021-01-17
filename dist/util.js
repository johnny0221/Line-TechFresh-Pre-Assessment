"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidationMiddleware = void 0;
var crypto_1 = __importDefault(require("crypto"));
var line = __importStar(require("@line/bot-sdk"));
var checkValidationMiddleware = function (req, res, next) {
    var body = JSON.stringify(req.body);
    if (line.validateSignature(JSON.stringify(req.body), process.env['channelSecret'], getSignature(body))) {
        res.status(200);
        console.log('valid!');
        next();
    }
    else {
        res.status(401);
    }
};
exports.checkValidationMiddleware = checkValidationMiddleware;
function getSignature(body) {
    return crypto_1.default.createHmac('SHA256', process.env['channelSecret']).update(body).digest('base64');
}
