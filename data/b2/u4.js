/* Complete IELTS Bands 5–6.5 · Unit 4: New media.
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u4", title:"New media", vi:"Truyền thông mới & Internet",
  focus:{reading:"True / False / Not Given · Note completion · Short-answer questions", listening:"Section 4: Sentence completion · Flow-chart completion", speaking:"Part 2 và 3: dùng từ vựng đúng chủ đề, trả lời đầy đủ, đưa lý do và ví dụ", writing:"Task 2: đoạn mở bài, mỗi đoạn thân bài một ý chính, nêu quan điểm ở kết bài", vocab:"cause / factor / reason · từ về Internet (browse, download, keep in touch)", pron:"Chunking: nói theo cụm từ, ngắt nghỉ giữa các cụm"},
  vocab:[
    {g:"Word list của sách",w:"accuracy",p:"n",ipa:"/ˈækjərəsi/",vi:"độ chính xác",ex:"Journalists must check the accuracy of their facts.",exvi:"Nhà báo phải kiểm tra độ chính xác của thông tin."},
    {g:"Word list của sách",w:"amateur",p:"n / adj",ipa:"/ˈæmətə/",vi:"người nghiệp dư / nghiệp dư",ex:"Amateur photographers sent pictures of the flood to the TV station.",exvi:"Những người chụp ảnh nghiệp dư đã gửi ảnh trận lụt cho đài truyền hình."},
    {g:"Word list của sách",w:"ambitious project",p:"n",ipa:"/æmˈbɪʃəs ˈprɒdʒekt/",vi:"dự án đầy tham vọng",ex:"Building a metro system is an ambitious project.",exvi:"Xây dựng hệ thống tàu điện ngầm là một dự án đầy tham vọng."},
    {g:"Word list của sách",w:"anonymous",p:"adj",ipa:"/əˈnɒnɪməs/",vi:"ẩn danh",ex:"Many comments online are written by anonymous users.",exvi:"Nhiều bình luận trên mạng do người dùng ẩn danh viết."},
    {g:"Word list của sách",w:"attract attention",p:"phrase",ipa:"/əˈtrækt əˈtenʃn/",vi:"thu hút sự chú ý",ex:"A good headline attracts attention immediately.",exvi:"Một tiêu đề hay thu hút sự chú ý ngay lập tức."},
    {g:"Word list của sách",w:"carry out research",p:"phrase",ipa:"/ˈkæri aʊt rɪˈsɜːtʃ/",vi:"tiến hành nghiên cứu",ex:"Scientists use the Web to carry out research.",exvi:"Các nhà khoa học dùng Web để tiến hành nghiên cứu."},
    {g:"Word list của sách",w:"collaboration",p:"n",ipa:"/kəˌlæbəˈreɪʃn/",vi:"sự hợp tác",ex:"The project was a collaboration between three universities.",exvi:"Dự án là sự hợp tác giữa ba trường đại học."},
    {g:"Word list của sách",w:"disappointing results",p:"n",ipa:"/ˌdɪsəˈpɔɪntɪŋ rɪˈzʌlts/",vi:"kết quả đáng thất vọng",ex:"The online experiment produced disappointing results.",exvi:"Thí nghiệm trực tuyến cho kết quả đáng thất vọng."},
    {g:"Word list của sách",w:"discourage someone from",p:"phrase",ipa:"/dɪsˈkʌrɪdʒ ˈsʌmwʌn frəm/",vi:"làm ai nản lòng, can ngăn ai làm gì",ex:"Bad news can discourage people from travelling.",exvi:"Tin xấu có thể khiến người ta ngại đi du lịch."},
    {g:"Word list của sách",w:"do research",p:"phrase",ipa:"/duː rɪˈsɜːtʃ/",vi:"nghiên cứu, tìm tài liệu",ex:"I do research for my essays online.",exvi:"Tôi tìm tài liệu cho bài luận trên mạng."},
    {g:"Word list của sách",w:"evolve",p:"v",ipa:"/iˈvɒlv/",vi:"tiến hoá, phát triển dần",ex:"Social media has evolved quickly over the last decade.",exvi:"Mạng xã hội đã phát triển nhanh trong thập kỷ qua."},
    {g:"Word list của sách",w:"experiment (with)",p:"v",ipa:"/ɪkˈsperɪment/",vi:"thử nghiệm (với)",ex:"The newspaper experimented with video news.",exvi:"Tờ báo đã thử nghiệm làm tin tức bằng video."},
    {g:"Word list của sách",w:"feedback",p:"n",ipa:"/ˈfiːdbæk/",vi:"phản hồi, góp ý",ex:"Bloggers improve their writing thanks to readers' feedback.",exvi:"Các blogger viết tốt hơn nhờ góp ý của độc giả."},
    {g:"Word list của sách",w:"in response to",p:"phrase",ipa:"/ɪn rɪˈspɒns tə/",vi:"để đáp lại",ex:"The company changed its policy in response to complaints.",exvi:"Công ty đã đổi chính sách để đáp lại các phàn nàn."},
    {g:"Word list của sách",w:"keep in touch (with)",p:"phrase",ipa:"/kiːp ɪn tʌtʃ/",vi:"giữ liên lạc (với)",ex:"I keep in touch with old classmates on social media.",exvi:"Tôi giữ liên lạc với bạn học cũ qua mạng xã hội."},
    {g:"Word list của sách",w:"keep up (with)",p:"phr v",ipa:"/kiːp ʌp/",vi:"theo kịp, cập nhật",ex:"It's hard to keep up with all the new apps.",exvi:"Thật khó theo kịp tất cả những ứng dụng mới."},
    {g:"Word list của sách",w:"lack incentive",p:"phrase",ipa:"/læk ɪnˈsentɪv/",vi:"thiếu động lực",ex:"Reviewers lack incentive to comment on papers online.",exvi:"Người phản biện thiếu động lực để bình luận bài báo trên mạng."},
    {g:"Word list của sách",w:"latest fashions",p:"n",ipa:"/ˈleɪtɪst ˈfæʃnz/",vi:"mốt mới nhất",ex:"Teenagers follow the latest fashions on social media.",exvi:"Thanh thiếu niên theo dõi các mốt mới nhất trên mạng xã hội."},
    {g:"Word list của sách",w:"launch",p:"v",ipa:"/lɔːntʃ/",vi:"ra mắt, khởi động",ex:"The station launched a new news website last month.",exvi:"Đài đã ra mắt trang tin tức mới vào tháng trước."},
    {g:"Word list của sách",w:"law",p:"n",ipa:"/lɔː/",vi:"quy luật",ex:"Researchers discovered several laws of web surfing.",exvi:"Các nhà nghiên cứu phát hiện ra vài quy luật lướt web."},
    {g:"Word list của sách",w:"potential",p:"adj",ipa:"/pəˈtenʃl/",vi:"tiềm năng, có thể trở thành",ex:"Social media helps companies reach potential customers.",exvi:"Mạng xã hội giúp các công ty tiếp cận khách hàng tiềm năng."},
    {g:"Word list của sách",w:"proposal",p:"n",ipa:"/prəˈpəʊzl/",vi:"đề xuất",ex:"His proposal was accepted by the committee.",exvi:"Đề xuất của anh ấy được hội đồng chấp nhận."},
    {g:"Word list của sách",w:"publication",p:"n",ipa:"/ˌpʌblɪˈkeɪʃn/",vi:"ấn phẩm",ex:"Nature is a respected scientific publication.",exvi:"Nature là một ấn phẩm khoa học uy tín."},
    {g:"Word list của sách",w:"publish",p:"v",ipa:"/ˈpʌblɪʃ/",vi:"xuất bản, đăng",ex:"The journal publishes articles online every week.",exvi:"Tạp chí đăng bài trực tuyến mỗi tuần."},
    {g:"Word list của sách",w:"restrict",p:"v",ipa:"/rɪˈstrɪkt/",vi:"hạn chế",ex:"Some schools restrict the use of phones in class.",exvi:"Một số trường hạn chế dùng điện thoại trong lớp."},
    {g:"Word list của sách",w:"review",p:"n",ipa:"/rɪˈvjuː/",vi:"bài đánh giá, sự xem xét",ex:"The paper was sent to three experts for review.",exvi:"Bài báo được gửi cho ba chuyên gia thẩm định."},
    {g:"Word list của sách",w:"reveal",p:"v",ipa:"/rɪˈviːl/",vi:"tiết lộ",ex:"Your browser history can reveal a lot about you.",exvi:"Lịch sử trình duyệt có thể tiết lộ nhiều điều về bạn."},
    {g:"Word list của sách",w:"social networking",p:"n",ipa:"/ˈsəʊʃl ˈnetwɜːkɪŋ/",vi:"mạng xã hội, việc kết nối trên mạng",ex:"Social networking sites are popular with all ages.",exvi:"Các trang mạng xã hội phổ biến ở mọi lứa tuổi."},
    {g:"Word list của sách",w:"transform",p:"v",ipa:"/trænsˈfɔːm/",vi:"biến đổi hoàn toàn",ex:"Smartphones have transformed the way we read news.",exvi:"Điện thoại thông minh đã thay đổi hoàn toàn cách chúng ta đọc tin."},
    {g:"Word list của sách",w:"turn out",p:"phr v",ipa:"/tɜːn aʊt/",vi:"hoá ra, kết quả là",ex:"Their instinct turned out to be right.",exvi:"Linh cảm của họ hoá ra là đúng."},
    {g:"Internet & truyền thông",w:"browse",p:"v",ipa:"/braʊz/",vi:"lướt (web), xem lướt",ex:"I browse the Web to find information for my studies.",exvi:"Tôi lướt web để tìm thông tin cho việc học."},
    {g:"Internet & truyền thông",w:"download",p:"v",ipa:"/ˌdaʊnˈləʊd/",vi:"tải xuống",ex:"You can download the lecture notes from the website.",exvi:"Bạn có thể tải bài giảng từ trang web."},
    {g:"Internet & truyền thông",w:"blogger",p:"n",ipa:"/ˈblɒɡə/",vi:"người viết blog",ex:"Some bloggers earn money from advertising.",exvi:"Một số blogger kiếm tiền từ quảng cáo."},
    {g:"Internet & truyền thông",w:"citizen journalist",p:"n",ipa:"/ˈsɪtɪzn ˈdʒɜːnəlɪst/",vi:"nhà báo công dân (người dân tự đưa tin)",ex:"A citizen journalist filmed the accident on her phone.",exvi:"Một nhà báo công dân đã quay vụ tai nạn bằng điện thoại."},
    {g:"Internet & truyền thông",w:"the mass media",p:"n",ipa:"/ðə mæs ˈmiːdiə/",vi:"truyền thông đại chúng",ex:"The mass media influence public opinion.",exvi:"Truyền thông đại chúng ảnh hưởng đến dư luận."},
    {g:"Internet & truyền thông",w:"sensational",p:"adj",ipa:"/senˈseɪʃənl/",vi:"giật gân",ex:"Many news reports tend to be sensational.",exvi:"Nhiều bản tin có xu hướng giật gân."},
    {g:"Internet & truyền thông",w:"celebrity",p:"n",ipa:"/səˈlebrəti/",vi:"người nổi tiếng",ex:"Magazines are full of stories about celebrities.",exvi:"Tạp chí đầy những câu chuyện về người nổi tiếng."},
    {g:"Internet & truyền thông",w:"headline",p:"n",ipa:"/ˈhedlaɪn/",vi:"tiêu đề bài báo",ex:"Write an attractive headline for your article.",exvi:"Hãy viết một tiêu đề hấp dẫn cho bài báo."},
    {g:"Từ dễ nhầm",w:"cause",p:"n",ipa:"/kɔːz/",vi:"nguyên nhân (thường của điều xấu): the cause of",ex:"Police are trying to find the cause of the fire.",exvi:"Cảnh sát đang cố tìm nguyên nhân vụ cháy."},
    {g:"Từ dễ nhầm",w:"factor",p:"n",ipa:"/ˈfæktə/",vi:"yếu tố (ảnh hưởng đến kết quả): a key/major factor in",ex:"Price is a major factor in people's choice of phone.",exvi:"Giá là yếu tố chính khi người ta chọn điện thoại."},
    {g:"Từ dễ nhầm",w:"reason",p:"n",ipa:"/ˈriːzn/",vi:"lý do: the reason for / the reason why",ex:"The reason for the delay was a technical problem.",exvi:"Lý do chậm trễ là một sự cố kỹ thuật."}
  ],
  phrases:[
    {g:"Tính từ + danh từ",w:"social networking sites",p:"noun phrase",ipa:"/ˈsəʊʃl ˈnetwɜːkɪŋ saɪts/",vi:"các trang mạng xã hội",ex:"Social networking sites help families keep in touch.",exvi:"Các trang mạng xã hội giúp gia đình giữ liên lạc."},
    {g:"Tính từ + danh từ",w:"bad news",p:"noun phrase",ipa:"/bæd njuːz/",vi:"tin xấu",ex:"Too much bad news can make people anxious.",exvi:"Quá nhiều tin xấu có thể khiến người ta lo âu."},
    {g:"Tính từ + danh từ",w:"isolated incidents",p:"noun phrase",ipa:"/ˈaɪsəleɪtɪd ˈɪnsɪdənts/",vi:"các vụ việc đơn lẻ",ex:"The media repeat stories about isolated incidents all day.",exvi:"Truyền thông lặp đi lặp lại tin về các vụ việc đơn lẻ suốt cả ngày."},
    {g:"Tính từ + danh từ",w:"local issues",p:"noun phrase",ipa:"/ˈləʊkl ˈɪʃuːz/",vi:"các vấn đề địa phương",ex:"Amateur journalists often write about local issues.",exvi:"Nhà báo nghiệp dư thường viết về các vấn đề địa phương."},
    {g:"Tính từ + danh từ",w:"online newspapers",p:"noun phrase",ipa:"/ˈɒnlaɪn ˈnjuːzpeɪpəz/",vi:"báo điện tử",ex:"Online newspapers are widely read.",exvi:"Báo điện tử được đọc rộng rãi."},
    {g:"Tính từ + danh từ",w:"printed books",p:"noun phrase",ipa:"/ˈprɪntɪd bʊks/",vi:"sách in",ex:"I don't think e-books will replace printed books.",exvi:"Tôi không nghĩ sách điện tử sẽ thay thế sách in."},
    {g:"Danh từ + danh từ",w:"news reports",p:"noun phrase",ipa:"/njuːz rɪˈpɔːts/",vi:"bản tin",ex:"Most news reports focus on crime and disasters.",exvi:"Phần lớn bản tin tập trung vào tội phạm và thảm hoạ."},
    {g:"Danh từ + danh từ",w:"peer review",p:"noun phrase",ipa:"/pɪə rɪˈvjuː/",vi:"bình duyệt (chuyên gia cùng ngành thẩm định)",ex:"Scientific papers go through peer review before publication.",exvi:"Bài báo khoa học được bình duyệt trước khi đăng."},
    {g:"Danh từ + danh từ",w:"web page",p:"noun phrase",ipa:"/web peɪdʒ/",vi:"trang web",ex:"Visitors leave the web page after a few seconds.",exvi:"Người xem rời trang web sau vài giây."},
    {g:"Danh từ + danh từ",w:"a news story",p:"noun phrase",ipa:"/ə njuːz ˈstɔːri/",vi:"một tin bài",ex:"Ordinary people can now provide a news story.",exvi:"Người dân bình thường giờ có thể cung cấp tin bài."},
    {g:"Danh từ + danh từ",w:"computer scientist",p:"noun phrase",ipa:"/kəmˈpjuːtə ˈsaɪəntɪst/",vi:"nhà khoa học máy tính",ex:"The Web was invented by a computer scientist.",exvi:"Web được phát minh bởi một nhà khoa học máy tính."},
    {g:"Danh từ + of + danh từ",w:"freedom of speech",p:"noun phrase",ipa:"/ˈfriːdəm əv spiːtʃ/",vi:"tự do ngôn luận",ex:"The Internet has increased freedom of speech.",exvi:"Internet đã mở rộng tự do ngôn luận."},
    {g:"Danh từ + of + danh từ",w:"the spread of information",p:"noun phrase",ipa:"/ðə spred əv ˌɪnfəˈmeɪʃn/",vi:"sự lan truyền thông tin",ex:"Social media speeds up the spread of information.",exvi:"Mạng xã hội đẩy nhanh việc lan truyền thông tin."},
    {g:"Danh từ + of + danh từ",w:"the right to know",p:"noun phrase",ipa:"/ðə raɪt tə nəʊ/",vi:"quyền được biết",ex:"Citizens have the right to know what is happening.",exvi:"Công dân có quyền được biết điều gì đang diễn ra."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"keep up to date with the news",p:"collocation",ipa:"/kiːp ʌp tə deɪt wɪð ðə njuːz/",vi:"cập nhật tin tức",ex:"I keep up to date with the news on my phone.",exvi:"Tôi cập nhật tin tức trên điện thoại."},
    {g:"Động từ + danh từ",w:"post a comment",p:"collocation",ipa:"/pəʊst ə ˈkɒment/",vi:"đăng bình luận",ex:"Readers can post a comment under each article.",exvi:"Độc giả có thể đăng bình luận dưới mỗi bài."},
    {g:"Động từ + danh từ",w:"report the news",p:"collocation",ipa:"/rɪˈpɔːt ðə njuːz/",vi:"đưa tin",ex:"The media have a duty to report the news accurately.",exvi:"Truyền thông có nghĩa vụ đưa tin chính xác."},
    {g:"Động từ + danh từ",w:"take responsible decisions",p:"collocation",ipa:"/teɪk rɪˈspɒnsəbl dɪˈsɪʒnz/",vi:"đưa ra quyết định có trách nhiệm",ex:"People need information to take responsible decisions.",exvi:"Mọi người cần thông tin để đưa ra quyết định có trách nhiệm."},
    {g:"Động từ + danh từ",w:"spread rumours",p:"collocation",ipa:"/spred ˈruːməz/",vi:"lan truyền tin đồn",ex:"Social media can spread rumours very quickly.",exvi:"Mạng xã hội có thể lan truyền tin đồn rất nhanh."},
    {g:"Động từ + danh từ",w:"invade someone's privacy",p:"collocation",ipa:"/ɪnˈveɪd ˈsʌmwʌnz ˈprɪvəsi/",vi:"xâm phạm đời tư của ai",ex:"Photographers often invade celebrities' privacy.",exvi:"Thợ ảnh thường xâm phạm đời tư của người nổi tiếng."},
    {g:"Động từ + danh từ",w:"play an important role in",p:"collocation",ipa:"/pleɪ ən ɪmˈpɔːtnt rəʊl ɪn/",vi:"đóng vai trò quan trọng trong",ex:"Computers play an important role in society.",exvi:"Máy tính đóng vai trò quan trọng trong xã hội."},
    {g:"Tính từ + danh từ",w:"a major factor in",p:"collocation",ipa:"/ə ˈmeɪdʒə ˈfæktər ɪn/",vi:"một yếu tố chính trong",ex:"Crime rates may be a major factor in choosing a city.",exvi:"Tỉ lệ tội phạm có thể là yếu tố chính khi chọn thành phố."},
    {g:"Tính từ + danh từ",w:"the main cause of",p:"collocation",ipa:"/ðə meɪn kɔːz əv/",vi:"nguyên nhân chính của",ex:"The Internet is the main cause of the decline of newspapers.",exvi:"Internet là nguyên nhân chính khiến báo giấy suy giảm."},
    {g:"Tính từ + danh từ",w:"the reason for",p:"collocation",ipa:"/ðə ˈriːzn fə/",vi:"lý do cho",ex:"The reason for the lack of comments is simple.",exvi:"Lý do thiếu bình luận rất đơn giản."},
    {g:"Trạng từ + động từ / tính từ",w:"widely read",p:"collocation",ipa:"/ˈwaɪdli red/",vi:"được đọc rộng rãi",ex:"This blog is widely read by students.",exvi:"Blog này được sinh viên đọc rất nhiều."},
    {g:"Trạng từ + động từ / tính từ",w:"highly respected",p:"collocation",ipa:"/ˈhaɪli rɪˈspektɪd/",vi:"rất được kính trọng, uy tín",ex:"Nature is a highly respected journal.",exvi:"Nature là một tạp chí rất uy tín."}
  ],
  grammar:{
    title:"Articles (a, an, the, không mạo từ)",
    rules:[
      {h:"Dùng the",use:["Khi người nghe biết bạn nói về cái gì (đã nhắc trước đó, hoặc rõ từ ngữ cảnh)","Khi chỉ có một: the sun, the Internet, the world","Với danh từ chỉ một nhóm: the police, the media, the public","Với so sánh nhất: the highest figure, the best school"],form:"the + danh từ xác định",ex:"The world is changing quickly.",sig:"đã nhắc, duy nhất, so sánh nhất"},
      {h:"Dùng a / an",use:["Danh từ đếm được số ít, nhắc lần đầu","an trước âm nguyên âm: an hour, an example; a trước âm phụ âm: a university"],form:"a/an + danh từ đếm được số ít",ex:"A plane crashed last month.",sig:"lần đầu nhắc đến"},
      {h:"Không dùng mạo từ",use:["Nói chung chung với danh từ số nhiều hoặc không đếm được","Không dùng the khi nói chung: Society is becoming more competitive."],form:"Ø + plural / uncountable",ex:"Computers play an important role in society.",sig:"nghĩa khái quát"}
    ],
    quiz:[
      {q:"As ___ world is changing, society is becoming more competitive.",o:["the","a","—"],a:0,e:"Chỉ có một thế giới."},
      {q:"Computers play an important role in ___ society.",o:["—","the","a"],a:0,e:"society nói chung → không mạo từ."},
      {q:"___ Internet and other media benefit us in many ways.",o:["The","An","—"],a:0,e:"the Internet."},
      {q:"Their parents give them ___ best school to study at.",o:["the","a","—"],a:0,e:"So sánh nhất → the."},
      {q:"Some people argue that ___ books are the best type of media.",o:["—","the","a"],a:0,e:"books nói chung → không mạo từ."},
      {q:"It takes ___ hour to get there by bus.",o:["an","a","the"],a:0,e:"hour đọc bắt đầu bằng âm nguyên âm."},
      {q:"She studies at ___ university in Hanoi.",o:["a","an","—"],a:0,e:"university đọc /juː/ → a."},
      {q:"I've been to ___ post office this morning. (người nghe biết bưu điện nào)",o:["the","a","—"],a:0,e:"Rõ từ ngữ cảnh."}
    ]
  },
  reading:{
    title:"The Rise of the Podcast", est:"khoảng 470 từ · 17 phút",
    paras:[
      "In 2004, a journalist writing for a British newspaper needed a name for a new kind of radio programme that people could download and listen to whenever they wanted. He combined ‘iPod’, the music player that was popular at the time, with ‘broadcast’, and the word ‘podcast’ was born. Few people could have predicted how successful the idea would become.",
      "At first, podcasts were made mainly by amateurs. Anyone with a microphone and a computer could record a programme and publish it on the Internet. Many early podcasters were hobbyists who talked about subjects such as computer games, cooking or local history to small groups of loyal listeners. Their programmes were often long and unplanned, but listeners enjoyed the informal, friendly style.",
      "The turning point came in 2014, when a crime series called Serial attracted millions of listeners around the world. Each episode investigated a real murder case from the 1990s, and audiences waited impatiently for the next instalment. For the first time, large media companies realised that podcasts could reach a mass audience, and they began to invest heavily in professional productions.",
      "Today, there are millions of podcasts in dozens of languages. A survey carried out in 2023 found that around 40 percent of adults in the United States had listened to at least one podcast in the previous month. The most popular categories are comedy, news and true crime, but there are also programmes on almost any subject imaginable, from philosophy to gardening.",
      "Podcasts have also changed education. Universities record lectures so that students can review them before exams, and language learners use podcasts designed for different levels. Researchers at one Australian university found that students who listened to lecture recordings in addition to attending classes achieved slightly higher marks, although students who used recordings instead of attending did worse.",
      "Why are podcasts so popular? Experts suggest several reasons. Unlike television, podcasts can be enjoyed while doing something else, such as driving, exercising or cooking. They also create a feeling of closeness: listeners often say that they feel as if the presenter is a friend talking directly to them. In addition, most podcasts are free, because they earn money from advertising and from listeners who choose to make donations.",
      "Not everyone is enthusiastic, however. Some critics point out that it is difficult to check the accuracy of information in podcasts, because, unlike newspapers, most programmes are not reviewed by editors before they are published. As podcasts continue to grow, the question of who is responsible for the content is likely to become more important."
    ],
    note:"Bài đọc tự viết để luyện tập; số liệu khảo sát chỉ mang tính minh hoạ.",
    quiz:[
      {t:"head",text:"Câu 1–6: Do the following statements agree with the information given in the passage? Chọn TRUE / FALSE / NOT GIVEN."},
      {q:"The word ‘podcast’ was created by a journalist.",o:["TRUE","FALSE","NOT GIVEN"],a:0,e:"Đoạn A."},
      {q:"Early podcasts were usually short and carefully planned.",o:["TRUE","FALSE","NOT GIVEN"],a:1,e:"Đoạn B: 'often long and unplanned'."},
      {q:"Serial was the first podcast to win an international award.",o:["TRUE","FALSE","NOT GIVEN"],a:2,e:"Bài không nhắc đến giải thưởng."},
      {q:"After 2014, media companies began spending a lot of money on podcasts.",o:["TRUE","FALSE","NOT GIVEN"],a:0,e:"Đoạn C: 'invest heavily'."},
      {q:"Comedy is more popular than news among American podcast listeners.",o:["TRUE","FALSE","NOT GIVEN"],a:2,e:"Bài chỉ liệt kê các thể loại phổ biến, không xếp hạng."},
      {q:"Students who replaced classes with recordings got better marks.",o:["TRUE","FALSE","NOT GIVEN"],a:1,e:"Đoạn E: 'did worse'."},
      {t:"head",text:"Câu 7–10: Complete the notes. Choose NO MORE THAN TWO WORDS from the passage."},
      {t:"gap",q:"Reasons for popularity: can listen while doing something else, e.g. driving, ___ or cooking",a:["exercising"],e:"Đoạn F."},
      {t:"gap",q:"Listeners feel the presenter is like a ___",a:["friend"],e:"Đoạn F."},
      {t:"gap",q:"Podcasts earn money from advertising and listeners' ___",a:["donations"],e:"Đoạn F."},
      {t:"gap",q:"Problem: most programmes are not checked by ___",a:["editors"],e:"Đoạn G."},
      {t:"head",text:"Câu 11–13: Answer the questions. Choose NO MORE THAN TWO WORDS from the passage."},
      {t:"gap",q:"Which device gave part of its name to the podcast?",a:["ipod","the ipod"],e:"Đoạn A."},
      {t:"gap",q:"What kind of real case did Serial investigate?",a:["murder","a murder","murder case"],e:"Đoạn C."},
      {t:"gap",q:"What do universities record for students to review?",a:["lectures"],e:"Đoạn E."}
    ]
  },
  listening:{
    title:"Section 4 · Lecture: Citizen journalism",
    intro:"Bài giảng về báo chí do người dân (không phải nhà báo chuyên nghiệp) thực hiện. Phần này không có quãng nghỉ.",
    script:[
      ["A","Good morning. Today I want to look at citizen journalism, that is, news produced by people who are not professional journalists."],
      ["A","When something unexpected happens, a fire or a flood, for instance, there is rarely a professional journalist on the spot. But there is almost always someone with a phone. Ordinary people can now provide a news story, a photograph or a video within minutes."],
      ["A","Citizen journalists often report on subjects that would be of little interest to a large audience. A national newspaper won't write about a broken bridge in a small village, but someone who lives there will."],
      ["A","In the past, if you wanted to express an opinion publicly, you wrote a letter to a newspaper and hoped it would be printed. Now you simply write a blog post."],
      ["A","Because of this, an amateur journalist's subject is more likely to be a local issue rather than national or international news. And some amateur news websites, like Ohmynews in South Korea, have become very successful businesses. They make their money from advertising, just like traditional newspapers."],
      ["A","So, if you want to write a good article yourself, how should you go about it? First, put the main facts at the beginning, to attract the reader's attention."],
      ["A","Then use the model of a pyramid, an upside-down pyramid, in fact, to build up the details, with the most important information at the top and the least important at the bottom."],
      ["A","Next, include quotations from the people involved. They make the story feel real."],
      ["A","Before you go any further, check the accuracy of your sources. This is where many amateurs make mistakes."],
      ["A","Then rewrite the article, making sure the paragraphs are short. And please, don't write a conclusion. News articles simply stop when the information ends."],
      ["A","Add a picture to accompany the article, and finally, write an attractive headline. Many professionals actually leave the headline until last."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–5: Complete the sentences. Write ONE OR TWO WORDS for each answer."},
      {t:"gap",q:"Ordinary people can provide a news story, a ___ or a video when no journalist is present.",a:["photograph","photo"]},
      {t:"gap",q:"Amateur journalists often report on subjects of little interest to a large ___.",a:["audience"]},
      {t:"gap",q:"In the past, someone who wanted to express an opinion wrote a ___ to a newspaper.",a:["letter"]},
      {t:"gap",q:"An amateur journalist's subject is more likely to be a ___ rather than national news.",a:["local issue"]},
      {t:"gap",q:"Amateur news websites such as Ohmynews earn money from ___.",a:["advertising","advertisements","adverts"]},
      {t:"head",text:"Câu 6–10: Complete the flow chart: How to write an article. Write ONE WORD ONLY."},
      {t:"gap",q:"Put the main facts at the beginning → use a model in the shape of a ___ to build up details",a:["pyramid"]},
      {t:"gap",q:"Include ___ from people involved",a:["quotations","quotes"]},
      {t:"gap",q:"Check the accuracy of your ___",a:["sources"]},
      {t:"gap",q:"Rewrite with short paragraphs → don't write a ___",a:["conclusion"]},
      {t:"gap",q:"Add a picture → finally, write an attractive ___",a:["headline"]}
    ]
  },
  writing:{
    type:"Task 2", min:250, time:"40 phút",
    prompt:"The media pay too much attention to the lives and relationships of celebrities such as actors, singers or footballers. They should spend more time reporting the lives of ordinary people instead. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
    plan:["Gạch chân những gì phải bàn: (1) truyền thông có quá chú ý đến người nổi tiếng không; (2) có nên dành thời gian cho người bình thường; (3) mức độ đồng ý","Mở bài: vài câu giới thiệu vì sao chủ đề quan trọng + quan điểm rõ ràng","Thân 1 (một ý chính): vì sao truyền thông viết nhiều về người nổi tiếng + ví dụ","Thân 2 (một ý chính): lợi ích của việc kể chuyện người bình thường + ví dụ","Kết bài: tóm lại quan điểm và lý do","Dùng however / although / even though / on the other hand để nối ý; chú ý mạo từ (the media, society)"],
    model:"Every day, newspapers, websites and television programmes report on what famous actors, singers and footballers wear, who they are dating and where they go on holiday. In my opinion, the media do give celebrities far too much attention, and I agree that more space should be given to the lives of ordinary people.\n\nThere are understandable reasons why the media focus on the rich and famous. Stories about celebrities attract readers and viewers, and this brings in advertising money. In addition, some celebrities use their fame in positive ways, for example by raising money for charity. However, much of this coverage is trivial and even harmful. Photographers often invade people's privacy, and young readers may feel unhappy because they compare their own lives with the perfect images they see online.\n\nOn the other hand, stories about ordinary people can be both interesting and useful. A report about a nurse working night shifts during a crisis, or a teacher who opens a free class for poor children, can inspire the audience much more than gossip about a film star. Such stories also inform society about real problems, such as the cost of housing or the difficulties faced by farmers, which can encourage governments to take action. Although these reports may attract fewer clicks, they help people understand the world they actually live in.\n\nIn conclusion, even though celebrity news will always have a place in the media, I believe the balance should change. The media have a responsibility to inform the public, and they can best do this by reporting more often on the lives of ordinary people."
  },
  speaking:{
    tip:"Part 3: giám khảo hỏi những câu chung hơn, liên quan đến chủ đề Part 2, kéo dài 4–5 phút. Nghe kỹ câu hỏi và trả lời thẳng, đúng trọng tâm. Trả lời khá dài, kèm lý do hoặc ví dụ. Nếu không chắc, cứ nói ra (I'm not sure, but perhaps…) rồi đưa ra vài ý có thể. Nói theo cụm từ (chunking) và ngắt nghỉ giữa các cụm.",
    p1:["How often do you use the Internet?","Do you prefer reading the news online or in a newspaper?","What kind of websites do you visit most?","Do you use social media to keep in touch with friends?"],
    p1sample:{q:"Do you prefer reading the news online or in a newspaper?",a:"Definitely online. I usually read the news on my phone while I'm on the bus, because it's quick and free. Having said that, my father still buys a newspaper every Sunday, and sometimes I read it with him over breakfast. It feels more relaxing than scrolling through a screen."},
    cue:{t:"Describe a website on the Internet that you use regularly.",pts:["what sort of website it is","what you use it for","what you like and dislike about it"],end:"and explain why you use it regularly."},
    p2sample:"The website I'd like to talk about is an online dictionary that I use almost every day. It's a free site run by a university press, and it has definitions, example sentences and audio recordings of words in both British and American English. I mainly use it for my English studies. Whenever I come across a new word in a reading passage, I look it up, listen to the pronunciation and copy an example sentence into my notebook. I also use it when I'm writing essays, to check which prepositions go with a word or whether a noun is countable or uncountable. What I like most about it is that the definitions are written in simple English, so I don't need to translate them into Vietnamese. The one thing I dislike is the advertising: sometimes a video starts playing automatically, which is quite annoying, especially in the library! I use it regularly because it's reliable and it saves me a lot of time. I think it has helped me improve both my vocabulary and my pronunciation.",
    p3:["How does the Internet help people in their everyday lives?","Do you think some people spend too much time on the Internet? Why?","Will newspapers and printed books disappear because of the Internet?"],
    p3sample:{q:"Will newspapers and printed books disappear because of the Internet?",a:"I'm not sure, but I don't think they will disappear completely. Newspapers will probably become less common, because most people, especially young people, get their news online for free. However, printed books are a bit different. Many people still enjoy holding a real book, and they're better for your eyes than a screen. So perhaps books will survive, but as something people buy for pleasure rather than for information."},
    phrases:["Well, I think it helps people in quite a lot of ways, for instance…","I'm not sure, but perhaps…","It depends on…","The main reason is that…","Another factor is…","On the other hand,…"]
  },
  lesson:[
    {g:"Mở đầu: các loại phương tiện truyền thông",w:"keep up with the latest ideas",p:"v phr",ipa:"/kiːp ʌp wɪð ðə ˈleɪtɪst aɪˈdɪəz/",vi:"cập nhật những ý tưởng mới nhất",ex:"I read blogs to keep up with the latest ideas in design.",exvi:"Tôi đọc blog để cập nhật những ý tưởng mới nhất về thiết kế."},
    {g:"Reading: World Wide Web",w:"bland",p:"adj",ipa:"/blænd/",vi:"nhạt nhẽo, không hấp dẫn",ex:"The report had a rather bland title.",exvi:"Bản báo cáo có cái tên khá nhạt nhẽo."},
    {g:"Reading: World Wide Web",w:"particle physics",p:"n phr",ipa:"/ˈpɑːtɪkl ˈfɪzɪks/",vi:"vật lý hạt",ex:"CERN is a laboratory for particle physics.",exvi:"CERN là phòng thí nghiệm vật lý hạt."},
    {g:"Reading: World Wide Web",w:"keep track of",p:"v phr",ipa:"/kiːp træk əv/",vi:"theo dõi, nắm được",ex:"It's hard to keep track of such a large project.",exvi:"Thật khó theo dõi một dự án lớn như vậy."},
    {g:"Reading: World Wide Web",w:"political campaigning",p:"n phr",ipa:"/pəˈlɪtɪkl kæmˈpeɪnɪŋ/",vi:"vận động chính trị",ex:"The Web is now used for political campaigning.",exvi:"Ngày nay Web được dùng cho vận động chính trị."},
    {g:"Reading: World Wide Web",w:"recruit",p:"v",ipa:"/rɪˈkruːt/",vi:"tuyển, chiêu mộ",ex:"The project recruited thousands of volunteers.",exvi:"Dự án đã tuyển hàng nghìn tình nguyện viên."},
    {g:"Reading: World Wide Web",w:"classify",p:"v",ipa:"/ˈklæsɪfaɪ/",vi:"phân loại",ex:"Volunteers classified images of galaxies.",exvi:"Tình nguyện viên phân loại hình ảnh các thiên hà."},
    {g:"Reading: World Wide Web",w:"successor",p:"n",ipa:"/səkˈsesə/",vi:"người/cái kế nhiệm",ex:"A successor to the project has now been launched.",exvi:"Một dự án kế tiếp vừa được khởi động."},
    {g:"Reading: World Wide Web",w:"distribution",p:"n",ipa:"/ˌdɪstrɪˈbjuːʃn/",vi:"sự phân bố",ex:"They track changes in the distribution of species.",exvi:"Họ theo dõi sự thay đổi trong phân bố các loài."},
    {g:"Reading: World Wide Web",w:"phenomenon",p:"n",ipa:"/fəˈnɒmɪnən/",vi:"hiện tượng",ex:"‘Winner takes all’ is a common phenomenon online.",exvi:"‘Kẻ thắng lấy hết’ là hiện tượng phổ biến trên mạng."},
    {g:"Reading: World Wide Web",w:"instinct",p:"n",ipa:"/ˈɪnstɪŋkt/",vi:"bản năng, linh cảm",ex:"Their instinct turned out to be right.",exvi:"Linh cảm của họ hoá ra đúng."},
    {g:"Listening: báo chí công dân",w:"on the spot",p:"phrase",ipa:"/ɒn ðə spɒt/",vi:"tại chỗ, có mặt tại hiện trường",ex:"There was no journalist on the spot.",exvi:"Không có nhà báo nào có mặt tại hiện trường."},
    {g:"Listening: báo chí công dân",w:"quotation",p:"n",ipa:"/kwəʊˈteɪʃn/",vi:"lời trích dẫn",ex:"Include quotations from people involved.",exvi:"Hãy đưa lời trích dẫn của những người liên quan."},
    {g:"Listening: báo chí công dân",w:"accompany",p:"v",ipa:"/əˈkʌmpəni/",vi:"đi kèm",ex:"Add a picture to accompany the article.",exvi:"Thêm một bức ảnh đi kèm bài viết."},
    {g:"Speaking Part 3",w:"to chat",p:"v",ipa:"/tʃæt/",vi:"trò chuyện (trên mạng)",ex:"Young people chat to friends online for hours.",exvi:"Người trẻ trò chuyện với bạn bè trên mạng hàng giờ."},
    {g:"Speaking Part 3",w:"face to face",p:"adv phr",ipa:"/feɪs tə feɪs/",vi:"gặp mặt trực tiếp",ex:"I prefer meeting friends face to face.",exvi:"Tôi thích gặp bạn bè trực tiếp hơn."},
    {g:"Writing Task 2: tin xấu trên báo",w:"involve very little risk",p:"v phr",ipa:"/ɪnˈvɒlv ˈveri ˈlɪtl rɪsk/",vi:"có rất ít rủi ro",ex:"Flying involves very little risk.",exvi:"Đi máy bay có rất ít rủi ro."},
    {g:"Writing Task 2: tin xấu trên báo",w:"robbery",p:"n",ipa:"/ˈrɒbəri/",vi:"vụ cướp",ex:"The robbery was reported on every channel.",exvi:"Vụ cướp được đưa tin trên mọi kênh."},
    {g:"Writing Task 2: tin xấu trên báo",w:"frightening images",p:"n phr",ipa:"/ˈfraɪtnɪŋ ˈɪmɪdʒɪz/",vi:"hình ảnh đáng sợ",ex:"News is often combined with frightening images.",exvi:"Tin tức thường đi kèm hình ảnh đáng sợ."},
    {g:"Writing Task 2: tin xấu trên báo",w:"harmless",p:"adj",ipa:"/ˈhɑːmləs/",vi:"vô hại",ex:"People become frightened of things they thought were harmless.",exvi:"Người ta trở nên sợ những thứ trước đây họ cho là vô hại."},
    {g:"Writing Task 2: tin xấu trên báo",w:"have a duty to",p:"v phr",ipa:"/hæv ə ˈdjuːti tə/",vi:"có nghĩa vụ phải",ex:"The media have a duty to report all important events.",exvi:"Truyền thông có nghĩa vụ đưa tin mọi sự kiện quan trọng."},
    {g:"Writing Task 2: tin xấu trên báo",w:"distract",p:"v",ipa:"/dɪˈstrækt/",vi:"làm xao nhãng",ex:"The radio distracts me when I'm working.",exvi:"Đài làm tôi xao nhãng khi đang làm việc."},
    {g:"Writing Task 2: tin xấu trên báo",w:"upsetting",p:"adj",ipa:"/ʌpˈsetɪŋ/",vi:"gây buồn phiền, khó chịu",ex:"Many people find pictures of disasters upsetting.",exvi:"Nhiều người thấy hình ảnh thảm hoạ gây khó chịu."},
    {g:"Ôn tập Unit 4",w:"obsolete",p:"adj",ipa:"/ˈɒbsəliːt/",vi:"lỗi thời",ex:"Some people think printed books will become obsolete.",exvi:"Một số người nghĩ sách in sẽ trở nên lỗi thời."},
    {g:"Ôn tập Unit 4",w:"exploit",p:"v",ipa:"/ɪkˈsplɔɪt/",vi:"lợi dụng, khai thác",ex:"The website exploits a weakness in browsers.",exvi:"Trang web lợi dụng một điểm yếu của trình duyệt."}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u4 = {
  tips:{
    reading:[
      {type:"True / False / Not Given", tips:[
        "Tìm trong bài những từ giống hoặc gần nghĩa với từ trong câu hỏi.",
        "Định vị nhanh phần bài nói về mỗi câu. Bạn vẫn tìm được chỗ đó ngay cả khi đáp án là Not Given.",
        "Not Given nghĩa là bài không nói gì về điều đó, kể cả khi nó có vẻ hợp lý."
      ]},
      {type:"Note completion", tips:[
        "Đọc tiêu đề phần ghi chú rồi tìm đoạn trong bài bàn về chủ đề đó.",
        "Đọc các ghi chú và đoán loại thông tin cần điền.",
        "Chép đáp án từ bài thật chính xác."
      ]},
      {type:"Short-answer questions", tips:[
        "Gạch chân ý chính trong câu hỏi và tìm chỗ bài nói đến.",
        "Đọc kỹ đoạn đó và gạch chân đáp án.",
        "Kiểm tra đáp án đúng loại thông tin (Whose…? → tên người; What type…? → loại)."
      ]}
    ],
    listening:[
      {type:"Section 4: Sentence & flow-chart completion", tips:[
        "Section 4 là một bài giảng học thuật, người nói đưa cả ý kiến chứ không chỉ sự kiện. Phần này không có quãng nghỉ giữa chừng.",
        "Trước khi nghe, đoán loại từ cần điền (danh từ, động từ, tính từ) và danh từ số ít hay số nhiều.",
        "Cố dùng đúng từ bạn nghe được. Nếu không, dùng từ cùng nghĩa vừa với câu.",
        "Flow chart đi theo thứ tự các bước. Theo dõi các từ chỉ trình tự: first, then, next, finally.",
        "Kiểm tra lại đáp án khi nghe xong (chính tả, số ít/số nhiều)."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 3", tips:[
        "Nghe kỹ câu hỏi và trả lời thẳng, đúng trọng tâm.",
        "Trả lời khá dài, có ví dụ hoặc lý do.",
        "Nếu không chắc, nói rõ điều đó và gợi ý vài ý có thể (I'm not sure, but perhaps… / It depends…).",
        "Câu hỏi Part 3 mang tính chung, ít cá nhân hơn Part 1: nói về mọi người, xã hội, không chỉ về bạn."
      ]}
    ],
    writing:[
      {type:"Writing Task 2: cấu trúc bài", tips:[
        "Mở bài ngắn nói vì sao chủ đề quan trọng hoặc bạn sẽ bàn điều gì, thường kèm quan điểm.",
        "Mỗi đoạn thân bài diễn đạt MỘT ý chính, có luận điểm và/hoặc ví dụ hỗ trợ.",
        "Tóm lại quan điểm của bạn ở đoạn kết.",
        "However / On the other hand bắt đầu câu mới; although / even though nối hai mệnh đề trong cùng câu."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"Pollution is a reason of global warming.", good:"Pollution is a cause of global warming.", why:"Nguyên nhân gây ra điều xấu → cause of; reason đi với for."},
    {k:"vocab", bad:"A major reason which causes this problem is pressure on students.", good:"A major factor in this problem is pressure on students.", why:"Không nói 'reason which causes'. Dùng factor in / cause of."},
    {k:"vocab", bad:"This chart shows the main causes why land is losing productiveness.", good:"This chart shows the main reasons why land is losing productivity.", why:"the reason why…, không nói the cause why."},
    {k:"vocab", bad:"The growth of big cities has its human, economic and political reasons.", good:"The growth of big cities has human, economic and political causes.", why:"Nguyên nhân dẫn đến một hiện tượng → causes."},
    {k:"grammar", bad:"As world is changing, society is becoming more competitive.", good:"As the world is changing, society is becoming more competitive.", why:"Chỉ có một thế giới → the world."},
    {k:"grammar", bad:"Computers play an important role in the society.", good:"Computers play an important role in society.", why:"society nói chung → không mạo từ."},
    {k:"grammar", bad:"Internet and other media benefit us in many ways.", good:"The Internet and other media benefit us in many ways.", why:"Luôn nói the Internet."},
    {k:"grammar", bad:"Their parents give them a best school to study at.", good:"Their parents give them the best school to study at.", why:"So sánh nhất → the."},
    {k:"grammar", bad:"Some people argue that the books are the best type of media.", good:"Some people argue that books are the best type of media.", why:"Nói chung chung với danh từ số nhiều → không dùng the."},
    {k:"grammar", bad:"People can access the information from a computer whenever they want.", good:"People can access information from a computer whenever they want.", why:"information nói chung → không mạo từ."}
  ],
  fix:[
    {t:"gap", q:"If students are allowed to use the computers in class, they can access the latest information. → Sửa: ___", a:["computers"], e:"Nói chung → bỏ the."},
    {t:"gap", q:"It is necessary to keep in mind that the older the people get, the more experienced they are. → Sửa: ___", a:["people"], e:"people nói chung → bỏ the."},
    {t:"gap", q:"Another key reason in the process has been the mobile phone. → Sửa: ___", a:["factor"], e:"a key factor in."},
    {t:"gap", q:"I think the main factor of this change has been the Internet. → Sửa: ___", a:["cause"], e:"the main cause of."},
    {t:"gap", q:"Newspapers print only a few letters, and the cause for this is lack of space. → Sửa: ___", a:["reason"], e:"the reason for."},
    {t:"gap", q:"I like to buy a newspaper on Sunday, however I can read it online for free. → Sửa: ___", a:["even though","although"], e:"Nối hai mệnh đề trong cùng câu → even though/although."},
    {t:"gap", q:"Chen never uses online dictionaries however his teacher recommends them. → Sửa: ___", a:["even though","although"], e:"Nối hai mệnh đề → even though/although."},
    {t:"gap", q:"I joined a group on the social networking site I had never used before. → (lần đầu nhắc) Sửa: ___", a:["a"], e:"Lần đầu nhắc → a social networking site."},
    {t:"gap", q:"There has been the accident on the motorway this morning. (lần đầu nhắc) → Sửa: ___", a:["an","an accident"], e:"Lần đầu nhắc, accident bắt đầu bằng nguyên âm → an."},
    {t:"gap", q:"She is an university student. → Sửa: ___", a:["a","a university"], e:"university bắt đầu bằng âm /j/ → a."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u4 = [
  {q:"I read ___ interesting article about AI yesterday.",o:["an","a","the"],a:0,e:"Lần đầu nhắc, interesting bắt đầu bằng nguyên âm.",k:"c"},
  {q:"___ article said that AI will change journalism.",o:["The","An","—"],a:0,e:"Đã nhắc trước đó.",k:"c"},
  {q:"___ information on this website is not reliable.",o:["The","An","A"],a:0,e:"Thông tin xác định (trên trang này).",k:"c"},
  {q:"I usually listen to ___ radio in the car.",o:["the","a","—"],a:0,e:"listen to the radio.",k:"c"},
  {q:"She watches ___ television every evening.",o:["—","the","a"],a:0,e:"watch television (không mạo từ).",k:"c"},
  {q:"___ police are investigating the robbery.",o:["The","A","—"],a:0,e:"the police.",k:"c"},
  {q:"___ news is often depressing.",o:["—","A","An"],a:0,e:"news không đếm được, nói chung.",k:"c"},
  {q:"This is ___ most popular website in Vietnam.",o:["the","a","—"],a:0,e:"So sánh nhất.",k:"c"},
  {q:"He works as ___ journalist.",o:["a","the","—"],a:0,e:"Nghề nghiệp → a/an.",k:"c"},
  {q:"___ smartphones have changed the way we communicate.",o:["—","The","A"],a:0,e:"Nói chung, danh từ số nhiều.",k:"c"},
  {q:"It was ___ honour to meet the editor.",o:["an","a","the"],a:0,e:"honour: h câm → an.",k:"c"},
  {q:"___ although the website is free, it has a lot of adverts.",o:["Even","However","On the other hand"],a:0,e:"even though / although.",k:"c"},
  {t:"gap",q:"I bought ___ e-book and ___ printed book. The e-book was cheaper.",a:["an, a","an a","an / a"],e:"an e-book (âm /iː/), a printed book.",k:"g"},
  {t:"gap",q:"___ sun rises in the east.",a:["the"],e:"Duy nhất.",k:"g"},
  {t:"gap",q:"She is ___ best student in our class.",a:["the"],e:"So sánh nhất.",k:"g"},
  {t:"gap",q:"I need ___ hour to finish this report.",a:["an"],e:"hour: h câm.",k:"g"},
  {t:"gap",q:"Advertising is expensive. ___, it reaches a wide audience. (đầu câu)",a:["however","on the other hand"],e:"However đứng đầu câu, sau có dấu phẩy.",k:"g"},
  {t:"gap",q:"___ I read the news every day, I rarely buy a newspaper. (nối hai mệnh đề)",a:["although","even though","though"],e:"Although + mệnh đề.",k:"g"},
  {t:"gap",q:"The Internet is the main ___ (cause/reason) of the decline of newspapers.",a:["cause"],e:"the main cause of.",k:"g"},
  {t:"gap",q:"There are several ___ (cause/factor) that influence where people go on holiday.",a:["factors"],e:"factors that influence…",k:"g"},
  {t:"gap",q:"One ___ (reason/cause) why young people watch less TV is lack of time.",a:["reason"],e:"the reason why…",k:"g"},
  {q:"Câu nào đúng?",o:["The life in big cities is stressful.","Life in big cities is stressful."],a:1,e:"life nói chung → không the.",k:"s"},
  {q:"Câu nào đúng?",o:["I found the information I needed on the Internet.","I found information I needed on Internet."],a:0,e:"the information (xác định), the Internet.",k:"s"},
  {q:"Câu nào đúng?",o:["She is a engineer.","She is an engineer."],a:1,e:"an + âm nguyên âm.",k:"s"},
  {q:"Câu nào đúng?",o:["However the news is free, few people trust it.","Although the news is free, few people trust it."],a:1,e:"However không nối hai mệnh đề trong một câu.",k:"s"},
  {q:"Câu nào đúng?",o:["Pollution is the main cause of global warming.","Pollution is the main reason of global warming."],a:0,e:"the cause of / the reason for.",k:"s"},
  {q:"Câu nào đúng?",o:["Children learn a lot from the television.","Children learn a lot from television."],a:1,e:"television (phương tiện) không mạo từ.",k:"s"},
  {q:"Câu nào đúng?",o:["The media has a duty to report the truth.","Media has a duty to report the truth."],a:0,e:"the media.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u4:accuracy":{s:["correctness","precision"],a:["inaccuracy","error"]},
  "b2u4:amateur":{s:["non-professional","hobbyist"],a:["professional","expert"]},
  "b2u4:anonymous":{s:["unnamed","unidentified"],a:["named","identified"]},
  "b2u4:collaboration":{s:["cooperation","teamwork","partnership"]},
  "b2u4:evolve":{s:["develop","change gradually"]},
  "b2u4:feedback":{s:["comments","response","reaction"]},
  "b2u4:launch":{s:["start","introduce","begin"],a:["end","close"]},
  "b2u4:proposal":{s:["suggestion","plan"]},
  "b2u4:restrict":{s:["limit","control"],a:["allow","free"]},
  "b2u4:reveal":{s:["show","disclose","expose"],a:["hide","conceal"]},
  "b2u4:transform":{s:["change completely","revolutionise"]},
  "b2u4:turn out":{s:["prove","end up"]},
  "b2u4:sensational":{s:["shocking","dramatic"],a:["dull","ordinary"]},
  "b2u4:browse":{s:["look through","surf"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u4|The Rise of the Podcast"] = [["broadcast","n","chương trình phát sóng"],["predict","v","dự đoán"],["hobbyist","n","người chơi theo sở thích"],["loyal","adj","trung thành"],["informal","adj","thân mật, không trang trọng"],["turning point","n phr","bước ngoặt"],["episode","n","tập (phim, chương trình)"],["instalment","n","phần, kỳ (phát hành từng phần)"],["mass audience","n phr","công chúng đông đảo"],["invest heavily","v phr","đầu tư mạnh"],["category","n","thể loại"],["closeness","n","sự gần gũi"],["donation","n","khoản quyên góp"],["enthusiastic","adj","hào hứng"],["editor","n","biên tập viên"]];
})();
