/* Bài Reading "sát sách": mỗi unit thêm một bài cùng chủ đề, độ dài và dạng câu hỏi với một bài Reading
   trong Complete IELTS Bands 4–5. Nội dung bài và câu hỏi đều tự viết (không chép từ sách);
   người, nơi chốn và số liệu khảo sát trong bài là hư cấu nếu không nói khác. */
(function(){
  const TFNG = ["TRUE", "FALSE", "NOT GIVEN"], YNNG = ["YES", "NO", "NOT GIVEN"];
  const add = (uid, r) => { window.EXTRA[uid] = window.EXTRA[uid] || {}; (window.EXTRA[uid].reading = window.EXTRA[uid].reading || []).push(r); };

  /* Unit 1 · sát Reading 2 (đất nước hạnh phúc nhất) · Note completion + Table completion */
  add("u1", {
    title: "What Makes a Country Happy?",
    est: "Sát sách · Reading 2 · khoảng 360 từ · 14 phút",
    paras: [
      "Every year, researchers ask thousands of people around the world a simple question: on a scale from zero to ten, how good is your life at the moment? The answers are used to make a list of the happiest countries. For several years, small countries in northern Europe have been at the top of the list, while some much richer nations are surprisingly far down.",
      "Money is clearly important, but only up to a point. People who cannot pay for food or housing are rarely happy. However, once people have enough to live comfortably, extra income makes very little difference. In one fictional study of a country called Norland, average income rose by forty percent over twenty years, but the happiness score stayed almost exactly the same.",
      "So what else matters? The researchers point to three things. The first is trust. In the happiest countries, people believe that their neighbours, the police and the government are honest. In a well-known experiment, wallets containing money were left on city streets. In the cities with the highest scores, most wallets were returned to their owners with the money still inside.",
      "The second factor is free time. Workers in the top countries usually finish work at a reasonable hour and have long holidays. They spend this time outdoors, with family, or doing hobbies such as cycling and music. The third factor is support. When people were asked whether they had someone to help them in difficult times, almost everyone in the top countries said yes.",
      "Not everyone agrees with the list. Some critics say that people in different cultures answer questions about happiness in different ways. In some places, it is polite to say that life is fine even when it is not. In others, people prefer not to seem too pleased with themselves. For this reason, some researchers now also measure how often people smile, laugh or feel worried during a normal day.",
      "Whatever the method, the message seems clear. A happy country is not simply a rich one. It is a place where people trust each other, have time to enjoy life and know that help is there when they need it."
    ],
    note: "Bài tự viết, bám chủ đề Reading 2 của Unit 1 trong sách. Nước Norland là hư cấu.",
    quiz: [
      {t:"head", text:"Câu 1–5: Hoàn thành ghi chú. Điền KHÔNG QUÁ HAI TỪ trong bài."},
      {t:"gap", q:"People rate their life on a scale from zero to ___.", a:["ten","10"], e:"Đoạn A: 'on a scale from zero to ten'."},
      {t:"gap", q:"Countries in northern ___ are often at the top of the list.", a:["Europe"], e:"Đoạn A."},
      {t:"gap", q:"Extra income matters little once people can live ___.", a:["comfortably"], e:"Đoạn B: 'enough to live comfortably'."},
      {t:"gap", q:"In Norland, income went up by forty percent in ___ years.", a:["twenty","20"], e:"Đoạn B."},
      {t:"gap", q:"In the experiment, researchers left ___ on city streets.", a:["wallets"], e:"Đoạn C."},
      {t:"head", text:"Câu 6–9: Hoàn thành bảng. Điền MỘT TỪ trong bài."},
      {t:"gap", q:"Factor 1 – ___: people believe others are honest", a:["trust"], e:"Đoạn C: 'The first is trust'."},
      {t:"gap", q:"Factor 2 – free time: e.g. hobbies like cycling and ___", a:["music"], e:"Đoạn D."},
      {t:"gap", q:"Factor 3 – ___: someone to help in difficult times", a:["support"], e:"Đoạn D: 'The third factor is support'."},
      {t:"gap", q:"Criticism – in some cultures it is ___ to say life is fine", a:["polite"], e:"Đoạn E."}
    ]
  });

  /* Unit 2 · sát Reading 2 (nhà hàng hải truyền thống) · True / False / Not Given + Short answer */
  add("u2", {
    title: "Finding the Way Without a Map",
    est: "Sát sách · Reading 2 · khoảng 350 từ · 14 phút",
    paras: [
      "Long before the compass or satellite navigation existed, people sailed thousands of kilometres across the Pacific Ocean in wooden canoes. They found small islands in a huge area of open water, often travelling for weeks without seeing land. For a long time, some European scholars believed that these islands must have been discovered by accident, when boats were blown off course by storms.",
      "We now know that this was not true. The Pacific islanders used a detailed system of navigation, often called wayfinding, which was passed down from older navigators to younger ones. Students spent years learning it, usually by memorising chants and stories rather than by reading.",
      "The most important tool was the night sky. A navigator knew the exact point on the horizon where dozens of stars rose and set. By steering towards a particular rising star, and then towards the next one when it climbed too high, the canoe could keep a steady direction all night.",
      "During the day, and on cloudy nights, navigators used the ocean itself. They felt the direction of the long waves, called swells, through the movement of the canoe. Some navigators said they could feel the swells best while lying down in the bottom of the boat. Changes in the pattern of the swells could also show that an island was near, even when it was still too far away to see.",
      "Living things gave other clues. Certain seabirds fly out to sea in the morning to catch fish and return to land in the evening, so following them at sunset could lead a canoe to an island. Floating plants and the colour of the clouds were also useful signs.",
      "By the middle of the twentieth century, very few people still knew these skills. In 1976, however, a team built a copy of a traditional double canoe and sailed it from Hawaii to Tahiti, about 4,000 kilometres, without any modern instruments. The voyage proved that the old methods worked, and it encouraged a new generation of young islanders to learn wayfinding. Today, several training schools teach the skills again."
    ],
    note: "Bài tự viết, bám chủ đề Reading 2 của Unit 2 trong sách (cách đi biển truyền thống ở Thái Bình Dương).",
    quiz: [
      {t:"head", text:"Câu 1–5: True / False / Not Given"},
      {q:"Some European scholars thought the Pacific islands were found by chance.", o:TFNG, a:0, e:"Đoạn A: 'discovered by accident'."},
      {q:"Young navigators learnt the system mainly from books.", o:TFNG, a:1, e:"Đoạn B: 'by memorising chants and stories rather than by reading'."},
      {q:"Navigators used about two hundred different stars.", o:TFNG, a:2, e:"Bài chỉ nói 'dozens of stars', không nói con số 200."},
      {q:"Swells could warn a navigator that land was close.", o:TFNG, a:0, e:"Đoạn D: 'could also show that an island was near'."},
      {q:"The 1976 voyage used a modern compass for safety.", o:TFNG, a:1, e:"Đoạn F: 'without any modern instruments'."},
      {t:"head", text:"Câu 6–9: Trả lời ngắn. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ."},
      {t:"gap", q:"What is the traditional system of navigation often called? ___", a:["wayfinding"], e:"Đoạn B."},
      {t:"gap", q:"What part of the sky did navigators watch stars rise from? the ___", a:["horizon"], e:"Đoạn C."},
      {t:"gap", q:"When could following seabirds lead a canoe to land? at ___", a:["sunset"], e:"Đoạn E."},
      {t:"gap", q:"How far was the voyage from Hawaii to Tahiti? about ___ kilometres", a:["4,000","4000","4 000"], e:"Đoạn F."}
    ]
  });

  /* Unit 3 · sát Reading 1 (cuộc cách mạng điện) · Labelling a diagram + Multiple choice */
  add("u3", {
    title: "The Quiet Bus",
    est: "Sát sách · Reading 1 · khoảng 340 từ · 14 phút",
    paras: [
      "In many cities, the loudest and dirtiest vehicle on the road used to be the bus. Old diesel buses produced black smoke and a constant noise. Today, however, more and more cities are replacing them with electric buses, which produce zero emissions on the street and are so quiet that some have speakers to warn people that they are coming.",
      "From the outside, an electric bus looks much like any other bus. The difference is mostly hidden. Instead of a fuel tank, it carries large battery packs. On most models these are fixed on the roof, where they are safe from water on the road and leave more space inside for passengers. A smaller battery is sometimes placed at the back of the bus.",
      "The batteries send power to an electric motor, which is usually found near the rear wheels. Because an electric motor has far fewer moving parts than a diesel engine, it needs less repair, and the bus spends more time on the road.",
      "One clever feature is regenerative braking. When the driver slows down, the motor works in reverse, like a generator, and turns some of the energy of movement back into electricity. This is stored in the batteries and used again, which can increase the range of the bus by up to a fifth.",
      "There are two main ways to charge the batteries. Some buses are charged slowly overnight at the depot, using a cable plugged into a socket on the side of the bus. Others use fast charging during the day. At certain bus stops, a metal arm called a pantograph comes down from a post and connects to rails on the bus roof. In just a few minutes, while passengers get on and off, the bus receives enough energy for the next part of its route.",
      "Electric buses are still more expensive to buy than diesel ones. However, electricity costs less than fuel, and the buses are cheaper to maintain, so many cities find that they save money over the life of the vehicle."
    ],
    note: "Bài tự viết, bám chủ đề Reading 1 của Unit 3 trong sách (xe chạy điện).",
    quiz: [
      {t:"head", text:"Câu 1–4: Ghi nhãn cho sơ đồ xe buýt điện. Điền MỘT TỪ trong bài.", fig:"ebus"},
      {t:"gap", q:"(1) on the roof: battery ___", a:["packs"], e:"Đoạn B: 'large battery packs … fixed on the roof'."},
      {t:"gap", q:"(2) near the rear wheels: electric ___", a:["motor"], e:"Đoạn C."},
      {t:"gap", q:"(3) on the side: a ___ for the overnight charging cable", a:["socket"], e:"Đoạn E."},
      {t:"gap", q:"(4) at some bus stops: a ___ that connects to the roof", a:["pantograph"], e:"Đoạn E."},
      {t:"head", text:"Câu 5–8: Chọn đáp án đúng A, B hoặc C."},
      {q:"Why do some electric buses have speakers?", o:["A to play music for passengers","B because people may not hear them","C to tell passengers the next stop"], a:1, e:"Đoạn A: 'so quiet that some have speakers to warn people'."},
      {q:"Why are batteries usually put on the roof?", o:["A They are easier to charge there.","B They stay dry and save space inside.","C They make the bus more stable."], a:1, e:"Đoạn B."},
      {q:"Regenerative braking can increase the range by up to", o:["A 5%.","B 20%.","C 50%."], a:1, e:"Đoạn D: 'up to a fifth' = 20%."},
      {q:"According to the writer, electric buses", o:["A cost less to buy than diesel buses.","B may cost less over their whole life.","C are too expensive for most cities."], a:1, e:"Đoạn F."}
    ]
  });

  /* Unit 4 · sát Reading 1 (phát minh giúp làm mát) · Multiple choice + Summary completion */
  add("u4", {
    title: "A Breeze at the Touch of a Button",
    est: "Sát sách · Reading 1 · khoảng 330 từ · 13 phút",
    paras: [
      "For thousands of years, people kept cool in hot weather by moving the air themselves. In ancient Egypt and China, servants waved large fans made of leaves or feathers over important people. Later, hand fans made of paper or silk became popular across Asia and Europe, and in some countries they were also used to send secret messages.",
      "The mechanical fan arrived in the nineteenth century. Some early ceiling fans in factories and hotels were turned by belts connected to water wheels. They worked, but they were noisy and could only be used in buildings near rivers.",
      "Everything changed with electricity. In the 1880s, inventors began attaching small electric motors to blades, and the first desk fans went on sale. They were expensive, so at first only rich families and offices could afford them. The early models also had no protective cage, which meant that users sometimes hurt their fingers.",
      "By the 1920s, prices had fallen and the electric fan had become an ordinary household object. Manufacturers competed to make them safer and more attractive. They added metal guards, made the fans turn from side to side, and offered different speeds. Fans were also put into cars and trains.",
      "Later in the twentieth century, air conditioning became common in many hot countries, and some people predicted that the fan would disappear. This did not happen. A fan uses only a small fraction of the electricity needed by an air conditioner, so it is far cheaper to run. It is also easy to move from room to room, and it does not make the air dry.",
      "Today, designers are still improving this simple machine. Some modern fans have no visible blades at all, and others can be controlled with a phone. Engineers are also developing very large, slow ceiling fans for warehouses and sports halls, which can cool a whole building while using little energy. More than a century after its invention, the electric fan is still keeping the world cool."
    ],
    note: "Bài tự viết, bám chủ đề Reading 1 của Unit 4 trong sách (lịch sử một thiết bị làm mát).",
    quiz: [
      {t:"head", text:"Câu 1–4: Chọn đáp án đúng A, B hoặc C."},
      {q:"In some countries, hand fans were also used to", o:["A send secret messages.","B show a person's age.","C keep insects away."], a:0, e:"Đoạn A."},
      {q:"What was a problem with fans powered by water wheels?", o:["A They were too slow.","B They only worked near rivers.","C They broke easily."], a:1, e:"Đoạn B: 'could only be used in buildings near rivers'."},
      {q:"Why could early electric desk fans be dangerous?", o:["A They often caught fire.","B They had no cage around the blades.","C Their motors became very hot."], a:1, e:"Đoạn C: 'no protective cage'."},
      {q:"Why did the fan not disappear when air conditioning became common?", o:["A It was quieter.","B It was cheaper to use.","C It cooled rooms faster."], a:1, e:"Đoạn E: 'far cheaper to run'."},
      {t:"head", text:"Câu 5–8: Hoàn thành tóm tắt. Điền MỘT TỪ trong bài."},
      {t:"gap", q:"By the 1920s the electric fan was cheaper. Companies made it safer by adding metal ___,", a:["guards"], e:"Đoạn D."},
      {t:"gap", q:"and fans were also fitted in ___ and trains.", a:["cars"], e:"Đoạn D."},
      {t:"gap", q:"Unlike air conditioning, a fan does not make the air ___.", a:["dry"], e:"Đoạn E."},
      {t:"gap", q:"Some modern fans can be controlled with a ___.", a:["phone"], e:"Đoạn F."}
    ]
  });

  /* Unit 5 · sát Reading 2 (kỷ lục di cư của động vật) · Sentence completion + Pick from a list */
  add("u5", {
    title: "The Bird That Chases the Summer",
    est: "Sát sách · Reading 2 · khoảng 300 từ · 12 phút",
    paras: [
      "The Arctic tern is a small white seabird with a black cap and a red beak. It weighs only about one hundred grams, less than a mobile phone. Yet this tiny bird makes the longest migration of any animal on Earth, travelling from its breeding grounds in the far north to the waters around Antarctica and back again every year.",
      "Because it spends the northern summer in the Arctic and the southern summer in the Antarctic, the tern probably sees more daylight than any other creature. For much of the year, the sun hardly sets where it lives.",
      "For a long time, scientists could only guess the length of this journey. Then, in the early 2000s, researchers attached tiny tracking devices, each lighter than a paper clip, to the legs of terns nesting in Greenland and Iceland. When the birds returned the following year, the devices were collected and the data was studied.",
      "The results were surprising. The birds did not fly in a straight line. Instead, they followed an S-shaped route down the Atlantic Ocean, using the winds to save energy. Many stopped for several weeks in the middle of the ocean, where there was plenty of food, before continuing south. On average, each bird travelled around 70,000 kilometres in a year.",
      "Arctic terns can live for more than thirty years. This means that, during its life, a single bird may fly a distance equal to going to the Moon and back three times.",
      "However, the species faces new problems. Rising sea temperatures are changing where the small fish that terns eat can be found, and in some places nests are disturbed by people and dogs. Conservation groups are now protecting important nesting areas and asking visitors to keep away from the birds during the breeding season."
    ],
    note: "Bài tự viết, bám chủ đề Reading 2 của Unit 5 trong sách (động vật di cư phá kỷ lục).",
    quiz: [
      {t:"head", text:"Câu 1–5: Hoàn thành câu. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ trong bài."},
      {t:"gap", q:"An Arctic tern is lighter than a ___.", a:["mobile phone","phone"], e:"Đoạn A."},
      {t:"gap", q:"The tern probably sees more ___ than any other animal.", a:["daylight"], e:"Đoạn B."},
      {t:"gap", q:"The tracking devices were fixed to the birds' ___.", a:["legs"], e:"Đoạn C."},
      {t:"gap", q:"The birds use the ___ to save energy on their route.", a:["winds","wind"], e:"Đoạn D."},
      {t:"gap", q:"Each bird flies about ___ kilometres a year.", a:["70,000","70000","70 000"], e:"Đoạn D."},
      {t:"head", text:"Câu 6–7: Chọn HAI đáp án."},
      {t:"pick", q:"Which TWO problems for Arctic terns are mentioned?", o:["A a shortage of nesting materials","B changes in where their food is found","C hunting by fishermen","D nests being disturbed","E stronger storms at sea"], a:[1,3], e:"Đoạn F: nhiệt độ biển làm thay đổi nơi có cá; tổ bị người và chó làm phiền."}
    ]
  });

  /* Unit 6 · sát Reading 2 (lỗi trí nhớ) · Yes / No / Not Given + Summary with a box */
  add("u6", {
    title: "Why Can't I Remember Your Name?",
    est: "Sát sách · Reading 2 · khoảng 330 từ · 13 phút",
    paras: [
      "Most of us have had this experience. We meet someone at a party, they tell us their name, and two minutes later it has completely gone. We can remember their face, their job and even what they were wearing, but not the one word we need. In my view, this is not a sign of a bad memory. It is simply how the brain works.",
      "Psychologists have shown that names are harder to remember than other information about a person. In one study, people were shown photos of strangers and told each person's name and job. Later, they remembered the jobs much better. Interestingly, this happened even when the name and the job were the same word, such as Baker and baker.",
      "The explanation is meaning. If you learn that someone is a baker, the word connects to many things you already know: bread, early mornings, the smell of a shop. A name like Baker connects to nothing. It is just a sound, and sounds without meaning are easily lost.",
      "Another reason is attention. When we are introduced to someone, we are often busy thinking about what to say next or worrying about the impression we are making. The name arrives at exactly the moment when we are not really listening. I believe this explains most of our forgetting.",
      "Fortunately, there are simple ways to improve. The first is to repeat the name immediately, for example by saying, 'Nice to meet you, Sara.' The second is to create a link. If you meet a man called Mr Hill who is very tall, you could imagine him standing on top of a hill. Some people find these pictures silly, but they work because they give the name a meaning.",
      "Finally, it helps to use the name again before the conversation ends. Each time you recall a piece of information, the memory becomes stronger. Remembering names is a skill, and like any skill, it improves with practice."
    ],
    note: "Bài tự viết, bám chủ đề Reading 2 của Unit 6 trong sách (vì sao trí nhớ mắc lỗi).",
    quiz: [
      {t:"head", text:"Câu 1–5: Do the statements agree with the views of the writer? YES / NO / NOT GIVEN"},
      {q:"Forgetting a person's name shows that you have a poor memory.", o:YNNG, a:1, e:"Đoạn A: 'this is not a sign of a bad memory'."},
      {q:"Lack of attention is the main reason we forget names.", o:YNNG, a:0, e:"Đoạn D: 'I believe this explains most of our forgetting'."},
      {q:"Older people find names harder to remember than young people.", o:YNNG, a:2, e:"Bài không nhắc đến tuổi."},
      {q:"Creating a mental picture for a name is a waste of time.", o:YNNG, a:1, e:"Đoạn E: 'they work'."},
      {q:"Remembering names can be learnt like other skills.", o:YNNG, a:0, e:"Đoạn F."},
      {t:"head", text:"Câu 6–9: Hoàn thành tóm tắt bằng từ trong khung: meaning · sound · jobs · faces · repeat · stronger · weaker · silly"},
      {q:"In one study, people remembered strangers' ___ better than their names.", o:["meaning","sound","jobs","faces","repeat","stronger","weaker","silly"], a:2, e:"Đoạn B."},
      {q:"This is because a word like 'baker' has ___ for us.", o:["meaning","sound","jobs","faces","repeat","stronger","weaker","silly"], a:0, e:"Đoạn C: 'The explanation is meaning'."},
      {q:"A name, on the other hand, is just a ___.", o:["meaning","sound","jobs","faces","repeat","stronger","weaker","silly"], a:1, e:"Đoạn C: 'It is just a sound'."},
      {q:"Using the name again makes the memory ___.", o:["meaning","sound","jobs","faces","repeat","stronger","weaker","silly"], a:5, e:"Đoạn F."}
    ]
  });

  /* Unit 7 · sát Reading (đọc nhanh) · Matching information + Table completion */
  add("u7", {
    title: "Can You Really Read Faster?",
    est: "Sát sách · Reading · khoảng 340 từ · 14 phút",
    paras: [
      "Advertisements for speed-reading courses make exciting promises. Learn our method, they say, and you will read a whole book in an hour while understanding everything. With so much information to deal with at work and at university, it is easy to see why these courses are popular. But what does science say?",
      "First, it is useful to know how reading actually works. Our eyes do not move smoothly along a line of text. Instead, they jump from one point to the next, stopping briefly on each word or group of words. These stops are called fixations, and most of the information is taken in while the eyes are still. Readers also make backward jumps, called regressions, to check words they did not understand.",
      "An average adult reads between 200 and 300 words per minute when reading normally for understanding. Many speed-reading courses claim to raise this to 1,000 words or more. One common method is to reduce regressions by moving a finger or a pen under the line. Another is to stop 'hearing' the words in your head, a habit known as subvocalisation.",
      "Researchers who have tested these claims are not convinced. In a number of studies, people who read very fast understood much less than normal readers. The main limit is not how quickly the eyes move but how quickly the brain can process language. Trying to stop subvocalisation also seems to make understanding worse, especially with difficult texts.",
      "This does not mean that reading speed cannot improve. The best way to become a faster reader, it seems, is to read more. People who read a lot know more words and more about the world, so they recognise words quickly and need fewer regressions.",
      "Skimming is also a useful skill, as long as we are honest about what it is. When we skim, we accept that we will miss details in order to get a general idea of a text quickly. For IELTS candidates, knowing when to skim and when to read carefully may be more valuable than any speed-reading method."
    ],
    note: "Bài tự viết, bám chủ đề bài Reading của Unit 7 trong sách (đọc nhanh).",
    quiz: [
      {t:"head", text:"Câu 1–4: Đoạn nào (A–F) chứa thông tin sau?"},
      {q:"the reason why speed-reading courses attract many people", o:["A","B","C","D","E","F"], a:0, e:"Đoạn A: 'it is easy to see why these courses are popular'."},
      {q:"advice for people taking a language exam", o:["A","B","C","D","E","F"], a:5, e:"Đoạn F: 'For IELTS candidates…'."},
      {q:"a description of how the eyes move during reading", o:["A","B","C","D","E","F"], a:1, e:"Đoạn B."},
      {q:"the benefit of having a large vocabulary", o:["A","B","C","D","E","F"], a:4, e:"Đoạn E: 'know more words … recognise words quickly'."},
      {t:"head", text:"Câu 5–8: Hoàn thành bảng. Điền MỘT TỪ HOẶC MỘT CON SỐ trong bài."},
      {t:"gap", q:"Fixations – short ___ of the eyes on words", a:["stops"], e:"Đoạn B: 'These stops are called fixations'."},
      {t:"gap", q:"Regressions – ___ jumps to check words", a:["backward"], e:"Đoạn B."},
      {t:"gap", q:"Normal reading speed – up to ___ words per minute", a:["300"], e:"Đoạn C: 'between 200 and 300'."},
      {t:"gap", q:"Course method – move a finger or a ___ under the line", a:["pen"], e:"Đoạn C."}
    ]
  });

  /* Unit 8 · sát Reading (những nơi sắp biến mất) · Summary completion + Matching features */
  add("u8", {
    title: "Holidays in Empty Towns",
    est: "Sát sách · Reading · khoảng 310 từ · 13 phút",
    paras: [
      "Most tourists want to visit busy, lively places. A growing number, however, are choosing the opposite: towns where nobody lives any more. Around the world, there are thousands of so-called ghost towns, left empty when a mine closed, a river changed its course or young people moved to the cities.",
      "One example is the fictional mining town of Silverbrook, high in the mountains. A hundred years ago, it had five thousand residents, three hotels and a theatre. When the silver ran out in the 1930s, families left within a few years. Today, its wooden houses still stand, with old furniture and even plates on the tables.",
      "Local guide Marta Klein has been leading tours there for ten years. 'Visitors are fascinated by ordinary details,' she says. 'A child's shoe or a calendar on the wall tells a more powerful story than any museum.' She believes the town should be kept exactly as it is, without new buildings or shops.",
      "Not everyone agrees. Tom Reyes, who runs a café in the nearest village, says that tourism has saved the area. 'Before the tours started, our village was dying too,' he explains. 'Now we have visitors all year round.' He would like a small hotel to be built near the old town so that people can stay longer.",
      "Historian Dr Ana Petrov is worried about a different problem. Many of the buildings are old and could collapse, and some visitors take objects home as souvenirs. 'Every year, a little more of Silverbrook disappears,' she says. She wants the government to pay for repairs and to allow visitors only on guided tours.",
      "For now, entry to Silverbrook is free, and visitors can walk wherever they like. But the number of tourists has doubled in five years, and a decision about the town's future will have to be made soon."
    ],
    note: "Bài tự viết, bám chủ đề bài Reading của Unit 8 trong sách. Thị trấn Silverbrook và các nhân vật là hư cấu.",
    quiz: [
      {t:"head", text:"Câu 1–5: Hoàn thành tóm tắt. Điền MỘT TỪ HOẶC MỘT CON SỐ trong bài."},
      {t:"gap", q:"Ghost towns may become empty when a ___ closes,", a:["mine"], e:"Đoạn A."},
      {t:"gap", q:"Silverbrook once had ___ residents.", a:["5,000","5000","five thousand"], e:"Đoạn B: 'five thousand residents'."},
      {t:"gap", q:"People left after the ___ ran out in the 1930s.", a:["silver"], e:"Đoạn B."},
      {t:"gap", q:"Some visitors take objects as ___.", a:["souvenirs"], e:"Đoạn E."},
      {t:"gap", q:"The number of tourists has ___ in five years.", a:["doubled"], e:"Đoạn F."},
      {t:"head", text:"Câu 6–9: Ai nói/nghĩ điều sau? A Marta Klein · B Tom Reyes · C Ana Petrov"},
      {q:"Visitors should only enter with a guide.", o:["A Marta Klein","B Tom Reyes","C Ana Petrov"], a:2, e:"Đoạn E."},
      {q:"Small everyday objects interest visitors most.", o:["A Marta Klein","B Tom Reyes","C Ana Petrov"], a:0, e:"Đoạn C."},
      {q:"A place to stay overnight should be built.", o:["A Marta Klein","B Tom Reyes","C Ana Petrov"], a:1, e:"Đoạn D."},
      {q:"Nothing new should be added to the town.", o:["A Marta Klein","B Tom Reyes","C Ana Petrov"], a:0, e:"Đoạn C: 'without new buildings or shops'."}
    ]
  });

  /* Unit 9 · sát Reading (gánh nặng đi lấy nước) · Matching headings + Sentence completion + Pick from a list */
  add("u9", {
    title: "The Long Walk for Water",
    est: "Sát sách · Reading · khoảng 320 từ · 13 phút",
    paras: [
      "For most people reading this, getting water means turning on a tap. For millions of others, it means a long walk every day. In many rural areas, the nearest safe water source is several kilometres from home, and someone has to go there and carry the water back.",
      "This job usually falls to women and girls. A full container of twenty litres weighs twenty kilograms, and it is often carried on the head or back. Doing this several times a day can cause serious pain in the neck and spine. In the hottest months, when nearby streams dry up, the journey becomes even longer.",
      "The time spent collecting water has a high cost. Girls may arrive late for school or miss lessons completely, and women have less time to grow food or earn money. In one fictional village, Kanawe, women were spending an average of four hours a day on the task.",
      "In 2015, the people of Kanawe decided to act. With help from a charity, they built tanks to collect rainwater from the roofs of the school and the health centre. They also dug a deep well in the middle of the village and fitted it with a hand pump. A committee of local residents was trained to repair the pump and collect a small fee from each family.",
      "The changes were dramatic. Time spent collecting water fell to less than thirty minutes a day. School attendance among girls rose sharply, and several women started small businesses, such as selling vegetables at the market. Illnesses caused by dirty water also became less common.",
      "Experts say that projects like this succeed only when local people are involved from the start. In the past, many pumps were installed by outside organisations and then broke down because nobody in the village knew how to fix them. In Kanawe, the pump has worked almost without a break for nearly ten years."
    ],
    note: "Bài tự viết, bám chủ đề bài Reading của Unit 9 trong sách. Làng Kanawe là hư cấu.",
    quiz: [
      {t:"head", text:"Câu 1–4: Chọn tiêu đề đúng cho các đoạn B–E. (Có 2 tiêu đề thừa.)"},
      {q:"Paragraph B", o:["i A village finds a solution","ii Effects on health and the body","iii Why some projects fail","iv Losing time for education and work","v The cost of building a well","vi Life after the changes"], a:1, e:"Đoạn B nói về đau cổ, cột sống."},
      {q:"Paragraph C", o:["i A village finds a solution","ii Effects on health and the body","iii Why some projects fail","iv Losing time for education and work","v The cost of building a well","vi Life after the changes"], a:3, e:"Đoạn C: trễ học, ít thời gian làm việc."},
      {q:"Paragraph D", o:["i A village finds a solution","ii Effects on health and the body","iii Why some projects fail","iv Losing time for education and work","v The cost of building a well","vi Life after the changes"], a:0, e:"Đoạn D: làng xây bể chứa và giếng."},
      {q:"Paragraph E", o:["i A village finds a solution","ii Effects on health and the body","iii Why some projects fail","iv Losing time for education and work","v The cost of building a well","vi Life after the changes"], a:5, e:"Đoạn E: kết quả sau khi thay đổi."},
      {t:"head", text:"Câu 5–7: Hoàn thành câu. Điền KHÔNG QUÁ HAI TỪ HOẶC MỘT CON SỐ trong bài."},
      {t:"gap", q:"A full twenty-litre container weighs ___ kilograms.", a:["twenty","20"], e:"Đoạn B."},
      {t:"gap", q:"Rainwater was collected from the roofs of the school and the ___.", a:["health centre","health center"], e:"Đoạn D."},
      {t:"gap", q:"Each family pays a small ___ to the committee.", a:["fee"], e:"Đoạn D."},
      {t:"head", text:"Câu 8–9: Chọn HAI đáp án."},
      {t:"pick", q:"Which TWO results of the Kanawe project are mentioned?", o:["A More girls went to school.","B The village got electricity.","C Some women began businesses.","D Families moved back from the city.","E The charity built a new school."], a:[0,2], e:"Đoạn E."}
    ]
  });

  /* Unit 10 · sát Reading (công trình 'lộn trái') · Multiple choice + Matching sentence endings + Yes / No / Not Given */
  add("u10", {
    title: "The Market Hall That Shows Its Insides",
    est: "Sát sách · Reading · khoảng 340 từ · 14 phút",
    paras: [
      "When the design for the new market hall in the fictional city of Port Alder was first shown to the public, many residents were shocked. Instead of hiding the pipes, cables and air ducts inside the walls, the architects had placed them all on the outside of the building and painted them in bright colours: blue for air, green for water, yellow for electricity and red for the lifts and escalators.",
      "The architects explained that their idea was practical as well as artistic. With all the services on the outside, the interior could be one huge open space, with no columns or walls to get in the way. Market stalls, a food court and an exhibition area could be moved around easily as needs changed. Repairs would also be simpler, because workers could reach the pipes without closing the building.",
      "Not everyone was convinced. A local newspaper called it 'a factory in the city centre', and a group of residents collected signatures against it. They argued that the colourful building did not fit in with the old stone houses around the square.",
      "The hall opened in 2009. In its first year, it attracted twice as many visitors as the city had expected, and the open interior has hosted everything from fashion shows to concerts. The escalator on the outside, inside a clear tube, has become one of the most photographed places in the city, because it offers wide views over the harbour.",
      "However, the design has had some problems. The external pipes are exposed to rain and salty sea air, so they need to be repainted much more often than planned, and the cost of maintenance is high.",
      "In my opinion, the Port Alder market hall shows that a building does not have to look like its neighbours to belong in a city. People who once hated it now speak of it with pride. Good architecture, I would argue, is not about being polite but about making people look at their surroundings in a new way."
    ],
    note: "Bài tự viết, bám chủ đề bài Reading của Unit 10 trong sách. Thành phố Port Alder và toà nhà là hư cấu.",
    quiz: [
      {t:"head", text:"Câu 1–2: Chọn đáp án đúng A, B hoặc C."},
      {q:"In the design, the colour green shows pipes for", o:["A air.","B water.","C electricity."], a:1, e:"Đoạn A."},
      {q:"Why is the outside escalator popular?", o:["A It is very fast.","B It has good views of the harbour.","C It is free to use."], a:1, e:"Đoạn D."},
      {t:"head", text:"Câu 3–5: Nối phần đầu câu với phần cuối đúng (A–E)."},
      {q:"Putting services outside meant that", o:["A the pipes need frequent painting.","B the inside could be a single open space.","C residents signed a petition.","D the hall had fewer visitors than expected.","E the building is now a source of pride."], a:1, e:"Đoạn B."},
      {q:"Because the building looked so different,", o:["A the pipes need frequent painting.","B the inside could be a single open space.","C residents signed a petition.","D the hall had fewer visitors than expected.","E the building is now a source of pride."], a:2, e:"Đoạn C."},
      {q:"Because of the rain and sea air,", o:["A the pipes need frequent painting.","B the inside could be a single open space.","C residents signed a petition.","D the hall had fewer visitors than expected.","E the building is now a source of pride."], a:0, e:"Đoạn E."},
      {t:"head", text:"Câu 6–8: Do the statements agree with the views of the writer? YES / NO / NOT GIVEN"},
      {q:"A new building should look similar to the buildings around it.", o:YNNG, a:1, e:"Đoạn F: 'does not have to look like its neighbours'."},
      {q:"The market hall was more expensive to build than other buildings.", o:YNNG, a:2, e:"Bài chỉ nói chi phí bảo trì cao, không so sánh chi phí xây dựng."},
      {q:"Good architecture can change how people see their city.", o:YNNG, a:0, e:"Đoạn F."}
    ]
  });
})();
