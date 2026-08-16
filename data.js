/* =====================================================================
   英语预习小助手 —— 教材内容数据文件
   ---------------------------------------------------------------------
   ★ 给爸爸妈妈的说明：
   1. 《三年级上册》的内容是按译林版（苏教版）三年级起点教材整理的
      初稿，请务必对照课本逐单元核对、增删修改！
   2. 每个单词：en=英文  zh=中文  emoji=配图（表情符号）  ex=例句（可省略）
   3. 每个句子：en=英文原句  zh=中文翻译
   4. 添加新单元：复制一个 { title: ..., words: [...], sentences: [...] }
      整块下来，改内容即可。
   5. 添加新册（ready 改为 true）：把占位的册数填上内容，
      并把 ready 从 false 改成 true。
   ===================================================================== */

const BOOKS = [
  {
    id: '3a',
    name: '三年级上册',
    ready: true,
    units: [
      {
        title: 'Unit 1 Hello!',
        words: [
          { en: 'hello', zh: '你好', emoji: '👋', ex: "Hello, I'm Sam." },
          { en: 'hi', zh: '嗨；你好', emoji: '👋', ex: "Hi, I'm Bobby." },
          { en: "I'm", zh: '我是', emoji: '🙋', ex: "I'm Sam." },
          { en: 'Miss', zh: '小姐；老师', emoji: '👩‍🏫', ex: 'Hello, Miss Li.' },
          { en: 'class', zh: '同学们；班级', emoji: '🧑‍🎓', ex: 'Good morning, class.' },
          { en: 'Good morning', zh: '早上好', emoji: '🌅', ex: 'Good morning, Miss Li.' },
          { en: 'Good afternoon', zh: '下午好', emoji: '☀️', ex: 'Good afternoon, class.' },
          { en: 'goodbye', zh: '再见', emoji: '👋', ex: 'Goodbye, Miss Li.' }
        ],
        sentences: [
          { en: 'Hello, Miss Li.', zh: '你好，李老师。' },
          { en: 'Good morning, class.', zh: '同学们，早上好。' },
          { en: "Hi, I'm Bobby.", zh: '你好，我是波比。' },
          { en: "Hello, I'm Sam.", zh: '你好，我是山姆。' },
          { en: 'Good afternoon, class.', zh: '同学们，下午好。' },
          { en: 'Goodbye, Miss Li.', zh: '李老师，再见。' }
        ]
      },
      {
        title: "Unit 2 I'm Liu Tao.",
        words: [
          { en: 'yes', zh: '是的', emoji: '✅', ex: 'Yes, I am.' },
          { en: 'no', zh: '不；不是', emoji: '❌', ex: "No, I'm not." },
          { en: 'not', zh: '不', emoji: '🚫', ex: "No, I'm not." },
          { en: 'are', zh: '是（你/你们）', emoji: '🤔', ex: 'Are you Su Hai?' },
          { en: 'you', zh: '你；你们', emoji: '👉', ex: 'Are you Su Hai?' },
          { en: 'am', zh: '是（我）', emoji: '🙋', ex: 'Yes, I am.' },
          { en: 'Nice to meet you', zh: '很高兴认识你', emoji: '🤝', ex: 'Nice to meet you, Helen.' },
          { en: 'too', zh: '也', emoji: '➕', ex: 'Nice to meet you, too.' }
        ],
        sentences: [
          { en: 'Are you Su Hai?', zh: '你是苏海吗？' },
          { en: 'Yes, I am.', zh: '是的，我是。' },
          { en: "No, I'm not. I'm Liu Tao.", zh: '不，我不是。我是刘涛。' },
          { en: 'Nice to meet you.', zh: '很高兴认识你。' },
          { en: 'Nice to meet you, too.', zh: '我也很高兴认识你。' }
        ]
      },
      {
        title: 'Unit 3 My friends',
        words: [
          { en: 'this', zh: '这；这个', emoji: '👉', ex: 'This is Helen.' },
          { en: 'friend', zh: '朋友', emoji: '🤝', ex: "She's my friend." },
          { en: 'she', zh: '她', emoji: '👧', ex: "She's my friend." },
          { en: 'he', zh: '他', emoji: '👦', ex: "He's my friend." },
          { en: 'my', zh: '我的', emoji: '🙋', ex: "She's my friend." },
          { en: 'sister', zh: '姐姐；妹妹', emoji: '👧', ex: 'This is my sister.' },
          { en: 'brother', zh: '哥哥；弟弟', emoji: '👦', ex: 'This is my brother.' },
          { en: 'see you', zh: '再见', emoji: '👋', ex: 'See you!' }
        ],
        sentences: [
          { en: 'This is Helen. She is my friend.', zh: '这是海伦。她是我的朋友。' },
          { en: 'This is David. He is my friend too.', zh: '这是大卫。他也是我的朋友。' },
          { en: 'Goodbye, Miss Li!', zh: '再见，李老师！' },
          { en: 'See you!', zh: '再见！' }
        ]
      },
      {
        title: 'Unit 4 My family',
        words: [
          { en: 'family', zh: '家；家庭', emoji: '👨‍👩‍👧‍👦', ex: 'This is my family.' },
          { en: 'father', zh: '爸爸', emoji: '👨', ex: 'This is my father.' },
          { en: 'mother', zh: '妈妈', emoji: '👩', ex: 'This is my mother.' },
          { en: 'brother', zh: '哥哥；弟弟', emoji: '👦', ex: 'This is my brother.' },
          { en: 'sister', zh: '姐姐；妹妹', emoji: '👧', ex: 'This is my sister.' },
          { en: 'grandpa', zh: '爷爷；外公', emoji: '👴', ex: 'This is my grandpa.' },
          { en: 'grandma', zh: '奶奶；外婆', emoji: '👵', ex: 'This is my grandma.' },
          { en: 'me', zh: '我', emoji: '🙋', ex: 'This is me.' }
        ],
        sentences: [
          { en: 'This is my father.', zh: '这是我的爸爸。' },
          { en: 'This is my mother.', zh: '这是我的妈妈。' },
          { en: "This is Tim. He's my brother.", zh: '这是蒂姆。他是我的弟弟。' },
          { en: 'This is me.', zh: '这是我。' },
          { en: 'I love my family.', zh: '我爱我的家。' }
        ]
      },
      {
        title: 'Unit 5 Look at me!',
        words: [
          { en: 'look at', zh: '看；看着', emoji: '👀', ex: 'Look at my T-shirt.' },
          { en: 'T-shirt', zh: 'T恤衫', emoji: '👕', ex: 'Look at my T-shirt.' },
          { en: 'skirt', zh: '短裙', emoji: '👗', ex: 'Look at my new skirt.' },
          { en: 'cap', zh: '帽子', emoji: '🧢', ex: 'Look at my cap.' },
          { en: 'jacket', zh: '夹克衫', emoji: '🧥', ex: "It's a jacket." },
          { en: 'dress', zh: '连衣裙', emoji: '👗', ex: 'What a nice dress!' },
          { en: 'new', zh: '新的', emoji: '🆕', ex: 'Look at my new skirt.' },
          { en: 'nice', zh: '好看的；好的', emoji: '👍', ex: "It's nice!" },
          { en: 'great', zh: '太好了；好极了', emoji: '🎉', ex: 'Great!' }
        ],
        sentences: [
          { en: 'Look at my T-shirt.', zh: '看我的T恤衫。' },
          { en: "It's nice!", zh: '它真好看！' },
          { en: 'Look at my new skirt.', zh: '看我的新短裙。' },
          { en: 'Look at me!', zh: '看看我！' },
          { en: 'Great!', zh: '太棒了！' }
        ]
      },
      {
        title: 'Unit 6 Colours',
        words: [
          { en: 'what colour', zh: '什么颜色', emoji: '🌈', ex: 'What colour is my skirt?' },
          { en: 'colour', zh: '颜色', emoji: '🎨', ex: 'What colour is it?' },
          { en: 'red', zh: '红色', emoji: '🟥', ex: "It's red." },
          { en: 'orange', zh: '橙色', emoji: '🟧', ex: "It's orange." },
          { en: 'yellow', zh: '黄色', emoji: '🟨', ex: "It's yellow." },
          { en: 'green', zh: '绿色', emoji: '🟩', ex: "It's green." },
          { en: 'blue', zh: '蓝色', emoji: '🟦', ex: "It's blue." },
          { en: 'and', zh: '和', emoji: '➕', ex: "It's red and blue." },
          { en: 'now', zh: '现在', emoji: '⏰', ex: 'What colour is it now?' }
        ],
        sentences: [
          { en: 'What colour is my skirt?', zh: '我的短裙是什么颜色？' },
          { en: "It's orange.", zh: '它是橙色的。' },
          { en: 'Look at my cap.', zh: '看我的帽子。' },
          { en: 'What colour is it now?', zh: '它现在是什么颜色？' },
          { en: "It's red and blue.", zh: '它是红蓝相间的。' }
        ]
      },
      {
        title: 'Unit 7 Would you like a pie?',
        words: [
          { en: 'would like', zh: '想要', emoji: '🍽️', ex: 'Would you like a pie?' },
          { en: 'pie', zh: '馅饼；派', emoji: '🥧', ex: 'Would you like a pie?' },
          { en: 'ice cream', zh: '冰淇淋', emoji: '🍦', ex: 'What about an ice cream?' },
          { en: 'egg', zh: '鸡蛋', emoji: '🥚', ex: 'Would you like an egg?' },
          { en: 'cake', zh: '蛋糕', emoji: '🍰', ex: 'Would you like a cake?' },
          { en: 'sweet', zh: '甜的', emoji: '🍬', ex: "It's sweet." },
          { en: 'hot dog', zh: '热狗', emoji: '🌭', ex: 'A hot dog?' },
          { en: 'what about', zh: '……怎么样', emoji: '❓', ex: 'What about a pie?' }
        ],
        sentences: [
          { en: 'Would you like a pie?', zh: '你想要一个馅饼吗？' },
          { en: 'Yes, please.', zh: '好的，谢谢。' },
          { en: 'No, thank you.', zh: '不用了，谢谢。' },
          { en: 'What about an ice cream?', zh: '来一个冰淇淋怎么样？' },
          { en: 'Would you like a hot dog?', zh: '你想要一个热狗吗？' }
        ]
      },
      {
        title: 'Unit 8 Happy New Year!',
        words: [
          { en: 'Happy New Year', zh: '新年快乐', emoji: '🎉', ex: 'Happy New Year, Uncle John!' },
          { en: 'uncle', zh: '叔叔；舅舅', emoji: '🧑', ex: 'This is Uncle John.' },
          { en: 'for', zh: '给；为', emoji: '🎁', ex: 'This is for you.' },
          { en: 'doll', zh: '玩具娃娃', emoji: '🧸', ex: "It's a doll." },
          { en: 'ball', zh: '球', emoji: '⚽', ex: "It's a ball." },
          { en: 'robot', zh: '机器人', emoji: '🤖', ex: "It's a robot." },
          { en: 'car', zh: '小汽车', emoji: '🚗', ex: "It's a car." },
          { en: 'CD', zh: '光盘', emoji: '💿', ex: "It's a CD." },
          { en: 'toy', zh: '玩具', emoji: '🧸', ex: "It's a toy." }
        ],
        sentences: [
          { en: 'Happy New Year, Uncle John!', zh: '新年快乐，约翰叔叔！' },
          { en: 'This is for you, Helen.', zh: '这是给你的，海伦。' },
          { en: 'Thank you.', zh: '谢谢你。' },
          { en: "What's this?", zh: '这是什么？' },
          { en: "It's a robot.", zh: '它是一个机器人。' }
        ]
      }
    ]
  },

  /* ↓↓↓ 下面各册是占位，录好内容后把 ready 改成 true 即可出现在首页 ↓↓↓ */
  {
    id: '3b', name: '三年级下册', ready: false,
    units: [
      { title: 'Unit 1', words: [], sentences: [] },
      { title: 'Unit 2', words: [], sentences: [] },
      { title: 'Unit 3', words: [], sentences: [] },
      { title: 'Unit 4', words: [], sentences: [] },
      { title: 'Unit 5', words: [], sentences: [] },
      { title: 'Unit 6', words: [], sentences: [] },
      { title: 'Unit 7', words: [], sentences: [] },
      { title: 'Unit 8', words: [], sentences: [] }
    ]
  },
  {
    id: '4a', name: '四年级上册', ready: false,
    units: [
      { title: 'Unit 1', words: [], sentences: [] },
      { title: 'Unit 2', words: [], sentences: [] },
      { title: 'Unit 3', words: [], sentences: [] },
      { title: 'Unit 4', words: [], sentences: [] },
      { title: 'Unit 5', words: [], sentences: [] },
      { title: 'Unit 6', words: [], sentences: [] },
      { title: 'Unit 7', words: [], sentences: [] },
      { title: 'Unit 8', words: [], sentences: [] }
    ]
  },
  {
    id: '4b', name: '四年级下册', ready: false,
    units: [
      { title: 'Unit 1', words: [], sentences: [] },
      { title: 'Unit 2', words: [], sentences: [] },
      { title: 'Unit 3', words: [], sentences: [] },
      { title: 'Unit 4', words: [], sentences: [] },
      { title: 'Unit 5', words: [], sentences: [] },
      { title: 'Unit 6', words: [], sentences: [] },
      { title: 'Unit 7', words: [], sentences: [] },
      { title: 'Unit 8', words: [], sentences: [] }
    ]
  },
  {
    id: '5a', name: '五年级上册', ready: false,
    units: [
      { title: 'Unit 1', words: [], sentences: [] },
      { title: 'Unit 2', words: [], sentences: [] },
      { title: 'Unit 3', words: [], sentences: [] },
      { title: 'Unit 4', words: [], sentences: [] },
      { title: 'Unit 5', words: [], sentences: [] },
      { title: 'Unit 6', words: [], sentences: [] },
      { title: 'Unit 7', words: [], sentences: [] },
      { title: 'Unit 8', words: [], sentences: [] }
    ]
  },
  {
    id: '5b', name: '五年级下册', ready: false,
    units: [
      { title: 'Unit 1', words: [], sentences: [] },
      { title: 'Unit 2', words: [], sentences: [] },
      { title: 'Unit 3', words: [], sentences: [] },
      { title: 'Unit 4', words: [], sentences: [] },
      { title: 'Unit 5', words: [], sentences: [] },
      { title: 'Unit 6', words: [], sentences: [] },
      { title: 'Unit 7', words: [], sentences: [] },
      { title: 'Unit 8', words: [], sentences: [] }
    ]
  },
  {
    id: '6a', name: '六年级上册', ready: false,
    units: [
      { title: 'Unit 1', words: [], sentences: [] },
      { title: 'Unit 2', words: [], sentences: [] },
      { title: 'Unit 3', words: [], sentences: [] },
      { title: 'Unit 4', words: [], sentences: [] },
      { title: 'Unit 5', words: [], sentences: [] },
      { title: 'Unit 6', words: [], sentences: [] },
      { title: 'Unit 7', words: [], sentences: [] },
      { title: 'Unit 8', words: [], sentences: [] }
    ]
  },
  {
    id: '6b', name: '六年级下册', ready: false,
    units: [
      { title: 'Unit 1', words: [], sentences: [] },
      { title: 'Unit 2', words: [], sentences: [] },
      { title: 'Unit 3', words: [], sentences: [] },
      { title: 'Unit 4', words: [], sentences: [] },
      { title: 'Unit 5', words: [], sentences: [] },
      { title: 'Unit 6', words: [], sentences: [] },
      { title: 'Unit 7', words: [], sentences: [] },
      { title: 'Unit 8', words: [], sentences: [] }
    ]
  }
];
