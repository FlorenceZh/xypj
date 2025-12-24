// 题库配置文件
const questions = [
    {
        id: 1,
        question: "宴会上，你会如何选择座位？",
        options: [
            {
                text: "坐在主持人或重要人物旁边，便于交流",
                dialogue: 0,
                role: 1
            },
            {
                text: "坐在能看到所有人的位置，便于观察和参与讨论",
                dialogue: 1,
                role: 0
            },
            {
                text: "坐在角落，避免被注意",
                dialogue: 0,
                role: 1
            },
            {
                text: "随机坐，哪里舒服坐哪里",
                dialogue: 1,
                role: 0
            }
        ]
    },
    {
        id: 2,
        question: "当大家讨论一个话题时，你更倾向于：",
        options: [
            {
                text: "等权威人士说完再发言",
                dialogue: 0,
                role: 2
            },
            {
                text: "直接表达自己的看法，即使与别人不同",
                dialogue: 2,
                role: 0
            },
            {
                text: "观察他人反应后再决定是否发言",
                dialogue: 1,
                role: 1
            },
            {
                text: "几乎不发言，只听别人说",
                dialogue: 0,
                role: 1
            }
        ]
    },
    {
        id: 3,
        question: "在敬酒时，你更注重：",
        options: [
            {
                text: "按照身份高低依次敬酒",
                dialogue: 0,
                role: 2
            },
            {
                text: "随意敬酒，重在表达心意",
                dialogue: 2,
                role: 0
            },
            {
                text: "只敬熟悉的人，避免尴尬",
                dialogue: 0,
                role: 1
            },
            {
                text: "借敬酒机会与陌生人交谈",
                dialogue: 1,
                role: 0
            }
        ]
    },
    {
        id: 4,
        question: "宴会上，你更喜欢谈论：",
        options: [
            {
                text: "家庭、职业、社会地位等现实话题",
                dialogue: 0,
                role: 2
            },
            {
                text: "哲学、艺术、人生意义等抽象话题",
                dialogue: 2,
                role: 0
            },
            {
                text: "娱乐八卦、美食旅行等轻松话题",
                dialogue: 1,
                role: 0
            },
            {
                text: "随大流，别人谈什么我就谈什么",
                dialogue: 0,
                role: 1
            }
        ]
    },
    {
        id: 5,
        question: "在长时间宴饮中，你更倾向于：",
        options: [
            {
                text: "保持端正坐姿，注重仪表",
                dialogue: 0,
                role: 2
            },
            {
                text: "放松姿态，怎么舒服怎么来",
                dialogue: 2,
                role: 0
            },
            {
                text: "根据场合调整，正式场合端正，私下放松",
                dialogue: 1,
                role: 1
            }
        ]
    },
    {
        id: 6,
        question: "当有人提出你不同意的观点时，你会：",
        options: [
            {
                text: "保持沉默，避免冲突",
                dialogue: 0,
                role: 2
            },
            {
                text: "当场提出异议并展开讨论",
                dialogue: 2,
                role: 0
            },
            {
                text: "私下表达不同意见",
                dialogue: 0,
                role: 1
            },
            {
                text: "尝试理解对方观点，寻求共识",
                dialogue: 1,
                role: 0
            }
        ]
    },
    {
        id: 7,
        question: "在正式宴会上，你如何看待餐具使用礼仪？",
        options: [
            {
                text: "严格遵守礼仪，以示尊重",
                dialogue: 0,
                role: 2
            },
            {
                text: "不太在意，以实用为主",
                dialogue: 2,
                role: 0
            },
            {
                text: "视情况而定，重要场合注意",
                dialogue: 1,
                role: 1
            }
        ]
    },
    {
        id: 8,
        question: "参加宴会时，你如何选择着装？",
        options: [
            {
                text: "严格按照场合要求着装",
                dialogue: 0,
                role: 2
            },
            {
                text: "穿自己喜欢的衣服，表达个性",
                dialogue: 2,
                role: 0
            },
            {
                text: "介于两者之间，既符合场合又不失个性",
                dialogue: 1,
                role: 1
            }
        ]
    },
    {
        id: 9,
        question: "你参加宴会的主要目的是：",
        options: [
            {
                text: "拓展人脉，建立社会关系",
                dialogue: 0,
                role: 2
            },
            {
                text: "享受美食美酒，放松身心",
                dialogue: 2,
                role: 0
            },
            {
                text: "与朋友相聚，增进感情",
                dialogue: 1,
                role: 0
            },
            {
                text: "履行社交义务，不得不参加",
                dialogue: 0,
                role: 1
            }
        ]
    },
    {
        id: 10,
        question: "当别人说话时，你通常：",
        options: [
            {
                text: "注意对方的身份地位，决定是否认真听",
                dialogue: 0,
                role: 2
            },
            {
                text: "对所有发言都一视同仁，关注内容本身",
                dialogue: 2,
                role: 0
            },
            {
                text: "选择性倾听，只关心感兴趣的话题",
                dialogue: 1,
                role: 0
            },
            {
                text: "表面倾听，心里想自己的事",
                dialogue: 0,
                role: 1
            }
        ]
    },
    {
        id: 11,
        question: "宴饮结束后，你通常感觉：",
        options: [
            {
                text: "如释重负，完成了社交任务",
                dialogue: 0,
                role: 2
            },
            {
                text: "精神振奋，享受了思想交流",
                dialogue: 2,
                role: 0
            },
            {
                text: "疲惫不堪，需要时间独处恢复",
                dialogue: 0,
                role: 1
            },
            {
                text: "平淡无奇，没什么特别感受",
                dialogue: 1,
                role: 0
            }
        ]
    },
    {
        id: 12,
        question: "你认为自己在社交中最重要的是：",
        options: [
            {
                text: "明确自己的角色，做符合身份的事",
                dialogue: 0,
                role: 2
            },
            {
                text: "保持真实自我，不随波逐流",
                dialogue: 2,
                role: 0
            },
            {
                text: "既遵守规则，又不失个性",
                dialogue: 1,
                role: 1
            },
            {
                text: "让大家都舒服，维护和谐氛围",
                dialogue: 0,
                role: 1
            }
        ]
    }
];

// 彩蛋题目配置
const bonusQuestion = {
    id: 13,
    question: "如果你在古希腊或中国宴饮中，你希望是谁？",
    options: [
        { text: "苏格拉底 - 引导对话，追求真理", type: "dialogue" },
        { text: "孔子 - 传授礼仪，塑造君子", type: "role" },
        { text: "阿尔喀比亚德 - 魅力四射，影响众人", type: "dialogue" },
        { text: "庄子 - 超然物外，逍遥自在", type: "none" },
        { text: "项羽 - 英雄豪杰，一呼百应", type: "role" }
    ]
};

// 结果类型配置
const personalityTypes = {
    "dialogue-heavy": {
        name: "苏格拉底式对话者",
        type: "dialogue",
        threshold: 70,
        traits: "重视理性辩论，追求真理，在对话中认识自我",
        quote: "未经审视的人生不值得过",
        advice: "你适合学术讨论、哲学社团等场合",
        image: "images/placeholder.jpg"
    },
    "role-heavy": {
        name: "孔子式礼仪家",
        type: "role",
        threshold: 70,
        traits: "重视礼仪规范，在关系中定位自我",
        quote: "克己复礼为仁",
        advice: "你擅长商务宴请、正式场合等需要礼仪的社交",
        image: "images/placeholder.jpg"
    },
    "balanced": {
        name: "阿尔喀比亚德式多面手",
        type: "balanced",
        threshold: 40,
        traits: "灵活切换，既懂礼仪又不失个性",
        quote: "我知道我一无所知",
        advice: "你在多种社交场合都能游刃有余",
        image: "images/placeholder.jpg"
    },
    "low-both": {
        name: "庄子式逍遥者",
        type: "none",
        threshold: 30,
        traits: "超脱于规则与辩论，追求自由",
        quote: "相濡以沫，不如相忘于江湖",
        advice: "你可能更喜欢独处或小圈子深度交流",
        image: "images/placeholder.jpg"
    }
};