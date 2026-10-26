/* Mẹo làm bài & lỗi thường gặp cho từng unit, bám theo các hộp "Exam advice" và "IELTS Common mistakes" trong sách.
   Diễn đạt lại bằng tiếng Việt, không chép nguyên văn sách; ví dụ câu sai/câu đúng là câu tự viết.
   tips[skill] = [{type, tips:[...]}] · mistakes = [{k:"grammar"|"vocab", bad, good, why}] · fix = câu hỏi "Tìm và sửa lỗi" (dạng gap) */
window.TIPS = {
  u1: {
    tips: {
      reading: [
        {type: "Table completion (Reading 1)", tips: [
          "Đọc tiêu đề các cột và hàng trước để biết bảng sắp xếp thông tin theo cách nào (ví dụ: thành phố → điểm tốt → điểm xấu).",
          "Nhìn các từ quanh ô trống để đoán loại từ cần điền: danh từ, tính từ hay con số.",
          "Trong bài, thông tin thường được diễn đạt bằng từ khác. Hãy tìm từ đồng nghĩa (ví dụ: not many ↔ few, well known ↔ famous) rồi đọc kỹ câu quanh đó.",
          "Chép từ trong bài đúng chính tả và đúng dạng, không tự đổi sang số nhiều hay thì khác.",
          "Kiểm tra lại giới hạn số từ (ví dụ ONE WORD). Viết thừa một từ là mất điểm câu đó."
        ]},
        {type: "Note completion (Reading 2)", tips: [
          "Đọc tiêu đề của phần ghi chú trước để tìm đúng đoạn trong bài.",
          "Đọc kỹ những đoạn chứa ý chính của từng ghi chú. Đáp án không nhất thiết theo đúng thứ tự trong bài.",
          "ONE WORD OR A NUMBER nghĩa là một từ hoặc một con số. Viết con số bằng chữ số (143) là được tính là một số."
        ]}
      ],
      listening: [
        {type: "Form completion", tips: [
          "Trước khi nghe, đọc từng ô và đoán loại thông tin cần điền: tên, địa chỉ, số điện thoại, ngày tháng hay giá tiền.",
          "Tên riêng thường được đánh vần. Hãy luyện bảng chữ cái tiếng Anh, nhất là các chữ dễ nhầm như A/E/I, G/J và chữ đôi (double L).",
          "Cẩn thận với số dễ nhầm như fifteen/fifty, và cách đọc số điện thoại: 'double six' = 66, 'oh' = 0.",
          "Người nói hay tự sửa lại ('no, sorry, it's the 14th'). Luôn lấy thông tin cuối cùng.",
          "Không viết quá số từ cho phép, và viết đúng từ bạn nghe được."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 1", tips: [
          "Đừng trả lời chỉ bằng một hai từ. Hãy nói thành 2–3 câu đầy đủ.",
          "Nhấn giọng vào những từ trả lời trực tiếp câu hỏi (ví dụ: I'm a STUDENT. I study MEDICINE).",
          "Thêm thông tin khi có thể: lý do, ví dụ hoặc cảm nhận của bạn.",
          "Dùng hiện tại đơn cho sự thật và thói quen (I live in…), hiện tại tiếp diễn cho việc đang thay đổi (My town is getting busier)."
        ]}
      ],
      writing: [
        {type: "Writing Task 1: tóm tắt biểu đồ", tips: [
          "Task 1 nên làm trong khoảng 20 phút, viết ít nhất 150 từ.",
          "Mở bài bằng một câu giới thiệu biểu đồ thể hiện gì, diễn đạt lại đề (The chart shows…), không chép nguyên văn đề.",
          "Nghiên cứu biểu đồ kỹ, chọn các đặc điểm quan trọng nhất (lớn nhất, nhỏ nhất, khác biệt rõ), không liệt kê hết mọi con số.",
          "Viết một câu tổng quan bắt đầu bằng Overall, …",
          "Kiểm tra lại mọi con số. Viết sai số liệu là lỗi nặng.",
          "Sau con số dùng percent (40 percent). Percentage đi với the/a, không đứng sau con số (the percentage of visitors)."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"Most people are thinking money is important.", good:"Most people think money is important.", why:"think (cho rằng) là động từ chỉ trạng thái, không dùng ở dạng -ing."},
      {k:"grammar", bad:"Nowadays more cities become bigger and bigger.", good:"Nowadays more cities are becoming bigger and bigger.", why:"Thay đổi đang diễn ra quanh thời điểm hiện tại → hiện tại tiếp diễn."},
      {k:"grammar", bad:"Most countries are encourage tourism.", good:"Most countries encourage tourism.", why:"Không ghép am/is/are với động từ nguyên mẫu. Sự thật chung → hiện tại đơn."},
      {k:"grammar", bad:"My sister work in a hospital.", good:"My sister works in a hospital.", why:"Chủ ngữ ngôi thứ ba số ít → thêm -s/-es."},
      {k:"vocab", bad:"The percent of teenagers who cycle is high.", good:"The percentage of teenagers who cycle is high.", why:"Không có số đứng trước → dùng percentage."},
      {k:"vocab", bad:"Around 40 percentage of visitors came from Australia.", good:"Around 40 percent of visitors came from Australia.", why:"Sau con số → dùng percent."},
      {k:"vocab", bad:"There are many big citys and beautiful beachs.", good:"There are many big cities and beautiful beaches.", why:"Phụ âm + y → -ies; tận cùng -ch, -sh, -s, -x → -es."},
      {k:"vocab", bad:"Two mans and three womans were interviewed.", good:"Two men and three women were interviewed.", why:"Số nhiều bất quy tắc: man → men, woman → women, child → children."}
    ],
    fix: [
      {t:"gap", q:"At the moment I study English at a language school. → Sửa: ___", a:["am studying","'m studying","I am studying","I'm studying"], e:"'At the moment' → hiện tại tiếp diễn."},
      {t:"gap", q:"She don't like living in a big city. → Sửa: ___", a:["doesn't","does not","doesn't like"], e:"She → doesn't."},
      {t:"gap", q:"The percent of people who cycle to work is 12%. → Sửa: ___", a:["percentage","The percentage"], e:"Không có con số đứng trước → percentage."},
      {t:"gap", q:"Only 9 percentage of visitors came from the USA. → Sửa: ___", a:["percent","9 percent","per cent"], e:"Sau con số → percent."},
      {t:"gap", q:"Many tourist visit the old town every year. → Sửa: ___", a:["tourists"], e:"many + danh từ số nhiều."},
      {t:"gap", q:"There are three big citys in the north. → Sửa: ___", a:["cities"], e:"city → cities."},
      {t:"gap", q:"I am knowing a lot of people in my village. → Sửa: ___", a:["know","I know"], e:"know là động từ trạng thái."},
      {t:"gap", q:"Prices in the city centre is rising quickly. → Sửa: ___", a:["are","are rising"], e:"Prices số nhiều → are."},
      {t:"gap", q:"Both womans in the photo are doctors. → Sửa: ___", a:["women"], e:"woman → women."},
      {t:"gap", q:"Look! The children play in the park. → Sửa: ___", a:["are playing","'re playing"], e:"'Look!' → việc đang xảy ra."}
    ]
  },

  u2: {
    tips: {
      reading: [
        {type: "Flow-chart completion (Reading 1)", tips: [
          "Lần theo các mũi tên để hiểu trình tự. Sơ đồ về cuộc đời một người thường đi theo thời gian, giống thứ tự trong bài.",
          "Với mỗi ô, quyết định loại thông tin cần điền: năm, nơi chốn, nghề nghiệp, ngôn ngữ…",
          "Chép đúng chính tả. Kiểm tra giới hạn NO MORE THAN TWO WORDS AND/OR A NUMBER."
        ]},
        {type: "Short-answer questions (Reading 1)", tips: [
          "Gạch chân từ khoá trong câu hỏi, đặc biệt là từ để hỏi (What word…? Which event…?) để biết cần tìm loại thông tin gì.",
          "Đọc lướt để tìm đoạn chứa từng từ khoá, rồi đọc kỹ đoạn đó.",
          "Câu trả lời lấy nguyên từ hoặc con số trong bài, không cần viết thành câu."
        ]},
        {type: "True / False / Not Given (Reading 2)", tips: [
          "Tìm trong bài những từ giống hoặc đồng nghĩa với từ trong câu.",
          "TRUE: bài nói cùng ý với câu. FALSE: bài nói ý ngược lại. NOT GIVEN: bài không có thông tin để khẳng định hay phủ định.",
          "Chỉ dựa vào bài đọc, không dùng hiểu biết bên ngoài.",
          "Chú ý những từ làm thay đổi nghĩa như only, always, all, never. Một chữ 'only' có thể biến TRUE thành FALSE."
        ]},
        {type: "Đoán nghĩa từ mới", tips: [
          "Đọc câu trước và sau để đoán nghĩa từ ngữ cảnh.",
          "Dùng tiền tố, hậu tố: -er/-or = người hoặc vật làm gì (seafarer, navigator); un-/im- = không (impassable); -able = có thể (navigable)."
        ]}
      ],
      listening: [
        {type: "Note completion", tips: [
          "Trước khi nghe, đọc ghi chú và quyết định mỗi ô cần thông tin gì và loại từ gì (danh từ, số, tên một môn học…).",
          "Chú ý các cụm báo hiệu đáp án sắp đến, như he's called…, he's done a course in…, in his spare time…",
          "Viết đúng từ nghe được và kiểm tra chính tả."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 1", tips: [
          "Khi có thể, thêm lý do hoặc kết quả cho câu trả lời: because…, so…",
          "Nói rõ ràng, không cần nói quá nhanh. Nếu nói sai, hãy tự sửa lại; giám khảo đánh giá cao việc này.",
          "Nếu không hiểu câu hỏi, có thể hỏi lại: Could you repeat the question, please?",
          "Kể chuyện quá khứ (thời đi học, tuổi thơ) thì dùng quá khứ đơn, và phát âm đuôi -ed đúng: /t/ (asked), /d/ (called), /ɪd/ (wanted)."
        ]}
      ],
      writing: [
        {type: "Writing Task 2: bài luận", tips: [
          "Task 2 nên làm trong khoảng 40 phút, viết ít nhất 250 từ.",
          "Đọc đề thật kỹ và trả lời tất cả các phần của đề. Bỏ sót một phần sẽ bị trừ điểm Task Response.",
          "Dành vài phút gạch chân ý chính, liệt kê ý (ưu điểm, nhược điểm…) và lập dàn ý 4–5 đoạn trước khi viết.",
          "Mở mỗi đoạn bằng một câu giới thiệu ý chính của đoạn.",
          "Nối ý bằng also, and, but, however. However thường đứng đầu câu và có dấu phẩy theo sau; but nối hai vế trong cùng một câu.",
          "Nêu rõ ý kiến của bạn: I think…, I believe…, In my opinion…, In my view…, rồi kiểm tra chính tả khi viết xong."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"The number of visitors is 76 in 1911 and doubled in 1941.", good:"The number of visitors was 76 in 1911 and doubled in 1941.", why:"Có mốc thời gian quá khứ (1911) → quá khứ đơn."},
      {k:"grammar", bad:"In the past, when we want to go somewhere, we had to walk.", good:"In the past, when we wanted to go somewhere, we had to walk.", why:"Cả câu nói về quá khứ → các động từ đều ở quá khứ."},
      {k:"grammar", bad:"The amount of leisure time has dropped to 3% in 2010.", good:"The amount of leisure time dropped to 3% in 2010.", why:"Năm cụ thể đã qua → quá khứ đơn, không dùng hiện tại hoàn thành."},
      {k:"grammar", bad:"Cinema attendance was risen from 60% to 80%.", good:"Cinema attendance rose from 60% to 80%.", why:"rise là nội động từ, không dùng ở dạng bị động. rise → rose → risen."},
      {k:"grammar", bad:"Families were large. However they were often poor.", good:"Families were large. However, they were often poor.", why:"However đứng đầu câu → có dấu phẩy theo sau."},
      {k:"vocab", bad:"The problem occured last year.", good:"The problem occurred last year.", why:"occur kết thúc bằng một nguyên âm + một phụ âm và trọng âm ở cuối → gấp đôi r: occurred."},
      {k:"vocab", bad:"She prefered the train and droped her bike.", good:"She preferred the train and dropped her bike.", why:"prefer → preferred, drop → dropped (gấp đôi phụ âm cuối)."},
      {k:"vocab", bad:"The city developped quickly and we staied there.", good:"The city developed quickly and we stayed there.", why:"develop không nhấn âm cuối → không gấp đôi p. Nguyên âm + y → giữ y: stayed."}
    ],
    fix: [
      {t:"gap", q:"In 2001 the number of students rise to 2,000. → Sửa: ___", a:["rose"], e:"Năm 2001 → quá khứ: rise → rose."},
      {t:"gap", q:"When I was a child, I play football every day. → Sửa: ___", a:["played"], e:"Quá khứ → played."},
      {t:"gap", q:"We stoped at a small café on the way. → Sửa: ___", a:["stopped"], e:"stop → stopped (gấp đôi p)."},
      {t:"gap", q:"The price has increased to $5 in 2010. → Sửa: ___", a:["increased"], e:"Năm cụ thể → quá khứ đơn, bỏ has."},
      {t:"gap", q:"He studyed history in London. → Sửa: ___", a:["studied"], e:"Phụ âm + y → -ied."},
      {t:"gap", q:"Something strange occured last night. → Sửa: ___", a:["occurred"], e:"occur → occurred."},
      {t:"gap", q:"Did you went to the party on Saturday? → Sửa: ___", a:["go"], e:"Sau did dùng động từ nguyên mẫu."},
      {t:"gap", q:"My grandmother was born in 1950 and grow up in Hue. → Sửa: ___", a:["grew","grew up"], e:"grow → grew."},
      {t:"gap", q:"Families in the past was much larger than today. → Sửa: ___", a:["were"], e:"Families số nhiều, quá khứ → were."},
      {t:"gap", q:"We was very tired after the journey. → Sửa: ___", a:["were"], e:"We → were."}
    ]
  },

  u3: {
    tips: {
      reading: [
        {type: "Labelling a diagram (Reading 1)", tips: [
          "Nhìn kỹ hình vẽ trước khi đọc: nó mô tả vật gì, gồm những bộ phận nào, các mũi tên chỉ vào đâu.",
          "Tìm đoạn trong bài mô tả chính vật đó. Thông tin cho sơ đồ thường nằm gọn trong một hai đoạn.",
          "Dùng các nhãn đã có sẵn trên hình làm mốc để định vị ô trống.",
          "Chép đúng từ trong bài và giữ đúng giới hạn số từ."
        ]},
        {type: "Matching headings (Reading 2)", tips: [
          "Đọc câu đầu và câu cuối mỗi đoạn trước, vì ý chính thường nằm ở đó.",
          "Tiêu đề phải khớp với ý chính của CẢ đoạn, không chỉ một chi tiết nhỏ trong đoạn.",
          "Cẩn thận với tiêu đề chứa từ giống hệt trong đoạn: đó thường là bẫy.",
          "Luôn có tiêu đề thừa. Làm đoạn dễ trước rồi loại dần."
        ]}
      ],
      listening: [
        {type: "Labelling a diagram", tips: [
          "Trước khi nghe, xem hình và đoán loại từ cho từng nhãn (thường là danh từ chỉ bộ phận).",
          "Lắng nghe từ chỉ vị trí như at the top, underneath, next to, on the left để theo dõi người nói đang tả phần nào."
        ]},
        {type: "Multiple choice", tips: [
          "Gạch chân từ khoá trong câu hỏi và các phương án trước khi nghe.",
          "Người nói thường dùng từ đồng nghĩa chứ không lặp lại đúng từ trong phương án.",
          "Thường cả ba phương án đều được nhắc đến. Hãy nghe xem phương án nào được khẳng định, phương án nào bị loại."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 2", tips: [
          "Đọc kỹ thẻ đề và trả lời đủ các gợi ý theo thứ tự, nhờ vậy bài nói có cấu trúc rõ.",
          "Mở đầu ngắn gọn: I'd like to talk about…",
          "Dùng từ nối để chuyển ý: First of all…, Another thing is…, As for…",
          "Kết thúc bằng câu trả lời cho gợi ý cuối, thường là cảm nghĩ hoặc lý do: The main reason I like it is…"
        ]}
      ],
      writing: [
        {type: "Writing Task 1: bảng số liệu", tips: [
          "Đừng mô tả mọi con số. Chọn số lớn nhất, nhỏ nhất và những khác biệt rõ rệt.",
          "Nhóm các dữ liệu giống nhau để so sánh thay vì liệt kê từng hàng.",
          "Dùng cấu trúc so sánh: more/less … than, the highest, twice as many as.",
          "Viết một đoạn overview nêu xu hướng hoặc điểm nổi bật nhất."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"Trains are more cheaper than planes.", good:"Trains are cheaper than planes.", why:"Tính từ ngắn đã có -er thì không thêm more."},
      {k:"grammar", bad:"Cycling is more healthy that driving.", good:"Cycling is healthier than driving.", why:"Dùng than (không phải that) khi so sánh. healthy → healthier."},
      {k:"grammar", bad:"This is the most fast way to get to work.", good:"This is the fastest way to get to work.", why:"Tính từ một âm tiết → so sánh nhất -est."},
      {k:"grammar", bad:"The bus is not as quick than the train.", good:"The bus is not as quick as the train.", why:"Cấu trúc as … as, không dùng than."},
      {k:"vocab", bad:"Cars make a lot of pollution in cities.", good:"Cars cause a lot of pollution in cities.", why:"cause đi với vấn đề tiêu cực (pollution, problems, damage)."},
      {k:"vocab", bad:"The government should cause a decision soon.", good:"The government should make a decision soon.", why:"Cụm cố định: make a decision, make progress, make a change."},
      {k:"vocab", bad:"Than we took a taxi to the station.", good:"Then we took a taxi to the station.", why:"then = sau đó; than = hơn (so sánh)."}
    ],
    fix: [
      {t:"gap", q:"The underground is more faster than the bus. → Sửa: ___", a:["faster"], e:"Bỏ more: faster."},
      {t:"gap", q:"Petrol is more expensive that electricity. → Sửa: ___", a:["than"], e:"So sánh dùng than."},
      {t:"gap", q:"Hanoi has the baddest traffic jams I have seen. → Sửa: ___", a:["worst"], e:"bad → worse → worst."},
      {t:"gap", q:"Walking is gooder for your health than driving. → Sửa: ___", a:["better"], e:"good → better."},
      {t:"gap", q:"The new road is not as wide than the old one. → Sửa: ___", a:["as"], e:"as … as."},
      {t:"gap", q:"Electric buses are the most clean form of transport. → Sửa: ___", a:["cleanest"], e:"clean → cleanest."},
      {t:"gap", q:"Too many cars make serious problems in big cities. → Sửa: ___", a:["cause"], e:"cause problems."},
      {t:"gap", q:"Trains are much more comfortable then buses. → Sửa: ___", a:["than"], e:"then (sau đó) ≠ than (hơn)."},
      {t:"gap", q:"Bicycles are cheapest than cars. → Sửa: ___", a:["cheaper"], e:"So sánh hai thứ → so sánh hơn."},
      {t:"gap", q:"This is the more popular way to travel in my country. → Sửa: ___", a:["most","the most"], e:"So sánh nhất: the most popular."}
    ]
  },

  u4: {
    tips: {
      reading: [
        {type: "Multiple choice (Reading 1)", tips: [
          "Đọc phần câu hỏi (không đọc phương án) rồi tìm đoạn liên quan trong bài.",
          "Đọc kỹ đoạn đó, sau đó mới xem các phương án và loại dần.",
          "Phương án dùng đúng từ trong bài chưa chắc đã đúng. Hãy kiểm tra nghĩa của cả câu.",
          "Câu hỏi multiple choice thường đi theo thứ tự của bài."
        ]},
        {type: "Summary completion (Reading 2)", tips: [
          "Đọc cả đoạn tóm tắt trước để nắm nội dung, rồi tìm phần bài tương ứng.",
          "Dựa vào ngữ pháp quanh ô trống để biết cần danh từ, động từ hay tính từ, số ít hay số nhiều.",
          "Tóm tắt thường diễn đạt lại bài bằng từ khác. Tìm từ đồng nghĩa để định vị."
        ]}
      ],
      listening: [
        {type: "Sentence completion", tips: [
          "Đọc câu trước khi nghe và đoán loại từ còn thiếu.",
          "Từ bạn điền phải làm câu đúng ngữ pháp và đúng nghĩa.",
          "Câu trong đề thường diễn đạt khác với lời người nói, nên hãy nghe theo ý chứ không chờ đúng từ."
        ]},
        {type: "Pick from a list", tips: [
          "Đọc danh sách lựa chọn và gạch chân từ khoá.",
          "Thứ tự trong danh sách không nhất thiết là thứ tự người nói nhắc đến.",
          "Chọn đúng số lượng đề yêu cầu (ví dụ: Choose TWO letters)."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 2", tips: [
          "Dùng 1 phút chuẩn bị để ghi từ khoá, không viết câu hoàn chỉnh.",
          "Với mỗi ý, thêm lý do, ví dụ hoặc kết quả để nói được lâu hơn.",
          "Cố gắng nói đủ 2 phút. Nếu hết ý, quay lại một gợi ý và kể thêm chi tiết.",
          "Ngắt nghỉ theo cụm ý (chunking) để người nghe dễ theo dõi."
        ]}
      ],
      writing: [
        {type: "Writing Task 2: To what extent do you agree or disagree?", tips: [
          "Xác định rõ bạn đồng ý, không đồng ý hay đồng ý một phần, và giữ nhất quán từ mở bài đến kết bài.",
          "Lên ý trước khi viết và bỏ những ý không trả lời thẳng vào đề (tránh lạc đề).",
          "Mỗi đoạn thân bài một ý chính, có giải thích và ví dụ.",
          "Dùng hiện tại hoàn thành khi nói về thay đổi kéo dài đến bây giờ: Technology has changed the way we live."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"I have bought this phone last year.", good:"I bought this phone last year.", why:"Có thời gian cụ thể đã qua (last year) → quá khứ đơn."},
      {k:"grammar", bad:"I live here since 2015.", good:"I have lived here since 2015.", why:"since/for với việc kéo dài đến hiện tại → hiện tại hoàn thành."},
      {k:"grammar", bad:"We have used computers since ten years.", good:"We have used computers for ten years.", why:"for + khoảng thời gian; since + mốc thời gian."},
      {k:"grammar", bad:"Have you ever went to Japan?", good:"Have you ever been to Japan?", why:"have + V3: go → gone/been."},
      {k:"vocab", bad:"The device was designned in Japan.", good:"The device was designed in Japan.", why:"design kết thúc bằng hai phụ âm → không gấp đôi."},
      {k:"vocab", bad:"Sales have droped and prices have stoped rising.", good:"Sales have dropped and prices have stopped rising.", why:"drop → dropped, stop → stopped (gấp đôi phụ âm cuối)."},
      {k:"vocab", bad:"This invent changed the world.", good:"This invention changed the world.", why:"Chỗ này cần danh từ: invent (v) → invention (n)."}
    ],
    fix: [
      {t:"gap", q:"My father has bought a new car two weeks ago. → Sửa: ___", a:["bought"], e:"ago → quá khứ đơn."},
      {t:"gap", q:"I know my best friend since 2010. → Sửa: ___", a:["have known","'ve known"], e:"since → hiện tại hoàn thành."},
      {t:"gap", q:"People have used mobile phones since thirty years. → Sửa: ___", a:["for"], e:"for + khoảng thời gian."},
      {t:"gap", q:"Have you ever saw a 3D printer? → Sửa: ___", a:["seen"], e:"see → saw → seen."},
      {t:"gap", q:"She has wrote three books about technology. → Sửa: ___", a:["written"], e:"write → wrote → written."},
      {t:"gap", q:"The number of users has growed quickly. → Sửa: ___", a:["grown"], e:"grow → grew → grown."},
      {t:"gap", q:"Prices have droped a lot recently. → Sửa: ___", a:["dropped"], e:"drop → dropped."},
      {t:"gap", q:"Who was the inventer of the telephone? → Sửa: ___", a:["inventor"], e:"inventor (-or)."},
      {t:"gap", q:"I didn't finish my homework yet. → Sửa: ___", a:["haven't finished","have not finished"], e:"yet → hiện tại hoàn thành."},
      {t:"gap", q:"This is the most useful invent of the century. → Sửa: ___", a:["invention"], e:"Cần danh từ: invention."}
    ]
  },

  u5: {
    tips: {
      reading: [
        {type: "Sentence completion (Reading 1)", tips: [
          "Gạch chân từ khoá trong phần đầu câu, rồi tìm chỗ tương ứng trong bài.",
          "Câu hoàn chỉnh phải đúng ngữ pháp: kiểm tra số ít/số nhiều và loại từ.",
          "Chỉ dùng từ trong bài và đúng giới hạn số từ."
        ]},
        {type: "Pick from a list (Reading 2)", tips: [
          "Đọc câu hỏi để biết cần chọn mấy đáp án và về chủ đề gì.",
          "Đánh dấu vị trí trong bài của từng lựa chọn. Lựa chọn nào bài không nhắc tới hoặc nói ngược lại thì loại.",
          "Thứ tự đáp án không quan trọng, nhưng phải đúng số lượng."
        ]}
      ],
      listening: [
        {type: "Table completion", tips: [
          "Đọc tiêu đề cột và hàng để biết thông tin được sắp xếp thế nào.",
          "Các ô trong cùng một cột thường cùng loại thông tin, ví dụ đều là số hoặc đều là tên.",
          "Thông tin trong bảng thường được nghe theo hàng, từ trái sang phải."
        ]},
        {type: "Labelling a map", tips: [
          "Xác định điểm bắt đầu (You are here) và hướng của bản đồ trước khi nghe.",
          "Ôn từ chỉ phương hướng và vị trí: north, opposite, next to, between, turn left, go past.",
          "Đi theo lời người nói bằng ngón tay hoặc bút chì trên bản đồ."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 1 & 2", tips: [
          "Nếu quên một từ, đừng dừng lại. Hãy diễn giải: It's a kind of…, It's something you use to…",
          "Thể hiện cảm xúc bằng những tính từ mạnh như fascinating, terrifying, amazing.",
          "Nhấn giọng vào những từ mang nghĩa hoặc cảm xúc để câu trả lời sinh động hơn."
        ]}
      ],
      writing: [
        {type: "Writing Task 1: hai biểu đồ", tips: [
          "Đọc kỹ cả hai biểu đồ và tìm mối liên hệ giữa chúng.",
          "Mở bài giới thiệu cả hai biểu đồ trong một hoặc hai câu.",
          "Nhóm thông tin: mỗi đoạn thân bài nói về một biểu đồ hoặc một nhóm đặc điểm, có so sánh khi phù hợp.",
          "Overview phải nhắc đến điểm chính của cả hai biểu đồ."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"Scientists collected a lot of informations.", good:"Scientists collected a lot of information.", why:"information là danh từ không đếm được, không có số nhiều."},
      {k:"grammar", bad:"She gave me some good advices.", good:"She gave me some good advice.", why:"advice không đếm được. Muốn đếm: a piece of advice."},
      {k:"grammar", bad:"There are less animals in the forest now.", good:"There are fewer animals in the forest now.", why:"fewer + danh từ đếm được số nhiều; less + danh từ không đếm được."},
      {k:"grammar", bad:"How much species live in this area?", good:"How many species live in this area?", why:"how many + danh từ đếm được."},
      {k:"vocab", bad:"Elephants eat in the morning and on the evening.", good:"Elephants eat in the morning and in the evening.", why:"in the morning / in the evening / at night / on Monday."},
      {k:"vocab", bad:"The birds fly to south in winter.", good:"The birds fly south in winter.", why:"fly south / go north: không dùng to trước hướng (hoặc dùng to the south)."},
      {k:"vocab", bad:"Tigers are in danger of extinct.", good:"Tigers are in danger of extinction.", why:"Sau of cần danh từ: extinction."}
    ],
    fix: [
      {t:"gap", q:"We need more informations about the project. → Sửa: ___", a:["information"], e:"information không đếm được."},
      {t:"gap", q:"My teacher gave me a useful advice. → Sửa: ___", a:["piece of advice","some advice","advice"], e:"advice không đếm được: a piece of advice."},
      {t:"gap", q:"There are less tigers in the wild than in the past. → Sửa: ___", a:["fewer"], e:"tigers đếm được → fewer."},
      {t:"gap", q:"How much animals live in the zoo? → Sửa: ___", a:["many","How many"], e:"animals đếm được → how many."},
      {t:"gap", q:"Owls hunt at the night. → Sửa: ___", a:["at night"], e:"at night (không có the)."},
      {t:"gap", q:"The bears sleep on winter. → Sửa: ___", a:["in winter","in"], e:"in + mùa."},
      {t:"gap", q:"Pandas eat a lot of bamboos every day. → Sửa: ___", a:["bamboo"], e:"bamboo (thức ăn) dùng như danh từ không đếm được."},
      {t:"gap", q:"The researchers did many researches on crows. → Sửa: ___", a:["research","much research","a lot of research"], e:"research không đếm được."},
      {t:"gap", q:"Many sea turtle are in danger. → Sửa: ___", a:["turtles","sea turtles"], e:"many + danh từ số nhiều."},
      {t:"gap", q:"The rhino is close to extinct. → Sửa: ___", a:["extinction"], e:"Sau to (giới từ) cần danh từ."}
    ]
  },

  u6: {
    tips: {
      reading: [
        {type: "Yes / No / Not Given (Reading 1)", tips: [
          "Dạng này hỏi về Ý KIẾN của người viết, khác với True/False/Not Given hỏi về thông tin.",
          "YES: người viết đồng ý với câu. NO: người viết nghĩ ngược lại. NOT GIVEN: không biết người viết nghĩ gì.",
          "Chú ý các từ thể hiện thái độ như surprisingly, unfortunately, it is clear that."
        ]},
        {type: "Summary completion with a box (Reading 2)", tips: [
          "Đọc tóm tắt và đoán loại từ cho mỗi ô trước khi nhìn vào hộp từ.",
          "Hộp có nhiều từ thừa, và nhiều từ cùng loại để gây nhiễu. Hãy kiểm tra nghĩa trong bài.",
          "Từ trong hộp thường là từ đồng nghĩa với từ trong bài, không phải từ giống hệt."
        ]}
      ],
      listening: [
        {type: "Matching", tips: [
          "Đọc kỹ danh sách lựa chọn trước khi nghe vì bạn phải giữ chúng trong đầu.",
          "Câu hỏi đi theo thứ tự của bài nghe, còn lựa chọn thì không.",
          "Có lựa chọn thừa. Đừng chọn chỉ vì nghe thấy một từ giống."
        ]},
        {type: "Pick from a list", tips: [
          "Gạch chân từ khoá trong từng lựa chọn và nghĩ trước từ đồng nghĩa.",
          "Người nói có thể nhắc đến một lựa chọn rồi bác bỏ nó. Hãy nghe đến hết ý."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 3", tips: [
          "Part 3 hỏi về xã hội và con người nói chung, không hỏi về bản thân bạn như Part 1.",
          "Khái quát hoá bằng các cụm như Generally…, Most people…, In my country…",
          "Trả lời dài hơn Part 1: nêu ý kiến, giải thích lý do và cho ví dụ.",
          "Lên giọng khi chưa nói xong, xuống giọng khi kết thúc ý."
        ]}
      ],
      writing: [
        {type: "Writing Task 2: trả lời một câu hỏi", tips: [
          "Phân tích đề: tìm chủ đề, câu hỏi cụ thể và điều đề yêu cầu bạn làm.",
          "Lên 2–3 ý chính trả lời thẳng câu hỏi, mỗi ý một đoạn.",
          "Dùng câu điều kiện để nói về kết quả: If people work hard, they usually succeed.",
          "Kết bài nhắc lại câu trả lời của bạn bằng từ khác."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"If you will practise every day, you will improve.", good:"If you practise every day, you will improve.", why:"Câu điều kiện loại 1: mệnh đề if dùng hiện tại đơn, không dùng will."},
      {k:"grammar", bad:"If you heat ice, it will melts.", good:"If you heat ice, it melts.", why:"Sự thật luôn đúng → điều kiện loại 0: hiện tại đơn ở cả hai vế. Sau will không thêm -s."},
      {k:"grammar", bad:"Unless you don't study, you will fail.", good:"Unless you study, you will fail.", why:"unless = if … not, nên không thêm not nữa."},
      {k:"grammar", bad:"If I will have time, I help you.", good:"If I have time, I will help you.", why:"will nằm ở mệnh đề kết quả, không nằm ở mệnh đề if."},
      {k:"vocab", bad:"She is very success in her job.", good:"She is very successful in her job.", why:"Cần tính từ: success (n) → successful (adj)."},
      {k:"vocab", bad:"Talent is not the only important.", good:"Talent is not the only important thing.", why:"the only + tính từ phải đi với danh từ."},
      {k:"vocab", bad:"He has a very creativity mind.", good:"He has a very creative mind.", why:"Trước danh từ cần tính từ: creative."}
    ],
    fix: [
      {t:"gap", q:"If it will rain tomorrow, we will stay at home. → Sửa: ___", a:["rains","If it rains"], e:"Mệnh đề if dùng hiện tại đơn."},
      {t:"gap", q:"If you mix red and white, you gets pink. → Sửa: ___", a:["get"], e:"you → get."},
      {t:"gap", q:"Unless you don't hurry, you will miss the bus. → Sửa: ___", a:["hurry","Unless you hurry"], e:"unless đã mang nghĩa phủ định."},
      {t:"gap", q:"If he studies hard, he pass the exam. → Sửa: ___", a:["will pass","'ll pass"], e:"Kết quả tương lai → will pass."},
      {t:"gap", q:"Children learns best when they are interested. → Sửa: ___", a:["learn"], e:"Children số nhiều → learn."},
      {t:"gap", q:"Many famous people were not success at school. → Sửa: ___", a:["successful"], e:"Cần tính từ."},
      {t:"gap", q:"He is a very happiness person. → Sửa: ___", a:["happy"], e:"Trước danh từ cần tính từ."},
      {t:"gap", q:"If you will need help, ask me. → Sửa: ___", a:["need","If you need"], e:"Mệnh đề if không dùng will."},
      {t:"gap", q:"She donate money to charity every month. → Sửa: ___", a:["donates"], e:"She → donates."},
      {t:"gap", q:"Practice is more important than nature ability. → Sửa: ___", a:["natural","natural ability"], e:"natural ability (tính từ natural)."}
    ]
  },

  u7: {
    tips: {
      reading: [
        {type: "Matching information (Reading 1)", tips: [
          "Câu hỏi hỏi 'đoạn nào chứa thông tin…', nên bạn tìm một chi tiết chứ không tìm ý chính cả đoạn.",
          "Câu hỏi không theo thứ tự bài, và một đoạn có thể được dùng nhiều lần.",
          "Gạch chân loại thông tin cần tìm: một ví dụ, một lý do, một con số, một so sánh…"
        ]},
        {type: "Table completion (Reading 2)", tips: [
          "Đọc tiêu đề bảng để biết cách thông tin được tổ chức.",
          "Thông tin trong bảng thường theo thứ tự của bài.",
          "Chép đúng chính tả và đúng giới hạn số từ."
        ]}
      ],
      listening: [
        {type: "Form completion", tips: [
          "Đoán trước loại thông tin: tên, ngày, số, địa chỉ email.",
          "Nghe kỹ phần đánh vần và các số dễ nhầm (thirteen/thirty).",
          "Viết ngày tháng theo cách đơn giản, ví dụ 14 March."
        ]},
        {type: "Multiple choice", tips: [
          "Đọc câu hỏi và gạch chân điểm khác nhau giữa các phương án.",
          "Cẩn thận với phương án được nhắc đến nhưng sau đó bị phủ nhận."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 2 & 3", tips: [
          "Part 2: trong 1 phút chuẩn bị, quyết định nhanh mình sẽ nói về cái gì rồi ghi từ khoá.",
          "Part 3: luôn nêu ý kiến rồi đưa lý do: I think…, because…",
          "Nhấn đúng trọng âm của từ, ví dụ eDUcation, LIteracy."
        ]}
      ],
      writing: [
        {type: "Writing Task 1: biểu đồ đường, xu hướng", tips: [
          "Mô tả xu hướng chính (tăng, giảm, ổn định) thay vì đọc từng con số.",
          "Dùng hai kiểu: động từ + trạng từ (rose sharply) và tính từ + danh từ (a sharp rise).",
          "Dùng giới từ đúng: rose from 10% to 20%, increased by 5%, peaked at 50%.",
          "Số liệu trong quá khứ dùng quá khứ đơn; viết overview về xu hướng chung."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"The number of students rose with 20%.", good:"The number of students rose by 20%.", why:"Mức thay đổi dùng by."},
      {k:"grammar", bad:"Sales increased from 100 until 300.", good:"Sales increased from 100 to 300.", why:"from … to …"},
      {k:"grammar", bad:"There was an increase of sales in 2010.", good:"There was an increase in sales in 2010.", why:"an increase/decrease IN + thứ thay đổi; an increase OF + con số (an increase of 5%)."},
      {k:"grammar", bad:"The figure reached at a peak in 2015.", good:"The figure reached a peak in 2015.", why:"reach không cần giới từ. Có thể nói peaked at 50%."},
      {k:"vocab", bad:"The number of readers raised sharply.", good:"The number of readers rose sharply.", why:"rise (nội động từ, không có tân ngữ) → rose; raise (ngoại động từ) cần tân ngữ: raise prices."},
      {k:"vocab", bad:"The government rose the price of books.", good:"The government raised the price of books.", why:"Có tân ngữ (the price) → raise."},
      {k:"vocab", bad:"The figure increased dramatical.", good:"The figure increased dramatically.", why:"Bổ nghĩa cho động từ cần trạng từ -ly."}
    ],
    fix: [
      {t:"gap", q:"The price of books rised in 2015. → Sửa: ___", a:["rose"], e:"rise → rose."},
      {t:"gap", q:"The school rose its fees last year. → Sửa: ___", a:["raised"], e:"Có tân ngữ → raise."},
      {t:"gap", q:"The figure fell with 10% between 2000 and 2005. → Sửa: ___", a:["by"], e:"Mức thay đổi dùng by."},
      {t:"gap", q:"There was a sharp decrease of the number of readers. → Sửa: ___", a:["in"], e:"a decrease in + thứ thay đổi."},
      {t:"gap", q:"Literacy rates increased steady over the period. → Sửa: ___", a:["steadily"], e:"Cần trạng từ."},
      {t:"gap", q:"The number of e-books rose from 5% until 25%. → Sửa: ___", a:["to"], e:"from … to."},
      {t:"gap", q:"There was a slightly fall in 2012. → Sửa: ___", a:["slight"], e:"Trước danh từ (fall) cần tính từ."},
      {t:"gap", q:"Library visits reached at a peak in 1990. → Sửa: ___", a:["reached a peak","reached"], e:"reach không có at."},
      {t:"gap", q:"The number of students increases sharply in 2005. → Sửa: ___", a:["increased"], e:"2005 → quá khứ đơn."},
      {t:"gap", q:"Sales stayed stable on 40% for five years. → Sửa: ___", a:["at"], e:"stay stable at + con số."}
    ]
  },

  u8: {
    tips: {
      reading: [
        {type: "Summary completion (Reading 1)", tips: [
          "Đọc cả đoạn tóm tắt để biết nó tóm tắt phần nào của bài.",
          "Dùng ngữ pháp quanh ô trống để đoán loại từ.",
          "Chép từ đúng chính tả, và kiểm tra câu sau khi điền có đúng ngữ pháp không."
        ]},
        {type: "Matching features (Reading 2)", tips: [
          "Gạch chân các tên (người, nơi chốn) trong bài trước để tìm nhanh.",
          "Câu hỏi không theo thứ tự bài. Một lựa chọn có thể dùng nhiều lần hoặc không dùng.",
          "Đọc kỹ quanh mỗi tên và so sánh ý với câu hỏi, chú ý từ đồng nghĩa."
        ]}
      ],
      listening: [
        {type: "Sentence completion", tips: [
          "Đọc câu và đoán thông tin cần điền.",
          "Kiểm tra từ điền vào có đúng ngữ pháp (số ít/số nhiều) không."
        ]},
        {type: "Table completion", tips: [
          "Xem tiêu đề cột để biết loại thông tin: giá, giờ mở cửa, hoạt động…",
          "Nghe kỹ con số và đơn vị (giá vé, phần trăm, giờ)."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 1 & 2", tips: [
          "Kết hợp tính từ chỉ sự thật (old, huge, modern) và tính từ chỉ ý kiến (stunning, boring, impressive) để mô tả địa điểm.",
          "Nói theo cụm để trôi chảy hơn, đừng dừng sau từng từ.",
          "Dùng mệnh đề quan hệ để thêm thông tin: It's a place where…, a guide who…"
        ]}
      ],
      writing: [
        {type: "Writing Task 2: trả lời hai câu hỏi", tips: [
          "Đề có hai câu hỏi thì phải trả lời cả hai, tốt nhất mỗi câu một đoạn thân bài.",
          "Mở bài nhắc lại chủ đề và cho biết bài sẽ trả lời cả hai câu hỏi.",
          "Kết bài tóm tắt câu trả lời cho cả hai câu hỏi, không đưa ý mới.",
          "Viết đúng chính tả từ nối: however, furthermore, in addition, for example."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"The guide which showed us around was friendly.", good:"The guide who showed us around was friendly.", why:"Người → who (hoặc that); vật → which (hoặc that)."},
      {k:"grammar", bad:"This is the museum which I visited it last year.", good:"This is the museum which I visited last year.", why:"Đại từ quan hệ đã thay cho tân ngữ, không lặp lại it."},
      {k:"grammar", bad:"Hoi An is a town which tourists can buy lanterns.", good:"Hoi An is a town where tourists can buy lanterns.", why:"Nơi chốn + mệnh đề đầy đủ → where."},
      {k:"grammar", bad:"Paris, that is the capital of France, is beautiful.", good:"Paris, which is the capital of France, is beautiful.", why:"Mệnh đề có dấu phẩy không dùng that."},
      {k:"vocab", bad:"Tourist is important for the economy.", good:"Tourism is important for the economy.", why:"tourism = ngành du lịch; tourist = khách du lịch."},
      {k:"vocab", bad:"Many tourisms visit Ha Long Bay.", good:"Many tourists visit Ha Long Bay.", why:"Người đi du lịch → tourists."},
      {k:"vocab", bad:"Howerver, the city is very crowded.", good:"However, the city is very crowded.", why:"Viết đúng chính tả từ nối: however, furthermore, therefore, in addition."}
    ],
    fix: [
      {t:"gap", q:"The man which sold us the tickets was very kind. → Sửa: ___", a:["who","that"], e:"Người → who/that."},
      {t:"gap", q:"Da Lat is a city which you can enjoy cool weather. → Sửa: ___", a:["where"], e:"Nơi chốn + mệnh đề đầy đủ → where."},
      {t:"gap", q:"This is the hotel which we stayed in it. → Sửa: ___", a:["stayed in","which we stayed in"], e:"Bỏ it."},
      {t:"gap", q:"Tourist brings a lot of money to my country. → Sửa: ___", a:["Tourism"], e:"Ngành du lịch → tourism."},
      {t:"gap", q:"The beach was full of tourism from Europe. → Sửa: ___", a:["tourists"], e:"Người → tourists."},
      {t:"gap", q:"Hue, that was the old capital, has many temples. → Sửa: ___", a:["which"], e:"Có dấu phẩy → which."},
      {t:"gap", q:"Howerver, some places are too crowded. → Sửa: ___", a:["However"], e:"Chính tả: However."},
      {t:"gap", q:"The view from the top was breathtaked. → Sửa: ___", a:["breathtaking"], e:"Tính từ: breathtaking."},
      {t:"gap", q:"I recommend you visiting the night market. → Sửa: ___", a:["to visit","you to visit"], e:"recommend someone to do something."},
      {t:"gap", q:"Sightseeing are my favourite holiday activity. → Sửa: ___", a:["is"], e:"Sightseeing là danh từ không đếm được → is."}
    ]
  },

  u9: {
    tips: {
      reading: [
        {type: "Matching headings (Reading 1)", tips: [
          "Đọc lướt mỗi đoạn để tìm ý chính, rồi mới xem danh sách tiêu đề.",
          "Tiêu đề diễn đạt ý chính bằng từ khác. Đừng chọn chỉ vì trùng một từ."
        ]},
        {type: "Sentence completion · Pick from a list (Reading 2)", tips: [
          "Câu điền thường theo thứ tự của bài.",
          "Với pick from a list, loại những lựa chọn bài không nhắc tới hoặc nói khác đi.",
          "Câu bị động trong bài (water is collected) có thể được diễn đạt chủ động trong câu hỏi, và ngược lại."
        ]}
      ],
      listening: [
        {type: "Matching", tips: [
          "Đọc trước các lựa chọn và nghĩ từ đồng nghĩa có thể nghe thấy.",
          "Câu hỏi theo thứ tự bài nghe; lựa chọn có thể thừa."
        ]},
        {type: "Flow-chart completion", tips: [
          "Lần theo mũi tên để hiểu các bước của quy trình.",
          "Chú ý từ chỉ trình tự như first, after that, next, finally.",
          "Phần lớn đáp án là danh từ hoặc động từ chỉ hành động."
        ]}
      ],
      speaking: [
        {type: "Speaking Part 2 & 3", tips: [
          "Part 2: nếu đề cho lựa chọn, chọn chủ đề bạn có nhiều điều để nói nhất.",
          "Dùng cụm từ hữu ích: The thing I remember most is…, What I like about it is…",
          "Part 3: phân tích câu hỏi xem nó hỏi lý do, so sánh hay dự đoán tương lai, rồi trả lời đúng kiểu đó.",
          "Lên giọng khi đưa thông tin mới, xuống giọng khi kết thúc ý."
        ]}
      ],
      writing: [
        {type: "Writing Task 1: quy trình, sơ đồ", tips: [
          "Xác định quy trình có bao nhiêu bước, bắt đầu và kết thúc ở đâu.",
          "Overview nêu số bước và điểm đầu, điểm cuối của quy trình.",
          "Dùng bị động vì người làm không quan trọng: The water is filtered.",
          "Nối các bước bằng first, next, then, after that, when, finally."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"The water is pump into a tank.", good:"The water is pumped into a tank.", why:"Bị động: be + V3 (pumped)."},
      {k:"grammar", bad:"The dam was build in 1990.", good:"The dam was built in 1990.", why:"build → built (bất quy tắc)."},
      {k:"grammar", bad:"Then the water filters.", good:"Then the water is filtered.", why:"Nước không tự lọc → dùng bị động."},
      {k:"grammar", bad:"Clean water are supplied to every house.", good:"Clean water is supplied to every house.", why:"water không đếm được → is."},
      {k:"vocab", bad:"Pollution has a bad affect on rivers.", good:"Pollution has a bad effect on rivers.", why:"effect (n) = ảnh hưởng; affect (v) = ảnh hưởng đến."},
      {k:"vocab", bad:"Rainwater can be used for drink.", good:"Rainwater can be used for drinking.", why:"Sau giới từ for dùng V-ing hoặc danh từ."},
      {k:"vocab", bad:"Saving water has many benefit for the environment.", good:"Saving water has many benefits for the environment.", why:"many + danh từ số nhiều."}
    ],
    fix: [
      {t:"gap", q:"The water is collect in large tanks. → Sửa: ___", a:["collected","is collected"], e:"Bị động: be + V3."},
      {t:"gap", q:"The bridge was builded in 2005. → Sửa: ___", a:["built"], e:"build → built."},
      {t:"gap", q:"The dirty water cleans by special filters. → Sửa: ___", a:["is cleaned"], e:"Bị động: is cleaned."},
      {t:"gap", q:"Drought can effect farmers badly. → Sửa: ___", a:["affect"], e:"Động từ → affect."},
      {t:"gap", q:"Pollution has a serious affect on fish. → Sửa: ___", a:["effect"], e:"Danh từ → effect."},
      {t:"gap", q:"Fresh water are becoming more expensive. → Sửa: ___", a:["is","is becoming"], e:"water không đếm được."},
      {t:"gap", q:"After the water is heated, it is send to the houses. → Sửa: ___", a:["sent"], e:"send → sent."},
      {t:"gap", q:"Desalination has some disadvantage. → Sửa: ___", a:["disadvantages"], e:"some + danh từ số nhiều."},
      {t:"gap", q:"Next, the bottles fill with water. → Sửa: ___", a:["are filled"], e:"Bị động: are filled."},
      {t:"gap", q:"The new pipes were instaled last year. → Sửa: ___", a:["installed"], e:"Chính tả: installed."}
    ]
  },

  u10: {
    tips: {
      reading: [
        {type: "Multiple choice · Matching sentence endings (Reading 1)", tips: [
          "Với matching sentence endings, đọc phần đầu câu và tìm vị trí trong bài trước, rồi mới xem các phần kết.",
          "Câu ghép hoàn chỉnh phải đúng cả ngữ pháp lẫn nội dung bài.",
          "Có phần kết thừa, và nhiều phần kết nghe hợp lý nhưng bài không nói."
        ]},
        {type: "Yes / No / Not Given (Reading 2)", tips: [
          "Tập trung vào ý kiến của người viết, không phải của người khác được trích dẫn.",
          "Câu dùng từ mạnh như always, all, the best dễ là NO hoặc NOT GIVEN.",
          "Dùng ngữ cảnh để đoán nghĩa từ mới thay vì dừng lại tra từ."
        ]}
      ],
      listening: [
        {type: "Note completion", tips: [
          "Đọc tiêu đề và các dòng ghi chú để nắm cấu trúc bài nghe.",
          "Đoán loại từ cho mỗi ô, chú ý danh từ số ít/số nhiều.",
          "Bài nghe dạng bài giảng thường có tín hiệu chuyển ý như Now let's look at…, Another point is…"
        ]}
      ],
      speaking: [
        {type: "Speaking Part 2 & 3", tips: [
          "Sau Part 2 giám khảo có thể hỏi thêm một câu ngắn. Trả lời một hai câu là đủ.",
          "Khi so sánh giống và khác nhau, dùng although, even though, while, whereas.",
          "Nhấn giọng vào hai ý đối lập: OLD houses are cool, but NEW ones are more comfortable."
        ]}
      ],
      writing: [
        {type: "Writing Task 2: hai quan điểm và ý kiến của bạn", tips: [
          "Đề 'Discuss both views and give your opinion' có ba phần: quan điểm 1, quan điểm 2 và ý kiến của bạn. Đừng bỏ phần nào.",
          "Thường viết một đoạn cho mỗi quan điểm, và nêu ý kiến rõ ở mở bài và kết bài.",
          "Dùng động từ khuyết thiếu để đưa ý mềm hơn: should, could, may, might.",
          "Dành 3–5 phút cuối để soát chính tả và dấu câu."
        ]}
      ]
    },
    mistakes: [
      {k:"grammar", bad:"People must to think about the environment.", good:"People must think about the environment.", why:"Sau động từ khuyết thiếu dùng nguyên mẫu không to."},
      {k:"grammar", bad:"The government should builds more parks.", good:"The government should build more parks.", why:"Sau should không thêm -s."},
      {k:"grammar", bad:"Architects can able to design green buildings.", good:"Architects can design green buildings.", why:"can = be able to; không dùng cả hai cùng lúc."},
      {k:"grammar", bad:"You don't must park here.", good:"You mustn't park here.", why:"Phủ định của must: must not / mustn't."},
      {k:"vocab", bad:"Old buildings should be knocked off.", good:"Old buildings should be knocked down.", why:"knock down = phá dỡ (nhà cửa)."},
      {k:"vocab", bad:"Most citizen live in flats.", good:"Most citizens live in flats.", why:"most + danh từ số nhiều."},
      {k:"vocab", bad:"The architecture of the building are modern.", good:"The architecture of the building is modern.", why:"Chủ ngữ chính là architecture (không đếm được) → is."}
    ],
    fix: [
      {t:"gap", q:"Every new house should to have solar panels. → Sửa: ___", a:["should have"], e:"should + nguyên mẫu không to."},
      {t:"gap", q:"Builders must uses safe materials. → Sửa: ___", a:["use","must use"], e:"Sau must không thêm -s."},
      {t:"gap", q:"We can able to save energy with better design. → Sửa: ___", a:["can save","are able to save"], e:"Chỉ dùng can hoặc be able to."},
      {t:"gap", q:"You don't must touch the old walls. → Sửa: ___", a:["mustn't","must not"], e:"Phủ định: mustn't."},
      {t:"gap", q:"The old factory was knocked off last year. → Sửa: ___", a:["knocked down","down"], e:"knock down."},
      {t:"gap", q:"Many citizen prefer modern flats. → Sửa: ___", a:["citizens"], e:"many + số nhiều."},
      {t:"gap", q:"Even the house is old, it is comfortable. → Sửa: ___", a:["Even though","although","though"], e:"Even though + mệnh đề (even một mình không nối được hai mệnh đề)."},
      {t:"gap", q:"Houses in the city is very expensive. → Sửa: ___", a:["are"], e:"Houses số nhiều → are."},
      {t:"gap", q:"Modern buildings might looks strange to older people. → Sửa: ___", a:["look","might look"], e:"Sau might dùng nguyên mẫu."},
      {t:"gap", q:"The accomodation near the university is cheap. → Sửa: ___", a:["accommodation"], e:"Chính tả: accommodation (cc, mm)."}
    ]
  }
};
