import express, { Application, Request, Response, NextFunction, text } from 'express';
import * as line from '@line/bot-sdk';
import { Message, MessageAPIResponseBase,WebhookEvent } from '@line/bot-sdk';
import * as utils from './util';
import fs from 'fs';
require('dotenv').config();

const app: Application = express();

// Line Client config
const config: line.MiddlewareConfig = {
    channelAccessToken: process.env['channelAccessToken'],
    channelSecret: <string>process.env['channelSecret']
}

const client: line.Client = new line.Client((config as line.ClientConfig));

// RichMenu setup.
let richMenuChineseId: string = '';
let richMenuEnglishId: string = '';

const richmenuChTemplate: line.RichMenu = utils.richmenuTemplateChinese;
const richmenuEnTemplate: line.RichMenu = utils.richmenuTemplateEnglish;

initializeChRichMenu();
initializeEnRichMenu();

// validating if the message comes from Line Platform
app.use(line.middleware(config))

app.post('/', (req: Request, res: Response) => {
  Promise.all(req.body.events.map(handleEvent))
  .then((result) => {
    return res.json(result);
  })
  .catch(err => {
    console.log(err);
  })
})

// handle two possible errors
// 1. SignatureValidationFailed --> the request does not come from line platform.
// 2. JSONParseError
app.use(utils.handleError);

function handleEvent(event: WebhookEvent): Promise<MessageAPIResponseBase | null> {
    switch (event.type) {
      case 'follow':
        if (event.source.userId) {
          client.linkRichMenuToUser(event.source.userId, richMenuChineseId);
        }
        const msgs: Message | Message[] = [
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
        ]
        return client.replyMessage(event.replyToken, msgs);
      case 'unfollow':
        return client.unlinkRichMenuFromUser(<string>event.source.userId);
      case 'message':
        if (event.message.type === 'sticker') {
          const msg: Message = {
            type: 'text',
            text: 'Sorry, I am dumb, I hope I can understand this sticker someday...'
          }
          return client.replyMessage(event.replyToken, msg);
        }
        if (event.message.type === 'image') {
          const msg: Message = {
            type: 'text',
            text: `Wow, It's a beuatiful image, thanks for sending it to me.`
          }
          return client.replyMessage(event.replyToken, msg);
        } 
        if (event.message.type !== 'text') {
          return Promise.resolve(null);
        }
        if (event.message.text === utils.richMenuText.en.about) {
            const msgs: Message[] = [
              {
                type: 'text',
                text: utils.questionResponse.en.about
              }
            ] 
            return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.ch.about) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.about
            }
          ] 
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.en.exp) {
          const msgs: Message[] = [
           {
             type: 'flex',
             altText: 'This is a flex msg',
             contents: utils.questionResponse.en.exp
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.ch.exp) {
          const msgs: Message[] = [
            {
              type: 'flex',
              altText: 'This is a flex msg',
              contents: utils.questionResponse.ch.exp
            }
           ]
           return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.en.skills) {
          const msgs: Message[] = [
           {
             type: 'flex',
             altText: 'Johnny\'s technical skills.',
             contents: utils.questionResponse.en.skills
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.ch.skills) {
          const msgs: Message[] = [
           {
             type: 'flex',
             altText: '子洋的專業技能',
             contents: utils.questionResponse.ch.skills
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.en.projects) {
          const msgs: Message[] = [
           {
             type: 'flex',
             altText: 'Johnny\'s project',
             contents: utils.questionResponse.en.projects
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.ch.projects) {
          const msgs: Message[] = [
           {
             type: 'flex',
             altText: '子洋的個人專案',
             contents: utils.questionResponse.ch.projects
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.en.whyline) {
          const msgs: Message[] = [
           {
             type: 'text',
             text: utils.questionResponse.en.whyLine
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.richMenuText.ch.whyline) {
          const msgs: Message[] = [
           {
             type: 'text',
             text: utils.questionResponse.ch.whyLine
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.ch.personality) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.personality
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.ch.age) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.age
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.ch.education) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.education
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.ch.english) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.english
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.ch.food) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.food
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.ch.interests) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.interests
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.en.personality) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.en.personality
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.en.age) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.en.age
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.en.education) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.en.education
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.en.english) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.en.english
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.en.food) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.en.food
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === utils.quickreplyText.en.interests) {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.en.interests
            }
          ]
          return client.replyMessage(event.replyToken, msgs);
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
          .then((res) => {
            return Promise.resolve(true);
          })
          .catch(err => console.log(err));
        }
        if (event.postback.data === 'lang=en' && event.source.userId) {
          client.linkRichMenuToUser(event.source.userId, richMenuEnglishId)
          .then((res) => {
            return Promise.resolve(true);
          })
          .catch(err => console.log(err));
        }
        return Promise.resolve(null);
      default: 
            return client.pushMessage((event.source.userId as string), utils.defaultResponse);

    }
  }


function initializeChRichMenu() {
  client.createRichMenu(richmenuChTemplate)
    .then((id) => {
      richMenuChineseId = id;
      return client.setRichMenuImage(id, fs.createReadStream('./assets/chinese.png'))
    })
    .then(() => {
      return client.setDefaultRichMenu(richMenuChineseId);
    })
    .catch((err) => {
      console.log(err);
    })
}


function initializeEnRichMenu() {
  client.createRichMenu(richmenuEnTemplate)
    .then((id) => {
      richMenuEnglishId = id;
      return client.setRichMenuImage(id, fs.createReadStream('./assets/english.png'))
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports = app;