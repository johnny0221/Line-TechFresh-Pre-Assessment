import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import * as line from '@line/bot-sdk';
export const checkValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const body = JSON.stringify(req.body);
    if (line.validateSignature(JSON.stringify(req.body),  <string>process.env['channelSecret'], getSignature(body))) {
        res.status(200);
        console.log('valid!');
        next();
    } else {
        res.status(401);
    }
}

function getSignature(body: string) {
    return crypto.createHmac('SHA256', <string>process.env['channelSecret']).update(body).digest('base64');
}