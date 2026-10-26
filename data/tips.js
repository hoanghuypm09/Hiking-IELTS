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
  }
};
