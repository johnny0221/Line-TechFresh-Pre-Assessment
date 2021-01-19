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
          "label": "skills",
          "text": "skills"
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
          "label": "why line",
          "text": "why line"
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
        }
    }
}


function getSignature(body: string) {
    return crypto.createHmac('SHA256', <string>process.env['channelSecret']).update(body).digest('base64');
}