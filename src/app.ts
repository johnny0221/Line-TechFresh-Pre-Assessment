import express, { Application, Request, Response, NextFunction } from 'express';
import * as line from '@line/bot-sdk';
import { Message, MessageAPIResponseBase, TextEventMessage, WebhookEvent } from '@line/bot-sdk';
import { from, Observable } from 'rxjs';
import * as middlewares from './util';
require('dotenv').config();

const app: express.Application = express();


const middlewareConfig: line.MiddlewareConfig = {
    channelAccessToken: process.env['channelAccessToken'],
    channelSecret: <string>process.env['channelSecret']
}

const clientConfig: line.ClientConfig = {
    channelAccessToken: 'AqZQQu8AAPKxJ3Lx+jHITUq8l7c+AG/tW6i/4nc1FMhDXUPzMlTqZKzPNGrceT3rJvJgHouPmgLp+FtmA26U9ut8x7PmphQ/oEM0yF0OLFAFmXWaNp9i+O4AYKy7r/dr3CEExT7JOiWyNBtsybVkTAdB04t89/1O/w1cDnyilFU=',
    channelSecret: '42e172546e09e334d0672faccaf5a1dc'
}

const client: line.Client = new line.Client(clientConfig);

app.use(line.middleware(middlewareConfig))

app.post('/', middlewares.checkValidationMiddleware, (req: Request, res: Response) => {
    handleEvent(req.body.events[0]).subscribe((result) => {
        res.json(result);
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

function handleEvent(event: WebhookEvent): Observable<Promise<MessageAPIResponseBase> | any> {
    console.log(event);
    switch (event.type) {
      case 'follow':
        let botMsg: Message | Message[] = {
          type: 'text',
          text: `Welcome to Johnny's chatbot, I am helper. \n I am going to help you know Johnny more.`
        } 
        return from(client.replyMessage(event.replyToken, botMsg))
    }
    if (event.type !== 'message') {
      // ignore non-text-message event
      return from(Promise.resolve(null));
    }
  
    // create a echoing text message
    const echo: Message[] = [
        { type: 'text', text: (event.message as TextEventMessage).text}, 
        {
            "type": "text", // ①
            "text": "Select your favorite food category or send me your location!",
            "quickReply": { // ②
              "items": [
                {
                  "type": "action", // ③
                  "imageUrl": "https://example.com/sushi.png",
                  "action": {
                    type: 'postback',
                    "data":"action=buy&itemid=111",
                    "label": "Sushi",
                    "displayText":"Buy"
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
                  "type": "action", // ④
                  "action": {
                    "type": "location",
                    "label": "Send location"
                  }
                }
              ]
            }
          }];
  
    // use reply API
    return from(client.replyMessage(event.replyToken, echo));
  }
  
app.listen(8080)