/* =====================================================================
   英语预习小助手 —— 教材内容数据文件
   ---------------------------------------------------------------------
   ★ 内容来源说明（2026-08 更新，全部 8 册已录入）：
   1. 三年级上/下册 = 2024/2025 新教材；单词表抓取自教习网，
      目录与电子课本网（dzkbw）交叉核对
   2. 四~六年级 = 现行旧版教材（新教材逐年更换中：四上2025秋、
      四下2026春已出新版但网上暂无单词表文本，先用旧版顶着，
      新版资源上线后重新抓取替换即可）
   3. emoji 配图为自编；例句(ex)和课文句子(sentences)为自编通用句型，
      非课文原文，拿到课本后可对照补充
   4. 每个单词：en=英文  zh=中文  emoji=配图  ex=例句（可省略）
   ===================================================================== */

/* 每日作业配置（家长按孩子年级修改）
   action 可选：review=单词卡, sent=课文跟读, quiz=测一测,
                dictation=听写, spell=拼词游戏, trace=书写练习
   不配置则首页不显示作业入口 */
const HOMEWORK = [
  { id: 'hw1', title: '预习 Unit 1', book: '3a', unit: 0, action: 'review' },
  { id: 'hw2', title: 'Unit 1 测一测', book: '3a', unit: 0, action: 'quiz' },
  { id: 'hw3', title: 'Unit 1 听写', book: '3a', unit: 0, action: 'dictation' }
];

const BOOKS = [
  {
    id: '3a',
    name: '三年级上册',
    edition: '译林版 · 新教材（2024秋）',
    ready: true,
    units: [
      {
        title: 'Unit 1 Hello!',
        words: [
          { en: 'hello', zh: '你好', emoji: '👋', ex: "Hello, I'm Mike." },
          { en: 'hi', zh: '嗨；你好', emoji: '👋', ex: 'Hi, Miss Li.' },
          { en: 'Good morning.', zh: '早上好', emoji: '🌅', ex: 'Good morning, class.' },
          { en: 'I', zh: '我', emoji: '🙋', ex: 'I am Sam.' },
          { en: 'am', zh: '是（跟在 I 后面）', emoji: '📝', ex: "I am Sam. (I'm Sam.)" },
          { en: 'ah', zh: '啊', emoji: '😮', ex: 'Ah! A cat!' },
          { en: 'a', zh: '一（个）', emoji: '📝', ex: 'I have a cat.' },
          { en: 'cat', zh: '猫', emoji: '🐱', ex: 'The cat is big.' },
          { en: 'Miss', zh: '小姐；老师', emoji: '👩‍🏫', ex: 'Hello, Miss Li.' },
          { en: 'Good afternoon.', zh: '下午好', emoji: '☀️', ex: 'Good afternoon, Miss Li.' },
          { en: 'class', zh: '班级；同学们', emoji: '🧑‍🎓', ex: 'Good morning, class.' },
          { en: 'goodbye', zh: '再见', emoji: '👋', ex: 'Goodbye, Mum.' },
          { en: 'bye', zh: '再见（口语）', emoji: '👋', ex: 'Bye-bye!' }
        ],
        sentences: [
          { en: "Bobby: Good morning.", zh: "博比：早上好。" },
          { en: "Bobby's friends: Good morning, Bobby.", zh: "博比的朋友们：早上好，博比。" },
          { en: "Sam's friend: Hi, Sam.", zh: "萨姆的朋友：嗨，萨姆。" },
          { en: "Sam: Hello!", zh: "萨姆：你好！" },
          { en: "Bobby: Hi, I'm Bobby.", zh: "博比：嗨，我是博比。" },
          { en: "Sam: Hi, I'm Sam.", zh: "萨姆：嗨，我是萨姆。" },
          { en: "Bobby's friends: Ah! A cat!", zh: "博比的朋友们：啊！一只猫！" },
          { en: "Liu Tao: Good morning, Miss Li.", zh: "刘涛：早上好，李老师。" },
          { en: "Miss Li: Good morning, Liu Tao.", zh: "李老师：早上好，刘涛。" },
          { en: "Liu Tao: Hi, Yang Ling.", zh: "刘涛：嗨，杨玲。" },
          { en: "Yang Ling: Hello, Liu Tao.", zh: "杨玲：你好，刘涛。" },
          { en: "Miss Li: Good afternoon, class.", zh: "李老师：下午好，同学们。" },
          { en: "Class: Good afternoon, Miss Li.", zh: "同学们：下午好，李老师。" },
          { en: "Class: Goodbye, Miss Li.", zh: "同学们：再见，李老师。" },
          { en: "Miss Li: Bye!", zh: "李老师：再见！" },
          { en: "my teacher", zh: "我的老师" },
          { en: "my friend", zh: "我的朋友" },
          { en: "a cat", zh: "一只猫" },
          { en: "greet each other", zh: "互相打招呼" },
          { en: "your English teacher", zh: "你的英语老师" },
          { en: "greet others", zh: "和其他人打招呼" }
        ]
      },
      {
        title: "Unit 2 What's your name?",
        words: [
          { en: 'what', zh: '什么', emoji: '❓', ex: "What's your name?" },
          { en: 'is', zh: '是', emoji: '📝', ex: 'My name is Su Hai.' },
          { en: 'your', zh: '你的；你们的', emoji: '👉', ex: "What's your name?" },
          { en: 'name', zh: '名字', emoji: '🏷️', ex: 'My name is Liu Tao.' },
          { en: 'my', zh: '我的', emoji: '🙋', ex: 'My name is Helen.' },
          { en: 'Nice to meet you!', zh: '很高兴认识你', emoji: '🤝' },
          { en: 'too', zh: '也', emoji: '➕', ex: 'Nice to meet you, too.' },
          { en: 'boy', zh: '男孩', emoji: '👦', ex: 'I am a boy.' },
          { en: 'and', zh: '和；与', emoji: '➕', ex: 'Mike and Helen' },
          { en: 'girl', zh: '女孩', emoji: '👧', ex: 'She is a girl.' },
          { en: 'Mr', zh: '先生', emoji: '👨', ex: 'Hello, Mr Green.' }
        ],
        sentences: [
          { en: 'Bobby: Good afternoon, Sam!', zh: '博比：下午好，萨姆！' },
          { en: 'Sam: Good afternoon, Bobby!', zh: '萨姆：下午好，博比！' },
          { en: 'Beibei: Hello!', zh: '贝贝：你好！' },
          { en: "Sam: Hello, I'm Sam. What's your name?", zh: '萨姆：你好，我是萨姆。你叫什么名字？' },
          { en: 'Beibei: My name is Beibei.', zh: '贝贝：我的名字是贝贝。' },
          { en: "Bobby: Hello, Beibei. I'm Bobby.", zh: '博比：你好，贝贝。我是博比。' },
          { en: 'Beibei: Nice to meet you!', zh: '贝贝：很高兴认识你！' },
          { en: "Bobby & Sam: Nice to meet you too.", zh: '博比和萨姆：（我们）也很高兴认识你。' },
          { en: "Mike: Hello, I'm Mike Brown.", zh: '迈克：你好，我是迈克·布朗。' },
          { en: "Yang Ling: Hi, Mike. I'm Yang Ling.", zh: '杨玲：嗨，迈克。我是杨玲。' },
          { en: 'Mike: Nice to meet you, Yang Ling.', zh: '迈克：很高兴认识你，杨玲。' },
          { en: 'Yang Ling: Nice to meet you too.', zh: '杨玲：（我）也很高兴认识你。' },
          { en: "Mike: Hello. What's your name?", zh: '迈克：你好。你叫什么名字？' },
          { en: 'Liu Tao: My name is Liu Tao.', zh: '刘涛：我的名字是刘涛。' },
          { en: "Wang Bing: I'm Wang Bing. Nice to meet you.", zh: '王兵：我是王兵。很高兴认识你。' },
          { en: 'Mike: (Wang Bing? Yang Ling? Liu Tao?) Hi!', zh: '迈克：（王兵？杨玲？刘涛？）嗨！' },
          { en: 'Mr Green: Good morning, boys and girls.', zh: '格林老师：早上好，男孩们和女孩们。' },
          { en: 'Class: Good morning, Mr Green.', zh: '同学们：早上好，格林老师。' },
          { en: 'your name', zh: '你的名字' },
          { en: 'introduce myself', zh: '自我介绍' },
          { en: 'a new classmate', zh: '一位新同学' },
          { en: 'Nice to meet you!', zh: '很高兴认识你！' },
          { en: 'boys and girls', zh: '男孩们和女孩们' },
          { en: 'make new friends', zh: '交新朋友' }
        ]
      },
      {
        title: 'Unit 3 Are you Su Hai?',
        words: [
          { en: 'are', zh: '是（你/你们/我们）', emoji: '📝', ex: 'Are you Su Hai?' },
          { en: 'you', zh: '你；你们', emoji: '👉', ex: 'How are you?' },
          { en: 'no', zh: '不；不是', emoji: '❌', ex: "No, I'm not." },
          { en: 'not', zh: '不；没有', emoji: '🚫', ex: "No, I'm not." },
          { en: 'yes', zh: '是；对', emoji: '✅', ex: 'Yes, I am.' },
          { en: 'ha', zh: '哈（笑声）', emoji: '😂', ex: 'Ha! You are right!' },
          { en: 'Here I am!', zh: '我在这里', emoji: '🙋' },
          { en: 'but', zh: '但是', emoji: '➕', ex: "I'm small but happy." },
          { en: 'oh', zh: '哦；啊', emoji: '😮', ex: 'Oh, sorry!' },
          { en: 'sorry', zh: '对不起', emoji: '🙏', ex: 'Sorry, Miss Li.' },
          { en: 'twin', zh: '双胞胎（之一）', emoji: '👯', ex: 'We are twins.' },
          { en: 'we', zh: '我们', emoji: '👨‍👩‍👧', ex: 'We are twins.' },
          { en: 'excuse me', zh: '打扰一下；对不起', emoji: '🙇', ex: 'Excuse me, are you Mike?' },
          { en: 'class', zh: '班级', emoji: '🧑‍🎓', ex: 'We are in Class 1.' },
          { en: 'in', zh: '在……里', emoji: '📥', ex: 'We are in Class 1.' },
          { en: 'with', zh: '和……在一起', emoji: '🤝', ex: 'I play with my friend.' },
          { en: 'right', zh: '对的；正确的', emoji: '👍', ex: 'You are right!' }
        ],
        sentences: [
          { en: "Bobby's friends: Hi, Bobby!", zh: '博比的朋友们：嗨，博比！' },
          { en: 'Bobby: Are you Jake?', zh: '博比：你是杰克吗？' },
          { en: "John: No, I'm not. I'm John.", zh: '约翰：不，我不是。我是约翰。' },
          { en: 'Bobby: Are you Jake?', zh: '博比：你是杰克吗？' },
          { en: "Bobby's friends: Yes!", zh: '博比的朋友们：是！' },
          { en: "Bobby's friends: Ha ha!", zh: '博比的朋友们：哈哈！' },
          { en: "Jake: Ha ha! Here I am!", zh: '杰克：哈哈！我在这里！' },
          { en: 'Mike: Good morning, Su Hai.', zh: '迈克：早上好，苏海。' },
          { en: "Su Yang: Good morning. But I'm not Su Hai. I'm Su Yang.", zh: '苏洋：早上好。但我不是苏海。我是苏洋。' },
          { en: "Mike: Oh, I'm sorry. Nice to meet you, Su Yang.", zh: '迈克：哦，对不起。很高兴认识你，苏洋。' },
          { en: 'Su Yang: Nice to meet you too.', zh: '苏洋：（我）也很高兴认识你。' },
          { en: 'Su Hai: Hi, Mike.', zh: '苏海：嗨，迈克。' },
          { en: "Mike: Ah! You're twins!", zh: '迈克：啊！你们是双胞胎！' },
          { en: 'Su Hai & Su Yang: Yes, we are!', zh: '苏海和苏洋：是的，我们是！' },
          { en: 'Mike: Excuse me, are you Su Hai?', zh: '迈克：打扰一下，你是苏海吗？' },
          { en: "Su Yang: No, I'm not. I'm Su Yang.", zh: '苏洋：不，我不是。我是苏洋。' },
          { en: 'Mike: What class are you in?', zh: '迈克：你在哪个班级？' },
          { en: "Su Yang: I'm in Class 2.", zh: '苏洋：我在二班。' },
          { en: 'Mike: Are you Su Hai?', zh: '迈克：你是苏海吗？' },
          { en: "Su Hai: Yes, I am! I'm in Class 1 with you.", zh: '苏海：是的，我是！我和你在一班。' },
          { en: 'Mike: Right!', zh: '迈克：对！' },
          { en: 'Here I am!', zh: '我在这里！' },
          { en: 'excuse me', zh: '对不起；打扰一下' },
          { en: 'what class', zh: '什么班级' },
          { en: "Jake's turn", zh: '轮到杰克' },
          { en: 'look the same', zh: '看起来一样' },
          { en: 'know new people', zh: '认识新的人' }
        ]
      },
      {
        title: 'Unit 4 This is my friend',
        words: [
          { en: 'this', zh: '这；这个', emoji: '👉', ex: 'This is my friend.' },
          { en: 'friend', zh: '朋友', emoji: '🤝', ex: 'She is my friend.' },
          { en: 'she', zh: '她', emoji: '👧', ex: "She's my friend." },
          { en: 'he', zh: '他', emoji: '👦', ex: "He's my friend." },
          { en: 'it', zh: '它', emoji: '🐾', ex: "It's a cat." },
          { en: 'good', zh: '好的', emoji: '👍', ex: 'She is a good girl.' },
          { en: 'Thank you.', zh: '谢谢你', emoji: '🙏' },
          { en: 'have', zh: '有', emoji: '🙌', ex: 'I have many friends.' },
          { en: 'many', zh: '许多', emoji: '👥', ex: 'We have many friends.' }
        ],
        sentences: [
          { en: 'Bobby & Sam: Goodbye, Max and Willy!', zh: '博比和萨姆：再见，马克斯和威利！' },
          { en: 'Max & Willy: Goodbye!', zh: '马克斯和威利：再见！' },
          { en: 'Tina: Hello, Bobby!', zh: '蒂娜：你好，博比！' },
          { en: 'Bobby: Hi, Tina!', zh: '博比：嗨，蒂娜！' },
          { en: "Bobby: This is Sam. He's my friend.", zh: '博比：这是萨姆。他是我的朋友。' },
          { en: 'Sam: Hi. Nice to meet you.', zh: '萨姆：嗨。很高兴认识你。' },
          { en: 'Liu Tao: Hello, Wang Bing.', zh: '刘涛：你好，王兵。' },
          { en: 'Wang Bing: Hi, Liu Tao. This is my friend, Zhang Hua.', zh: '王兵：嗨，刘涛。这是我的朋友，张华。' },
          { en: "Wang Bing: Zhang Hua, this is Liu Tao. He's my friend.", zh: '王兵：张华，这是刘涛。他是我的朋友。' },
          { en: 'Liu Tao: Hello, Zhang Hua.', zh: '刘涛：你好，张华。' },
          { en: 'Zhang Hua: Nice to meet you.', zh: '张华：很高兴认识你。' },
          { en: 'Liu Tao: Nice to meet you too.', zh: '刘涛：（我）也很高兴认识你。' },
          { en: "Zhang Hua: It's good!", zh: '张华：它很好！' },
          { en: 'Liu Tao: Thank you.', zh: '刘涛：谢谢你。' },
          { en: "Liu Tao: This is Su Hai. She's my friend. I have many friends in my class.", zh: '刘涛：这是苏海。她是我的朋友。我在我的班级里有许多朋友。' },
          { en: "Zhang Hua: Hi, I'm Zhang Hua.", zh: '张华：嗨，我是张华。' },
          { en: 'Su Hai: Nice to meet you.', zh: '苏海：很高兴认识你。' },
          { en: 'my friend', zh: '我的朋友' },
          { en: 'make a card', zh: '做一张卡片' },
          { en: 'Thank you.', zh: '谢谢你。' },
          { en: 'have many friends', zh: '有许多朋友' },
          { en: 'in my class', zh: '在我的班级里' },
          { en: 'introduce a friend', zh: '介绍一位朋友' }
        ]
      },
      {
        title: "Unit 5 She's my mother",
        words: [
          { en: 'mother', zh: '妈妈；母亲', emoji: '👩', ex: "She's my mother." },
          { en: 'father', zh: '爸爸；父亲', emoji: '👨', ex: "He's my father." },
          { en: 'dad', zh: '爸爸（口语）', emoji: '👨', ex: 'Good evening, Dad.' },
          { en: 'mum', zh: '妈妈（口语）', emoji: '👩', ex: 'Good night, Mum.' },
          { en: 'brother', zh: '哥哥；弟弟', emoji: '👦', ex: 'This is my brother.' },
          { en: 'baby', zh: '婴儿；宝宝', emoji: '👶', ex: 'The baby is lovely.' },
          { en: 'sister', zh: '姐姐；妹妹', emoji: '👧', ex: 'This is my sister.' },
          { en: 'Good evening.', zh: '晚上好', emoji: '🌆', ex: 'Good evening, Dad.' },
          { en: 'quick', zh: '快的；快点', emoji: '⚡', ex: 'Be quick!' },
          { en: 'look', zh: '看', emoji: '👀', ex: 'Look at the baby!' },
          { en: 'the', zh: '这；那（冠词）', emoji: '📝' },
          { en: 'pond', zh: '池塘', emoji: '🏞️', ex: 'Look at the pond!' },
          { en: 'who', zh: '谁', emoji: '❓', ex: "Who's that?" },
          { en: 'great', zh: '极好的；好棒的', emoji: '👍', ex: 'Great!' },
          { en: 'come', zh: '来', emoji: '🏃', ex: 'Come here!' },
          { en: 'meet', zh: '结识；见面', emoji: '🤝', ex: 'Nice to meet you.' },
          { en: 'family', zh: '家；家庭', emoji: '👨‍👩‍👧‍👦', ex: 'I love my family.' },
          { en: 'say', zh: '说', emoji: '💬', ex: 'Say it again, please.' }
        ],
        sentences: [
          { en: 'Bobby: Hi, Sam.', zh: '博比：嗨，萨姆。' },
          { en: 'Sam: Hi, Bobby.', zh: '萨姆：嗨，博比。' },
          { en: "Bobby: This is my mum.", zh: '博比：这是我的妈妈。' },
          { en: 'Sam: Good evening.', zh: '萨姆：晚上好。' },
          { en: "Sam: This is my dad.", zh: '萨姆：这是我的爸爸。' },
          { en: "Bobby & Bobby's mum: Good evening.", zh: '博比和博比的妈妈：晚上好。' },
          { en: "Sam's dad: Good evening.", zh: '萨姆的爸爸：晚上好。' },
          { en: 'Sam: Quick! Look in the pond.', zh: '萨姆：快点！看池塘里面。' },
          { en: "Bobby: Hello, I'm Bobby. He's Sam.", zh: '博比：你好，我是博比。他是萨姆。' },
          { en: "Tad: Hi, I'm Tad.", zh: '塔德：嗨，我是塔德。' },
          { en: "Tad's mum: Hi.", zh: '塔德的妈妈：嗨。' },
          { en: "Sam: (Who's she?)", zh: '萨姆：（她是谁？）' },
          { en: "Tad: She's my mum. She's great.", zh: '塔德：她是我的妈妈。她很棒。' },
          { en: 'Su Hai: Hi, Liu Tao.', zh: '苏海：嗨，刘涛。' },
          { en: "Liu Tao: Hello, Su Hai. Come and meet my family.", zh: '刘涛：你好，苏海。来见见我的家人。' },
          { en: "Liu Tao: This is my mother. This is my father.", zh: '刘涛：这是我的妈妈。这是我的爸爸。' },
          { en: "Su Hai: Hi, I'm Su Hai.", zh: '苏海：嗨，我是苏海。' },
          { en: "Liu Tao's parents: Hello, Su Hai.", zh: '刘涛的父母：你好，苏海。' },
          { en: "Su Hai: Who's he?", zh: '苏海：他是谁？' },
          { en: "Liu Tao: He's my brother. Say hello, Liu Hao.", zh: '刘涛：他是我的弟弟。打招呼，刘浩。' },
          { en: 'Liu Hao: Hello!', zh: '刘浩：你好！' },
          { en: "Liu Hao: Who's she?", zh: '刘浩：她是谁？' },
          { en: "Su Hai: She's my sister, Su Yang.", zh: '苏海：她是我的妹妹，苏洋。' },
          { en: 'Liu Tao: Nice to meet you, Su Yang.', zh: '刘涛：很高兴认识你，苏洋。' },
          { en: 'Su Yang: Hi! Nice to meet you too.', zh: '苏洋：嗨！（我）也很高兴认识你。' },
          { en: 'my dad/mum', zh: '我的爸爸/妈妈' },
          { en: 'family members', zh: '家庭成员' },
          { en: 'in the pond', zh: '在池塘里' },
          { en: 'my happy family', zh: '我的快乐一家' },
          { en: 'Good evening.', zh: '晚上好。' },
          { en: 'say hello', zh: '打招呼' }
        ]
      },
      {
        title: 'Unit 6 Is he your grandpa?',
        words: [
          { en: 'grandfather', zh: '爷爷；外公（口语 grandpa）', emoji: '👴', ex: 'He is my grandpa.' },
          { en: 'uncle', zh: '叔叔；舅舅等', emoji: '🧑', ex: 'This is my uncle.' },
          { en: 'aunt', zh: '姑姑；阿姨等', emoji: '👩', ex: 'This is my aunt.' },
          { en: 'grandmother', zh: '奶奶；外婆（口语 grandma）', emoji: '👵', ex: 'She is my grandma.' },
          { en: 'cousin', zh: '堂/表兄弟姐妹', emoji: '🧒', ex: 'My cousin is ten.' },
          { en: 'cool', zh: '酷的；棒极了', emoji: '😎', ex: 'My dad is cool!' },
          { en: 'me', zh: '我', emoji: '🙋', ex: 'Look at me!' },
          { en: 'wow', zh: '哇；呀', emoji: '😲', ex: 'Wow, it is big!' },
          { en: 'big', zh: '大的', emoji: '🐘', ex: 'The elephant is big.' },
          { en: 'it', zh: '它', emoji: '🐾', ex: "It's a fox." },
          { en: 'happy', zh: '开心的；幸福的', emoji: '😀', ex: 'I am happy.' },
          { en: 'love', zh: '爱', emoji: '❤️', ex: 'I love my grandpa.' }
        ],
        sentences: [
          { en: "Bobby: Who's he?", zh: '博比：他是谁？' },
          { en: "Sam: He's my grandfather John.", zh: '萨姆：他是我的爷爷约翰。' },
          { en: 'Bobby: Is he your father?', zh: '博比：他是你的爸爸吗？' },
          { en: "Sam: Yes, he is. He's John too.", zh: '萨姆：是的，他是。他也叫约翰。' },
          { en: "Bobby: Who's this boy?", zh: '博比：这个男孩是谁？' },
          { en: "Sam: He's my cousin John.", zh: '萨姆：他是我的堂兄约翰。' },
          { en: 'Bobby: Cool!', zh: '博比：酷！' },
          { en: 'Sam: Look, Bobby. This is ...', zh: '萨姆：看，博比。这是……' },
          { en: 'Bobby: John!', zh: '博比：约翰！' },
          { en: "Sam: No. This is me! My name is Sam.", zh: '萨姆：不。这是我！我的名字是萨姆。' },
          { en: "Liu Tao: Look! This is my family.", zh: '刘涛：看！这是我的家庭。' },
          { en: "Yang Ling: Wow! You have a big family.", zh: '杨玲：哇！你有一个大家庭。' },
          { en: "Liu Tao: Yes. My grandpa, grandma, father, mother, uncle, aunt ...", zh: '刘涛：是的。我的爷爷、奶奶、爸爸、妈妈、伯父、伯母……' },
          { en: 'Su Hai: Is he your father?', zh: '苏海：他是你的爸爸吗？' },
          { en: "Liu Tao: No, he isn't.", zh: '刘涛：不，他不是。' },
          { en: "Wang Bing: Who's he?", zh: '王兵：他是谁？' },
          { en: "Liu Tao: He's my grandpa.", zh: '刘涛：他是我的爷爷。' },
          { en: 'Yang Ling: Is she your mother?', zh: '杨玲：她是你的妈妈吗？' },
          { en: "Liu Tao: No, she isn't. She's my aunt.", zh: '刘涛：不，她不是。她是我的伯母。' },
          { en: "Wang Bing: Who's the baby? Is it your cousin?", zh: '王兵：这个婴儿是谁？它是你的堂（表）亲吗？' },
          { en: "Liu Tao: No, it isn't. It's me!", zh: '刘涛：不，不是。是我！' },
          { en: 'Wang Bing: You have a happy family!', zh: '王兵：你有一个幸福的家庭！' },
          { en: "Liu Tao: Yes. I love my family.", zh: '刘涛：是的。我爱我的家。' },
          { en: 'love each other', zh: '相亲相爱' },
          { en: 'family tree', zh: '家谱；家谱图' },
          { en: 'have a big family', zh: '有一个大家庭' },
          { en: 'a happy family', zh: '一个幸福的家庭' },
          { en: 'talk about ...', zh: '谈论关于……' }
        ]
      },
      {
        title: 'Unit 7 Happy Birthday!',
        words: [
          { en: 'Happy Birthday!', zh: '生日快乐', emoji: '🎂' },
          { en: 'one', zh: '一', emoji: '1️⃣', ex: 'I have one book.' },
          { en: 'two', zh: '二', emoji: '2️⃣', ex: 'Two cats, please.' },
          { en: 'three', zh: '三', emoji: '3️⃣', ex: 'I have three balls.' },
          { en: 'four', zh: '四', emoji: '4️⃣', ex: 'Four apples, please.' },
          { en: 'five', zh: '五', emoji: '5️⃣', ex: 'I am five.' },
          { en: 'six', zh: '六', emoji: '6️⃣', ex: 'Six books for you.' },
          { en: 'seven', zh: '七', emoji: '7️⃣', ex: 'I can see seven birds.' },
          { en: 'eight', zh: '八', emoji: '8️⃣', ex: 'She is eight.' },
          { en: 'nine', zh: '九', emoji: '9️⃣', ex: 'I am nine.' },
          { en: 'ten', zh: '十', emoji: '🔟', ex: 'I have ten toys.' },
          { en: 'now', zh: '现在', emoji: '⏰', ex: 'Open it now!' },
          { en: 'want', zh: '想要', emoji: '🤲', ex: 'I want a toy car.' },
          { en: 'car', zh: '小汽车', emoji: '🚗', ex: 'I want a toy car.' },
          { en: 'book', zh: '书', emoji: '📖', ex: 'This book is for you.' },
          { en: 'ball', zh: '球', emoji: '⚽', ex: 'I have a ball.' },
          { en: 'cake', zh: '蛋糕', emoji: '🍰', ex: 'The cake is big.' },
          { en: 'How lovely!', zh: '真可爱！', emoji: '🥰' },
          { en: 'Can I help you?', zh: '要帮忙吗？您要买什么？', emoji: '🤝' },
          { en: 'Yes, please.', zh: '好的，谢谢', emoji: '✅' },
          { en: 'some', zh: '一些', emoji: '🔢', ex: 'I want some cakes.' },
          { en: 'toy', zh: '玩具', emoji: '🧸', ex: 'I want a toy.' },
          { en: 'for', zh: '给；为', emoji: '🎁', ex: 'This toy is for you.' },
          { en: 'OK', zh: '好；行', emoji: '👌' },
          { en: 'How old are you?', zh: '你几岁了？', emoji: '🎂' },
          { en: 'please', zh: '请', emoji: '🙏', ex: 'Sit down, please.' },
          { en: 'here', zh: '这里；到这里', emoji: '📍', ex: 'Come here, please.' },
          { en: 'love', zh: '喜爱', emoji: '❤️', ex: 'I love this toy.' },
          { en: 'Here you are.', zh: '给你', emoji: '🎁' },
          { en: "You're welcome.", zh: '不客气', emoji: '😊' },
          { en: 'thanks', zh: '谢谢', emoji: '🙏', ex: 'Thanks, Mum!' }
        ],
        sentences: [
          { en: "Bobby's mother: Happy Birthday, Bobby!", zh: '博比的妈妈：生日快乐，博比！' },
          { en: "Bobby: Thank you! I love you.", zh: '博比：谢谢！我爱你（们）。' },
          { en: "Bobby: I'm two now.", zh: '博比：我现在两岁了。' },
          { en: 'Tina: Right.', zh: '蒂娜：是的。' },
          { en: 'Tina: One, two.', zh: '蒂娜：一个，两个。' },
          { en: 'Bobby: (I want a car.)', zh: '博比：（我想要一辆小汽车。）' },
          { en: 'Bobby: (I want a book. I want a ball. ...)', zh: '博比：（我想要一本书。我想要一个球。……）' },
          { en: 'Tina: Bobby! We want the cake!', zh: '蒂娜：博比！我们想要（吃）蛋糕！' },
          { en: 'Liu Tao: Look! How lovely!', zh: '刘涛：看！真可爱！' },
          { en: 'Liu Hao: One, two, three, four, five!', zh: '刘浩：一、二、三、四、五！' },
          { en: 'Salesgirl: Hello! Can I help you?', zh: '女店员：你好！要帮忙吗？' },
          { en: "Liu Tao's father: Yes, please. I want some toys for my boys.", zh: '刘涛的爸爸：好的，谢谢。我想要给我的男孩子们买些玩具。' },
          { en: "Salesgirl: OK! How old are you?", zh: '女店员：好的！你多大了？' },
          { en: "Liu Tao: I'm nine.", zh: '刘涛：我九岁了。' },
          { en: 'Salesgirl: Please come here.', zh: '女店员：请来这里。' },
          { en: "Liu Tao: Cool! I love this.", zh: '刘涛：酷！我喜欢这个。' },
          { en: 'Salesgirl: How old are you?', zh: '女店员：你多大了？' },
          { en: "Liu Hao: Three. I want this, please.", zh: '刘浩：我三岁了。我想要这个。' },
          { en: 'Salesgirl: OK!', zh: '女店员：好的！' },
          { en: 'Salesgirl: Here you are.', zh: '女店员：给你。' },
          { en: "Liu Hao: Thank you!", zh: '刘浩：谢谢你！' },
          { en: "Salesgirl: You're welcome.", zh: '女店员：不用谢。' },
          { en: 'Liu Hao: Hi! How old are you?', zh: '刘浩：嗨！你多大了？' },
          { en: "Liu Tao's father: Happy Birthday, Taotao.", zh: '刘涛的爸爸：生日快乐，涛涛。' },
          { en: "Liu Tao & Liu Hao: Thanks, Dad! We love you.", zh: '刘涛和刘浩：谢谢，爸爸！我们爱你。' },
          { en: 'come to my party', zh: '来我的派对' },
          { en: "It's time to ...", zh: '是……的时候了。' },
          { en: 'Happy Birthday!', zh: '生日快乐！' },
          { en: 'How lovely!', zh: '真可爱！' },
          { en: 'Can I help you?', zh: '要帮忙吗？' },
          { en: 'Yes, please.', zh: '好的，谢谢。' },
          { en: 'some toys', zh: '一些玩具' },
          { en: 'come here', zh: '来这里' },
          { en: 'get ... from ...', zh: '从……得到……' },
          { en: 'Here you are.', zh: '给你。' },
          { en: "You're welcome.", zh: '别客气。不用谢。' },
          { en: 'birthday gift', zh: '生日礼物' },
          { en: 'say thanks and show love', zh: '说谢谢并表达爱' },
          { en: 'How old are you?', zh: '你多大了？' }
        ]
      },
      {
        title: 'Unit 8 I can do this for you',
        words: [
          { en: 'can', zh: '能；会', emoji: '💪', ex: 'I can draw.' },
          { en: 'do', zh: '做；干', emoji: '🛠️', ex: 'I can do this.' },
          { en: 'for', zh: '为了', emoji: '🎁', ex: 'I can do this for you.' },
          { en: 'clean', zh: '打扫；擦干净', emoji: '🧹', ex: 'I can clean the table.' },
          { en: 'table', zh: '桌子', emoji: '🪑', ex: 'Clean the table, please.' },
          { en: 'draw', zh: '画（画）', emoji: '🎨', ex: 'I can draw a cat.' },
          { en: 'sing', zh: '唱歌', emoji: '🎤', ex: 'I can sing.' },
          { en: 'take pictures', zh: '拍照', emoji: '📷', ex: 'I can take pictures.' },
          { en: 'dance', zh: '跳舞', emoji: '💃', ex: 'She can dance.' },
          { en: 'Are you OK?', zh: '你没事吧？', emoji: '🩺' },
          { en: 'dizzy', zh: '头晕的', emoji: '💫', ex: 'I am dizzy.' },
          { en: 'picture', zh: '图画；照片', emoji: '🖼️', ex: 'This is my picture.' },
          { en: 'er', zh: '哦；嗯', emoji: '🤔' },
          { en: 'fox', zh: '狐狸', emoji: '🦊', ex: 'The fox is clever.' },
          { en: 'child', zh: '小孩（复数 children）', emoji: '🧒', ex: 'The child can dance.' },
          { en: 'thing', zh: '事情', emoji: '📦', ex: 'I can do many things.' }
        ],
        sentences: [
          { en: "Bobby: I can dance for you, Grandpa.", zh: '博比：我能为你跳舞，爷爷。' },
          { en: "Bobby's grandpa: Are you OK, Bobby?", zh: '博比的爷爷：你没事吧，博比？' },
          { en: "Bobby: Oh, I'm dizzy ...", zh: '博比：啊，我好晕……' },
          { en: "Bobby: Grandpa, I can draw a picture for you.", zh: '博比：爷爷，我能给你画一幅图画。' },
          { en: "Bobby's grandpa: Er, is this a fox?", zh: '博比的爷爷：嗯，这是只狐狸吗？' },
          { en: "Bobby: No, it's you!", zh: '博比：不，是你！' },
          { en: "Bobby's grandpa: Ha ha!", zh: '博比的爷爷：哈哈！' },
          { en: "Bobby's grandpa: Thank you, Bobby. I love you.", zh: '博比的爷爷：谢谢你，博比。我爱你。' },
          { en: "Bobby: I love you too, Grandpa.", zh: '博比：我也爱你，爷爷。' },
          { en: 'The family get together on New Year\'s Day. The children want to do things for the family.', zh: '元旦全家团聚。孩子们想为家人做事。' },
          { en: 'Cousin 1: I can sing.', zh: '表妹1：我能唱歌。' },
          { en: 'Liu Hao: I can sing too.', zh: '刘浩：我也能唱歌。' },
          { en: "Liu Tao's father: I can take pictures.", zh: '刘涛的爸爸：我能拍照。' },
          { en: "Liu Tao's grandma: Great!", zh: '刘涛的奶奶：好棒！' },
          { en: 'Cousin 2: I can dance.', zh: '表妹2：我能跳舞。' },
          { en: 'Liu Hao: I can dance too.', zh: '刘浩：我也能跳舞。' },
          { en: "Liu Tao's grandma: How lovely!", zh: '刘涛的奶奶：真可爱！' },
          { en: 'Liu Tao: I can draw.', zh: '刘涛：我能画画。' },
          { en: 'Liu Hao: I can draw too.', zh: '刘浩：我也能画画。' },
          { en: 'Liu Tao & Liu Hao: Look! This is my picture.', zh: '刘涛和刘浩：看！这是我的画。' },
          { en: 'Liu Tao & Cousin 2: We can clean the table.', zh: '刘涛和表妹2：我们能收拾桌子。' },
          { en: 'Liu Hao & Cousin 1: We can clean the table too.', zh: '刘浩和表妹1：我们也能收拾桌子。' },
          { en: "Liu Tao's mother: Great! Thank you.", zh: '刘涛的妈妈：好棒！谢谢你们。' },
          { en: 'sing a song', zh: '唱一首歌' },
          { en: 'look at me', zh: '看我' },
          { en: 'draw a picture', zh: '画一幅图画' },
          { en: 'a family get-together', zh: '一次家庭聚会' },
          { en: 'Are you OK?', zh: '你没事吧？' },
          { en: 'take pictures', zh: '拍照' },
          { en: 'get together', zh: '聚集，相聚' },
          { en: "on New Year's Day", zh: '在元旦' },
          { en: 'want to do ...', zh: '想要做……' },
          { en: 'put on a show', zh: '举行一场表演' },
          { en: 'talk about things you can do', zh: '谈论你能做的事情' },
          { en: 'can do things for my family', zh: '能为我的家人做事' }
        ]
      }
    ]
  },

  {
    id: '3b',
    name: '三年级下册',
    edition: '译林版 · 新教材（2025春）',
    ready: true,
    units: [
      {
        title: 'Unit 1 School things',
        words: [
          { en: 'school', zh: '学校', emoji: '🏫', ex: 'I go to school.' },
          { en: 'thing', zh: '东西；用品', emoji: '📦', ex: 'What is this thing?' },
          { en: 'pen', zh: '钢笔', emoji: '🖊️', ex: 'This is my pen.' },
          { en: 'pencil', zh: '铅笔', emoji: '✏️', ex: 'I have a pencil.' },
          { en: 'ruler', zh: '直尺', emoji: '📏', ex: 'May I use your ruler?' },
          { en: 'rubber', zh: '橡皮', emoji: '🧽', ex: 'Where is my rubber?' },
          { en: 'schoolbag', zh: '书包', emoji: '🎒', ex: 'My schoolbag is new.' },
          { en: 'pencil case', zh: '铅笔盒', emoji: '🧰', ex: 'Put it in the pencil case.' },
          { en: 'that', zh: '那；那个', emoji: '👉', ex: "That's my ruler." },
          { en: 'put', zh: '放', emoji: '📥', ex: 'Put your pen in the bag.' },
          { en: 'guess', zh: '猜', emoji: '🤔', ex: 'Guess! What is it?' },
          { en: 'again', zh: '再一次', emoji: '🔁', ex: 'Say it again, please.' },
          { en: 'long', zh: '长的', emoji: '📏', ex: 'The ruler is long.' },
          { en: 'Good idea!', zh: '好主意！', emoji: '💡' }
        ],
        sentences: [
          // Cartoon time: Bobby's school things
          { en: "What's this?", zh: '这是什么？' },
          { en: "It's my pencil case.", zh: '它是我的铅笔盒。' },
          { en: "What's that?", zh: '那是什么？' },
          { en: "It's my rubber.", zh: '它是我的橡皮。' },
          { en: 'Bobby! Put your school things in your schoolbag!', zh: '波比！把你的学习用品放进书包里！' },
          { en: 'Yes, Dad!', zh: '好的，爸爸！' },
          // Story time: What's that?
          { en: "What's that? Is it a ruler?", zh: '那是什么？它是一把尺子吗？' },
          { en: "No, it isn't.", zh: '不，它不是。' },
          { en: 'Is it a pencil?', zh: '它是一支铅笔吗？' },
          { en: "No, it isn't. It's a pen!", zh: '不，它不是。它是一支钢笔！' },
          { en: "Yes. You're right!", zh: '是的。你说对了！' },
          { en: "What's this?", zh: '这是什么？' },
          { en: "It's a rubber.", zh: '它是一块橡皮。' },
          { en: 'No. Guess again.', zh: '不对。再猜一次。' },
          { en: 'Is it a pencil case?', zh: '它是一个铅笔盒吗？' },
          { en: 'Yes, it is!', zh: '是的，它是！' },
          { en: "Look, Mike. What's that?", zh: '看，迈克。那是什么？' },
          { en: "It's for your pencil. Now your pencil is long.", zh: '它是给你的铅笔用的。现在你的铅笔变长了。' },
          { en: 'Good idea! Thank you, Su Hai.', zh: '好主意！谢谢你，苏海。' },
          // 重点短语
          { en: 'Put your school things in your schoolbag.', zh: '把你的学习用品放进书包里。' },
          { en: "You're right.", zh: '你是对的。' },
          { en: 'Good idea!', zh: '好主意！' }
        ]
      },
      {
        title: 'Unit 2 Clean our classroom',
        words: [
          { en: 'our', zh: '我们的', emoji: '🙋', ex: 'This is our classroom.' },
          { en: 'classroom', zh: '教室', emoji: '🏫', ex: 'Our classroom is big.' },
          { en: 'put away', zh: '收起；放回原处', emoji: '📥', ex: 'Put away your books.' },
          { en: 'close', zh: '关', emoji: '🚪', ex: 'Close the window, please.' },
          { en: 'window', zh: '窗户', emoji: '🪟', ex: 'Please close the window.' },
          { en: 'blackboard', zh: '黑板', emoji: '⬛', ex: 'Look at the blackboard.' },
          { en: 'chair', zh: '椅子', emoji: '🪑', ex: 'This is my chair.' },
          { en: 'sweep', zh: '扫；打扫', emoji: '🧹', ex: "Let's sweep the floor." },
          { en: 'floor', zh: '地板', emoji: '🟫', ex: 'The floor is clean.' },
          { en: 'let', zh: '让', emoji: '➡️' },
          { en: 'us', zh: '我们', emoji: '👨‍👩‍👧', ex: 'Let us clean the room.' },
          { en: 'desk', zh: '课桌', emoji: '🛋️', ex: 'My desk is clean.' },
          { en: 'dirty', zh: '脏的', emoji: '🧼', ex: 'Your hands are dirty.' },
          { en: 'Me too!', zh: '我也是！', emoji: '🙋' },
          { en: 'All right.', zh: '好的。', emoji: '👌' },
          { en: 'clean', zh: '干净的；打扫', emoji: '✨', ex: 'Keep it clean.' },
          { en: 'keep', zh: '保持', emoji: '🔄', ex: 'Keep our classroom clean.' }
        ],
        sentences: [
          // Cartoon time: A dirty desk
          { en: "Let's clean our classroom!", zh: '我们来打扫教室吧！' },
          { en: 'Good idea!', zh: '好主意！' },
          { en: 'Sam, sweep the floor, please.', zh: '山姆，请扫地。' },
          { en: 'OK.', zh: '好的。' },
          { en: 'Please clean your desk and chair, Max.', zh: '马克斯，请擦你的课桌和椅子。' },
          { en: 'Look! That desk is dirty!', zh: '看！那张课桌很脏！' },
          { en: "Oh, it's my desk ...", zh: '哦，那是我的课桌……' },
          // Story time: Let's clean our classroom
          { en: 'Our classroom is dirty.', zh: '我们的教室很脏。' },
          { en: "Let's clean it.", zh: '我们来打扫它。' },
          { en: 'OK!', zh: '好的！' },
          { en: 'I can clean the blackboard.', zh: '我会擦黑板。' },
          { en: 'Me too!', zh: '我也是！' },
          { en: "Let's sweep the floor.", zh: '我们来扫地吧。' },
          { en: "Let's put away the books, Yang Ling.", zh: '杨玲，我们把书收起来吧。' },
          { en: 'All right.', zh: '好的。' },
          { en: 'Please close the window, Mike.', zh: '迈克，请关上窗户。' },
          { en: 'Thanks, Mike.', zh: '谢谢你，迈克。' },
          { en: 'Our classroom is clean now.', zh: '我们的教室现在干净了。' },
          { en: "Yes. Let's keep it clean.", zh: '是的。让我们保持干净。' },
          // 重点短语
          { en: 'clean the blackboard', zh: '擦黑板' },
          { en: 'sweep the floor', zh: '扫地' },
          { en: 'put away the books', zh: '把书收起来' },
          { en: 'close the window', zh: '关窗户' },
          { en: 'keep it clean', zh: '保持干净' }
        ]
      },
      {
        title: 'Unit 3 School rules',
        words: [
          { en: 'rule', zh: '规则', emoji: '📋', ex: 'Follow the rules.' },
          { en: 'library', zh: '图书馆', emoji: '📚', ex: 'This is the library.' },
          { en: 'shout', zh: '喊叫', emoji: '📢', ex: "Don't shout!" },
          { en: 'talk', zh: '说话', emoji: '💬', ex: "Don't talk in the library." },
          { en: 'eat', zh: '吃', emoji: '🍎', ex: "Don't eat here." },
          { en: 'run', zh: '跑', emoji: '🏃', ex: "Don't run in class." },
          { en: 'Mrs', zh: '夫人；太太', emoji: '👩', ex: 'Hello, Mrs Green.' },
          { en: 'sit down', zh: '坐下', emoji: '🪑', ex: 'Sit down, please.' },
          { en: 'late', zh: '迟的', emoji: '⏰', ex: "Don't be late." },
          { en: 'look out of', zh: '朝……外看', emoji: '🪟', ex: "Don't look out of the window." },
          { en: 'on', zh: '在……上面', emoji: '🔝', ex: 'The book is on the desk.' },
          { en: 'shh', zh: '嘘', emoji: '🤫' },
          { en: 'fun', zh: '有趣的', emoji: '🎉', ex: 'This is fun!' },
          { en: 'quiet', zh: '安静的', emoji: '🤫', ex: 'Be quiet, please.' },
          { en: 'follow', zh: '遵循；听从', emoji: '👣', ex: 'Follow the school rules.' },
          { en: 'Would you like ...?', zh: '你想要……吗？', emoji: '🤲' },
          { en: 'sweet', zh: '甜的；糖果', emoji: '🍬', ex: 'Would you like a sweet?' },
          { en: 'look at', zh: '看', emoji: '👀', ex: 'Look at me.' },
          { en: "That's all right.", zh: '不要紧。', emoji: '😊' }
        ],
        sentences: [
          // Library rules
          { en: "Don't shout.", zh: '不要喊叫。' },
          { en: "Don't talk.", zh: '不要讲话。' },
          { en: "Don't eat.", zh: '不要吃东西。' },
          { en: "Don't run.", zh: '不要跑。' },
          { en: 'This is our library. Reading is fun.', zh: '这是我们的图书馆。阅读很有趣。' },
          { en: 'Boys, girls, please follow the rules.', zh: '同学们，请遵守规则。' },
          // Cartoon time: You can draw here
          { en: 'Good morning, Mrs Fox.', zh: '早上好，狐狸夫人。' },
          { en: 'Good morning. Sit down, please.', zh: '早上好。请坐。' },
          { en: "You're late, Bobby.", zh: '你迟到了，波比。' },
          { en: "I'm sorry, Mrs Fox.", zh: '对不起，狐狸夫人。' },
          { en: "Don't be late again.", zh: '不要再迟到了。' },
          { en: "Don't look out of the window, Bobby.", zh: '不要朝窗外看，波比。' },
          { en: "Bobby, don't draw on your desk.", zh: '波比，不要在课桌上画画。' },
          { en: 'You can draw here, Bobby.', zh: '你可以在这里画，波比。' },
          // Story time: In the library
          { en: 'Hello, Yang Ling!', zh: '你好，杨玲！' },
          { en: "Shh! Don't shout, Liu Tao.", zh: '嘘！不要喊叫，刘涛。' },
          { en: 'This book is fun.', zh: '这本书很有趣。' },
          { en: 'Yes, it is. But keep quiet, please.', zh: '是的。但是请保持安静。' },
          { en: "I'm sorry.", zh: '对不起。' },
          { en: "Look! Let's follow the rules.", zh: '看！让我们遵守规则。' },
          { en: 'OK.', zh: '好的。' },
          { en: 'Hi!', zh: '嗨！' },
          { en: "Don't run, Mike.", zh: '不要跑，迈克。' },
          { en: "Don't shout, Mike.", zh: '不要喊叫，迈克。' },
          { en: 'Would you like a sweet?', zh: '你想要颗糖吗？' },
          { en: "No, thank you. We can't eat here.", zh: '不，谢谢。我们不能在这里吃东西。' },
          { en: 'Look at the rules here.', zh: '看这里的规则。' },
          { en: "Oh, I'm sorry.", zh: '哦，对不起。' },
          { en: "That's all right.", zh: '没关系。' },
          // 重点短语
          { en: 'keep quiet', zh: '保持安静' },
          { en: 'follow the rules', zh: '遵守规则' },
          { en: "That's all right.", zh: '不要紧。' }
        ]
      },
      {
        title: 'Unit 4 Have fun after class',
        words: [
          { en: 'have fun', zh: '玩得高兴', emoji: '🎉', ex: 'Have fun after class!' },
          { en: 'after class', zh: '课后', emoji: '🔔', ex: 'We play after class.' },
          { en: 'behind', zh: '在……后面', emoji: '🔙', ex: 'The ball is behind the tree.' },
          { en: 'tree', zh: '树', emoji: '🌳', ex: 'The tree is big.' },
          { en: 'by', zh: '在……旁边', emoji: '📍', ex: 'Sit by the tree.' },
          { en: 'under', zh: '在……下面', emoji: '⬇️', ex: 'The cat is under the chair.' },
          { en: 'flower', zh: '花', emoji: '🌸', ex: 'The flowers are beautiful.' },
          { en: 'break time', zh: '课间休息', emoji: '⏸️', ex: "It's break time!" },
          { en: 'play', zh: '玩', emoji: '⚽', ex: 'We play outside.' },
          { en: 'outside', zh: '在外面', emoji: '🌤️', ex: 'Let us play outside.' },
          { en: 'ready', zh: '准备好的', emoji: '✅', ex: 'Are you ready?' },
          { en: 'go', zh: '去', emoji: '🚶', ex: "Let's go!" },
          { en: 'plane', zh: '飞机', emoji: '✈️', ex: 'The plane is high.' },
          { en: 'very', zh: '很；非常', emoji: '❗', ex: 'It is very big.' },
          { en: 'far', zh: '远', emoji: '🌏', ex: 'The park is not far.' },
          { en: 'where', zh: '在哪里', emoji: '❓', ex: 'Where is the garden?' },
          { en: 'find', zh: '找到', emoji: '🔍', ex: 'I can not find my pen.' },
          { en: 'over', zh: '结束', emoji: '🏁', ex: 'Class is over.' },
          { en: 'student', zh: '学生', emoji: '🧑‍🎓', ex: 'I am a student.' },
          { en: 'from', zh: '来自', emoji: '📍', ex: 'I am from China.' },
          { en: 'Art Club', zh: '美术社团', emoji: '🎨', ex: 'I am in the Art Club.' },
          { en: 'nice', zh: '美好的', emoji: '👍', ex: 'Nice to see you.' },
          { en: 'of', zh: '关于（……的）', emoji: '📝' },
          { en: 'garden', zh: '花园', emoji: '🌷', ex: 'The garden is nice.' },
          { en: 'butterfly', zh: '蝴蝶', emoji: '🦋', ex: 'The butterfly is beautiful.' },
          { en: 'beautiful', zh: '美丽的', emoji: '🌸', ex: 'How beautiful!' },
          { en: 'duck', zh: '鸭子', emoji: '🦆', ex: 'The duck can swim.' }
        ],
        sentences: [
          // Lead-in rhyme
          { en: "Let's play hide-and-seek.", zh: '我们来玩捉迷藏吧。' },
          { en: "Run and hide. Don't speak.", zh: '跑起来躲起来，不要说话。' },
          { en: "Who's behind the tree?", zh: '谁在树后面？' },
          { en: 'Can you see? Can you see?', zh: '你看见了吗？你看见了吗？' },
          // Cartoon time: Where's my paper plane?
          { en: "Class is over. Let's play!", zh: '下课了，我们去玩吧！' },
          { en: 'The planes go very far.', zh: '飞机飞得很远。' },
          { en: 'One, two, three, go!', zh: '一、二、三，飞！' },
          { en: 'Yes. My plane is on the table.', zh: '是的。我的飞机在桌子上。' },
          { en: 'My plane is in the flowers!', zh: '我的飞机在花丛里！' },
          { en: "It's in the tree!", zh: '它在树上！' },
          { en: "Where's my plane? I can't find it.", zh: '我的飞机在哪里？我找不到它了。' },
          { en: 'Oh no!', zh: '哦，不！' },
          // Story time: Drawing in the school garden
          { en: 'Class is over. The students are in the school garden.', zh: '下课了。学生们在学校花园里。' },
          { en: "Let's draw pictures here.", zh: '我们在这里画画吧。' },
          { en: 'Great! I want to draw the flowers.', zh: '太好了！我想画花。' },
          { en: "Where's the butterfly?", zh: '蝴蝶在哪里？' },
          { en: "I can't find it.", zh: '我找不到它。' },
          { en: 'Look! A butterfly is by the tree!', zh: '看！一只蝴蝶在树旁边！' },
          { en: 'How beautiful!', zh: '真漂亮！' },
          { en: "Ha ha! It's behind you.", zh: '哈哈！它在你后面。' },
          { en: "Hi, Wang Bing! Look at the butterfly. It's on the duck.", zh: '嗨，王兵！看那只蝴蝶。它在鸭子身上。' },
          { en: 'How lovely!', zh: '真可爱！' },
          { en: "What's that, Wang Bing?", zh: '那是什么，王兵？' },
          { en: 'A picture of you and the butterfly!', zh: '一张你和蝴蝶的图画！' },
          // 重点短语
          { en: 'Class is over.', zh: '下课了。' },
          { en: 'have fun', zh: '玩得高兴' },
          { en: 'by the tree', zh: '在树旁' },
          { en: 'behind you', zh: '在你后面' },
          { en: 'on the duck', zh: '在鸭子身上' }
        ]
      },
      {
        title: 'Unit 5 Fruit',
        words: [
          { en: 'fruit', zh: '水果', emoji: '🍇', ex: 'I like fruit.' },
          { en: 'orange', zh: '橙子；橙色的', emoji: '🍊', ex: 'This orange is sweet.' },
          { en: 'grape', zh: '葡萄', emoji: '🍇', ex: 'I like grapes.' },
          { en: 'banana', zh: '香蕉', emoji: '🍌', ex: 'The banana is yellow.' },
          { en: 'apple', zh: '苹果', emoji: '🍎', ex: 'An apple a day.' },
          { en: 'mango', zh: '芒果', emoji: '🥭', ex: 'Mangoes are sweet.' },
          { en: 'share', zh: '分享', emoji: '🤝', ex: 'Let us share the fruit.' },
          { en: 'like', zh: '喜欢', emoji: '❤️', ex: 'I like apples.' },
          { en: 'they', zh: '它们；他们；她们', emoji: '👥', ex: 'They are grapes.' },
          { en: 'sweet', zh: '甜的', emoji: '🍬', ex: 'The mango is sweet.' },
          { en: 'make', zh: '做；制作', emoji: '🔨', ex: "Let's make a salad." },
          { en: 'salad', zh: '沙拉', emoji: '🥗', ex: 'The salad is yummy.' },
          { en: 'together', zh: '一起', emoji: '👫', ex: 'We eat together.' },
          { en: 'an', zh: '一（个）', emoji: '📝', ex: 'I have an apple.' },
          { en: 'What about you?', zh: '你呢？', emoji: '❓' },
          { en: 'good', zh: '好的；有好处', emoji: '👍', ex: 'Fruit is good for you.' }
        ],
        sentences: [
          // Lead-in rhyme
          { en: 'I like apples, red and sweet.', zh: '我喜欢苹果，又红又甜。' },
          { en: 'I like bananas, a tasty treat.', zh: '我喜欢香蕉，美味的食物。' },
          { en: 'Oranges are yummy. Grapes are great!', zh: '橙子很好吃。葡萄很棒！' },
          { en: 'I want lots of fruit on my plate.', zh: '我想盘子里有很多水果。' },
          // Cartoon time: A magic trick
          { en: 'Do you have a mango, Bobby?', zh: '你有芒果吗，波比？' },
          { en: "No, I don't.", zh: '不，我没有。' },
          { en: 'One, two, three, look! I have a mango!', zh: '一、二、三，看！我有一个芒果！' },
          { en: 'Cool!', zh: '酷！' },
          { en: 'One, two, three! I have two mangoes.', zh: '一、二、三！我有两个芒果。' },
          { en: 'Great!', zh: '太棒了！' },
          { en: "Ha ha! Let's share the mangoes!", zh: '哈哈！让我们分享芒果吧！' },
          { en: "Thank you! I like mangoes. They're sweet.", zh: '谢谢你！我喜欢芒果。它们很甜。' },
          // Story time: Let's make a fruit salad
          { en: "Let's make a fruit salad together.", zh: '让我们一起做水果沙拉吧。' },
          { en: 'Great!', zh: '太好了！' },
          { en: 'What fruit do you have?', zh: '你们有什么水果？' },
          { en: 'I have an orange. What about you?', zh: '我有一个橙子。你呢？' },
          { en: 'I have two apples.', zh: '我有两个苹果。' },
          { en: 'I have a mango. Do you have a banana, Yang Ling?', zh: '我有一个芒果。你有香蕉吗，杨玲？' },
          { en: "No, I don't. I have some grapes.", zh: '不，我没有。我有一些葡萄。' },
          { en: 'Wang Bing, do you have a banana?', zh: '王兵，你有香蕉吗？' },
          { en: 'Yes, I do.', zh: '是的，我有。' },
          { en: 'Here you are.', zh: '给你。' },
          { en: 'Thanks.', zh: '谢谢。' },
          { en: "Let's share the fruit salad!", zh: '让我们分享水果沙拉吧！' },
          { en: 'How nice!', zh: '真好！' },
          { en: 'Fruit is good for us!', zh: '水果对我们有益！' },
          // 重点短语
          { en: 'make a fruit salad', zh: '做水果沙拉' },
          { en: 'What about you?', zh: '你呢？' },
          { en: 'Here you are.', zh: '给你。' },
          { en: 'Fruit is good for us.', zh: '水果对我们有益。' }
        ]
      },
      {
        title: 'Unit 6 On the farm',
        words: [
          { en: 'farm', zh: '农场', emoji: '🚜', ex: 'Welcome to the farm.' },
          { en: 'cow', zh: '奶牛', emoji: '🐄', ex: 'The cow is big.' },
          { en: 'sheep', zh: '绵羊', emoji: '🐑', ex: 'The sheep are white.' },
          { en: 'rabbit', zh: '兔子', emoji: '🐰', ex: 'The rabbit is cute.' },
          { en: 'chicken', zh: '鸡', emoji: '🐔', ex: 'The chicken is small.' },
          { en: 'carrot', zh: '胡萝卜', emoji: '🥕', ex: 'Rabbits like carrots.' },
          { en: 'pig', zh: '猪', emoji: '🐷', ex: 'The pig is fat.' },
          { en: 'Welcome to ...', zh: '欢迎来到……', emoji: '👋' },
          { en: 'home', zh: '家', emoji: '🏠', ex: 'Welcome to my home.' },
          { en: 'these', zh: '这些', emoji: '👉', ex: 'These are cows.' },
          { en: 'those', zh: '那些', emoji: '👈', ex: 'Those are sheep.' },
          { en: 'help', zh: '帮助', emoji: '🤝', ex: 'Can I help you?' },
          { en: 'cute', zh: '可爱的', emoji: '🥰', ex: 'The rabbits are cute.' },
          { en: 'move', zh: '移动', emoji: '🚶', ex: 'Move the chair, please.' }
        ],
        sentences: [
          // Lead-in chant
          { en: 'Pigs on the farm go "oink, oink".', zh: '农场上的猪发出“哼哼”声。' },
          { en: 'The pigs go "oink, oink, oink".', zh: '猪们发出“哼哼哼”声。' },
          // Cartoon time: A "big" carrot
          { en: 'Hello, Sam. Hello, Bobby.', zh: '你们好，山姆、波比。' },
          { en: 'Hello, Ruby!', zh: '你好，鲁比！' },
          { en: 'Welcome to my home!', zh: '欢迎来到我家！' },
          { en: 'What are these?', zh: '这些是什么？' },
          { en: "They're carrots.", zh: '它们是胡萝卜。' },
          { en: 'Are those carrots too?', zh: '那些也是胡萝卜吗？' },
          { en: 'Yes, they are.', zh: '是的，它们是。' },
          { en: 'Help me, please!', zh: '请帮帮我！' },
          { en: 'Oh!', zh: '哦！' },
          // Story time: On Grandpa's farm
          { en: 'Hello, Grandpa!', zh: '你好，爷爷！' },
          { en: 'Hello, boys! Welcome to my farm.', zh: '你们好，孩子们！欢迎来到我的农场。' },
          { en: 'What are these, Grandpa?', zh: '爷爷，这些是什么？' },
          { en: "They're pigs.", zh: '它们是猪。' },
          { en: 'Is this a home for pigs?', zh: '这是给猪住的家吗？' },
          { en: 'Yes, it is.', zh: '是的，它是。' },
          { en: 'What are those under the tree? Are they sheep?', zh: '树下的那些是什么？它们是绵羊吗？' },
          { en: "No, they aren't. They're cows.", zh: '不，它们不是。它们是奶牛。' },
          { en: 'These rabbits are very cute.', zh: '这些兔子非常可爱。' },
          { en: 'Yes, they are.', zh: '是的，它们是。' },
          { en: 'What do they like?', zh: '它们喜欢什么？' },
          { en: 'They like carrots.', zh: '它们喜欢胡萝卜。' },
          { en: 'Are those chickens?', zh: '那些是鸡吗？' },
          { en: "No, they aren't. They're ducks.", zh: '不，它们不是。它们是鸭子。' },
          { en: "One, two, three, four ... Don't move, ducks!", zh: '一、二、三、四……不要动，鸭子们！' },
          { en: 'Grandpa, your farm is fun.', zh: '爷爷，你的农场真有趣。' },
          // 重点短语
          { en: 'Welcome to my farm.', zh: '欢迎来到我的农场。' },
          { en: 'What are these/those?', zh: '这些/那些是什么？' },
          { en: "They're ...", zh: '它们是……' },
          { en: 'Yes, they are. / No, they are not.', zh: '是的，它们是。/ 不，它们不是。' }
        ]
      },
      {
        title: 'Unit 7 Animals',
        words: [
          { en: 'animal', zh: '动物', emoji: '🐾', ex: 'I like animals.' },
          { en: 'monkey', zh: '猴子', emoji: '🐵', ex: 'The monkey is funny.' },
          { en: 'lion', zh: '狮子', emoji: '🦁', ex: 'The lion is strong.' },
          { en: 'bear', zh: '熊', emoji: '🐻', ex: 'The bear is big.' },
          { en: 'tiger', zh: '老虎', emoji: '🐯', ex: 'The tiger can run.' },
          { en: 'panda', zh: '大熊猫', emoji: '🐼', ex: 'Pandas are cute.' },
          { en: 'elephant', zh: '大象', emoji: '🐘', ex: 'The elephant is big.' },
          { en: 'lunchtime', zh: '午餐时间', emoji: '🍱', ex: "It's lunchtime." },
          { en: 'fish', zh: '鱼', emoji: '🐟', ex: 'The fish can swim.' },
          { en: 'high five', zh: '击掌', emoji: '🙌' },
          { en: 'feed', zh: '喂', emoji: '🍼', ex: "Don't feed the animals." },
          { en: 'zoo', zh: '动物园', emoji: '🏛️', ex: "Let's go to the zoo." },
          { en: 'go', zh: '去', emoji: '🚶', ex: 'Let us go!' },
          { en: 'see', zh: '看见', emoji: '👀', ex: 'I can see a tiger.' }
        ],
        sentences: [
          // Lead-in rhyme
          { en: "Let's see the pandas at the zoo.", zh: '我们去动物园看熊猫吧。' },
          { en: 'They love to eat fresh bamboo.', zh: '它们喜欢吃新鲜的竹子。' },
          { en: 'They love to sleep and play.', zh: '它们喜欢睡觉和玩耍。' },
          { en: 'I can watch them all day.', zh: '我可以整天看它们。' },
          // Cartoon time: High five!
          { en: "It's lunchtime.", zh: '午餐时间到了。' },
          { en: 'Do you like cakes?', zh: '你喜欢蛋糕吗？' },
          { en: "No, I don't.", zh: '不，我不喜欢。' },
          { en: 'Do you like bananas?', zh: '你喜欢香蕉吗？' },
          { en: 'Do you like fish?', zh: '你喜欢鱼吗？' },
          { en: 'Yes, I do!', zh: '是的，我喜欢！' },
          { en: 'Me too!', zh: '我也是！' },
          { en: 'High five!', zh: '击个掌！' },
          { en: 'Five?', zh: '五？' },
          // Story time: At the zoo
          { en: 'Look at the tigers!', zh: '看那些老虎！' },
          { en: 'I like tigers. They are cool.', zh: '我喜欢老虎。它们很酷。' },
          { en: 'I like tigers too.', zh: '我也喜欢老虎。' },
          { en: 'Do you like bears, Mum?', zh: '妈妈，你喜欢熊吗？' },
          { en: "Yes, I do. They're big.", zh: '是的，我喜欢。它们很大。' },
          { en: 'Do you like lions, Haohao?', zh: '浩浩，你喜欢狮子吗？' },
          { en: "No, I don't! I like pandas!", zh: '不，我不喜欢！我喜欢熊猫！' },
          { en: 'Haohao, look at the monkeys. They are cute.', zh: '浩浩，看那些猴子。它们很可爱。' },
          { en: 'I like monkeys! Hi, Monkey! Would you like a banana?', zh: '我喜欢猴子！嗨，猴子！你想要一根香蕉吗？' },
          { en: "Don't feed animals in the zoo!", zh: '不要在动物园里喂动物！' },
          { en: "Oh, I'm sorry!", zh: '哦，对不起！' },
          { en: "That's all right.", zh: '没关系。' },
          { en: "Let's go to see the pandas.", zh: '我们去看熊猫吧。' },
          // 重点短语
          { en: 'Do you like ...?', zh: '你喜欢……吗？' },
          { en: 'Yes, I do. / No, I do not.', zh: '是的，我喜欢。/ 不，我不喜欢。' },
          { en: "Don't feed animals in the zoo.", zh: '不要在动物园里喂动物。' },
          { en: "Let's go to see the pandas.", zh: '我们去看熊猫吧。' }
        ]
      },
      {
        title: 'Unit 8 Colours',
        words: [
          { en: 'colour', zh: '颜色', emoji: '🎨', ex: 'What colour is it?' },
          { en: 'yellow', zh: '黄色的', emoji: '🟡', ex: 'The banana is yellow.' },
          { en: 'blue', zh: '蓝色的', emoji: '🔵', ex: 'The sky is blue.' },
          { en: 'red', zh: '红色的', emoji: '🔴', ex: 'The apple is red.' },
          { en: 'orange', zh: '橙色的', emoji: '🟠', ex: 'The orange is orange.' },
          { en: 'pink', zh: '粉红色的', emoji: '🌸', ex: 'The flower is pink.' },
          { en: 'green', zh: '绿色的', emoji: '🟢', ex: 'The tree is green.' },
          { en: 'brown', zh: '棕色的', emoji: '🟤', ex: 'The bear is brown.' },
          { en: 'black', zh: '黑色的', emoji: '⚫', ex: 'The cat is black.' },
          { en: 'white', zh: '白色的', emoji: '⚪', ex: 'The sheep is white.' },
          { en: 'buy', zh: '买', emoji: '💰', ex: 'I want to buy a balloon.' },
          { en: 'balloon', zh: '气球', emoji: '🎈', ex: 'The balloon is red.' },
          { en: 'sure', zh: '当然', emoji: '👌' },
          { en: 'chameleon', zh: '变色龙', emoji: '🦎', ex: 'The chameleon changes colours.' },
          { en: 'little', zh: '小的', emoji: '🐣', ex: 'A little bird.' },
          { en: 'What colour is ...?', zh: '……是什么颜色的？', emoji: '❓' },
          { en: 'How come?', zh: '怎么回事？', emoji: '🤔' }
        ],
        sentences: [
          // Cartoon time: Colourful balloons
          { en: 'Can I buy a balloon, Mum?', zh: '妈妈，我能买一个气球吗？' },
          { en: 'Sure.', zh: '当然。' },
          { en: 'Here you are.', zh: '给你。' },
          { en: 'What about you, Bobby?', zh: '你呢，波比？' },
          { en: 'Hello! I want a balloon.', zh: '你好！我想要一个气球。' },
          { en: 'OK. What colour?', zh: '好的。什么颜色？' },
          { en: 'Pink, please.', zh: '请给我粉色。' },
          { en: 'I want a green balloon, a red balloon, an orange balloon ...', zh: '我想要一个绿色的气球、一个红色的气球、一个橙色的气球……' },
          { en: 'Bobby! That balloon is for you.', zh: '波比！那个气球是给你的。' },
          // Story time: A little friend
          { en: 'Look, this is a chameleon. It is my little friend.', zh: '看，这是一只变色龙。它是我的小朋友。' },
          { en: 'What colour is it?', zh: '它是什么颜色？' },
          { en: "It's green.", zh: '它是绿色的。' },
          { en: 'What colour is it now? Can you see it?', zh: '它现在是什么颜色？你能看见它吗？' },
          { en: "Yes, it's here. It's brown.", zh: '是的，它在这里。它是棕色的。' },
          { en: "It's yellow and red now.", zh: '它现在是黄色和红色的。' },
          { en: "It's cool!", zh: '它真酷！' },
          { en: 'Yes, my little friend is very cool.', zh: '是的，我的小朋友很酷。' },
          { en: 'What colour is it now?', zh: '它现在是什么颜色？' },
          { en: "It's green again!", zh: '它又变成绿色了！' },
          { en: 'How come?', zh: '怎么回事？' },
          { en: 'Wow!', zh: '哇！' },
          // 重点短语
          { en: 'Can I buy a balloon?', zh: '我能买一个气球吗？' },
          { en: 'What colour is it?', zh: '它是什么颜色？' },
          { en: "It's green / brown / yellow and red.", zh: '它是绿色/棕色/黄色和红色的。' },
          { en: 'How come?', zh: '怎么回事？' }
        ]
      }
    ]
  },

  {
    id: '4a',
    name: '四年级上册',
    edition: '译林版 · 新教材（2025秋）',
    ready: true,
    units: [
      {
        title: 'Unit 1 Our school subjects',
        words: [
          { en: 'subject', zh: '科目；学科', emoji: '📚', ex: 'What subject do you like?' },
          { en: 'Chinese', zh: '语文（课）', emoji: '🇨🇳', ex: 'We have Chinese.' },
          { en: 'English', zh: '英语（课）', emoji: '🔤', ex: 'I like English.' },
          { en: 'Maths', zh: '数学（课）', emoji: '➗', ex: 'I like Maths.' },
          { en: 'PE', zh: '体育（课）', emoji: '🏃', ex: "It's time for PE." },
          { en: 'Art', zh: '美术（课）', emoji: '🎨', ex: 'I like Art.' },
          { en: 'Science', zh: '科学（课）', emoji: '🔬', ex: 'We have Science.' },
          { en: 'Music', zh: '音乐（课）', emoji: '🎵', ex: 'I like Music best.' },
          { en: 'timetable', zh: '课程表', emoji: '🗓️', ex: 'This is our timetable.' },
          { en: 'welcome', zh: '欢迎', emoji: '👋', ex: 'Welcome back to school.' },
          { en: 'fun', zh: '乐趣；有趣的', emoji: '😄', ex: 'School is fun.' },
          { en: 'playground', zh: '操场', emoji: '🛝', ex: "Let's go to the playground." },
          { en: 'lesson', zh: '课', emoji: '📖', ex: 'We have a Music lesson.' }
        ],
        sentences: [
          // === Story time: My favourite subject ===
          { en: 'Welcome back to school, class.', zh: '欢迎回到学校，同学们。' },
          { en: 'We have Chinese, Maths, English and Science.', zh: '我们有语文、数学、英语和科学课。' },
          { en: 'What subjects do you like?', zh: '你们喜欢什么科目？' },
          { en: "I like Maths. I'm good at it.", zh: '我喜欢数学，我很擅长。' },
          { en: "It's time for PE.", zh: '该上体育课了。' },
          { en: 'We all like PE!', zh: '我们都喜欢体育课！' },
          // === Cartoon time: Where's the mouse? ===
          { en: 'What subject do you like best, Bobby?', zh: '鲍比，你最喜欢什么科目？' },
          { en: 'I like Music best.', zh: '我最喜欢音乐。' },
          { en: "Where's the mouse?", zh: '老鼠在哪儿？' }
        ]
      },
      {
        title: 'Unit 2 My day',
        words: [
          { en: 'day', zh: '一天；白天', emoji: '☀️', ex: 'This is my day.' },
          { en: 'get up', zh: '起床', emoji: '🛏️', ex: 'I get up at seven.' },
          { en: 'wash', zh: '洗', emoji: '🚿', ex: 'Wash your face.' },
          { en: 'face', zh: '脸', emoji: '😊', ex: 'Wash your face first.' },
          { en: 'breakfast', zh: '早餐', emoji: '🍳', ex: "It's time for breakfast." },
          { en: 'lunch', zh: '午餐', emoji: '🍱', ex: "It's time for lunch." },
          { en: 'dinner', zh: '晚餐', emoji: '🍲', ex: 'Dinner is ready.' },
          { en: 'go to bed', zh: '去睡觉', emoji: '🌙', ex: "It's time to go to bed." },
          { en: "o'clock", zh: '……点钟', emoji: '🕐', ex: "It's seven o'clock." },
          { en: 'thirty', zh: '三十', emoji: '🔟', ex: "It's seven thirty." },
          { en: 'hurry up', zh: '快点', emoji: '⏩', ex: 'Bobby, hurry up!' },
          { en: 'time', zh: '时间', emoji: '⏰', ex: 'What time is it?' }
        ],
        sentences: [
          // === Story time: Wang Bing's day ===
          { en: 'Good morning, Mum.', zh: '早上好，妈妈。' },
          { en: "It's seven twenty.", zh: '七点二十了。' },
          { en: "It's eleven thirty.", zh: '十一点半了。' },
          { en: "It's four thirty. It's time for sport.", zh: '四点半了，该运动了。' },
          { en: "It's six fifteen.", zh: '六点十五了。' },
          { en: "It's nine o'clock. Good night!", zh: '九点了，晚安！' },
          // === Cartoon time ===
          { en: "It's seven o'clock. Get up, Bobby!", zh: '七点了，鲍比，起床！' },
          { en: 'Wash your face first.', zh: '先洗脸。' },
          { en: "It's time for breakfast.", zh: '该吃早饭了。' },
          { en: "What time is it now? — It's eight!", zh: '现在几点了？——八点了！' }
        ]
      },
      {
        title: 'Unit 3 My week',
        words: [
          { en: 'week', zh: '周；星期', emoji: '📅', ex: 'This is my week.' },
          { en: 'Monday', zh: '星期一', emoji: '1️⃣' },
          { en: 'Tuesday', zh: '星期二', emoji: '2️⃣' },
          { en: 'Wednesday', zh: '星期三', emoji: '3️⃣' },
          { en: 'Thursday', zh: '星期四', emoji: '4️⃣' },
          { en: 'Friday', zh: '星期五', emoji: '5️⃣' },
          { en: 'Saturday', zh: '星期六', emoji: '6️⃣' },
          { en: 'Sunday', zh: '星期日', emoji: '7️⃣' },
          { en: 'cinema', zh: '电影院', emoji: '🎬', ex: "Let's go to the cinema." },
          { en: 'dancing', zh: '跳舞', emoji: '💃', ex: 'I have dancing lessons.' },
          { en: 'lesson', zh: '课；功课', emoji: '📖', ex: 'dancing lesson' },
          { en: 'walk', zh: '散步；走', emoji: '🚶', ex: 'I walk my dog.' },
          { en: 'dog', zh: '狗', emoji: '🐶', ex: 'Walk my dog.' },
          { en: 'tomorrow', zh: '明天', emoji: '🌅', ex: 'See you tomorrow.' },
          { en: 'free', zh: '空闲的', emoji: '🆓', ex: "I'm free on Saturday." }
        ],
        sentences: [
          // === Story time: After school ===
          { en: "It's Friday today.", zh: '今天是星期五。' },
          { en: "Let's go to the cinema after school.", zh: '放学后我们去看电影吧。' },
          { en: 'I have two dancing lessons every week.', zh: '我每周有两节舞蹈课。' },
          { en: 'Sorry, I walk my dog on Tuesday and Friday.', zh: '抱歉，我周二和周五遛狗。' },
          { en: "OK, I'm free on Saturday.", zh: '好的，我周六有空。' },
          { en: 'See you tomorrow!', zh: '明天见！' },
          // === Cartoon time ===
          { en: "Oh, it's Saturday!", zh: '哦，今天是星期六！' },
          { en: 'I get up at five!', zh: '我五点起床！' },
          { en: 'I get up at six thirty.', zh: '我六点半起床。' },
          { en: 'What day is it today?', zh: '今天星期几？' }
        ]
      },
      {
        title: 'Unit 4 I like sport',
        words: [
          { en: 'sport', zh: '运动', emoji: '🏅', ex: 'I like sport.' },
          { en: 'play', zh: '玩；打（球）', emoji: '⚽', ex: "Let's play." },
          { en: 'football', zh: '足球', emoji: '⚽', ex: 'I like playing football.' },
          { en: 'basketball', zh: '篮球', emoji: '🏀', ex: 'I like playing basketball.' },
          { en: 'ping-pong', zh: '乒乓球', emoji: '🏓', ex: 'Ping-pong is fun.' },
          { en: 'well', zh: '好地', emoji: '👍', ex: 'You can play so well.' },
          { en: 'again', zh: '再；又', emoji: '🔁', ex: 'Can we play again?' },
          { en: 'have a go', zh: '试一试', emoji: '💪', ex: 'Have a go!' },
          { en: 'well played', zh: '打得好；干得好', emoji: '👏', ex: 'Well played!' },
          { en: 'good for', zh: '对……有益', emoji: '💪', ex: 'Sport is good for us.' },
          { en: 'try', zh: '尝试', emoji: '💪', ex: 'Try again.' }
        ],
        sentences: [
          // === Story time: Ping-pong is fun ===
          { en: "I like sport. It's good for us.", zh: '我喜欢运动，它对我们有好处。' },
          { en: 'I like playing basketball and ping-pong.', zh: '我喜欢打篮球和乒乓球。' },
          { en: 'Cool! You can play so well.', zh: '酷！你打得真好。' },
          { en: 'Do you like playing ping-pong? — Yes, I do.', zh: '你喜欢打乒乓球吗？——喜欢。' },
          { en: "Ping-pong is fun but I can't play well.", zh: '乒乓球很有趣，但我打不好。' },
          { en: 'Have a go! Try again. Well played!', zh: '试一试！再试试。打得好！' },
          // === Cartoon time: Come and play with us ===
          { en: 'I like playing basketball.', zh: '我喜欢打篮球。' },
          { en: 'Do you like playing basketball? — Yes, I do.', zh: '你喜欢打篮球吗？——喜欢。' },
          { en: 'Let’s play together.', zh: '我们一起玩吧。' },
          { en: 'This is great fun!', zh: '这真有趣！' },
          { en: 'Can we play again tomorrow? — Sure!', zh: '我们明天还能再玩吗？——当然！' }
        ]
      },
      {
        title: 'Unit 5 Different toys, same fun',
        words: [
          { en: 'different', zh: '不同的', emoji: '🔀', ex: 'Different toys, same fun.' },
          { en: 'same', zh: '相同的', emoji: '➡️', ex: 'same fun' },
          { en: 'toy', zh: '玩具', emoji: '🧸', ex: 'I like toys.' },
          { en: 'hair', zh: '头发', emoji: '💇', ex: 'Her hair is long.' },
          { en: 'eye', zh: '眼睛', emoji: '👁️', ex: 'His eyes are big.' },
          { en: 'ear', zh: '耳朵', emoji: '👂', ex: 'The ears are big.' },
          { en: 'nose', zh: '鼻子', emoji: '👃', ex: 'The nose is small.' },
          { en: 'mouth', zh: '嘴', emoji: '👄', ex: 'The mouth is small.' },
          { en: 'arm', zh: '手臂', emoji: '💪', ex: 'The arms are long.' },
          { en: 'leg', zh: '腿', emoji: '🦵', ex: 'The legs are short.' },
          { en: 'robot', zh: '机器人', emoji: '🤖', ex: 'Look at this robot.' },
          { en: 'doll', zh: '娃娃', emoji: '🪆', ex: 'Our dolls are cute.' },
          { en: 'cute', zh: '可爱的', emoji: '🥰', ex: 'The face is cute.' },
          { en: 'dance', zh: '跳舞', emoji: '💃', ex: 'Can you dance?' },
          { en: 'puppet', zh: '木偶', emoji: '🎎', ex: "Let's have a puppet show." }
        ],
        sentences: [
          // === Story time: Our dolls ===
          { en: 'Mum, do you like our dolls?', zh: '妈妈，你喜欢我们的娃娃吗？' },
          { en: 'Yes, they’re cute.', zh: '是的，它们很可爱。' },
          { en: 'My doll is a girl. Her hair is long.', zh: '我的娃娃是个女孩，她的头发很长。' },
          { en: 'My doll is a boy. His eyes are big.', zh: '我的娃娃是个男孩，他的眼睛很大。' },
          { en: 'They bring you lots of fun.', zh: '它们给你带来很多乐趣。' },
          { en: "Let's have a puppet show!", zh: '我们来办一场木偶戏吧！' },
          // === Cartoon time: Look at this robot ===
          { en: 'Look at this robot. His face is cute.', zh: '看这个机器人，它的脸很可爱。' },
          { en: "What's your name? — I'm Bobby.", zh: '你叫什么名字？——我是鲍比。' },
          { en: 'Can you dance? — I can dance too.', zh: '你会跳舞吗？——我也会跳舞。' },
          { en: "Now I'm not so tall. Ha ha! It's great fun.", zh: '现在我没那么高了，哈哈！真好玩。' },
          { en: "Let's dance together.", zh: '我们一起跳舞吧。' }
        ]
      },
      {
        title: 'Unit 6 Weather',
        words: [
          { en: 'weather', zh: '天气', emoji: '☁️', ex: "What's the weather like?" },
          { en: 'cloudy', zh: '多云的', emoji: '☁️', ex: "It's cloudy." },
          { en: 'sunny', zh: '晴朗的', emoji: '☀️', ex: "It's sunny and hot." },
          { en: 'rainy', zh: '下雨的', emoji: '🌧️', ex: 'Today is a rainy day.' },
          { en: 'windy', zh: '有风的', emoji: '💨', ex: 'It is windy and cloudy.' },
          { en: 'warm', zh: '温暖的', emoji: '🌡️', ex: "It's warm." },
          { en: 'hot', zh: '热的', emoji: '🔥', ex: "It's hot." },
          { en: 'cool', zh: '凉爽的', emoji: '🍃', ex: 'It is cool and nice.' },
          { en: 'cold', zh: '冷的', emoji: '❄️', ex: "It's cold." },
          { en: 'umbrella', zh: '雨伞', emoji: '☂️', ex: 'I have an umbrella.' },
          { en: 'rain', zh: '雨；下雨', emoji: '🌧️', ex: 'Save for a rainy day.' },
          { en: 'kite', zh: '风筝', emoji: '🪁', ex: 'We can fly a kite.' },
          { en: 'park', zh: '公园', emoji: '🌳', ex: "Let's go to the park." }
        ],
        sentences: [
          // === Story time: In the park ===
          { en: 'Hi Su Hai! Let’s go to the park today.', zh: '嗨苏海！今天我们去公园吧。' },
          { en: 'It is sunny and warm.', zh: '天气晴朗又温暖。' },
          { en: 'It is windy and cloudy now. We can fly a kite.', zh: '现在起风又多云了，我们可以放风筝。' },
          { en: 'It is cool and nice. Let’s have lunch.', zh: '天气凉爽宜人，我们吃午饭吧。' },
          { en: 'Oh no! It is rainy.', zh: '哦不！下雨了。' },
          { en: 'Don’t worry. I have an umbrella. We can share.', zh: '别担心，我有伞，我们可以一起用。' },
          // === Cartoon time: A rainy day ===
          { en: 'Save your money for a rainy day.', zh: '未雨绸缪（存钱以备不时之需）。' },
          { en: 'I want a red toy car.', zh: '我想要一辆红色玩具车。' },
          { en: "What's the weather like today?", zh: '今天天气怎么样？' },
          { en: 'Oh, it is sunny and hot. / Oh, it is cloudy.', zh: '哦，晴朗又热。/ 哦，多云。' },
          { en: "Today is a rainy day! It's time to buy the toy car.", zh: '今天下雨了！是时候买玩具车了。' }
        ]
      },
      {
        title: 'Unit 7 Seasons',
        words: [
          { en: 'season', zh: '季节', emoji: '🍂', ex: 'Four seasons' },
          { en: 'spring', zh: '春天', emoji: '🌸', ex: 'It is spring.' },
          { en: 'summer', zh: '夏天', emoji: '☀️', ex: 'It is summer.' },
          { en: 'autumn', zh: '秋天', emoji: '🍁', ex: 'It is autumn.' },
          { en: 'winter', zh: '冬天', emoji: '❄️', ex: 'It is winter.' },
          { en: 'warm', zh: '温暖的', emoji: '🌡️', ex: 'In spring it is warm.' },
          { en: 'hot', zh: '热的', emoji: '🔥', ex: 'In summer it is hot.' },
          { en: 'cool', zh: '凉爽的', emoji: '🍃', ex: 'In autumn it is cool.' },
          { en: 'cold', zh: '冷的', emoji: '❄️', ex: 'In winter it is cold.' },
          { en: 'plant', zh: '种植', emoji: '🌱', ex: 'We plant trees.' },
          { en: 'tree', zh: '树', emoji: '🌳', ex: 'We plant trees.' },
          { en: 'boat', zh: '小船', emoji: '⛵', ex: 'We go boating.' },
          { en: 'ice cream', zh: '冰淇淋', emoji: '🍦', ex: 'We eat ice cream.' },
          { en: 'pick', zh: '采摘', emoji: '🍎', ex: 'We pick fruit.' },
          { en: 'fruit', zh: '水果', emoji: '🍎', ex: 'We pick fruit.' },
          { en: 'climb', zh: '爬', emoji: '🧗', ex: 'We go climbing.' },
          { en: 'snow', zh: '雪', emoji: '❄️', ex: 'We play in the snow.' },
          { en: 'skate', zh: '滑冰', emoji: '⛸️', ex: 'We go skating.' },
          { en: 'year', zh: '年', emoji: '📅', ex: 'in a year' }
        ],
        sentences: [
          // === Story time: Four seasons ===
          { en: 'We have four seasons in a year.', zh: '一年有四季。' },
          { en: 'In spring it is warm. We plant trees. We go boating.', zh: '春天温暖，我们种树、去划船。' },
          { en: 'In summer it is hot. We eat ice cream. We go swimming.', zh: '夏天炎热，我们吃冰淇淋、去游泳。' },
          { en: 'In autumn it is cool. We pick fruit. We go climbing.', zh: '秋天凉爽，我们摘水果、去爬山。' },
          { en: 'In winter it is cold. We play in the snow. We go skating.', zh: '冬天寒冷，我们在雪里玩、去滑冰。' },
          // === Cartoon time: Nice to see you again ===
          { en: 'It is spring. It is warm.', zh: '春天来了，天气暖和。' },
          { en: 'It is summer. It is hot.', zh: '夏天来了，天气炎热。' },
          { en: 'Wow, you have babies! And I have new friends.', zh: '哇，你有宝宝了！我也有了新朋友。' },
          { en: 'It is autumn. It is cool.', zh: '秋天来了，天气凉爽。' },
          { en: 'It is winter. It is cold.', zh: '冬天来了，天气寒冷。' },
          { en: 'Where are my friends? Where can they be?', zh: '我的朋友们在哪儿？他们会在哪儿呢？' },
          { en: 'It is spring again. The birds are back.', zh: '春天又来了，鸟儿回来了。' }
        ]
      },
      {
        title: 'Unit 8 What we wear',
        words: [
          { en: 'wear', zh: '穿', emoji: '👕', ex: 'What do you wear?' },
          { en: 'clothes', zh: '衣服', emoji: '👚', ex: 'nice clothes' },
          { en: 'cap', zh: '帽子', emoji: '🧢', ex: 'You look cool in the cap.' },
          { en: 'coat', zh: '外套', emoji: '🧥', ex: "This is my mother's coat." },
          { en: 'skirt', zh: '短裙', emoji: '👗', ex: 'Whose skirt is this?' },
          { en: 'trousers', zh: '裤子', emoji: '👖', ex: 'Your trousers are so big.' },
          { en: 'dress', zh: '连衣裙', emoji: '👗', ex: 'Your red dress is beautiful.' },
          { en: 'shirt', zh: '衬衫', emoji: '👔', ex: "my father's new shirt" },
          { en: 'whose', zh: '谁的', emoji: '❓', ex: 'Whose cap is it?' },
          { en: 'holiday', zh: '假日', emoji: '🎉', ex: 'Happy holiday!' },
          { en: 'because', zh: '因为', emoji: '💡', ex: 'Because my students are bright.' },
          { en: 'bright', zh: '明亮的；聪明的', emoji: '💡', ex: 'my students are very bright' },
          { en: 'sunglasses', zh: '太阳镜', emoji: '🕶️', ex: 'I like your sunglasses.' },
          { en: 'fancy', zh: '别致的；化装', emoji: '🎭', ex: 'A fancy dress party' },
          { en: 'New Year', zh: '新年', emoji: '🎊', ex: 'Happy Chinese New Year' }
        ],
        sentences: [
          // === Story time: Happy Chinese New Year ===
          { en: 'Hi Su Hai! Happy Chinese New Year!', zh: '嗨苏海！春节快乐！' },
          { en: 'Your red dress is beautiful.', zh: '你的红连衣裙真漂亮。' },
          { en: "This is my father's new shirt. And this is my mother's coat.", zh: '这是我爸爸的新衬衫，这是我妈妈的外套。' },
          { en: 'Whose skirt is this? Is it Su Yang’s? — Yes, you’re right.', zh: '这是谁的短裙？是苏阳的吗？——对，你说得对。' },
          { en: 'Whose caps are those? — They’re Kitty’s!', zh: '那些是谁的帽子？——是凯蒂的！' },
          // === Cartoon time: A fancy dress party ===
          { en: 'You look cool in the cap.', zh: '你戴这顶帽子真酷。' },
          { en: 'Your trousers are so big.', zh: '你的裤子好大。' },
          { en: 'Whose cap is it? — It’s my father’s.', zh: '这是谁的帽子？——是我爸爸的。' },
          { en: 'Whose trousers are these? — They’re my mother’s.', zh: '这是谁的裤子？——是我妈妈的。' },
          { en: 'Happy New Year, Mrs Fox. I like your sunglasses!', zh: '新年快乐，福克斯老师！我喜欢你的太阳镜！' },
          { en: 'Why do I wear sunglasses today? Because my students are very bright!', zh: '我今天为什么戴太阳镜？因为我的学生们太“亮”了！' }
        ]
      }
    ]
  },

      {
    id: '4b',
    name: '四年级下册',
    edition: '译林版 · 新教材（2026春）',
    ready: true,
    units: [
      {
        title: "Unit 1 We're friends",
        words: [
          { en: "weak", zh: "弱的", emoji: "😔", ex: "The lion is not weak." },
          { en: "strong", zh: "强壮的", emoji: "💪", ex: "The lion is strong." },
          { en: "there are", zh: "有（复数）", emoji: "📦", ex: "There are many animals." },
          { en: "them", zh: "他（她、它）们（宾格）", emoji: "👥", ex: "I want to share them." },
          { en: "from", zh: "来自", emoji: "🌍", ex: "I am from China." },
          { en: "party", zh: "聚会", emoji: "🎉", ex: "Let's have a party." },
          { en: "like", zh: "喜欢", emoji: "❤️", ex: "I like my friends." },
          { en: "friendship", zh: "友谊", emoji: "🤝", ex: "Friendship is important." },
          { en: "forest", zh: "森林", emoji: "🌲", ex: "The forest is big." },
          { en: "thin", zh: "瘦的", emoji: "🐭", ex: "The mouse is thin." },
          { en: "back", zh: "背部；回来", emoji: "🔙", ex: "Go back home." },
          { en: "angry", zh: "生气的", emoji: "😠", ex: "The lion is angry." },
          { en: "one day", zh: "有一天", emoji: "📆", ex: "One day, a mouse meets a lion." },
          { en: "Please!", zh: "请！", emoji: "🙏" },
          { en: "Go away!", zh: "走开！", emoji: "🚶" },
          { en: "net", zh: "网", emoji: "🕸️", ex: "The lion is in a net." },
          { en: "sad", zh: "伤心的", emoji: "😢", ex: "The mouse is sad." },
          { en: "Help!", zh: "救命！", emoji: "🆘" },
          { en: "there is", zh: "有（单数）", emoji: "📦", ex: "There is a lion." },
          { en: "hole", zh: "洞", emoji: "🕳️", ex: "There is a hole." },
          { en: "kind", zh: "善良的", emoji: "🌟", ex: "The mouse is kind." },
          { en: "become", zh: "变成", emoji: "🔄", ex: "They become friends." }
        ],
        sentences: [
          // === Story time: The lion and the mouse ===
          { en: "There are many animals in the forest.", zh: "森林里有许多动物。" },
          { en: "The lion is big and strong.", zh: "狮子又大又强壮。" },
          { en: "The mouse is small and thin.", zh: "老鼠又小又瘦。" },
          { en: "The lion is angry with the mouse.", zh: "狮子对老鼠很生气。" },
          { en: "Please! Don't eat me. I can help you one day.", zh: "请！别吃我。有一天我能帮到你。" },
          { en: "One day, the lion is in a net. He is sad.", zh: "有一天，狮子被困在网里。他很伤心。" },
          { en: "The mouse comes and bites the net.", zh: "老鼠来了，咬破了网。" },
          { en: "The lion and the mouse become good friends.", zh: "狮子和老鼠成了好朋友。" },
          // === Cartoon time: Thank you for the carrots ===
          { en: "There are so many carrots.", zh: "有这么多胡萝卜。" },
          { en: "I want to share them with my friends.", zh: "我想和朋友们分享它们。" },
          { en: "Thank you for the carrots.", zh: "谢谢你的胡萝卜。" }
        ]
      },
      {
        title: "Unit 2 Helping others at school",
        words: [
          { en: "other", zh: "其他的", emoji: "👥", ex: "Help other people." },
          { en: "room", zh: "房间；室", emoji: "🚪", ex: "This is our reading room." },
          { en: "computer", zh: "电脑", emoji: "💻", ex: "I use a computer." },
          { en: "swing", zh: "秋千", emoji: "🪀", ex: "There is a swing." },
          { en: "playground", zh: "操场", emoji: "🛝", ex: "We play on the playground." },
          { en: "have a look", zh: "看一看", emoji: "👀", ex: "Let me have a look." },
          { en: "careful", zh: "小心的", emoji: "⚠️", ex: "Be careful!" },
          { en: "feel", zh: "感觉", emoji: "😌", ex: "I feel happy." },
          { en: "take", zh: "拿；带", emoji: "👜", ex: "Take your book." },
          { en: "first", zh: "第一；首先", emoji: "1️⃣", ex: "First, open the book." },
          { en: "floor", zh: "楼层；地板", emoji: "🧱", ex: "We are on the second floor." },
          { en: "show … around", zh: "带领……参观", emoji: "🗺️", ex: "Show me around." },
          { en: "any", zh: "任何的", emoji: "🔍", ex: "Is there any water?" },
          { en: "third", zh: "第三", emoji: "3️⃣", ex: "We are on the third floor." },
          { en: "later", zh: "后来；稍后", emoji: "⏭️", ex: "See you later." },
          { en: "piano", zh: "钢琴", emoji: "🎹", ex: "I can play the piano." },
          { en: "second", zh: "第二", emoji: "2️⃣", ex: "We are on the second floor." }
        ],
        sentences: [
          // === Story time: Let me show you around ===
          { en: "Here's your book.", zh: "这是你的书。" },
          { en: "I want to take these books to the library.", zh: "我想把这些书带到图书馆。" },
          { en: "Our classrooms are here on the second floor.", zh: "我们的教室在二楼这里。" },
          { en: "Thank you for showing me around.", zh: "谢谢你带我参观。" },
          { en: "You're welcome.", zh: "不客气。" },
          // === Cartoon time: Are you OK? ===
          { en: "Sam, is there a swing in our new playground?", zh: "萨姆，我们新操场有秋千吗？" },
          { en: "Yes, there is.", zh: "是的，有。" },
          { en: "Be careful, Bobby. Are you OK?", zh: "小心，波比。你还好吗？" },
          { en: "Yes, but I feel dizzy.", zh: "还好，但我感到头晕。" }
        ]
      },
      {
        title: "Unit 3 Road safety",
        words: [
          { en: "road", zh: "马路；道路", emoji: "🛣️", ex: "Look at the road." },
          { en: "safety", zh: "安全", emoji: "🛡️", ex: "Road safety is important." },
          { en: "bus", zh: "公共汽车", emoji: "🚌", ex: "We take a bus." },
          { en: "traffic light", zh: "红绿灯", emoji: "🚦", ex: "The traffic light is red." },
          { en: "take", zh: "乘坐；带", emoji: "🚌", ex: "Take a bus." },
          { en:  "busy", zh: "繁忙的", emoji: "🏃", ex: "The road is busy." },
          { en: "stay", zh: "停留；待", emoji: "🛑", ex: "Stay close." },
          { en: "close", zh: "靠近", emoji: "🤝", ex: "Stay close to me." },
          { en: "cross", zh: "穿过", emoji: "⚠️", ex: "Cross the road." },
          { en: "stop", zh: "停止", emoji: "🛑", ex: "Stop! The light is red." },
          { en: "wait", zh: "等待", emoji: "⏳", ex: "Wait for the green light." },
          { en: "left", zh: "左边", emoji: "👈", ex: "Look left." },
          { en: "right", zh: "右边", emoji: "👉", ex: "Turn right." },
          { en: "safe", zh: "安全的", emoji: "✅", ex: "It is safe now." }
        ],
        sentences: [
          // === Story time: Crossing the road ===
          { en: "Mum, let's cross the road.", zh: "妈妈，我们过马路吧。" },
          { en: "Stop, Haohao! The traffic lights are red.", zh: "停，浩浩！红绿灯是红的。" },
          { en: "Wait. Look left and right first.", zh: "等等。先看左看右。" },
          { en: "It's safe now.", zh: "现在安全了。" },
          { en: "Haohao, don't run on the road! It's not safe.", zh: "浩浩，别在马路上跑！这不安全。" },
          // === Cartoon time: On the road ===
          { en: "Let's go to Aunt Alice's home.", zh: "我们去爱丽丝阿姨家吧。" },
          { en: "Great idea! We can take a bus.", zh: "好主意！我们可以坐公交。" },
          { en: "The traffic lights are red now. We can't go.", zh: "红绿灯现在红了，我们不能走。" },
          { en: "Stay close! Don't run!", zh: "靠近点！别跑！" },
          { en: "Good little ducks.", zh: "乖小鸭子。" }
        ]
      },
      {
        title: "Unit 4 Caring about others",
        words: [
          { en: "care about", zh: "关心", emoji: "💗", ex: "We care about our friends." },
          { en: "hungry", zh: "饿的", emoji: "🍽️", ex: "I am hungry." },
          { en: "thirsty", zh: "渴的", emoji: "🥤", ex: "I am thirsty." },
          { en: "ill", zh: "生病的", emoji: "🤒", ex: "My mum is ill." },
          { en: "tired", zh: "累的", emoji: "😴", ex: "I am tired." },
          { en: "hot", zh: "热的", emoji: "🥵", ex: "I am hot." },
          { en: "water", zh: "水", emoji: "💧", ex: "Have some water." },
          { en: "have a rest", zh: "休息一下", emoji: "😌", ex: "Let's have a rest." },
          { en: "What's the matter?", zh: "怎么了？", emoji: "❓" },
          { en: "home", zh: "家", emoji: "🏠", ex: "I am home." },
          { en: "bag", zh: "包", emoji: "👜", ex: "Take your bag." },
          { en: "bread", zh: "面包", emoji: "🍞", ex: "I want some bread." },
          { en: "dear", zh: "亲爱的", emoji: "💕", ex: "Good night, dear." },
          { en: "set the table", zh: "摆餐具", emoji: "🍴", ex: "Set the table, please." }
        ],
        sentences: [
          // === Story time: What's the matter, Mum? ===
          { en: "Hi, I'm home! Let me take your coat.", zh: "嗨，我回来了！让我帮你拿外套。" },
          { en: "I can take your bag, Mum.", zh: "妈妈，我可以帮你拿包。" },
          { en: "Here's some water. Thank you, dear.", zh: "给你些水。谢谢，亲爱的。" },
          { en: "It's six thirty. It's time for dinner!", zh: "六点半了。该吃晚饭了！" },
          { en: "Let's set the table, Su Hai.", zh: "苏海，我们把餐具摆好吧。" },
          // === Cartoon time: I'm hot and thirsty, Bobby ===
          { en: "Here's some water for you, Tom.", zh: "汤姆，这是给你的水。" },
          { en: "Have a cake, Tom.", zh: "汤姆，吃块蛋糕。" },
          { en: "Let's have a rest.", zh: "我们休息一下吧。" },
          { en: "No, I want to play! I'm tired.", zh: "不，我想玩！我累了。" }
        ]
      },
      {
        title: "Unit 5 Eating out",
        words: [
          { en: "eat out", zh: "外出就餐", emoji: "🍴", ex: "Let's eat out." },
          { en: "fried rice", zh: "炒饭", emoji: "🍚", ex: "I like fried rice." },
          { en: "spring roll", zh: "春卷", emoji: "🥟", ex: "Spring rolls are nice." },
          { en: "noodle", zh: "面条", emoji: "🍜", ex: "I'd like noodles." },
          { en: "tea", zh: "茶", emoji: "🍵", ex: "A cup of tea." },
          { en: "juice", zh: "果汁", emoji: "🧃", ex: "Orange juice, please." },
          { en: "menu", zh: "菜单", emoji: "📋", ex: "Here is the menu." },
          { en: "What would you like?", zh: "你想要什么？", emoji: "❓" },
          { en: "fish and chips", zh: "炸鱼薯条", emoji: "🐟", ex: "I'd like fish and chips." },
          { en: "sandwich", zh: "三明治", emoji: "🥪", ex: "A sandwich, please." },
          { en: "hot dog", zh: "热狗", emoji: "🌭", ex: "A hot dog, please." },
          { en: "delicious", zh: "美味的", emoji: "😋", ex: "It is delicious." },
          { en: "Anything else?", zh: "还要别的吗？", emoji: "❓" },
          { en: "a glass of", zh: "一杯……", emoji: "🥛", ex: "A glass of juice." },
          { en: "a cup of", zh: "一杯……", emoji: "☕", ex: "A cup of tea." },
          { en: "food", zh: "食物", emoji: "🍱", ex: "Chinese food is great." },
          { en: "next time", zh: "下次", emoji: "⏭️", ex: "Next time, hot pot." },
          { en: "hot pot", zh: "火锅", emoji: "🍲", ex: "Let's try hot pot." },
          { en: "takeaway box", zh: "打包盒", emoji: "🥡", ex: "A takeaway box, please." }
        ],
        sentences: [
          // === Story time: In a Chinese restaurant ===
          { en: "What would you like, boys?", zh: "孩子们，你们想要什么？" },
          { en: "I'd like some jiaozi and noodles.", zh: "我想要些饺子和面条。" },
          { en: "We'd like noodles, jiaozi, fried rice and spring rolls, please.", zh: "我们想要面条、饺子、炒饭和春卷。" },
          { en: "Two glasses of orange juice and a cup of tea.", zh: "两杯橙汁和一杯茶。" },
          { en: "I love Chinese food!", zh: "我爱中国菜！" },
          { en: "Next time, let's try hot pot.", zh: "下次，我们尝尝火锅吧。" },
          // === Cartoon time: A hot dog? ===
          { en: "I'm hungry. Me too.", zh: "我饿了。我也是。" },
          { en: "Let's eat there.", zh: "我们在那儿吃吧。" },
          { en: "Here's our menu. What would you like?", zh: "这是我们的菜单。你想要什么？" },
          { en: "I'd like some fish and chips, please.", zh: "我想要炸鱼薯条。" },
          { en: "It's delicious!", zh: "真美味！" }
        ]
      },
      {
        title: "Unit 6 Jobs",
        words: [
          { en: "job", zh: "工作；职业", emoji: "💼", ex: "What is your job?" },
          { en: "driver", zh: "司机", emoji: "🚗", ex: "My dad is a driver." },
          { en: "nurse", zh: "护士", emoji: "🩺", ex: "A nurse helps people." },
          { en: "worker", zh: "工人", emoji: "👷", ex: "He is a worker." },
          { en: "teacher", zh: "老师", emoji: "👩‍🏫", ex: "My mum is a teacher." },
          { en: "doctor", zh: "医生", emoji: "🩺", ex: "A doctor helps sick people." },
          { en: "farmer", zh: "农民", emoji: "👨‍🌾", ex: "A farmer works on a farm." },
          { en: "cook", zh: "厨师", emoji: "👨‍🍳", ex: "The cook is great." },
          { en: "police officer", zh: "警察", emoji: "👮", ex: "A police officer keeps us safe." },
          { en: "hospital", zh: "医院", emoji: "🏥", ex: "My mum works in a hospital." },
          { en: "parent", zh: "父；母；家长", emoji: "👪", ex: "Our parents work hard." },
          { en: "work", zh: "工作", emoji: "💼", ex: "They work every day." },
          { en: "sick", zh: "生病的", emoji: "🤒", ex: "Doctors help sick people." },
          { en: "people", zh: "人；人们", emoji: "👥", ex: "Help sick people." },
          { en: "busy", zh: "忙碌的", emoji: "🏃", ex: "My mum is busy." },
          { en: "taxi", zh: "出租车", emoji: "🚕", ex: "A taxi driver drives a taxi." },
          { en: "train", zh: "火车", emoji: "🚂", ex: "The train is long." },
          { en: "place", zh: "地方", emoji: "📍", ex: "This is a nice place." },
          { en: "way", zh: "路；方式", emoji: "🛣️", ex: "On the way home." }
        ],
        sentences: [
          // === Story time: Happy Labour Day! ===
          { en: "What are your parents' jobs, Liu Tao?", zh: "刘涛，你父母是做什么工作的？" },
          { en: "My father is a taxi driver.", zh: "我爸爸是出租车司机。" },
          { en: "He's a doctor. Doctors help sick people.", zh: "他是医生。医生帮助病人。" },
          { en: "He's a police officer. Police officers keep us safe.", zh: "他是警察。警察保护我们的安全。" },
          { en: "She's a teacher. Teachers help children learn new things.", zh: "她是老师。老师帮助孩子们学习新事物。" },
          { en: "Our parents have great jobs.", zh: "我们的父母都有很棒的工作。" },
          // === Cartoon time: Our parents' jobs ===
          { en: "Look at the hospital, Henry! My parents work there.", zh: "亨利，看那家医院！我父母在那儿工作。" },
          { en: "My dad is a train driver.", zh: "我爸爸是火车司机。" },
          { en: "Look! Wow! That's cool!", zh: "看！哇！太酷了！" }
        ]
      },
      {
        title: "Unit 7 Doing chores at home",
        words: [
          { en: "chore", zh: "家务", emoji: "🧹", ex: "Do some chores." },
          { en: "dish", zh: "盘子", emoji: "🍽️", ex: "Wash the dishes." },
          { en: "water", zh: "浇水", emoji: "💧", ex: "Water the flowers." },
          { en: "make the bed", zh: "整理床铺", emoji: "🛏️", ex: "Make your bed." },
          { en: "what", zh: "什么", emoji: "❓", ex: "What are you doing?" },
          { en: "house", zh: "房子", emoji: "🏠", ex: "Our house is clean." },
          { en: "Good job!", zh: "干得好！", emoji: "👍" },
          { en: "part of", zh: "一部分", emoji: "🧩", ex: "We are part of the family." },
          { en: "so", zh: "如此；这么", emoji: "🌟", ex: "You are so kind." },
          { en: "half", zh: "一半", emoji: "⏳", ex: "Half past eight." },
          { en: "past", zh: "晚于；过去", emoji: "⏰", ex: "Half past six." },
          { en: "weekend", zh: "周末", emoji: "📅", ex: "We are busy on the weekend." }
        ],
        sentences: [
          // === Story time: A busy weekend ===
          { en: "It's Saturday. Mum and Dad are doing chores.", zh: "星期六。爸爸妈妈在做家务。" },
          { en: "Su Yang and I are also doing chores.", zh: "苏阳和我也做家务。" },
          { en: "We're part of the family.", zh: "我们是家里的一份子。" },
          { en: "Our home is clean and nice now.", zh: "我们的家现在干净又漂亮。" },
          { en: "We have a busy weekend, but we all feel happy.", zh: "我们过了忙碌的周末，但我们都感到开心。" },
          // === Cartoon time: Good job! ===
          { en: "It's Sunday. Let's do some chores.", zh: "星期日。我们做些家务吧。" },
          { en: "I'm watering the flowers.", zh: "我在浇花。" },
          { en: "You're watering the floor!", zh: "你在浇地板！" },
          { en: "What a clean house! Good job!", zh: "多干净的家！干得好！" }
        ]
      },
      {
        title: "Unit 8 In the kitchen",
        words: [
          { en: "kitchen", zh: "厨房", emoji: "🍳", ex: "I am in the kitchen." },
          { en: "milk", zh: "牛奶", emoji: "🥛", ex: "A glass of milk." },
          { en: "tomato", zh: "西红柿", emoji: "🍅", ex: "I like tomatoes." },
          { en: "potato", zh: "土豆", emoji: "🥔", ex: "I cut the potatoes." },
          { en: "chicken", zh: "鸡肉", emoji: "🍗", ex: "The chicken is delicious." },
          { en: "egg", zh: "蛋", emoji: "🥚", ex: "An egg, please." },
          { en: "birthday", zh: "生日", emoji: "🎂", ex: "Happy birthday!" },
          { en: "soup", zh: "汤", emoji: "🍲", ex: "Fish soup is nice." },
          { en: "him", zh: "他（宾格）", emoji: "👨", ex: "I cook for him." },
          { en: "really", zh: "真的", emoji: "🤔", ex: "Really? Great!" },
          { en: "cut", zh: "切", emoji: "🔪", ex: "Cut the tomatoes." },
          { en: "meat", zh: "肉", emoji: "🥩", ex: "The meat is good." },
          { en: "I can't wait!", zh: "我等不及了！", emoji: "⏰" },
          { en: "get", zh: "得到；拿", emoji: "🤲", ex: "Get some water." }
        ],
        sentences: [
          // === Story time: A happy dinner ===
          { en: "Are you cooking dinner, Mum? Yes, I am.", zh: "妈妈，你在做晚饭吗？是的。" },
          { en: "I'm cutting the potatoes.", zh: "我在切土豆。" },
          { en: "How's the chicken, Taotao? It's delicious, Dad.", zh: "涛涛，鸡肉怎么样？爸爸，很好吃。" },
          { en: "You're a great cook!", zh: "你做饭真棒！" },
          { en: "Have some tomato and egg soup.", zh: "喝点西红柿蛋汤。" },
          // === Cartoon time: Sam's fish soup ===
          { en: "It's Dad's birthday today. I can cook fish soup for him!", zh: "今天是爸爸的生日。我可以为他做鱼汤！" },
          { en: "Sam, are you cooking? Oh, my fish soup!", zh: "萨姆，你在做饭吗？哦，我的鱼汤！" },
          { en: "Happy Birthday, Dad! But be careful next time.", zh: "爸爸，生日快乐！但下次要小心。" }
        ]
      }
    ]
  },

  {
    id: '5a',
    name: '五年级上册',
    edition: '译林版 · 旧版（新教材2026秋启用，届时重新抓取替换）',
    ready: true,
    units: [
      {
        title: 'Unit 1 Goldilocks and the three bears',
        words: [
          { en: 'bear', zh: '熊', emoji: '🐻', ex: 'There are three bears.' },
          { en: 'forest', zh: '森林', emoji: '🌲', ex: 'The house is in the forest.' },
          { en: 'there', zh: '那里', emoji: '📍', ex: 'There is a house.' },
          { en: 'house', zh: '房子', emoji: '🏠', ex: 'What a nice house!' },
          { en: 'soup', zh: '汤', emoji: '🍲', ex: 'This soup is hot.' },
          { en: 'just right', zh: '正合适', emoji: '👌', ex: 'This soup is just right.' },
          { en: 'room', zh: '房间', emoji: '🚪', ex: 'There are three rooms.' },
          { en: 'hard', zh: '硬的', emoji: '🪵', ex: 'The bed is hard.' },
          { en: 'soft', zh: '柔软的', emoji: '🛏️', ex: 'This bed is soft.' },
          { en: 'afraid', zh: '害怕的', emoji: '😱', ex: 'Goldilocks is afraid.' },
          { en: 'in front of', zh: '在……前面', emoji: '↗️', ex: 'There are bears in front of her!' },
          { en: 'her', zh: '她（的）', emoji: '👧', ex: 'Her hair is long.' },
          { en: 'Help!', zh: '救命啊！', emoji: '🆘' },
          { en: 'beside', zh: '在……旁边', emoji: '↔️', ex: 'The chair is beside the bed.' },
          { en: 'between', zh: '在……中间', emoji: '⬅️➡️', ex: 'The ball is between the boxes.' },
          { en: 'China', zh: '中国', emoji: '🇨🇳', ex: 'I am from China.' },
          { en: 'really', zh: '真的', emoji: '❗', ex: 'Really?' },
          { en: 'then', zh: '然后', emoji: '➡️', ex: 'Then, she is in the room.' },
          { en: 'find', zh: '找到', emoji: '🔍', ex: 'She finds three beds.' },
          { en: 'their', zh: '他们的', emoji: '👥', ex: 'Their house is nice.' }
        ],
        sentences: [
          { en: 'There is a house in the forest.', zh: '森林里有一座房子。' },
          { en: 'This soup is just right.', zh: '这碗汤正合适。' },
          { en: 'This bed is too soft.', zh: '这张床太软了。' },
          { en: 'Goldilocks is afraid. Help! Help!', zh: '金发姑娘很害怕。救命！救命！' }
        ]
      },
      {
        title: 'Unit 2 A new student',
        words: [
          { en: 'student', zh: '学生', emoji: '🧑‍🎓', ex: 'She is a new student.' },
          { en: 'show ... around', zh: '带……参观', emoji: '🗺️', ex: 'Can you show her around?' },
          { en: 'classroom', zh: '教室', emoji: '🏫', ex: 'These are the classrooms.' },
          { en: 'second', zh: '第二的', emoji: '2️⃣', ex: 'It is on the second floor.' },
          { en: 'floor', zh: '楼层；地板', emoji: '🪜', ex: 'The computer room is on the third floor.' },
          { en: 'computer', zh: '电脑', emoji: '💻', ex: 'There are many computers.' },
          { en: 'third', zh: '第三的', emoji: '3️⃣', ex: 'My classroom is on the third floor.' },
          { en: 'first', zh: '第一', emoji: '1️⃣', ex: 'Our classroom is on the first floor.' },
          { en: 'swing', zh: '秋千', emoji: '🎠', ex: 'There are two swings.' },
          { en: 'push', zh: '推', emoji: '🙌', ex: 'Push me!' },
          { en: 'heavy', zh: '重的', emoji: '🏋️', ex: 'It is too heavy.' },
          { en: 'stop', zh: '停止', emoji: '✋', ex: 'Stop! It is too high.' },
          { en: 'high', zh: '高的', emoji: '📏', ex: 'The swing is high.' },
          { en: 'great', zh: '极好的', emoji: '👍', ex: 'Great! Let us go.' }
        ],
        sentences: [
          { en: 'Can you show her around?', zh: '你能带她参观一下吗？' },
          { en: 'How many classrooms are there?', zh: '有多少间教室？' },
          { en: 'The computer room is on the third floor.', zh: '电脑教室在三楼。' },
          { en: 'Push me! It is fun!', zh: '推推我！真好玩！' }
        ]
      },
      {
        title: 'Unit 3 Our animal friends',
        words: [
          { en: 'one ... the other ...', zh: '一个……另一个……', emoji: '🔀' },
          { en: 'body', zh: '身体', emoji: '🧍', ex: 'It has a small body.' },
          { en: 'no', zh: '没有', emoji: '❌', ex: 'It has no legs.' },
          { en: 'leg', zh: '腿', emoji: '🦵', ex: 'It has four legs.' },
          { en: 'or', zh: '也不', emoji: '➕', ex: 'It has no legs or arms.' },
          { en: 'arm', zh: '手臂', emoji: '💪', ex: 'It has two arms.' },
          { en: 'wing', zh: '翅膀', emoji: '🪽', ex: 'It has two wings.' },
          { en: 'foot', zh: '脚（复数 feet）', emoji: '🦶', ex: 'It has two feet.' },
          { en: 'rabbit', zh: '兔子', emoji: '🐰', ex: 'The rabbit has red eyes.' },
          { en: 'give', zh: '给', emoji: '🤲', ex: 'Give it a cake.' },
          { en: 'finger', zh: '手指', emoji: '👆', ex: 'It has ten fingers.' }
        ],
        sentences: [
          { en: 'I have an animal friend.', zh: '我有一个动物朋友。' },
          { en: 'It has a big body and four legs.', zh: '它有大大的身体和四条腿。' },
          { en: 'It has no legs, but it can swim.', zh: '它没有腿，但会游泳。' },
          { en: 'One is red and the other is white.', zh: '一只是红的，另一只是白的。' }
        ]
      },
      {
        title: 'Unit 4 Hobbies',
        words: [
          { en: 'hobby', zh: '爱好', emoji: '⭐', ex: 'What is your hobby?' },
          { en: 'be good at', zh: '擅长', emoji: '🏆', ex: 'She is good at dancing.' },
          { en: 'with', zh: '和……一起', emoji: '👫', ex: 'I play with my friends.' },
          { en: 'also', zh: '也', emoji: '➕', ex: 'I also like singing.' },
          { en: 'read', zh: '读；看', emoji: '📖', ex: 'I like reading stories.' },
          { en: 'story', zh: '故事', emoji: '📚', ex: 'This story is interesting.' },
          { en: 'a lot of', zh: '许多', emoji: '👥', ex: 'I have a lot of books.' },
          { en: 'play the piano', zh: '弹钢琴', emoji: '🎹', ex: 'I like playing the piano.' },
          { en: 'dance', zh: '跳舞', emoji: '💃', ex: 'She likes dancing.' },
          { en: 'watch films', zh: '看电影', emoji: '🎬', ex: 'We like watching films.' },
          { en: 'both', zh: '两个都', emoji: '👯', ex: 'We both like swimming.' },
          { en: 'sing', zh: '唱歌', emoji: '🎤', ex: 'He likes singing.' },
          { en: 'group', zh: '组；群', emoji: '👥', ex: 'They sing in a group.' },
          { en: 'about', zh: '关于', emoji: '💭', ex: 'A story about a fox.' },
          { en: 'idea', zh: '主意', emoji: '💡', ex: 'Good idea!' },
          { en: 'ice', zh: '冰', emoji: '🧊', ex: 'The ice is hard.' },
          { en: 'hole', zh: '洞', emoji: '🕳️', ex: 'There is a hole in the ice.' },
          { en: 'Look out!', zh: '当心！', emoji: '⚠️' },
          { en: 'wet', zh: '湿的', emoji: '💧', ex: 'The ice is wet.' }
        ],
        sentences: [
          { en: 'I like playing the piano.', zh: '我喜欢弹钢琴。' },
          { en: 'She is good at dancing.', zh: '她擅长跳舞。' },
          { en: 'We both like watching films.', zh: '我们都喜欢看电影。' },
          { en: 'Look out! The ice is wet!', zh: '当心！冰是湿的！' }
        ]
      },
      {
        title: 'Unit 5 What do they do?',
        words: [
          { en: 'teacher', zh: '老师', emoji: '👩‍🏫', ex: 'My mother is a teacher.' },
          { en: 'teach', zh: '教', emoji: '📕', ex: 'She teaches English.' },
          { en: 'writer', zh: '作家', emoji: '✍️', ex: 'He is a writer.' },
          { en: 'write', zh: '写', emoji: '🖋️', ex: 'He writes stories.' },
          { en: 'work', zh: '工作', emoji: '💼', ex: 'She works at home.' },
          { en: 'at home', zh: '在家', emoji: '🏠', ex: 'He works at home.' },
          { en: 'doctor', zh: '医生', emoji: '👨‍⚕️', ex: 'My father is a doctor.' },
          { en: 'help', zh: '帮助', emoji: '🤝', ex: 'He helps sick people.' },
          { en: 'sick', zh: '生病的', emoji: '🤒', ex: 'He helps sick people.' },
          { en: 'people', zh: '人们', emoji: '👥', ex: 'There are many people.' },
          { en: 'factory', zh: '工厂', emoji: '🏭', ex: 'She works in a factory.' },
          { en: 'worker', zh: '工人', emoji: '👷', ex: 'He is a worker.' },
          { en: 'cook', zh: '厨师；做饭', emoji: '👨‍🍳', ex: 'He is a good cook.' },
          { en: 'driver', zh: '司机', emoji: '🚗', ex: 'He is a bus driver.' },
          { en: 'farmer', zh: '农民', emoji: '👨‍🌾', ex: 'The farmer has a farm.' },
          { en: 'nurse', zh: '护士', emoji: '👩‍⚕️', ex: 'She is a nurse.' },
          { en: 'policeman', zh: '警察', emoji: '👮', ex: 'He is a policeman.' }
        ],
        sentences: [
          { en: 'What does your father do?', zh: '你爸爸是做什么的？' },
          { en: 'He is a teacher. He teaches Maths.', zh: '他是老师，教数学。' },
          { en: 'My mother is a doctor.', zh: '我妈妈是医生。' },
          { en: 'She helps sick people.', zh: '她帮助生病的人。' }
        ]
      },
      {
        title: 'Unit 6 My e-friend',
        words: [
          { en: 'e-friend', zh: '网友', emoji: '💻', ex: 'I have an e-friend.' },
          { en: 'Wait a minute.', zh: '等一会儿。', emoji: '⏳' },
          { en: 'send', zh: '发送', emoji: '📤', ex: 'Send me an email.' },
          { en: 'email', zh: '电子邮件', emoji: '📧', ex: 'I write emails to him.' },
          { en: 'to', zh: '给', emoji: '➡️' },
          { en: 'live', zh: '居住', emoji: '🏠', ex: 'He lives in Canada.' },
          { en: 'UK', zh: '英国', emoji: '🇬🇧', ex: 'She lives in the UK.' },
          { en: 'years old', zh: '……岁', emoji: '🎂', ex: 'He is eleven years old.' },
          { en: 'study', zh: '学习', emoji: '📖', ex: 'He studies Chinese.' },
          { en: 'Canada', zh: '加拿大', emoji: '🇨🇦', ex: 'Canada is a big country.' },
          { en: 'Greece', zh: '希腊', emoji: '🇬🇷' },
          { en: 'Russia', zh: '俄罗斯', emoji: '🇷🇺' },
          { en: 'PRC', zh: '中国', emoji: '🇨🇳' },
          { en: 'US', zh: '美国', emoji: '🇺🇸' },
          { en: 'go fishing', zh: '去钓鱼', emoji: '🎣', ex: 'We go fishing at weekends.' },
          { en: 'tomorrow', zh: '明天', emoji: '📅', ex: 'I will go tomorrow.' },
          { en: "Don't worry.", zh: '别担心。', emoji: '😌' },
          { en: 'sit', zh: '坐', emoji: '🪑', ex: 'Sit by the river.' },
          { en: 'by', zh: '在……旁边', emoji: '📍', ex: 'Sit by me.' },
          { en: 'wait', zh: '等待', emoji: '⏳', ex: 'Wait for me.' }
        ],
        sentences: [
          { en: 'I have an e-friend in the UK.', zh: '我有一个英国网友。' },
          { en: 'He lives in Canada.', zh: '他住在加拿大。' },
          { en: 'He likes playing football and swimming.', zh: '他喜欢踢足球和游泳。' },
          { en: "Don't worry. I can help you.", zh: '别担心，我能帮你。' }
        ]
      },
      {
        title: 'Unit 7 At weekends',
        words: [
          { en: 'at weekends', zh: '在周末', emoji: '🗓️', ex: 'What do you do at weekends?' },
          { en: 'visit', zh: '拜访；参观', emoji: '🚪', ex: 'I visit my grandparents.' },
          { en: 'grandparent', zh: '祖父母；外祖父母', emoji: '👴👵', ex: 'I visit my grandparents.' },
          { en: 'play with', zh: '和……玩', emoji: '🤾', ex: 'I play with my cat.' },
          { en: 'very much', zh: '非常', emoji: '❤️', ex: 'I like it very much.' },
          { en: 'often', zh: '经常', emoji: '🔁', ex: 'I often read books.' },
          { en: 'chat', zh: '聊天', emoji: '💬', ex: 'We chat on the Internet.' },
          { en: 'Internet', zh: '互联网', emoji: '🌐', ex: 'I surf the Internet.' },
          { en: 'always', zh: '总是', emoji: '♾️', ex: 'She always gets up early.' },
          { en: 'sometimes', zh: '有时', emoji: '🎲', ex: 'Sometimes I go to the cinema.' },
          { en: 'go to the cinema', zh: '去看电影', emoji: '🎬', ex: 'We go to the cinema.' },
          { en: 'there', zh: '那里', emoji: '📍', ex: 'Let us go there.' },
          { en: 'a lot', zh: '很多', emoji: '💯', ex: 'I like it a lot.' },
          { en: 'come out', zh: '出来', emoji: '🚶', ex: 'The sun comes out.' },
          { en: 'get out', zh: '走开', emoji: '👋', ex: 'Get out!' }
        ],
        sentences: [
          { en: 'What do you do at weekends?', zh: '你周末做什么？' },
          { en: 'I often visit my grandparents.', zh: '我经常看望祖父母。' },
          { en: 'Sometimes I go to the cinema.', zh: '我有时去看电影。' },
          { en: 'She always chats with her friends.', zh: '她总是和朋友聊天。' }
        ]
      },
      {
        title: 'Unit 8 Christmas',
        words: [
          { en: 'Christmas', zh: '圣诞节', emoji: '🎄', ex: 'Christmas is coming.' },
          { en: 'buy', zh: '买', emoji: '💰', ex: 'We buy presents.' },
          { en: 'present', zh: '礼物', emoji: '🎁', ex: 'Here is a present for you.' },
          { en: 'Christmas tree', zh: '圣诞树', emoji: '🎄', ex: 'What a big Christmas tree!' },
          { en: 'Father Christmas', zh: '圣诞老人', emoji: '🎅', ex: 'Father Christmas is here.' },
          { en: 'next', zh: '下一个', emoji: '➡️', ex: 'Next, we sing songs.' },
          { en: 'put', zh: '放', emoji: '📥', ex: 'We put presents under the tree.' },
          { en: 'pretty', zh: '漂亮的', emoji: '✨', ex: 'She looks pretty.' },
          { en: 'thing', zh: '东西', emoji: '📦', ex: 'What pretty things!' },
          { en: 'look', zh: '看上去', emoji: '👀', ex: 'You look happy.' },
          { en: 'Christmas Eve', zh: '平安夜', emoji: '🌃', ex: 'It is Christmas Eve.' },
          { en: 'stocking', zh: '长筒袜', emoji: '🧦', ex: 'Put a stocking on the bed.' },
          { en: 'wait for', zh: '等待', emoji: '⏳', ex: 'We wait for Father Christmas.' },
          { en: 'finally', zh: '最后', emoji: '🏁', ex: 'Finally, we eat the turkey.' },
          { en: 'Christmas Day', zh: '圣诞节当天', emoji: '🎅', ex: 'Christmas Day is fun.' },
          { en: 'early', zh: '早的', emoji: '🌅', ex: 'We get up early.' },
          { en: 'turkey', zh: '火鸡', emoji: '🦃', ex: 'We eat turkey.' },
          { en: 'pudding', zh: '布丁', emoji: '🍮', ex: 'The pudding is sweet.' },
          { en: 'all', zh: '全部', emoji: '💯', ex: 'We all sing together.' },
          { en: 'have a good time', zh: '过得愉快', emoji: '🎉' },
          { en: 'card', zh: '贺卡', emoji: '💌', ex: 'I make a Christmas card.' },
          { en: 'children', zh: '孩子们（child 复数）', emoji: '🧒🧒', ex: 'The children are happy.' },
          { en: 'message', zh: '消息', emoji: '✉️', ex: 'Here is a message for you.' },
          { en: 'Merry Christmas!', zh: '圣诞快乐！', emoji: '🎄' },
          { en: 'song', zh: '歌曲', emoji: '🎵', ex: 'We sing Christmas songs.' },
          { en: "What's wrong with ...?", zh: '……怎么了？', emoji: '❓' },
          { en: 'him', zh: '他（宾格）', emoji: '👦', ex: 'We wait for him.' },
          { en: 'us', zh: '我们（宾格）', emoji: '👥', ex: 'They help us.' },
          { en: 'letter', zh: '信', emoji: '📬', ex: 'I write a letter.' },
          { en: 'storybook', zh: '故事书', emoji: '📖', ex: 'I read storybooks.' },
          { en: 'after', zh: '在……之后', emoji: '⏭️', ex: 'After dinner, we sing.' }
        ],
        sentences: [
          { en: 'Christmas is coming. We are very happy.', zh: '圣诞节要到了，我们很开心。' },
          { en: 'First, we buy presents.', zh: '首先，我们买礼物。' },
          { en: 'We put pretty things on the Christmas tree.', zh: '我们把漂亮的饰品挂上圣诞树。' },
          { en: 'Merry Christmas!', zh: '圣诞快乐！' }
        ]
      }
    ]
  },

  {
    id: '5b',
    name: '五年级下册',
    edition: '译林版 · 旧版（新教材启用后重新抓取替换）',
    ready: true,
    units: [
      {
        title: 'Unit 1 Cinderella',
        words: [
          { en: 'prince', zh: '王子', emoji: '🤴', ex: 'The prince has a party.' },
          { en: 'fairy', zh: '仙女', emoji: '🧚', ex: 'The fairy helps Cinderella.' },
          { en: 'why', zh: '为什么', emoji: '❓', ex: 'Why are you sad?' },
          { en: 'because', zh: '因为', emoji: '💡', ex: 'Because I can not go.' },
          { en: 'clothes', zh: '衣服', emoji: '👗', ex: 'She has new clothes.' },
          { en: 'let', zh: '让', emoji: '➡️', ex: 'Let me help you.' },
          { en: 'put on', zh: '穿上', emoji: '🧥', ex: 'Put on your coat.' },
          { en: 'before', zh: '在……之前', emoji: '⏮️', ex: 'Come back before 12.' },
          { en: 'have to', zh: '不得不', emoji: '😖', ex: 'I have to go now.' },
          { en: 'try on', zh: '试穿', emoji: '👗', ex: 'Try on the shoe.' },
          { en: 'fit', zh: '合身', emoji: '👌', ex: 'The shoe fits.' },
          { en: 'take off', zh: '脱下', emoji: '🧦', ex: 'Take off your shoes.' },
          { en: 'mushroom', zh: '蘑菇', emoji: '🍄', ex: 'Some mushrooms are bad.' },
          { en: 'late', zh: '迟的', emoji: '⏰', ex: 'I am late.' },
          { en: 'pick', zh: '采；摘', emoji: '🧺', ex: 'Do not pick them!' },
          { en: 'understand', zh: '明白', emoji: '🤔', ex: 'I understand.' },
          { en: 'be bad for', zh: '对……有害', emoji: '⚠️', ex: 'It is bad for you.' },
          { en: 'leave ... behind', zh: '留下', emoji: '👋', ex: 'She leaves a shoe behind.' }
        ],
        sentences: [
          { en: 'Why are you so sad?', zh: '你为什么这么难过？' },
          { en: 'Because I can not go to the party.', zh: '因为我不能去舞会。' },
          { en: 'Let me help you.', zh: '让我来帮你。' },
          { en: 'I have to go home before twelve.', zh: '我必须十二点前回家。' }
        ]
      },
      {
        title: 'Unit 2 How do you come to school?',
        words: [
          { en: 'far from', zh: '离……远', emoji: '🌏', ex: 'I live far from school.' },
          { en: 'moon', zh: '月亮', emoji: '🌙', ex: 'The moon is round.' },
          { en: 'street', zh: '街道', emoji: '🛣️', ex: 'I live on Moon Street.' },
          { en: 'near', zh: '在……附近', emoji: '📍', ex: 'I live near school.' },
          { en: 'city', zh: '城市', emoji: '🏙️', ex: 'I live in the city.' },
          { en: 'by', zh: '乘（车）', emoji: '🚌', ex: 'I come by bus.' },
          { en: 'bus', zh: '公共汽车', emoji: '🚌', ex: 'The bus is big.' },
          { en: 'on foot', zh: '步行', emoji: '🚶', ex: 'I go on foot.' },
          { en: 'metro', zh: '地铁', emoji: '🚇', ex: 'I go by metro.' },
          { en: 'taxi', zh: '出租车', emoji: '🚕', ex: 'Sometimes by taxi.' },
          { en: 'bike', zh: '自行车', emoji: '🚲', ex: 'I ride a bike.' },
          { en: 'plane', zh: '飞机', emoji: '✈️', ex: 'We go by plane.' },
          { en: 'ship', zh: '轮船', emoji: '🚢', ex: 'The ship is big.' },
          { en: 'train', zh: '火车', emoji: '🚆', ex: 'The train is fast.' },
          { en: 'ride', zh: '骑', emoji: '🚴', ex: 'He rides a bike.' },
          { en: 'show', zh: '给……看', emoji: '👁️', ex: 'Show me your bike.' },
          { en: 'young', zh: '年轻的', emoji: '🧑' },
          { en: 'basket', zh: '篮子', emoji: '🧺', ex: 'There is a basket on the bike.' }
        ],
        sentences: [
          { en: 'How do you come to school?', zh: '你怎么来学校？' },
          { en: 'I come to school by metro.', zh: '我坐地铁来学校。' },
          { en: 'I live near school, so I go on foot.', zh: '我住得近，所以走路上学。' },
          { en: 'My father goes to work by car.', zh: '我爸爸开车上班。' }
        ]
      },
      {
        title: 'Unit 3 Asking the way',
        words: [
          { en: 'ask the way', zh: '问路', emoji: '🗺️' },
          { en: 'get to', zh: '到达', emoji: '🏁', ex: 'How do I get to the zoo?' },
          { en: 'take', zh: '搭乘', emoji: '🚌', ex: 'You can take the bus.' },
          { en: 'get on', zh: '上车', emoji: '⬆️', ex: 'Get on the bus.' },
          { en: 'station', zh: '车站', emoji: '🚉', ex: 'The station is near.' },
          { en: 'get off', zh: '下车', emoji: '⬇️', ex: 'Get off at the third stop.' },
          { en: 'walk', zh: '行走', emoji: '🚶', ex: 'Walk along the street.' },
          { en: 'bookshop', zh: '书店', emoji: '📚', ex: 'The bookshop is big.' },
          { en: 'next to', zh: '紧邻', emoji: '↔️', ex: 'It is next to the park.' },
          { en: 'sun', zh: '太阳', emoji: '☀️', ex: 'The sun is bright.' },
          { en: 'ask ... for help', zh: '向……求助', emoji: '🙋', ex: 'Ask the policeman for help.' },
          { en: 'excuse me', zh: '打扰一下', emoji: '🙇' },
          { en: 'along', zh: '沿着', emoji: '↗️', ex: 'Go along this street.' },
          { en: 'turn right', zh: '向右转', emoji: '➡️' },
          { en: 'traffic light', zh: '红绿灯', emoji: '🚦', ex: 'Turn right at the traffic lights.' },
          { en: 'on your right', zh: '在你的右侧', emoji: '👌' },
          { en: 'cinema', zh: '电影院', emoji: '🎬', ex: 'The cinema is on your right.' },
          { en: 'hospital', zh: '医院', emoji: '🏥', ex: 'The hospital is near.' },
          { en: 'shop', zh: '商店', emoji: '🏪', ex: 'The shop is small.' },
          { en: 'zoo', zh: '动物园', emoji: '🦁', ex: 'How do I get to the zoo?' },
          { en: 'turn left', zh: '向左转', emoji: '⬅️' },
          { en: 'supermarket', zh: '超市', emoji: '🛒', ex: 'The supermarket is big.' },
          { en: 'film', zh: '电影', emoji: '🎞️', ex: 'Let us see a film.' },
          { en: 'stop', zh: '车站', emoji: '🚏', ex: 'Get off at the third stop.' },
          { en: 'full', zh: '满的', emoji: '🈵', ex: 'The bus is full.' },
          { en: 'over', zh: '结束', emoji: '🏁', ex: 'The film is over.' }
        ],
        sentences: [
          { en: 'Excuse me, how do I get to the zoo?', zh: '打扰一下，请问动物园怎么走？' },
          { en: 'Go along this street.', zh: '沿着这条街走。' },
          { en: 'Turn right at the traffic lights.', zh: '在红绿灯处右转。' },
          { en: 'The cinema is on your right.', zh: '电影院就在你的右边。' }
        ]
      },
      {
        title: 'Unit 4 Seeing the doctor',
        words: [
          { en: 'see the doctor', zh: '看病', emoji: '🩺' },
          { en: 'feel', zh: '感觉', emoji: '🤒', ex: 'I feel ill.' },
          { en: 'check', zh: '检查', emoji: '🔍', ex: 'Let me check.' },
          { en: 'should', zh: '应该', emoji: '👉', ex: 'You should have a rest.' },
          { en: 'have a rest', zh: '休息一下', emoji: '😴' },
          { en: 'take medicine', zh: '吃药', emoji: '💊' },
          { en: 'drink water', zh: '喝水', emoji: '💧' },
          { en: 'toothache', zh: '牙疼', emoji: '😬', ex: 'I have a toothache.' },
          { en: 'dentist', zh: '牙医', emoji: '🦷', ex: 'You should see the dentist.' },
          { en: 'anything', zh: '任何东西', emoji: '❓', ex: 'I can not eat anything.' },
          { en: "brush one's teeth", zh: '刷牙', emoji: '🪥' },
          { en: 'bedtime', zh: '就寝时间', emoji: '🛏️', ex: 'Brush teeth before bedtime.' },
          { en: 'giraffe', zh: '长颈鹿', emoji: '🦒', ex: 'The giraffe has a long neck.' },
          { en: 'point at', zh: '指着', emoji: '👉', ex: 'He points at his neck.' },
          { en: 'neck', zh: '脖子', emoji: '🦒', ex: 'My neck hurts.' }
        ],
        sentences: [
          { en: "What's wrong with you? — I have a toothache.", zh: '你怎么了？——我牙疼。' },
          { en: 'You should see the dentist.', zh: '你应该去看牙医。' },
          { en: 'You should brush your teeth before bedtime.', zh: '你应该睡前刷牙。' },
          { en: 'Have a rest and drink some water.', zh: '休息一下，喝点水。' }
        ]
      },
      {
        title: 'Unit 5 Helping our parents',
        words: [
          { en: 'parent', zh: '父/母亲', emoji: '👨‍👩‍👧', ex: 'I help my parents.' },
          { en: 'clean', zh: '打扫', emoji: '🧹', ex: 'I am cleaning the table.' },
          { en: 'cook', zh: '做饭', emoji: '🍳', ex: 'Mum is cooking.' },
          { en: 'sweep the floor', zh: '扫地', emoji: '🧹' },
          { en: 'busy', zh: '忙的', emoji: '😮‍💨', ex: 'My mother is busy.' },
          { en: 'wash the dishes', zh: '洗碗', emoji: '🍽️' },
          { en: 'make the bed', zh: '整理床铺', emoji: '🛏️' },
          { en: 'grow', zh: '种植；生长', emoji: '🌱', ex: 'He grows grapes.' },
          { en: 'garden', zh: '花园', emoji: '🌷', ex: 'The garden is nice.' },
          { en: 'sweet', zh: '甜的', emoji: '🍬', ex: 'The grapes are sweet.' },
          { en: 'pest', zh: '害虫', emoji: '🐛', ex: 'The pests are bad.' },
          { en: 'ladybird', zh: '瓢虫', emoji: '🐞', ex: 'The ladybird is small.' },
          { en: 'go away', zh: '走开', emoji: '👋', ex: 'The pests go away.' }
        ],
        sentences: [
          { en: 'I am helping my mother.', zh: '我在帮妈妈。' },
          { en: 'My father is cooking in the kitchen.', zh: '爸爸在厨房做饭。' },
          { en: "Let's wash the dishes together.", zh: '我们一起洗碗吧。' },
          { en: 'The pests go away! Hooray!', zh: '害虫走了！太好了！' }
        ]
      },
      {
        title: 'Unit 6 In the kitchen',
        words: [
          { en: 'game', zh: '游戏', emoji: '🎮', ex: 'Let us play a game.' },
          { en: 'smell', zh: '闻', emoji: '👃', ex: 'It smells nice.' },
          { en: 'meat', zh: '肉', emoji: '🍖', ex: 'There is some meat.' },
          { en: 'vegetable', zh: '蔬菜', emoji: '🥦', ex: 'I like vegetables.' },
          { en: 'tomato', zh: '西红柿', emoji: '🍅', ex: 'The tomato is red.' },
          { en: 'potato', zh: '土豆', emoji: '🥔', ex: 'I like potatoes.' },
          { en: "I can't wait!", zh: '我等不及了！', emoji: '😋' },
          { en: 'look for', zh: '寻找', emoji: '🔍', ex: 'I am looking for my cup.' },
          { en: 'ready', zh: '准备好的', emoji: '✅', ex: 'Dinner is ready.' },
          { en: 'yummy', zh: '好吃的', emoji: '😍', ex: 'It is yummy!' },
          { en: 'love', zh: '喜爱', emoji: '❤️', ex: 'I love tomato soup.' },
          { en: 'bread', zh: '面包', emoji: '🍞', ex: 'Some bread, please.' },
          { en: 'win', zh: '获胜', emoji: '🏆', ex: 'I win!' },
          { en: 'yeah', zh: '是的；太好了', emoji: '🎉' },
          { en: 'angry', zh: '生气的', emoji: '😠', ex: 'Dad is angry.' },
          { en: 'spot', zh: '斑点', emoji: '🔵', ex: 'It has six spots.' },
          { en: 'catch', zh: '抓住', emoji: '🤏', ex: 'Catch it!' },
          { en: 'drive ... away', zh: '赶走', emoji: '👋', ex: 'They drive the pest away.' }
        ],
        sentences: [
          { en: 'Dinner is ready!', zh: '晚饭好了！' },
          { en: 'It smells nice. I can not wait!', zh: '真香，我等不及了！' },
          { en: 'I love tomato soup. It is yummy.', zh: '我爱番茄汤，真好喝。' },
          { en: 'Are you looking for something?', zh: '你在找什么吗？' }
        ]
      },
      {
        title: 'Unit 7 Chinese festivals',
        words: [
          { en: 'festival', zh: '节日', emoji: '🎊', ex: 'I like festivals.' },
          { en: 'Spring Festival', zh: '春节', emoji: '🧨' },
          { en: 'January', zh: '一月', emoji: '📅' },
          { en: 'February', zh: '二月', emoji: '📅' },
          { en: 'call', zh: '叫作', emoji: '💬', ex: 'We call it Spring Festival.' },
          { en: 'Chinese New Year', zh: '农历新年', emoji: '🏮' },
          { en: 'get together', zh: '团聚', emoji: '👨‍👩‍👧‍👦' },
          { en: 'jiaozi', zh: '饺子', emoji: '🥟' },
          { en: 'Dragon Boat Festival', zh: '端午节', emoji: '🐉' },
          { en: 'May', zh: '五月', emoji: '📅' },
          { en: 'June', zh: '六月', emoji: '📅' },
          { en: 'dragon boat race', zh: '赛龙舟', emoji: '🛶' },
          { en: 'place', zh: '地方', emoji: '📍', ex: 'What a nice place!' },
          { en: 'rice dumpling', zh: '粽子', emoji: '🍙' },
          { en: 'Mid-Autumn Festival', zh: '中秋节', emoji: '🥮' },
          { en: 'September', zh: '九月', emoji: '📅' },
          { en: 'October', zh: '十月', emoji: '📅' },
          { en: 'moon cake', zh: '月饼', emoji: '🥮' },
          { en: 'Double Ninth Festival', zh: '重阳节', emoji: '⛰️' },
          { en: 'November', zh: '十一月', emoji: '📅' },
          { en: 'old', zh: '年老的', emoji: '👴', ex: 'Visit old people.' },
          { en: 'mountain', zh: '山', emoji: '⛰️', ex: 'They climb mountains.' },
          { en: 'rice cake', zh: '重阳糕', emoji: '🍰' },
          { en: "Mother's Day", zh: '母亲节', emoji: '💐' },
          { en: "Father's Day", zh: '父亲节', emoji: '🎁' },
          { en: 'favourite', zh: '最喜欢的', emoji: '⭐', ex: 'It is my favourite festival.' }
        ],
        sentences: [
          { en: 'The Spring Festival is in January or February.', zh: '春节在一月或二月。' },
          { en: 'We get together with our family.', zh: '我们和家人团聚。' },
          { en: 'The Dragon Boat Festival is in May or June.', zh: '端午节在五月或六月。' },
          { en: 'What is your favourite festival?', zh: '你最喜欢哪个节日？' }
        ]
      },
      {
        title: 'Unit 8 Birthdays',
        words: [
          { en: 'birthday', zh: '生日', emoji: '🎂', ex: 'Happy birthday!' },
          { en: 'eleventh', zh: '第十一', emoji: '🔢' },
          { en: 'eighth', zh: '第八', emoji: '🔢' },
          { en: 'April', zh: '四月', emoji: '📅' },
          { en: 'together', zh: '一起', emoji: '👫', ex: 'We play together.' },
          { en: 'game', zh: '游戏', emoji: '🎮', ex: 'We play games.' },
          { en: 'March', zh: '三月', emoji: '📅' },
          { en: 'July', zh: '七月', emoji: '📅' },
          { en: 'August', zh: '八月', emoji: '📅' },
          { en: 'December', zh: '十二月', emoji: '📅' },
          { en: 'hero', zh: '英雄；偶像', emoji: '🦸', ex: 'He is my hero.' },
          { en: 'play', zh: '戏剧', emoji: '🎭', ex: 'They put on a play.' },
          { en: 'number', zh: '数字', emoji: '🔢', ex: 'What is your number?' },
          { en: 'password', zh: '密码', emoji: '🔐', ex: 'This is my password.' },
          { en: 'answer', zh: '答案', emoji: '💡', ex: 'The answer is right.' },
          { en: 'fourth', zh: '第四', emoji: '🔢' },
          { en: 'start', zh: '开始', emoji: '▶️', ex: 'The party starts.' },
          { en: 'fight', zh: '打架', emoji: '⚔️' }
        ],
        sentences: [
          { en: "When's your birthday?", zh: '你的生日是什么时候？' },
          { en: "It's on the eleventh of April.", zh: '是四月十一日。' },
          { en: 'We play games together.', zh: '我们一起玩游戏。' },
          { en: 'We always have a good time.', zh: '我们总是玩得很开心。' }
        ]
      }
    ]
  },

  {
    id: '6a',
    name: '六年级上册',
    edition: '译林版 · 旧版（新教材启用后重新抓取替换）',
    ready: true,
    units: [
      {
        title: "Unit 1 The king's new clothes",
        words: [
          { en: 'long long ago', zh: '很久以前', emoji: '⏳' },
          { en: 'magic', zh: '有魔力的', emoji: '🪄', ex: 'The magic cloth.' },
          { en: 'clever', zh: '聪明的', emoji: '🧠', ex: 'Clever people can see it.' },
          { en: 'foolish', zh: '愚蠢的', emoji: '🤡', ex: 'The king is foolish.' },
          { en: 'through', zh: '穿过', emoji: '➡️', ex: 'Walk through the city.' },
          { en: 'laugh', zh: '笑', emoji: '😂', ex: 'They laugh at the king.' },
          { en: 'wear', zh: '穿', emoji: '👔', ex: 'The king wears new clothes.' },
          { en: 'tell', zh: '告诉', emoji: '💬', ex: 'Let me tell you a story.' },
          { en: 'each', zh: '每个', emoji: '👤', ex: 'Each child has a book.' },
          { en: 'say', zh: '说', emoji: '🗣️', ex: 'Say it in English.' },
          { en: 'sentence', zh: '句子', emoji: '📝', ex: 'Make a sentence.' },
          { en: 'quick', zh: '快的', emoji: '⚡', ex: 'Be quick!' },
          { en: 'next', zh: '下一个', emoji: '➡️', ex: 'The next day.' },
          { en: 'little', zh: '小的', emoji: '🐣', ex: 'A little boy.' },
          { en: 'turn', zh: '机会', emoji: '🔄', ex: 'It is your turn.' },
          { en: 'think', zh: '思考；认为', emoji: '💭', ex: 'I think it is great.' },
          { en: 'hard', zh: '努力地', emoji: '💪', ex: 'They work hard.' },
          { en: 'laugh at', zh: '嘲笑', emoji: '🙈', ex: 'Do not laugh at him.' },
          { en: 'grandchildren', zh: '孙辈', emoji: '👨‍👩‍👧‍👦', ex: 'The king tells his grandchildren.' },
          { en: 'move ... away', zh: '把……搬走', emoji: '📦', ex: 'Move the box away.' },
          { en: 'child', zh: '小孩（复数 children）', emoji: '🧒', ex: 'The child is clever.' }
        ],
        sentences: [
          { en: 'Long long ago, there was a king.', zh: '很久以前，有一位国王。' },
          { en: 'The king liked new clothes very much.', zh: '国王非常喜欢新衣服。' },
          { en: 'Clever people could see them.', zh: '聪明的人能看见它们。' },
          { en: 'The little boy told the truth.', zh: '小男孩说了实话。' }
        ]
      },
      {
        title: 'Unit 2 What a day!',
        words: [
          { en: 'sunny', zh: '晴朗的', emoji: '☀️', ex: 'It was sunny.' },
          { en: 'show', zh: '表演；展览', emoji: '🎪', ex: 'We saw a parrot show.' },
          { en: 'interesting', zh: '有趣的', emoji: '🤩', ex: 'The show was interesting.' },
          { en: 'weather', zh: '天气', emoji: '🌦️', ex: 'How is the weather?' },
          { en: 'become', zh: '变得', emoji: '🔄', ex: 'It became cloudy.' },
          { en: 'windy', zh: '有风的', emoji: '🌬️', ex: 'It was windy.' },
          { en: 'cloudy', zh: '多云的', emoji: '☁️', ex: 'It is cloudy today.' },
          { en: 'high', zh: '高的', emoji: '📏', ex: 'The kite flew high.' },
          { en: 'sky', zh: '天空', emoji: '🌌', ex: 'Look at the sky.' },
          { en: 'bring', zh: '带来', emoji: '🤲', ex: 'I brought some bread.' },
          { en: 'honey', zh: '蜂蜜', emoji: '🍯', ex: 'The honey is sweet.' },
          { en: 'drink', zh: '饮料', emoji: '🥤', ex: 'I want a drink.' },
          { en: 'ant', zh: '蚂蚁', emoji: '🐜', ex: 'The ants are small.' },
          { en: 'bee', zh: '蜜蜂', emoji: '🐝', ex: 'The bees are busy.' },
          { en: 'cloud', zh: '云', emoji: '☁️', ex: 'There are many clouds.' },
          { en: 'rain', zh: '雨；下雨', emoji: '🌧️', ex: 'It rained in the afternoon.' },
          { en: 'rainy', zh: '多雨的', emoji: '☔', ex: 'It was a rainy day.' },
          { en: 'meet', zh: '遇见', emoji: '🤝', ex: 'I met my friend.' },
          { en: 'lose', zh: '丢失（过去式 lost）', emoji: '😰', ex: 'I lost my new kite.' },
          { en: 'know', zh: '知道', emoji: '🤔', ex: 'I know the answer.' },
          { en: 'What happened?', zh: '出什么事了？', emoji: '❓' },
          { en: 'climb up', zh: '爬上', emoji: '🧗', ex: 'We climbed up the hill.' },
          { en: 'hold onto', zh: '抓紧', emoji: '🤜', ex: 'Hold onto the kite.' },
          { en: 'fly away', zh: '飞走', emoji: '💨', ex: 'The kite flew away.' }
        ],
        sentences: [
          { en: 'It was sunny in the morning.', zh: '早上天气晴朗。' },
          { en: 'We saw an interesting parrot show.', zh: '我们看了一场有趣的鹦鹉表演。' },
          { en: 'It became windy and cloudy.', zh: '天气变得有风又多云。' },
          { en: 'What a day!', zh: '真是难忘的一天！' }
        ]
      },
      {
        title: 'Unit 3 Holiday fun',
        words: [
          { en: 'holiday', zh: '假期', emoji: '🏖️', ex: 'Where did you go for the holiday?' },
          { en: 'National Day', zh: '国庆节', emoji: '🇨🇳' },
          { en: 'call', zh: '打电话', emoji: '📞', ex: 'I called my friend.' },
          { en: 'Bund', zh: '（上海）外滩', emoji: '🌃' },
          { en: 'Shanghai Museum', zh: '上海博物馆', emoji: '🏛️' },
          { en: 'star', zh: '星星', emoji: '⭐', ex: 'The star is bright.' },
          { en: 'Great Wall', zh: '长城', emoji: '🏯' },
          { en: 'Palace Museum', zh: '故宫', emoji: '🏮' },
          { en: 'Summer Palace', zh: '颐和园', emoji: '⛲' },
          { en: "Tian'anmen Square", zh: '天安门广场', emoji: '🇨🇳' },
          { en: 'fashion show', zh: '时装秀', emoji: '👗' },
          { en: 'excited', zh: '兴奋的', emoji: '🤩', ex: 'I was so excited.' },
          { en: 'paper', zh: '纸', emoji: '📄', ex: 'a paper T-shirt' },
          { en: 'ask', zh: '问', emoji: '❓', ex: 'May I ask you a question?' },
          { en: 'bottle', zh: '瓶子', emoji: '🍾', ex: 'a bottle of water' },
          { en: 'go well', zh: '进展顺利', emoji: '👍' },
          { en: 'at first', zh: '起初', emoji: '⏮️' },
          { en: 'heavy rain', zh: '大雨', emoji: '🌧️' }
        ],
        sentences: [
          { en: 'Where did you go for the holiday?', zh: '你假期去了哪里？' },
          { en: 'I went to Shanghai and visited the Bund.', zh: '我去了上海，游览了外滩。' },
          { en: 'I was very excited.', zh: '我非常兴奋。' },
          { en: 'The fashion show went well at first.', zh: '时装秀起初很顺利。' }
        ]
      },
      {
        title: 'Unit 4 Then and now',
        words: [
          { en: 'then and now', zh: '过去和现在', emoji: '⏮️⏭️' },
          { en: 'ago', zh: '以前', emoji: '⏳', ex: 'Six years ago.' },
          { en: 'use', zh: '使用', emoji: '🛠️', ex: 'We use phones now.' },
          { en: 'telephone', zh: '电话', emoji: '☎️', ex: 'The old telephone.' },
          { en: 'office', zh: '办公室', emoji: '🏢', ex: 'He works in an office.' },
          { en: 'mobile phone', zh: '手机', emoji: '📱', ex: 'I have a mobile phone.' },
          { en: 'anywhere', zh: '任何地方', emoji: '🌏', ex: 'We can call anywhere.' },
          { en: 'radio', zh: '收音机', emoji: '📻', ex: 'Grandpa listens to the radio.' },
          { en: 'newspaper', zh: '报纸', emoji: '📰', ex: 'He reads newspapers.' },
          { en: 'news', zh: '新闻', emoji: '🗞️', ex: 'the evening news' },
          { en: 'watch', zh: '观看', emoji: '👀', ex: 'We watch TV.' },
          { en: 'e-book', zh: '电子书', emoji: '📱', ex: 'I read e-books.' },
          { en: 'make friends', zh: '交朋友', emoji: '🤝' },
          { en: 'all over the world', zh: '全世界', emoji: '🌐' },
          { en: 'do shopping', zh: '购物', emoji: '🛒' },
          { en: 'TV', zh: '电视', emoji: '📺', ex: 'There was no TV then.' },
          { en: 'look out of', zh: '朝……外看', emoji: '🪟' },
          { en: 'go on', zh: '继续', emoji: '➡️', ex: 'Go on reading.' },
          { en: 'still', zh: '仍然', emoji: '🔁', ex: 'He still writes letters.' },
          { en: 'What day is today?', zh: '今天星期几？', emoji: '📅' },
          { en: 'spell', zh: '拼写', emoji: '🔤', ex: 'Spell the word.' },
          { en: 'make a sentence', zh: '造句', emoji: '📝' },
          { en: 'with', zh: '用……', emoji: '🔧', ex: 'Write with a pen.' },
          { en: 'yesterday', zh: '昨天', emoji: '📆', ex: 'It was Sunday yesterday.' }
        ],
        sentences: [
          { en: 'Six years ago, I could not write.', zh: '六年前我还不会写字。' },
          { en: 'Now I have a mobile phone.', zh: '现在我有一部手机。' },
          { en: 'We can do shopping on the Internet.', zh: '我们可以在网上购物。' },
          { en: 'He reads e-books all over the world.', zh: '他在世界各地读电子书。' }
        ]
      },
      {
        title: 'Unit 5 Signs',
        words: [
          { en: 'sign', zh: '标识', emoji: '🚸', ex: 'What does this sign mean?' },
          { en: 'shopping centre', zh: '购物中心', emoji: '🏬' },
          { en: 'careful', zh: '小心的', emoji: '⚠️', ex: 'Be careful!' },
          { en: 'What does it mean?', zh: '它是什么意思？', emoji: '❓' },
          { en: 'mean', zh: '意思是', emoji: '💭', ex: 'What does it mean?' },
          { en: 'floor', zh: '地面', emoji: '🟫' },
          { en: 'litter', zh: '垃圾；乱扔', emoji: '🗑️' },
          { en: 'go in', zh: '进入', emoji: '🚪' },
          { en: 'take ... into', zh: '带入', emoji: '📥' },
          { en: 'restaurant', zh: '餐馆', emoji: '🍽️', ex: 'Do not take it into the restaurant.' },
          { en: 'someone', zh: '某人', emoji: '👤', ex: 'Someone is smoking.' },
          { en: 'smoke', zh: '吸烟', emoji: '🚭' },
          { en: 'smell', zh: '闻到', emoji: '👃', ex: 'I can smell it.' },
          { en: 'No eating or drinking.', zh: '请勿饮食。', emoji: '🚫' },
          { en: 'No littering.', zh: '请勿乱扔垃圾。', emoji: '🚯' },
          { en: 'No parking.', zh: '请勿停车。', emoji: '🅿️' },
          { en: 'No smoking.', zh: '请勿吸烟。', emoji: '🚭' },
          { en: 'Danger!', zh: '危险！', emoji: '⚠️' },
          { en: 'Wet floor.', zh: '小心地滑。', emoji: '💦' },
          { en: 'outing', zh: '远足', emoji: '🥾' },
          { en: 'walk on', zh: '继续走', emoji: '🚶' },
          { en: 'around', zh: '在……周围', emoji: '🔄' }
        ],
        sentences: [
          { en: 'What does this sign mean?', zh: '这个标识是什么意思？' },
          { en: 'It means "No smoking".', zh: '意思是"禁止吸烟"。' },
          { en: 'It means the floor is wet.', zh: '意思是地面湿滑。' },
          { en: 'Be careful, Tim!', zh: '小心，蒂姆！' }
        ]
      },
      {
        title: 'Unit 6 Keep our city clean',
        words: [
          { en: 'keep', zh: '保持', emoji: '🔄', ex: 'Keep our city clean.' },
          { en: 'clean', zh: '干净的', emoji: '✨' },
          { en: 'make', zh: '使变得', emoji: '🔨' },
          { en: 'air', zh: '空气', emoji: '💨', ex: 'The air is fresh.' },
          { en: 'dirty', zh: '脏的', emoji: '😷', ex: 'The air is dirty.' },
          { en: 'smoke', zh: '烟雾', emoji: '🏭' },
          { en: 'rubbish', zh: '垃圾', emoji: '🗑️', ex: 'Put rubbish in the bin.' },
          { en: 'messy', zh: '凌乱的', emoji: '🌀' },
          { en: 'dead', zh: '死的', emoji: '🥀' },
          { en: 'bin', zh: '垃圾桶', emoji: '🗑️' },
          { en: 'plant', zh: '种植；植物', emoji: '🌳', ex: 'We plant more trees.' },
          { en: 'more', zh: '更多的', emoji: '➕', ex: 'more trees' },
          { en: 'museum', zh: '博物馆', emoji: '🏛️' },
          { en: 'throw', zh: '扔', emoji: '🤾', ex: 'Do not throw skin.' },
          { en: 'skin', zh: '果皮', emoji: '🍌' },
          { en: 'ground', zh: '地面', emoji: '🟫' },
          { en: 'pick ... up', zh: '捡起', emoji: '🤲', ex: 'Pick it up.' },
          { en: 'slip', zh: '滑倒', emoji: '🍌', ex: 'You may slip.' },
          { en: 'fall', zh: '摔倒', emoji: '🤕' }
        ],
        sentences: [
          { en: 'What makes our city dirty?', zh: '是什么让我们的城市变脏？' },
          { en: 'Smoke from cars makes the air dirty.', zh: '汽车尾气让空气变脏。' },
          { en: 'We can plant more trees.', zh: '我们可以种更多树。' },
          { en: 'Put rubbish in the bin.', zh: '把垃圾放进垃圾桶。' }
        ]
      },
      {
        title: 'Unit 7 Protect the Earth',
        words: [
          { en: 'protect', zh: '保护', emoji: '🛡️', ex: 'Protect the Earth.' },
          { en: 'Earth', zh: '地球', emoji: '🌍' },
          { en: 'save', zh: '节约；挽救', emoji: '💧', ex: 'Save water, please.' },
          { en: 'useful', zh: '有用的', emoji: '💎', ex: 'Water is useful.' },
          { en: 'much', zh: '许多', emoji: '💯' },
          { en: 'waste', zh: '浪费', emoji: '🗑️', ex: 'Do not waste water.' },
          { en: 'reuse', zh: '再利用', emoji: '♻️', ex: 'Reuse paper.' },
          { en: 'energy', zh: '能源', emoji: '⚡' },
          { en: 'most', zh: '大部分', emoji: '📊' },
          { en: 'come from', zh: '来自', emoji: '📍', ex: 'Energy comes from coal.' },
          { en: 'coal', zh: '煤', emoji: '🪨' },
          { en: 'oil', zh: '石油', emoji: '🛢️' },
          { en: 'drive', zh: '驾驶', emoji: '🚗', ex: 'Do not drive so much.' },
          { en: 'wood', zh: '木头', emoji: '🪵', ex: 'We use wood to make desks.' },
          { en: 'other', zh: '其他的', emoji: '🔀' },
          { en: 'cut down', zh: '砍伐', emoji: '🪓' },
          { en: 'too many', zh: '太多', emoji: '❗' },
          { en: 'too much', zh: '太多', emoji: '❗' },
          { en: 'plastic', zh: '塑料', emoji: '🥤' },
          { en: 'glass', zh: '玻璃', emoji: '🥛' },
          { en: 'project', zh: '课题；项目', emoji: '📋' },
          { en: 'poster', zh: '海报', emoji: '🖼️', ex: 'Make a poster.' },
          { en: 'gate', zh: '大门', emoji: '⛩️' }
        ],
        sentences: [
          { en: 'We should save water.', zh: '我们应该节约用水。' },
          { en: 'Water is useful. Do not waste it.', zh: '水很有用，不要浪费。' },
          { en: 'Most energy comes from coal and oil.', zh: '大多数能源来自煤和石油。' },
          { en: 'Do not use too much plastic.', zh: '不要使用太多塑料。' }
        ]
      },
      {
        title: 'Unit 8 Chinese New Year',
        words: [
          { en: 'get', zh: '收到；得到', emoji: '📨', ex: 'I got a red packet.' },
          { en: 'Hong Kong', zh: '香港', emoji: '🏙️' },
          { en: 'next week', zh: '下周', emoji: '📅' },
          { en: 'food', zh: '食物', emoji: '🍲' },
          { en: 'tangyuan', zh: '汤圆', emoji: '🍡' },
          { en: "Chinese New Year's Eve", zh: '除夕', emoji: '🌃' },
          { en: "Chinese New Year's Day", zh: '大年初一', emoji: '🏮' },
          { en: 'red packet', zh: '红包', emoji: '🧧' },
          { en: 'lion dance', zh: '舞狮', emoji: '🦁' },
          { en: 'fireworks', zh: '烟花', emoji: '🎆' },
          { en: 'firecracker', zh: '鞭炮', emoji: '🧨' },
          { en: 'rich', zh: '丰富的', emoji: '💎' },
          { en: 'plan', zh: '计划', emoji: '📋', ex: 'My plan for next week.' },
          { en: 'hooray', zh: '好极了', emoji: '🎉' },
          { en: 'light', zh: '点燃', emoji: '🔥' }
        ],
        sentences: [
          { en: 'Chinese New Year is coming.', zh: '春节要到了。' },
          { en: 'We are going to eat tangyuan.', zh: '我们将要吃汤圆。' },
          { en: 'I got a red packet. Hooray!', zh: '我收到了红包，太开心了！' },
          { en: 'We watched fireworks last year.', zh: '我们去年看了烟花。' }
        ]
      }
    ]
  },

  {
    id: '6b',
    name: '六年级下册',
    edition: '译林版 · 旧版（新教材启用后重新抓取替换）',
    ready: true,
    units: [
      {
        title: 'Unit 1 The lion and the mouse',
        words: [
          { en: 'mouse', zh: '老鼠（复数 mice）', emoji: '🐭', ex: 'A mouse walked by.' },
          { en: 'large', zh: '大的', emoji: '🐘' },
          { en: 'strong', zh: '强壮的', emoji: '💪', ex: 'The lion is strong.' },
          { en: 'walk by', zh: '走过', emoji: '🚶' },
          { en: 'wake ... up', zh: '吵醒', emoji: '😴', ex: 'The mouse woke the lion up.' },
          { en: 'some day', zh: '总有一天', emoji: '📆' },
          { en: 'quietly', zh: '小声地', emoji: '🤫', ex: 'He said quietly.' },
          { en: 'weak', zh: '虚弱的', emoji: '🐣', ex: 'The mouse is weak.' },
          { en: 'loudly', zh: '大声地', emoji: '📢', ex: 'The lion laughed loudly.' },
          { en: 'let ... go', zh: '放开', emoji: '🕊️' },
          { en: 'the next day', zh: '第二天', emoji: '➡️' },
          { en: 'net', zh: '网', emoji: '🕸️', ex: 'The lion was in the net.' },
          { en: 'bite', zh: '咬', emoji: '🦷', ex: 'The mouse bit the net.' },
          { en: 'sharp', zh: '锋利的', emoji: '🔪', ex: 'His teeth are sharp.' },
          { en: 'sadly', zh: '难过地', emoji: '😢', ex: 'The lion asked sadly.' },
          { en: 'just then', zh: '就在那时', emoji: '⏱️' },
          { en: 'soon', zh: '不久', emoji: '⏳' },
          { en: 'happily', zh: '开心地', emoji: '😄', ex: 'They played happily.' },
          { en: 'from then on', zh: '从那时起', emoji: '📅' },
          { en: 'cheer', zh: '欢呼', emoji: '📣' },
          { en: 'hit', zh: '击中', emoji: '🎯' },
          { en: 'deep', zh: '深的', emoji: '🕳️', ex: 'The hole is deep.' },
          { en: 'reach', zh: '够得着', emoji: '🖐️', ex: 'He reached the apple.' },
          { en: 'quickly', zh: '迅速地', emoji: '⚡' },
          { en: 'pour ... into', zh: '把……倒入', emoji: '🫗' }
        ],
        sentences: [
          { en: 'There was a lion in the forest. He was large and strong.', zh: '森林里有一只狮子，他又大又壮。' },
          { en: 'The mouse woke the lion up.', zh: '老鼠吵醒了狮子。' },
          { en: 'The lion let the mouse go.', zh: '狮子放走了老鼠。' },
          { en: 'From then on, they became friends.', zh: '从那时起，他们成了朋友。' }
        ]
      },
      {
        title: 'Unit 2 Good habits',
        words: [
          { en: 'habit', zh: '习惯', emoji: '🔁', ex: 'He has good habits.' },
          { en: 'never', zh: '从不', emoji: '🚫', ex: 'He never gets up late.' },
          { en: 'late', zh: '迟的', emoji: '⏰' },
          { en: 'put ... in order', zh: '整理得井井有条', emoji: '🧹' },
          { en: 'finish', zh: '完成', emoji: '✅', ex: 'Finish your homework first.' },
          { en: 'tidy', zh: '整齐的', emoji: '🧺', ex: 'His room is tidy.' },
          { en: 'bad', zh: '坏的', emoji: '👎' },
          { en: 'sleepy', zh: '困的', emoji: '😴', ex: 'I am sleepy.' },
          { en: 'last night', zh: '昨夜', emoji: '🌙' },
          { en: 'fast', zh: '快的', emoji: '⚡' },
          { en: 'go into', zh: '走进', emoji: '🚪' },
          { en: 'slowly', zh: '缓慢地', emoji: '🐢' },
          { en: 'badly', zh: '差地', emoji: '😖' }
        ],
        sentences: [
          { en: 'He never gets up late.', zh: '他从不晚起。' },
          { en: 'He always puts his things in order.', zh: '他总是把东西收拾整齐。' },
          { en: 'He finishes his homework early.', zh: '他很早完成作业。' },
          { en: 'Wang Bing is a good boy. He has many good habits.', zh: '王兵是个好孩子，有很多好习惯。' }
        ]
      },
      {
        title: 'Unit 3 A healthy diet',
        words: [
          { en: 'healthy', zh: '健康的', emoji: '🥗', ex: 'We need a healthy diet.' },
          { en: 'diet', zh: '日常饮食', emoji: '🍚' },
          { en: 'a little', zh: '一点', emoji: '🤏' },
          { en: 'a few', zh: '一些（可数）', emoji: '🔢' },
          { en: 'at a time', zh: '一次', emoji: '1️⃣' },
          { en: 'cola', zh: '可乐', emoji: '🥤' },
          { en: 'need', zh: '需要', emoji: '❗', ex: 'We need vegetables.' }
        ],
        sentences: [
          { en: 'We need a healthy diet.', zh: '我们需要健康的饮食。' },
          { en: 'He eats a few eggs every week.', zh: '他每周吃几个鸡蛋。' },
          { en: 'She has a little rice for dinner.', zh: '她晚饭吃一点米饭。' },
          { en: 'Do not drink too much cola.', zh: '不要喝太多可乐。' }
        ]
      },
      {
        title: 'Unit 4 Road safety',
        words: [
          { en: 'road', zh: '道路', emoji: '🛣️' },
          { en: 'safety', zh: '安全', emoji: '🦺' },
          { en: 'cross', zh: '穿过', emoji: '🚸', ex: 'Cross the road safely.' },
          { en: 'safely', zh: '安全地', emoji: '✅' },
          { en: 'must', zh: '必须', emoji: '❗', ex: 'You must look out.' },
          { en: 'zebra crossing', zh: '斑马线', emoji: '🦓' },
          { en: 'safe', zh: '安全的', emoji: '🛡️' },
          { en: 'pavement', zh: '人行道', emoji: '🚶' },
          { en: 'look out for', zh: '当心', emoji: '👀' },
          { en: 'easily', zh: '容易地', emoji: '🎈' },
          { en: 'follow', zh: '遵守', emoji: '📋', ex: 'Follow the rules.' },
          { en: 'rule', zh: '规则', emoji: '📖' },
          { en: 'stay', zh: '停留', emoji: '📍' },
          { en: 'light', zh: '灯', emoji: '🚥' }
        ],
        sentences: [
          { en: 'How can we cross the road safely?', zh: '我们怎样才能安全过马路？' },
          { en: 'First, look for a zebra crossing.', zh: '首先找斑马线。' },
          { en: 'You must look out for cars.', zh: '你必须当心汽车。' },
          { en: 'Follow the rules and stay safe.', zh: '遵守规则，注意安全。' }
        ]
      },
      {
        title: 'Unit 5 A party',
        words: [
          { en: "Children's Day", zh: '儿童节', emoji: '🎈' },
          { en: 'clown', zh: '小丑', emoji: '🤡' },
          { en: 'appear', zh: '出现', emoji: '✨', ex: 'A clown appears.' },
          { en: 'balloon', zh: '气球', emoji: '🎈' },
          { en: 'begin', zh: '开始', emoji: '▶️', ex: 'The party begins.' },
          { en: 'put on', zh: '上演', emoji: '🎭' },
          { en: 'end', zh: '结束', emoji: '🏁', ex: 'The party ends at five.' }
        ],
        sentences: [
          { en: "Children's Day is coming.", zh: '儿童节要到了。' },
          { en: 'A clown appears with balloons.', zh: '一个小丑拿着气球出现了。' },
          { en: 'The party is going to begin.', zh: '聚会就要开始了。' },
          { en: 'They put on a play.', zh: '他们上演了一出戏剧。' }
        ]
      },
      {
        title: 'Unit 6 An interesting country',
        words: [
          { en: 'country', zh: '国家', emoji: '🗺️' },
          { en: 'will', zh: '将要', emoji: '⏭️', ex: 'I will learn about it.' },
          { en: 'learn', zh: '学习；了解', emoji: '📖' },
          { en: 'Australia', zh: '澳大利亚', emoji: '🇦🇺' },
          { en: 'find out', zh: '了解；查明', emoji: '🔍' },
          { en: 'magazine', zh: '杂志', emoji: '📰' },
          { en: 'kangaroo', zh: '袋鼠', emoji: '🦘' },
          { en: 'koala', zh: '考拉', emoji: '🐨' },
          { en: 'sport-lover', zh: '运动爱好者', emoji: '🏟️' },
          { en: 'Australian football', zh: '澳式橄榄球', emoji: '🏈' },
          { en: 'exciting', zh: '激动人心的', emoji: '🤩' },
          { en: 'Sydney', zh: '悉尼', emoji: '🏙️' },
          { en: 'welcome', zh: '欢迎', emoji: '👋' },
          { en: 'visitor', zh: '游客', emoji: '🧳' },
          { en: 'for example', zh: '例如', emoji: '👉' },
          { en: 'London', zh: '伦敦', emoji: '🎡' },
          { en: 'Oxford', zh: '牛津', emoji: '🎓' },
          { en: 'like', zh: '像', emoji: '🙃' },
          { en: 'Big Ben', zh: '大本钟', emoji: '🕰️' },
          { en: 'London Eye', zh: '伦敦眼', emoji: '🎡' },
          { en: 'Tower Bridge', zh: '塔桥', emoji: '🌉' },
          { en: 'What do you think?', zh: '你觉得呢？', emoji: '💭' },
          { en: 'month', zh: '月份', emoji: '📅' }
        ],
        sentences: [
          { en: 'Australia is an interesting country.', zh: '澳大利亚是一个有趣的国家。' },
          { en: 'You will find kangaroos and koalas.', zh: '你会看到袋鼠和考拉。' },
          { en: 'Welcome to Sydney!', zh: '欢迎来到悉尼！' },
          { en: 'What do you think?', zh: '你觉得怎么样？' }
        ]
      },
      {
        title: 'Unit 7 Summer holiday plans',
        words: [
          { en: 'summer holiday', zh: '暑假', emoji: '🏖️' },
          { en: 'go back to', zh: '回去', emoji: '🔙' },
          { en: 'how long', zh: '多久', emoji: '⏱️' },
          { en: 'stay', zh: '停留', emoji: '🏨', ex: 'I will stay there for a week.' },
          { en: 'sound', zh: '听起来', emoji: '👂', ex: 'It sounds great.' },
          { en: 'Disneyland', zh: '迪士尼乐园', emoji: '🏰' },
          { en: 'Ocean Park', zh: '海洋公园', emoji: '🐬' },
          { en: 'Taipei', zh: '台北', emoji: '🏙️' },
          { en: 'photo', zh: '照片', emoji: '📸' },
          { en: 'travel', zh: '旅行', emoji: '🧳' },
          { en: 'traveller', zh: '旅行者', emoji: '🧑‍✈️' },
          { en: 'travel around the world', zh: '环游世界', emoji: '🌍' },
          { en: 'different', zh: '不同的', emoji: '🔀' }
        ],
        sentences: [
          { en: 'Where will you go for the summer holiday?', zh: '暑假你打算去哪里？' },
          { en: 'I will go back to London.', zh: '我将回伦敦。' },
          { en: 'How long will you stay there?', zh: '你会在那里待多久？' },
          { en: 'That sounds great!', zh: '听起来太棒了！' }
        ]
      },
      {
        title: 'Unit 8 Our dreams',
        words: [
          { en: 'dream', zh: '梦想', emoji: '💫', ex: 'What is your dream?' },
          { en: 'future', zh: '未来', emoji: '🚀' },
          { en: 'care about', zh: '关心', emoji: '💗' },
          { en: 'tooth', zh: '牙齿（复数 teeth）', emoji: '🦷' },
          { en: 'astronaut', zh: '宇航员', emoji: '👨‍🚀' },
          { en: 'spaceship', zh: '宇宙飞船', emoji: '🛸' },
          { en: 'football player', zh: '足球运动员', emoji: '⚽' },
          { en: 'World Cup', zh: '世界杯', emoji: '🏆' },
          { en: 'dancer', zh: '舞蹈演员', emoji: '💃' },
          { en: 'pianist', zh: '钢琴家', emoji: '🎹' },
          { en: 'come true', zh: '实现', emoji: '✨' },
          { en: 'take care of', zh: '照顾', emoji: '🤗' },
          { en: 'scientist', zh: '科学家', emoji: '🔬' },
          { en: 'brave', zh: '勇敢的', emoji: '🦁' },
          { en: 'artist', zh: '画家；艺术家', emoji: '🎨' },
          { en: 'paint', zh: '用颜料画', emoji: '🖌️' }
        ],
        sentences: [
          { en: 'What do you want to be in the future?', zh: '你将来想做什么？' },
          { en: 'I want to be an astronaut.', zh: '我想当宇航员。' },
          { en: 'I want to fly a spaceship to the Moon.', zh: '我想驾驶飞船去月球。' },
          { en: 'Your dream will come true.', zh: '你的梦想会实现的。' }
        ]
      }
    ]
  }
];
