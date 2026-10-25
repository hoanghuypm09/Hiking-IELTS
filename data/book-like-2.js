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

  /* Unit 7 · sát Reading (đọc nhanh) – bài thứ hai cùng dạng · Matching information + Table completion */
  add("u7", {
    title: "Paper or Screen?",
    est: "Sát sách · Reading (bài 2) · khoảng 330 từ · 13 phút",
    paras: [
      "More and more of what we read now appears on a screen. Students download textbooks, office workers read reports on laptops and many people read the news on their phones. But does reading on a screen affect how well we understand and remember?",
      "In a study at Harwell University, 120 students read two texts, one on paper and one on a tablet. Afterwards, they answered questions about what they had read. For short, simple texts there was almost no difference. For longer texts with complex arguments, however, students who read on paper scored about ten percent higher.",
      "The researchers suggest several reasons. On screen, people tend to skim, jumping from line to line in search of key words. They also scroll, which makes it harder to remember where on the page a piece of information appeared. With a printed book, readers can feel how far through the text they are, and this seems to help them build a 'map' of it in their mind.",
      "Interestingly, the students themselves did not notice the difference. Most said that they had understood the screen text just as well, and many said they preferred it because it was lighter to carry and cheaper to buy. This confidence may be part of the problem: readers who think they have understood are less likely to slow down and check.",
      "Screens do have real advantages. They allow readers to change the size of the letters, which helps people with poor eyesight, and they make it easy to look up the meaning of a word instantly. Audio and video can also be added, which is useful when learning languages.",
      "The researchers do not recommend giving up screens. Instead, they suggest that readers choose the format to suit the task. For quick news or messages, a phone is fine. For a difficult text that must be studied carefully, it may be better to print it out, or at least to read slowly and take notes by hand."
    ],
    note: "Bài tự viết, cùng chủ đề kỹ năng đọc và cùng dạng câu hỏi với bài Reading của Unit 7. Đại học Harwell và nghiên cứu là hư cấu.",
    quiz: (() => {
      const L = ["A","B","C","D","E","F"];
      return [
        {t:"head", text:"Câu 1–5: Đoạn nào (A–F) chứa thông tin sau?"},
        {q:"a description of how the study was carried out", o:L, a:1, e:"Đoạn B: 120 sinh viên đọc hai bài, một trên giấy, một trên máy tính bảng."},
        {q:"a reason why readers may not check their understanding", o:L, a:3, e:"Đoạn D: người nghĩ mình đã hiểu thì ít khi đọc chậm lại để kiểm tra."},
        {q:"advice about choosing between paper and screen", o:L, a:5, e:"Đoạn F."},
        {q:"a benefit of screens for people who cannot see well", o:L, a:4, e:"Đoạn E: đổi cỡ chữ giúp người mắt kém."},
        {q:"examples of different people who read on screens", o:L, a:0, e:"Đoạn A: sinh viên, nhân viên văn phòng, người đọc tin."},
        {t:"head", text:"Câu 6–10: Hoàn thành bảng. Điền MỘT TỪ VÀ/HOẶC MỘT CON SỐ trong bài."},
        {t:"gap", q:"Paper – on long texts, students scored about ___ percent higher", a:["ten","10"], e:"Đoạn B."},
        {t:"gap", q:"Paper – feeling how far through the text you are helps build a mental ___", a:["map"], e:"Đoạn C."},
        {t:"gap", q:"Screen – readers tend to ___ and scroll", a:["skim"], e:"Đoạn C."},
        {t:"gap", q:"Screen – students liked it because it was lighter and ___", a:["cheaper"], e:"Đoạn D."},
        {t:"gap", q:"Screen – audio and video are useful for learning ___", a:["languages"], e:"Đoạn E."}
      ];
    })()
  });

  /* Unit 8 · sát Reading (những nơi sắp biến mất) – bài thứ hai cùng dạng · Summary completion + Matching features */
  add("u8", {
    title: "Before the Ice Is Gone",
    est: "Sát sách · Reading (bài 2) · khoảng 360 từ · 14 phút",
    paras: [
      "Every summer, thousands of visitors travel to the Valder Glacier in the mountains of the north. They walk across the ice with guides, take photos at the edge of deep blue cracks and listen to the sound of melting water. Many of them say the same thing: they want to see the glacier 'before it is gone'.",
      "The glacier is shrinking fast. Since 1980 it has lost almost half of its length, and scientists expect most of the ice to disappear by the end of the century. 'The changes are visible from one year to the next,' says Dr Lena Ortiz, a climate scientist who has measured the glacier for twenty years. 'A path that was on the ice when I started is now on bare rock.'",
      "This type of travel is sometimes called 'last-chance tourism', and it is growing. Coral reefs, Arctic sea ice and some small islands attract visitors for the same reason. For local businesses, it brings welcome income. Tom Reyes, who runs a guiding company in the valley, employs fifteen people in summer, compared with three a decade ago. 'People come because they are worried about the glacier,' he says. 'We try to make sure they go home understanding why it is melting.'",
      "However, there is an obvious problem. Most visitors arrive by plane and car, and the fuel they use adds to the climate change that is destroying the ice. Mia Chen, a tourism researcher, calls this 'a paradox'. 'The more popular these places become, the faster they may disappear,' she says. She believes that visitors should stay longer and travel less often, rather than taking many short trips.",
      "Some changes are already happening. The valley now has an electric bus from the nearest railway station, and guiding companies have agreed to limit the number of groups on the ice each day. A visitor centre, opened last year, uses photographs from the past hundred years to show how far the glacier has retreated.",
      "Dr Ortiz is cautiously hopeful. 'Tourism alone won't save the glacier,' she says. 'But if people leave here feeling that their own choices matter, the visit may do more good than harm.'"
    ],
    note: "Bài tự viết, cùng chủ đề 'những nơi sắp biến mất' và cùng dạng câu hỏi với bài Reading của Unit 8. Sông băng Valder và các nhân vật là hư cấu.",
    quiz: (() => {
      const F = ["A Dr Lena Ortiz","B Tom Reyes","C Mia Chen"];
      return [
        {t:"head", text:"Câu 1–6: Hoàn thành tóm tắt. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ trong bài."},
        {t:"gap", q:"Since 1980, the Valder Glacier has lost almost ___ of its length.", a:["half"], e:"Đoạn B."},
        {t:"gap", q:"Travel to places that may soon disappear is called ___ tourism.", a:["last-chance","last chance"], e:"Đoạn C."},
        {t:"gap", q:"One guiding company now employs ___ people in summer.", a:["fifteen","15"], e:"Đoạn C."},
        {t:"gap", q:"Most visitors arrive by plane and ___.", a:["car"], e:"Đoạn D."},
        {t:"gap", q:"Visitors can now take an electric ___ from the railway station.", a:["bus"], e:"Đoạn E."},
        {t:"gap", q:"The visitor centre uses old ___ to show how the glacier has changed.", a:["photographs","photos"], e:"Đoạn E."},
        {t:"head", text:"Câu 7–11: Nối mỗi ý kiến với đúng người (A, B hoặc C). Một người có thể được chọn nhiều lần."},
        {q:"Tourists should make fewer but longer trips.", o:F, a:2, e:"Đoạn D: Mia Chen."},
        {q:"Changes to the glacier can be seen every year.", o:F, a:0, e:"Đoạn B: Dr Ortiz."},
        {q:"Visitors should learn why the ice is melting.", o:F, a:1, e:"Đoạn C: Tom Reyes."},
        {q:"Popularity may make these places disappear faster.", o:F, a:2, e:"Đoạn D: Mia Chen."},
        {q:"A visit could have a positive effect overall.", o:F, a:0, e:"Đoạn F: Dr Ortiz."}
      ];
    })()
  });

  /* Unit 9 · sát Reading (nước) – bài thứ hai cùng dạng · Matching headings + Sentence completion + Pick from a list */
  add("u9", {
    title: "Catching Water from the Air",
    est: "Sát sách · Reading (bài 2) · khoảng 290 từ · 12 phút",
    paras: [
      "In some of the driest places on Earth, it almost never rains, yet the air is full of water. Along certain desert coasts, thick fog rolls in from the ocean on many mornings of the year. For centuries, plants and insects there have survived by collecting tiny drops of water from this fog. Now people are doing the same.",
      "The idea is simple. A large net made of fine plastic mesh is stretched between two posts on a hillside facing the sea. As the fog blows through, water drops stick to the mesh, join together and run down into a pipe at the bottom. From there, the water flows into a storage tank.",
      "In the coastal village of Punta Seca, a project with thirty nets was started in 2012. On a good day, each net can collect up to two hundred litres of water. Before the nets were built, all drinking water had to be brought by lorry from a town sixty kilometres away, and it was expensive.",
      "The results have changed daily life. Families now have water for drinking and cooking, and a small community garden grows vegetables and herbs. Some residents have even started making beer from fog water and selling it to tourists, which brings extra income to the village.",
      "Fog nets are not a solution everywhere. They only work in places where fog is frequent and the wind blows it towards the hills. Strong winds can damage the nets, and they must be cleaned regularly, because dust and bird droppings block the mesh.",
      "Scientists are now testing new materials that collect more water from the same amount of fog. If they succeed, the technology could help many more communities in dry regions to find water above their heads."
    ],
    note: "Bài tự viết, cùng chủ đề nước sạch và cùng dạng câu hỏi với bài Reading của Unit 9. Làng Punta Seca là hư cấu.",
    quiz: (() => {
      const H = ["i How a fog net works","ii The first nets in one village","iii New opportunities for residents","iv Limitations of the method","v The history of desert farming","vi Why it rains less than before"];
      return [
        {t:"head", text:"Câu 1–4: Chọn tiêu đề đúng cho các đoạn B–E. (Có 2 tiêu đề thừa.)"},
        {q:"Paragraph B", o:H, a:0, e:"Đoạn B mô tả cách lưới hứng sương hoạt động."},
        {q:"Paragraph C", o:H, a:1, e:"Đoạn C: dự án 30 lưới đầu tiên ở Punta Seca."},
        {q:"Paragraph D", o:H, a:2, e:"Đoạn D: vườn rau, làm bia bán cho khách."},
        {q:"Paragraph E", o:H, a:3, e:"Đoạn E: chỉ dùng được ở một số nơi, dễ hỏng, phải làm sạch."},
        {t:"head", text:"Câu 5–8: Hoàn thành câu. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ trong bài."},
        {t:"gap", q:"The nets are made of fine plastic ___.", a:["mesh"], e:"Đoạn B."},
        {t:"gap", q:"On a good day, one net can collect up to ___ litres.", a:["two hundred","200"], e:"Đoạn C."},
        {t:"gap", q:"Before the project, drinking water was brought by ___.", a:["lorry","truck"], e:"Đoạn C."},
        {t:"gap", q:"The nets must be cleaned because dust and bird ___ block the mesh.", a:["droppings"], e:"Đoạn E."},
        {t:"head", text:"Câu 9–10: Chọn HAI đáp án."},
        {t:"pick", q:"Which TWO uses of fog water in Punta Seca are mentioned?", o:["A growing vegetables","B making beer","C washing cars","D cooling buildings","E filling a swimming pool"], a:[0,1], e:"Đoạn D."}
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
