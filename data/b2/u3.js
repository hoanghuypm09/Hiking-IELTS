/* Complete IELTS Bands 5–6.5 · Unit 3: Getting the message across.
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u3", title:"Getting the message across", vi:"Ngôn ngữ & giao tiếp",
  focus:{reading:"Yes / No / Not Given · Summary completion with a box · Multiple choice", listening:"Section 3: Pick from a list · Matching · Short-answer questions", speaking:"Part 2: dùng từ nối đánh dấu các giai đoạn của câu chuyện", writing:"Task 1: tóm tắt xu hướng trên biểu đồ đường và bảng", vocab:"teach / learn / study · find out / know · từ vựng học thuật", pron:"Phụ âm dễ nhầm: /ʃ/–/dʒ/, /l/–/r/, /v/–/w/"},
  vocab:[
    {g:"Word list của sách",w:"achieve",p:"v",ipa:"/əˈtʃiːv/",vi:"đạt được",ex:"She achieved a band 7 after a year of hard work.",exvi:"Cô ấy đạt band 7 sau một năm học chăm chỉ."},
    {g:"Word list của sách",w:"base something on",p:"phrase",ipa:"/beɪs ˈsʌmθɪŋ ɒn/",vi:"dựa (cái gì) vào",ex:"The course is based on real conversations.",exvi:"Khoá học được xây dựng dựa trên những cuộc hội thoại thật."},
    {g:"Word list của sách",w:"completion (of)",p:"n",ipa:"/kəmˈpliːʃn/",vi:"sự hoàn thành",ex:"You will receive a certificate on completion of the course.",exvi:"Bạn sẽ nhận chứng chỉ khi hoàn thành khoá học."},
    {g:"Word list của sách",w:"critical",p:"adj",ipa:"/ˈkrɪtɪkl/",vi:"cực kỳ quan trọng, then chốt",ex:"The first three years are critical for a child's development.",exvi:"Ba năm đầu đời là giai đoạn then chốt cho sự phát triển của trẻ."},
    {g:"Word list của sách",w:"express",p:"v",ipa:"/ɪkˈspres/",vi:"diễn đạt, bày tỏ",ex:"Young children cannot always express their feelings in words.",exvi:"Trẻ nhỏ không phải lúc nào cũng diễn đạt được cảm xúc bằng lời."},
    {g:"Word list của sách",w:"figure",p:"n",ipa:"/ˈfɪɡə/",vi:"con số, số liệu",ex:"The figure for French students fell to 90 in 2006.",exvi:"Số học sinh học tiếng Pháp giảm xuống 90 vào năm 2006."},
    {g:"Word list của sách",w:"find something easy",p:"phrase",ipa:"/faɪnd ˈsʌmθɪŋ ˈiːzi/",vi:"thấy điều gì dễ",ex:"Most children find learning languages easy.",exvi:"Hầu hết trẻ em thấy học ngoại ngữ dễ."},
    {g:"Word list của sách",w:"fluency",p:"n",ipa:"/ˈfluːənsi/",vi:"sự trôi chảy",ex:"Speaking every day improved her fluency.",exvi:"Nói hằng ngày giúp cô ấy nói trôi chảy hơn."},
    {g:"Word list của sách",w:"gestures",p:"n",ipa:"/ˈdʒestʃəz/",vi:"cử chỉ",ex:"Gestures can mean different things in different cultures.",exvi:"Cử chỉ có thể mang nghĩa khác nhau ở các nền văn hoá khác nhau."},
    {g:"Word list của sách",w:"get going",p:"phrase",ipa:"/ɡet ˈɡəʊɪŋ/",vi:"bắt đầu (diễn ra)",ex:"The discussion didn't really get going until the second hour.",exvi:"Cuộc thảo luận chỉ thật sự bắt đầu sôi nổi từ giờ thứ hai."},
    {g:"Word list của sách",w:"handle",p:"v",ipa:"/ˈhændl/",vi:"xử lý, đối phó",ex:"Can a two-year-old's brain handle complex grammar?",exvi:"Não của một đứa trẻ hai tuổi có xử lý được ngữ pháp phức tạp không?"},
    {g:"Word list của sách",w:"hypothesis",p:"n",ipa:"/haɪˈpɒθəsɪs/",vi:"giả thuyết",ex:"The researchers designed an experiment to test their hypothesis.",exvi:"Các nhà nghiên cứu thiết kế thí nghiệm để kiểm chứng giả thuyết."},
    {g:"Word list của sách",w:"ideal",p:"adj",ipa:"/aɪˈdiːəl/",vi:"lý tưởng",ex:"A quiet library is ideal for studying.",exvi:"Thư viện yên tĩnh là nơi lý tưởng để học."},
    {g:"Word list của sách",w:"imitate",p:"v",ipa:"/ˈɪmɪteɪt/",vi:"bắt chước",ex:"Babies imitate the sounds their parents make.",exvi:"Trẻ sơ sinh bắt chước âm thanh mà cha mẹ tạo ra."},
    {g:"Word list của sách",w:"inclusion (of)",p:"n",ipa:"/ɪnˈkluːʒn/",vi:"việc đưa vào",ex:"The inclusion of real examples makes the lecture interesting.",exvi:"Việc đưa ví dụ thực tế vào khiến bài giảng thú vị hơn."},
    {g:"Word list của sách",w:"language acquisition",p:"n",ipa:"/ˈlæŋɡwɪdʒ ˌækwɪˈzɪʃn/",vi:"sự tiếp thu ngôn ngữ",ex:"Language acquisition happens naturally in young children.",exvi:"Việc tiếp thu ngôn ngữ diễn ra tự nhiên ở trẻ nhỏ."},
    {g:"Word list của sách",w:"level (of)",p:"n",ipa:"/ˈlevl/",vi:"mức độ, trình độ",ex:"Students are placed in classes according to their level of English.",exvi:"Học viên được xếp lớp theo trình độ tiếng Anh."},
    {g:"Word list của sách",w:"literate",p:"adj",ipa:"/ˈlɪtərət/",vi:"biết đọc biết viết",ex:"Almost all adults in Vietnam are literate.",exvi:"Gần như toàn bộ người trưởng thành ở Việt Nam biết đọc biết viết."},
    {g:"Word list của sách",w:"(im)mature",p:"adj",ipa:"/məˈtʃʊə/ /ˌɪməˈtʃʊə/",vi:"trưởng thành / chưa trưởng thành",ex:"A baby's brain is still immature.",exvi:"Não của em bé vẫn chưa phát triển hoàn thiện."},
    {g:"Word list của sách",w:"matter",p:"v",ipa:"/ˈmætə/",vi:"quan trọng, có ý nghĩa",ex:"What matters is how many words you know, not your age.",exvi:"Điều quan trọng là bạn biết bao nhiêu từ, không phải tuổi của bạn."},
    {g:"Word list của sách",w:"more or less",p:"phrase",ipa:"/ˌmɔːr ɔː ˈles/",vi:"gần như, xấp xỉ",ex:"The two groups learned more or less the same way.",exvi:"Hai nhóm học theo cách gần như giống nhau."},
    {g:"Word list của sách",w:"native speaker",p:"n",ipa:"/ˈneɪtɪv ˈspiːkə/",vi:"người bản ngữ",ex:"Talking to native speakers helps you sound more natural.",exvi:"Nói chuyện với người bản ngữ giúp bạn nói tự nhiên hơn."},
    {g:"Word list của sách",w:"no longer",p:"phrase",ipa:"/nəʊ ˈlɒŋɡə/",vi:"không còn nữa",ex:"Many adopted children no longer hear their first language.",exvi:"Nhiều trẻ được nhận nuôi không còn được nghe tiếng mẹ đẻ nữa."},
    {g:"Word list của sách",w:"obesity",p:"n",ipa:"/əʊˈbiːsəti/",vi:"bệnh béo phì",ex:"Obesity has become a global problem.",exvi:"Béo phì đã trở thành vấn đề toàn cầu."},
    {g:"Word list của sách",w:"on a diet",p:"phrase",ipa:"/ɒn ə ˈdaɪət/",vi:"đang ăn kiêng",ex:"I'm on a diet, so no cake for me, thanks.",exvi:"Tôi đang ăn kiêng nên không ăn bánh đâu, cảm ơn."},
    {g:"Word list của sách",w:"options",p:"n",ipa:"/ˈɒpʃnz/",vi:"các lựa chọn",ex:"Mandarin and French were the two language options.",exvi:"Tiếng Quan Thoại và tiếng Pháp là hai lựa chọn ngoại ngữ."},
    {g:"Word list của sách",w:"potential",p:"adj",ipa:"/pəˈtenʃl/",vi:"tiềm năng, có thể xảy ra",ex:"This is a potential answer, but it needs more research.",exvi:"Đây là một câu trả lời khả dĩ, nhưng cần thêm nghiên cứu."},
    {g:"Word list của sách",w:"raise a question",p:"phrase",ipa:"/reɪz ə ˈkwestʃən/",vi:"đặt ra câu hỏi",ex:"The study raises an important question about adult learners.",exvi:"Nghiên cứu đặt ra một câu hỏi quan trọng về người học trưởng thành."},
    {g:"Word list của sách",w:"reach",p:"v",ipa:"/riːtʃ/",vi:"đạt tới (mức)",ex:"The number of students reached a peak in 2006.",exvi:"Số học sinh đạt đỉnh vào năm 2006."},
    {g:"Word list của sách",w:"recruitment",p:"n",ipa:"/rɪˈkruːtmənt/",vi:"sự tuyển dụng",ex:"The graph shows the recruitment of teachers in Ontario.",exvi:"Biểu đồ thể hiện việc tuyển dụng giáo viên ở Ontario."},
    {g:"Word list của sách",w:"the reverse",p:"n",ipa:"/ðə rɪˈvɜːs/",vi:"điều ngược lại",ex:"Children learn to add before they multiply, not the reverse.",exvi:"Trẻ học cộng trước rồi mới học nhân, không phải ngược lại."},
    {g:"Word list của sách",w:"suspect",p:"v",ipa:"/səˈspekt/",vi:"nghi ngờ, cho rằng (có lẽ)",ex:"Researchers suspect there is a critical period for language.",exvi:"Các nhà nghiên cứu cho rằng có một giai đoạn then chốt cho ngôn ngữ."},
    {g:"Word list của sách",w:"tongue",p:"n",ipa:"/tʌŋ/",vi:"ngôn ngữ, tiếng (mother tongue = tiếng mẹ đẻ)",ex:"Her mother tongue is Vietnamese.",exvi:"Tiếng mẹ đẻ của cô ấy là tiếng Việt."},
    {g:"Word list của sách",w:"by trial and error",p:"phrase",ipa:"/baɪ ˌtraɪəl ən ˈerə/",vi:"bằng cách thử và sai",ex:"Children learn grammar by trial and error.",exvi:"Trẻ học ngữ pháp bằng cách thử và sai."},
    {g:"Học tập ở đại học",w:"assignment",p:"n",ipa:"/əˈsaɪnmənt/",vi:"bài tập (được giao)",ex:"The assignment must be handed in by Friday.",exvi:"Bài tập phải nộp trước thứ Sáu."},
    {g:"Học tập ở đại học",w:"tutorial",p:"n",ipa:"/tjuːˈtɔːriəl/",vi:"buổi học nhóm nhỏ với giảng viên",ex:"We discuss our essays in a weekly tutorial.",exvi:"Chúng tôi thảo luận bài luận trong buổi học nhóm hằng tuần."},
    {g:"Học tập ở đại học",w:"term paper",p:"n",ipa:"/tɜːm ˈpeɪpə/",vi:"bài luận cuối kỳ",ex:"I'm writing a term paper on children's language.",exvi:"Tôi đang viết bài luận cuối kỳ về ngôn ngữ trẻ em."},
    {g:"Học tập ở đại học",w:"self-assessment",p:"n",ipa:"/ˌself əˈsesmənt/",vi:"tự đánh giá",ex:"Self-assessment helps students notice their weaknesses.",exvi:"Tự đánh giá giúp sinh viên nhận ra điểm yếu của mình."},
    {g:"Học tập ở đại học",w:"peer evaluation",p:"n",ipa:"/pɪər ɪˌvæljuˈeɪʃn/",vi:"đánh giá chéo giữa bạn học",ex:"Peer evaluation is part of the final grade.",exvi:"Đánh giá chéo giữa bạn học là một phần của điểm tổng kết."},
    {g:"Học tập ở đại học",w:"extract",p:"n",ipa:"/ˈekstrækt/",vi:"đoạn trích",ex:"Read the extract and underline the key ideas.",exvi:"Đọc đoạn trích và gạch chân các ý chính."},
    {g:"Học tập ở đại học",w:"finding",p:"n",ipa:"/ˈfaɪndɪŋ/",vi:"phát hiện, kết quả nghiên cứu",ex:"The main finding was surprising.",exvi:"Phát hiện chính khá bất ngờ."},
    {g:"Từ dễ nhầm",w:"teach",p:"v",ipa:"/tiːtʃ/",vi:"dạy (truyền kiến thức cho người khác)",ex:"My dad taught me how to swim.",exvi:"Bố dạy tôi bơi."},
    {g:"Từ dễ nhầm",w:"learn",p:"v",ipa:"/lɜːn/",vi:"học được (kiến thức, kỹ năng mới)",ex:"I want to learn how to cook Thai food.",exvi:"Tôi muốn học nấu món Thái."},
    {g:"Từ dễ nhầm",w:"study",p:"v",ipa:"/ˈstʌdi/",vi:"học (đi học, đọc sách để hiểu)",ex:"He is studying biology at university.",exvi:"Anh ấy đang học ngành sinh học ở đại học."},
    {g:"Từ dễ nhầm",w:"find out",p:"phr v",ipa:"/faɪnd aʊt/",vi:"tìm hiểu, phát hiện ra (thông tin mới)",ex:"Can you find out what time the lecture starts?",exvi:"Bạn tìm hiểu giúp mấy giờ bài giảng bắt đầu được không?"},
    {g:"Từ dễ nhầm",w:"know",p:"v",ipa:"/nəʊ/",vi:"biết (đã có thông tin)",ex:"I know the answer to that question.",exvi:"Tôi biết câu trả lời cho câu hỏi đó."},
    {g:"Mô tả xu hướng (Writing Task 1)",w:"fluctuate",p:"v",ipa:"/ˈflʌktʃueɪt/",vi:"dao động, lên xuống thất thường",ex:"The number of students fluctuated between 2006 and 2010.",exvi:"Số học sinh dao động từ năm 2006 đến 2010."},
    {g:"Mô tả xu hướng (Writing Task 1)",w:"peak",p:"v / n",ipa:"/piːk/",vi:"đạt đỉnh / đỉnh điểm",ex:"Sales peaked at 75 in 2005.",exvi:"Doanh số đạt đỉnh 75 vào năm 2005."},
    {g:"Mô tả xu hướng (Writing Task 1)",w:"remain stable",p:"phrase",ipa:"/rɪˈmeɪn ˈsteɪbl/",vi:"giữ ổn định",ex:"The figure has remained stable since 2010.",exvi:"Con số này giữ ổn định kể từ năm 2010."},
    {g:"Mô tả xu hướng (Writing Task 1)",w:"rocket",p:"v",ipa:"/ˈrɒkɪt/",vi:"tăng vọt",ex:"Online enrolments rocketed during the pandemic.",exvi:"Số lượng đăng ký học trực tuyến tăng vọt trong đại dịch."},
    {g:"Mô tả xu hướng (Writing Task 1)",w:"dip",p:"v",ipa:"/dɪp/",vi:"giảm nhẹ (trong thời gian ngắn)",ex:"The number dipped slightly in 2006.",exvi:"Con số giảm nhẹ vào năm 2006."}
  ],
  phrases:[
    {g:"Tính từ + danh từ",w:"a critical period",p:"noun phrase",ipa:"/ə ˈkrɪtɪkl ˈpɪəriəd/",vi:"giai đoạn then chốt",ex:"Some experts believe there is a critical period for learning languages.",exvi:"Một số chuyên gia cho rằng có giai đoạn then chốt cho việc học ngôn ngữ."},
    {g:"Tính từ + danh từ",w:"a gradual process",p:"noun phrase",ipa:"/ə ˈɡrædʒuəl ˈprəʊses/",vi:"một quá trình từ từ",ex:"Learning to speak is a gradual process.",exvi:"Học nói là một quá trình từ từ."},
    {g:"Tính từ + danh từ",w:"authentic materials",p:"noun phrase",ipa:"/ɔːˈθentɪk məˈtɪəriəlz/",vi:"tài liệu thật (không soạn riêng cho người học)",ex:"Our teacher uses authentic materials like news reports.",exvi:"Giáo viên của chúng tôi dùng tài liệu thật như bản tin."},
    {g:"Tính từ + danh từ",w:"function words",p:"noun phrase",ipa:"/ˈfʌŋkʃn wɜːdz/",vi:"hư từ (the, of, to…)",ex:"Toddlers often leave out function words.",exvi:"Trẻ mới biết đi thường bỏ sót các hư từ."},
    {g:"Tính từ + danh từ",w:"a foreign language",p:"noun phrase",ipa:"/ə ˈfɒrən ˈlæŋɡwɪdʒ/",vi:"ngoại ngữ",ex:"Learning a foreign language opens many doors.",exvi:"Học một ngoại ngữ mở ra nhiều cơ hội."},
    {g:"Danh từ + danh từ",w:"word endings",p:"noun phrase",ipa:"/wɜːd ˈendɪŋz/",vi:"đuôi từ (-s, -ed, -ing)",ex:"Young children often forget word endings.",exvi:"Trẻ nhỏ hay quên đuôi từ."},
    {g:"Danh từ + danh từ",w:"vocabulary size",p:"noun phrase",ipa:"/vəˈkæbjələri saɪz/",vi:"vốn từ (số lượng)",ex:"Vocabulary size predicts when children combine words.",exvi:"Vốn từ dự đoán được khi nào trẻ bắt đầu ghép từ."},
    {g:"Danh từ + danh từ",w:"course tutor",p:"noun phrase",ipa:"/kɔːs ˈtjuːtə/",vi:"giảng viên phụ trách khoá học",ex:"I discussed my assignment with my course tutor.",exvi:"Tôi bàn về bài tập với giảng viên phụ trách."},
    {g:"Danh từ + danh từ",w:"intonation patterns",p:"noun phrase",ipa:"/ˌɪntəˈneɪʃn ˈpætnz/",vi:"các mẫu ngữ điệu",ex:"English intonation patterns are different from Vietnamese ones.",exvi:"Các mẫu ngữ điệu tiếng Anh khác với tiếng Việt."},
    {g:"Danh từ + danh từ",w:"body language",p:"noun phrase",ipa:"/ˈbɒdi ˈlæŋɡwɪdʒ/",vi:"ngôn ngữ cơ thể",ex:"Good speakers use body language to keep the audience interested.",exvi:"Người nói giỏi dùng ngôn ngữ cơ thể để thu hút khán giả."},
    {g:"Danh từ + of + danh từ",w:"the stages of language",p:"noun phrase",ipa:"/ðə ˈsteɪdʒɪz əv ˈlæŋɡwɪdʒ/",vi:"các giai đoạn phát triển ngôn ngữ",ex:"All children go through the same stages of language.",exvi:"Mọi trẻ em đều trải qua các giai đoạn ngôn ngữ giống nhau."},
    {g:"Danh từ + of + danh từ",w:"a level of proficiency",p:"noun phrase",ipa:"/ə ˈlevl əv prəˈfɪʃnsi/",vi:"một mức độ thành thạo",ex:"Adults rarely reach the same level of proficiency as children.",exvi:"Người lớn hiếm khi đạt được mức độ thành thạo như trẻ em."},
    {g:"Dùng trong Writing Task 1",w:"a significant rise",p:"noun phrase",ipa:"/ə sɪɡˈnɪfɪkənt raɪz/",vi:"sự tăng đáng kể",ex:"There was a significant rise in the number of Mandarin students.",exvi:"Số học sinh học tiếng Quan Thoại tăng đáng kể."},
    {g:"Dùng trong Writing Task 1",w:"a slight fall",p:"noun phrase",ipa:"/ə slaɪt fɔːl/",vi:"sự giảm nhẹ",ex:"This was followed by a slight fall of 2 percent.",exvi:"Sau đó là một đợt giảm nhẹ 2 phần trăm."},
    {g:"Dùng trong Writing Task 1",w:"a sudden drop",p:"noun phrase",ipa:"/ə ˈsʌdn drɒp/",vi:"sự sụt giảm đột ngột",ex:"There was a sudden drop in enrolments in 2020.",exvi:"Số lượng ghi danh sụt giảm đột ngột vào năm 2020."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"attend a lecture",p:"collocation",ipa:"/əˈtend ə ˈlektʃə/",vi:"dự một bài giảng",ex:"Over 200 students attended the lecture.",exvi:"Hơn 200 sinh viên đã dự bài giảng."},
    {g:"Động từ + danh từ",w:"make a presentation",p:"collocation",ipa:"/meɪk ə ˌpreznˈteɪʃn/",vi:"thuyết trình",ex:"I have to make a presentation in English tomorrow.",exvi:"Ngày mai tôi phải thuyết trình bằng tiếng Anh."},
    {g:"Động từ + danh từ",w:"hand in an assignment",p:"collocation",ipa:"/hænd ɪn ən əˈsaɪnmənt/",vi:"nộp bài tập",ex:"Don't forget to hand in your assignment on time.",exvi:"Đừng quên nộp bài tập đúng hạn."},
    {g:"Động từ + danh từ",w:"test a hypothesis",p:"collocation",ipa:"/test ə haɪˈpɒθəsɪs/",vi:"kiểm chứng giả thuyết",ex:"They found a clever way to test the hypothesis.",exvi:"Họ tìm ra một cách khéo léo để kiểm chứng giả thuyết."},
    {g:"Động từ + danh từ",w:"carry out a study",p:"collocation",ipa:"/ˈkæri aʊt ə ˈstʌdi/",vi:"thực hiện một nghiên cứu",ex:"The university carried out a study on adopted children.",exvi:"Trường đại học đã thực hiện một nghiên cứu về trẻ được nhận nuôi."},
    {g:"Động từ + danh từ",w:"gain vocabulary",p:"collocation",ipa:"/ɡeɪn vəˈkæbjələri/",vi:"tích luỹ vốn từ",ex:"Children need time to gain enough vocabulary.",exvi:"Trẻ cần thời gian để tích luỹ đủ vốn từ."},
    {g:"Động từ + danh từ",w:"get the message across",p:"collocation",ipa:"/ɡet ðə ˈmesɪdʒ əˈkrɒs/",vi:"truyền đạt được ý",ex:"I didn't know the word, but I got the message across with gestures.",exvi:"Tôi không biết từ đó nhưng vẫn truyền đạt được ý bằng cử chỉ."},
    {g:"Động từ + danh từ",w:"master a skill",p:"collocation",ipa:"/ˈmɑːstər ə skɪl/",vi:"thành thạo một kỹ năng",ex:"It takes years to master a skill like writing.",exvi:"Phải mất nhiều năm mới thành thạo một kỹ năng như viết."},
    {g:"Trạng từ + động từ",w:"rise dramatically",p:"collocation",ipa:"/raɪz drəˈmætɪkli/",vi:"tăng mạnh",ex:"The number of online learners rose dramatically.",exvi:"Số người học trực tuyến tăng mạnh."},
    {g:"Trạng từ + động từ",w:"fall considerably",p:"collocation",ipa:"/fɔːl kənˈsɪdərəbli/",vi:"giảm đáng kể",ex:"The figure for French fell considerably after 2005.",exvi:"Số liệu của tiếng Pháp giảm đáng kể sau năm 2005."},
    {g:"Trạng từ + động từ",w:"increase gradually",p:"collocation",ipa:"/ɪnˈkriːs ˈɡrædʒuəli/",vi:"tăng dần",ex:"Enrolments increased gradually over the decade.",exvi:"Số lượng ghi danh tăng dần trong thập kỷ."},
    {g:"Giới từ với xu hướng",w:"rise by / rise to",p:"collocation",ipa:"/raɪz baɪ/ /raɪz tə/",vi:"tăng thêm (một lượng) / tăng lên đến (một mức)",ex:"Sales rose by 5 percent to 120 units.",exvi:"Doanh số tăng thêm 5 phần trăm, lên mức 120 đơn vị."},
    {g:"Giới từ với xu hướng",w:"peak at",p:"collocation",ipa:"/piːk æt/",vi:"đạt đỉnh ở mức",ex:"The percentage peaked at 35 in 2009.",exvi:"Tỉ lệ đạt đỉnh ở mức 35 vào năm 2009."},
    {g:"Giới từ với xu hướng",w:"an increase in",p:"collocation",ipa:"/ən ˈɪnkriːs ɪn/",vi:"sự tăng về (cái gì)",ex:"There will be an increase in taxi fares next month.",exvi:"Giá cước taxi sẽ tăng vào tháng tới."}
  ],
  grammar:{
    title:"Past simple, present perfect simple & present perfect continuous",
    rules:[
      {h:"Past simple",use:["Hành động/trạng thái đã kết thúc trong quá khứ, thường có mốc thời gian (in 1999, ago, last year)","Một chuỗi sự việc trong quá khứ (kể chuyện)"],form:"S + V2/V-ed · S + didn't + V",ex:"A couple of years ago, I went on holiday to Windsor.",sig:"ago, in 2005, yesterday, last…"},
      {h:"Present perfect simple",use:["Trạng thái bắt đầu trong quá khứ và còn đến hiện tại","Trải nghiệm, kết quả quan trọng ở hiện tại (không nói thời điểm)","Khoảng thời gian chưa kết thúc: in the last few decades, recently"],form:"S + have/has + V3",ex:"Obesity has become a global problem.",sig:"since, for, ever, never, recently, so far"},
      {h:"Present perfect continuous",use:["Hành động bắt đầu trong quá khứ, vẫn đang tiếp diễn, nhấn mạnh quá trình/độ dài"],form:"S + have/has been + V-ing",ex:"She's been living there for 20 years now.",sig:"for, since, all day, how long"},
      {h:"Writing Task 1: chọn thì theo thời gian trên biểu đồ",use:["Năm đã qua → past simple (fell in 2006)","Từ quá khứ đến nay → present perfect (has remained stable since 2010)","Dự báo → will / is expected to"],form:"In 2000… rose · Since 2005… have not changed",ex:"French has remained fairly stable since then.",sig:"đọc kỹ trục thời gian"}
    ],
    quiz:[
      {q:"In the last few decades, there ___ a rapid development in technology.",o:["has been","was","is"],a:0,e:"Khoảng thời gian đến hiện tại → present perfect."},
      {q:"The most popular country that UK residents ___ in 1999 was France.",o:["visited","have visited","have been visiting"],a:0,e:"Mốc 1999 đã qua → past simple."},
      {q:"I ___ responsible for myself since I was eight.",o:["have been","was","am"],a:0,e:"since + mốc → present perfect."},
      {q:"Obesity ___ a global problem.",o:["has become","became","becomes"],a:0,e:"Kết quả còn ở hiện tại."},
      {q:"One day, the company ___ down.",o:["was shut","has been shut","has been shutting"],a:0,e:"Sự việc xác định trong quá khứ."},
      {q:"I ___ Japanese for two years now.",o:["have been learning","learned","am learning"],a:0,e:"Vẫn đang học, nhấn mạnh thời gian."},
      {q:"My favourite author ___ his first book ten years ago.",o:["wrote","has written","has been writing"],a:0,e:"ago → past simple."},
      {q:"We ___ here for half an hour, but the tutor still hasn't arrived.",o:["have been waiting","waited","wait"],a:0,e:"Hành động kéo dài đến hiện tại."}
    ]
  },
  reading:{
    title:"Why Can Some Children Speak Two Languages So Easily?", est:"khoảng 520 từ · 20 phút",
    paras:[
      "In many parts of the world, growing up with two or more languages is completely normal. A child in Singapore may speak Mandarin with her grandparents, English at school and Malay with her neighbours. Yet in countries where most people speak only one language, parents are often worried that learning two languages at once will confuse their children. In my view, this fear is not supported by the evidence.",
      "It is true that bilingual children sometimes mix their languages, using a word from one language in a sentence in the other. For many years, teachers took this as a sign that the child was confused. Today, most researchers see it differently. Adults who speak two languages fluently mix them all the time, usually because one language has the perfect word for a particular situation. Mixing, in other words, is a skill rather than a problem.",
      "Another common belief is that bilingual children start talking later than other children. A large study carried out in Canada found that bilingual and monolingual children produced their first words at more or less the same age. When the researchers counted only one language, the bilingual children seemed to know fewer words. However, when words from both languages were added together, their total vocabulary was the same as, or larger than, that of children who spoke one language.",
      "What, then, are the benefits? Some psychologists claim that bilingual children are better at concentrating and ignoring distractions, because they are constantly choosing which language to use. This idea has become very popular in the media, but I believe we should be careful. Recent studies have produced mixed results, and the advantage, if it exists, may be smaller than first suggested.",
      "Much more certain are the social benefits. A child who can talk to grandparents in their own language keeps a connection with the family's history and culture. I have met many adults who regret that their parents did not pass on their language to them, but I have never met anyone who was sorry that they had learned one.",
      "So how can parents help? Experts agree that the amount of time a child hears each language is the key factor. A child who hears a language for less than about a quarter of their waking hours is unlikely to become an active speaker. Some families follow the rule ‘one parent, one language’; others use one language at home and another outside. Either approach can work, as long as the child has plenty of opportunities to use both languages in real conversations, not just in lessons.",
      "Of course, it would be wrong to suggest that raising a bilingual child is always easy. It takes patience, and there will be times when the child refuses to speak the less popular language. But the critical point is this: children's brains are perfectly able to handle more than one language. The question is not whether they can, but whether they get enough practice."
    ],
    note:"Bài đọc tự viết để luyện tập; nghiên cứu được mô tả chung chung.",
    quiz:[
      {t:"head",text:"Câu 1–5: Do the following statements agree with the claims of the writer? Chọn YES / NO / NOT GIVEN."},
      {q:"Parents' fear that two languages will confuse children is justified.",o:["YES","NO","NOT GIVEN"],a:1,e:"Đoạn A: 'this fear is not supported by the evidence'."},
      {q:"Mixing two languages shows that a speaker has a special ability.",o:["YES","NO","NOT GIVEN"],a:0,e:"Đoạn B: 'Mixing… is a skill rather than a problem'."},
      {q:"Bilingual children usually prefer the language spoken at school.",o:["YES","NO","NOT GIVEN"],a:2,e:"Tác giả không nói trẻ thích ngôn ngữ nào hơn."},
      {q:"The media has exaggerated the effect of bilingualism on concentration.",o:["YES","NO","NOT GIVEN"],a:0,e:"Đoạn D: 'we should be careful… smaller than first suggested'."},
      {q:"Many adults are sorry they learned their parents' language.",o:["YES","NO","NOT GIVEN"],a:1,e:"Đoạn E: 'never met anyone who was sorry'."},
      {t:"head",text:"Câu 6–9: Complete the summary using the list of words A–H: A vocabulary · B time · C lessons · D confusion · E conversations · F grammar · G grandparents · H patience"},
      {q:"Researchers used to think that mixing languages was a sign of ___.",o:["A vocabulary","B time","C lessons","D confusion","E conversations","F grammar","G grandparents","H patience"],a:3,e:"Đoạn B."},
      {q:"When both languages are counted, bilingual children's ___ is at least as large as other children's.",o:["A vocabulary","B time","C lessons","D confusion","E conversations","F grammar","G grandparents","H patience"],a:0,e:"Đoạn C."},
      {q:"The most important factor is the amount of ___ the child hears each language.",o:["A vocabulary","B time","C lessons","D confusion","E conversations","F grammar","G grandparents","H patience"],a:1,e:"Đoạn F."},
      {q:"Children need to use both languages in real ___.",o:["A vocabulary","B time","C lessons","D confusion","E conversations","F grammar","G grandparents","H patience"],a:4,e:"Đoạn F."},
      {t:"head",text:"Câu 10–12: Choose the correct letter, A, B, C or D."},
      {q:"What is the writer's main purpose in the second paragraph?",o:["A to explain why adults mix languages","B to challenge an old view of language mixing","C to describe how teachers deal with mixing","D to suggest that children should not mix languages"],a:1,e:"Đoạn B: quan điểm cũ (confused) bị bác bỏ."},
      {q:"According to the Canadian study, bilingual children",o:["A start speaking later than other children.","B know fewer words in total.","C produce their first words at a similar age.","D learn one language much faster than the other."],a:2,e:"Đoạn C."},
      {q:"What does the writer say about raising a bilingual child?",o:["A It is only possible if both parents are bilingual.","B It requires a strict rule about who speaks which language.","C It can be difficult at times but is achievable.","D It is easier if children take language lessons."],a:2,e:"Đoạn G."}
    ]
  },
  listening:{
    title:"Section 3 · Planning a pronunciation project",
    intro:"Sinh viên Amanda trao đổi với giảng viên Dr Lewis về bài tập nghiên cứu phát âm.",
    script:[
      ["A","Come in, Amanda. You wanted to talk about your assignment?"],
      ["B","Yes. I'm planning a project on how students can improve their pronunciation, and I'd like your advice."],
      ["A","Good. What will the students actually do?"],
      ["B","Well, first they'll read aloud a short extract from a textbook, and I'll record them. Then they'll listen to their own recording and analyse it, you know, a kind of self-assessment."],
      ["A","Will they record each other as well?"],
      ["B","I thought about that, but it takes too long, so no. And I'm not asking them to memorise anything."],
      ["A","Fine. Now, the extract is important. What will you look for?"],
      ["B","I want it to be short, so students can read it in about two minutes."],
      ["A","Yes, but more importantly, it needs to be well organised, with a clear beginning, middle and end. And make sure it contains the main ideas of the topic, otherwise it won't sound natural. The number of words doesn't really matter."],
      ["B","OK. I was also going to use some of the lectures from this term as models. Which ones would you recommend?"],
      ["A","Let's see. The history of English lecture was very popular, students loved the topic."],
      ["B","Yes, everyone was talking about it. What about the one on gestures and signs?"],
      ["A","Hmm, that one repeated the same points too often. I wouldn't use it."],
      ["B","And intonation patterns?"],
      ["A","That's a good one. People assume Dr Chen spent weeks preparing it, but actually she wrote it quite quickly. What makes it good is that it's much more carefully structured than the others."],
      ["B","And language and rhythm?"],
      ["A","Ah, that was the shortest lecture, but the content is exactly what you need for your project, so I'd include it."],
      ["B","Great. And for the study, I'll need some equipment."],
      ["A","You can borrow a digital recorder from the language lab. And students will need headphones to listen back to themselves."],
      ["B","Perfect, thanks."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–4: Choose TWO letters, A–E."},
      {t:"pick",q:"Which TWO activities will students do as part of Amanda's project?",o:["A read part of a book aloud","B record other students","C analyse their own speech","D memorise part of a lecture","E repeat a recorded sentence"],a:[0,2]},
      {t:"pick",q:"Which TWO features must Amanda check when she chooses the extract?",o:["A the time it takes to read","B the overall organisation","C the number of words","D the number of speakers","E the inclusion of key ideas"],a:[1,4]},
      {t:"head",text:"Câu 5–8: What comment do the speakers make about each lecture? A The content is repetitive. B It took a long time to prepare. C It was shorter than the others. D It was well structured. E The content is relevant. F The topic was popular."},
      {q:"History of English",o:["A","B","C","D","E","F"],a:5},
      {q:"Gestures and signs",o:["A","B","C","D","E","F"],a:0},
      {q:"Intonation patterns",o:["A","B","C","D","E","F"],a:3,e:"B là bẫy: 'she wrote it quite quickly'."},
      {q:"Language and rhythm",o:["A","B","C","D","E","F"],a:4,e:"'the content is exactly what you need'."},
      {t:"head",text:"Câu 9–10: Write NO MORE THAN TWO WORDS. Which TWO pieces of equipment will the students use?"},
      {t:"gap",q:"Equipment 1: ___",a:["digital recorder","recorder","a digital recorder"]},
      {t:"gap",q:"Equipment 2: ___",a:["headphones"]}
    ]
  },
  writing:{
    type:"Task 1", min:150, time:"20 phút",
    prompt:"The graph below shows the number of students at a language centre in Vietnam who chose to study Korean and Japanese between 2012 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    charts:[
      {type:"line",title:"Students choosing Korean and Japanese",cats:["2012","2014","2016","2018","2020","2022","2024"],series:[["Japanese",[140,150,135,120,125,115,120]],["Korean",[30,45,70,110,95,150,180]]],max:200,step:40}
    ],
    note:"Số liệu giả định để luyện tập.",
    plan:["Mở bài: The graph shows how many… (diễn đạt lại đề)","Overview: Korean tăng mạnh và vượt Japanese; Japanese giảm nhẹ rồi khá ổn định","Thân 1: Japanese: đỉnh 150 (2014), giảm xuống 120 (2018), dao động quanh 115–125","Thân 2: Korean: từ 30 tăng vọt lên 110 (2018), giảm nhẹ 2020, vượt Japanese 2022, đạt 180 (2024)","Dùng past simple cho các năm đã qua; dùng đúng giới từ: rose to, fell by, peaked at"],
    model:"The line graph illustrates changes in the number of students at a Vietnamese language centre who studied Korean and Japanese over a twelve-year period from 2012 to 2024.\n\nOverall, Korean became dramatically more popular and overtook Japanese, which experienced a slight decline before levelling off.\n\nIn 2012, Japanese was by far the more popular option, with 140 students compared to just 30 for Korean. The number of Japanese learners rose slightly to a peak of 150 in 2014, but then fell steadily to 120 in 2018. After this, the figure fluctuated between 115 and 125 and finished the period at 120.\n\nKorean, on the other hand, saw a remarkable increase. Student numbers more than tripled to 110 between 2012 and 2018. Although there was a small dip to 95 in 2020, the figure rocketed to 150 two years later, overtaking Japanese for the first time. By 2024, 180 students had chosen Korean, six times as many as at the beginning of the period."
  },
  speaking:{
    tip:"Part 2 kể chuyện quá khứ: dùng từ nối để đánh dấu các giai đoạn (A couple of years ago…, At the time…, As soon as…, However, one morning…, Eventually…, The reason why…). Dùng past simple để kể chuỗi sự việc và present perfect khi nói về điều bạn rút ra (What I've learned is…). Chú ý phát âm các phụ âm dễ nhầm như /l/–/r/, /v/–/w/, /ʃ/–/dʒ/.",
    p1:["Do you enjoy learning languages?","How did you learn to read and write?","Do you prefer to study alone or with other people?","Have you ever taken an online course?"],
    p1sample:{q:"Do you prefer to study alone or with other people?",a:"It depends on what I'm studying. For grammar or vocabulary, I prefer studying alone in the library, because I can concentrate better. But for speaking, I definitely prefer working with other people. I've been meeting a study partner twice a week since September, and my fluency has improved a lot."},
    cue:{t:"Describe a situation when you had to use a foreign language to communicate.",pts:["where you were","what happened","how well you communicated in the language"],end:"and explain why you remember this situation."},
    p2sample:"I'd like to tell you about something that happened when I was in Seoul a couple of years ago. At the time, I had just finished my first year at university, and I'd been studying Korean for about six months, so I decided to travel there with a friend during the summer break. Everything went well until, one morning, my friend felt really ill. She had a high temperature and couldn't get out of bed. So the next thing we did was look for a pharmacy. As soon as we walked in, I realised that I didn't know the words for most of her symptoms! I tried to explain in Korean, and when I didn't know a word, I used gestures and drew pictures on my phone. Eventually, the pharmacist understood and gave us some medicine, and my friend felt better the next day. I think I communicated reasonably well, although my grammar was terrible. The reason why I remember this situation is that it was the first time I used Korean in a real emergency. What I've learned from this experience is that getting the message across is more important than speaking perfectly.",
    p3:["What is the best way for an adult to learn a foreign language?","Do you think children learn languages more easily than adults? Why?","How has technology changed the way people learn languages?"],
    p3sample:{q:"Do you think children learn languages more easily than adults?",a:"In some ways, yes. Children seem to pick up pronunciation very naturally, and they aren't afraid of making mistakes. However, adults have advantages too. They can study grammar rules consciously and use their knowledge of their first language. So I'd say children learn more naturally, but adults can often learn faster at the beginning if they're motivated."},
    phrases:["A couple of years ago,…","At the time,…","As soon as…","However, one morning,…","Eventually,…","The reason why I remember it is…"]
  },
  lesson:[
    {g:"Mở đầu: các tình huống học tập",w:"attend a lecture",p:"v phr",ipa:"/əˈtend ə ˈlektʃə/",vi:"dự một bài giảng",ex:"I attend three lectures every Monday.",exvi:"Mỗi thứ Hai tôi dự ba bài giảng."},
    {g:"Listening: trao đổi với giảng viên",w:"weaknesses",p:"n",ipa:"/ˈwiːknəsɪz/",vi:"điểm yếu",ex:"Recording yourself shows you your weaknesses.",exvi:"Tự ghi âm giúp bạn thấy điểm yếu của mình."},
    {g:"Listening: trao đổi với giảng viên",w:"authentic",p:"adj",ipa:"/ɔːˈθentɪk/",vi:"thật, xác thực",ex:"We listened to authentic interviews.",exvi:"Chúng tôi nghe những cuộc phỏng vấn thật."},
    {g:"Listening: trao đổi với giảng viên",w:"feature",p:"n",ipa:"/ˈfiːtʃə/",vi:"đặc điểm",ex:"Stress is an important feature of English pronunciation.",exvi:"Trọng âm là một đặc điểm quan trọng của phát âm tiếng Anh."},
    {g:"Listening: trao đổi với giảng viên",w:"structure",p:"n",ipa:"/ˈstrʌktʃə/",vi:"cấu trúc",ex:"The structure of the talk was very clear.",exvi:"Cấu trúc bài nói rất rõ ràng."},
    {g:"Listening: trao đổi với giảng viên",w:"repetitive",p:"adj",ipa:"/rɪˈpetətɪv/",vi:"lặp đi lặp lại",ex:"The lecture was rather repetitive.",exvi:"Bài giảng khá lặp đi lặp lại."},
    {g:"Listening: trao đổi với giảng viên",w:"relevant",p:"adj",ipa:"/ˈreləvənt/",vi:"liên quan, phù hợp",ex:"Only include information that is relevant to the question.",exvi:"Chỉ đưa thông tin liên quan đến câu hỏi."},
    {g:"Reading: babytalk",w:"utterance",p:"n",ipa:"/ˈʌtərəns/",vi:"lời nói, phát ngôn",ex:"Babies' first utterances are usually single words.",exvi:"Những lời đầu tiên của trẻ thường là từ đơn."},
    {g:"Reading: babytalk",w:"toddler",p:"n",ipa:"/ˈtɒdlə/",vi:"trẻ mới biết đi",ex:"Toddlers learn several new words every day.",exvi:"Trẻ mới biết đi học thêm vài từ mới mỗi ngày."},
    {g:"Reading: babytalk",w:"conversational",p:"adj",ipa:"/ˌkɒnvəˈseɪʃənl/",vi:"(thuộc) hội thoại, nói chuyện được",ex:"Toddlers aren't as conversational as adults.",exvi:"Trẻ mới biết đi không nói chuyện được như người lớn."},
    {g:"Reading: babytalk",w:"behaviourism",p:"n",ipa:"/bɪˈheɪvjərɪzəm/",vi:"thuyết hành vi",ex:"Behaviourism argued that we learn by copying.",exvi:"Thuyết hành vi cho rằng chúng ta học bằng cách bắt chước."},
    {g:"Reading: babytalk",w:"threshold",p:"n",ipa:"/ˈθreʃhəʊld/",vi:"ngưỡng",ex:"Children need to cross a vocabulary threshold before combining words.",exvi:"Trẻ cần vượt qua một ngưỡng vốn từ trước khi ghép từ."},
    {g:"Reading: babytalk",w:"adopted",p:"adj",ipa:"/əˈdɒptɪd/",vi:"được nhận nuôi",ex:"The study looked at children adopted from China.",exvi:"Nghiên cứu xem xét những trẻ được nhận nuôi từ Trung Quốc."},
    {g:"Reading: babytalk",w:"competing",p:"adj",ipa:"/kəmˈpiːtɪŋ/",vi:"cạnh tranh, đối lập nhau",ex:"There are two competing theories.",exvi:"Có hai giả thuyết đối lập nhau."},
    {g:"Reading: babytalk",w:"proficiency",p:"n",ipa:"/prəˈfɪʃnsi/",vi:"sự thành thạo",ex:"IELTS measures your proficiency in English.",exvi:"IELTS đo mức độ thành thạo tiếng Anh của bạn."},
    {g:"Reading: babytalk",w:"multiply",p:"v",ipa:"/ˈmʌltɪplaɪ/",vi:"nhân (toán)",ex:"Children learn to multiply after they learn to add.",exvi:"Trẻ học phép nhân sau khi học phép cộng."},
    {g:"Speaking Part 2: kể chuyện",w:"hire a car",p:"v phr",ipa:"/ˈhaɪər ə kɑː/",vi:"thuê xe ô tô",ex:"We hired a car at the airport.",exvi:"Chúng tôi thuê một chiếc ô tô ở sân bay."},
    {g:"Speaking Part 2: kể chuyện",w:"the emergency services",p:"n phr",ipa:"/ði ɪˈmɜːdʒənsi ˈsɜːvɪsɪz/",vi:"các dịch vụ khẩn cấp (cứu hoả, cấp cứu, cảnh sát)",ex:"I had to call the emergency services.",exvi:"Tôi phải gọi dịch vụ khẩn cấp."},
    {g:"Speaking Part 2: kể chuyện",w:"recovery van",p:"n phr",ipa:"/rɪˈkʌvəri væn/",vi:"xe cứu hộ",ex:"Twenty minutes later, a recovery van arrived.",exvi:"Hai mươi phút sau, xe cứu hộ đến."},
    {g:"Speaking Part 2: kể chuyện",w:"tyre",p:"n",ipa:"/ˈtaɪə/",vi:"lốp xe",ex:"I didn't know the word for tyre.",exvi:"Tôi không biết từ ‘lốp xe’ nói thế nào."},
    {g:"Writing Task 1: xu hướng",w:"gain popularity",p:"v phr",ipa:"/ɡeɪn ˌpɒpjuˈlærəti/",vi:"trở nên phổ biến hơn",ex:"French gained some popularity in 2006.",exvi:"Tiếng Pháp phổ biến hơn đôi chút vào năm 2006."},
    {g:"Writing Task 1: xu hướng",w:"hit a high point",p:"v phr",ipa:"/hɪt ə haɪ pɔɪnt/",vi:"đạt mức cao nhất",ex:"Sales hit a high point in December.",exvi:"Doanh số đạt mức cao nhất vào tháng Mười Hai."},
    {g:"Writing Task 1: xu hướng",w:"qualification",p:"n",ipa:"/ˌkwɒlɪfɪˈkeɪʃn/",vi:"bằng cấp, chứng chỉ",ex:"Most staff hold a qualification in a foreign language.",exvi:"Phần lớn nhân viên có chứng chỉ ngoại ngữ."},
    {g:"Writing Task 1: xu hướng",w:"previous work experience",p:"n phr",ipa:"/ˈpriːviəs wɜːk ɪkˈspɪəriəns/",vi:"kinh nghiệm làm việc trước đó",ex:"Previous work experience is useful but not essential.",exvi:"Kinh nghiệm làm việc trước đó có ích nhưng không bắt buộc."},
    {g:"Writing Task 1: xu hướng",w:"year of graduation",p:"n phr",ipa:"/jɪər əv ˌɡrædʒuˈeɪʃn/",vi:"năm tốt nghiệp",ex:"The graph groups teachers by year of graduation.",exvi:"Biểu đồ chia giáo viên theo năm tốt nghiệp."},
    {g:"Ôn tập Unit 3",w:"enrolment",p:"n",ipa:"/ɪnˈrəʊlmənt/",vi:"sự ghi danh, số lượng ghi danh",ex:"Enrolment in secondary schools has risen.",exvi:"Số học sinh ghi danh vào trường trung học đã tăng."},
    {g:"Ôn tập Unit 3",w:"phonetics",p:"n",ipa:"/fəˈnetɪks/",vi:"ngữ âm học",ex:"We haven't studied phonetics yet.",exvi:"Chúng tôi chưa học ngữ âm học."}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u3 = {
  tips:{
    reading:[
      {type:"Yes / No / Not Given (Reading 3)", tips:[
        "Làm giống True/False/Not Given, nhưng câu hỏi là về QUAN ĐIỂM/LẬP LUẬN của tác giả.",
        "Tìm từ trong câu hỏi giống hoặc gần nghĩa với từ trong bài để định vị đúng đoạn.",
        "Viết đáp án rõ ràng. Nếu giám khảo không đọc được, câu đó bị chấm sai."
      ]},
      {type:"Summary completion with a box", tips:[
        "Đọc lướt bản tóm tắt và đoán loại từ cần điền cho mỗi chỗ trống.",
        "Gạch chân từ quanh chỗ trống để tìm đúng phần trong bài.",
        "Gạch chân từ trong bài chứa thông tin còn thiếu, rồi chọn phương án cùng nghĩa (thường là từ đồng nghĩa)."
      ]},
      {type:"Multiple choice", tips:[
        "Dùng ý chính trong câu hỏi để tìm đúng chỗ trong bài.",
        "Đọc kỹ phần đó và gạch chân chữ trả lời câu hỏi.",
        "Câu hỏi về 'mục đích của đoạn' cần hiểu ý chính cả đoạn."
      ]}
    ],
    listening:[
      {type:"Pick from a list (Section 3)", tips:[
        "Gạch chân ý chính trong câu hỏi.",
        "Chỉ có hai phương án đúng. Khi nghe, đánh dấu các phương án bạn nghe thấy.",
        "Đáp án có thể không xuất hiện theo thứ tự trong câu hỏi. Người nói thường bàn đến cả phương án sai rồi loại đi."
      ]},
      {type:"Matching", tips:[
        "Gạch chân ý chính trong câu hỏi và các phương án.",
        "Đáp án đi theo thứ tự câu hỏi.",
        "Có phương án thừa, không phải phương án nào cũng được dùng."
      ]},
      {type:"Short-answer questions", tips:[
        "Gạch chân ý chính trong câu hỏi (what, which, how many…).",
        "Không viết quá số từ cho phép.",
        "Kiểm tra chính tả."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 2", tips:[
        "Sắp xếp bài nói bằng ghi chú và giới thiệu rõ từng ý với giám khảo.",
        "Dùng cụm từ phù hợp để đánh dấu các giai đoạn trong câu chuyện (At the time, As soon as, Eventually).",
        "Kể chuyện quá khứ dùng past simple; nói về bài học/kết quả hiện tại dùng present perfect."
      ]}
    ],
    writing:[
      {type:"Writing Task 1: mô tả xu hướng", tips:[
        "Tìm điểm giống và khác nhau giữa các đường/cột.",
        "Dùng ngôn ngữ mô tả xu hướng phù hợp: rise, fall, fluctuate, peak, remain stable, rocket, dip.",
        "Dùng đúng giới từ: rose BY 5% (lượng thay đổi), rose TO 120 (mức mới), peaked AT 35, between 2003 AND 2007, an increase IN prices.",
        "Chia đoạn theo từng xu hướng, có câu overview nêu xu hướng chung."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"My father learnt me how to drive.", good:"My father taught me how to drive.", why:"teach = dạy người khác; learn = tự học được."},
    {k:"vocab", bad:"Over the past half-century, scientists have known much about babytalk.", good:"Over the past half-century, scientists have found out much about babytalk.", why:"find out = phát hiện thông tin mới."},
    {k:"vocab", bad:"Children don't study to walk until they are ready.", good:"Children don't learn to walk until they are ready.", why:"learn to + V (học được kỹ năng); study = học có sách vở, lớp học."},
    {k:"grammar", bad:"In the last few decades, there was a rapid development in technology.", good:"In the last few decades, there has been a rapid development in technology.", why:"Khoảng thời gian kéo dài đến hiện tại → present perfect."},
    {k:"grammar", bad:"I was responsible for myself since I was eight.", good:"I have been responsible for myself since I was eight.", why:"since + mốc → present perfect."},
    {k:"grammar", bad:"One day, the company has been shut down.", good:"One day, the company was shut down.", why:"Sự việc xảy ra vào thời điểm xác định trong quá khứ."},
    {k:"grammar", bad:"The number of people peaked to 5,523 in 2001.", good:"The number of people peaked at 5,523 in 2001.", why:"peak at + con số."},
    {k:"grammar", bad:"Spending on teachers' salaries fell on 5%.", good:"Spending on teachers' salaries fell by 5%.", why:"Lượng thay đổi → by."},
    {k:"grammar", bad:"During the period of 1986 and 1999 there was a gradual increase.", good:"During the period between 1986 and 1999 there was a gradual increase.", why:"between … and …"},
    {k:"grammar", bad:"There is no evidence that a rise of petrol prices leads to less traffic.", good:"There is no evidence that a rise in petrol prices leads to less traffic.", why:"a rise/increase/fall IN + danh từ."}
  ],
  fix:[
    {t:"gap", q:"The oldest underground railway was built in London on 1863. → Sửa: ___", a:["in","in 1863"], e:"in + năm."},
    {t:"gap", q:"All the figures gradually increased over 1911 to 2001. → Sửa: ___", a:["from","from 1911 to 2001"], e:"from … to …"},
    {t:"gap", q:"The profits experienced an increase by $2m. → Sửa: ___", a:["of","an increase of"], e:"an increase OF + lượng."},
    {t:"gap", q:"The temperature decreased until a low of three degrees. → Sửa: ___", a:["to","decreased to"], e:"decrease to + mức mới."},
    {t:"gap", q:"Obesity became a global problem. (đến nay vẫn là vấn đề) → Sửa: ___", a:["has become"], e:"Kết quả ở hiện tại → present perfect."},
    {t:"gap", q:"People who have been on a diet eat more than they have eaten before. → Sửa: ___", a:["ate"], e:"Thời điểm trước kỳ ăn kiêng → past simple."},
    {t:"gap", q:"I'll know how much the book costs and call you back. → Sửa: ___", a:["find out"], e:"Tìm hiểu thông tin mới → find out."},
    {t:"gap", q:"This software is learning me how to pronounce difficult sounds. → Sửa: ___", a:["teaching"], e:"Dạy người khác → teach."},
    {t:"gap", q:"I have been learning Japanese since two years. → Sửa: ___", a:["for","for two years"], e:"for + khoảng thời gian."},
    {t:"gap", q:"She has written her first book ten years ago. → Sửa: ___", a:["wrote"], e:"ago → past simple."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u3 = [
  {q:"I ___ English since I was six.",o:["have studied","studied","study"],a:0,e:"since → present perfect.",k:"c"},
  {q:"She ___ to Japan in 2019.",o:["went","has gone","has been going"],a:0,e:"Mốc 2019 → past simple.",k:"c"},
  {q:"How long ___ for the bus? — About twenty minutes.",o:["have you been waiting","did you wait","do you wait"],a:0,e:"Vẫn đang đợi → present perfect continuous.",k:"c"},
  {q:"I ___ never ___ a book in Korean.",o:["have / read","did / read","was / reading"],a:0,e:"Trải nghiệm (never) → present perfect.",k:"c"},
  {q:"We ___ the project last Friday.",o:["finished","have finished","have been finishing"],a:0,e:"last Friday → past simple.",k:"c"},
  {q:"The number of students ___ steadily since 2015.",o:["has risen","rose","rises"],a:0,e:"since 2015 → present perfect.",k:"c"},
  {q:"In 2006, the figure for French ___ to 90.",o:["fell","has fallen","has been falling"],a:0,e:"Năm đã qua → past simple.",k:"c"},
  {q:"My eyes are tired because I ___ all afternoon.",o:["have been reading","read","have read"],a:0,e:"Kết quả của quá trình kéo dài.",k:"c"},
  {q:"___ you ever ___ a presentation in English?",o:["Have / given","Did / give","Were / giving"],a:0,e:"ever → present perfect.",k:"c"},
  {q:"Sales rose ___ 10 percent last year.",o:["by","on","at"],a:0,e:"Lượng thay đổi → by.",k:"c"},
  {q:"The price peaked ___ $50 in March.",o:["at","to","on"],a:0,e:"peak at.",k:"c"},
  {q:"There was a sharp fall ___ the number of visitors.",o:["in","of","at"],a:0,e:"a fall IN + danh từ.",k:"c"},
  {t:"gap",q:"I ___ (know) my best friend for ten years.",a:["have known","'ve known"],e:"know không dùng -ing; for → present perfect.",k:"g"},
  {t:"gap",q:"When I was a child, my grandmother ___ (teach) me to read.",a:["taught"],e:"Quá khứ đã kết thúc.",k:"g"},
  {t:"gap",q:"She ___ (work) on her thesis since January and still hasn't finished.",a:["has been working","'s been working"],e:"Vẫn đang làm → present perfect continuous.",k:"g"},
  {t:"gap",q:"The lecture ___ (start) ten minutes ago.",a:["started"],e:"ago → past simple.",k:"g"},
  {t:"gap",q:"Enrolments ___ (remain) stable since 2010.",a:["have remained"],e:"since → present perfect.",k:"g"},
  {t:"gap",q:"The number of learners fell ___ 25 percent between 2010 and 2015.",a:["by"],e:"Lượng giảm → by.",k:"g"},
  {t:"gap",q:"The figure increased ___ 200 to 350.",a:["from"],e:"from … to …",k:"g"},
  {t:"gap",q:"Who ___ (teach) you to play the guitar?",a:["taught"],e:"teach → taught.",k:"g"},
  {t:"gap",q:"I want to ___ (find out / know) more about the course before I apply.",a:["find out"],e:"Tìm hiểu thêm thông tin mới.",k:"g"},
  {q:"Câu nào đúng?",o:["I have visited London in 2018.","I visited London in 2018."],a:1,e:"Mốc thời gian cụ thể → past simple.",k:"s"},
  {q:"Câu nào đúng?",o:["I've lived here for five years.","I live here for five years."],a:0,e:"for + đến hiện tại → present perfect.",k:"s"},
  {q:"Câu nào đúng?",o:["She has been knowing him since 2010.","She has known him since 2010."],a:1,e:"know là động từ trạng thái.",k:"s"},
  {q:"Câu nào đúng?",o:["Prices rose to 20% last year.","Prices rose by 20% last year."],a:1,e:"20% là lượng tăng → by.",k:"s"},
  {q:"Câu nào đúng?",o:["My teacher learned me a lot.","My teacher taught me a lot."],a:1,e:"teach someone something.",k:"s"},
  {q:"Câu nào đúng?",o:["Did you finish your essay yet?","Have you finished your essay yet?"],a:1,e:"yet → present perfect (Anh-Anh).",k:"s"},
  {q:"Câu nào đúng?",o:["The figure peaked at 75 in 2005.","The figure peaked to 75 in 2005."],a:0,e:"peak at.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u3:achieve":{s:["reach","attain","accomplish"],a:["fail"]},
  "b2u3:critical":{s:["crucial","vital","essential"],a:["unimportant"]},
  "b2u3:express":{s:["communicate","convey"]},
  "b2u3:figure":{s:["number","statistic"]},
  "b2u3:handle":{s:["deal with","cope with","manage"]},
  "b2u3:hypothesis":{s:["theory","assumption"]},
  "b2u3:ideal":{s:["perfect","best"],a:["unsuitable"]},
  "b2u3:imitate":{s:["copy","mimic"]},
  "b2u3:literate":{s:["able to read and write","educated"],a:["illiterate"]},
  "b2u3:(im)mature":{s:["(un)developed","(not) fully grown"]},
  "b2u3:matter":{s:["be important","count"]},
  "b2u3:more or less":{s:["almost","roughly","approximately"],a:["exactly"]},
  "b2u3:potential":{s:["possible","likely"]},
  "b2u3:suspect":{s:["believe","suppose","think"]},
  "b2u3:fluctuate":{s:["vary","go up and down"],a:["remain stable"]},
  "b2u3:rocket":{s:["soar","shoot up"],a:["plummet"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u3|Why Can Some Children Speak Two Languages So Easily?"] = [["bilingual","adj","song ngữ, nói hai thứ tiếng"],["monolingual","adj","đơn ngữ, chỉ nói một thứ tiếng"],["confuse","v","làm bối rối, lẫn lộn"],["fluently","adv","trôi chảy"],["distraction","n","điều gây xao nhãng"],["concentrate","v","tập trung"],["mixed results","n phr","kết quả không đồng nhất"],["connection","n","mối liên kết"],["regret","v","hối tiếc"],["pass on","phr v","truyền lại"],["waking hours","n phr","thời gian thức"],["active speaker","n phr","người chủ động nói được (ngôn ngữ)"],["patience","n","sự kiên nhẫn"]];
})();
