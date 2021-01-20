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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.basicCommands = exports.defaultResponse = exports.helpMessageReply = exports.welcomeMsg = exports.chQuickReply = exports.enQuickReply = exports.questionResponse = exports.richmenuTemplateChinese = exports.richmenuTemplateEnglish = exports.quickreplyText = exports.richMenuText = void 0;
var line = __importStar(require("@line/bot-sdk"));
exports.richMenuText = {
    en: {
        about: 'Tell me about Johnny.',
        exp: 'Tell me about Johnny\'s experience.',
        skills: 'Tell me about Johnny\s skills.',
        projects: 'Tell me about Johnny\s projects.',
        whyline: 'Why does Johnny want to join Line ?'
    },
    ch: {
        about: '告訴我些關於子洋的事吧！',
        exp: '讓我看看子洋有哪些經歷吧！',
        skills: '子洋有什麼專業技能呀？',
        projects: '子洋有做過哪些專案呢？',
        whyline: '為什麼子洋想加入Line呢？'
    }
};
exports.quickreplyText = {
    en: {
        personality: 'Tell me what kind of person Johnny is.',
        interests: 'Tell me Johnny\'s interests.',
        age: 'Tell me how old is Johnny.',
        english: 'Tell me How well Johnny\'s English is.',
        education: 'Tell me about Johnny\'s education.',
        food: 'Tell me about Johnny\'s Favorite Food.'
    },
    ch: {
        personality: '告訴我子洋是一個怎麼樣的人。',
        interests: '告訴我子洋的興趣。',
        age: '告訴我子洋的年齡。',
        english: '告訴我子洋的語文能力。',
        education: '告訴我子洋就讀哪間大學以及研究所呢？',
        food: '子洋喜歡的食物是？'
    }
};
exports.richmenuTemplateEnglish = {
    "size": {
        "width": 2500,
        "height": 1686
    },
    "selected": true,
    "name": "TechFresh",
    "chatBarText": "Tap to open",
    "areas": [
        // About
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "about",
                "text": exports.richMenuText.en.about
            }
        },
        // Experience
        {
            "bounds": {
                "x": 834,
                "y": 0,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "experience",
                "text": exports.richMenuText.en.exp
            }
        },
        // Skills   
        {
            "bounds": {
                "x": 1667,
                "y": 0,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "skills",
                "text": exports.richMenuText.en.skills
            }
        },
        // Project
        {
            "bounds": {
                "x": 0,
                "y": 834,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "projects",
                "text": exports.richMenuText.en.projects
            }
        },
        // Why Line
        {
            "bounds": {
                "x": 834,
                "y": 834,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "why line",
                "text": exports.richMenuText.en.whyline
            }
        },
        // Toggle
        {
            "bounds": {
                "x": 1667,
                "y": 834,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "postback",
                "label": "toggle",
                "data": "lang=ch",
            }
        }
    ]
};
exports.richmenuTemplateChinese = {
    "size": {
        "width": 2500,
        "height": 1686
    },
    "selected": true,
    "name": "TechFresh",
    "chatBarText": "Tap to open",
    "areas": [
        // About
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "關於子洋",
                "text": exports.richMenuText.ch.about
            }
        },
        // Experience
        {
            "bounds": {
                "x": 834,
                "y": 0,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "個人經歷",
                "text": exports.richMenuText.ch.exp
            }
        },
        // Skills   
        {
            "bounds": {
                "x": 1667,
                "y": 0,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "專業技能",
                "text": exports.richMenuText.ch.skills
            }
        },
        // Project
        {
            "bounds": {
                "x": 0,
                "y": 834,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "個人專案",
                "text": exports.richMenuText.ch.projects
            }
        },
        // Why Line
        {
            "bounds": {
                "x": 834,
                "y": 834,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "message",
                "label": "為什麼投遞Line",
                "text": exports.richMenuText.ch.whyline
            }
        },
        // Toggle
        {
            "bounds": {
                "x": 1667,
                "y": 834,
                "width": 833,
                "height": 833
            },
            "action": {
                "type": "postback",
                "label": "toggle",
                "data": "lang=en",
            }
        }
    ]
};
exports.questionResponse = {
    en: {
        about: "Hi, my name is Johnny currently studying M.S. in Information Management in UIUC.\n\n1\u20E3 Career Goal\n\nI would like to become a dedicated full-stack developer in my early career life, I personally prefer learning various of technical skills than deep dive into just one technical skill, after I have worked for about 5\u201310 years, my ultimate career goal is to become an engineering manager to evaluate the tech stacks in projects and show our skills to the world.\n\n2\u20E3 Learning Stories\n\nNowadays, I am currently interested mostly in Web technologies, I separated web techs into 4 parts to learn\n\n\uD83D\uDFE5 UI/UX\n\nFrom my point of view, I think popular websites always ship with good looking UI and comfortable UX, I have experience in using Figma as a prototyping tool for Roommatch project and I am currently reading \"the design of everyday things\" which is an excellent book for UX design.\n\n\uD83D\uDFE7 Frontend\n\nExcept for HTML, CSS those must-learned thing in frontend development, also have 1.5 year experience in using Angular2+(using Typescript), I am also capable for several CSS libraries such as TailwindCSS and Bootstrap.\n\n\uD83D\uDFE9 Backend\n\nI have used Node/Express in my previous projects and I am currently learning Java Spring framework as my second backend framework. About database systems, I have applied MySQL and MonogDB in previous projects and plan to learn FaunaDB and serverless technologies in 2021.\n\n\uD83D\uDFE6 Devops\n\nI am currently learning Docker and will also learn Kubernetes in the future, I think these two technologies are essential and large tech companies definitely use them.\n\n3\u20E3 Personal Website\n\nhttps://johnny0221.github.io/pw/",
        exp: {
            "type": "bubble",
            "size": "mega",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "Personal Experiences",
                                "color": "#ffffff",
                                "size": "xl",
                                "flex": 4,
                                "weight": "bold",
                            }
                        ]
                    }
                ],
                "backgroundColor": "#6366F1",
                "spacing": "md",
                "height": "75px",
                "justifyContent": "center",
                "alignItems": "center"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    // roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "filler"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [],
                                        "cornerRadius": "30px",
                                        "width": "12px",
                                        "height": "12px",
                                        "borderColor": "#6486E3",
                                        "borderWidth": "2px"
                                    },
                                    {
                                        "type": "filler"
                                    }
                                ],
                                "flex": 0
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Roommatch",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "- Project Lead",
                                        "size": "md",
                                        "weight": "bold"
                                    }
                                ],
                                "justifyContent": "flex-start",
                                "alignItems": "center"
                            }
                        ],
                        "spacing": "lg",
                        "cornerRadius": "30px"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "width": "2px",
                                                "backgroundColor": "#6486E3"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Aug - Current",
                                        "gravity": "top",
                                        "color": "#C0C0C0",
                                        "size": "sm"
                                    }
                                ],
                                "alignItems": "center"
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // first point of the roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "1. Use Angular, TailwindCSS, "
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "NgRx for the frontend.",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // second point of the roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2. Use Node/Express, MySQL"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "MongoDB.",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // third point of the rooommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "3. Build several services to"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "handle operations like photo",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "upload, google maps",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "and analytic charts.",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // doggy intern
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "filler"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [],
                                        "cornerRadius": "30px",
                                        "width": "12px",
                                        "height": "12px",
                                        "borderColor": "#6486E3",
                                        "borderWidth": "2px"
                                    },
                                    {
                                        "type": "filler"
                                    }
                                ],
                                "flex": 0
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Doutify Inc.",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "- SWE Intern",
                                        "size": "md",
                                        "weight": "bold"
                                    }
                                ],
                                "justifyContent": "flex-start",
                                "alignItems": "center"
                            }
                        ],
                        "spacing": "lg",
                        "cornerRadius": "30px"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "width": "2px",
                                                "backgroundColor": "#6486E3"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Jun - 2020 Aug",
                                        "gravity": "top",
                                        "color": "#C0C0C0",
                                        "size": "sm"
                                    }
                                ],
                                "alignItems": "center"
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // first point of the doggy swe
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "1. Independently develop the"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Frontend part of the application",
                                        "margin": "lg"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // second point of doggy swe
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2. Using Angular 10, BootStrap,"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "RxJS and implemented RxJS",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Subject Event Bus Pattern.",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // third point of the doggy swe
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "3. Did a Presentation with the"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "customer to negotiate about",
                                        margin: "lg"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "the requirements.",
                                        margin: "lg"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // tunghai university
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "filler"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [],
                                        "cornerRadius": "30px",
                                        "width": "12px",
                                        "height": "12px",
                                        "borderColor": "#6486E3",
                                        "borderWidth": "2px"
                                    },
                                    {
                                        "type": "filler"
                                    }
                                ],
                                "flex": 0
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "University",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "- Student",
                                        "size": "md",
                                        "weight": "bold"
                                    }
                                ],
                                "justifyContent": "flex-start",
                                "alignItems": "center"
                            }
                        ],
                        "spacing": "lg",
                        "cornerRadius": "30px"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "width": "2px",
                                                "backgroundColor": "#6486E3"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2014 Jun - 2018 Jun",
                                        "gravity": "top",
                                        "color": "#C0C0C0",
                                        "size": "sm"
                                    }
                                ],
                                "alignItems": "center"
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // first point of the roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "1. Founded Calisthenics team,"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "taught nearly twenty people",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "how to correctly workout.",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // second point of the roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2. Represent our department to"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "engage in AACSB conference",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "to introduce our department.",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                ]
            }
        },
        skills: {
            "type": "bubble",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "Technical Skills",
                        "color": "#ffffff",
                        "weight": "bold",
                        "size": "xl"
                    }
                ],
                "height": "75px",
                "backgroundColor": "#D66D75",
                "justifyContent": "center",
                "alignItems": "center"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "Frontend",
                        "weight": "bold",
                        "size": "xl",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "size": "xxl",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/javascript_o1fxrd.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "margin": "md",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/download_haswiw.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "margin": "md",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/bootstrap_bhymok.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/sass_esbd0h.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "Backend",
                        "size": "xl",
                        "weight": "bold",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/nodejs_njtpjl.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/spring_qf4dxz.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "Database",
                        "size": "xl",
                        "weight": "bold",
                        "offsetTop": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mysql_y1o0yo.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mongodb_uhrh3h.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/redis_r19yio.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "Others",
                        "size": "xl",
                        "weight": "bold",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/docker_soagxk.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "English",
                        "weight": "bold",
                        "size": "xl",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "text",
                                "text": "TOEFL: 100(26 27 24 23 )",
                                "weight": "regular"
                            }
                        ],
                        "paddingTop": "md"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "TOEIC: 855",
                                "weight": "regular"
                            }
                        ],
                        "paddingTop": "md"
                    }
                ]
            }
        },
        projects: {
            "type": "carousel",
            "contents": [
                {
                    "type": "bubble",
                    "hero": {
                        "type": "image",
                        "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611033704/Component_11_kss9um.png",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "fit",
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "Roommatch",
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "margin": "md",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Aug - Current",
                                        "size": "sm",
                                        "color": "#999999",
                                        "flex": 0
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Overview",
                                        "weight": "bold",
                                        "size": "lg",
                                        "decoration": "none"
                                    },
                                    {
                                        "type": "text",
                                        "text": "Roommatch is a platform for ",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "international students to manage "
                                    },
                                    {
                                        "type": "text",
                                        "text": "their subleases, find roommates "
                                    },
                                    {
                                        "type": "text",
                                        "text": "and sell second hand items."
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Tech Stacks",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611034935/images_emvrhm.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/download_haswiw.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/nodejs_njtpjl.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mysql_y1o0yo.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mongodb_uhrh3h.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            }
                                        ],
                                        "margin": "lg"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Award",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "1. Ranked top 5 out of 112 teams",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "in the CS411 at UIUC."
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "button",
                                "style": "link",
                                "height": "sm",
                                "action": {
                                    "type": "uri",
                                    "label": "WEBSITE",
                                    "uri": "https://johnny0221.github.io/CS411/"
                                }
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "Demo Viedo",
                                    "uri": "https://www.youtube.com/watch?v=o7ZJzRBe2v4&feature=youtu.be"
                                }
                            }
                        ],
                        "flex": 0
                    }
                },
                {
                    "type": "bubble",
                    "hero": {
                        "type": "image",
                        "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611036833/1455016_0b2d_2_oo41pn.jpg",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "fit"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "Dating app",
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "margin": "md",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Mar - 2020 Jun",
                                        "size": "sm",
                                        "color": "#999999",
                                        "flex": 0
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Overview",
                                        "weight": "bold",
                                        "size": "lg",
                                        "decoration": "none"
                                    },
                                    {
                                        "type": "text",
                                        "text": "This application is based the ",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "course on Udemy to build a "
                                    },
                                    {
                                        "type": "text",
                                        "text": "dating app, built functionalities "
                                    },
                                    {
                                        "type": "text",
                                        "text": "like photo uploading and "
                                    },
                                    {
                                        "type": "text",
                                        "text": "friendship system. "
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Tech Stacks",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/bootstrap_bhymok.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611040220/csharp_i2eifx.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mysql_y1o0yo.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            }
                                        ],
                                        "margin": "lg"
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "button",
                                "style": "link",
                                "height": "sm",
                                "action": {
                                    "type": "uri",
                                    "label": "github repo",
                                    "uri": "https://github.com/johnny0221/FullStack-Project-Angular-DotnetCore"
                                }
                            }
                        ],
                        "flex": 0
                    }
                },
                {
                    "type": "bubble",
                    "hero": {
                        "type": "image",
                        "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611036633/omo_qrprqw.png",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "fit"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "OMO dessert",
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "margin": "md",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2019 Oct - 2020 Jan",
                                        "size": "sm",
                                        "color": "#999999",
                                        "flex": 0
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Overview",
                                        "weight": "bold",
                                        "size": "lg",
                                        "decoration": "none"
                                    },
                                    {
                                        "type": "text",
                                        "text": "This application aims to introduce ",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "OMO dessert which is a dessert "
                                    },
                                    {
                                        "type": "text",
                                        "text": "shop founded by my cousin"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Tech Stacks",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/nodejs_njtpjl.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mongodb_uhrh3h.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/sass_esbd0h.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611037801/download_1_bqnxoi.png",
                                                "margin": "sm",
                                                "size": "xl"
                                            }
                                        ],
                                        "margin": "sm"
                                    }
                                ],
                                "margin": "lg"
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "button",
                                "style": "link",
                                "height": "sm",
                                "action": {
                                    "type": "uri",
                                    "label": "github repo",
                                    "uri": "https://github.com/johnny0221/OMO_Dessert-Angular-NodeJS"
                                }
                            }
                        ],
                        "flex": 0
                    }
                }
            ]
        },
        whyLine: "1\u20E3 Why Line ?\n\nFrom my personal working preferences, I would prefer to stick to a single tech company in my career life, the prerequisite is that the company I target should be robust and innovative, Line has already developed various kinds of services and the process is still continuing, I hope I could join Line to explore modern technologies and develop things that can be used by people around me.\n\n\n2\u20E3 What I can bring for Line ?\n\nSince Line is an international tech company using English at work is inevitable, I am confident with my English ability that I believe I could collaborate with other developers and help Line promote the products and services in Line to western countries. Second, I am mainly a self-taught developer and considered myself as a quick learner with a passionate heart, I am willing to take any challenges faced in Line.",
        personality: "Johnny has a positive heart and he is willing to take any challenges from anywhere. He loves to host on stage and interact with others, but sometimes he will be out of controll on stage and goes crazy...",
        interests: "1. Johnny was 80kg back in high school and was once addicted to heavy weight workout in college, but now his body is somewhat out of shape again, trying to recover.\n\n2. Johnny also loves to play Leauge with his friends, his highest ranking was platinum one. ",
        age: "Born in 1996, 18 years old.",
        english: "Johnny once got 100 on Toefl and 855 on Toeic. The hardest English challenge for him is the first time trying to order in Subway in America.",
        education: "Graduated from Tunghai University, currently a UIUC graduate student.",
        food: "Anything except tomatos."
    },
    ch: {
        about: "Hi\uFF0C \u6211\u53EBJohnny\u76EE\u524D\u5C31\u8B80\u65BC\u4F0A\u5229\u8AFE\u5927\u5B78\u9999\u6AB3\u5206\u6821\u8CC7\u8A0A\u7BA1\u7406\u6240\u3002\n\n1\u20E3 \u8077\u6DAF\u898F\u5283\n\n\u5728\u6211\u65E9\u671F\u7684\u8077\u696D\u751F\u6DAF\u4E2D\uFF0C\u6211\u8A08\u5283\u7576\u4E00\u500B\u5168\u8077\u7684\u958B\u767C\u4EBA\u54E1\uFF0C\u6BD4\u8D77\u947D\u7814\u4E00\u7A2E\u6280\u8853\u6211\u66F4\u65B0\u6B61\u5B78\u7FD2\u8A31\u591A\u4E0D\u540C\u7684\u6280\u8853\u4E26\u5BE6\u969B\u7684\u61C9\u7528\u4ED6\u5011\uFF0C\u5728\u5DE5\u4F5C\u521D\u671F\u76845\u201310\u5E74\u7576\u4E2D\u6211\u671F\u671B\u80FD\u719F\u6089\u516C\u53F8\u5167\u6240\u5728\u4F7F\u7528\u7684\u6280\u8853\u548C\u4F5C\u696D\u6D41\u7A0B\uFF0C\u6211\u6700\u7D42\u7684\u76EE\u6A19\u662F\u7576\u4E00\u500B\u5DE5\u7A0B\u7D93\u7406(Engineering Manager)\uFF0C\u5C0D\u5167\u53EF\u4EE5\u8A55\u4F30\u6280\u8853\u5728\u65B0\u5C08\u6848\u7684\u53EF\u884C\u6027\uFF0C\u5C0D\u5916\u4E5F\u53EF\u4EE5\u6E05\u695A\u7684\u89E3\u91CB\u516C\u53F8\u7684\u904B\u71DF\n\n2\u20E3 \u5B78\u7FD2\u6B77\u7A0B\n\n\u6211\u5C08\u6CE8\u65BC\u5B78\u7FD2Web technologies\uFF0C\u4E26\u628A\u4ED6\u5011\u5206\u6210\u56DB\u5927\u90E8\u5206\u4F86\u5B78\u7FD2\u3002\n\n\uD83D\uDFE5 UIUX\n\n\u5C0D\u6211\u4F86\u8AAA\uFF0C\u4E00\u500B\u597D\u7684\u7DB2\u7AD9\u5FC5\u7136\u6703\u81EA\u5E36\u8457\u597D\u770B\u7684\u8A2D\u8A08\u4EE5\u53CA\u7D66\u4E88\u4F7F\u7528\u8005\u597D\u7528\u7684\u9AD4\u9A57\uFF0C\u6211\u6709\u4F7F\u7528\u904EFigma\u5728\u5C08\u6848\u521D\u671F\u4E2D\u4F86\u7E6A\u88FD\u7CFB\u7D71\u7684prototype\uFF0C\u6211\u6700\u8FD1\u4E5F\u5728\u7814\u8B80\u4E00\u672C\u53EB\u505A\"the design of everyday things\"\u7684\u66F8\u7C4D\u4F86\u589E\u9032\u6211\u7684UIUX\u6280\u80FD\u3002 \n\n\uD83D\uDFE7 \u524D\u7AEF\n\n\u9664\u4E86\u57FA\u672C\u7684HTML, CSS\u4E4B\u5916\uFF0C\u5728\u524D\u7AEF\u6846\u67B6\u7684\u90E8\u5206\u6211\u6709\u84571\u5E74\u4EE5\u4E0A\u5229\u7528Typescript\u958B\u767CAngular\u7684\u7D93\u9A57\uFF0C\u6211\u4E5F\u6709\u4F7F\u7528\u904E\u8A31\u591ACSS library\u50CF\u662FTailwindCSS\u4EE5\u53CABootstrap\u3002\n\n\uD83D\uDFE9 \u5F8C\u7AEF\n\n\u6211\u6709\u4F7F\u7528\u904ENode/Express\u5728\u6211\u4E4B\u524D\u7684\u5C08\u6848\u4E0A\uFF0C\u73FE\u5728\u6211\u5247\u662F\u958B\u59CB\u5B78\u7FD2Java\u7684Spring\u6846\u67B6\uFF0C\u8CC7\u6599\u5EAB\u7684\u90E8\u5206\u6709\u4F7F\u7528\u904EMongoDB\u4EE5\u53CAMySQL\u5728\u6211\u6240\u5EFA\u9020\u7684\u5C08\u6848\u4E0A\uFF0C\u57282021\u5E74\u6211\u5E0C\u671B\u81EA\u5DF1\u53EF\u4EE5\u5B78\u7FD2FaunaDB\u4EE5\u53CA\u6709\u95DC\u65BCServerless\u7684\u6280\u8853\u3002\n\n\uD83D\uDFE6 Devops\n\n\u6211\u73FE\u5728\u6709\u5728\u5B78\u7FD2Docker\uFF0C\u672A\u4F86\u4E5F\u6703\u5B78\u7FD2\u50CF\u662FKubernetes / Docker Swarm\u7B49\u6280\u8853\uFF0C\u6211\u60F3\u5BB9\u5668\u5316\u7684\u6280\u8853\u5728\u73FE\u5728\u4EE5\u53CA\u672A\u4F86\u90FD\u662F\u4E00\u500B\u8DA8\u52E2\uFF0C\u9664\u6B64\u4E4B\u5916\u6211\u4E5F\u60F3\u5B78\u7FD2\u5982\u4F55\u6253\u9020\u4E00\u500BCI/CD\u7684\u7BA1\u7DDA\u4E26\u61C9\u7528\u5728\u6211\u500B\u4EBA\u7684project\u4E0A\u3002\n\n3\u20E3 \u500B\u4EBA\u7DB2\u7AD9\n\nhttps://johnny0221.github.io/pw/",
        exp: {
            "type": "bubble",
            "size": "mega",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "個人經歷",
                                "color": "#ffffff",
                                "size": "xl",
                                "flex": 4,
                                "weight": "bold",
                            }
                        ]
                    }
                ],
                "backgroundColor": "#6366F1",
                "spacing": "md",
                "height": "75px",
                "justifyContent": "center",
                "alignItems": "center"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    // roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "filler"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [],
                                        "cornerRadius": "30px",
                                        "width": "12px",
                                        "height": "12px",
                                        "borderColor": "#6486E3",
                                        "borderWidth": "2px"
                                    },
                                    {
                                        "type": "filler"
                                    }
                                ],
                                "flex": 0
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Roommatch",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "- Project Lead",
                                        "size": "md",
                                        "weight": "bold"
                                    }
                                ],
                                "justifyContent": "flex-start",
                                "alignItems": "center"
                            }
                        ],
                        "spacing": "lg",
                        "cornerRadius": "30px"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "width": "2px",
                                                "backgroundColor": "#6486E3"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Aug - Current",
                                        "gravity": "top",
                                        "color": "#C0C0C0",
                                        "size": "sm"
                                    }
                                ],
                                "alignItems": "center"
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // first point of the roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "1. 使用 Angular，TailwindCSS，"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "NgRx來做前端開發。",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // second point of the roommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2. 使用 Node/Express，MySQL，"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "MongoDB 來做後端開發。",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // third point of the rooommatch
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "3. 建立Services去控管照片上"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "傳，Google Maps，分析圖表。",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // doggy intern
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "filler"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [],
                                        "cornerRadius": "30px",
                                        "width": "12px",
                                        "height": "12px",
                                        "borderColor": "#6486E3",
                                        "borderWidth": "2px"
                                    },
                                    {
                                        "type": "filler"
                                    }
                                ],
                                "flex": 0
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "多奇數位",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 軟體實習生",
                                        "size": "md",
                                        "weight": "bold"
                                    }
                                ],
                                "justifyContent": "flex-start",
                                "alignItems": "center"
                            }
                        ],
                        "spacing": "lg",
                        "cornerRadius": "30px"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "width": "2px",
                                                "backgroundColor": "#6486E3"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Jun - 2020 Aug",
                                        "gravity": "top",
                                        "color": "#C0C0C0",
                                        "size": "sm"
                                    }
                                ],
                                "alignItems": "center"
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // first point of the doggy swe
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "1. 獨立開發系統前端以及參與後"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "端API格式討論。",
                                        "margin": "lg"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // second point of doggy swe
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2. 使用Angular 10，BootStrap，"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "RxJS 並實作了Event Bus",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Pattern。",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // third point of the doggy swe
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "3. 與客戶當面進行需求分析的"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "討論並demo系統操作。",
                                        margin: "lg"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // tunghai university
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "filler"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [],
                                        "cornerRadius": "30px",
                                        "width": "12px",
                                        "height": "12px",
                                        "borderColor": "#6486E3",
                                        "borderWidth": "2px"
                                    },
                                    {
                                        "type": "filler"
                                    }
                                ],
                                "flex": 0
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "東海大學",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 學生",
                                        "size": "md",
                                        "weight": "bold"
                                    }
                                ],
                                "justifyContent": "flex-start",
                                "alignItems": "center"
                            }
                        ],
                        "spacing": "lg",
                        "cornerRadius": "30px"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "width": "2px",
                                                "backgroundColor": "#6486E3"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2014 Jun - 2018 Jun",
                                        "gravity": "top",
                                        "color": "#C0C0C0",
                                        "size": "sm"
                                    }
                                ],
                                "alignItems": "center"
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // first point of the thu
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "1. 創立系跑，指導約20位系上"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "同學正確的運動觀念以及動",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "作。",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    // second point of the thu
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2. 代表系上參與AACSB管院會"
                                    }
                                ]
                            }
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "議，在會議上分享系上的課",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "filler"
                                            },
                                            {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [],
                                                "backgroundColor": "#6486E3",
                                                "width": "2px"
                                            },
                                            {
                                                "type": "filler"
                                            }
                                        ],
                                        "flex": 1
                                    }
                                ],
                                "width": "12px"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "程以及文化。",
                                        "margin": "xl"
                                    }
                                ]
                            },
                        ],
                        "height": "32px",
                        "spacing": "sm"
                    },
                ]
            }
        },
        skills: {
            "type": "bubble",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "專業技能",
                        "color": "#ffffff",
                        "weight": "bold",
                        "size": "xl"
                    }
                ],
                "height": "75px",
                "backgroundColor": "#D66D75",
                "justifyContent": "center",
                "alignItems": "center"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "前端",
                        "weight": "bold",
                        "size": "xl",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "size": "xxl",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/javascript_o1fxrd.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "margin": "md",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/download_haswiw.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "margin": "md",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/bootstrap_bhymok.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/sass_esbd0h.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "後端",
                        "size": "xl",
                        "weight": "bold",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/nodejs_njtpjl.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/spring_qf4dxz.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "size": "sm",
                                "url": "https://img.icons8.com/fluent/2x/star-half-empty.png"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "資料庫",
                        "size": "xl",
                        "weight": "bold",
                        "offsetTop": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mysql_y1o0yo.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mongodb_uhrh3h.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/redis_r19yio.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "其他",
                        "size": "xl",
                        "weight": "bold",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "icon",
                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/docker_soagxk.png",
                                "size": "xxl",
                                "offsetTop": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm",
                                "margin": "md"
                            },
                            {
                                "type": "icon",
                                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
                                "size": "sm"
                            }
                        ],
                        "paddingTop": "md",
                        "height": "50px"
                    },
                    {
                        "type": "text",
                        "text": "語文能力",
                        "weight": "bold",
                        "size": "xl",
                        "margin": "md"
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "text",
                                "text": "TOEFL: 100(26 27 24 23 )",
                                "weight": "regular"
                            }
                        ],
                        "paddingTop": "md"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "TOEIC: 855",
                                "weight": "regular"
                            }
                        ],
                        "paddingTop": "md"
                    }
                ]
            }
        },
        projects: {
            "type": "carousel",
            "contents": [
                {
                    "type": "bubble",
                    "hero": {
                        "type": "image",
                        "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611033704/Component_11_kss9um.png",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "fit",
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "Roommatch",
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "margin": "md",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Aug - Current",
                                        "size": "sm",
                                        "color": "#999999",
                                        "flex": 0
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "專案敘述",
                                        "weight": "bold",
                                        "size": "lg",
                                        "decoration": "none"
                                    },
                                    {
                                        "type": "text",
                                        "text": "Roommatch是一個專門為UIUC",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "學生所打造的平台，此平台提供的"
                                    },
                                    {
                                        "type": "text",
                                        "text": "內容主要協助管理租屋處，找室友"
                                    },
                                    {
                                        "type": "text",
                                        "text": "以及販售二手商品。"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "使用技術",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611034935/images_emvrhm.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/download_haswiw.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/nodejs_njtpjl.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mysql_y1o0yo.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mongodb_uhrh3h.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            }
                                        ],
                                        "margin": "lg"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "Award",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold",
                                    },
                                    {
                                        "type": "text",
                                        "text": "1. 在UIUC CS411課堂評選112隊",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "中獲得前5名。"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "button",
                                "style": "link",
                                "height": "sm",
                                "action": {
                                    "type": "uri",
                                    "label": "前往網站",
                                    "uri": "https://johnny0221.github.io/CS411/"
                                }
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "展示影片",
                                    "uri": "https://www.youtube.com/watch?v=o7ZJzRBe2v4&feature=youtu.be"
                                }
                            }
                        ],
                        "flex": 0
                    }
                },
                {
                    "type": "bubble",
                    "hero": {
                        "type": "image",
                        "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611036833/1455016_0b2d_2_oo41pn.jpg",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "fit"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "Dating app",
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "margin": "md",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2020 Mar - 2020 Jun",
                                        "size": "sm",
                                        "color": "#999999",
                                        "flex": 0
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "專案敘述",
                                        "weight": "bold",
                                        "size": "lg",
                                        "decoration": "none"
                                    },
                                    {
                                        "type": "text",
                                        "text": "此專案依照Udemy的課程來打造",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "一個約會網站，實作了照片上傳"
                                    },
                                    {
                                        "type": "text",
                                        "text": "功能，好友系統等功能。"
                                    },
                                ],
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "使用技術",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024098/bootstrap_bhymok.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611040220/csharp_i2eifx.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mysql_y1o0yo.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            }
                                        ],
                                        "margin": "lg"
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "button",
                                "style": "link",
                                "height": "sm",
                                "action": {
                                    "type": "uri",
                                    "label": "github repo",
                                    "uri": "https://github.com/johnny0221/FullStack-Project-Angular-DotnetCore"
                                }
                            }
                        ],
                        "flex": 0
                    }
                },
                {
                    "type": "bubble",
                    "hero": {
                        "type": "image",
                        "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611036633/omo_qrprqw.png",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "fit"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "OMO dessert",
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "margin": "md",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "2019 Oct - 2020 Jan",
                                        "size": "sm",
                                        "color": "#999999",
                                        "flex": 0
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "專案敘述",
                                        "weight": "bold",
                                        "size": "lg",
                                        "decoration": "none"
                                    },
                                    {
                                        "type": "text",
                                        "text": "OMO Dessert是一間家人開的甜",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "點店，此專案志在建立形象網站。"
                                    },
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "使用技術",
                                        "margin": "md",
                                        "size": "lg",
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611023622/angular_sab6as.png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/rxjs_hh4ces.jpg",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024100/typescript_jf0tsi.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/nodejs_njtpjl.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/mongodb_uhrh3h.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/git_etgyo0.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611024099/sass_esbd0h.png",
                                                "size": "xl",
                                                "margin": "sm"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611037801/download_1_bqnxoi.png",
                                                "margin": "sm",
                                                "size": "xl"
                                            }
                                        ],
                                        "margin": "lg"
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "button",
                                "style": "link",
                                "height": "sm",
                                "action": {
                                    "type": "uri",
                                    "label": "github repo",
                                    "uri": "https://github.com/johnny0221/OMO_Dessert-Angular-NodeJS"
                                }
                            }
                        ],
                        "flex": 0
                    }
                }
            ]
        },
        whyLine: "1\u20E3 \u70BA\u4EC0\u9EBC\u60F3\u9032\u5165Line\uFF1F\n\n\u5C31\u6211\u500B\u4EBA\u7684\u8077\u6DAF\u898F\u5283\uFF0C\u6211\u5E0C\u671B\u6211\u80FD\u7D42\u8EAB\u5728\u4E00\u9593\u6210\u9577\u6027\u9AD8\u4E14\u6210\u719F\u7684\u8DE8\u570B\u79D1\u6280\u516C\u53F8\u5DE5\u4F5C\uFF0CLine\u662F\u4E00\u9593\u6A6B\u57AE\u8A31\u591A\u570B\u5BB6\u7684\u4F01\u696D\uFF0C\u4E14\u5DF2\u7D93\u958B\u767C\u51FA\u8A31\u591A\u5BE6\u7528\u7684\u670D\u52D9\uFF0C\u6211\u5E0C\u671B\u53EF\u4EE5\u52A0\u5165Line\u4F86\u4F7F\u7528\u6700\u73FE\u4EE3\u7684\u79D1\u6280\u4F86\u8A72\u767C\u4E00\u500B\u80FD\u8B93\u6211\u8EAB\u908A\u7684\u4EBA\u90FD\u5728\u4F7F\u7528\u7684Line\u7522\u54C1\u3002\n\n2\u20E3 \u6211\u53EF\u4EE5\u70BALine\u5E36\u4F86\u4EC0\u9EBC\uFF1F\n\nLine\u662F\u4E00\u9593\u8DE8\u570B\u516C\u53F8\uFF0C\u6211\u76F8\u4FE1\u5728\u8077\u5834\u4E0A\u4F7F\u7528\u82F1\u6587\u8207\u5176\u4ED6\u570B\u5BB6\u7684Line developers\u6E9D\u901A\u662F\u7121\u6CD5\u907F\u514D\u7684\uFF0C\u6211\u5C0D\u6211\u7684\u82F1\u8A9E\u53E3\u8AAA\u80FD\u529B\u76F8\u7576\u6709\u81EA\u4FE1\uFF0C\u6211\u76F8\u4FE1\u6211\u4E5F\u80FD\u5E6B\u52A9\u63A8\u5EE3Line\u7684\u5404\u7A2E\u7522\u54C1\u4EE5\u53CA\u670D\u52D9\u5230\u897F\u65B9\u570B\u5BB6\u3002\u6211\u662F\u4E3B\u8981\u662F\u4E00\u500B\u81EA\u5B78\u7684\u958B\u767C\u8005\uFF0C\u6211\u8A8D\u70BA\u6211\u662F\u4E00\u500B\u5B78\u7FD2\u80FD\u529B\u5FEB\u901F\u4E26\u4E14\u9858\u610F\u63A5\u53D7\u65B0\u6280\u8853\uFF0C\u6211\u76F8\u4FE1\u6211\u80FD\u5728Line\u63A5\u53D7\u4EE5\u53CA\u8DF3\u6230\u5404\u7A2E\u4EFB\u52D9\u3002",
        personality: "\u5B50\u6D0B\u6709\u4E00\u9846\u6B63\u9762\u7684\u5FC3\u4E14\u4E5F\u9858\u610F\u63A5\u53D7\u4F86\u81EA\u5404\u65B9\u9762\u7684\u6311\u6230\uFF0C\u4ED6\u559C\u6B61\u5728\u53F0\u4E0A\u4E3B\u6301\u4E14\u8207\u4ED6\u4EBA\u6236\u61C2\uFF0C\u4F46\u6709\u6642\u5019\u592Ahigh\u6703\u6709\u9EDE\u5931\u53BB\u63A7\u5236...",
        interests: "1. \u5B50\u6D0B\u5728\u9AD8\u4E2D\u7684\u6642\u5019\u66FE\u9AD8\u905480\u516C\u65A4\uFF0C\u5728\u5927\u5B78\u6642\u611B\u4E0A\u5065\u8EAB\u904B\u52D5\uFF0C\u4F46\u73FE\u5728\u8EAB\u6750\u597D\u50CF\u53C8\u6709\u9EDE\u8D70\u9418\u4E86...\u6B63\u5728\u52AA\u529B\u56DE\u6625\u4E2D\u3002\n\n2. \u5B50\u6D0B\u53E6\u4E00\u500B\u8208\u8DA3\u662F\u548C\u670B\u53CB\u6253LOL\uFF0C\u724C\u4F4D\u6700\u9AD8\u9054\u5230\u767D\u91D11\u904E\u3002",
        age: "\u51FA\u751F\u65BC1996\u5E74\uFF0C18\u6B72",
        english: "\u5B50\u6D0B\u66FE\u7D93\u5728\u6258\u798F\u548C\u591A\u76CA\u5206\u5225\u62FF\u4E0B100\u5206\u4EE5\u53CA855\u5206\uFF0C\u9762\u5C0D\u904E\u6700\u96E3\u7684\u82F1\u6587\u6311\u6230\u662F\u5728\u7F8E\u570B\u7684Subway\u9EDE\u9910\u3002",
        education: "\u7562\u696D\u65BC\u6771\u6D77\u5927\u5B78\uFF0C\u73FE\u5728\u5728\u4F0A\u5229\u8AFE\u5927\u5B78\u9999\u6AB3\u5206\u6821\u5C31\u8B80\u7814\u7A76\u6240\u3002",
        food: "\u9664\u4E86\u756A\u8304\u4E4B\u5916\u7684\u5176\u4ED6\u98DF\u7269\u3002."
    }
};
exports.enQuickReply = [
    {
        "type": "text",
        "text": "Pick one question that you are interested in Johnny !",
        "quickReply": {
            "items": [
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/006-user_cwqf9v.png",
                    "action": {
                        "type": "message",
                        "label": "Personality",
                        "text": exports.quickreplyText.en.personality
                    },
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/002-jigsaw_br3wzs.png",
                    "action": {
                        "type": "message",
                        "label": "Interests",
                        "text": exports.quickreplyText.en.interests
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/005-age_zi9pfe.png",
                    "action": {
                        "type": "message",
                        "label": "Age",
                        "text": exports.quickreplyText.en.age
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/003-abc-block_zzo4lk.png",
                    "action": {
                        "type": "message",
                        "label": "English Ability",
                        "text": exports.quickreplyText.en.english
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/004-graduation-cap_xwliwx.png",
                    "action": {
                        "type": "message",
                        "label": "education",
                        "text": exports.quickreplyText.en.education
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/001-dish_uyl9rk.png",
                    "action": {
                        "type": "message",
                        "label": "favorite food",
                        "text": exports.quickreplyText.en.food
                    }
                }
            ]
        }
    }
];
exports.chQuickReply = [
    {
        "type": "text",
        "text": "選擇一個你想了解子洋的事情吧！",
        "quickReply": {
            "items": [
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/006-user_cwqf9v.png",
                    "action": {
                        "type": "message",
                        "label": "個性",
                        "text": exports.quickreplyText.ch.personality
                    },
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/002-jigsaw_br3wzs.png",
                    "action": {
                        "type": "message",
                        "label": "興趣",
                        "text": exports.quickreplyText.ch.interests
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/005-age_zi9pfe.png",
                    "action": {
                        "type": "message",
                        "label": "年齡",
                        "text": exports.quickreplyText.ch.age
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/003-abc-block_zzo4lk.png",
                    "action": {
                        "type": "message",
                        "label": "語文能力",
                        "text": exports.quickreplyText.ch.english
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/004-graduation-cap_xwliwx.png",
                    "action": {
                        "type": "message",
                        "label": "學歷",
                        "text": exports.quickreplyText.ch.education
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/001-dish_uyl9rk.png",
                    "action": {
                        "type": "message",
                        "label": "食物",
                        "text": exports.quickreplyText.ch.food
                    }
                }
            ]
        }
    }
];
exports.welcomeMsg = {
    en: {
        welcome: "Welcome to Johnny's chatbot \uD83D\uDE00\uD83D\uDD90\u3002 \n I am Jim, your helper who is going to help you know Johnny more.",
        commands: "Commands \n\n sq -en\n\nShow basic English questions\u3002\n\n sq -ch\n\nShow basic Chinese questions\u3002\n\n help\n\nShow all the commands you can execute\u3002"
    },
    ch: {
        welcome: "\u6B61\u8FCE\u4F86\u5230\u5B50\u6D0B\u7684\u804A\u5929\u6C23\u6A5F\u5668\u4EBA \uD83D\uDE00\uD83D\uDD90\u3002 \n \u6211\u662FJim\uFF0C\u60A8\u7684\u5C0F\u5E6B\u624B\u5C07\u6703\u5E36\u4F60\u66F4\u8A8D\u8B58\u5B50\u6D0B\u3002",
        commands: "\u57FA\u672C\u6307\u4EE4\n\n sq -en\n\n \u547C\u53EB\u57FA\u672C\u82F1\u6587\u7248\u554F\u984C\u3002\n\n sq -ch\n\n \u547C\u53EB\u57FA\u672C\u4E2D\u6587\u7248\u554F\u984C\u3002\n\n help\n\n \u547C\u53EB\u53EF\u57F7\u884C\u6307\u4EE4\u3002\n\n \u5176\u4ED6\u8CC7\u8A0A\u8ACB\u5229\u7528\u4E0B\u9762\u7684\u9078\u55AE\u3002"
    }
};
exports.helpMessageReply = [
    {
        type: 'text',
        text: 'Basic Commands\n\n sq -en\n\n Show Basic English questions。\n\n sq -ch\n\n Show Basic Chinese questions。\n\n help\n\n Show the executable commands。\n\n for other informations please use the rich menu below\n\n\n基本指令\n\n sq -en\n\n 呼叫基本英文版問題。\n\n sq -ch\n\n 呼叫基本中文版問題。\n\n help\n\n 呼叫可執行指令。\n\n 其他資訊請利用下面的選單。'
    }
];
exports.defaultResponse = [
    {
        "type": "text",
        "text": "抱歉我不了解您輸入的內容"
    },
    {
        "type": "text",
        "text": "也許你想了解子洋的．．．",
        "quickReply": {
            "items": [
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/006-user_cwqf9v.png",
                    "action": {
                        "type": "message",
                        "label": "個性",
                        "text": exports.quickreplyText.ch.personality
                    },
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/002-jigsaw_br3wzs.png",
                    "action": {
                        "type": "message",
                        "label": "興趣",
                        "text": exports.quickreplyText.ch.interests
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/005-age_zi9pfe.png",
                    "action": {
                        "type": "message",
                        "label": "年齡",
                        "text": exports.quickreplyText.ch.age
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/003-abc-block_zzo4lk.png",
                    "action": {
                        "type": "message",
                        "label": "語文能力",
                        "text": exports.quickreplyText.ch.english
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/004-graduation-cap_xwliwx.png",
                    "action": {
                        "type": "message",
                        "label": "學歷",
                        "text": exports.quickreplyText.ch.education
                    }
                },
                {
                    "type": "action",
                    "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/001-dish_uyl9rk.png",
                    "action": {
                        "type": "message",
                        "label": "食物",
                        "text": exports.quickreplyText.ch.food
                    }
                }
            ]
        }
    }
];
exports.basicCommands = {
    showQuestionsEnRegexp: /sq\s*-en/mgi,
    showQuestionsChRegexp: /sq\s*-ch/mgi,
    help: /help/mgi
};
function handleError(err, req, res, next) {
    if (err instanceof line.SignatureValidationFailed) {
        res.status(401).send(err.signature);
        res.status(401).send(err.signature);
        return;
    }
    else if (err instanceof line.JSONParseError) {
        res.status(400).send(err.raw);
        return;
    }
    next(err);
}
exports.handleError = handleError;
