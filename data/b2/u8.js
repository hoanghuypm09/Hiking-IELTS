/* Complete IELTS Bands 5–6.5 · Unit 8: Fashion and design.
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u8", title:"Fashion and design", vi:"Thời trang & thiết kế",
  focus:{reading:"Section 3: Multiple choice · Yes / No / Not Given · Matching sentence endings", listening:"Section 4: Sentence completion (nghe từ đồng nghĩa, diễn đạt lại)", speaking:"Part 2 và 3: so sánh, liệt kê ý, trả lời có cấu trúc rõ ràng", writing:"Task 2: bàn hai quan điểm và nêu ý kiến riêng, viết kết bài", vocab:"dress / dresses / clothes / cloth", pron:"Linking and pausing: nối âm và ngắt nghỉ"},
  vocab:[
    {g:"Word list của sách",w:"ancient",p:"adj",ipa:"/ˈeɪnʃənt/",vi:"cổ xưa",ex:"The museum keeps ancient garments from the 15th century.",exvi:"Bảo tàng lưu giữ những trang phục cổ từ thế kỷ 15."},
    {g:"Word list của sách",w:"casual clothes",p:"n phr",ipa:"/ˈkæʒuəl kləʊðz/",vi:"quần áo thường ngày",ex:"Many offices now allow casual clothes on Fridays.",exvi:"Nhiều văn phòng giờ cho mặc đồ thường ngày vào thứ Sáu."},
    {g:"Word list của sách",w:"celebrity",p:"n",ipa:"/səˈlebrəti/",vi:"người nổi tiếng",ex:"Celebrities often set the trends for young people.",exvi:"Người nổi tiếng thường tạo xu hướng cho giới trẻ."},
    {g:"Word list của sách",w:"conservation",p:"n",ipa:"/ˌkɒnsəˈveɪʃn/",vi:"sự bảo tồn, phục chế",ex:"The conservation of the dress will cost £30,000.",exvi:"Việc phục chế chiếc váy sẽ tốn 30.000 bảng."},
    {g:"Word list của sách",w:"contemporary",p:"adj",ipa:"/kənˈtemprəri/",vi:"cùng thời; đương đại",ex:"They compared the dress with contemporary photographs.",exvi:"Họ so sánh chiếc váy với những bức ảnh cùng thời."},
    {g:"Word list của sách",w:"decorative",p:"adj",ipa:"/ˈdekərətɪv/",vi:"để trang trí",ex:"At first, the stitching was functional rather than decorative.",exvi:"Ban đầu, đường khâu mang tính chức năng hơn là trang trí."},
    {g:"Word list của sách",w:"delicate structure",p:"n phr",ipa:"/ˈdelɪkət ˈstrʌktʃə/",vi:"cấu trúc mỏng manh",ex:"Because of its delicate structure, the dress must be handled carefully.",exvi:"Vì cấu trúc mỏng manh, chiếc váy phải được cầm nắm cẩn thận."},
    {g:"Word list của sách",w:"designer clothes / brands",p:"n phr",ipa:"/dɪˈzaɪnə kləʊðz/",vi:"quần áo / thương hiệu của nhà thiết kế",ex:"Teenagers are often pressured to buy designer brands.",exvi:"Thanh thiếu niên thường bị áp lực phải mua đồ hàng hiệu."},
    {g:"Word list của sách",w:"fabric",p:"n",ipa:"/ˈfæbrɪk/",vi:"vải",ex:"Cotton is a light, cool fabric.",exvi:"Cotton là loại vải nhẹ và mát."},
    {g:"Word list của sách",w:"flexibility",p:"n",ipa:"/ˌfleksəˈbɪləti/",vi:"độ co giãn, tính linh hoạt",ex:"Net was chosen because it has some flexibility.",exvi:"Vải lưới được chọn vì nó có độ co giãn nhất định."},
    {g:"Word list của sách",w:"fragile",p:"adj",ipa:"/ˈfrædʒaɪl/",vi:"dễ vỡ, mỏng manh",ex:"The old silk is now extremely fragile.",exvi:"Lớp lụa cũ giờ cực kỳ mỏng manh."},
    {g:"Word list của sách",w:"functional",p:"adj",ipa:"/ˈfʌŋkʃənl/",vi:"thiết thực, có chức năng",ex:"Work clothes need to be functional.",exvi:"Quần áo lao động cần thiết thực."},
    {g:"Word list của sách",w:"garment",p:"n",ipa:"/ˈɡɑːmənt/",vi:"món quần áo, trang phục",ex:"It's unusual to know who actually wore a garment.",exvi:"Hiếm khi biết được ai đã thực sự mặc một trang phục."},
    {g:"Word list của sách",w:"give a sense of",p:"phrase",ipa:"/ɡɪv ə sens əv/",vi:"mang lại cảm giác về",ex:"Old costumes give you a sense of the people who wore them.",exvi:"Trang phục cũ cho ta cảm nhận về những người đã mặc chúng."},
    {g:"Word list của sách",w:"innovations",p:"n",ipa:"/ˌɪnəˈveɪʃnz/",vi:"những đổi mới",ex:"The innovations brought new audiences to the theatre.",exvi:"Những đổi mới đã đưa khán giả mới đến nhà hát."},
    {g:"Word list của sách",w:"miss the point",p:"phrase",ipa:"/mɪs ðə pɔɪnt/",vi:"không hiểu ý chính",ex:"Critics who complained about the price missed the point.",exvi:"Những người chỉ trích giá cả đã không hiểu ý chính."},
    {g:"Word list của sách",w:"original",p:"adj",ipa:"/əˈrɪdʒənl/",vi:"nguyên bản; độc đáo",ex:"The original cloth is quite stretchy.",exvi:"Lớp vải nguyên bản khá co giãn."},
    {g:"Word list của sách",w:"origins",p:"n",ipa:"/ˈɒrɪdʒɪnz/",vi:"nguồn gốc",ex:"The lecture explains the origins of the craft.",exvi:"Bài giảng giải thích nguồn gốc của nghề thủ công này."},
    {g:"Word list của sách",w:"performance",p:"n",ipa:"/pəˈfɔːməns/",vi:"buổi biểu diễn",ex:"He was impressed by her first performance.",exvi:"Anh ấy ấn tượng với buổi diễn đầu tiên của cô."},
    {g:"Word list của sách",w:"pastime",p:"n",ipa:"/ˈpɑːstaɪm/",vi:"thú tiêu khiển",ex:"Embroidery is a popular pastime in my village.",exvi:"Thêu thùa là thú tiêu khiển phổ biến ở làng tôi."},
    {g:"Word list của sách",w:"preserve",p:"v",ipa:"/prɪˈzɜːv/",vi:"bảo tồn, gìn giữ",ex:"It's important to preserve old things from the past.",exvi:"Gìn giữ những thứ xưa cũ là điều quan trọng."},
    {g:"Word list của sách",w:"portrait",p:"n",ipa:"/ˈpɔːtrət/",vi:"chân dung",ex:"Her portrait hangs in the national gallery.",exvi:"Bức chân dung của bà được treo ở phòng tranh quốc gia."},
    {g:"Word list của sách",w:"produced by hand",p:"phrase",ipa:"/prəˈdjuːst baɪ hænd/",vi:"làm thủ công",ex:"Every piece of cloth was produced by hand.",exvi:"Mỗi tấm vải đều được làm thủ công."},
    {g:"Word list của sách",w:"repair",p:"v",ipa:"/rɪˈpeə/",vi:"sửa chữa",ex:"The team will repair the damaged sleeves.",exvi:"Nhóm sẽ sửa phần tay áo bị hỏng."},
    {g:"Word list của sách",w:"retire",p:"v",ipa:"/rɪˈtaɪə/",vi:"nghỉ hưu",ex:"She retired from the stage at the age of 60.",exvi:"Bà rời sân khấu nghỉ hưu năm 60 tuổi."},
    {g:"Word list của sách",w:"social events",p:"n phr",ipa:"/ˈsəʊʃl ɪˈvents/",vi:"sự kiện giao lưu",ex:"People dress up for social events such as weddings.",exvi:"Mọi người ăn diện cho các sự kiện như đám cưới."},
    {g:"Word list của sách",w:"textile(s)",p:"n",ipa:"/ˈtekstaɪl/",vi:"hàng dệt, vải dệt",ex:"She is a textile conservator.",exvi:"Cô ấy là chuyên gia phục chế hàng dệt."},
    {g:"Word list của sách",w:"unique",p:"adj",ipa:"/juˈniːk/",vi:"độc nhất",ex:"This dress is unique: there is no other like it.",exvi:"Chiếc váy này là độc nhất, không có cái thứ hai."},
    {g:"dress / dresses / clothes / cloth",w:"clothes",p:"n (plural)",ipa:"/kləʊðz/",vi:"quần áo (luôn số nhiều)",ex:"I need some new clothes for my new job.",exvi:"Tôi cần vài bộ quần áo mới cho công việc mới."},
    {g:"dress / dresses / clothes / cloth",w:"dress (countable)",p:"n",ipa:"/dres/",vi:"chiếc váy liền (của phụ nữ)",ex:"She bought two dresses for the wedding.",exvi:"Cô ấy mua hai chiếc váy cho đám cưới."},
    {g:"dress / dresses / clothes / cloth",w:"dress (uncountable)",p:"n",ipa:"/dres/",vi:"kiểu trang phục (formal dress, traditional dress)",ex:"The áo dài is our traditional dress.",exvi:"Áo dài là trang phục truyền thống của chúng tôi."},
    {g:"dress / dresses / clothes / cloth",w:"cloth",p:"n (uncountable)",ipa:"/klɒθ/",vi:"vải (chất liệu để may)",ex:"Saris are made from very colourful cloth.",exvi:"Sari được may từ vải rất sặc sỡ."}
  ],
  phrases:[
    {g:"Bàn quan điểm (Writing Task 2)",w:"Some people argue that…",p:"phrase",ipa:"/sʌm ˈpiːpl ˈɑːɡjuː ðæt/",vi:"Một số người cho rằng…",ex:"Some people argue that fashion items cost too much.",exvi:"Một số người cho rằng đồ thời trang quá đắt."},
    {g:"Bàn quan điểm (Writing Task 2)",w:"X may argue that…",p:"phrase",ipa:"/meɪ ˈɑːɡjuː ðæt/",vi:"X có thể sẽ cho rằng… (đoán ý người khác)",ex:"Designers may argue that the cost reflects the quality.",exvi:"Nhà thiết kế có thể cho rằng giá phản ánh chất lượng."},
    {g:"Bàn quan điểm (Writing Task 2)",w:"According to X,…",p:"phrase",ipa:"/əˈkɔːdɪŋ tə/",vi:"Theo X thì…",ex:"According to people in the fashion business, being original is hard.",exvi:"Theo người trong ngành thời trang, sáng tạo độc đáo là rất khó."},
    {g:"Bàn quan điểm (Writing Task 2)",w:"In X's opinion,…",p:"phrase",ipa:"/ɪn əˈpɪnjən/",vi:"Theo ý kiến của X,…",ex:"In many parents' opinion, school uniforms save money.",exvi:"Theo nhiều phụ huynh, đồng phục giúp tiết kiệm tiền."},
    {g:"Bàn quan điểm (Writing Task 2)",w:"Other people disagree.",p:"phrase",ipa:"/ˈʌðə ˈpiːpl ˌdɪsəˈɡriː/",vi:"Những người khác không đồng ý. (quan điểm đối lập)",ex:"Other people disagree. They say fashion is an important part of life.",exvi:"Những người khác không đồng ý. Họ nói thời trang là phần quan trọng của cuộc sống."},
    {g:"Bàn quan điểm (Writing Task 2)",w:"Personally, I think…",p:"phrase",ipa:"/ˈpɜːsənəli/",vi:"Cá nhân tôi nghĩ… (ý kiến riêng)",ex:"Personally, I think it depends on how important fashion is to you.",exvi:"Cá nhân tôi nghĩ điều đó tuỳ vào việc thời trang quan trọng với bạn thế nào."},
    {g:"Trả lời Part 3 có cấu trúc",w:"First of all,… Another benefit is…",p:"phrase",ipa:"/fɜːst əv ɔːl/",vi:"Trước hết,… Một lợi ích khác là… (liệt kê ý)",ex:"First of all, children experience things directly.",exvi:"Trước hết, trẻ được trải nghiệm trực tiếp."},
    {g:"Trả lời Part 3 có cấu trúc",w:"In the past,… whereas now…",p:"phrase",ipa:"/ɪn ðə pɑːst ˈweərˈæz naʊ/",vi:"Ngày xưa…, còn bây giờ… (so sánh)",ex:"In the past, museums just kept objects, whereas now they have interactive displays.",exvi:"Ngày xưa bảo tàng chỉ cất giữ hiện vật, còn bây giờ có khu trưng bày tương tác."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"set a trend",p:"collocation",ipa:"/set ə trend/",vi:"tạo xu hướng",ex:"K-pop stars set trends across Asia.",exvi:"Ngôi sao K-pop tạo xu hướng khắp châu Á."},
    {g:"Động từ + danh từ",w:"follow fashion",p:"collocation",ipa:"/ˈfɒləʊ ˈfæʃn/",vi:"chạy theo mốt",ex:"I don't really follow fashion.",exvi:"Tôi không thực sự chạy theo mốt."},
    {g:"Động từ + danh từ",w:"dress smartly",p:"collocation",ipa:"/dres ˈsmɑːtli/",vi:"ăn mặc chỉnh tề",ex:"Some companies want their staff to dress smartly.",exvi:"Một số công ty muốn nhân viên ăn mặc chỉnh tề."},
    {g:"Động từ + danh từ",w:"look after your image",p:"collocation",ipa:"/lʊk ˈɑːftə jɔːr ˈɪmɪdʒ/",vi:"chăm chút hình ảnh",ex:"Celebrities need to look after their image.",exvi:"Người nổi tiếng cần chăm chút hình ảnh."},
    {g:"Tính từ + danh từ",w:"traditional dress",p:"collocation",ipa:"/trəˈdɪʃənl dres/",vi:"trang phục truyền thống",ex:"People wear traditional dress at Tet.",exvi:"Mọi người mặc trang phục truyền thống vào dịp Tết."},
    {g:"Tính từ + danh từ",w:"the latest fashions",p:"collocation",ipa:"/ðə ˈleɪtɪst ˈfæʃnz/",vi:"mốt mới nhất",ex:"Magazines are full of the latest fashions.",exvi:"Tạp chí đầy những mốt mới nhất."},
    {g:"Tính từ + danh từ",w:"high-quality workmanship",p:"collocation",ipa:"/haɪ ˈkwɒləti ˈwɜːkmənʃɪp/",vi:"tay nghề chế tác cao",ex:"The robe shows high-quality workmanship.",exvi:"Chiếc áo cho thấy tay nghề chế tác cao."}
  ],
  grammar:{
    title:"Time conjunctions: until / before / when / after",
    rules:[
      {h:"Thì hiện tại sau liên từ thời gian khi nói về tương lai",use:["Sau when, until, before, after, as soon as không dùng will","Mệnh đề chính vẫn dùng will / câu mệnh lệnh"],form:"When I go to the museum, I'll go shopping.",ex:"I promise we'll go out after the show finishes.",sig:"không dùng will sau when/until/before/after"},
      {h:"Present perfect sau liên từ: nhấn mạnh việc đã xong",use:["Dùng present perfect để nói việc này phải hoàn tất trước việc kia"],form:"until / after + have done",ex:"I'm not leaving this shop until I have bought something.",sig:"đã xong rồi mới"},
      {h:"until: cho đến khi",use:["Hành động tiếp diễn cho đến một thời điểm","Thường dùng với câu phủ định: not … until"],form:"Staff cannot smoke until they have left the building.",ex:"We must not stop until we achieve our goals.",sig:"cho tới lúc"},
      {h:"Ở quá khứ: giữ thì quá khứ ở cả hai vế",use:["before / after / when + past simple","Không dùng mệnh đề rút gọn sai kiểu after graduate"],form:"The customer knew the price before she bought the dress.",ex:"Until I went to India, I had no idea how colourful the clothes were.",sig:"after we graduate (không phải after graduate)"}
    ],
    quiz:[
      {q:"When children ___ up, they face many problems.",o:["grow","will grow","grew"],a:0,e:"Không dùng will sau when."},
      {q:"The customer was aware of the price before she ___ the dress.",o:["bought","buy","will buy"],a:0,e:"Quá khứ: before + past simple."},
      {q:"After ___, we need to compete for a good job.",o:["we graduate","graduate","we will graduate"],a:0,e:"Liên từ + mệnh đề đầy đủ."},
      {q:"We must set goals and not stop until ___.",o:["we achieve them","achieved","we will achieve them"],a:0,e:"until + mệnh đề, thì hiện tại."},
      {q:"Some parents don't want their children to work before they ___ adulthood.",o:["reach","will reach","reached"],a:0,e:"Không dùng will sau before."},
      {q:"I'm not leaving this shop until I ___ something.",o:["have bought","will buy","bought"],a:0,e:"until + present perfect: phải mua xong."},
      {q:"Sashiko had a functional purpose before it ___ a decorative art form.",o:["became","has become","becomes"],a:0,e:"Quá khứ."},
      {q:"It's important to check the quality of a garment before you ___ it.",o:["buy","will buy","bought"],a:0,e:"Không dùng will sau before."}
    ]
  },
  reading:{
    title:"Saving the Emperor's Robe", est:"khoảng 700 từ · 20 phút",
    paras:[
      "A remarkable conservation project is bringing a 19th-century court robe back to life, but it will not be quick, cheap or simple.",
      "When the robe arrived at the regional museum in 2019, it was folded inside a wooden chest that had not been opened for decades. Made for a royal ceremony in the 1840s, it is a long gown of deep yellow silk, embroidered with dragons and clouds in gold and silver thread. Senior curator Ha Minh Chau remembers the moment the lid was lifted. ‘Everyone in the room went completely silent,’ she says. ‘You don't expect something so bright after so long in the dark.’",
      "The robe's appearance is only part of the story. Court records show that it was made in just four months by a team of more than thirty embroiderers working in shifts. Each dragon contains several thousand stitches, and the thread itself was produced by wrapping extremely thin strips of metal around a silk core. Experts believe that only a handful of garments of this quality were ever made, and that this may be the only one to survive in its original form.",
      "Yet while the colours have stayed surprisingly fresh, the fabric has not been so fortunate. Silk weakens naturally over time, and the weight of the metal thread has slowly pulled on the cloth beneath it. Along the shoulders and sleeves there are long splits, and in places the silk has become so fragile that it breaks if it is touched. In 2022, the museum launched a public appeal to pay for its repair, and within a year it had raised enough money to begin.",
      "Before any repairs start, the conservation team is carrying out a detailed investigation. Every section of the robe is being photographed under different kinds of light, which reveal old repairs that cannot be seen with the naked eye. The team will also compare the robe with paintings of court ceremonies from the same period. These comparisons have already started a debate. Some members of the museum's advisory board believe the team should remove all later repairs and return the robe to its 1840s state. Others argue that these changes, some made by palace servants, are themselves part of the garment's history and should be kept.",
      "The practical work will begin with surface cleaning, using a tiny vacuum tool that removes dust without disturbing the threads. The damaged areas will then be supported from behind with a fine silk crepeline, dyed to match the original colour. ‘We chose crepeline because it is almost transparent and very light,’ explains textile conservator Nguyen Thao. ‘Anything heavier would add to the problem we are trying to solve.’ Every stitch the team adds will go through existing holes in the fabric, so that no new damage is created.",
      "Thao estimates that the work will take around 1,500 hours. Given the size of the robe and the condition of the silk, this figure seems, if anything, rather optimistic. But she insists that the time is justified. ‘When it goes back on display, visitors won't be able to see what we've done from the front,’ she says. ‘But on the inside, everything will be recorded and visible, so that conservators in a hundred years can understand our decisions and, if necessary, undo them.’",
      "For Chau, the robe offers something that no history book can. ‘When you stand in front of it, you sense the hands that made it,’ she says. ‘It reminds us that the past was made by real people.’"
    ],
    note:"Bài đọc tự viết để luyện tập; bảo tàng, nhân vật và số liệu là giả định.",
    quiz:[
      {t:"head",text:"Câu 1–6: Choose the correct letter, A, B, C or D."},
      {q:"What does the writer say about the robe in the second paragraph?",o:["A It had been on display for many years.","B Its colours surprised the people who saw it.","C It was made for an emperor's wedding.","D It was found inside the royal palace."],a:1,e:"'You don't expect something so bright after so long in the dark.'"},
      {q:"What is the writer's purpose in the third paragraph?",o:["A to describe how the robe was worn","B to explain why the robe is so special","C to compare the robe with modern clothing","D to criticise the working conditions of embroiderers"],a:1,e:"Mô tả công sức, kỹ thuật và sự hiếm có → giải thích vì sao đặc biệt."},
      {q:"According to the writer, the main cause of damage to the robe is",o:["A the conditions in the wooden chest.","B the heaviness of the decoration.","C poor repairs made in the past.","D the way visitors have handled it."],a:1,e:"'the weight of the metal thread has slowly pulled on the cloth'."},
      {q:"The photographs taken under different kinds of light",o:["A show how the robe looked in the 1840s.","B reveal work done on the robe earlier.","C will be used in a new exhibition.","D help the team choose the right colours."],a:1,e:"'reveal old repairs that cannot be seen with the naked eye'."},
      {q:"Why was crepeline chosen?",o:["A It is the same material as the robe.","B It is cheap and easy to find.","C It will not make the robe heavier.","D It is stronger than other fabrics."],a:2,e:"'Anything heavier would add to the problem' → diễn đạt khác nhau, cùng ý."},
      {q:"Which of the following is the most suitable title for the passage?",o:["A A new design inspired by the past","B A long and careful task","C An unexpected discovery in a museum","D The life of a royal embroiderer"],a:1,e:"Phụ đề: 'will not be quick, cheap or simple'."},
      {t:"head",text:"Câu 7–10: Do the following statements agree with the views of the writer? Chọn YES / NO / NOT GIVEN."},
      {q:"The robe is likely to be the only surviving example of its kind.",o:["YES","NO","NOT GIVEN"],a:0,e:"'may be the only one to survive in its original form'."},
      {q:"The public appeal raised more money than the museum needed.",o:["YES","NO","NOT GIVEN"],a:2,e:"Chỉ nói 'enough money to begin'."},
      {q:"Everyone agrees on how far the restoration should go.",o:["YES","NO","NOT GIVEN"],a:1,e:"'These comparisons have already started a debate.'"},
      {q:"Thao's estimate of the time needed is realistic.",o:["YES","NO","NOT GIVEN"],a:1,e:"Tác giả: 'this figure seems, if anything, rather optimistic'."},
      {t:"head",text:"Câu 11–14: Complete each sentence with the correct ending. A to make sure no further harm is done to the fabric · B to reduce the cost of the project · C to remove dust from the outer layer · D to allow future experts to understand the work · E to compare the robe with images from its time · F to show visitors how the robe was repaired"},
      {q:"Paintings of court ceremonies will be studied",o:["A","B","C","D","E","F"],a:4,e:"Đoạn 5."},
      {q:"A tiny vacuum tool will be used",o:["A","B","C","D","E","F"],a:2,e:"Đoạn 6: surface cleaning."},
      {q:"New stitches will only go through existing holes",o:["A","B","C","D","E","F"],a:0,e:"'so that no new damage is created'."},
      {q:"Everything will be recorded on the inside of the robe",o:["A","B","C","D","E","F"],a:3,e:"'so that conservators in a hundred years can understand our decisions'. F là bẫy: mặt trước khách không thấy gì."}
    ]
  },
  listening:{
    title:"Section 4 · Batik: a traditional craft",
    intro:"Một bài giảng về batik, kỹ thuật nhuộm vải bằng sáp truyền thống của Indonesia. Câu hỏi dùng từ đồng nghĩa với bài nói (origins → beginning, cloth → fabric…), nhưng đáp án là đúng từ bạn nghe.",
    script:[
      ["Lecturer","Good afternoon. Today I'm going to talk about batik, a traditional way of decorating cloth that is most closely associated with the island of Java in Indonesia. The word batik is often said to mean ‘to write with dots’, which gives you an idea of how detailed the work can be."],
      ["Lecturer","Let's start with its origins. Wax-resist dyeing, which is the basic technique, was used in several ancient cultures, but in Java it developed into something extraordinary. At first, batik was a mark of status: certain patterns could only be worn by members of the royal court."],
      ["Lecturer","The process works like this. Hot wax is applied to plain cotton or silk using a small copper tool called a canting, which has a tiny spout, rather like a pen. The cloth is then dipped in dye. The areas covered in wax resist the dye and stay their original colour. The wax is removed by boiling, and the process can be repeated many times with different colours."],
      ["Lecturer","Producing a single piece of high-quality hand-drawn batik can take several months. In the nineteenth century, however, craftspeople introduced a copper stamp, which allowed wax to be printed onto the cloth much more quickly, and this made batik affordable for ordinary people."],
      ["Lecturer","Traditional designs carry meaning. One of the best-known is called parang, a pattern of diagonal lines that look like waves breaking on rocks. It was said to represent strength. Other patterns were worn at weddings or given to newborn babies."],
      ["Lecturer","Interestingly, each region developed its own style. Batik from the north coast, which had close trading links with China and Europe, tends to use bright colours and flowers, whereas inland batik usually uses brown, blue and white."],
      ["Lecturer","Today, batik is no longer only a traditional craft. In 2009, UNESCO recognised it as part of the world's cultural heritage, and in Indonesia many office workers now wear batik shirts on Fridays. Young designers are also combining it with modern styles, for example in jackets and trainers."],
      ["Lecturer","Unfortunately, there is one problem. Cheap printed fabric that only looks like batik is now produced in large quantities in factories, and many tourists can't tell the difference. As a result, the number of skilled artisans is falling, and some experts worry that the hand-drawn technique could disappear within a generation."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–10: Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer."},
      {t:"gap",q:"The word batik may mean ‘to write with ___’.",a:["dots"]},
      {t:"gap",q:"In the beginning, batik showed a person's ___.",a:["status"]},
      {t:"gap",q:"The wax is put on the fabric with a tool made of ___.",a:["copper"]},
      {t:"gap",q:"The wax is taken off the cloth by ___.",a:["boiling"]},
      {t:"gap",q:"The introduction of a ___ made batik cheaper to produce.",a:["copper stamp","stamp"]},
      {t:"gap",q:"The parang design was a symbol of ___.",a:["strength"]},
      {t:"gap",q:"Batik from the north coast often includes ___ and bright colours.",a:["flowers"]},
      {t:"gap",q:"In Indonesia nowadays, many ___ wear batik shirts once a week.",a:["office workers"]},
      {t:"gap",q:"Modern designers have used batik on items such as jackets and ___.",a:["trainers"]},
      {t:"gap",q:"Fewer people are now working as skilled ___.",a:["artisans"]}
    ]
  },
  writing:{
    type:"Task 2", min:250, time:"40 phút",
    prompt:"Some people argue that fashion items cost too much money. Others say that this is acceptable because fashion is an important part of life. Discuss both these views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
    plan:["Gạch chân hai quan điểm cần bàn: (1) đồ thời trang quá đắt, (2) chấp nhận được vì thời trang quan trọng","Nghĩ xem ai có thể giữ mỗi quan điểm: phụ huynh, sinh viên, người già / người nổi tiếng, nhà thiết kế, thanh thiếu niên","Mở bài: giới thiệu chủ đề + câu hỏi đặt ra","Thân 1: quan điểm 1, dùng According to… / Parents may argue that…","Thân 2: quan điểm 2, dùng Other people disagree. / In designers' opinion,…","Kết bài: tóm tắt các quan điểm + ý kiến riêng rõ ràng, không đưa ý mới"],
    model:"Clothes have always been a way for people to express who they are, and today advertisements for the latest fashions are everywhere, from magazines to social media. Many of these items are extremely expensive, which raises the question of whether such high prices can be justified.\n\nSome people argue that fashion simply costs too much, and I can understand their point of view. Before young people start work, they depend on their parents for money, and many parents feel pressured into buying designer trainers or jeans that they cannot really afford. Even after they have started earning, young adults often find it difficult to pay for fashionable clothes because they are saving for more important things, such as rent or further education. According to this view, the price of a brand name is largely a waste of money.\n\nOther people disagree. Celebrities, for example, may argue that looking good is part of their job, so the cost of clothes is a necessary investment in their image. Fashion designers would also say that high prices are fair, because creating original designs and using high-quality fabric takes a great deal of time and skill. For many teenagers, too, choosing their own clothes is an important way of showing their identity, and they look forward to buying better items when they have their own income.\n\nIn conclusion, while expensive fashion clearly matters to some groups, I believe that for most ordinary people it is not worth the price. These days there is plenty of choice, so it is possible to dress well without spending a fortune. Personally, I think parents should be strict about what they can afford, and people in general should buy clothes that suit their budget rather than their favourite brand."
  },
  speaking:{
    tip:"Part 3: nghe kỹ câu hỏi muốn bạn làm gì: so sánh (compare), liệt kê lợi ích (list points) hay đưa ý kiến kèm lý do (give an argument). Trả lời rõ ràng, đúng trọng tâm, có phát triển ý (First of all… Another thing is… In the past… whereas now…). Khi nói, nối phụ âm cuối với nguyên âm đầu của từ sau (if_it's, a lot_of) và ngắt nghỉ giữa các cụm ý để người nghe dễ theo dõi.",
    p1:["How important is fashion to you?","When did you last buy some new clothes?","Have you ever had your clothes made for you?","What's the oldest item of clothing that you own?","What dress is traditional in your country?"],
    p1sample:{q:"Have you ever had your clothes made for you?",a:"Yes, a few times, actually. In Vietnam it's quite common to have an áo dài made by a tailor, because it has to fit perfectly. The last time was before my cousin's wedding. I chose the cloth at the market, and the tailor took my measurements and finished it in about a week."},
    cue:{t:"Describe a museum or exhibition that you particularly enjoyed visiting.",pts:["where the museum or exhibition is/was","who you went with","what you saw there"],end:"and explain why you enjoyed visiting this museum or exhibition."},
    p2sample:"I'd like to talk about the Vietnamese Women's Museum in Hanoi, which I visited last spring. It's in the Old Quarter, not far from Hoan Kiem Lake, so it's easy to get to. I went with my older sister, who was visiting from Ho Chi Minh City, and to be honest, I wasn't expecting much, because I'd been to quite a lot of museums on school trips and found most of them a bit boring. But this one was different. There's a whole floor about fashion, with traditional clothes from many of Vietnam's ethnic groups. I remember a Hmong skirt that was covered in tiny, colourful stitches, and there was a short video showing how the women grow hemp, make the cloth and dye it with indigo. It takes months to make one skirt! There was also a section on the history of the áo dài, showing how it has changed from the 1930s until now. The reason I enjoyed it so much is that it made history feel personal. Instead of dates and battles, it was about real women and the things they made with their hands. And my sister and I spent ages afterwards talking about our grandmother's old clothes.",
    p3:["What benefits can schoolchildren gain from visiting museums?","How do you think most children feel about visiting a museum?","Are museums more educational now than they were when your parents were young?","Why do many people like to wear fashionable clothes?","What factors cause adult fashions to change?"],
    p3sample:{q:"Are museums more educational now than they were when your parents were young?",a:"I don't think there's any doubt that they're much better now. In the past, museums were mainly places to keep ancient objects, like coins or pots, behind glass, and you just read a label. Whereas now, many of them have interactive displays, videos and even virtual reality, so visitors can actually experience things. On the other hand, my parents say museums used to be quieter, so maybe people concentrated more. But overall, I'd say today's museums are far more educational, especially for children."},
    phrases:["First of all,…","Another benefit is that…","In the past,… whereas now…","Compared with…","I don't think there's any doubt that…","On the other hand,…"]
  },
  lesson:[
    {g:"Reading: phục chế trang phục cổ",w:"restore",p:"v",ipa:"/rɪˈstɔː/",vi:"phục hồi, phục chế",ex:"A project is being undertaken to restore the dress.",exvi:"Một dự án đang được thực hiện để phục chế chiếc váy."},
    {g:"Reading: phục chế trang phục cổ",w:"intricate",p:"adj",ipa:"/ˈɪntrɪkət/",vi:"phức tạp, tỉ mỉ",ex:"The embroidery is astonishingly intricate.",exvi:"Đường thêu tỉ mỉ đến kinh ngạc."},
    {g:"Reading: phục chế trang phục cổ",w:"costume",p:"n",ipa:"/ˈkɒstjuːm/",vi:"trang phục (biểu diễn, theo thời kỳ)",ex:"She kept her costumes and reused them many times.",exvi:"Bà giữ lại trang phục biểu diễn và dùng lại nhiều lần."},
    {g:"Reading: phục chế trang phục cổ",w:"iconic",p:"adj",ipa:"/aɪˈkɒnɪk/",vi:"mang tính biểu tượng",ex:"It became one of the most iconic costumes of the age.",exvi:"Nó trở thành một trong những trang phục mang tính biểu tượng nhất thời đó."},
    {g:"Reading: phục chế trang phục cổ",w:"extravagant",p:"adj",ipa:"/ɪkˈstrævəɡənt/",vi:"xa hoa, phô trương",ex:"The productions were extravagant and daring.",exvi:"Các vở diễn xa hoa và táo bạo."},
    {g:"Reading: phục chế trang phục cổ",w:"immortalise",p:"v",ipa:"/ɪˈmɔːtəlaɪz/",vi:"làm cho bất tử",ex:"A painter immortalised her in a famous portrait.",exvi:"Một hoạ sĩ đã làm bà bất tử qua bức chân dung nổi tiếng."},
    {g:"Reading: phục chế trang phục cổ",w:"cumulative",p:"adj",ipa:"/ˈkjuːmjələtɪv/",vi:"tích luỹ dần",ex:"The cumulative effects of time have damaged the silk.",exvi:"Tác động tích luỹ của thời gian đã làm hỏng lớp lụa."},
    {g:"Reading: phục chế trang phục cổ",w:"fundraising",p:"n",ipa:"/ˈfʌndreɪzɪŋ/",vi:"gây quỹ",ex:"A fundraising project was launched to pay for the work.",exvi:"Một dự án gây quỹ được khởi động để chi trả cho công việc."},
    {g:"Reading: phục chế trang phục cổ",w:"workmanship",p:"n",ipa:"/ˈwɜːkmənʃɪp/",vi:"tay nghề, kỹ thuật chế tác",ex:"It's unusual to see this level of workmanship on a costume.",exvi:"Hiếm thấy tay nghề cỡ này trên một bộ trang phục."},
    {g:"Reading: phục chế trang phục cổ",w:"stitch",p:"v / n",ipa:"/stɪtʃ/",vi:"khâu; mũi khâu",ex:"The overdress will be stitched onto a net support.",exvi:"Lớp áo ngoài sẽ được khâu lên lớp lưới đỡ."},
    {g:"Listening: nghề thủ công truyền thống",w:"embroidery",p:"n",ipa:"/ɪmˈbrɔɪdəri/",vi:"nghề thêu, đồ thêu",ex:"Vietnamese hand embroidery is famous for its detail.",exvi:"Tranh thêu tay Việt Nam nổi tiếng vì độ tỉ mỉ."},
    {g:"Listening: nghề thủ công truyền thống",w:"dye",p:"v / n",ipa:"/daɪ/",vi:"nhuộm; thuốc nhuộm",ex:"The cloth is dipped in blue dye.",exvi:"Tấm vải được nhúng vào thuốc nhuộm xanh."},
    {g:"Listening: nghề thủ công truyền thống",w:"artisan",p:"n",ipa:"/ˌɑːtɪˈzæn/",vi:"nghệ nhân",ex:"The number of skilled artisans is falling.",exvi:"Số nghệ nhân lành nghề đang giảm."},
    {g:"Listening: nghề thủ công truyền thống",w:"cultural heritage",p:"n phr",ipa:"/ˈkʌltʃərəl ˈherɪtɪdʒ/",vi:"di sản văn hoá",ex:"Batik is part of the world's cultural heritage.",exvi:"Batik là một phần di sản văn hoá thế giới."},
    {g:"Speaking: bảo tàng & thời trang",w:"exhibition",p:"n",ipa:"/ˌeksɪˈbɪʃn/",vi:"triển lãm",ex:"We went to an exhibition of old photographs.",exvi:"Chúng tôi đi xem triển lãm ảnh cũ."},
    {g:"Speaking: bảo tàng & thời trang",w:"interactive display",p:"n phr",ipa:"/ˌɪntərˈæktɪv dɪˈspleɪ/",vi:"khu trưng bày tương tác",ex:"Children love the interactive displays.",exvi:"Trẻ con rất thích khu trưng bày tương tác."},
    {g:"Speaking: bảo tàng & thời trang",w:"fashionable",p:"adj",ipa:"/ˈfæʃnəbl/",vi:"hợp mốt",ex:"Why do people like to wear fashionable clothes?",exvi:"Vì sao mọi người thích mặc đồ hợp mốt?"},
    {g:"Speaking: bảo tàng & thời trang",w:"tailor",p:"n",ipa:"/ˈteɪlə/",vi:"thợ may",ex:"A tailor made my áo dài in a week.",exvi:"Thợ may đã may áo dài cho tôi trong một tuần."},
    {g:"Writing Task 2: giá đồ thời trang",w:"pressurise",p:"v",ipa:"/ˈpreʃəraɪz/",vi:"gây áp lực",ex:"Parents are often pressurised into buying designer jeans.",exvi:"Cha mẹ thường bị ép phải mua quần jeans hàng hiệu."},
    {g:"Writing Task 2: giá đồ thời trang",w:"income",p:"n",ipa:"/ˈɪnkʌm/",vi:"thu nhập",ex:"Teenagers look forward to having their own income.",exvi:"Thanh thiếu niên mong có thu nhập riêng."},
    {g:"Writing Task 2: giá đồ thời trang",w:"budget",p:"n",ipa:"/ˈbʌdʒɪt/",vi:"ngân sách",ex:"People have to buy within their budget.",exvi:"Mọi người phải mua trong khả năng ngân sách."},
    {g:"Writing Task 2: giá đồ thời trang",w:"uniform",p:"n",ipa:"/ˈjuːnɪfɔːm/",vi:"đồng phục",ex:"When employees put on a uniform, they all look the same.",exvi:"Khi nhân viên mặc đồng phục, họ trông giống nhau."},
    {g:"Ôn tập Unit 8",w:"loom",p:"n",ipa:"/luːm/",vi:"khung cửi, máy dệt",ex:"Textiles are woven into cloth on a loom.",exvi:"Sợi được dệt thành vải trên khung cửi."},
    {g:"Ôn tập Unit 8",w:"shrink",p:"v",ipa:"/ʃrɪŋk/",vi:"co lại",ex:"Woollen fabrics sometimes shrink when you wash them.",exvi:"Vải len đôi khi bị co lại khi giặt."}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u8 = {
  tips:{
    reading:[
      {type:"Multiple choice", tips:[
        "Tìm lựa chọn diễn đạt cùng ý, đừng chỉ ghép từ giống nhau.",
        "Nếu có câu hỏi về tiêu đề bài, đọc lại phụ đề rồi đọc lướt từng đoạn để kiểm tra chủ đề chung."
      ]},
      {type:"Yes / No / Not Given", tips:[
        "Ý trong bài có thể được diễn đạt khác trong câu hỏi.",
        "Khi đã tìm đúng chỗ trong bài, đọc kỹ rồi mới quyết định.",
        "Đáp án phải phản ánh quan điểm hoặc nhận định của tác giả, không phải của nhân vật trong bài."
      ]},
      {type:"Matching sentence endings", tips:[
        "Gạch chân từ khoá trong câu hỏi và dùng chúng để tìm đúng chỗ trong bài (các câu theo đúng thứ tự trong bài).",
        "Đọc lại câu đã ghép để kiểm tra có hợp lý không."
      ]}
    ],
    listening:[
      {type:"Sentence completion (Section 4)", tips:[
        "Từ trong câu hỏi không phải lúc nào cũng giống từ bạn nghe: hãy nghe cùng ý (origins → in the beginning).",
        "Bạn sẽ nghe đúng từ cần điền vào chỗ trống.",
        "Section 4 không có giờ nghỉ giữa bài, nên đọc trước tất cả câu hỏi.",
        "Đọc lại câu đã hoàn chỉnh để kiểm tra có hợp lý không."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 3", tips:[
        "Nghe kỹ câu hỏi: bạn có thể phải so sánh, giải thích, liệt kê ý hoặc đưa lập luận.",
        "Câu trả lời phải rõ ràng, đúng trọng tâm và được phát triển đầy đủ.",
        "Cố dùng đa dạng từ vựng và cấu trúc câu.",
        "Nối âm giữa phụ âm cuối và nguyên âm đầu, ngắt nghỉ giữa các cụm ý để nói tự nhiên."
      ]}
    ],
    writing:[
      {type:"Writing Task 2: bàn hai quan điểm", tips:[
        "Kiểm tra đề yêu cầu bàn bao nhiêu quan điểm.",
        "Nghĩ xem ai có thể giữ những quan điểm đó và diễn đạt bằng từ của bạn.",
        "Nêu rõ ý kiến riêng của bạn.",
        "Kết bài: tóm tắt các ý và rút ra kết luận, không đưa lập luận mới."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"Young men and women tend to wear similar dresses.", good:"Young men and women tend to wear similar clothes.", why:"dresses chỉ váy của phụ nữ; nói chung dùng clothes."},
    {k:"vocab", bad:"People need shelter, cloth to wear and food to eat.", good:"People need shelter, clothes to wear and food to eat.", why:"cloth là vải (chất liệu), clothes là quần áo."},
    {k:"vocab", bad:"Fans imitate their style of dresses.", good:"Fans imitate their style of dress.", why:"style of dress (không đếm được) = kiểu ăn mặc."},
    {k:"vocab", bad:"People who travel may adopt the culture, dresses and customs of another country.", good:"People who travel may adopt the culture, dress and customs of another country.", why:"dress (không đếm được) = trang phục nói chung."},
    {k:"vocab", bad:"I bought a new clothes yesterday.", good:"I bought some new clothes yesterday.", why:"clothes luôn số nhiều, không dùng a."},
    {k:"grammar", bad:"I go shopping when I will be upset by somebody.", good:"I go shopping when I am upset by somebody.", why:"Không dùng will sau when."},
    {k:"grammar", bad:"The customer was aware of the price before she buy the dress.", good:"The customer was aware of the price before she bought the dress.", why:"Quá khứ: before + past simple."},
    {k:"grammar", bad:"After graduate, we need to compete for a good job.", good:"After we graduate, we need to compete for a good job.", why:"after + mệnh đề đầy đủ (hoặc after graduating)."},
    {k:"grammar", bad:"We must not stop until achieved them.", good:"We must not stop until we achieve them.", why:"until + chủ ngữ + động từ."},
    {k:"grammar", bad:"When children will grow up, they face many problems.", good:"When children grow up, they face many problems.", why:"Không dùng will sau when."}
  ],
  fix:[
    {t:"gap", q:"Some parents don't want their children to work before they will reach adulthood. → Sửa: ___", a:["reach"], e:"Không dùng will sau before."},
    {t:"gap", q:"I'm not leaving this shop until I will buy something. → Sửa: ___", a:["have bought","buy"], e:"until + present perfect / present simple."},
    {t:"gap", q:"Sashiko had a functional purpose before it has become a decorative art. → Sửa: ___", a:["became"], e:"Quá khứ."},
    {t:"gap", q:"It's important to check the quality of a garment before you will buy it. → Sửa: ___", a:["buy"], e:"Không dùng will sau before."},
    {t:"gap", q:"Until I went to India, I have had no idea how colourful the clothes were. → Sửa: ___", a:["had"], e:"Quá khứ đơn."},
    {t:"gap", q:"I promise we go out after the show has finished. → Sửa: ___", a:["we'll","we will"], e:"Mệnh đề chính nói về tương lai → will."},
    {t:"gap", q:"If Marc had more money, he could afford some new cloth. → Sửa: ___", a:["clothes"], e:"Quần áo → clothes."},
    {t:"gap", q:"It's formal dresses at the party tonight, so I'm wearing my suit. → Sửa: It's formal ___", a:["dress"], e:"formal dress (không đếm được)."},
    {t:"gap", q:"Fortunately, the clothes that was used to make these curtains is fire-resistant. → Sửa: ___", a:["cloth"], e:"Vải may rèm → cloth."},
    {t:"gap", q:"There are many different styles of clothes for women. Some women prefer to wear skirts rather than dress. → Sửa: ___", a:["dresses"], e:"Váy liền (đếm được, số nhiều) → dresses."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u8 = [
  {q:"I'll call you when I ___ home.",o:["get","will get","got"],a:0,e:"Không dùng will sau when.",k:"c"},
  {q:"Wait here until I ___ back.",o:["come","will come","came"],a:0,e:"until + hiện tại đơn.",k:"c"},
  {q:"She washed her hands before she ___ the cloth.",o:["touched","touches","will touch"],a:0,e:"Quá khứ.",k:"c"},
  {q:"After the shop ___, we'll go for dinner.",o:["closes","will close","closed"],a:0,e:"Không dùng will sau after.",k:"c"},
  {q:"You can't go out until you ___ your homework.",o:["have finished","will finish","finished"],a:0,e:"until + present perfect: làm xong rồi mới.",k:"c"},
  {q:"When I was a child, I ___ wear a uniform to school.",o:["had to","have to","will have to"],a:0,e:"Quá khứ.",k:"c"},
  {q:"___ new fashions reach the shops, prices often go up.",o:["When","Until","Before"],a:0,e:"Khi (điều thường xảy ra).",k:"c"},
  {q:"I packed my ___ in the suitcase.",o:["clothes","cloth","dress"],a:0,e:"Quần áo → clothes.",k:"c"},
  {q:"She wore a beautiful red ___ to the party.",o:["dress","clothes","cloth"],a:0,e:"Một chiếc váy → a dress.",k:"c"},
  {q:"The curtains are made from heavy ___.",o:["cloth","clothes","dresses"],a:0,e:"Vải (chất liệu) → cloth.",k:"c"},
  {q:"The guests had to wear formal ___.",o:["dress","dresses","cloths"],a:0,e:"formal dress (không đếm được).",k:"c"},
  {q:"She has three party ___ in her wardrobe.",o:["dresses","dress","cloth"],a:0,e:"Đếm được số nhiều.",k:"c"},
  {t:"gap",q:"Staff cannot smoke ___ they have left the building.",a:["until"],e:"not … until.",k:"g"},
  {t:"gap",q:"___ you wear casual clothes to work, it is hard to wear a suit again.",a:["after"],e:"Sau khi.",k:"g"},
  {t:"gap",q:"Customers spent less on clothes ___ designer brands were introduced.",a:["before"],e:"Trước khi.",k:"g"},
  {t:"gap",q:"Some people don't go shopping ___ the sales start.",a:["until"],e:"not … until.",k:"g"},
  {t:"gap",q:"When I ___ (go) to the fashion museum, I'll buy a souvenir.",a:["go"],e:"Không dùng will sau when.",k:"g"},
  {t:"gap",q:"The cloth is washed after it has ___ (dye) → điền dạng bị động: has been ___.",a:["dyed"],e:"after it has been dyed: present perfect bị động.",k:"g"},
  {t:"gap",q:"Woollen fabrics sometimes shrink when you ___ (wash) them.",a:["wash"],e:"Zero conditional với when.",k:"g"},
  {t:"gap",q:"I need some new ___ for the winter.",a:["clothes"],e:"Quần áo.",k:"g"},
  {t:"gap",q:"Different textiles are woven into ___ using a loom.",a:["cloth"],e:"Vải.",k:"g"},
  {q:"Câu nào đúng?",o:["I'll text you when I arrive.","I'll text you when I will arrive."],a:0,e:"Không dùng will sau when.",k:"s"},
  {q:"Câu nào đúng?",o:["After finish work, I go to the gym.","After I finish work, I go to the gym."],a:1,e:"after + mệnh đề đầy đủ.",k:"s"},
  {q:"Câu nào đúng?",o:["Don't leave until you've paid.","Don't leave until you'll pay."],a:0,e:"until + present perfect.",k:"s"},
  {q:"Câu nào đúng?",o:["She checked the size before she bought it.","She checked the size before she buys it."],a:0,e:"Quá khứ cả hai vế.",k:"s"},
  {q:"Câu nào đúng?",o:["My mother makes all her own clothes.","My mother makes all her own cloths."],a:0,e:"clothes = quần áo.",k:"s"},
  {q:"Câu nào đúng?",o:["The áo dài is a traditional Vietnamese dress.","The áo dài is a traditional Vietnamese clothes."],a:0,e:"a dress (một trang phục cụ thể).",k:"s"},
  {q:"Câu nào đúng?",o:["What kind of clothes do you like?","What kind of cloth do you like to wear?"],a:0,e:"Mặc → clothes.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u8:ancient":{s:["very old","historic"],a:["modern","new"]},
  "b2u8:celebrity":{s:["famous person","star"]},
  "b2u8:conservation":{s:["preservation","protection","restoration"],a:["destruction"]},
  "b2u8:contemporary":{s:["of the same period"],a:["later"]},
  "b2u8:decorative":{s:["ornamental"],a:["functional","plain"]},
  "b2u8:fabric":{s:["cloth","material","textile"]},
  "b2u8:fragile":{s:["delicate","weak","easily broken"],a:["strong","robust"]},
  "b2u8:functional":{s:["practical","useful"],a:["decorative"]},
  "b2u8:garment":{s:["item of clothing","piece of clothing"]},
  "b2u8:original":{s:["first","earliest","authentic"],a:["copy","later"]},
  "b2u8:preserve":{s:["protect","conserve","keep"],a:["destroy","damage"]},
  "b2u8:repair":{s:["fix","mend","restore"],a:["damage","break"]},
  "b2u8:unique":{s:["one of a kind","unusual"],a:["common","ordinary"]},
  "b2u8:origins":{s:["beginnings","roots","source"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u8|Saving the Emperor's Robe"] = [["court robe","n phr","áo bào (của triều đình)"],["chest","n","rương, hòm"],["embroider","v","thêu"],["curator","n","người quản lý hiện vật bảo tàng"],["in shifts","phrase","theo ca"],["a handful of","phrase","một số ít"],["fortunate","adj","may mắn"],["split","n","vết rách"],["public appeal","n phr","lời kêu gọi quyên góp công khai"],["with the naked eye","phrase","bằng mắt thường"],["advisory board","n phr","hội đồng tư vấn"],["transparent","adj","trong suốt"],["if anything","phrase","nếu có thì (thậm chí còn)"],["optimistic","adj","lạc quan"],["justified","adj","xứng đáng, chính đáng"],["undo","v","gỡ bỏ, làm lại"]];
})();
