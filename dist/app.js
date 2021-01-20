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
var utils = __importStar(require("./util"));
var fs_1 = __importDefault(require("fs"));
require('dotenv').config();
var app = express_1.default();
// Line Client config
var config = {
    channelAccessToken: process.env['channelAccessToken'],
    channelSecret: process.env['channelSecret']
};
var client = new line.Client(config);
// RichMenu setup.
var richMenuChineseId = '';
var richMenuEnglishId = '';
var richmenuChTemplate = utils.richmenuTemplateChinese;
var richmenuEnTemplate = utils.richmenuTemplateEnglish;
initializeChRichMenu();
initializeEnRichMenu();
// validating if the message comes from Line Platform
app.use(line.middleware(config));
app.post('/', function (req, res) {
    Promise.all(req.body.events.map(handleEvent))
        .then(function (result) {
        return res.json(result);
    })
        .catch(function (err) {
        console.log(err);
    });
});
// handle two possible errors
// 1. SignatureValidationFailed --> the request does not come from line platform.
// 2. JSONParseError
app.use(utils.handleError);
function handleEvent(event) {
    switch (event.type) {
        case 'follow':
            if (event.source.userId) {
                client.linkRichMenuToUser(event.source.userId, richMenuChineseId);
            }
            var msgs = [
                {
                    type: 'text',
                    text: utils.welcomeMsg.ch.welcome
                },
                {
                    type: 'text',
                    text: utils.welcomeMsg.ch.commands
                },
                {
                    type: 'text',
                    text: utils.welcomeMsg.en.welcome
                },
                {
                    type: 'text',
                    text: utils.welcomeMsg.en.commands
                }
            ];
            return client.replyMessage(event.replyToken, msgs);
        case 'unfollow':
            return client.unlinkRichMenuFromUser(event.source.userId);
        case 'message':
            if (event.message.type === 'sticker') {
                var msg = {
                    type: 'text',
                    text: 'Sorry, I am dumb, I hope I can understand this sticker someday...'
                };
                return client.replyMessage(event.replyToken, msg);
            }
            if (event.message.type === 'image') {
                var msg = {
                    type: 'text',
                    text: "Wow, It's a beuatiful image, thanks for sending it to me."
                };
                return client.replyMessage(event.replyToken, msg);
            }
            if (event.message.type !== 'text') {
                return Promise.resolve(null);
            }
            if (event.message.text === utils.richMenuText.en.about) {
                var msgs_1 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.about
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_1);
            }
            if (event.message.text === utils.richMenuText.ch.about) {
                var msgs_2 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.about
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_2);
            }
            if (event.message.text === utils.richMenuText.en.exp) {
                var msgs_3 = [
                    {
                        type: 'flex',
                        altText: 'This is a flex msg',
                        contents: utils.questionResponse.en.exp
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_3);
            }
            if (event.message.text === utils.richMenuText.ch.exp) {
                var msgs_4 = [
                    {
                        type: 'flex',
                        altText: 'This is a flex msg',
                        contents: utils.questionResponse.ch.exp
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_4);
            }
            if (event.message.text === utils.richMenuText.en.skills) {
                var msgs_5 = [
                    {
                        type: 'flex',
                        altText: 'Johnny\'s technical skills.',
                        contents: utils.questionResponse.en.skills
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_5);
            }
            if (event.message.text === utils.richMenuText.ch.skills) {
                var msgs_6 = [
                    {
                        type: 'flex',
                        altText: '子洋的專業技能',
                        contents: utils.questionResponse.ch.skills
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_6);
            }
            if (event.message.text === utils.richMenuText.en.projects) {
                var msgs_7 = [
                    {
                        type: 'flex',
                        altText: 'Johnny\'s project',
                        contents: utils.questionResponse.en.projects
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_7);
            }
            if (event.message.text === utils.richMenuText.ch.projects) {
                var msgs_8 = [
                    {
                        type: 'flex',
                        altText: '子洋的個人專案',
                        contents: utils.questionResponse.ch.projects
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_8);
            }
            if (event.message.text === utils.richMenuText.en.whyline) {
                var msgs_9 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.whyLine
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_9);
            }
            if (event.message.text === utils.richMenuText.ch.whyline) {
                var msgs_10 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.whyLine
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_10);
            }
            if (event.message.text === utils.quickreplyText.ch.personality) {
                var msgs_11 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.personality
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_11);
            }
            if (event.message.text === utils.quickreplyText.ch.age) {
                var msgs_12 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.age
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_12);
            }
            if (event.message.text === utils.quickreplyText.ch.education) {
                var msgs_13 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.education
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_13);
            }
            if (event.message.text === utils.quickreplyText.ch.english) {
                var msgs_14 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.english
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_14);
            }
            if (event.message.text === utils.quickreplyText.ch.food) {
                var msgs_15 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.food
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_15);
            }
            if (event.message.text === utils.quickreplyText.ch.interests) {
                var msgs_16 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.ch.interests
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_16);
            }
            if (event.message.text === utils.quickreplyText.en.personality) {
                var msgs_17 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.personality
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_17);
            }
            if (event.message.text === utils.quickreplyText.en.age) {
                var msgs_18 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.age
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_18);
            }
            if (event.message.text === utils.quickreplyText.en.education) {
                var msgs_19 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.education
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_19);
            }
            if (event.message.text === utils.quickreplyText.en.english) {
                var msgs_20 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.english
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_20);
            }
            if (event.message.text === utils.quickreplyText.en.food) {
                var msgs_21 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.food
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_21);
            }
            if (event.message.text === utils.quickreplyText.en.interests) {
                var msgs_22 = [
                    {
                        type: 'text',
                        text: utils.questionResponse.en.interests
                    }
                ];
                return client.replyMessage(event.replyToken, msgs_22);
            }
            if (event.message.text.match(utils.basicCommands.showQuestionsChRegexp)) {
                return client.replyMessage(event.replyToken, utils.chQuickReply);
            }
            if (event.message.text.match(utils.basicCommands.showQuestionsEnRegexp)) {
                return client.replyMessage(event.replyToken, utils.enQuickReply);
            }
            if (event.message.text.match(utils.basicCommands.help)) {
                return client.replyMessage(event.replyToken, utils.helpMessageReply);
            }
            return client.replyMessage(event.replyToken, utils.defaultResponse);
        case 'postback':
            if (event.postback.data === 'lang=ch' && event.source.userId) {
                client.linkRichMenuToUser(event.source.userId, richMenuChineseId)
                    .then(function (res) {
                    return Promise.resolve(true);
                })
                    .catch(function (err) { return console.log(err); });
            }
            if (event.postback.data === 'lang=en' && event.source.userId) {
                client.linkRichMenuToUser(event.source.userId, richMenuEnglishId)
                    .then(function (res) {
                    return Promise.resolve(true);
                })
                    .catch(function (err) { return console.log(err); });
            }
            return Promise.resolve(null);
        default:
            return client.pushMessage(event.source.userId, utils.defaultResponse);
    }
}
function initializeChRichMenu() {
    client.createRichMenu(richmenuChTemplate)
        .then(function (id) {
        richMenuChineseId = id;
        return client.setRichMenuImage(id, fs_1.default.createReadStream('./assets/chinese.png'));
    })
        .then(function () {
        return client.setDefaultRichMenu(richMenuChineseId);
    })
        .catch(function (err) {
        console.log(err);
    });
}
function initializeEnRichMenu() {
    client.createRichMenu(richmenuEnTemplate)
        .then(function (id) {
        richMenuEnglishId = id;
        return client.setRichMenuImage(id, fs_1.default.createReadStream('./assets/english.png'));
    })
        .catch(function (err) {
        console.log(err);
    });
}
module.exports = app;
