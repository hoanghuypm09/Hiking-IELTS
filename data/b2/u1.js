/* Complete IELTS Bands 5–6.5 · Unit 1: Starting somewhere new.
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u1", title:"Starting somewhere new", vi:"Khởi đầu ở một nơi mới",
  focus:{reading:"True / False / Not Given · Table completion", listening:"Form completion · Multiple choice", speaking:"Part 1: trả lời về bản thân, đưa lý do và thêm chi tiết", writing:"Task 1: giới thiệu biểu đồ, chọn thông tin quan trọng, lên dàn ý", vocab:"problem / trouble · affect / effect · percent / percentage", pron:"Sentence stress 1: nhấn vào những từ trả lời câu hỏi"},
  vocab:[
    {g:"Word list của sách",w:"abroad",p:"adv",ipa:"/əˈbrɔːd/",vi:"ở nước ngoài, ra nước ngoài",ex:"My sister is planning to study abroad next year.",exvi:"Chị tôi định đi du học vào năm sau."},
    {g:"Word list của sách",w:"accustomed to",p:"adj",ipa:"/əˈkʌstəmd tə/",vi:"quen với",ex:"It took me months to get accustomed to the cold weather.",exvi:"Tôi mất mấy tháng mới quen được với thời tiết lạnh."},
    {g:"Word list của sách",w:"adjust",p:"v",ipa:"/əˈdʒʌst/",vi:"điều chỉnh, thích nghi",ex:"Most students adjust to the new routine within a few weeks.",exvi:"Phần lớn sinh viên thích nghi với nếp sinh hoạt mới trong vài tuần."},
    {g:"Word list của sách",w:"concern",p:"n",ipa:"/kənˈsɜːn/",vi:"mối quan tâm, mối lo ngại",ex:"Money is a major concern for international students.",exvi:"Tiền bạc là mối lo lớn của sinh viên quốc tế."},
    {g:"Word list của sách",w:"customs",p:"n",ipa:"/ˈkʌstəmz/",vi:"phong tục, tập quán",ex:"Visitors should learn a little about local customs before they arrive.",exvi:"Du khách nên tìm hiểu đôi chút về phong tục địa phương trước khi đến."},
    {g:"Word list của sách",w:"define (as)",p:"v",ipa:"/dɪˈfaɪn/",vi:"định nghĩa (là)",ex:"Homesickness can be defined as missing your home while you are away.",exvi:"Nỗi nhớ nhà có thể được định nghĩa là cảm giác nhớ quê khi ở xa."},
    {g:"Word list của sách",w:"evidence",p:"n",ipa:"/ˈevɪdəns/",vi:"bằng chứng",ex:"There is little evidence that age affects how fast people adapt.",exvi:"Có rất ít bằng chứng cho thấy tuổi tác ảnh hưởng đến tốc độ thích nghi."},
    {g:"Word list của sách",w:"experience",p:"v",ipa:"/ɪkˈspɪəriəns/",vi:"trải qua, trải nghiệm",ex:"Almost everyone experiences some stress in a new job.",exvi:"Hầu như ai cũng trải qua chút căng thẳng khi bắt đầu công việc mới."},
    {g:"Word list của sách",w:"financial matters",p:"n",ipa:"/faɪˈnænʃl ˈmætəz/",vi:"chuyện tiền bạc, tài chính",ex:"In some cultures, people rarely talk about financial matters.",exvi:"Ở một số nền văn hoá, người ta hiếm khi nói về chuyện tiền bạc."},
    {g:"Word list của sách",w:"give rise to",p:"phrase",ipa:"/ɡɪv raɪz tə/",vi:"gây ra, làm nảy sinh",ex:"Small misunderstandings can give rise to serious arguments.",exvi:"Những hiểu lầm nhỏ có thể dẫn đến cãi vã nghiêm trọng."},
    {g:"Word list của sách",w:"go wrong",p:"phrase",ipa:"/ɡəʊ rɒŋ/",vi:"gặp trục trặc, hỏng",ex:"If anything goes wrong with your visa, contact the student office.",exvi:"Nếu visa của bạn có trục trặc gì, hãy liên hệ phòng sinh viên."},
    {g:"Word list của sách",w:"immigrant",p:"n",ipa:"/ˈɪmɪɡrənt/",vi:"người nhập cư",ex:"Many immigrants open small restaurants when they first arrive.",exvi:"Nhiều người nhập cư mở quán ăn nhỏ khi mới đến."},
    {g:"Word list của sách",w:"internationally recognised qualifications",p:"n",ipa:"/ˌɪntəˈnæʃnəli ˈrekəɡnaɪzd ˌkwɒlɪfɪˈkeɪʃnz/",vi:"bằng cấp được quốc tế công nhận",ex:"She went to the UK to get internationally recognised qualifications.",exvi:"Cô ấy sang Anh để lấy bằng cấp được quốc tế công nhận."},
    {g:"Word list của sách",w:"lifestyle",p:"n",ipa:"/ˈlaɪfstaɪl/",vi:"lối sống",ex:"Moving to the countryside completely changed his lifestyle.",exvi:"Việc chuyển về nông thôn đã thay đổi hoàn toàn lối sống của anh ấy."},
    {g:"Word list của sách",w:"make sense",p:"phrase",ipa:"/meɪk sens/",vi:"có lý, dễ hiểu",ex:"After a few months, the local jokes started to make sense to me.",exvi:"Sau vài tháng, tôi bắt đầu hiểu được những câu đùa của người bản xứ."},
    {g:"Word list của sách",w:"notice",p:"v",ipa:"/ˈnəʊtɪs/",vi:"để ý, nhận thấy",ex:"I noticed that people here queue very patiently.",exvi:"Tôi để ý thấy người ở đây xếp hàng rất kiên nhẫn."},
    {g:"Word list của sách",w:"point of view",p:"n",ipa:"/ˌpɔɪnt əv ˈvjuː/",vi:"quan điểm",ex:"Students are expected to defend their point of view in class.",exvi:"Sinh viên được kỳ vọng sẽ bảo vệ quan điểm của mình trên lớp."},
    {g:"Word list của sách",w:"problem-solving skills",p:"n",ipa:"/ˈprɒbləm ˌsɒlvɪŋ skɪlz/",vi:"kỹ năng giải quyết vấn đề",ex:"Living alone abroad helped me develop problem-solving skills.",exvi:"Sống một mình ở nước ngoài giúp tôi rèn kỹ năng giải quyết vấn đề."},
    {g:"Word list của sách",w:"process",p:"n",ipa:"/ˈprəʊses/",vi:"quá trình",ex:"Learning a new culture is a slow process.",exvi:"Học một nền văn hoá mới là một quá trình chậm."},
    {g:"Word list của sách",w:"resource",p:"n",ipa:"/rɪˈzɔːs/",vi:"nguồn lực, tài nguyên, nguồn hỗ trợ",ex:"The library is a useful resource for new students.",exvi:"Thư viện là nguồn hỗ trợ hữu ích cho sinh viên mới."},
    {g:"Word list của sách",w:"seek out",p:"phr v",ipa:"/siːk aʊt/",vi:"chủ động tìm kiếm",ex:"Try to seek out people who share your interests.",exvi:"Hãy chủ động tìm những người có cùng sở thích với bạn."},
    {g:"Word list của sách",w:"stage",p:"n",ipa:"/steɪdʒ/",vi:"giai đoạn",ex:"The first stage of living abroad is usually exciting.",exvi:"Giai đoạn đầu sống ở nước ngoài thường rất thú vị."},
    {g:"Word list của sách",w:"stand out",p:"phr v",ipa:"/stænd aʊt/",vi:"nổi bật, dễ nhận thấy",ex:"On my first day, the tall buildings really stood out.",exvi:"Ngày đầu tiên, những toà nhà cao tầng thật sự gây ấn tượng với tôi."},
    {g:"Word list của sách",w:"surroundings",p:"n",ipa:"/səˈraʊndɪŋz/",vi:"môi trường xung quanh",ex:"It takes time to feel comfortable in new surroundings.",exvi:"Cần thời gian để thấy thoải mái ở môi trường mới."},
    {g:"Word list của sách",w:"take action",p:"phrase",ipa:"/teɪk ˈækʃn/",vi:"hành động (để giải quyết)",ex:"If your landlord ignores the problem, you need to take action.",exvi:"Nếu chủ nhà phớt lờ vấn đề, bạn cần phải hành động."},
    {g:"Word list của sách",w:"take something seriously",p:"phrase",ipa:"/teɪk ˈsʌmθɪŋ ˈsɪəriəsli/",vi:"coi trọng điều gì",ex:"Universities take cheating very seriously.",exvi:"Các trường đại học rất coi trọng chuyện gian lận."},
    {g:"Word list của sách",w:"refer to (as)",p:"phrase",ipa:"/rɪˈfɜː tə/",vi:"gọi là",ex:"This feeling is often referred to as culture shock.",exvi:"Cảm giác này thường được gọi là sốc văn hoá."},
    {g:"Word list của sách",w:"values",p:"n",ipa:"/ˈvæljuːz/",vi:"giá trị, quan niệm sống",ex:"Family values are very important in Vietnamese culture.",exvi:"Giá trị gia đình rất quan trọng trong văn hoá Việt Nam."},
    {g:"Word list của sách",w:"work out",p:"phr v",ipa:"/wɜːk aʊt/",vi:"tìm ra, nghĩ ra",ex:"It took me a week to work out how the bus system works.",exvi:"Tôi mất một tuần mới hiểu ra hệ thống xe buýt hoạt động thế nào."},
    {g:"Du học & cuộc sống mới",w:"homesick",p:"adj",ipa:"/ˈhəʊmsɪk/",vi:"nhớ nhà",ex:"I felt homesick during my first winter abroad.",exvi:"Tôi thấy nhớ nhà trong mùa đông đầu tiên ở nước ngoài."},
    {g:"Du học & cuộc sống mới",w:"culture shock",p:"n",ipa:"/ˈkʌltʃə ʃɒk/",vi:"sốc văn hoá",ex:"Culture shock usually begins after the first few weeks.",exvi:"Sốc văn hoá thường bắt đầu sau vài tuần đầu."},
    {g:"Du học & cuộc sống mới",w:"newcomer",p:"n",ipa:"/ˈnjuːkʌmə/",vi:"người mới đến",ex:"The club organises a welcome party for newcomers.",exvi:"Câu lạc bộ tổ chức tiệc chào mừng người mới."},
    {g:"Du học & cuộc sống mới",w:"integrate",p:"v",ipa:"/ˈɪntɪɡreɪt/",vi:"hoà nhập",ex:"Joining a sports team helped him integrate into local life.",exvi:"Tham gia một đội thể thao giúp anh ấy hoà nhập vào cuộc sống địa phương."},
    {g:"Du học & cuộc sống mới",w:"accommodation",p:"n",ipa:"/əˌkɒməˈdeɪʃn/",vi:"chỗ ở",ex:"Finding cheap accommodation near the campus is difficult.",exvi:"Tìm chỗ ở rẻ gần trường rất khó."},
    {g:"Du học & cuộc sống mới",w:"independence",p:"n",ipa:"/ˌɪndɪˈpendəns/",vi:"sự tự lập, độc lập",ex:"Living abroad teaches young people independence.",exvi:"Sống ở nước ngoài dạy người trẻ tính tự lập."},
    {g:"Du học & cuộc sống mới",w:"nationality",p:"n",ipa:"/ˌnæʃəˈnæləti/",vi:"quốc tịch",ex:"Students of twenty different nationalities study here.",exvi:"Sinh viên thuộc hai mươi quốc tịch khác nhau học ở đây."},
    {g:"Du học & cuộc sống mới",w:"widen your horizons",p:"phrase",ipa:"/ˈwaɪdn jɔː həˈraɪznz/",vi:"mở rộng tầm nhìn",ex:"Travelling alone can really widen your horizons.",exvi:"Đi du lịch một mình thật sự có thể mở rộng tầm nhìn của bạn."},
    {g:"Từ dễ nhầm",w:"problem",p:"n",ipa:"/ˈprɒbləm/",vi:"vấn đề (đếm được: a problem, problems)",ex:"I had a problem with my bank card last week.",exvi:"Tuần trước tôi gặp một vấn đề với thẻ ngân hàng."},
    {g:"Từ dễ nhầm",w:"trouble",p:"n",ipa:"/ˈtrʌbl/",vi:"rắc rối (thường không đếm được, không dùng a trouble)",ex:"We had some trouble finding the hostel.",exvi:"Chúng tôi gặp chút rắc rối khi tìm nhà nghỉ."},
    {g:"Từ dễ nhầm",w:"affect",p:"v",ipa:"/əˈfekt/",vi:"ảnh hưởng đến (động từ)",ex:"Lack of sleep can affect your exam results.",exvi:"Thiếu ngủ có thể ảnh hưởng đến kết quả thi của bạn."},
    {g:"Từ dễ nhầm",w:"effect",p:"n",ipa:"/ɪˈfekt/",vi:"sự ảnh hưởng, tác động (danh từ)",ex:"The new rule had a positive effect on students.",exvi:"Quy định mới có tác động tích cực đến sinh viên."},
    {g:"Biểu đồ & số liệu (Writing Task 1)",w:"percent",p:"n",ipa:"/pəˈsent/",vi:"phần trăm (đứng sau con số, không thêm -s)",ex:"Only 23 percent of older people had this problem.",exvi:"Chỉ 23 phần trăm người lớn tuổi gặp vấn đề này."},
    {g:"Biểu đồ & số liệu (Writing Task 1)",w:"percentage",p:"n",ipa:"/pəˈsentɪdʒ/",vi:"tỉ lệ phần trăm (đi với the/a, không đứng sau số)",ex:"The percentage of students who live alone has risen.",exvi:"Tỉ lệ sinh viên sống một mình đã tăng."},
    {g:"Biểu đồ & số liệu (Writing Task 1)",w:"age group",p:"n",ipa:"/ˈeɪdʒ ɡruːp/",vi:"nhóm tuổi",ex:"The youngest age group found it easiest to make friends.",exvi:"Nhóm tuổi trẻ nhất thấy kết bạn dễ nhất."},
    {g:"Biểu đồ & số liệu (Writing Task 1)",w:"vary",p:"v",ipa:"/ˈveəri/",vi:"khác nhau, thay đổi",ex:"The problems vary according to people's ages.",exvi:"Các vấn đề khác nhau tuỳ theo độ tuổi."}
  ],
  phrases:[
    {g:"Tính từ + danh từ",w:"a new arrival",p:"noun phrase",ipa:"/ə njuː əˈraɪvl/",vi:"người mới đến",ex:"A new arrival is often excited by everything around them.",exvi:"Người mới đến thường thấy hào hứng với mọi thứ xung quanh."},
    {g:"Tính từ + danh từ",w:"local people",p:"noun phrase",ipa:"/ˈləʊkl ˈpiːpl/",vi:"người dân địa phương",ex:"Understanding local people was harder than I expected.",exvi:"Hiểu người dân địa phương nói gì khó hơn tôi tưởng."},
    {g:"Tính từ + danh từ",w:"an optimistic attitude",p:"noun phrase",ipa:"/ən ˌɒptɪˈmɪstɪk ˈætɪtjuːd/",vi:"thái độ lạc quan",ex:"An optimistic attitude makes the first year much easier.",exvi:"Thái độ lạc quan khiến năm đầu tiên dễ dàng hơn nhiều."},
    {g:"Tính từ + danh từ",w:"close friends",p:"noun phrase",ipa:"/kləʊs frendz/",vi:"bạn thân",ex:"Personal topics are only discussed with close friends.",exvi:"Chuyện riêng tư chỉ được bàn với bạn thân."},
    {g:"Tính từ + danh từ",w:"a familiar environment",p:"noun phrase",ipa:"/ə fəˈmɪliə ɪnˈvaɪrənmənt/",vi:"môi trường quen thuộc",ex:"Leaving a familiar environment can be frightening.",exvi:"Rời khỏi môi trường quen thuộc có thể khiến người ta sợ."},
    {g:"Tính từ + danh từ",w:"an international social club",p:"noun phrase",ipa:"/ən ˌɪntəˈnæʃnəl ˈsəʊʃl klʌb/",vi:"câu lạc bộ giao lưu quốc tế",ex:"She joined an international social club to meet new people.",exvi:"Cô ấy tham gia một câu lạc bộ giao lưu quốc tế để gặp gỡ người mới."},
    {g:"Danh từ + danh từ",w:"language barrier",p:"noun phrase",ipa:"/ˈlæŋɡwɪdʒ ˈbæriə/",vi:"rào cản ngôn ngữ",ex:"The language barrier made shopping difficult at first.",exvi:"Rào cản ngôn ngữ khiến việc mua sắm lúc đầu rất khó."},
    {g:"Danh từ + danh từ",w:"exchange student",p:"noun phrase",ipa:"/ɪksˈtʃeɪndʒ ˈstjuːdnt/",vi:"sinh viên trao đổi",ex:"Our class has two exchange students from Korea.",exvi:"Lớp chúng tôi có hai sinh viên trao đổi đến từ Hàn Quốc."},
    {g:"Danh từ + danh từ",w:"the honeymoon stage",p:"noun phrase",ipa:"/ðə ˈhʌnimuːn steɪdʒ/",vi:"giai đoạn ‘trăng mật’ (mọi thứ đều mới lạ, thú vị)",ex:"During the honeymoon stage, everything seems wonderful.",exvi:"Trong giai đoạn ‘trăng mật’, mọi thứ đều có vẻ tuyệt vời."},
    {g:"Danh từ + danh từ",w:"host family",p:"noun phrase",ipa:"/həʊst ˈfæməli/",vi:"gia đình bản xứ nhận ở cùng",ex:"Living with a host family helped me practise English every day.",exvi:"Sống cùng gia đình bản xứ giúp tôi luyện tiếng Anh mỗi ngày."},
    {g:"Danh từ + of + danh từ",w:"a sense of adventure",p:"noun phrase",ipa:"/ə sens əv ədˈventʃə/",vi:"tinh thần phiêu lưu",ex:"A sense of adventure took him to South America.",exvi:"Tinh thần phiêu lưu đã đưa anh ấy đến Nam Mỹ."},
    {g:"Danh từ + of + danh từ",w:"a way of life",p:"noun phrase",ipa:"/ə weɪ əv laɪf/",vi:"lối sống, cách sống",ex:"Cycling to work is a way of life in Amsterdam.",exvi:"Đạp xe đi làm là một lối sống ở Amsterdam."},
    {g:"Danh từ + of + danh từ",w:"feelings of anxiety",p:"noun phrase",ipa:"/ˈfiːlɪŋz əv æŋˈzaɪəti/",vi:"cảm giác lo âu",ex:"Feelings of anxiety are normal in the first month.",exvi:"Cảm giác lo âu là bình thường trong tháng đầu tiên."},
    {g:"Dùng trong Writing Task 1",w:"the greatest problem",p:"noun phrase",ipa:"/ðə ˈɡreɪtɪst ˈprɒbləm/",vi:"vấn đề lớn nhất",ex:"The greatest problem for young people is making friends.",exvi:"Vấn đề lớn nhất của người trẻ là kết bạn."},
    {g:"Dùng trong Writing Task 1",w:"the oldest age group",p:"noun phrase",ipa:"/ði ˈəʊldɪst eɪdʒ ɡruːp/",vi:"nhóm tuổi cao nhất",ex:"The oldest age group had the least trouble with housing.",exvi:"Nhóm tuổi cao nhất ít gặp khó khăn về nhà ở nhất."},
    {g:"Dùng trong Writing Task 1",w:"a four-year period",p:"noun phrase",ipa:"/ə ˈfɔː jɪə ˈpɪəriəd/",vi:"giai đoạn bốn năm",ex:"The graph shows visitor numbers over a four-year period.",exvi:"Biểu đồ thể hiện số du khách trong giai đoạn bốn năm."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"study abroad",p:"collocation",ipa:"/ˈstʌdi əˈbrɔːd/",vi:"du học",ex:"More Vietnamese students now study abroad.",exvi:"Ngày nay nhiều sinh viên Việt Nam đi du học hơn."},
    {g:"Động từ + danh từ",w:"make friends with",p:"collocation",ipa:"/meɪk frendz wɪð/",vi:"kết bạn với",ex:"I made friends with my neighbours quite quickly.",exvi:"Tôi kết bạn với hàng xóm khá nhanh."},
    {g:"Động từ + danh từ",w:"face difficulties",p:"collocation",ipa:"/feɪs ˈdɪfɪkəltiz/",vi:"đối mặt với khó khăn",ex:"Most newcomers face difficulties with paperwork.",exvi:"Hầu hết người mới đến gặp khó khăn với giấy tờ."},
    {g:"Động từ + danh từ",w:"settle into",p:"collocation",ipa:"/ˈsetl ˈɪntə/",vi:"ổn định, quen dần (nơi mới)",ex:"It took her a month to settle into her new flat.",exvi:"Cô ấy mất một tháng để quen với căn hộ mới."},
    {g:"Động từ + danh từ",w:"suffer from culture shock",p:"collocation",ipa:"/ˈsʌfə frəm ˈkʌltʃə ʃɒk/",vi:"bị sốc văn hoá",ex:"Did you suffer from culture shock when you arrived?",exvi:"Bạn có bị sốc văn hoá khi mới đến không?"},
    {g:"Động từ + danh từ",w:"form an opinion",p:"collocation",ipa:"/fɔːm ən əˈpɪnjən/",vi:"hình thành quan điểm",ex:"Students are encouraged to form their own opinions.",exvi:"Sinh viên được khuyến khích hình thành quan điểm riêng."},
    {g:"Động từ + danh từ",w:"have an effect on",p:"collocation",ipa:"/hæv ən ɪˈfekt ɒn/",vi:"có tác động đến",ex:"The weather had a big effect on my mood.",exvi:"Thời tiết ảnh hưởng nhiều đến tâm trạng của tôi."},
    {g:"Động từ + danh từ",w:"deal with problems",p:"collocation",ipa:"/diːl wɪð ˈprɒbləmz/",vi:"giải quyết vấn đề",ex:"You learn to deal with problems on your own.",exvi:"Bạn học được cách tự mình giải quyết vấn đề."},
    {g:"Tính từ + giới từ",w:"keen on",p:"collocation",ipa:"/kiːn ɒn/",vi:"thích, ham thích",ex:"I'm not too keen on flying.",exvi:"Tôi không thích đi máy bay lắm."},
    {g:"Tính từ + giới từ",w:"critical of",p:"collocation",ipa:"/ˈkrɪtɪkl əv/",vi:"chỉ trích, phê phán",ex:"Some people are critical of students who only study.",exvi:"Một số người hay chê những sinh viên chỉ biết học."},
    {g:"Mô tả số liệu (Writing Task 1)",w:"much higher than",p:"collocation",ipa:"/mʌtʃ ˈhaɪə ðən/",vi:"cao hơn nhiều so với",ex:"The figure for older people was much higher than for the others.",exvi:"Số liệu của người lớn tuổi cao hơn nhiều so với các nhóm khác."},
    {g:"Mô tả số liệu (Writing Task 1)",w:"even fewer",p:"collocation",ipa:"/ˈiːvn ˈfjuːə/",vi:"thậm chí còn ít hơn",ex:"Even fewer people over 55 had this problem.",exvi:"Thậm chí còn ít người trên 55 tuổi gặp vấn đề này hơn."},
    {g:"Mô tả số liệu (Writing Task 1)",w:"to some extent",p:"collocation",ipa:"/tə sʌm ɪkˈstent/",vi:"ở một mức độ nào đó",ex:"All age groups experience the same problems to some extent.",exvi:"Mọi nhóm tuổi đều gặp những vấn đề giống nhau ở một mức độ nào đó."},
    {g:"Mô tả số liệu (Writing Task 1)",w:"the second most significant",p:"collocation",ipa:"/ðə ˈsekənd məʊst sɪɡˈnɪfɪkənt/",vi:"quan trọng/đáng kể thứ hai",ex:"Housing was the second most significant problem.",exvi:"Nhà ở là vấn đề đáng kể thứ hai."}
  ],
  grammar:{
    title:"Making comparisons (so sánh hơn & so sánh nhất)",
    rules:[
      {h:"Tính từ một âm tiết",use:["So sánh hơn: thêm -er + than","So sánh nhất: the + -est","Phụ âm-nguyên âm-phụ âm: gấp đôi phụ âm cuối (big → bigger)"],form:"cheap → cheaper → the cheapest · big → bigger → the biggest",ex:"Rent is cheaper in the suburbs than in the centre.",sig:"than / the … in / of"},
      {h:"Tính từ hai âm tiết tận cùng -y",use:["Đổi y → i rồi thêm -er / -est"],form:"easy → easier → the easiest · friendly → friendlier",ex:"Making friends was easier than I expected.",sig:"easy, busy, happy, friendly"},
      {h:"Tính từ dài (từ hai âm tiết trở lên)",use:["Dùng more / the most","Không thêm -er sau more (sai: more easier)"],form:"important → more important → the most important",ex:"Learning the language is the most important thing.",sig:"problematic, difficult, expensive"},
      {h:"Bất quy tắc & bổ nghĩa cho so sánh",use:["good → better → the best · bad → worse → the worst · far → further","Nhấn mạnh: much / far / a lot + so sánh hơn","Giảm nhẹ: slightly / a little"],form:"much higher · slightly lower · far more difficult",ex:"The figure for women was slightly lower.",sig:"Writing Task 1"}
    ],
    quiz:[
      {q:"Learning the language is ___ thing for newcomers.",o:["the most important","the importantest","more important"],a:0,e:"Tính từ dài → the most + adj."},
      {q:"Many people find making friends ___ than finding a job.",o:["harder","more hard","hardest"],a:0,e:"hard một âm tiết → harder."},
      {q:"Local people are often ___ than you expect.",o:["friendlier","more friendlier","friendliest"],a:0,e:"friendly → friendlier, không dùng more + -er."},
      {q:"My English is getting ___ every month.",o:["good","better","more good"],a:1,e:"good → better (bất quy tắc)."},
      {q:"This was ___ winter I had ever experienced.",o:["the coldest","the most cold","colder"],a:0,e:"cold → the coldest."},
      {q:"The percentage of older people was ___ higher than the others.",o:["much","more","most"],a:0,e:"much + so sánh hơn để nhấn mạnh."},
      {q:"Workers' salaries got ___ in 2001.",o:["worse","worser","more bad"],a:0,e:"bad → worse, không có 'worser'."},
      {q:"Travelling is becoming ___.",o:["cleaner and safer","more clean and safe","more cleaner and safer"],a:0,e:"clean, safe một âm tiết → -er."}
    ]
  },
  reading:{
    title:"Settling In: A Guide for International Students", est:"khoảng 420 từ · 15 phút",
    paras:[
      "Every year, thousands of students leave their home countries to study at universities abroad. Most of them arrive full of excitement, but research shows that nearly all international students go through a period of difficulty while they adjust to their new surroundings. This guide, written by the student support office of Northfield University, explains what new arrivals can expect.",
      "In the first few weeks, most students feel like tourists. Everything is new and interesting: the food, the shops, the way people dress. Psychologists call this the ‘excitement’ stage. Newcomers notice mainly the similarities between their own culture and the new one, and small problems seem unimportant. For most people, this stage lasts between two and six weeks.",
      "The second stage is often the hardest. Students begin to notice differences rather than similarities, and these can cause frustration. A student from Vietnam, for example, told us that she was surprised when her tutor did not tell her which topic to choose for an essay. At Northfield, tutors give students several options and expect them to make their own decisions. Students who are used to clearer instructions may feel lost. Many also feel homesick at this stage and may spend more time talking to family online than meeting new people.",
      "In the third stage, students start to understand the unwritten rules of their new home. They learn, for instance, that it is normal to call lecturers by their first names, and that people rarely talk about how much they earn. As things begin to make sense, students develop practical skills for dealing with problems, such as knowing which office to visit when something goes wrong with their accommodation.",
      "Finally, in the fourth stage, most students feel at home. They have accepted the new customs and may even prefer some of them. Interestingly, many students say that at this point they see their own culture in a new way, and they value parts of it that they had previously ignored.",
      "The support office recommends several ways to make the process easier. Joining at least one club or society in the first month is the most effective step, according to a survey of 600 former students. Keeping a diary can also help students see how much progress they have made. Finally, students are advised not to compare themselves with others: some people settle in within weeks, while for others the process takes a whole academic year."
    ],
    note:"Trường đại học và khảo sát trong bài là hư cấu, dùng để luyện tập.",
    quiz:[
      {t:"head",text:"Câu 1–6: Do the following statements agree with the information given in the passage? Chọn TRUE / FALSE / NOT GIVEN."},
      {q:"Only a small number of international students have problems adjusting.",o:["TRUE","FALSE","NOT GIVEN"],a:1,e:"Đoạn A: 'nearly all international students go through a period of difficulty'."},
      {q:"In the first stage, students pay more attention to differences than similarities.",o:["TRUE","FALSE","NOT GIVEN"],a:1,e:"Đoạn B: họ để ý chủ yếu đến điểm giống nhau."},
      {q:"Tutors at Northfield usually let students choose between several possibilities.",o:["TRUE","FALSE","NOT GIVEN"],a:0,e:"Đoạn C: 'tutors give students several options'."},
      {q:"Students from Asia find the second stage harder than students from Europe.",o:["TRUE","FALSE","NOT GIVEN"],a:2,e:"Bài chỉ nêu một ví dụ, không so sánh theo châu lục."},
      {q:"It is common for students to address lecturers by their first names.",o:["TRUE","FALSE","NOT GIVEN"],a:0,e:"Đoạn D: 'it is normal to call lecturers by their first names'."},
      {q:"The university offers free counselling to homesick students.",o:["TRUE","FALSE","NOT GIVEN"],a:2,e:"Bài không nhắc đến dịch vụ tư vấn miễn phí."},
      {t:"head",text:"Câu 7–12: Complete the table. Chọn KHÔNG QUÁ HAI TỪ từ bài đọc."},
      {t:"gap",q:"Stage 1 · ‘___ ’ stage: students feel like tourists",a:["excitement"],e:"Đoạn B."},
      {t:"gap",q:"Stage 1 · usually lasts two to six ___",a:["weeks"],e:"Đoạn B."},
      {t:"gap",q:"Stage 2 · differences cause ___",a:["frustration"],e:"Đoạn C."},
      {t:"gap",q:"Stage 3 · students learn the ___ of their new home",a:["unwritten rules"],e:"Đoạn D."},
      {t:"gap",q:"Stage 3 · students develop practical skills for ___ problems",a:["dealing with"],e:"Đoạn D."},
      {t:"gap",q:"Stage 4 · students see their own ___ in a new way",a:["culture"],e:"Đoạn E."},
      {t:"head",text:"Câu 13: Chọn đáp án đúng."},
      {q:"According to the survey, the most effective way to settle in is to",o:["A keep a diary.","B join a club or society.","C talk to family online.","D compare yourself with others."],a:1,e:"Đoạn F: 'the most effective step'."}
    ]
  },
  listening:{
    title:"Section 1 · Joining a language exchange club",
    intro:"Một sinh viên mới gọi điện đăng ký tham gia câu lạc bộ trao đổi ngôn ngữ. Hoàn thành phiếu đăng ký rồi trả lời câu hỏi trắc nghiệm.",
    script:[
      ["A","Good morning, City Language Exchange. This is Paula speaking."],
      ["B","Hi. I saw your poster at the university and I'd like to join the club."],
      ["A","Great. I'll just fill in the form for you. What's your name?"],
      ["B","It's Minh Tran. That's T-R-A-N."],
      ["A","Thanks. And how old are you, Minh?"],
      ["B","I'm twenty-two."],
      ["A","And you're from…?"],
      ["B","Vietnam. I arrived here three weeks ago."],
      ["A","Welcome! What's your address?"],
      ["B","I'm staying at forty-seven Harbour Road. That's in the student village."],
      ["A","And a mobile number?"],
      ["B","Yes, it's oh four one two, eight six three, five oh nine."],
      ["A","Are you studying here?"],
      ["B","Yes, I'm doing a master's in engineering."],
      ["A","And what do you like doing in your free time?"],
      ["B","I play badminton, and I also really enjoy cooking."],
      ["A","Lovely. We often need people to cook for our food nights! Now, is there anything you're worried about?"],
      ["B","Well, my English is OK for my classes, but I find it hard to follow people in shops and on the bus. They speak so fast."],
      ["A","That's very common. Our members will help you with that. We started with just thirty people, but now we have about eighty members from twenty countries."],
      ["B","How often do you meet?"],
      ["A","We used to meet once a month, but now it's every two weeks, on Thursday evenings. Most meetings are conversation evenings in a café, though sometimes we have a talk or a visit to a museum."],
      ["B","That sounds good. I really want to practise speaking."],
      ["A","That's exactly what the club is for. Of course, people have fun, but the main aim is for members to practise the language they're learning with native speakers."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–5: Complete the form. Write ONE WORD AND/OR A NUMBER."},
      {t:"gap",q:"Nationality: ___",a:["vietnamese","vietnam"]},
      {t:"gap",q:"Address: ___ Harbour Road",a:["47","forty-seven","forty seven"]},
      {t:"gap",q:"Mobile phone: ___",a:["0412863509","0412 863 509"]},
      {t:"gap",q:"Course: master's in ___",a:["engineering"]},
      {t:"gap",q:"Free-time interests: badminton and ___",a:["cooking"]},
      {t:"head",text:"Câu 6–9: Choose the correct letter, A, B or C."},
      {q:"What does Minh find difficult?",o:["A writing essays for his classes","B understanding people in everyday situations","C talking to his classmates"],a:1},
      {q:"How many members does the club have now?",o:["A 20","B 30","C 80"],a:2},
      {q:"How often does the club meet?",o:["A once a week","B once every two weeks","C once a month"],a:1},
      {q:"The main purpose of the club is to help members",o:["A practise speaking a language.","B visit local museums.","C have fun together."],a:0}
    ]
  },
  writing:{
    type:"Task 1", min:150, time:"20 phút",
    prompt:"The chart below shows the percentage of international students at one university who reported different problems in their first year, according to their age. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    charts:[
      {type:"bar",title:"First-year problems of international students (%)",cats:["Making friends","Lectures","Accommodation","Money"],series:[["Aged 18–21",[42,30,38,25]],["Aged 22–29",[33,24,40,36]],["Aged 30+",[21,18,27,45]]],max:50,step:10}
    ],
    note:"Số liệu giả định để luyện tập.",
    plan:["Mở bài: diễn đạt lại đề bằng từ của bạn (problems → difficulties, international students → students from overseas)","Overview: vấn đề lớn nhất của từng nhóm tuổi khác nhau; người lớn tuổi lo về tiền, người trẻ lo kết bạn","Thân 1: Making friends và Understanding lectures, so sánh ba nhóm tuổi (much higher, even fewer)","Thân 2: Finding accommodation và Managing money, nhấn mạnh số liệu nổi bật (45% nhóm 30+)","Không đưa lý do cho số liệu, chỉ mô tả và so sánh"],
    model:"The bar chart compares the difficulties that international students of three different age groups faced during their first year at a university.\n\nOverall, the main problem varied according to age. While the youngest students found making friends the most difficult, the oldest group had the most trouble managing money. In general, students over 30 reported fewer problems than younger students.\n\nFor students aged 18 to 21, making friends was the greatest problem, mentioned by 42 percent, followed by finding accommodation at 38 percent. In comparison, only 33 percent of 22- to 29-year-olds and even fewer students over 30 (21 percent) had trouble forming friendships. Understanding lectures was a smaller problem for all groups, ranging from 30 percent of the youngest students to just 18 percent of the oldest.\n\nFinding accommodation was the most significant difficulty for the middle age group, with 40 percent reporting this problem, compared with 27 percent of those over 30. By contrast, managing money was a much bigger concern for older students. The percentage of students over 30 who struggled with their finances was 45 percent, which was almost twice as high as the figure for the youngest group (25 percent)."
  },
  speaking:{
    tip:"Part 1 kéo dài 4–5 phút, giám khảo hỏi về bạn, quê hương, việc học và sở thích. Đừng trả lời bằng hai ba từ: trả lời thẳng, rồi thêm lý do và chi tiết. Dùng từ của bạn thay vì lặp lại nguyên câu hỏi, và nhấn giọng vào những từ trả lời câu hỏi.",
    p1:["Can you tell me a little bit about your home town?","How long have you been living there?","Is there anything you find difficult about living there?","How do you usually get to school or work?","Have you ever travelled to another country?","What's your favourite form of travel? Why?"],
    p1sample:{q:"Is there anything you find difficult about living there?",a:"Well, the hardest thing for me is the TRAFFIC. My city has grown very quickly, and in the rush hour it can take me nearly an hour to get to class, even though it's only five kilometres. I usually listen to podcasts on the bus, so at least the time isn't wasted."},
    cue:{t:"Describe a time when you moved to a new place.",pts:["where you moved to","when and why you moved","what you found difficult at first"],end:"and explain how you felt after a few months there."},
    p2sample:"I'd like to describe the time I moved from my village to Da Nang to go to university. That was about three years ago, when I was eighteen. I chose Da Nang because the university has a good engineering department and the city isn't as crowded as Hanoi or Ho Chi Minh City. At first, I found quite a lot of things difficult. Living alone for the first time meant I had to cook, do my own laundry and manage my money, and to be honest, I wasn't very good at any of them. I also felt homesick, especially at weekends, because I didn't know many people. Things improved when I joined the university badminton club. I made friends with some students from my course, and they showed me the cheapest places to eat and the best beaches. After a few months, I felt much more confident and independent. Now Da Nang feels like a second home, and I think the experience helped me grow up a lot.",
    p3:["Why do many young people want to study abroad?","What problems might people have when they move to a new country?","Is it better to move abroad when you are young or when you are older?"],
    p3sample:{q:"Why do many young people want to study abroad?",a:"I think there are several reasons. The most important one is probably qualifications: a degree from a well-known foreign university can help you get a better job. But it's also about experience. Living in a different culture makes you more independent, and you learn to solve problems on your own. For example, my cousin studied in Australia, and she says the biggest change was in her confidence rather than her English."},
    phrases:["Well, the main reason is…","I'd say…, because…","For example,…","The thing I like most is…","I'm not too keen on…","To be honest,…"]
  },
  lesson:[
    {g:"Mở đầu: lý do đi du học",w:"internationally recognised",p:"adj phr",ipa:"/ˌɪntəˈnæʃnəli ˈrekəɡnaɪzd/",vi:"được quốc tế công nhận",ex:"An internationally recognised degree helps you work anywhere.",exvi:"Một tấm bằng được quốc tế công nhận giúp bạn làm việc ở bất cứ đâu."},
    {g:"Mở đầu: lý do đi du học",w:"experience a different culture",p:"v phr",ipa:"/ɪkˈspɪəriəns ə ˈdɪfrənt ˈkʌltʃə/",vi:"trải nghiệm một nền văn hoá khác",ex:"Living abroad lets you experience a different culture every day.",exvi:"Sống ở nước ngoài cho bạn trải nghiệm một nền văn hoá khác mỗi ngày."},
    {g:"Listening: câu lạc bộ giao lưu quốc tế",w:"social atmosphere",p:"n phr",ipa:"/ˈsəʊʃl ˈætməsfɪə/",vi:"bầu không khí giao lưu",ex:"The club has a relaxed social atmosphere.",exvi:"Câu lạc bộ có bầu không khí giao lưu thoải mái."},
    {g:"Listening: câu lạc bộ giao lưu quốc tế",w:"application form",p:"n phr",ipa:"/ˌæplɪˈkeɪʃn fɔːm/",vi:"phiếu đăng ký",ex:"Please complete the application form in capital letters.",exvi:"Vui lòng điền phiếu đăng ký bằng chữ in hoa."},
    {g:"Listening: câu lạc bộ giao lưu quốc tế",w:"occupation",p:"n",ipa:"/ˌɒkjuˈpeɪʃn/",vi:"nghề nghiệp",ex:"Write your occupation on the second line.",exvi:"Ghi nghề nghiệp của bạn ở dòng thứ hai."},
    {g:"Listening: câu lạc bộ giao lưu quốc tế",w:"accent",p:"n",ipa:"/ˈæksent/",vi:"giọng (vùng miền)",ex:"I found the local accent difficult to understand.",exvi:"Tôi thấy giọng địa phương khó nghe."},
    {g:"Listening: câu lạc bộ giao lưu quốc tế",w:"colleague",p:"n",ipa:"/ˈkɒliːɡ/",vi:"đồng nghiệp",ex:"My colleagues invited me to lunch on my first day.",exvi:"Đồng nghiệp mời tôi đi ăn trưa vào ngày đầu tiên."},
    {g:"Reading: sốc văn hoá",w:"discomfort",p:"n",ipa:"/dɪsˈkʌmfət/",vi:"sự khó chịu, không thoải mái",ex:"Culture shock can cause physical and emotional discomfort.",exvi:"Sốc văn hoá có thể gây khó chịu cả về thể chất lẫn tinh thần."},
    {g:"Reading: sốc văn hoá",w:"personal choice",p:"n phr",ipa:"/ˈpɜːsənl tʃɔɪs/",vi:"lựa chọn cá nhân",ex:"Where you live after graduation is a personal choice.",exvi:"Sống ở đâu sau khi tốt nghiệp là lựa chọn cá nhân."},
    {g:"Reading: sốc văn hoá",w:"equality",p:"n",ipa:"/iˈkwɒləti/",vi:"sự bình đẳng",ex:"The company believes in equality between men and women.",exvi:"Công ty tin vào sự bình đẳng giữa nam và nữ."},
    {g:"Reading: sốc văn hoá",w:"privacy",p:"n",ipa:"/ˈprɪvəsi/",vi:"sự riêng tư",ex:"Many people value their privacy and don't discuss their salary.",exvi:"Nhiều người coi trọng sự riêng tư và không nói về lương."},
    {g:"Reading: sốc văn hoá",w:"impolite",p:"adj",ipa:"/ˌɪmpəˈlaɪt/",vi:"bất lịch sự",ex:"It is impolite to ask someone how old they are.",exvi:"Hỏi tuổi người khác là bất lịch sự."},
    {g:"Reading: sốc văn hoá",w:"intrigued",p:"adj",ipa:"/ɪnˈtriːɡd/",vi:"tò mò, bị cuốn hút",ex:"I was intrigued by the street food stalls.",exvi:"Tôi bị cuốn hút bởi những quầy đồ ăn đường phố."},
    {g:"Reading: sốc văn hoá",w:"novelty",p:"n",ipa:"/ˈnɒvlti/",vi:"sự mới lạ",ex:"The novelty of living alone soon wore off.",exvi:"Sự mới lạ của việc sống một mình nhanh chóng phai nhạt."},
    {g:"Reading: sốc văn hoá",w:"inevitable",p:"adj",ipa:"/ɪnˈevɪtəbl/",vi:"không thể tránh khỏi",ex:"Some mistakes are inevitable when you learn a language.",exvi:"Một số lỗi là không thể tránh khỏi khi học ngoại ngữ."},
    {g:"Reading: sốc văn hoá",w:"frustration",p:"n",ipa:"/frʌˈstreɪʃn/",vi:"sự bực bội, nản lòng",ex:"Not understanding the bus timetable caused a lot of frustration.",exvi:"Không hiểu lịch xe buýt khiến tôi rất bực bội."},
    {g:"Reading: sốc văn hoá",w:"irritable",p:"adj",ipa:"/ˈɪrɪtəbl/",vi:"dễ cáu",ex:"I get irritable when I don't sleep enough.",exvi:"Tôi dễ cáu khi ngủ không đủ."},
    {g:"Reading: sốc văn hoá",w:"adapt to",p:"v phr",ipa:"/əˈdæpt tə/",vi:"thích nghi với",ex:"Children usually adapt to a new school quickly.",exvi:"Trẻ em thường thích nghi với trường mới nhanh chóng."},
    {g:"Reading: sốc văn hoá",w:"subtle",p:"adj",ipa:"/ˈsʌtl/",vi:"tinh tế, khó nhận ra",ex:"There are subtle differences between the two dialects.",exvi:"Có những khác biệt tinh tế giữa hai phương ngữ."},
    {g:"Reading: sốc văn hoá",w:"self-confidence",p:"n",ipa:"/ˌself ˈkɒnfɪdəns/",vi:"sự tự tin",ex:"Working part-time gave her more self-confidence.",exvi:"Đi làm thêm giúp cô ấy tự tin hơn."},
    {g:"Speaking Part 1",w:"be away from",p:"v phr",ipa:"/biː əˈweɪ frəm/",vi:"xa (ai, nơi nào)",ex:"I find it hard being away from my family.",exvi:"Tôi thấy khó khăn khi phải xa gia đình."},
    {g:"Speaking Part 1",w:"get to (a place)",p:"v phr",ipa:"/ɡet tə/",vi:"đi đến (nơi nào)",ex:"How do you get to college every day?",exvi:"Hằng ngày bạn đi đến trường bằng cách nào?"},
    {g:"Writing Task 1: giới thiệu biểu đồ",w:"line graph",p:"n phr",ipa:"/laɪn ɡrɑːf/",vi:"biểu đồ đường",ex:"The line graph shows changes in visitor numbers.",exvi:"Biểu đồ đường thể hiện sự thay đổi số lượng du khách."},
    {g:"Writing Task 1: giới thiệu biểu đồ",w:"pie chart",p:"n phr",ipa:"/paɪ tʃɑːt/",vi:"biểu đồ tròn",ex:"The pie chart shows the languages spoken at home.",exvi:"Biểu đồ tròn thể hiện các ngôn ngữ được dùng ở nhà."},
    {g:"Writing Task 1: giới thiệu biểu đồ",w:"bar chart",p:"n phr",ipa:"/bɑː tʃɑːt/",vi:"biểu đồ cột",ex:"The bar chart compares three age groups.",exvi:"Biểu đồ cột so sánh ba nhóm tuổi."},
    {g:"Writing Task 1: giới thiệu biểu đồ",w:"household",p:"n",ipa:"/ˈhaʊshəʊld/",vi:"hộ gia đình",ex:"The table shows the number of households in each town.",exvi:"Bảng thể hiện số hộ gia đình ở mỗi thị trấn."},
    {g:"Writing Task 1: giới thiệu biểu đồ",w:"overview",p:"n",ipa:"/ˈəʊvəvjuː/",vi:"câu/đoạn tổng quan",ex:"Always include an overview of the main trends.",exvi:"Luôn có một đoạn tổng quan về các xu hướng chính."},
    {g:"Writing Task 1: giới thiệu biểu đồ",w:"problematic",p:"adj",ipa:"/ˌprɒbləˈmætɪk/",vi:"gây khó khăn, có vấn đề",ex:"Learning the language was the most problematic area.",exvi:"Học ngôn ngữ là mảng gây khó khăn nhất."},
    {g:"Ôn tập Unit 1",w:"newcomer",p:"n",ipa:"/ˈnjuːkʌmə/",vi:"người mới đến",ex:"The newcomers were given a tour of the campus.",exvi:"Những người mới đến được dẫn đi tham quan khuôn viên trường."},
    {g:"Ôn tập Unit 1",w:"overseas",p:"adj",ipa:"/ˌəʊvəˈsiːz/",vi:"(thuộc) nước ngoài",ex:"Overseas students often have accommodation problems.",exvi:"Sinh viên nước ngoài thường gặp vấn đề về chỗ ở."}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u1 = {
  tips:{
    reading:[
      {type:"True / False / Not Given", tips:[
        "Gạch chân từ khoá trong câu hỏi rồi tìm đúng đoạn trong bài. Câu hỏi đi theo thứ tự của bài.",
        "TRUE: bài nói cùng ý (thường bằng từ khác). FALSE: bài nói ngược lại. NOT GIVEN: bài không có thông tin đó.",
        "Đừng dùng hiểu biết của bản thân. Chỉ dựa vào những gì bài viết nói.",
        "Cẩn thận với các từ như only, all, always, more than: một từ nhỏ có thể biến câu thành FALSE."
      ]},
      {type:"Table completion", tips:[
        "Kiểm tra giới hạn số từ (ví dụ NO MORE THAN TWO WORDS) trước khi điền.",
        "Đọc tiêu đề bảng và tiêu đề cột để biết cần tìm loại thông tin gì.",
        "Chép từ đúng như trong bài, đúng chính tả.",
        "Đọc lại cả hàng sau khi điền để chắc câu đúng ngữ pháp."
      ]}
    ],
    listening:[
      {type:"Form completion (Section 1)", tips:[
        "Section 1 là hội thoại về chủ đề đời sống, có một ví dụ ở đầu bài.",
        "Khi đọc câu hỏi, đoán loại thông tin cần điền: con số, tên riêng, nghề nghiệp hay một hoạt động.",
        "Tên và địa chỉ thường được đánh vần. Hãy chắc là bạn nghe được bảng chữ cái và cách đọc số.",
        "Viết số bằng chữ số (47), không viết bằng chữ."
      ]},
      {type:"Multiple choice", tips:[
        "Trước khi nghe, gạch chân ý chính của câu hỏi.",
        "Đáp án đúng thường được diễn đạt bằng từ khác với từ trong câu hỏi.",
        "Người nói thường nhắc đến cả ba phương án. Hãy nghe kỹ phương án nào thật sự trả lời câu hỏi."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 1", tips:[
        "Đưa ra lý do cho câu trả lời.",
        "Thêm chi tiết: thời gian, ví dụ, cảm nhận.",
        "Dùng từ của bạn, đừng lặp lại y nguyên câu hỏi.",
        "Nói rõ ràng và tỏ ra hứng thú với điều mình nói. Nhấn giọng vào từ mang thông tin trả lời."
      ]}
    ],
    writing:[
      {type:"Writing Task 1: tóm tắt biểu đồ", tips:[
        "Viết một đoạn mở ngắn nói biểu đồ thể hiện gì, bằng từ của bạn (problems → difficulties).",
        "So sánh những thông tin quan trọng và đưa số liệu từ biểu đồ vào bài.",
        "Không tự đưa ra lý do cho số liệu nếu đề không cho thông tin đó.",
        "Lên dàn ý trước: mỗi đoạn trả lời một câu hỏi (vấn đề lớn nhất của từng nhóm là gì? so với nhóm khác thế nào?).",
        "Viết ít nhất 150 từ trong khoảng 20 phút."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"Many students' studies are effected by language difficulties.", good:"Many students' studies are affected by language difficulties.", why:"affect là động từ (ảnh hưởng đến), effect là danh từ."},
    {k:"vocab", bad:"Modern lifestyles have an affect on our health.", good:"Modern lifestyles have an effect on our health.", why:"Sau an / have an … on dùng danh từ effect."},
    {k:"vocab", bad:"We had a trouble finding the hostel.", good:"We had some trouble finding the hostel.", why:"trouble hầu như không đếm được, không dùng a trouble. Dùng a problem nếu muốn đếm."},
    {k:"vocab", bad:"The number rose to approximately 58 percents.", good:"The number rose to approximately 58 percent.", why:"percent không thêm -s."},
    {k:"vocab", bad:"By 1995 the figure had fallen to a two percent.", good:"By 1995 the figure had fallen to two percent.", why:"Không dùng a trước con số + percent."},
    {k:"vocab", bad:"The graph shows the increase in the percent of people who used trains.", good:"The graph shows the increase in the percentage of people who used trains.", why:"Không có con số đứng trước → percentage."},
    {k:"grammar", bad:"I can read English easyier than before.", good:"I can read English more easily than before.", why:"Trạng từ easily → more easily."},
    {k:"grammar", bad:"The most highest percentage appeared in 1991.", good:"The highest percentage appeared in 1991.", why:"Không dùng most cùng với -est."},
    {k:"grammar", bad:"Workers' salaries got worser in 2001.", good:"Workers' salaries got worse in 2001.", why:"bad → worse → the worst."},
    {k:"grammar", bad:"I want a more well job in the future.", good:"I want a better job in the future.", why:"good/well → better."}
  ],
  fix:[
    {t:"gap", q:"Pollution seriously effects the environment. → Sửa: ___", a:["affects"], e:"Động từ → affect(s)."},
    {t:"gap", q:"Global warming is one of the affects of pollution. → Sửa: ___", a:["effects"], e:"Danh từ số nhiều → effects."},
    {t:"gap", q:"Immigrants have an affect on the local economy. → Sửa: ___", a:["effect","an effect"], e:"have an effect on."},
    {t:"gap", q:"On the other hand, socialising rose sharply to 25 percentage. → Sửa: ___", a:["percent","25 percent","per cent"], e:"Sau con số → percent."},
    {t:"gap", q:"It is surprising that percentage of people watching TV remained the same. → Sửa: ___", a:["the percentage"], e:"Cần the trước percentage."},
    {t:"gap", q:"Living in the country is the better way to learn the language. → Sửa: ___", a:["the best","best"], e:"So sánh nhất → the best."},
    {t:"gap", q:"Travelling is becoming more clean and safe. → Sửa: ___", a:["cleaner and safer"], e:"Tính từ một âm tiết → -er."},
    {t:"gap", q:"My new flat is more big than my old one. → Sửa: ___", a:["bigger"], e:"big → bigger."},
    {t:"gap", q:"This is the most cheap restaurant near the campus. → Sửa: ___", a:["the cheapest","cheapest"], e:"cheap → the cheapest."},
    {t:"gap", q:"Local people are friendlyer than I expected. → Sửa: ___", a:["friendlier"], e:"-y → -ier."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u1 = [
  {q:"Rent in the city centre is ___ than in the suburbs.",o:["higher","more high","highest"],a:0,e:"high một âm tiết → higher.",k:"c"},
  {q:"This is ___ course I have ever taken.",o:["the most difficult","the difficultest","more difficult"],a:0,e:"Tính từ dài → the most.",k:"c"},
  {q:"The second month was ___ than the first.",o:["worse","more bad","worst"],a:0,e:"bad → worse.",k:"c"},
  {q:"Our new neighbourhood is much ___ than the old one.",o:["quieter","more quiet","quietest"],a:0,e:"quiet → quieter (thường dùng).",k:"c"},
  {q:"Hanoi is ___ city I have ever lived in.",o:["the busiest","the most busy","busier"],a:0,e:"busy → the busiest.",k:"c"},
  {q:"Students over 30 had ___ problems than younger students.",o:["fewer","less","least"],a:0,e:"problems đếm được → fewer.",k:"c"},
  {q:"Older people had ___ trouble making friends.",o:["less","fewer","the fewer"],a:0,e:"trouble không đếm được → less.",k:"c"},
  {q:"The figure for women was ___ lower than for men.",o:["slightly","slight","more"],a:0,e:"slightly + so sánh hơn.",k:"c"},
  {q:"My English is ___ better now than last year.",o:["far","very","more"],a:0,e:"far/much + so sánh hơn; không dùng very.",k:"c"},
  {q:"She speaks ___ than her brother.",o:["more fluently","fluenter","most fluently"],a:0,e:"Trạng từ -ly → more + adv.",k:"c"},
  {q:"Of the three groups, the youngest had ___ problems.",o:["the most","more","most of"],a:0,e:"So sánh nhất trong 3 nhóm → the most.",k:"c"},
  {q:"Learning a language is not as ___ as people think.",o:["easy","easier","easiest"],a:0,e:"as + adj gốc + as.",k:"c"},
  {t:"gap",q:"Finding a flat was ___ (hard) than finding a job.",a:["harder"],e:"hard → harder.",k:"g"},
  {t:"gap",q:"Language was ___ (big) problem for the oldest group.",a:["the biggest"],e:"big → the biggest (gấp đôi g).",k:"g"},
  {t:"gap",q:"The weather here is ___ (wet) than at home.",a:["wetter"],e:"wet → wetter.",k:"g"},
  {t:"gap",q:"Making friends became ___ (easy) after I joined a club.",a:["easier"],e:"easy → easier.",k:"g"},
  {t:"gap",q:"This was ___ (good) year of my life.",a:["the best"],e:"good → the best.",k:"g"},
  {t:"gap",q:"Public transport here is ___ (reliable) than in my country.",a:["more reliable"],e:"Tính từ dài → more.",k:"g"},
  {t:"gap",q:"The museum is ___ (far) from the campus than the library.",a:["further","farther"],e:"far → further/farther.",k:"g"},
  {t:"gap",q:"Money was ___ (serious) concern for students over 30.",a:["the most serious"],e:"the most + adj dài.",k:"g"},
  {t:"gap",q:"Young people adapt ___ (quickly) than older people.",a:["more quickly"],e:"Trạng từ → more quickly.",k:"g"},
  {q:"Câu nào đúng?",o:["The most highest figure was in 2010.","The highest figure was in 2010."],a:1,e:"Không dùng most với -est.",k:"s"},
  {q:"Câu nào đúng?",o:["Food here is more cheaper than in London.","Food here is much cheaper than in London."],a:1,e:"much + so sánh hơn; không dùng more với -er.",k:"s"},
  {q:"Câu nào đúng?",o:["Salaries got worser in 2009.","Salaries got worse in 2009."],a:1,e:"bad → worse.",k:"s"},
  {q:"Câu nào đúng?",o:["She is the most intelligent student in the class.","She is the intelligentest student in the class."],a:0,e:"Tính từ dài → the most.",k:"s"},
  {q:"Câu nào đúng?",o:["My room is as big as yours.","My room is as bigger as yours."],a:0,e:"as + tính từ gốc + as.",k:"s"},
  {q:"Câu nào đúng?",o:["Fewer people over 55 had this problem.","Less people over 55 had this problem."],a:0,e:"people đếm được → fewer.",k:"s"},
  {q:"Câu nào đúng?",o:["I want to find a more good job.","I want to find a better job."],a:1,e:"good → better.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u1:abroad":{s:["overseas","in another country"],a:["at home","domestically"]},
  "b2u1:adjust":{s:["adapt","get used to"]},
  "b2u1:concern":{s:["worry","issue"]},
  "b2u1:customs":{s:["traditions","practices"]},
  "b2u1:evidence":{s:["proof","data"]},
  "b2u1:give rise to":{s:["cause","lead to","result in"]},
  "b2u1:go wrong":{s:["fail","break down"],a:["go well","work out"]},
  "b2u1:immigrant":{s:["newcomer","settler"],a:["native","emigrant"]},
  "b2u1:notice":{s:["see","observe","spot"],a:["ignore","overlook"]},
  "b2u1:point of view":{s:["opinion","view","perspective"]},
  "b2u1:process":{s:["procedure","series of stages"]},
  "b2u1:seek out":{s:["look for","search for"]},
  "b2u1:stage":{s:["phase","period","step"]},
  "b2u1:stand out":{s:["be noticeable","be obvious"],a:["blend in"]},
  "b2u1:surroundings":{s:["environment","setting"]},
  "b2u1:take action":{s:["act","do something"],a:["do nothing","ignore"]},
  "b2u1:work out":{s:["figure out","solve","understand"]},
  "b2u1:homesick":{s:["missing home"]},
  "b2u1:independence":{s:["self-reliance","freedom"],a:["dependence"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u1|Settling In: A Guide for International Students"] = [["adjust","v","thích nghi"],["surroundings","n","môi trường xung quanh"],["new arrival","n phr","người mới đến"],["similarity","n","điểm giống nhau"],["frustration","n","sự bực bội"],["option","n","lựa chọn"],["homesick","adj","nhớ nhà"],["unwritten rules","n phr","những quy tắc ngầm"],["lecturer","n","giảng viên"],["accommodation","n","chỗ ở"],["customs","n","phong tục"],["previously","adv","trước đây"],["society","n","hội, câu lạc bộ (ở trường)"],["former students","n phr","cựu sinh viên"],["academic year","n phr","năm học"]];
})();
