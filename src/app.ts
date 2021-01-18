import express, { Application, Request, Response, NextFunction, text } from 'express';
import * as line from '@line/bot-sdk';
import { FlexBubble, FlexMessage, Message, MessageAPIResponseBase, QuickReply, TextEventMessage, WebhookEvent } from '@line/bot-sdk';
import { forkJoin, from, Observable } from 'rxjs';
import * as utils from './util';
import faunadb from 'faunadb';
import fs from 'fs';
require('dotenv').config();

const app: Application = express();

const richmenuChTemplate: line.RichMenu = utils.richmenuTemplateChinese;
const richmenuEnTemplate: line.RichMenu = utils.richmenuTemplateEnglish;

const middlewareConfig: line.MiddlewareConfig = {
    channelAccessToken: process.env['channelAccessToken'],
    channelSecret: <string>process.env['channelSecret']
}

const clientConfig: line.ClientConfig = {
    channelAccessToken: <string>process.env['channelAccessToken'],
    channelSecret: <string>process.env['channelSecret']
}

const client: line.Client = new line.Client(clientConfig);
let richMenuChineseId: string = '';
let richMenuEnglishId: string = '';

initializeChRichMenu();
initializeEnRichMenu();


const dbClient: faunadb.Client = new faunadb.Client({
  secret: 'fnAD_vKx3vACCKYJ7AgQAVwC_yK8w-wJcVg7z-wK',
  domain: 'db.fauna.com',
  scheme: 'https',
})

app.use(line.middleware(middlewareConfig))

app.post('/', utils.checkValidationMiddleware, (req: Request, res: Response) => {
  from(Promise.all(req.body.events.map(handleEvent))).subscribe((result) => {
    console.log('result', result);
    return res.json(result);
  })
  
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
  })

// function handleFollow(event) {

// }

function handleEvent(event: WebhookEvent): Promise<MessageAPIResponseBase | null> {
    const q = faunadb.query;
    console.log(event);
    switch (event.type) {
      case 'follow':
        const msgs: Message | Message[] = [
          {
            type: 'text',
            text: `Welcome to Johnny's chatbot 😀🖐。 \n I am Jim, your helper. \n I am going to help you know Johnny more.`
          },
        ]
        return client.replyMessage(event.replyToken, msgs);
      case 'unfollow':
        return client.unlinkRichMenuFromUser(<string>event.source.userId);
      case 'message':
        if (event.message.type !== 'text') {
          return Promise.resolve(null);
        }
        if (event.message.text === 'about') {
            const msgs: Message[] = [
              {
                type: 'text',
                text: utils.questionResponse.en.about
              }
            ] 
            return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === '關於子洋') {
          const msgs: Message[] = [
            {
              type: 'text',
              text: utils.questionResponse.ch.about
            }
          ] 
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === 'experience') {
          const msgs: Message[] = [
           {
             type: 'flex',
             altText: 'This is a flex msg',
             contents: utils.questionResponse.en.exp
           }
          ]
          return client.replyMessage(event.replyToken, msgs);
        }
        if (event.message.text === '個人經歷') {
          const msgs: Message[] = [
            {
              type: 'flex',
              altText: 'This is a flex msg',
              contents: utils.questionResponse.ch.exp
            }
           ]
           return client.replyMessage(event.replyToken, msgs);
        }
        const echo: Message[] = [
          { type: 'text', text: (event.message as TextEventMessage).text}, 
          ];
        return client.replyMessage(event.replyToken, echo);
      case 'postback':
        if (event.postback.data === 'lang=ch' && event.source.userId) {
          client.linkRichMenuToUser(event.source.userId, richMenuChineseId).then((res) => {console.log(res)});
        }
        if (event.postback.data === 'lang=en' && event.source.userId) {
          client.linkRichMenuToUser(event.source.userId, richMenuEnglishId);
        }
        return Promise.resolve(null);
      default: 
            return Promise.resolve(null);

    }
  }

function initializeChRichMenu() {
  client.createRichMenu(richmenuChTemplate)
    .then((id) => {
    console.log(id)
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
  
app.listen(8080)