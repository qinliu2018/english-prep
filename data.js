/* =====================================================================
   英语预习小助手 —— 教材内容数据文件
   ---------------------------------------------------------------------
   ★ 内容来源说明（2026-08 更新）：
   1. 单元目录和单词表按《译林版三年级上册（2024 秋新教材）》整理，
      单词表抓取自教习网（yyld.51jiaoxi.com），已与新教材目录交叉核对
   2. emoji 配图和例句（ex）是自编的，课文句子（sentences）先用通用句型
      顶着——拿到课本后，建议换成 Story time 里的原句
   3. 每个单词：en=英文  zh=中文  emoji=配图  ex=例句（可省略）
   4. 添加新单元：复制一个 { title: ..., words: [...], sentences: [...] }
      整块下来照着改；新册录好后把该册 ready 改成 true
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
          { en: 'hello', zh: '你好', emoji: '👋', ex: "Hello, I'm Mike." },
          { en: 'hi', zh: '嗨；你好', emoji: '👋', ex: 'Hi, Miss Li.' },
          { en: 'Good morning.', zh: '早上好', emoji: '🌅', ex: 'Good morning, class.' },
          { en: 'I', zh: '我', emoji: '🙋' },
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
          { en: 'Hello, Miss Li.', zh: '你好，李老师。' },
          { en: 'Good morning, class.', zh: '同学们，早上好。' },
          { en: "Hi, I'm Mike.", zh: '你好，我是迈克。' },
          { en: 'Good afternoon, Miss Li.', zh: '李老师，下午好。' },
          { en: 'Goodbye, Mum.', zh: '妈妈，再见。' },
          { en: 'Ah! A cat!', zh: '啊！一只猫！' }
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
          { en: "Hello! What's your name?", zh: '你好！你叫什么名字？' },
          { en: 'My name is Su Hai.', zh: '我叫苏海。' },
          { en: "I'm Liu Tao. I'm a boy.", zh: '我是刘涛。我是男孩。' },
          { en: 'This is Helen. She is a girl.', zh: '这是海伦。她是女孩。' },
          { en: 'Nice to meet you!', zh: '很高兴认识你！' },
          { en: 'Nice to meet you, too!', zh: '我也很高兴认识你！' }
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
          { en: 'Are you Su Hai?', zh: '你是苏海吗？' },
          { en: 'Yes, I am.', zh: '是的，我是。' },
          { en: "No, I'm not. I'm Su Yang.", zh: '不，我不是。我是苏杨。' },
          { en: 'We are twins.', zh: '我们是双胞胎。' },
          { en: 'Excuse me, are you Mike?', zh: '打扰一下，你是迈克吗？' },
          { en: 'You are right!', zh: '你说对了！' }
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
          { en: 'This is my friend, Helen.', zh: '这是我的朋友海伦。' },
          { en: "She's my friend. She's a good girl.", zh: '她是我的朋友。她是个好女孩。' },
          { en: "He's my friend too.", zh: '他也是我的朋友。' },
          { en: 'I have many friends.', zh: '我有许多朋友。' },
          { en: 'This is for you. — Thank you!', zh: '这是给你的。——谢谢你！' }
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
          { en: "This is my mother. She's my mother.", zh: '这是我的妈妈。她是我的妈妈。' },
          { en: "He's my father.", zh: '他是我的爸爸。' },
          { en: 'Look at the pond! Who is that?', zh: '看那个池塘！那是谁？' },
          { en: "Who's that baby?", zh: '那个宝宝是谁？' },
          { en: 'Good evening, Dad!', zh: '爸爸，晚上好！' },
          { en: 'I love my family.', zh: '我爱我家。' }
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
          { en: 'Is he your grandpa?', zh: '他是你爷爷吗？' },
          { en: 'Yes, he is. / No, he is not.', zh: '是的。／不是。' },
          { en: 'This is my uncle.', zh: '这是我的叔叔。' },
          { en: 'My cousin is cool!', zh: '我的表哥真酷！' },
          { en: 'Wow, it is big!', zh: '哇，它真大！' },
          { en: 'I love my family.', zh: '我爱我的家人。' }
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
          { en: 'OK', zh: '好；行', emoji: '👌', ex: 'OK! Thank you.' },
          { en: 'How old are you?', zh: '你几岁了？', emoji: '🎂' },
          { en: 'please', zh: '请', emoji: '🙏', ex: 'Sit down, please.' },
          { en: 'here', zh: '这里；到这里', emoji: '📍', ex: 'Come here, please.' },
          { en: 'love', zh: '喜爱', emoji: '❤️', ex: 'I love this toy.' },
          { en: 'Here you are.', zh: '给你', emoji: '🎁' },
          { en: "You're welcome.", zh: '不客气', emoji: '😊' },
          { en: 'thanks', zh: '谢谢', emoji: '🙏', ex: 'Thanks, Mum!' }
        ],
        sentences: [
          { en: 'Happy Birthday, Bobby!', zh: '波比，生日快乐！' },
          { en: 'How old are you?', zh: '你几岁了？' },
          { en: "I'm nine.", zh: '我九岁。' },
          { en: 'I want a toy car.', zh: '我想要一辆玩具小汽车。' },
          { en: 'Can I help you? — Yes, please.', zh: '您要买什么？——好的，谢谢。' },
          { en: 'Here you are. — Thank you! — You are welcome.', zh: '给你。——谢谢！——不客气。' }
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
          { en: 'er', zh: '哦；嗯', emoji: '🤔', ex: 'Er... I can not do it.' },
          { en: 'fox', zh: '狐狸', emoji: '🦊', ex: 'The fox is clever.' },
          { en: 'child', zh: '小孩（复数 children）', emoji: '🧒', ex: 'The child can dance.' },
          { en: 'thing', zh: '事情', emoji: '📦', ex: 'I can do many things.' }
        ],
        sentences: [
          { en: 'I can draw.', zh: '我会画画。' },
          { en: 'I can sing and dance.', zh: '我会唱歌和跳舞。' },
          { en: 'I can clean the table.', zh: '我会擦桌子。' },
          { en: "Let's take pictures!", zh: '我们来拍照吧！' },
          { en: 'Are you OK?', zh: '你没事吧？' },
          { en: 'I can do this for you.', zh: '这个我可以帮你做。' }
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
