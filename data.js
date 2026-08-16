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

const BOOKS = [
  {
    id: '3a',
    name: '三年级上册',
    edition: '新教材（2024秋）',
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
          { en: 'er', zh: '哦；嗯', emoji: '🤔' },
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

  {
    id: '3b',
    name: '三年级下册',
    edition: '新教材（2025春）',
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
          { en: "What's this? It's a pencil.", zh: '这是什么？是铅笔。' },
          { en: 'Is that your schoolbag?', zh: '那是你的书包吗？' },
          { en: 'Put your ruler in the pencil case.', zh: '把你的直尺放进铅笔盒。' },
          { en: 'Guess! What is in my schoolbag?', zh: '猜猜！我书包里有什么？' }
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
          { en: "Let's clean our classroom.", zh: '我们来打扫教室吧。' },
          { en: 'Close the window, please.', zh: '请关上窗户。' },
          { en: "Let's sweep the floor.", zh: '我们来扫地吧。' },
          { en: 'Keep our classroom clean.', zh: '保持教室干净。' }
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
          { en: "Don't shout in the library.", zh: '不要在图书馆里喊叫。' },
          { en: 'Please be quiet.', zh: '请安静。' },
          { en: 'Follow the school rules.', zh: '遵守学校规则。' },
          { en: 'Would you like a sweet? — Yes, please.', zh: '你想要颗糖吗？——好的，谢谢。' }
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
          { en: "It's break time. Let's play outside.", zh: '课间休息了，我们去外面玩吧。' },
          { en: 'Where is the butterfly?', zh: '蝴蝶在哪里？' },
          { en: 'The garden is beautiful.', zh: '花园真美。' },
          { en: 'Class is over. Have fun!', zh: '下课了，玩得开心！' }
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
          { en: 'I like mangoes. They are sweet.', zh: '我喜欢芒果，它们很甜。' },
          { en: "Let's make a fruit salad together.", zh: '我们一起做水果沙拉吧。' },
          { en: 'I like apples. What about you?', zh: '我喜欢苹果，你呢？' },
          { en: 'Fruit is good for you.', zh: '水果对你有好处。' }
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
          { en: 'Welcome to the farm!', zh: '欢迎来到农场！' },
          { en: 'These are cows. Those are sheep.', zh: '这些是奶牛，那些是绵羊。' },
          { en: 'The rabbits are cute.', zh: '兔子真可爱。' },
          { en: 'Rabbits like carrots.', zh: '兔子喜欢胡萝卜。' }
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
          { en: "Let's go to the zoo.", zh: '我们去动物园吧。' },
          { en: 'I can see a tiger and a lion.', zh: '我能看见老虎和狮子。' },
          { en: "Don't feed the animals!", zh: '不要喂动物！' },
          { en: 'High five!', zh: '击个掌！' }
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
          { en: 'What colour is it? — It is yellow.', zh: '它是什么颜色？——是黄色。' },
          { en: 'I want to buy a red balloon.', zh: '我想买一个红气球。' },
          { en: 'The chameleon can change colours.', zh: '变色龙会变色。' },
          { en: 'The sky is blue and the tree is green.', zh: '天空是蓝色的，树是绿色的。' }
        ]
      }
    ]
  },

  {
    id: '4a',
    name: '四年级上册',
    edition: '旧版（新版教材已出，网上暂无新版单词表文本，待替换）',
    ready: true,
    units: [
      {
        title: 'Unit 1 I like dogs',
        words: [
          { en: 'like', zh: '喜欢', emoji: '❤️', ex: 'I like dogs.' },
          { en: 'dog', zh: '狗', emoji: '🐶', ex: 'The dog is cute.' },
          { en: 'animal', zh: '动物', emoji: '🐾', ex: 'I like animals.' },
          { en: 'cat', zh: '猫', emoji: '🐱', ex: 'The cat is fat.' },
          { en: 'cute', zh: '可爱的', emoji: '🥰', ex: 'The panda is cute.' },
          { en: 'panda', zh: '大熊猫', emoji: '🐼', ex: 'Pandas are cute.' },
          { en: 'fat', zh: '胖的', emoji: '🐷', ex: 'This cat is fat.' },
          { en: 'elephant', zh: '大象', emoji: '🐘', ex: 'The elephant is big.' },
          { en: 'horse', zh: '马', emoji: '🐴', ex: 'The horse can run.' },
          { en: 'lion', zh: '狮子', emoji: '🦁', ex: 'The lion is strong.' },
          { en: 'monkey', zh: '猴子', emoji: '🐵', ex: 'The monkey is funny.' },
          { en: 'tiger', zh: '老虎', emoji: '🐯', ex: 'The tiger can jump.' },
          { en: 'have', zh: '有', emoji: '🙌', ex: 'I have a cat.' }
        ],
        sentences: [
          { en: 'I like dogs. They are cute.', zh: '我喜欢狗，它们很可爱。' },
          { en: 'Do you like pandas? — Yes, I do.', zh: '你喜欢熊猫吗？——喜欢。' },
          { en: 'Do you like tigers? — No, I don\'t.', zh: '你喜欢老虎吗？——不喜欢。' },
          { en: 'Look at this cat! It is fat!', zh: '看这只猫！它真胖！' }
        ]
      },
      {
        title: 'Unit 2 Let\'s make a fruit salad',
        words: [
          { en: "Let's ...", zh: '咱们……', emoji: '➡️' },
          { en: 'make', zh: '制作', emoji: '🔨', ex: "Let's make a salad." },
          { en: 'fruit', zh: '水果', emoji: '🍇', ex: 'I like fruit.' },
          { en: 'salad', zh: '沙拉', emoji: '🥗', ex: 'The salad is nice.' },
          { en: 'pineapple', zh: '菠萝', emoji: '🍍', ex: 'I have a pineapple.' },
          { en: 'mango', zh: '芒果', emoji: '🥭', ex: 'Do you like mangoes?' },
          { en: 'any', zh: '一些（疑问/否定）', emoji: '❓', ex: 'Do you have any grapes?' },
          { en: 'banana', zh: '香蕉', emoji: '🍌', ex: 'I have some bananas.' },
          { en: 'some', zh: '一些', emoji: '🔢', ex: 'I have some grapes.' },
          { en: 'grape', zh: '葡萄', emoji: '🍇', ex: 'These grapes are sweet.' },
          { en: 'Thanks.', zh: '谢谢。', emoji: '🙏' },
          { en: 'our', zh: '我们的', emoji: '🙋', ex: 'This is our salad.' },
          { en: 'cool', zh: '酷的；棒的', emoji: '😎', ex: 'Cool!' },
          { en: 'wonderful', zh: '精彩的', emoji: '🎉', ex: 'Wonderful!' },
          { en: 'how many', zh: '多少', emoji: '❓', ex: 'How many mangoes?' }
        ],
        sentences: [
          { en: "Let's make a fruit salad.", zh: '我们来做水果沙拉吧。' },
          { en: 'I have a pineapple and some grapes.', zh: '我有一个菠萝和一些葡萄。' },
          { en: 'Do you have any bananas?', zh: '你有一些香蕉吗？' },
          { en: 'Look at our fruit salad! Wonderful!', zh: '看我们的水果沙拉！真棒！' }
        ]
      },
      {
        title: 'Unit 3 How many?',
        words: [
          { en: 'thirteen', zh: '十三', emoji: '🔢', ex: 'I have thirteen stickers.' },
          { en: 'sticker', zh: '贴纸', emoji: '🌟', ex: 'I like stickers.' },
          { en: 'can', zh: '可以；能够', emoji: '💪', ex: 'Can I have a look?' },
          { en: 'have a look', zh: '看一看', emoji: '👀', ex: 'Can I have a look?' },
          { en: 'very', zh: '很', emoji: '❗', ex: 'They are very nice.' },
          { en: 'fifteen', zh: '十五', emoji: '🔢', ex: 'I have fifteen.' },
          { en: 'sure', zh: '当然', emoji: '👌' },
          { en: 'fourteen', zh: '十四', emoji: '🔢' },
          { en: 'sixteen', zh: '十六', emoji: '🔢' },
          { en: 'seventeen', zh: '十七', emoji: '🔢' },
          { en: 'eighteen', zh: '十八', emoji: '🔢' },
          { en: 'nineteen', zh: '十九', emoji: '🔢' },
          { en: 'play', zh: '玩；打（球）', emoji: '⚽', ex: 'I play table tennis.' },
          { en: 'many', zh: '许多', emoji: '👥', ex: 'How many boxes?' },
          { en: 'box', zh: '盒子', emoji: '📦', ex: 'The box is big.' },
          { en: 'table tennis', zh: '乒乓球', emoji: '🏓', ex: 'I can play table tennis.' },
          { en: 'but', zh: '但是', emoji: '➕', ex: 'I like it but I can not play.' },
          { en: 'do', zh: '做', emoji: '🛠️', ex: 'What do you like?' }
        ],
        sentences: [
          { en: 'How many stickers do you have?', zh: '你有多少张贴纸？' },
          { en: 'I have fifteen. They are very nice.', zh: '我有十五张，它们很漂亮。' },
          { en: 'Can I have a look? — Sure.', zh: '我能看看吗？——当然。' },
          { en: 'I can play table tennis.', zh: '我会打乒乓球。' }
        ]
      },
      {
        title: 'Unit 4 I can play basketball',
        words: [
          { en: 'basketball', zh: '篮球', emoji: '🏀', ex: 'I can play basketball.' },
          { en: 'well', zh: '好地', emoji: '👍', ex: 'He can play well.' },
          { en: "can't", zh: '不能', emoji: '🙅', ex: "I can't swim." },
          { en: 'have a try', zh: '试一试', emoji: '💪' },
          { en: 'yeah', zh: '是的；太好了', emoji: '🎉' },
          { en: 'football', zh: '足球', emoji: '⚽', ex: 'Let us play football.' },
          { en: 'jump', zh: '跳', emoji: '🦘', ex: 'I can jump high.' },
          { en: 'skate', zh: '滑冰', emoji: '⛸️', ex: 'I can skate.' },
          { en: 'swim', zh: '游泳', emoji: '🏊', ex: 'Fish can swim.' },
          { en: 'quack', zh: '（鸭子）嘎嘎声', emoji: '🦆' },
          { en: 'tweet', zh: '（鸟）啾啾声', emoji: '🐦' },
          { en: 'fly', zh: '飞', emoji: '🕊️', ex: 'Birds can fly.' },
          { en: 'ouch', zh: '哎呦', emoji: '😵' },
          { en: 'sad', zh: '难过的', emoji: '😢', ex: 'Do not be sad.' },
          { en: 'either', zh: '也（否定句）', emoji: '➕', ex: "I can't skate either." }
        ],
        sentences: [
          { en: 'Can you play basketball? — Yes, I can.', zh: '你会打篮球吗？——会。' },
          { en: "Can you swim? — No, I can't.", zh: '你会游泳吗？——不会。' },
          { en: 'Have a try!', zh: '试一试！' },
          { en: "Don't be sad. Have a try!", zh: '别难过，试一试！' }
        ]
      },
      {
        title: 'Unit 5 Our new home',
        words: [
          { en: 'home', zh: '家', emoji: '🏠', ex: 'Welcome to our new home.' },
          { en: 'bedroom', zh: '卧室', emoji: '🛏️', ex: 'This is my bedroom.' },
          { en: 'living room', zh: '客厅', emoji: '🛋️', ex: 'The living room is big.' },
          { en: 'sofa', zh: '沙发', emoji: '🛋️', ex: 'The sofa is soft.' },
          { en: 'come', zh: '来', emoji: '🏃', ex: 'Come in, please.' },
          { en: 'kitchen', zh: '厨房', emoji: '🍳', ex: 'Mum is in the kitchen.' },
          { en: 'clock', zh: '时钟', emoji: '🕰️', ex: 'The clock is on the wall.' },
          { en: 'fridge', zh: '冰箱', emoji: '🧊', ex: 'The milk is in the fridge.' },
          { en: 'table', zh: '桌子', emoji: '🪑', ex: 'The table is clean.' },
          { en: 'bathroom', zh: '浴室', emoji: '🛁', ex: 'Where is the bathroom?' },
          { en: 'How are you?', zh: '你好吗？', emoji: '👋' },
          { en: 'hungry', zh: '饥饿的', emoji: '😋', ex: 'I am hungry.' },
          { en: 'What would you like?', zh: '你想要什么？', emoji: '❓' },
          { en: "I'd like ...", zh: '我想要……', emoji: '💭' }
        ],
        sentences: [
          { en: 'This is our new home.', zh: '这是我们的新家。' },
          { en: 'The living room is big and nice.', zh: '客厅又大又漂亮。' },
          { en: 'Where is the clock? — It is in the kitchen.', zh: '时钟在哪里？——在厨房。' },
          { en: 'I am hungry. I would like some rice.', zh: '我饿了，想吃点米饭。' }
        ]
      },
      {
        title: 'Unit 6 At the snack bar',
        words: [
          { en: 'at', zh: '在（某处）', emoji: '📍', ex: 'I am at the snack bar.' },
          { en: 'snack bar', zh: '快餐店；小吃店', emoji: '🍟', ex: 'Let us go to the snack bar.' },
          { en: 'hamburger', zh: '汉堡包', emoji: '🍔', ex: 'I would like a hamburger.' },
          { en: 'a glass of', zh: '一杯', emoji: '🥛', ex: 'A glass of milk, please.' },
          { en: 'noodles', zh: '面条', emoji: '🍜', ex: 'I like noodles.' },
          { en: 'dad', zh: '爸爸', emoji: '👨', ex: 'Dad is hungry.' },
          { en: 'sandwich', zh: '三明治', emoji: '🥪', ex: 'A sandwich, please.' },
          { en: 'a cup of', zh: '一杯', emoji: '☕', ex: 'A cup of coffee, please.' },
          { en: 'coffee', zh: '咖啡', emoji: '☕', ex: 'Dad likes coffee.' },
          { en: 'Anything else?', zh: '还要别的吗？', emoji: '❓' },
          { en: 'tea', zh: '茶', emoji: '🍵', ex: 'A cup of tea, please.' },
          { en: 'juice', zh: '果汁', emoji: '🧃', ex: 'I like orange juice.' },
          { en: 'rice', zh: '米饭', emoji: '🍚', ex: 'A big bowl of rice.' },
          { en: 'Me too.', zh: '我也是。', emoji: '🙋' },
          { en: 'fish', zh: '鱼', emoji: '🐟', ex: 'I like fish.' },
          { en: 'Can I help you?', zh: '您要点什么？', emoji: '🤝' },
          { en: 'big', zh: '大的', emoji: '🐘', ex: 'What a big fish!' }
        ],
        sentences: [
          { en: 'What would you like? — I would like a hamburger.', zh: '您要点什么？——我想要一个汉堡。' },
          { en: 'A glass of juice, please.', zh: '请给我一杯果汁。' },
          { en: 'Anything else? — No, thank you.', zh: '还要别的吗？——不了，谢谢。' },
          { en: 'I like noodles. — Me too.', zh: '我喜欢面条。——我也是。' }
        ]
      },
      {
        title: 'Unit 7 How much?',
        words: [
          { en: 'how much', zh: '多少钱', emoji: '💰', ex: 'How much is it?' },
          { en: 'shoe', zh: '鞋子', emoji: '👟', ex: 'These shoes are nice.' },
          { en: 'yuan', zh: '元', emoji: '💵', ex: 'It is twenty yuan.' },
          { en: 'sock', zh: '袜子', emoji: '🧦', ex: 'My socks are new.' },
          { en: 'umbrella', zh: '雨伞', emoji: '☂️', ex: 'It is a nice umbrella.' },
          { en: 'only', zh: '只有', emoji: '☝️', ex: 'It is only five yuan.' },
          { en: 'twenty-eight', zh: '二十八', emoji: '🔢' },
          { en: 'Well done.', zh: '干得好。', emoji: '👏' },
          { en: 'fan', zh: '扇子', emoji: '🪭' },
          { en: 'twenty', zh: '二十', emoji: '2️⃣0️⃣' },
          { en: 'thirty', zh: '三十', emoji: '3️⃣0️⃣' },
          { en: 'forty', zh: '四十', emoji: '4️⃣0️⃣' },
          { en: 'fifty', zh: '五十', emoji: '5️⃣0️⃣' },
          { en: 'forty-five', zh: '四十五', emoji: '🔢' },
          { en: 'her', zh: '她的', emoji: '👧', ex: 'Her fan is new.' },
          { en: 'tail', zh: '尾巴', emoji: '🦊', ex: 'The tail is long.' },
          { en: 'long', zh: '长的', emoji: '📏', ex: 'The tail is long.' }
        ],
        sentences: [
          { en: 'How much is it? — It is twenty yuan.', zh: '这个多少钱？——二十元。' },
          { en: 'How much are these shoes?', zh: '这双鞋多少钱？' },
          { en: 'These socks are very pretty.', zh: '这些袜子真漂亮。' },
          { en: 'Well done!', zh: '干得好！' }
        ]
      },
      {
        title: 'Unit 8 Dolls',
        words: [
          { en: 'hair', zh: '头发', emoji: '💇', ex: 'Her hair is long.' },
          { en: 'eye', zh: '眼睛', emoji: '👁️', ex: 'His eyes are big.' },
          { en: 'nose', zh: '鼻子', emoji: '👃', ex: 'The nose is small.' },
          { en: 'mouth', zh: '嘴', emoji: '👄', ex: 'The mouth is small.' },
          { en: 'small', zh: '小的', emoji: '🐣', ex: 'The ears are small.' },
          { en: 'his', zh: '他的', emoji: '👦', ex: 'His nose is big.' },
          { en: 'short', zh: '矮的；短的', emoji: '📏', ex: 'He is short.' },
          { en: 'ear', zh: '耳朵', emoji: '👂', ex: 'The ears are big.' },
          { en: 'king', zh: '国王', emoji: '🤴', ex: 'The king is tall.' },
          { en: 'thin', zh: '瘦的', emoji: '🪶', ex: 'He is thin.' },
          { en: 'tall', zh: '高的', emoji: '🦒', ex: 'She is tall.' },
          { en: 'snowman', zh: '雪人', emoji: '⛄', ex: 'The snowman is cute.' }
        ],
        sentences: [
          { en: 'Her hair is long. Her eyes are big.', zh: '她的头发长，眼睛大。' },
          { en: 'His nose and mouth are small.', zh: '他的鼻子和嘴巴小小的。' },
          { en: 'The king is tall and thin.', zh: '国王又高又瘦。' },
          { en: 'Look at the snowman! It is cute.', zh: '看这个雪人！真可爱。' }
        ]
      }
    ]
  },

  {
    id: '4b',
    name: '四年级下册',
    edition: '旧版（新版教材已出，网上暂无新版单词表文本，待替换）',
    ready: true,
    units: [
      {
        title: 'Unit 1 Our school subjects',
        words: [
          { en: 'school', zh: '学校', emoji: '🏫', ex: 'Welcome back to school.' },
          { en: 'subject', zh: '学科；科目', emoji: '📘', ex: 'What subjects do you like?' },
          { en: 'Welcome back to ...', zh: '欢迎回到……', emoji: '👋' },
          { en: 'see', zh: '看见；见到', emoji: '👀', ex: 'Nice to see you.' },
          { en: 'timetable', zh: '课程表', emoji: '🗓️', ex: 'This is our timetable.' },
          { en: 'Chinese', zh: '语文（课）', emoji: '🇨🇳', ex: 'We have Chinese and Maths.' },
          { en: 'Maths', zh: '数学（课）', emoji: '➗', ex: 'I like Maths.' },
          { en: 'Art', zh: '美术（课）', emoji: '🎨', ex: 'I like Art.' },
          { en: 'PE', zh: '体育（课）', emoji: '⚽', ex: 'We have PE today.' },
          { en: 'Music', zh: '音乐（课）', emoji: '🎵', ex: 'I like Music.' },
          { en: 'Science', zh: '科学（课）', emoji: '🔬', ex: 'Science is fun.' },
          { en: 'fun', zh: '有趣的', emoji: '🎉', ex: 'It is fun.' },
          { en: 'go to', zh: '去……', emoji: '🚶', ex: 'Let us go to the playground.' },
          { en: 'playground', zh: '操场', emoji: '🏃', ex: 'We play on the playground.' },
          { en: 'lesson', zh: '课', emoji: '📖', ex: 'It is time for Maths.' },
          { en: 'Monday', zh: '星期一', emoji: '📅', ex: 'It is Monday today.' },
          { en: 'afternoon', zh: '下午', emoji: '🌤️', ex: 'Good afternoon.' }
        ],
        sentences: [
          { en: 'Welcome back to school!', zh: '欢迎回到学校！' },
          { en: 'What subjects do you like?', zh: '你喜欢什么科目？' },
          { en: 'I like PE and Music.', zh: '我喜欢体育和音乐。' },
          { en: 'It is time for Maths.', zh: '该上数学课了。' }
        ]
      },
      {
        title: 'Unit 2 After school',
        words: [
          { en: 'after school', zh: '放学后', emoji: '🎒', ex: 'We play after school.' },
          { en: 'go', zh: '去', emoji: '🚶', ex: 'Let us go and play.' },
          { en: 'What day is it today?', zh: '今天星期几？', emoji: '📅' },
          { en: 'Wednesday', zh: '星期三', emoji: '📅' },
          { en: 'match', zh: '比赛', emoji: '🏆', ex: 'We have a match today.' },
          { en: 'today', zh: '今天', emoji: '📆', ex: 'What day is it today?' },
          { en: 'What a pity!', zh: '真遗憾！', emoji: '😢' },
          { en: 'Saturday', zh: '星期六', emoji: '📅' },
          { en: 'All right.', zh: '好的。', emoji: '👌' },
          { en: 'Sunday', zh: '星期日', emoji: '📅' },
          { en: 'Tuesday', zh: '星期二', emoji: '📅' },
          { en: 'Thursday', zh: '星期四', emoji: '📅' },
          { en: 'Friday', zh: '星期五', emoji: '📅' },
          { en: 'get up', zh: '起床', emoji: '⏰', ex: 'I get up at seven.' },
          { en: 'when', zh: '什么时候', emoji: '❓', ex: 'When do you get up?' },
          { en: 'every', zh: '每一个', emoji: '🔁', ex: 'Every day.' },
          { en: 'day', zh: '一天', emoji: '☀️', ex: 'Have a nice day!' }
        ],
        sentences: [
          { en: 'What day is it today?', zh: '今天星期几？' },
          { en: 'It is Wednesday. We have a football match today.', zh: '星期三，我们今天有足球赛。' },
          { en: 'When do you get up?', zh: '你什么时候起床？' },
          { en: 'Let us play table tennis after school.', zh: '放学后我们打乒乓球吧。' }
        ]
      },
      {
        title: 'Unit 3 My day',
        words: [
          { en: 'usually', zh: '通常', emoji: '🔁', ex: 'I usually get up at seven.' },
          { en: 'go to school', zh: '去上学', emoji: '🎒', ex: 'I go to school at seven thirty.' },
          { en: 'in the morning', zh: '在上午', emoji: '🌅' },
          { en: 'have lunch', zh: '吃午饭', emoji: '🍱', ex: 'I have lunch at twelve.' },
          { en: 'in the afternoon', zh: '在下午', emoji: '🌤️' },
          { en: 'play football', zh: '踢足球', emoji: '⚽', ex: 'I play football after school.' },
          { en: 'go home', zh: '回家', emoji: '🏠', ex: 'I go home at five.' },
          { en: 'homework', zh: '家庭作业', emoji: '📝', ex: 'I do my homework.' },
          { en: 'have dinner', zh: '吃晚饭', emoji: '🍽️', ex: 'I have dinner at six.' },
          { en: 'watch TV', zh: '看电视', emoji: '📺', ex: 'I watch TV in the evening.' },
          { en: 'go to bed', zh: '上床睡觉', emoji: '🛏️', ex: 'I go to bed at nine.' },
          { en: 'in the evening', zh: '在晚上', emoji: '🌆' },
          { en: 'at night', zh: '在夜晚', emoji: '🌙' }
        ],
        sentences: [
          { en: 'I usually go to school at seven thirty.', zh: '我通常七点半上学。' },
          { en: 'I have lunch at twelve every day.', zh: '我每天十二点吃午饭。' },
          { en: 'I do my homework in the evening.', zh: '我晚上做作业。' },
          { en: 'I go to bed at nine.', zh: '我九点睡觉。' }
        ]
      },
      {
        title: 'Unit 4 Drawing in the park',
        words: [
          { en: 'drawing', zh: '画画', emoji: '🖼️', ex: 'I like drawing.' },
          { en: 'park', zh: '公园', emoji: '🌳', ex: 'The park is beautiful.' },
          { en: 'draw', zh: '画', emoji: '🎨', ex: 'I can draw a boat.' },
          { en: 'Good idea!', zh: '好主意！', emoji: '💡' },
          { en: 'flower', zh: '花', emoji: '🌸', ex: 'The flowers are beautiful.' },
          { en: 'them', zh: '他（她、它）们', emoji: '👥', ex: 'I can draw them.' },
          { en: 'easy', zh: '容易的', emoji: '😊', ex: 'It is easy.' },
          { en: 'boat', zh: '小船', emoji: '🚣', ex: 'The boat is on the river.' },
          { en: 'river', zh: '河', emoji: '🏞️', ex: 'The river is long.' },
          { en: 'difficult', zh: '困难的', emoji: '😖', ex: 'It is difficult, but I can try.' },
          { en: 'try', zh: '尝试', emoji: '💪', ex: 'Have a try!' },
          { en: 'hill', zh: '小山', emoji: '⛰️', ex: 'The hill is green.' },
          { en: 'lake', zh: '湖', emoji: '🏞️', ex: 'The lake is big.' },
          { en: 'again', zh: '再一次', emoji: '🔁', ex: 'Try again.' }
        ],
        sentences: [
          { en: "Let's draw in the park. — Good idea!", zh: '我们去公园画画吧。——好主意！' },
          { en: 'What can you see? — I can see a boat.', zh: '你能看见什么？——一只小船。' },
          { en: 'It is easy for me.', zh: '这对我来说很容易。' },
          { en: 'It is difficult, but I can try.', zh: '有点难，但我可以试试。' }
        ]
      },
      {
        title: 'Unit 5 Seasons',
        words: [
          { en: 'season', zh: '季节', emoji: '🍂', ex: 'There are four seasons.' },
          { en: 'spring', zh: '春天', emoji: '🌷', ex: 'It is warm in spring.' },
          { en: 'warm', zh: '温暖的', emoji: '🌞', ex: 'Spring is warm.' },
          { en: 'fly', zh: '放飞（风筝）', emoji: '🪁', ex: 'We fly kites in spring.' },
          { en: 'kite', zh: '风筝', emoji: '🪁', ex: 'I have a new kite.' },
          { en: 'go boating', zh: '去划船', emoji: '🚣', ex: 'We go boating in spring.' },
          { en: 'summer', zh: '夏天', emoji: '☀️', ex: 'It is hot in summer.' },
          { en: 'hot', zh: '热的', emoji: '🥵', ex: 'Summer is hot.' },
          { en: 'go swimming', zh: '去游泳', emoji: '🏊', ex: 'We go swimming in summer.' },
          { en: 'autumn', zh: '秋天', emoji: '🍁', ex: 'Autumn is cool.' },
          { en: 'cool', zh: '凉爽的', emoji: '🍃', ex: 'It is cool in autumn.' },
          { en: 'picnic', zh: '野餐', emoji: '🧺', ex: 'We have picnics in autumn.' },
          { en: 'go climbing', zh: '去爬山', emoji: '🧗', ex: 'We go climbing in autumn.' },
          { en: 'winter', zh: '冬天', emoji: '❄️', ex: 'It is cold in winter.' },
          { en: 'cold', zh: '冷的；感冒', emoji: '🥶', ex: 'Winter is cold.' },
          { en: 'go skating', zh: '去滑冰', emoji: '⛸️', ex: 'We go skating in winter.' },
          { en: 'fine', zh: '晴朗的', emoji: '🌤️', ex: 'It is a fine day.' },
          { en: 'hey', zh: '嘿', emoji: '👋' },
          { en: 'whose', zh: '谁的', emoji: '❓', ex: 'Whose kite is it?' }
        ],
        sentences: [
          { en: 'It is spring. It is warm.', zh: '春天到了，天气暖和。' },
          { en: 'We fly kites and go boating in spring.', zh: '我们春天放风筝、划船。' },
          { en: 'It is hot in summer. We go swimming.', zh: '夏天很热，我们去游泳。' },
          { en: 'We can go skating in winter.', zh: '冬天我们可以去滑冰。' }
        ]
      },
      {
        title: "Unit 6 Whose dress is this?",
        words: [
          { en: 'dress', zh: '连衣裙', emoji: '👗', ex: 'Whose dress is this?' },
          { en: 'too', zh: '太；过于', emoji: '❗', ex: 'It is too long.' },
          { en: 'trousers', zh: '裤子', emoji: '👖', ex: 'These trousers are too short.' },
          { en: 'party', zh: '聚会', emoji: '🎉', ex: 'Let us go to the party.' },
          { en: 'glove', zh: '手套', emoji: '🧤', ex: 'Whose gloves are these?' },
          { en: 'so', zh: '如此；这么', emoji: '❗', ex: 'It is so pretty.' },
          { en: 'coat', zh: '外套', emoji: '🧥', ex: 'Put on your coat.' },
          { en: 'shirt', zh: '衬衫', emoji: '👔', ex: 'The shirt is white.' },
          { en: 'sweater', zh: '毛衣', emoji: '🧶', ex: 'My sweater is warm.' },
          { en: 'jeans', zh: '牛仔裤', emoji: '👖', ex: 'I like my jeans.' },
          { en: 'shorts', zh: '短裤', emoji: '🩳', ex: 'The shorts are cool.' },
          { en: 'wrong', zh: '错的', emoji: '❌', ex: 'You are wrong.' },
          { en: 'move', zh: '移动', emoji: '🚶', ex: 'I can not move.' },
          { en: 'I think so.', zh: '我想是。', emoji: '💭' },
          { en: "What's the matter?", zh: '怎么了？', emoji: '❓' },
          { en: 'hand', zh: '手', emoji: '✋', ex: 'My hand hurts.' },
          { en: 'hurt', zh: '疼', emoji: '🤕', ex: 'My hand hurts.' }
        ],
        sentences: [
          { en: 'Whose dress is this? — It is my sister\'s.', zh: '这是谁的连衣裙？——是我姐姐的。' },
          { en: 'These trousers are too long.', zh: '这条裤子太长了。' },
          { en: 'Look at my new sweater!', zh: '看我的新毛衣！' },
          { en: 'Try this dress on. — All right.', zh: '试试这条连衣裙。——好的。' }
        ]
      },
      {
        title: "Unit 7 What's the matter?",
        words: [
          { en: 'thirsty', zh: '渴的', emoji: '🥤', ex: 'I am thirsty.' },
          { en: 'water', zh: '水', emoji: '💧', ex: 'Have some water.' },
          { en: 'ill', zh: '生病的', emoji: '🤒', ex: 'He is ill.' },
          { en: 'tired', zh: '累的', emoji: '😴', ex: 'I am tired.' },
          { en: 'Good night.', zh: '晚安。', emoji: '🌙' },
          { en: 'dear', zh: '亲爱的', emoji: '💕', ex: 'Good night, dear.' },
          { en: 'happy', zh: '开心的', emoji: '😀', ex: 'I am so happy.' },
          { en: 'Mrs', zh: '夫人；太太', emoji: '👩', ex: 'Mrs Green is a teacher.' },
          { en: 'speak', zh: '说话', emoji: '💬', ex: 'Can you speak English?' }
        ],
        sentences: [
          { en: "What's the matter? — I'm thirsty.", zh: '怎么了？——我渴了。' },
          { en: 'Have some water, dear.', zh: '亲爱的，喝点水。' },
          { en: 'I am tired. I want to go to bed.', zh: '我累了，想睡觉。' },
          { en: 'Good night, Mum.', zh: '妈妈，晚安。' }
        ]
      },
      {
        title: 'Unit 8 How are you?',
        words: [
          { en: 'may', zh: '可以', emoji: '❓', ex: 'May I come in?' },
          { en: 'come to school', zh: '来学校', emoji: '🏫', ex: 'I come to school at eight.' },
          { en: 'cold', zh: '感冒', emoji: '🤧', ex: 'I have a cold.' },
          { en: 'fever', zh: '发烧', emoji: '🌡️', ex: 'I have a fever.' },
          { en: 'hear', zh: '听见', emoji: '👂', ex: 'I can not hear you.' },
          { en: 'take care', zh: '保重', emoji: '💗' },
          { en: "I'm fine, thank you.", zh: '我很好，谢谢。', emoji: '👍' },
          { en: 'See you tomorrow.', zh: '明天见。', emoji: '👋' },
          { en: 'See you.', zh: '再见。', emoji: '👋' },
          { en: 'cough', zh: '咳嗽', emoji: '😷', ex: 'I have a cough.' },
          { en: 'headache', zh: '头疼', emoji: '🤕', ex: 'I have a headache.' },
          { en: 'Not so good.', zh: '不太好。', emoji: '😖' },
          { en: 'at school', zh: '在学校；在上课', emoji: '🏫' }
        ],
        sentences: [
          { en: 'How are you? — I am fine, thank you.', zh: '你好吗？——我很好，谢谢。' },
          { en: 'How are you? — Not so good. I have a cold.', zh: '你好吗？——不太好，我感冒了。' },
          { en: 'I have a fever and a headache.', zh: '我发烧还头疼。' },
          { en: 'Take care. See you tomorrow.', zh: '保重，明天见。' }
        ]
      }
    ]
  },

  {
    id: '5a',
    name: '五年级上册',
    edition: '旧版（新教材2026秋启用，届时重新抓取替换）',
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
    edition: '旧版（新教材启用后重新抓取替换）',
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
    edition: '旧版（新教材启用后重新抓取替换）',
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
    edition: '旧版（新教材启用后重新抓取替换）',
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
