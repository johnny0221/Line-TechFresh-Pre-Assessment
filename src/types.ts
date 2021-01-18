import { FlexBubble } from '@line/bot-sdk';

export interface QuestionResponse {
    en: {
        about: string;
        exp: FlexBubble;
    },
    ch: {
        about: string;
        exp: FlexBubble;
    }
}