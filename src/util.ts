import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import * as line from '@line/bot-sdk';
import * as types from './types';
import { FlexBubble } from '@line/bot-sdk';

export const richmenuTemplateEnglish: line.RichMenu = {
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
          "text": "about"
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
          "text": "experience"
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
          "label": "Skills",
          "text": "Skills"
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
          "text": "projects"
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
          "label": "projects",
          "text": "projects"
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
            "type":"postback",
            "label":"toggle",
            "data":"lang=ch",
            "text":"toggle"
        }
      }
    ]
}

export const richmenuTemplateChinese: line.RichMenu = {
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
          "text": "關於子洋"
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
          "text": "個人經歷"
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
          "text": "專業技能"
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
          "text": "個人專案"
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
          "label": "為什麼投遞Tech Fresh",
          "text": "為什麼投遞Tech Fresh"
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
            "type":"postback",
            "label":"toggle",
            "data":"lang=en",
            "text":"toggle"
        }
      }
    ]
}

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

export const questionResponse: types.QuestionResponse = {
    en: {
        about: `Hi, my name is Johnny currently studying M.S. in Information Management in UIUC.\n\n1⃣ Career Goal\n\nI would like to become a dedicated full-stack developer in my early career life, I personally prefer learning various of technical skills than deep dive into just one technical skill, after I have worked for about 5–10 years, my ultimate career goal is to become an engineering manager to evaluate the tech stacks in projects and show our skills to the world.\n\n2⃣ Learning Stories\n\nNowadays, I am currently interested mostly in Web technologies, I separated web techs into 4 parts to learn\n\n🟥 UI/UX\n\nFrom my point of view, I think popular websites always ship with good looking UI and comfortable UX, though I am a beginner in this area, I have experience using Figma as a prototyping tool for Roommatch project and I am currently reading "the design of everyday things" which is an excellent book for UX design.\n\n🟧 Frontend\n\nExcept for HTML, CSS those must-learned thing in frontend development, also have 1.5 year experience in using Angular2+(using Typescript), I am also capable for several CSS libraries such as TailwindCSS and Bootstrap.\n\n🟩 Backend\n\nI have used Node/Express in my previous projects and I am currently learning Java Spring framework as my second backend framework. About database systems, I have applied MySQL and MonogDB in previous projects and plan to learn FaunaDB and serverless technologies in 2021.\n\n🟦 Devops\n\nI am currently learning Docker and will also learn Kubernetes in the future, I think these two technologies are essential and large tech companies definitely use them.\n\n3⃣ Personal Website\n\nhttps://www.google.com/?hl=zh_tw`,
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
        }
    },
    ch: {
        about: `Hi， 我叫Johnny目前就讀於伊利諾大學香檳分校資訊管理所。\n\n1⃣ 職涯規劃\n\n在我早期的職業生涯中，我計劃當一個全職的開發人員，比起鑽研一種技術我更新歡學習許多不同的技術並實際的應用他們，在工作初期的5–10年當中我期望能熟悉公司內所在使用的技術和作業流程，我最終的目標是當一個工程經理(Engineering Manager)，對內可以評估技術在新專案的可行性，對外也可以清楚的解釋公司的運營\n\n2⃣ 學習歷程\n\n我專注於學習Web technologies，並把他們分成四大部分來學習。\n\n🟥 UIUX\n\n對我來說，一個好的網站必然會自帶著好看的設計以及給予使用者好用的體驗，雖然我在UIUX領域是個新手但我有使用過Figma在專案初期中來繪製系統的prototype，我最近也在研讀一本叫做"the design of everyday things"的書籍來增進我的UIUX技能。 \n\n🟧 前端\n\n除了基本的HTML, CSS之外，在前端框架的部分我有著1年以上利用Typescript開發Angular的經驗，我也有使用過許多CSS library像是TailwindCSS以及Bootstrap。\n\n🟩 後端\n\n我有使用過Node/Express在我之前的專案上，現在我則是開始學習Java的Spring框架，資料庫的部分有使用過MongoDB以及MySQL在我所建造的專案上，在2021年我希望自己可以學習FaunaDB以及有關於Serverless的技術。\n\n🟦 Devops\n\n我現在有在學習Docker，未來也會學習像是Kubernetes / Docker Swarm等技術，我想容器化的技術在現在以及未來都是一個趨勢，除此之外我也想學習如何打造一個CI/CD的管線並應用在我個人的project上。\n\n3⃣ 個人網站\n\nhttps://www.google.com/?hl=zh_tw`,
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
                            "text": "2. 使用Angular 10, BootStrap,"
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
        }
    }
}


function getSignature(body: string) {
    return crypto.createHmac('SHA256', <string>process.env['channelSecret']).update(body).digest('base64');
}