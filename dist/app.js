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
var express_1 = __importDefault(require("express"));
var line = __importStar(require("@line/bot-sdk"));
var crypto_1 = __importDefault(require("crypto"));
var rxjs_1 = require("rxjs");
var middlewares = __importStar(require("./util"));
require('dotenv').config();
var app = express_1.default();
var channelSecret = '42e172546e09e334d0672faccaf5a1dc';
function getSignature(body) {
    return crypto_1.default.createHmac('SHA256', channelSecret).update(body).digest('base64');
}
var middlewareConfig = {
    channelAccessToken: process.env['channelAccessToken'],
    channelSecret: process.env['channelSecret']
};
var clientConfig = {
    channelAccessToken: 'AqZQQu8AAPKxJ3Lx+jHITUq8l7c+AG/tW6i/4nc1FMhDXUPzMlTqZKzPNGrceT3rJvJgHouPmgLp+FtmA26U9ut8x7PmphQ/oEM0yF0OLFAFmXWaNp9i+O4AYKy7r/dr3CEExT7JOiWyNBtsybVkTAdB04t89/1O/w1cDnyilFU=',
    channelSecret: '42e172546e09e334d0672faccaf5a1dc'
};
var client = new line.Client(clientConfig);
app.use(line.middleware(middlewareConfig));
app.post('/', middlewares.checkValidationMiddleware, function (req, res) {
    handleEvent(req.body.events[0]).subscribe(function (result) {
        console.log('hello world');
        console.log(result);
        res.json(result);
    });
    // Promise
    // .all(req.body.events.map(handleEvent))
    // .then((result) => {
    //     console.log(result);
    //     return res.json(result);
    // })
    // .catch((err) => {
    //   console.error(err);
    //   res.status(500).end();
    // });
});
function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        return rxjs_1.from(Promise.resolve(null));
    }
    // create a echoing text message
    var echo = [
        { type: 'text', text: event.message.text },
        {
            "type": "text",
            "text": "Select your favorite food category or send me your location!",
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "imageUrl": "https://example.com/sushi.png",
                        "action": {
                            "type": "message",
                            "label": "Sushi",
                            "text": "Y"
                        }
                    },
                    {
                        "type": "action",
                        "imageUrl": "https://example.com/tempura.png",
                        "action": {
                            "type": "message",
                            "label": "Tempura",
                            "text": "Tempura"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "location",
                            "label": "Send location"
                        }
                    }
                ]
            }
        }
    ];
    // use reply API
    return rxjs_1.from(client.replyMessage(event.replyToken, echo));
}
app.listen(8080);
