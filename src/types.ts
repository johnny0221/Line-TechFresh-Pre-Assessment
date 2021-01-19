import { FlexBubble, FlexCarousel } from '@line/bot-sdk';

export interface QuestionResponse {
    en: {
        about: string;
        exp: FlexBubble;
        skills: FlexBubble;
        projects: FlexCarousel;
    },
    ch: {
        about: string;
        exp: FlexBubble;
        skills: FlexBubble;
        projects: FlexCarousel;
    }
}