import { FlexBubble, FlexCarousel } from '@line/bot-sdk';

export interface QuestionResponse {
    en: {
        about: string;
        exp: FlexBubble;
        skills: FlexBubble;
        projects: FlexCarousel;
        whyLine: string;
        personality: string;
        interests: string;
        age: string;
        english: string;
        education: string;
        food: string;
    },
    ch: {
        about: string;
        exp: FlexBubble;
        skills: FlexBubble;
        projects: FlexCarousel;
        whyLine: string;
        personality: string;
        interests: string;
        age: string;
        english: string;
        education: string;
        food: string;
    }
}

