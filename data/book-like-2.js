/* Bài Reading "sát sách" thứ hai: mỗi unit thêm một bài cùng chủ đề và dạng câu hỏi với bài Reading còn lại
   trong Complete IELTS Bands 4–5 (unit 7–10 sách chỉ có một bài, nên đây là bài thứ hai cùng dạng).
   Nội dung bài và câu hỏi đều tự viết (không chép từ sách); người, nơi chốn và số liệu là hư cấu nếu không nói khác. */
(function(){
  const TFNG = ["TRUE", "FALSE", "NOT GIVEN"], YNNG = ["YES", "NO", "NOT GIVEN"];
  const add = (uid, r) => { window.EXTRA[uid] = window.EXTRA[uid] || {}; (window.EXTRA[uid].reading = window.EXTRA[uid].reading || []).push(r); };

  /* Unit 1 · sát Reading 1 (thành phố thân thiện nhất) · Table completion + Multiple choice */
  add("u1", {
    title: "The City That Says Hello",
    est: "Sát sách · Reading 1 · khoảng 330 từ · 13 phút",
    paras: [
      "Travellers often remember a city less for its buildings than for its people. A friendly word from a stranger, help with directions or a smile in a shop can turn an ordinary trip into a happy memory. Every two years, an online travel magazine asks its readers to vote for the friendliest city they have visited, and the results are often surprising.",
      "In the most recent survey, which received more than 20,000 votes, first place went to Linmouth, a port city of about 400,000 people. It is not a famous tourist destination, and it has no great museums or palaces. Yet visitors described its residents as 'warm', 'relaxed' and 'always ready to chat'.",
      "Local people offer several explanations. Many say that the city's history as a busy harbour is important. For centuries, sailors and traders from many countries arrived there, so residents grew used to welcoming strangers. Others point to the size of the city. It is big enough to be lively but small enough that people often meet someone they know in the street.",
      "The city council has also played a part. Ten years ago, it started a project called 'Ask Me', in which volunteers wearing orange jackets stand at the station and in the main square to help visitors. The volunteers, many of whom are retired, give directions, recommend cafés and sometimes even walk tourists to their hotels. Last year, they answered more than 50,000 questions.",
      "Second place in the survey went to a mountain town famous for its festivals, where visitors praised the free music in the streets. Third was a city in the south where, according to one reader, 'the bus drivers wait for you if you are running'.",
      "Not every resident is pleased with the result. Some worry that more tourists will push up the price of housing and change the character of the city. For now, however, Linmouth is enjoying its new reputation, and the 'Ask Me' volunteers say they are busier than ever."
    ],
    note: "Bài tự viết, bám chủ đề Reading 1 của Unit 1 trong sách. Thành phố Linmouth và cuộc khảo sát là hư cấu.",
    quiz: [
      {t:"head", text:"Câu 1–7: Hoàn thành bảng. Điền MỘT TỪ VÀ/HOẶC MỘT CON SỐ trong bài."},
      {t:"gap", q:"Linmouth – long history as a busy ___", a:["harbour","harbor"], e:"Đoạn C: 'the city's history as a busy harbour'."},
      {t:"gap", q:"Linmouth – small enough to meet someone you ___ in the street", a:["know"], e:"Đoạn C."},
      {t:"gap", q:"Linmouth – 'Ask Me' volunteers wear ___ jackets", a:["orange"], e:"Đoạn D."},
      {t:"gap", q:"Linmouth – volunteers answered more than ___ questions last year", a:["50,000","50000","50 000"], e:"Đoạn D."},
      {t:"gap", q:"Mountain town – famous for its ___", a:["festivals"], e:"Đoạn E."},
      {t:"gap", q:"Mountain town – free ___ in the streets", a:["music"], e:"Đoạn E."},
      {t:"gap", q:"Southern city – the bus ___ wait for passengers who are running", a:["drivers"], e:"Đoạn E."},
      {t:"head", text:"Câu 8–10: Chọn đáp án đúng A, B hoặc C."},
      {q:"How many people voted in the survey?", o:["A about 4,000","B more than 20,000","C about 400,000"], a:1, e:"Đoạn B: 'more than 20,000 votes'. 400,000 là dân số thành phố."},
      {q:"Many of the 'Ask Me' volunteers are", o:["A university students.","B retired people.","C council workers."], a:1, e:"Đoạn D: 'many of whom are retired'."},
      {q:"Some residents are worried that", o:["A housing will become more expensive.","B the volunteers will stop working.","C fewer ships will come to the port."], a:0, e:"Đoạn F: 'push up the price of housing'."}
    ]
  });

  /* Unit 2 · sát Reading 1 (nhà thám hiểm và nhà văn) · Flow-chart completion + Short answer */
  add("u2", {
    title: "Edith Marlow: Traveller and Writer",
    est: "Sát sách · Reading 1 · khoảng 340 từ · 13 phút",
    paras: [
      "Edith Marlow was born in 1893 in a small town in the north of England. Her father was a doctor who loved maps, and as a child she spent hours tracing the routes of famous explorers with her finger. When she was nine, she became seriously ill and had to stay in bed for almost a year. Unable to go outside, she read every travel book in the house and taught herself basic French.",
      "At eighteen, Edith went to London to study history, but she left university after two years to work as a nurse during the war. The experience taught her to stay calm in difficult situations, a skill that would later save her life more than once.",
      "In 1921 she finally set off on her first journey, travelling alone by ship and train to the mountains of North Africa. There she lived with a family of shepherds for six months and learned their language. Her letters home were so lively that her brother sent them to a newspaper, which published them as a series.",
      "The success of the letters made it possible for Edith to travel further. Over the next twenty years she crossed deserts on camels, mapped river valleys that did not appear on any European map and collected hundreds of plants for a museum in London. On one journey she caught a fever and was carried for three days on a stretcher to the nearest town.",
      "Edith wrote fourteen books about her travels. Unlike many travel writers of her time, she was more interested in ordinary people than in kings or battles. She described what people ate, how they built their homes and the songs they sang at weddings.",
      "She continued to travel into her seventies, and in 1965 she received a medal from a geographical society for her maps. She died in 1971 at the age of seventy-eight. Today her books are read less often, but her photographs are kept in a museum archive and are still used by researchers."
    ],
    note: "Bài tự viết, bám chủ đề Reading 1 của Unit 2 trong sách (cuộc đời một nhà thám hiểm). Nhân vật Edith Marlow là hư cấu.",
    quiz: [
      {t:"head", text:"Câu 1–5: Hoàn thành sơ đồ cuộc đời Edith. Điền KHÔNG QUÁ HAI TỪ trong bài."},
      {t:"gap", q:"Age 9: ill in bed for a year → read travel books and taught herself ___", a:["French","basic French"], e:"Đoạn A."},
      {t:"gap", q:"Age 18: went to London to study ___", a:["history"], e:"Đoạn B."},
      {t:"gap", q:"Left university → worked as a ___ during the war", a:["nurse"], e:"Đoạn B."},
      {t:"gap", q:"1921: lived for six months with a family of ___", a:["shepherds"], e:"Đoạn C."},
      {t:"gap", q:"Her letters were published as a series in a ___", a:["newspaper"], e:"Đoạn C."},
      {t:"head", text:"Câu 6–10: Trả lời ngắn. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ."},
      {t:"gap", q:"What was her father's job? a ___", a:["doctor"], e:"Đoạn A."},
      {t:"gap", q:"What did she collect for a museum in London? ___", a:["plants","hundreds of plants"], e:"Đoạn D."},
      {t:"gap", q:"How many books did she write? ___", a:["fourteen","14"], e:"Đoạn E."},
      {t:"gap", q:"What did she receive from a geographical society in 1965? a ___", a:["medal"], e:"Đoạn F."},
      {t:"gap", q:"Which part of her work do researchers still use today? her ___", a:["photographs","photos"], e:"Đoạn F."}
    ]
  });

  /* Unit 3 · sát Reading 2 (tắc đường) · Matching headings + Sentence completion */
  add("u3", {
    title: "Stuck in Traffic",
    est: "Sát sách · Reading 2 · khoảng 280 từ · 12 phút",
    paras: [
      "Every working day, millions of drivers sit in queues of cars that hardly move. In some large cities, the average commuter now loses more than a hundred hours a year in traffic jams, which is the same as more than two full weeks at work.",
      "The obvious answer seems to be to build more roads. However, experience in many countries shows that new roads often fill up within a few years. When a road becomes faster, people who previously took the train or travelled at other times start to drive at rush hour, and the jams return. Traffic engineers call this 'induced demand'.",
      "Some cities have tried charging drivers to enter the centre at busy times. In the city of Carrow, a daily charge introduced in 2012 reduced traffic in the centre by a quarter in the first year. The money was used to buy new buses and build cycle lanes.",
      "Technology may also help. Traffic lights connected to sensors can change their timing according to the number of cars waiting, and navigation apps send drivers along less crowded routes. However, some residents complain that apps now send heavy traffic through quiet streets where children play.",
      "Another approach is to reduce the need to travel. Since many office workers began working from home for part of the week, rush-hour traffic in some cities has fallen on Mondays and Fridays, although it remains heavy in the middle of the week.",
      "Experts agree that there is no single solution. A city with good public transport, safe routes for cyclists and sensible charges for drivers may never be free of traffic jams, but it can make them shorter and less frequent."
    ],
    note: "Bài tự viết, bám chủ đề Reading 2 của Unit 3 trong sách (tắc đường). Thành phố Carrow là hư cấu.",
    quiz: (() => {
      const H = ["i The time we waste","ii Why new roads are not the answer","iii Making drivers pay","iv Help and problems from technology","v Staying at home","vi A combination of measures","vii The history of the motor car","viii Accidents on busy roads"];
      return [
        {t:"head", text:"Câu 1–6: Chọn tiêu đề đúng cho các đoạn A–F. (Có 2 tiêu đề thừa.)"},
        {q:"Paragraph A", o:H, a:0, e:"Đoạn A: mất hơn 100 giờ mỗi năm vì tắc đường."},
        {q:"Paragraph B", o:H, a:1, e:"Đoạn B: đường mới nhanh chóng lại đầy xe."},
        {q:"Paragraph C", o:H, a:2, e:"Đoạn C: thu phí vào trung tâm."},
        {q:"Paragraph D", o:H, a:3, e:"Đoạn D: đèn cảm biến và ứng dụng, nhưng có mặt trái."},
        {q:"Paragraph E", o:H, a:4, e:"Đoạn E: làm việc ở nhà."},
        {q:"Paragraph F", o:H, a:5, e:"Đoạn F: không có một giải pháp duy nhất, cần kết hợp."},
        {t:"head", text:"Câu 7–9: Hoàn thành câu. Điền MỘT TỪ trong bài."},
        {t:"gap", q:"Engineers use the term 'induced ___' for new roads that fill up again.", a:["demand"], e:"Đoạn B."},
        {t:"gap", q:"In Carrow, traffic in the centre fell by a ___ in the first year.", a:["quarter"], e:"Đoạn C."},
        {t:"gap", q:"Rush-hour traffic has fallen on Mondays and ___.", a:["Fridays"], e:"Đoạn E."}
      ];
    })()
  });

  /* Unit 4 · sát Reading 2 (lịch sử một trò chơi trí tuệ) · Summary completion + Multiple choice */
  add("u4", {
    title: "Squares and Clues",
    est: "Sát sách · Reading 2 · khoảng 310 từ · 12 phút",
    paras: [
      "Every day, millions of people around the world pick up a pencil or open an app to solve a crossword. It is one of the most popular puzzles ever invented, yet it is just over a hundred years old.",
      "The first crossword was published in a New York newspaper, the New York World, in December 1913. Its creator, Arthur Wynne, was a journalist who had been born in Liverpool, England. He had been asked to invent a new game for the Christmas edition of the paper's weekend section. His puzzle was shaped like a diamond and had no black squares, and he called it a 'word-cross'.",
      "Readers loved it, and the puzzle quickly became a weekly feature. A few weeks later, a printing mistake changed the name to 'cross-word', and the new name stayed. Over the next ten years, other newspapers began to publish their own puzzles, adding black squares and numbered clues.",
      "In 1924, a small new company in New York published the first book of crosswords, with a pencil attached to each copy. It sold hundreds of thousands of copies and helped to start a national craze. Crosswords appeared on trains, in offices and even in popular songs, and some libraries reported that their dictionaries were being used so much that they were wearing out.",
      "Not everyone approved. Some critics said that the puzzles were a waste of time and were making people forget their work. In Britain, newspapers were slower to accept them, and The Times did not print its first crossword until 1930.",
      "Today, crosswords come in many forms. American puzzles usually have simple definitions as clues, while British 'cryptic' crosswords use clever wordplay that can take years to learn. Some researchers believe that doing puzzles regularly may help to keep the brain active in old age, although the evidence is still not clear."
    ],
    note: "Bài tự viết, bám chủ đề Reading 2 của Unit 4 trong sách (lịch sử ra đời một trò chơi trí tuệ). Nội dung dựa trên lịch sử ô chữ, được kể lại giản lược.",
    quiz: [
      {t:"head", text:"Câu 1–5: Hoàn thành tóm tắt. Điền MỘT TỪ trong bài."},
      {t:"gap", q:"The first crossword was created by Arthur Wynne, a ___ born in Liverpool.", a:["journalist"], e:"Đoạn B."},
      {t:"gap", q:"He wrote it for the ___ edition of a New York newspaper.", a:["Christmas"], e:"Đoạn B."},
      {t:"gap", q:"His first puzzle was shaped like a ___.", a:["diamond"], e:"Đoạn B."},
      {t:"gap", q:"Its name changed because of a printing ___.", a:["mistake","error"], e:"Đoạn C: 'a printing mistake'."},
      {t:"gap", q:"Each copy of the first crossword book came with a ___.", a:["pencil"], e:"Đoạn D."},
      {t:"head", text:"Câu 6–8: Chọn đáp án đúng A, B hoặc C."},
      {q:"Some critics in the 1920s said crosswords", o:["A were too difficult.","B wasted people's time.","C were bad for newspapers."], a:1, e:"Đoạn E: 'a waste of time'."},
      {q:"British cryptic crosswords are different because they", o:["A use wordplay in the clues.","B have no black squares.","C are only printed in The Times."], a:0, e:"Đoạn F."},
      {q:"What does the writer say about puzzles and the brain?", o:["A They definitely prevent memory loss.","B The evidence is not yet clear.","C They can make older people tired."], a:1, e:"Đoạn F: 'the evidence is still not clear'."}
    ]
  });

  /* Unit 5 · sát Reading 1 (vòng đời một loài chim) · Sentence completion + Multiple choice */
  add("u5", {
    title: "The Life of the Kingfisher",
    est: "Sát sách · Reading 1 · khoảng 340 từ · 13 phút",
    paras: [
      "With its bright blue back and orange chest, the common kingfisher is one of the most colourful birds in Europe. Yet many people who live near rivers have never seen one, because it is small, only about sixteen centimetres long, and it flies very fast, low over the water.",
      "Kingfishers live mainly on fish. A bird sits on a branch above slow-moving water, watching carefully. When it sees a small fish, it dives straight in, catches the fish in its beak and returns to the branch. There it hits the fish against the wood before swallowing it head first, so that the fins and scales do not stick in its throat.",
      "In spring, the male tries to attract a female by offering her a fish. If she accepts it, the pair begin to build a nest. Unlike most birds, kingfishers do not use twigs or grass. Instead, both birds dig a tunnel in a steep, sandy riverbank, using their beaks to loosen the earth and their feet to push it out. The tunnel can be up to a metre long and ends in a small room.",
      "The female lays around six or seven white eggs, and both parents take turns to keep them warm. After about three weeks the chicks hatch, and the adults then have to catch more than a hundred fish a day to feed them. The young birds leave the nest when they are around twenty-five days old, and within a few days they must learn to catch fish for themselves.",
      "Life is hard for young kingfishers. Many fail to learn to fish quickly enough, and others are killed by cold weather. In a very hard winter, when rivers and lakes freeze, large numbers may die. Pollution and the loss of natural riverbanks are also serious threats.",
      "However, kingfishers can recover quickly after a bad year, because a pair may raise two or even three families in one summer. Where rivers are kept clean and banks are left natural, these brilliant birds can still be seen."
    ],
    note: "Bài tự viết, bám chủ đề Reading 1 của Unit 5 trong sách (vòng đời của một loài chim châu Âu).",
    quiz: [
      {t:"head", text:"Câu 1–7: Hoàn thành câu. Điền KHÔNG QUÁ HAI TỪ VÀ/HOẶC MỘT CON SỐ trong bài."},
      {t:"gap", q:"A kingfisher is about ___ centimetres long.", a:["sixteen","16"], e:"Đoạn A."},
      {t:"gap", q:"It swallows fish ___ so that they do not stick in its throat.", a:["head first","head-first"], e:"Đoạn B."},
      {t:"gap", q:"To attract a female, the male offers her ___.", a:["a fish","fish"], e:"Đoạn C."},
      {t:"gap", q:"The nest is at the end of a tunnel in a sandy ___.", a:["riverbank","river bank"], e:"Đoạn C."},
      {t:"gap", q:"The tunnel can be up to ___ long.", a:["a metre","one metre","1 metre","a meter","one meter","1 meter","1m","1 m"], e:"Đoạn C: 'up to a metre long'."},
      {t:"gap", q:"Parents must catch more than ___ fish a day for their chicks.", a:["a hundred","one hundred","100"], e:"Đoạn D."},
      {t:"gap", q:"Young birds leave the nest at around ___ days old.", a:["twenty-five","twenty five","25"], e:"Đoạn D."},
      {t:"head", text:"Câu 8–9: Chọn đáp án đúng A, B hoặc C."},
      {q:"Kingfishers build their nests", o:["A from grass and twigs.","B in holes in trees.","C in tunnels in the ground."], a:2, e:"Đoạn C: chúng đào hang ở bờ sông, không dùng cành hay cỏ."},
      {q:"Why can kingfisher numbers recover quickly after a bad year?", o:["A They move to warmer rivers.","B A pair may raise several families in a summer.","C They live for many years."], a:1, e:"Đoạn F."}
    ]
  });

  /* Unit 6 · sát Reading 1 (thay đổi bản thân) · Yes / No / Not Given + Short answer */
  add("u6", {
    title: "Starting Again at Forty",
    est: "Sát sách · Reading 1 · khoảng 310 từ · 13 phút",
    paras: [
      "When I told my friends that I was leaving my job as an accountant to train as a primary school teacher, most of them thought I was making a mistake. I was forty-one, I had a good salary, and I would be starting at the bottom again. Three years later, I believe it was the best decision I have ever made.",
      "I had not been unhappy in my old job exactly, but I had stopped learning anything. Every year looked the same as the one before. I think this feeling is far more common than people admit, especially among those in their thirties and forties.",
      "Changing career is not easy, and I would not recommend doing it suddenly. Before I resigned, I spent a year volunteering in a school one afternoon a week, to make sure that I really enjoyed working with children. I also saved enough money to live on for the twelve months of my training course.",
      "The hardest part was not the money but my confidence. In my first weeks in the classroom, I felt clumsy and slow next to colleagues who were twenty years younger. However, I soon discovered that my age had some advantages. I was calmer with difficult pupils, and parents seemed to trust me more quickly.",
      "Some people say that employers do not want to hire older trainees. In my experience, this is simply untrue: I was offered a job by the first school I applied to. What employers want, I believe, is evidence that you are committed.",
      "Not everyone who changes career will be as lucky as I was. But I am convinced that it is better to try and fail than to spend the next twenty years wondering what might have happened. Our working lives are now longer than ever, and it seems strange to choose a path at twenty-one and never question it."
    ],
    note: "Bài tự viết, bám chủ đề Reading 1 của Unit 6 trong sách (dám thay đổi). Người viết là nhân vật hư cấu.",
    quiz: [
      {t:"head", text:"Câu 1–7: Do the statements agree with the views of the writer? YES / NO / NOT GIVEN"},
      {q:"The writer regrets leaving the job as an accountant.", o:YNNG, a:1, e:"Đoạn A: 'the best decision I have ever made'."},
      {q:"Many people in their thirties and forties feel they have stopped learning at work.", o:YNNG, a:0, e:"Đoạn B: 'far more common than people admit'."},
      {q:"People should change career as soon as they decide to.", o:YNNG, a:1, e:"Đoạn C: 'I would not recommend doing it suddenly'."},
      {q:"Teacher training courses are too expensive.", o:YNNG, a:2, e:"Bài chỉ nói người viết tiết kiệm đủ tiền sống trong 12 tháng, không đánh giá học phí."},
      {q:"Older trainees usually find it hard to get a teaching job.", o:YNNG, a:1, e:"Đoạn E: 'this is simply untrue'."},
      {q:"Teachers earn more than accountants.", o:YNNG, a:2, e:"Bài không so sánh lương hai nghề."},
      {q:"People should be prepared to question their career choices.", o:YNNG, a:0, e:"Đoạn F: thật lạ khi chọn con đường năm 21 tuổi rồi không bao giờ đặt câu hỏi."},
      {t:"head", text:"Câu 8–10: Trả lời ngắn. Điền MỘT TỪ trong bài."},
      {t:"gap", q:"Before resigning, the writer volunteered in a school one afternoon a ___.", a:["week"], e:"Đoạn C."},
      {t:"gap", q:"What was the hardest part of the change? the writer's ___", a:["confidence"], e:"Đoạn D."},
      {t:"gap", q:"Employers want evidence that you are ___.", a:["committed"], e:"Đoạn E."}
    ]
  });

  /* Unit 7 · sát Reading (kỹ năng đọc) – bài thứ hai cùng dạng · Matching information + Table completion */
  add("u7", {
    title: "Libraries on the Move",
    est: "Sát sách · Reading (bài 2) · khoảng 330 từ · 13 phút",
    paras: [
      "For people who live far from a town, visiting a library can be almost impossible. In many rural areas there is no bus, and the nearest library may be a day's journey away. To solve this problem, libraries in many parts of the world have found a simple answer: if readers cannot come to the books, the books must go to the readers.",
      "The most familiar example is the library bus. In the fictional region of Westmoor, two large buses, each carrying around 3,000 books, visit forty villages every fortnight. Each bus also has free internet and a small corner where children can sit and read. The service began in 1985, and today it lends more than 100,000 books a year.",
      "In other places, the transport is more unusual. In a dry northern area of one African country, a library travels on the backs of camels, because the sandy tracks are impossible for cars. Each camel can carry boxes holding about 400 books, and the librarians set up a tent under a tree when they arrive.",
      "Rivers can be roads too. On a wide river in South America, a boat library stops at small communities along the banks. Because many of the readers are farmers who work in the day, the boat often stays until late in the evening, and it lends torches as well as books.",
      "These services do much more than lend books. Librarians often teach adults to use computers, help them to fill in official forms and run reading clubs for children. In Westmoor, a survey found that children who used the library bus read twice as many books a year as children who did not.",
      "However, mobile libraries are expensive to run. Fuel, repairs and staff all cost money, and in difficult times they are often the first services to be cut. Supporters argue that this is a mistake, because for many families a mobile library is the only way to borrow a book."
    ],
    note: "Bài tự viết, cùng chủ đề kỹ năng đọc và cùng dạng câu hỏi với bài Reading của Unit 7. Vùng Westmoor và các số liệu là hư cấu.",
    quiz: (() => {
      const L = ["A","B","C","D","E","F"];
      return [
        {t:"head", text:"Câu 1–5: Đoạn nào (A–F) chứa thông tin sau?"},
        {q:"a reason why mobile libraries may lose their money", o:L, a:5, e:"Đoạn F: khi khó khăn, đây thường là dịch vụ bị cắt đầu tiên."},
        {q:"the year when one service started", o:L, a:1, e:"Đoạn B: 'The service began in 1985'."},
        {q:"the problem that mobile libraries are designed to solve", o:L, a:0, e:"Đoạn A: thư viện gần nhất có thể cách cả ngày đường."},
        {q:"a comparison of how much two groups of children read", o:L, a:4, e:"Đoạn E: trẻ dùng xe thư viện đọc gấp đôi."},
        {q:"a service that adapts its hours to readers' working day", o:L, a:3, e:"Đoạn D: thuyền ở lại đến tối vì người đọc làm nông ban ngày."},
        {t:"head", text:"Câu 6–10: Hoàn thành bảng. Điền MỘT TỪ VÀ/HOẶC MỘT CON SỐ trong bài."},
        {t:"gap", q:"Bus – each bus carries around ___ books", a:["3,000","3000","3 000"], e:"Đoạn B."},
        {t:"gap", q:"Bus – visits forty villages every ___", a:["fortnight"], e:"Đoạn B."},
        {t:"gap", q:"Camel – used because the sandy ___ are impossible for cars", a:["tracks"], e:"Đoạn C."},
        {t:"gap", q:"Camel – librarians set up a ___ under a tree", a:["tent"], e:"Đoạn C."},
        {t:"gap", q:"Boat – lends ___ as well as books", a:["torches"], e:"Đoạn D."}
      ];
    })()
  });

  /* Unit 8 · sát Reading (điểm du lịch) – bài thứ hai cùng dạng · Summary completion + Matching features */
  add("u8", {
    title: "A Night at the Museum",
    est: "Sát sách · Reading (bài 2) · khoảng 310 từ · 13 phút",
    paras: [
      "For many years, visitor numbers at the National History Museum in the city of Harbourne were falling. Families came during the school holidays, but on ordinary days the large halls were almost empty. In 2018, the museum decided to try something different: it would stay open until midnight on the last Friday of every month.",
      "The first 'Late Friday' was a surprise success. More than 4,000 people came, most of them aged between twenty and thirty-five, a group that the museum had rarely attracted before. Visitors could listen to live music among the dinosaur skeletons, take part in short talks by scientists and buy food from stalls in the main hall.",
      "'We realised that many young adults were not bored by museums,' says the director, Helen Shaw. 'They were simply at work when we were open.' She believes that museums must change their opening hours to fit modern lifestyles, and the museum now also opens late on several Wednesdays in summer.",
      "Not everyone was enthusiastic at first. Some staff worried that noisy crowds might damage the exhibits. Paul Grant, who is responsible for protecting the collection, admits that he was against the idea. 'In the end, we put the most delicate objects behind glass and increased the number of guards,' he says. 'There has not been a single accident.'",
      "Researchers have also been studying the events. Dr Sara Lind, who studies how people behave in museums, found that night visitors stay twice as long as daytime visitors. However, she warns that some people come mainly for the music and food. 'The challenge is to make sure they also learn something,' she says.",
      "Today, more than thirty museums in the country hold similar events. Ticket money from the late openings now pays for free school visits during the day, so the museum's new night-time visitors are helping its youngest ones."
    ],
    note: "Bài tự viết, cùng chủ đề điểm tham quan và cùng dạng câu hỏi với bài Reading của Unit 8. Bảo tàng Harbourne và các nhân vật là hư cấu.",
    quiz: (() => {
      const F = ["A Helen Shaw","B Paul Grant","C Dr Sara Lind"];
      return [
        {t:"head", text:"Câu 1–6: Hoàn thành tóm tắt. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ trong bài."},
        {t:"gap", q:"Since 2018, the museum has stayed open until ___ once a month.", a:["midnight"], e:"Đoạn A."},
        {t:"gap", q:"More than ___ people came to the first event.", a:["4,000","4000","4 000"], e:"Đoạn B."},
        {t:"gap", q:"Visitors could hear live music among the dinosaur ___.", a:["skeletons"], e:"Đoạn B."},
        {t:"gap", q:"In summer, the museum also opens late on some ___.", a:["Wednesdays"], e:"Đoạn C."},
        {t:"gap", q:"The most delicate objects were put behind ___.", a:["glass"], e:"Đoạn D."},
        {t:"gap", q:"Money from the late events pays for free ___ during the day.", a:["school visits"], e:"Đoạn F."},
        {t:"head", text:"Câu 7–11: Nối mỗi ý với đúng người (A, B hoặc C). Một người có thể được chọn nhiều lần."},
        {q:"Night visitors spend more time in the museum.", o:F, a:2, e:"Đoạn E: Dr Lind."},
        {q:"Opening hours should match the way people live today.", o:F, a:0, e:"Đoạn C: Helen Shaw."},
        {q:"The late events have caused no damage.", o:F, a:1, e:"Đoạn D: Paul Grant."},
        {q:"Some visitors may not learn very much.", o:F, a:2, e:"Đoạn E: Dr Lind."},
        {q:"Young adults were not visiting because of their jobs.", o:F, a:0, e:"Đoạn C: Helen Shaw."}
      ];
    })()
  });

  /* Unit 9 · sát Reading (nước) – bài thứ hai cùng dạng · Matching headings + Sentence completion + Pick from a list */
  add("u9", {
    title: "The Water We Cannot See",
    est: "Sát sách · Reading (bài 2) · khoảng 300 từ · 12 phút",
    paras: [
      "When people think about saving water, they usually think about taking shorter showers or turning off the tap while brushing their teeth. These are good habits, but they deal with only a small part of the water we use. Most of our water use is hidden in the things we eat, wear and buy.",
      "Experts call this hidden water our 'water footprint'. It includes all the water needed to produce something, from growing the crops to washing and packaging the product. For example, it takes around 140 litres of water to produce the coffee beans for one cup of coffee, mostly to grow the coffee plants.",
      "Food produced from animals usually has the largest footprint. A kilogram of beef is often said to need around 15,000 litres, because cattle eat large amounts of grain and grass that must be grown first. A kilogram of rice needs about 2,500 litres, while most vegetables need far less.",
      "Clothes are also thirsty. Cotton plants need a lot of water, especially in hot, dry regions where farmers must use irrigation. One cotton T-shirt can use more than 2,000 litres, about as much as one person drinks in three years.",
      "Understanding water footprints can help us make better choices. Eating less meat, buying fewer clothes and wasting less food can save far more water than any change in the bathroom. A third of all food produced in the world is never eaten, which means that the water used to grow it is wasted too.",
      "Some companies now print the water footprint of their products on labels, and several countries use the idea to decide which crops to grow. Experts warn, however, that the numbers are only estimates and can change greatly depending on where and how a product is made."
    ],
    note: "Bài tự viết, cùng chủ đề tiết kiệm nước và cùng dạng câu hỏi với bài Reading của Unit 9. Các con số là ước tính thường được trích dẫn, có thể khác nhau tuỳ nguồn.",
    quiz: (() => {
      const H = ["i A definition and an example","ii The biggest users of water","iii Water in what we wear","iv Small changes, big savings","v How rain is collected","vi A history of farming"];
      return [
        {t:"head", text:"Câu 1–4: Chọn tiêu đề đúng cho các đoạn B–E. (Có 2 tiêu đề thừa.)"},
        {q:"Paragraph B", o:H, a:0, e:"Đoạn B giải thích 'water footprint' và ví dụ tách cà phê."},
        {q:"Paragraph C", o:H, a:1, e:"Đoạn C: thực phẩm từ động vật dùng nhiều nước nhất."},
        {q:"Paragraph D", o:H, a:2, e:"Đoạn D: quần áo, áo phông cotton."},
        {q:"Paragraph E", o:H, a:3, e:"Đoạn E: ăn ít thịt, mua ít quần áo tiết kiệm được nhiều nước."},
        {t:"head", text:"Câu 5–8: Hoàn thành câu. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ trong bài."},
        {t:"gap", q:"Producing the coffee for one cup takes around ___ litres of water.", a:["140","one hundred and forty"], e:"Đoạn B."},
        {t:"gap", q:"One kilogram of rice needs about ___ litres.", a:["2,500","2500","2 500"], e:"Đoạn C."},
        {t:"gap", q:"In hot, dry regions, cotton farmers must use ___.", a:["irrigation"], e:"Đoạn D."},
        {t:"gap", q:"A ___ of all food produced in the world is never eaten.", a:["third"], e:"Đoạn E."},
        {t:"head", text:"Câu 9–10: Chọn HAI đáp án."},
        {t:"pick", q:"Which TWO ways of saving a lot of water does the writer mention?", o:["A eating less meat","B taking shorter showers","C buying fewer clothes","D drinking less coffee","E washing clothes by hand"], a:[0,2], e:"Đoạn E: ăn ít thịt và mua ít quần áo tiết kiệm hơn mọi thay đổi trong phòng tắm."}
      ];
    })()
  });

  /* Unit 10 · sát Reading (công trình kiến trúc lạ) – bài thứ hai cùng dạng · Multiple choice + Matching sentence endings + Yes / No / Not Given */
  add("u10", {
    title: "The Tower Covered in Trees",
    est: "Sát sách · Reading (bài 2) · khoảng 350 từ · 14 phút",
    paras: [
      "From a distance, the new apartment tower in the city of Delvin looks more like a hill than a building. Its balconies hold more than 800 trees and 5,000 smaller plants, which cover the walls from the second floor to the twenty-fifth. The architects describe it as 'a vertical forest'.",
      "The plants are more than decoration. They provide shade in summer, which keeps the apartments cooler and reduces the need for air conditioning. In winter, when the trees lose their leaves, sunlight can reach the rooms. The plants also absorb dust and some of the noise from the busy road below, and they have attracted birds and butterflies that had not been seen in the city centre for years.",
      "Building the tower was a serious technical challenge. Each tree had to be grown for two years in a special nursery so that it would be ready for life at height. The balconies were made extra thick to carry the weight of soil and water, and some of the largest trees are tied to the building with steel cables so that strong winds cannot blow them over.",
      "Looking after the plants is a job for specialists. Gardeners, who are trained to work with ropes like climbers, come down the outside of the building three times a year to cut the branches. Water for the plants comes from a system that collects and cleans used water from the apartments.",
      "Critics point out that the apartments are among the most expensive in the city, so only wealthy residents can enjoy the benefits. Others question whether the energy used to build and maintain such a complex structure is really balanced by the trees.",
      "I accept that the tower is not a perfect model. But it has changed the conversation about what a city building can be. Instead of asking only how tall or how cheap a building is, people in Delvin are now asking how much life it supports. In my view, every new building in a crowded city should give something back to nature, even if it is only a green roof."
    ],
    note: "Bài tự viết, cùng chủ đề kiến trúc và cùng dạng câu hỏi với bài Reading của Unit 10. Thành phố Delvin và toà tháp là hư cấu.",
    quiz: (() => {
      const E = ["A sunlight can reach the rooms.","B the balconies were made extra thick.","C only rich people can enjoy the benefits.","D the gardeners work with ropes.","E birds have left the city centre."];
      return [
        {t:"head", text:"Câu 1–2: Chọn đáp án đúng A, B hoặc C."},
        {q:"How many trees grow on the balconies?", o:["A about 25","B more than 800","C about 5,000"], a:1, e:"Đoạn A: 5,000 là số cây nhỏ, 25 là số tầng."},
        {q:"Why was each tree grown in a nursery first?", o:["A to make it cheaper","B to prepare it for life at height","C to choose the most beautiful ones"], a:1, e:"Đoạn C."},
        {t:"head", text:"Câu 3–6: Nối phần đầu câu với phần cuối đúng (A–E)."},
        {q:"Because the trees lose their leaves in winter,", o:E, a:0, e:"Đoạn B."},
        {q:"To carry the weight of soil and water,", o:E, a:1, e:"Đoạn C."},
        {q:"To reach the plants on the outside of the tower,", o:E, a:3, e:"Đoạn D."},
        {q:"Because the apartments are so expensive,", o:E, a:2, e:"Đoạn E."},
        {t:"head", text:"Câu 7–10: Do the statements agree with the views of the writer? YES / NO / NOT GIVEN"},
        {q:"The tower is a perfect example for all future buildings.", o:YNNG, a:1, e:"Đoạn F: 'not a perfect model'."},
        {q:"The tower has made people think differently about buildings.", o:YNNG, a:0, e:"Đoạn F: 'changed the conversation'."},
        {q:"The tower cost less to build than an ordinary tower.", o:YNNG, a:2, e:"Bài không nói chi phí xây dựng."},
        {q:"Every new city building should include something for nature.", o:YNNG, a:0, e:"Đoạn F: 'should give something back to nature'."}
      ];
    })()
  });
})();
