import { NextFunction, Response, Request } from 'express';
import * as line from '@line/bot-sdk';
import * as types from './types';

export const richMenuText = {
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

export const quickreplyText = {
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
}

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
          "text": richMenuText.en.about
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
          "text": richMenuText.en.exp
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
          "text": richMenuText.en.skills
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
          "text": richMenuText.en.projects
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
          "text": richMenuText.en.whyline
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
          "text": richMenuText.ch.about
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
          "text": richMenuText.ch.exp
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
          "text": richMenuText.ch.skills
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
          "text": richMenuText.ch.projects
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
          "text": richMenuText.ch.whyline
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
        }
      }
    ]
}

export const questionResponse: types.QuestionResponse = {
    en: {
        about: `Hi, my name is Johnny currently studying M.S. in Information Management in UIUC.\n\n1⃣ Career Goal\n\nI would like to become a dedicated full-stack developer in my early career life, I personally prefer learning various of technical skills than deep dive into just one technical skill, after I have worked for about 5–10 years, my ultimate career goal is to become an engineering manager to evaluate the tech stacks in projects and show our skills to the world.\n\n2⃣ Learning Stories\n\nNowadays, I am currently interested mostly in Web technologies, I separated web techs into 4 parts to learn\n\n🟥 UI/UX\n\nFrom my point of view, I think popular websites always ship with good looking UI and comfortable UX, I have experience in using Figma as a prototyping tool for Roommatch project and I am currently reading "the design of everyday things" which is an excellent book for UX design.\n\n🟧 Frontend\n\nExcept for HTML, CSS those must-learned thing in frontend development, also have 1.5 year experience in using Angular2+(using Typescript), I am also capable for several CSS libraries such as TailwindCSS and Bootstrap.\n\n🟩 Backend\n\nI have used Node/Express in my previous projects and I am currently learning Java Spring framework as my second backend framework. About database systems, I have applied MySQL and MonogDB in previous projects and plan to learn FaunaDB and serverless technologies in 2021.\n\n🟦 Devops\n\nI am currently learning Docker and will also learn Kubernetes in the future, I think these two technologies are essential and large tech companies definitely use them.\n\n3⃣ Personal Website\n\nhttps://johnny0221.github.io/pw/`,
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
        whyLine: `1⃣ Why Line ?\n\nFrom my personal working preferences, I would prefer to stick to a single tech company in my career life, the prerequisite is that the company I target should be robust and innovative, Line has already developed various kinds of services and the process is still continuing, I hope I could join Line to explore modern technologies and develop things that can be used by people around me.\n\n\n2⃣ What I can bring for Line ?\n\nSince Line is an international tech company using English at work is inevitable, I am confident with my English ability that I believe I could collaborate with other developers and help Line promote the products and services in Line to western countries. Second, I am mainly a self-taught developer and considered myself as a quick learner with a passionate heart, I am willing to take any challenges faced in Line.`,
        personality: `Johnny has a positive heart and he is willing to take any challenges from anywhere. He loves to host on stage and interact with others, but sometimes he will be out of controll on stage and goes crazy...`,
        interests: `1. Johnny was 80kg back in high school and was once addicted to heavy weight workout in college, but now his body is somewhat out of shape again, trying to recover.\n\n2. Johnny also loves to play Leauge with his friends, his highest ranking was platinum one. `,
        age: `Born in 1996, 18 years old.`,
        english: `Johnny once got 100 on Toefl and 855 on Toeic. The hardest English challenge for him is the first time trying to order in Subway in America.`,
        education: `Graduated from Tunghai University, currently a UIUC graduate student.`,
        food: `Anything except tomatos.`
    },
    ch: {
        about: `Hi， 我叫Johnny目前就讀於伊利諾大學香檳分校資訊管理所。\n\n1⃣ 職涯規劃\n\n在我早期的職業生涯中，我計劃當一個全職的開發人員，比起鑽研一種技術我更新歡學習許多不同的技術並實際的應用他們，在工作初期的5–10年當中我期望能熟悉公司內所在使用的技術和作業流程，我最終的目標是當一個工程經理(Engineering Manager)，對內可以評估技術在新專案的可行性，對外也可以清楚的解釋公司的運營\n\n2⃣ 學習歷程\n\n我專注於學習Web technologies，並把他們分成四大部分來學習。\n\n🟥 UIUX\n\n對我來說，一個好的網站必然會自帶著好看的設計以及給予使用者好用的體驗，我有使用過Figma在專案初期中來繪製系統的prototype，我最近也在研讀一本叫做"the design of everyday things"的書籍來增進我的UIUX技能。 \n\n🟧 前端\n\n除了基本的HTML, CSS之外，在前端框架的部分我有著1年以上利用Typescript開發Angular的經驗，我也有使用過許多CSS library像是TailwindCSS以及Bootstrap。\n\n🟩 後端\n\n我有使用過Node/Express在我之前的專案上，現在我則是開始學習Java的Spring框架，資料庫的部分有使用過MongoDB以及MySQL在我所建造的專案上，在2021年我希望自己可以學習FaunaDB以及有關於Serverless的技術。\n\n🟦 Devops\n\n我現在有在學習Docker，未來也會學習像是Kubernetes / Docker Swarm等技術，我想容器化的技術在現在以及未來都是一個趨勢，除此之外我也想學習如何打造一個CI/CD的管線並應用在我個人的project上。\n\n3⃣ 個人網站\n\nhttps://johnny0221.github.io/pw/`,
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
        whyLine: `1⃣ 為什麼想進入Line？\n\n就我個人的職涯規劃，我希望我能終身在一間成長性高且成熟的跨國科技公司工作，Line是一間橫垮許多國家的企業，且已經開發出許多實用的服務，我希望可以加入Line來使用最現代的科技來該發一個能讓我身邊的人都在使用的Line產品。\n\n2⃣ 我可以為Line帶來什麼？\n\nLine是一間跨國公司，我相信在職場上使用英文與其他國家的Line developers溝通是無法避免的，我對我的英語口說能力相當有自信，我相信我也能幫助推廣Line的各種產品以及服務到西方國家。我是主要是一個自學的開發者，我認為我是一個學習能力快速並且願意接受新技術，我相信我能在Line接受以及跳戰各種任務。`,
        personality: `子洋有一顆正面的心且也願意接受來自各方面的挑戰，他喜歡在台上主持且與他人戶懂，但有時候太high會有點失去控制...`,
        interests: `1. 子洋在高中的時候曾高達80公斤，在大學時愛上健身運動，但現在身材好像又有點走鐘了...正在努力回春中。\n\n2. 子洋另一個興趣是和朋友打LOL，牌位最高達到白金1過。`,
        age: `出生於1996年，18歲`,
        english: `子洋曾經在托福和多益分別拿下100分以及855分，面對過最難的英文挑戰是在美國的Subway點餐。`,
        education: `畢業於東海大學，現在在伊利諾大學香檳分校就讀研究所。`,
        food: `除了番茄之外的其他食物。.`
    }
}

export const enQuickReply: line.Message[] = [
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
            "text": quickreplyText.en.personality
          },
        },
        {
          "type": "action",
          "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/002-jigsaw_br3wzs.png",
          "action": {
            "type": "message",
            "label": "Interests",
            "text": quickreplyText.en.interests
          }
        },
        {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/005-age_zi9pfe.png",
            "action": {
              "type": "message",
              "label": "Age",
              "text": quickreplyText.en.age
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/003-abc-block_zzo4lk.png",
            "action": {
              "type": "message",
              "label": "English Ability",
              "text": quickreplyText.en.english
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/004-graduation-cap_xwliwx.png",
            "action": {
              "type": "message",
              "label": "education",
              "text": quickreplyText.en.education
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/001-dish_uyl9rk.png",
            "action": {
              "type": "message",
              "label": "favorite food",
              "text": quickreplyText.en.food
            }
          }
      ]
    }
}]

export const chQuickReply: line.Message[] = [
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
            "text": quickreplyText.ch.personality
          },
        },
        {
          "type": "action",
          "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/002-jigsaw_br3wzs.png",
          "action": {
            "type": "message",
            "label": "興趣",
            "text": quickreplyText.ch.interests
          }
        },
        {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/005-age_zi9pfe.png",
            "action": {
              "type": "message",
              "label": "年齡",
              "text": quickreplyText.ch.age
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/003-abc-block_zzo4lk.png",
            "action": {
              "type": "message",
              "label": "語文能力",
              "text": quickreplyText.ch.english
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/004-graduation-cap_xwliwx.png",
            "action": {
              "type": "message",
              "label": "學歷",
              "text": quickreplyText.ch.education
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/001-dish_uyl9rk.png",
            "action": {
              "type": "message",
              "label": "食物",
              "text": quickreplyText.ch.food
            }
          }
      ]
    }
}]

export const welcomeMsg = {
    en: {
        welcome: `Welcome to Johnny's chatbot 😀🖐。 \n I am Jim, your helper who is going to help you know Johnny more.`,
        commands: `Commands \n\n sq -en\n\nShow basic English questions。\n\n sq -ch\n\nShow basic Chinese questions。\n\n help\n\nShow all the commands you can execute。`
    },
    ch: {
        welcome: `歡迎來到子洋的聊天氣機器人 😀🖐。 \n 我是Jim，您的小幫手將會帶你更認識子洋。`,
        commands: `基本指令\n\n sq -en\n\n 呼叫基本英文版問題。\n\n sq -ch\n\n 呼叫基本中文版問題。\n\n help\n\n 呼叫可執行指令。\n\n 其他資訊請利用下面的選單。`
    }
}

export const helpMessageReply: line.Message[] = [
    {
        type: 'text',
        text: 'Basic Commands\n\n sq -en\n\n Show Basic English questions。\n\n sq -ch\n\n Show Basic Chinese questions。\n\n help\n\n Show the executable commands。\n\n for other informations please use the rich menu below\n\n\n基本指令\n\n sq -en\n\n 呼叫基本英文版問題。\n\n sq -ch\n\n 呼叫基本中文版問題。\n\n help\n\n 呼叫可執行指令。\n\n 其他資訊請利用下面的選單。'
    }
]

export const defaultResponse: line.Message[] = [
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
            "text": quickreplyText.ch.personality
          },
        },
        {
          "type": "action",
          "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/002-jigsaw_br3wzs.png",
          "action": {
            "type": "message",
            "label": "興趣",
            "text": quickreplyText.ch.interests
          }
        },
        {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/005-age_zi9pfe.png",
            "action": {
              "type": "message",
              "label": "年齡",
              "text": quickreplyText.ch.age
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/003-abc-block_zzo4lk.png",
            "action": {
              "type": "message",
              "label": "語文能力",
              "text": quickreplyText.ch.english
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/004-graduation-cap_xwliwx.png",
            "action": {
              "type": "message",
              "label": "學歷",
              "text": quickreplyText.ch.education
            }
          },
          {
            "type": "action",
            "imageUrl": "https://res.cloudinary.com/dfzjudoit/image/upload/v1611071054/001-dish_uyl9rk.png",
            "action": {
              "type": "message",
              "label": "食物",
              "text": quickreplyText.ch.food
            }
          }
      ]
    }
}]

export const basicCommands = {
    showQuestionsEnRegexp: /sq\s*-en/mgi,
    showQuestionsChRegexp: /sq\s*-ch/mgi,
    help: /help/mgi
}

export function handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof line.SignatureValidationFailed) {
        res.status(401).send(err.signature)
        res.status(401).send(err.signature)
        return;
      } else if (err instanceof line.JSONParseError) {
        res.status(400).send(err.raw)
        return;
      }
    next(err);
}


