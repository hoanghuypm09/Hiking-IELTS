/* Complete IELTS Bands 5–6.5 · Unit 7: Relationships.
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u7", title:"Relationships", vi:"Các mối quan hệ",
  focus:{reading:"Matching headings · Matching features · Sentence completion", listening:"Section 3: Multiple choice · Flow-chart completion (nghe tín hiệu báo đáp án)", speaking:"Part 1: dùng câu mở đầu (openers) và diễn đạt vòng khi quên từ", writing:"Task 1: so sánh hai biểu đồ, dùng từ quy chiếu (it, they, this, these…)", vocab:"age(s) / aged / age group", pron:"Sentence stress 3: nhấn để nhấn mạnh và để tạo đối lập"},
  vocab:[
    {g:"Word list của sách",w:"blame (for)",p:"v",ipa:"/bleɪm/",vi:"đổ lỗi (cho ai về việc gì)",ex:"Don't blame your sister for your own mistakes.",exvi:"Đừng đổ lỗi cho em gái về lỗi của chính mình."},
    {g:"Word list của sách",w:"broadcast",p:"v",ipa:"/ˈbrɔːdkɑːst/",vi:"phát sóng",ex:"The interview was broadcast on radio and TV.",exvi:"Cuộc phỏng vấn được phát sóng trên đài và truyền hình."},
    {g:"Word list của sách",w:"clue",p:"n",ipa:"/kluː/",vi:"manh mối, dấu hiệu",ex:"The words people use are the real clue to a lie.",exvi:"Từ ngữ người ta dùng mới là manh mối thật sự của lời nói dối."},
    {g:"Word list của sách",w:"confess",p:"v",ipa:"/kənˈfes/",vi:"thú nhận",ex:"In the end, he confessed that he had broken the vase.",exvi:"Cuối cùng, cậu ấy thú nhận đã làm vỡ chiếc bình."},
    {g:"Word list của sách",w:"consistent",p:"adj",ipa:"/kənˈsɪstənt/",vi:"nhất quán, giống nhau",ex:"The results of the surveys were remarkably consistent.",exvi:"Kết quả các cuộc khảo sát giống nhau một cách đáng kinh ngạc."},
    {g:"Word list của sách",w:"deal with",p:"phrasal v",ipa:"/diːl wɪð/",vi:"đối phó, xử lý (với ai/việc gì)",ex:"It's hard to deal with people who lie all the time.",exvi:"Thật khó đối phó với những người lúc nào cũng nói dối."},
    {g:"Word list của sách",w:"deception",p:"n",ipa:"/dɪˈsepʃn/",vi:"sự lừa dối",ex:"Very few people can detect deception.",exvi:"Rất ít người phát hiện được sự lừa dối."},
    {g:"Word list của sách",w:"detect",p:"v",ipa:"/dɪˈtekt/",vi:"phát hiện",ex:"Can you detect when a friend is lying?",exvi:"Bạn có phát hiện được khi bạn mình nói dối không?"},
    {g:"Word list của sách",w:"display",p:"v",ipa:"/dɪˈspleɪ/",vi:"thể hiện, biểu lộ",ex:"Liars don't always display nervous behaviour.",exvi:"Người nói dối không phải lúc nào cũng biểu lộ sự lo lắng."},
    {g:"Word list của sách",w:"episode",p:"n",ipa:"/ˈepɪsəʊd/",vi:"sự việc, tình huống",ex:"In another episode, the chimp hid the food under a blanket.",exvi:"Trong một tình huống khác, con tinh tinh giấu thức ăn dưới tấm chăn."},
    {g:"Word list của sách",w:"globalisation",p:"n",ipa:"/ˌɡləʊbəlaɪˈzeɪʃn/",vi:"toàn cầu hoá",ex:"Globalisation has changed the way families keep in touch.",exvi:"Toàn cầu hoá đã thay đổi cách các gia đình giữ liên lạc."},
    {g:"Word list của sách",w:"gorilla",p:"n",ipa:"/ɡəˈrɪlə/",vi:"khỉ đột",ex:"Gorillas live in family groups.",exvi:"Khỉ đột sống theo nhóm gia đình."},
    {g:"Word list của sách",w:"incident",p:"n",ipa:"/ˈɪnsɪdənt/",vi:"sự cố, vụ việc",ex:"Nobody wanted to talk about the incident.",exvi:"Không ai muốn nói về vụ việc đó."},
    {g:"Word list của sách",w:"intentional",p:"adj",ipa:"/ɪnˈtenʃənl/",vi:"cố ý",ex:"Was the mistake intentional or an accident?",exvi:"Lỗi đó là cố ý hay vô tình?"},
    {g:"Word list của sách",w:"in the wild",p:"phrase",ipa:"/ɪn ðə waɪld/",vi:"trong tự nhiên, ngoài hoang dã",ex:"Apes in the wild also deceive each other.",exvi:"Loài vượn ngoài tự nhiên cũng lừa nhau."},
    {g:"Word list của sách",w:"involve",p:"v",ipa:"/ɪnˈvɒlv/",vi:"liên quan, bao gồm, tham gia",ex:"The project involves interviewing people of different ages.",exvi:"Dự án bao gồm việc phỏng vấn người ở nhiều độ tuổi."},
    {g:"Word list của sách",w:"journal",p:"n",ipa:"/ˈdʒɜːnl/",vi:"tạp chí chuyên ngành",ex:"I've read two journal articles on friendship.",exvi:"Tôi đã đọc hai bài báo khoa học về tình bạn."},
    {g:"Word list của sách",w:"laboratory",p:"n",ipa:"/ləˈbɒrətri/",vi:"phòng thí nghiệm",ex:"The children were tested in a laboratory.",exvi:"Bọn trẻ được kiểm tra trong phòng thí nghiệm."},
    {g:"Word list của sách",w:"linguistic skills",p:"n phr",ipa:"/lɪŋˈɡwɪstɪk skɪlz/",vi:"kỹ năng ngôn ngữ",ex:"Children's linguistic skills develop quickly after the age of two.",exvi:"Kỹ năng ngôn ngữ của trẻ phát triển nhanh sau hai tuổi."},
    {g:"Word list của sách",w:"liar",p:"n",ipa:"/ˈlaɪə/",vi:"kẻ nói dối",ex:"Liars tend to give fewer details.",exvi:"Người nói dối thường đưa ra ít chi tiết hơn."},
    {g:"Word list của sách",w:"overview",p:"n",ipa:"/ˈəʊvəvjuː/",vi:"cái nhìn tổng quan",ex:"Start your project with an overview of the topic.",exvi:"Hãy mở đầu dự án bằng phần tổng quan về chủ đề."},
    {g:"Word list của sách",w:"practical work",p:"n phr",ipa:"/ˈpræktɪkl wɜːk/",vi:"phần thực hành",ex:"The course includes a lot of practical work.",exvi:"Khoá học có nhiều phần thực hành."},
    {g:"Word list của sách",w:"predict",p:"v",ipa:"/prɪˈdɪkt/",vi:"dự đoán",ex:"It's difficult to predict how friendships will change.",exvi:"Khó dự đoán tình bạn sẽ thay đổi thế nào."},
    {g:"Word list của sách",w:"psychologically",p:"adv",ipa:"/ˌsaɪkəˈlɒdʒɪkli/",vi:"về mặt tâm lý",ex:"Liars try psychologically to keep a distance from their lies.",exvi:"Về mặt tâm lý, người nói dối cố giữ khoảng cách với lời nói dối của mình."},
    {g:"Word list của sách",w:"research programme",p:"n phr",ipa:"/rɪˈsɜːtʃ ˈprəʊɡræm/",vi:"chương trình nghiên cứu",ex:"The university started a research programme on animal communication.",exvi:"Trường đại học bắt đầu một chương trình nghiên cứu về giao tiếp của động vật."},
    {g:"Word list của sách",w:"set up",p:"phrasal v",ipa:"/set ʌp/",vi:"sắp đặt, chuẩn bị (thiết bị)",ex:"The researcher set up a toy behind the child.",exvi:"Nhà nghiên cứu đặt một món đồ chơi phía sau đứa trẻ."},
    {g:"Word list của sách",w:"survey",p:"n",ipa:"/ˈsɜːveɪ/",vi:"cuộc khảo sát",ex:"I'm doing a survey on how students make friends.",exvi:"Tôi đang làm khảo sát về cách sinh viên kết bạn."},
    {g:"Word list của sách",w:"tell the difference",p:"phrase",ipa:"/tel ðə ˈdɪfrəns/",vi:"phân biệt được",ex:"Viewers couldn't tell the difference between the truth and the lie.",exvi:"Khán giả không phân biệt được đâu là thật, đâu là dối."},
    {g:"Word list của sách",w:"a version of",p:"phrase",ipa:"/ə ˈvɜːʃn əv/",vi:"một phiên bản của",ex:"They taught the apes a simple version of sign language.",exvi:"Họ dạy loài vượn một phiên bản đơn giản của ngôn ngữ ký hiệu."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"annoyed",p:"adj",ipa:"/əˈnɔɪd/",vi:"bực mình",ex:"She looks annoyed because he's late again.",exvi:"Cô ấy trông bực mình vì anh ta lại đến muộn."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"anxious",p:"adj",ipa:"/ˈæŋkʃəs/",vi:"lo âu",ex:"I always feel anxious before an exam.",exvi:"Tôi luôn thấy lo âu trước kỳ thi."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"concerned",p:"adj",ipa:"/kənˈsɜːnd/",vi:"lo lắng, quan tâm",ex:"His parents are concerned about his health.",exvi:"Bố mẹ cậu ấy lo lắng cho sức khoẻ của cậu."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"upset",p:"adj",ipa:"/ʌpˈset/",vi:"buồn, khó chịu",ex:"She was upset when her friend forgot her birthday.",exvi:"Cô ấy buồn khi bạn quên sinh nhật mình."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"argumentative",p:"adj",ipa:"/ˌɑːɡjuˈmentətɪv/",vi:"hay cãi",ex:"He's being very argumentative today.",exvi:"Hôm nay anh ta cãi lý suốt."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"irritating",p:"adj",ipa:"/ˈɪrɪteɪtɪŋ/",vi:"gây khó chịu",ex:"It's irritating when people check their phones during dinner.",exvi:"Thật khó chịu khi người ta xem điện thoại trong bữa tối."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"persuasive",p:"adj",ipa:"/pəˈsweɪsɪv/",vi:"có sức thuyết phục",ex:"She made a very persuasive argument.",exvi:"Cô ấy đưa ra một lập luận rất thuyết phục."},
    {g:"Tính từ miêu tả cảm xúc & thái độ",w:"reassuring",p:"adj",ipa:"/ˌriːəˈʃʊərɪŋ/",vi:"làm yên lòng",ex:"It's reassuring to know she has good colleagues.",exvi:"Thật yên lòng khi biết cô ấy có đồng nghiệp tốt."},
    {g:"age(s) / aged / age group",w:"age",p:"n",ipa:"/eɪdʒ/",vi:"tuổi (at the age of 16, people of all ages)",ex:"I met my best friend at the age of 16.",exvi:"Tôi gặp bạn thân nhất năm 16 tuổi."},
    {g:"age(s) / aged / age group",w:"aged",p:"adj",ipa:"/eɪdʒd/",vi:"ở độ tuổi (children aged 4 to 6)",ex:"The survey asked people aged between 35 and 40.",exvi:"Cuộc khảo sát hỏi những người từ 35 đến 40 tuổi."},
    {g:"age(s) / aged / age group",w:"age group",p:"n",ipa:"/eɪdʒ ɡruːp/",vi:"nhóm tuổi (the 20–35 age group)",ex:"Most of my colleagues are in the 20–35 age group.",exvi:"Phần lớn đồng nghiệp của tôi thuộc nhóm tuổi 20–35."}
  ],
  phrases:[
    {g:"Openers (Speaking Part 1)",w:"That's an interesting question.",p:"opener",ipa:"/ðæts ən ˈɪntrəstɪŋ ˈkwestʃən/",vi:"Câu hỏi thú vị đấy. (khi thích câu hỏi)",ex:"That's an interesting question. I've never really thought about it.",exvi:"Câu hỏi thú vị đấy. Tôi chưa bao giờ thực sự nghĩ về điều đó."},
    {g:"Openers (Speaking Part 1)",w:"Let me see…",p:"opener",ipa:"/let mi siː/",vi:"Để tôi nghĩ xem… (cần thời gian suy nghĩ)",ex:"Let me see… it's hard to remember, but I think it was last summer.",exvi:"Để tôi nghĩ xem… khó nhớ quá, nhưng tôi nghĩ là hè năm ngoái."},
    {g:"Openers (Speaking Part 1)",w:"Could you repeat the question?",p:"opener",ipa:"/kʊd ju rɪˈpiːt ðə ˈkwestʃən/",vi:"Bạn có thể nhắc lại câu hỏi không? (chưa hiểu câu hỏi)",ex:"I'm sorry, could you repeat the question?",exvi:"Xin lỗi, bạn có thể nhắc lại câu hỏi không?"},
    {g:"Openers (Speaking Part 1)",w:"It depends on what you mean by…",p:"opener",ipa:"/ɪt dɪˈpendz ɒn wɒt ju miːn baɪ/",vi:"Còn tuỳ bạn hiểu … là gì (câu hỏi hiểu theo nhiều cách)",ex:"It depends on what you mean by successful. If you mean rich, then it's my uncle.",exvi:"Còn tuỳ bạn hiểu 'thành công' là gì. Nếu là giàu thì đó là chú tôi."},
    {g:"Openers (Speaking Part 1)",w:"Generally speaking,…",p:"opener",ipa:"/ˈdʒenrəli ˈspiːkɪŋ/",vi:"Nói chung là… (nói về điều thường xảy ra)",ex:"Generally speaking, I see my cousins at Tet.",exvi:"Nói chung là tôi gặp các anh chị em họ vào dịp Tết."},
    {g:"Diễn đạt vòng khi quên từ",w:"It's a kind of…",p:"phrase",ipa:"/ɪts ə kaɪnd əv/",vi:"Đó là một loại… (định nghĩa)",ex:"It's a kind of train that goes under the city.",exvi:"Đó là một loại tàu chạy dưới lòng thành phố."},
    {g:"Diễn đạt vòng khi quên từ",w:"It's not exactly…, but…",p:"phrase",ipa:"/ɪts nɒt ɪɡˈzæktli bʌt/",vi:"Nó không hẳn là…, nhưng… (nói X không phải là gì)",ex:"It's not exactly the countryside, but it's not the city centre either.",exvi:"Nó không hẳn là nông thôn, nhưng cũng không phải trung tâm thành phố."},
    {g:"Diễn đạt vòng khi quên từ",w:"You use it for…",p:"phrase",ipa:"/ju juːz ɪt fɔː/",vi:"Bạn dùng nó để… (nói công dụng)",ex:"You use it for opening bottles.",exvi:"Bạn dùng nó để mở chai."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"tell a lie / tell the truth",p:"collocation",ipa:"/tel ə laɪ/",vi:"nói dối / nói thật",ex:"Most people tell a lie at least once a day.",exvi:"Hầu hết mọi người nói dối ít nhất một lần mỗi ngày."},
    {g:"Động từ + danh từ",w:"make friends",p:"collocation",ipa:"/meɪk frendz/",vi:"kết bạn",ex:"It's easier to make friends at school than at work.",exvi:"Kết bạn ở trường dễ hơn ở chỗ làm."},
    {g:"Động từ + danh từ",w:"keep in touch",p:"collocation",ipa:"/kiːp ɪn tʌtʃ/",vi:"giữ liên lạc",ex:"I keep in touch with old classmates online.",exvi:"Tôi giữ liên lạc với bạn học cũ qua mạng."},
    {g:"Động từ + giới từ",w:"get on (well) with",p:"phrasal v",ipa:"/ɡet ɒn wɪð/",vi:"hoà hợp với",ex:"I get on well with my sister.",exvi:"Tôi rất hợp với chị gái."},
    {g:"Động từ + giới từ",w:"fall out with",p:"phrasal v",ipa:"/fɔːl aʊt wɪð/",vi:"cãi nhau, bất hoà với",ex:"I fell out with my roommate over the cleaning.",exvi:"Tôi cãi nhau với bạn cùng phòng chuyện dọn dẹp."},
    {g:"Tính từ + danh từ",w:"close friend",p:"collocation",ipa:"/kləʊs frend/",vi:"bạn thân",ex:"Only a few close friends know about it.",exvi:"Chỉ vài người bạn thân biết chuyện đó."},
    {g:"Tính từ + danh từ",w:"body language",p:"collocation",ipa:"/ˈbɒdi ˈlæŋɡwɪdʒ/",vi:"ngôn ngữ cơ thể",ex:"Her body language suggests she's bored.",exvi:"Ngôn ngữ cơ thể của cô ấy cho thấy cô ấy chán."}
  ],
  grammar:{
    title:"Zero, first and second conditionals",
    rules:[
      {h:"Zero conditional: điều luôn đúng",use:["Sự thật, thói quen, điều luôn xảy ra khi điều kiện xảy ra","if có thể thay bằng when"],form:"If + present simple, present simple",ex:"We meet up in the city if there's a birthday.",sig:"luôn luôn, thường lệ"},
      {h:"First conditional: điều có khả năng xảy ra",use:["Tình huống có thật, có thể xảy ra ở hiện tại/tương lai","Mệnh đề chính có thể dùng will, may, might, can, câu mệnh lệnh"],form:"If + present simple, will / may / might + V",ex:"If I don't go out this evening, I'll have dinner with my sister.",sig:"không dùng will sau if"},
      {h:"Second conditional: điều không có thật / khó xảy ra",use:["Tình huống tưởng tượng ở hiện tại hoặc ít khả năng xảy ra","Có thể dùng were cho mọi ngôi (If I were you…)"],form:"If + past simple, would / could / might + V",ex:"I'd do well if I worked harder.",sig:"không dùng would sau if"},
      {h:"unless = if … not",use:["unless mang nghĩa phủ định, nên động từ sau nó ở thể khẳng định"],form:"You won't pass unless you study. (= if you don't study)",ex:"You shouldn't give up unless you find it too hard.",sig:"không dùng will sau unless"}
    ],
    quiz:[
      {q:"Globalisation can only happen if people ___ the same way.",o:["think","will think","would think"],a:0,e:"Không dùng will sau if."},
      {q:"If people ___ with each other all the time, the world would be boring.",o:["agreed","would agree","agree"],a:0,e:"Câu điều kiện loại 2: if + quá khứ đơn."},
      {q:"Some teenagers think that if they leave home, they ___ unhappy.",o:["will be","would be","are being"],a:0,e:"if + hiện tại đơn → will."},
      {q:"People ___ more friends if they were rich.",o:["would have","have","will have"],a:0,e:"Mệnh đề if ở quá khứ → would + V."},
      {q:"If you only think about yourself, you never ___ other people.",o:["understand","understood","would understood"],a:0,e:"Zero conditional: điều luôn đúng."},
      {q:"If Jayne told the truth more often, people ___ her better.",o:["would like","will like","like"],a:0,e:"Loại 2."},
      {q:"If I ___ rich, I'd give a lot of money to charity.",o:["were","am","will be"],a:0,e:"Loại 2, dùng were."},
      {q:"You shouldn't give up the course unless you ___ it too hard.",o:["find","will find","don't find"],a:0,e:"unless + hiện tại đơn, khẳng định."}
    ]
  },
  reading:{
    title:"Can You Spot a Liar?", est:"khoảng 600 từ · 20 phút",
    paras:[
      "A. Deception is not only a human skill. Field researchers have recorded many examples of animals misleading each other in the wild. Some birds pretend to have a broken wing to lead hungry foxes away from their nests. In the 1990s, a team studying chimpanzees at a research station in East Africa set up feeding boxes that only one animal could open at a time. A young male called Bento soon learned to open his box only when the older chimps were looking the other way. On one occasion, when a larger male approached, Bento walked away from the food and sat down as if nothing interesting was happening, before returning once the other animal had gone.",
      "B. Researchers have also asked when lying begins in children. In a well-known type of study, a child is taken into a playroom and an adult places an attractive toy on a table behind them. The adult then leaves the room, saying that the child must not turn round to look at the toy. A hidden camera records what happens. On their return, the adult asks whether the child looked. Most three-year-olds turn round within a minute, and about half of these say that they did not. By the age of six, almost every child who looks also lies about it, and many add convincing details to their story.",
      "C. Most of us are confident that we would know if someone lied to us. To test this, a radio station in Britain once invited its listeners to take part in an experiment. A well-known actor described two holidays he claimed to have taken. One description was true and the other invented. Over 20,000 people telephoned or sent messages to give their verdict. The result was almost exactly 50/50. Like many similar experiments, it suggested that when we try to identify a liar, we might as well toss a coin.",
      "D. One reason for this failure is that most people believe in signs of lying that do not exist. In surveys carried out in dozens of countries, people say the same things: liars avoid eye contact, touch their faces and appear nervous. Yet when researchers compare videos of people telling lies with videos of people telling the truth, these behaviours appear just as often in both groups. Experienced liars, in fact, often make a special effort to look the listener in the eye.",
      "E. So what do liars actually do differently? The most reliable clues are in their language. Because every extra detail might later be checked, liars tend to give shorter accounts with fewer names, places and times. They also seem to keep a psychological distance from what they are saying, and use words such as ‘I’, ‘me’ and ‘my’ less often. In the radio experiment, the actor's false holiday story was barely half the length of the true one, and it contained hardly any references to his own feelings.",
      "F. If the clues are in words rather than movements, it may help to remove the pictures. When the same two holiday descriptions were later printed in a newspaper, readers identified the lie correctly 62% of the time. Those who heard only the audio recording did even better, with an accuracy rate of 71%. Being able to see a speaker, it seems, may actually distract us from what really matters."
    ],
    note:"Bài đọc tự viết để luyện tập; các thí nghiệm được mô tả theo kiểu nghiên cứu nổi tiếng, tên và số liệu là giả định.",
    quiz:[
      {t:"head",text:"Câu 1–6: The passage has six paragraphs, A–F. Choose the correct heading for each paragraph. i Some of the things liars really do · ii When do we begin to lie? · iii How wrong is it to lie? · iv Exposing some false beliefs · v Which form of communication best exposes a lie? · vi Do only humans lie? · vii Dealing with known liars · viii A public test of our ability to spot a lie"},
      {q:"Paragraph A",o:["i","ii","iii","iv","v","vi","vii","viii"],a:5,e:"Động vật cũng lừa dối → Do only humans lie?"},
      {q:"Paragraph B",o:["i","ii","iii","iv","v","vi","vii","viii"],a:1,e:"Trẻ bắt đầu nói dối khi nào."},
      {q:"Paragraph C",o:["i","ii","iii","iv","v","vi","vii","viii"],a:7,e:"Thí nghiệm trên đài phát thanh với hơn 20.000 thính giả."},
      {q:"Paragraph D",o:["i","ii","iii","iv","v","vi","vii","viii"],a:3,e:"Những niềm tin sai về dấu hiệu nói dối."},
      {q:"Paragraph E",o:["i","ii","iii","iv","v","vi","vii","viii"],a:0,e:"Điều người nói dối thực sự làm khác."},
      {q:"Paragraph F",o:["i","ii","iii","iv","v","vi","vii","viii"],a:4,e:"Báo in vs. âm thanh vs. hình ảnh."},
      {t:"head",text:"Câu 7–10: Match each statement with the correct experiment. A the chimpanzee study · B the experiment with children · C the radio experiment. You may use any letter more than once."},
      {q:"Someone was asked not to do something.",o:["A","B","C"],a:1,e:"Đoạn B: 'must not turn round'."},
      {q:"A person described events that never happened.",o:["A","B","C"],a:2,e:"Đoạn C: 'the other invented'."},
      {q:"Equipment was arranged so that only one individual could use it at once.",o:["A","B","C"],a:0,e:"Đoạn A: 'only one animal could open at a time'."},
      {q:"Those taking part were filmed without knowing it.",o:["A","B","C"],a:1,e:"Đoạn B: 'A hidden camera'."},
      {t:"head",text:"Câu 11–13: Complete the sentences. Choose ONE WORD ONLY from the passage."},
      {t:"gap",q:"Videos show that liars do not display more ___ behaviour than people telling the truth.",a:["nervous"],e:"Đoạn D: 'appear nervous… just as often in both groups'."},
      {t:"gap",q:"Liars use the word ‘I’ less often because they want to keep a psychological ___ from their story.",a:["distance"],e:"Đoạn E."},
      {t:"gap",q:"The real signs of lying are in a person's ___ rather than their movements.",a:["language","words"],e:"Đoạn E/F: 'in their language', 'in words rather than movements'."}
    ]
  },
  listening:{
    title:"Section 3 · A project on friendship",
    intro:"Hai sinh viên, Mai và Daniel, bàn về dự án môn tâm lý học của Mai về tình bạn. Chú ý các tín hiệu báo đáp án: The thing about…, That's the trouble…, The first thing…, After that…",
    script:[
      ["Daniel","Hi Mai, you look worried. How's the psychology project going?"],
      ["Mai","Not very well, actually. I chose ‘human relationships’ because it sounded fascinating, and there's loads of information about it. That's the trouble. It's such a big topic that I can't decide what to focus on."],
      ["Daniel","Who's your tutor? Dr Hughes? The thing about Dr Hughes is that he always lets students choose their own titles. He spends time finding out what each person is really interested in, so he'll help you narrow it down."],
      ["Mai","I hope so. So far I've only looked at a few websites, but I haven't opened a single book or journal yet."],
      ["Daniel","What did he say the project must have?"],
      ["Mai","He said the important thing was to include some practical work. A survey, for example, where I interview people of different ages. He didn't mind if there were no graphs or charts."],
      ["Daniel","OK. Look, I've got a lecture now, but tell you what, I'll text you in about an hour and we can meet for a coffee to plan it properly."],
      ["Mai","Great, thanks."],
      ["Daniel","Right, let's make a plan. I think the very first thing you need to do is define friendship. You could do that with a diagram, maybe a mind map, rather than a long paragraph."],
      ["Mai","Good idea. Then what?"],
      ["Daniel","After that, you could give some background, about relationships in the animal world. There's lots of research on apes, for example."],
      ["Mai","And then I could give an overview of the different types of relationship, at work, at home and so on?"],
      ["Daniel","Yes, an overview of the categories. Then the main part. Look at six stages involved in a friendship, how it starts, develops and sometimes ends, and use your survey to support that."],
      ["Mai","And finish with something about the future?"],
      ["Daniel","Yes. The final thing might be to predict the effects of technology on friendship. Everyone's interested in that."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–5: Choose the correct letter, A, B or C."},
      {q:"What problem does Mai have with her project?",o:["A She isn't interested in the topic.","B She can't find enough information.","C She doesn't know what to focus on."],a:2,e:"'That's the trouble… I can't decide what to focus on.' B là bẫy: thông tin thì nhiều."},
      {q:"What does Daniel say about Mai's tutor?",o:["A He explores his students' key interests.","B He is a very hard-working member of staff.","C He uses a limited range of project titles."],a:0,e:"'finding out what each person is really interested in'."},
      {q:"What has Mai already read on her topic?",o:["A book extracts","B journal articles","C internet material"],a:2,e:"'a few websites'."},
      {q:"According to the tutor, the project must include",o:["A some graphic data.","B a bibliography.","C a public survey."],a:2,e:"'the important thing was to include… a survey'."},
      {q:"Mai and Daniel arrange to",o:["A get in contact in about an hour.","B meet up in the library.","C have lunch together."],a:0,e:"'I'll text you in about an hour'."},
      {t:"head",text:"Câu 6–10: Complete the flow chart ‘Mai's plan’. Write NO MORE THAN TWO WORDS for each answer."},
      {t:"gap",q:"Define ___ using a diagram",a:["friendship"]},
      {t:"gap",q:"Background: relationships in the ___, e.g. apes",a:["animal world"]},
      {t:"gap",q:"Present an overview of the ___ of human relationships, e.g. work, home",a:["categories","different types","types"]},
      {t:"gap",q:"Look at six ___ involved in a friendship (plus survey)",a:["stages"]},
      {t:"gap",q:"Predict the future ___ (of technology) on friendship",a:["effects"]}
    ]
  },
  writing:{
    type:"Task 1", min:150, time:"20 phút",
    prompt:"The graph and the chart below show the results of a survey of adults in one country about how satisfied they are with their lives and what they think would make them happiest. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    charts:[
      {type:"line",title:"People ‘very satisfied’ with their lives, by age (%)",cats:["15–20","21–30","31–40","41–50","51–60","61–70"],series:[["Men",[62,55,50,44,52,66]],["Women",[56,54,49,44,53,68]]],max:80,step:20},
      {type:"bar",title:"What would make you happiest? (%)",cats:["15–24","25–44","45–64","65+"],series:[["More money",[55,40,28,15]],["Good health",[12,20,38,52]],["Family & friends",[25,35,30,28]]],max:60,step:10}
    ],
    note:"Số liệu giả định để luyện tập, dựa trên dạng đề trong sách.",
    plan:["Mở bài: giới thiệu cả hai biểu đồ bằng từ của bạn (The graph… while the chart…)","Overview: mức hài lòng theo hình chữ U, thấp nhất ở tuổi trung niên; người trẻ coi tiền quan trọng, người già coi sức khoẻ quan trọng","Thân 1 (graph): nam và nữ có xu hướng giống nhau; khác nhẹ ở tuổi thiếu niên; cùng thấp nhất 44% ở 41–50, cao nhất ở 61–70","Thân 2 (chart): money giảm dần theo tuổi, health tăng dần, hai đường giao nhau ở tuổi trung niên; family ổn định","Dùng từ quy chiếu (this, these, they, their, it, the former/the latter) để tránh lặp","Dùng age group / aged / at the age of đúng cách"],
    model:"The line graph compares the proportion of men and women in different age groups who say they are very satisfied with their lives, while the bar chart shows what people of various ages believe would make them happiest.\n\nOverall, life satisfaction follows a U-shaped pattern, falling to its lowest point in middle age before rising again. It is also clear that money matters most to young people, whereas health becomes the main concern as people get older.\n\nThe trend in life satisfaction is similar for both sexes. However, it differs slightly in the teenage years, when 62% of men are very satisfied compared with 56% of women. After this period, the figures for both groups fall gradually to their lowest point of 44% for those aged 41 to 50. They then rise significantly, reaching a peak of 66% for men and 68% for women in the 61–70 age group.\n\nAs for what would make people happiest, 55% of the youngest age group choose more money, but this figure falls steadily to only 15% among people over 65. The opposite is true of good health, which is chosen by just 12% of 15- to 24-year-olds but by more than half of the oldest group. These two trends therefore cross in middle age. Family and friends remain fairly important at all ages, with figures between 25% and 35%."
  },
  speaking:{
    tip:"Part 1: dùng opener để tránh ngập ngừng (That's an interesting question / Let me see… / It depends on what you mean by… / Generally speaking…), nhưng câu hỏi đơn giản thì trả lời thẳng. Nếu không hiểu câu hỏi, cứ nhờ giám khảo nhắc lại. Khi quên từ, diễn đạt vòng: nói nó không phải là gì, nó dùng để làm gì, hoặc dùng từ gần nghĩa. Nhấn trọng âm vào từ quan trọng để nhấn mạnh (I HATED it) hoặc để đối lập (SHE knows what she wants, whereas I'M still deciding).",
    p1:["Do you come from a large or small family?","When did you last visit relatives?","Who in your family has been most successful?","Are friends important to you? Why / Why not?","How do you communicate with friends?","What makes someone a special friend?"],
    p1sample:{q:"Who in your family has been most successful?",a:"That's an interesting question. It depends on what you mean by successful. If you mean money, then it's definitely my uncle, who runs a factory in Binh Duong. But if you mean happiness, I'd say my grandmother. She's eighty and she still has a garden full of vegetables and lots of friends in the village."},
    cue:{t:"Describe someone who is a really good friend.",pts:["who they are","how you met them","what you do together"],end:"and explain why they are such a good friend."},
    p2sample:"I'd like to talk about my friend Linh, who I've known for almost ten years now. We met at the age of thirteen, on the first day of secondary school, actually. I was new in the city and I didn't know anyone, and she was the one who sat next to me and offered to show me around. Generally speaking, we're very different. She's really outgoing and loves parties, whereas I'm much quieter. But somehow we get on extremely well. These days we're at different universities, so we don't see each other every day, but we keep in touch by video call, and when we're both home for Tet we always go to the same little café, I can't remember the word, it's not exactly a café, more a kind of street stall where you sit on tiny plastic chairs. Anyway, the reason she's such a good friend is that she's completely honest with me. If I make a bad decision, she tells me, but she's never unkind about it. And when my grandfather died last year, she travelled four hours just to be with me. I don't think I'll ever forget that.",
    p3:["Why do people sometimes lie to their friends?","Are all lies equally wrong, or is lying sometimes justified?","How has technology changed the way people make and keep friends?","Do you think friendships between people of different age groups are common?"],
    p3sample:{q:"Are all lies equally wrong, or is lying sometimes justified?",a:"I don't think all lies are equally wrong. If someone lies to get money or to avoid blame, that's clearly wrong. But if you tell a friend that you love the present they gave you when you don't, that's a small lie that protects their feelings. Having said that, I think if people told white lies all the time, it would be hard to trust anyone, so we should be careful."},
    phrases:["That's an interesting question.","Let me see…","It depends on what you mean by…","Generally speaking,…","I'm sorry, could you repeat the question?","It's a kind of… / It's not exactly…, but…"]
  },
  lesson:[
    {g:"Listening: dự án về các mối quan hệ",w:"narrow down",p:"phrasal v",ipa:"/ˈnærəʊ daʊn/",vi:"thu hẹp (phạm vi)",ex:"Your tutor will help you narrow down the topic.",exvi:"Giảng viên sẽ giúp bạn thu hẹp chủ đề."},
    {g:"Listening: dự án về các mối quan hệ",w:"bibliography",p:"n",ipa:"/ˌbɪbliˈɒɡrəfi/",vi:"danh mục tài liệu tham khảo",ex:"Don't forget to add a bibliography at the end.",exvi:"Đừng quên thêm danh mục tài liệu tham khảo ở cuối."},
    {g:"Listening: dự án về các mối quan hệ",w:"extract",p:"n",ipa:"/ˈekstrækt/",vi:"đoạn trích",ex:"I've read some extracts from the book.",exvi:"Tôi đã đọc vài đoạn trích của cuốn sách."},
    {g:"Listening: dự án về các mối quan hệ",w:"define",p:"v",ipa:"/dɪˈfaɪn/",vi:"định nghĩa",ex:"First, define what you mean by friendship.",exvi:"Trước hết, hãy định nghĩa bạn hiểu tình bạn là gì."},
    {g:"Listening: dự án về các mối quan hệ",w:"sibling",p:"n",ipa:"/ˈsɪblɪŋ/",vi:"anh chị em ruột",ex:"Babies form strong relationships with their siblings.",exvi:"Trẻ nhỏ gắn bó chặt chẽ với anh chị em ruột."},
    {g:"Reading: nói dối",w:"deceit",p:"n",ipa:"/dɪˈsiːt/",vi:"sự gian dối",ex:"The study found evidence of intentional deceit.",exvi:"Nghiên cứu tìm thấy bằng chứng về sự cố ý gian dối."},
    {g:"Reading: nói dối",w:"peek",p:"v",ipa:"/piːk/",vi:"nhìn trộm",ex:"Almost all the children peeked at the toy.",exvi:"Hầu hết bọn trẻ đều nhìn trộm món đồ chơi."},
    {g:"Reading: nói dối",w:"avert (your gaze)",p:"v",ipa:"/əˈvɜːt/",vi:"tránh (ánh mắt), nhìn đi chỗ khác",ex:"People think liars avert their gaze.",exvi:"Người ta nghĩ kẻ nói dối hay tránh ánh mắt."},
    {g:"Reading: nói dối",w:"toss a coin",p:"phrase",ipa:"/tɒs ə kɔɪn/",vi:"tung đồng xu",ex:"We might as well toss a coin.",exvi:"Chúng ta có khi cứ tung đồng xu cho xong."},
    {g:"Reading: nói dối",w:"transcript",p:"n",ipa:"/ˈtrænskrɪpt/",vi:"bản ghi lời nói",ex:"Readers of the transcript spotted more lies.",exvi:"Người đọc bản ghi lời nói phát hiện nhiều lời nói dối hơn."},
    {g:"Reading: nói dối",w:"compelling evidence",p:"n phr",ipa:"/kəmˈpelɪŋ ˈevɪdəns/",vi:"bằng chứng thuyết phục",ex:"The results provide compelling evidence that lying starts early.",exvi:"Kết quả là bằng chứng thuyết phục rằng nói dối bắt đầu từ sớm."},
    {g:"Reading: nói dối",w:"accuracy rate",p:"n phr",ipa:"/ˈækjərəsi reɪt/",vi:"tỉ lệ chính xác",ex:"Radio listeners had a 73% accuracy rate.",exvi:"Thính giả đài phát thanh có tỉ lệ chính xác 73%."},
    {g:"Speaking: gia đình & bạn bè",w:"relatives",p:"n",ipa:"/ˈrelətɪvz/",vi:"họ hàng",ex:"We visit our relatives in the countryside at Tet.",exvi:"Chúng tôi về thăm họ hàng ở quê vào dịp Tết."},
    {g:"Speaking: gia đình & bạn bè",w:"only child",p:"n phr",ipa:"/ˈəʊnli tʃaɪld/",vi:"con một",ex:"Being an only child has its advantages.",exvi:"Làm con một cũng có cái lợi."},
    {g:"Speaking: gia đình & bạn bè",w:"suburbs",p:"n",ipa:"/ˈsʌbɜːbz/",vi:"vùng ngoại ô",ex:"My cousins live in the suburbs.",exvi:"Các anh chị họ tôi sống ở ngoại ô."},
    {g:"Speaking: gia đình & bạn bè",w:"decisive",p:"adj",ipa:"/dɪˈsaɪsɪv/",vi:"quyết đoán",ex:"My father is very decisive.",exvi:"Bố tôi rất quyết đoán."},
    {g:"Writing Task 1: sự hài lòng với cuộc sống",w:"life satisfaction",p:"n phr",ipa:"/laɪf ˌsætɪsˈfækʃn/",vi:"mức độ hài lòng với cuộc sống",ex:"Life satisfaction is lowest in middle age.",exvi:"Mức hài lòng với cuộc sống thấp nhất ở tuổi trung niên."},
    {g:"Writing Task 1: sự hài lòng với cuộc sống",w:"peak",p:"n",ipa:"/piːk/",vi:"đỉnh, mức cao nhất",ex:"Scores reach a peak in the 61–70 age group.",exvi:"Điểm số đạt đỉnh ở nhóm tuổi 61–70."},
    {g:"Writing Task 1: sự hài lòng với cuộc sống",w:"the opposite is true of",p:"phrase",ipa:"/ði ˈɒpəzɪt ɪz truː əv/",vi:"điều ngược lại đúng với",ex:"The opposite is true of health.",exvi:"Với sức khoẻ thì điều ngược lại mới đúng."},
    {g:"Writing Task 1: sự hài lòng với cuộc sống",w:"rating",p:"n",ipa:"/ˈreɪtɪŋ/",vi:"mức đánh giá, điểm số",ex:"Married couples gave higher happiness ratings.",exvi:"Các cặp đã kết hôn cho điểm hạnh phúc cao hơn."},
    {g:"Ôn tập Unit 7",w:"get across",p:"phrasal v",ipa:"/ɡet əˈkrɒs/",vi:"băng qua (đường)",ex:"The old woman won't get across the road unless someone helps her.",exvi:"Bà cụ sẽ không qua được đường nếu không ai giúp."},
    {g:"Ôn tập Unit 7",w:"disobey",p:"v",ipa:"/ˌdɪsəˈbeɪ/",vi:"không vâng lời",ex:"Children will disobey an instruction if they think no one is watching.",exvi:"Trẻ sẽ không nghe lời nếu nghĩ không ai đang nhìn."}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u7 = {
  tips:{
    reading:[
      {type:"Matching headings", tips:[
        "Đọc câu đầu và câu cuối mỗi đoạn để nắm ý chính, rồi chọn heading.",
        "Có nhiều heading hơn số đoạn: đừng chọn chỉ vì thấy trùng một từ.",
        "Câu nào chưa làm được, ghi đáp án có thể chọn và quay lại sau. Nhớ chừa thời gian cho các câu khác."
      ]},
      {type:"Matching features", tips:[
        "Đôi khi có nhiều câu hỏi hơn lựa chọn, nên một lựa chọn có thể dùng nhiều lần.",
        "Tìm nhanh và gạch chân các lựa chọn (A, B, C) trong bài.",
        "Đọc kỹ phần bài nói về từng lựa chọn rồi ghép từng câu hỏi với một lựa chọn."
      ]},
      {type:"Sentence completion", tips:[
        "Chép đúng y từ cần dùng trong bài, đúng chính tả.",
        "Không dùng quá số từ cho phép (ONE WORD ONLY → body language là sai).",
        "Kiểm tra câu hoàn chỉnh có đúng ngữ pháp không (nervous behaviour, không phải nervously behaviour)."
      ]}
    ],
    listening:[
      {type:"Multiple choice & flow chart (Section 3)", tips:[
        "Nhìn nhanh số phần và số câu hỏi trong mỗi phần.",
        "Gạch chân ý chính trong câu hỏi (không gạch các lựa chọn A–C).",
        "Nghe các tín hiệu báo đáp án sắp đến: The thing about… / That's the trouble… / The important thing was… / The first thing… / After that…",
        "Câu nào chưa làm được thì bỏ qua, nghe xong rồi quay lại."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 1", tips:[
        "Dùng opener để tránh ngập ngừng và lặp lại, nhưng không cần cho câu hỏi đơn giản.",
        "Khi không nghĩ ra từ, diễn đạt vòng: nó không phải là gì, nó dùng để làm gì, trông thế nào, hoặc dùng từ gần nghĩa.",
        "Dùng trọng âm câu để nhấn mạnh ý hoặc tạo đối lập.",
        "Nếu không hiểu câu hỏi, hãy nhờ giám khảo nhắc lại."
      ]}
    ],
    writing:[
      {type:"Writing Task 1: hai biểu đồ", tips:[
        "Khi có hơn một biểu đồ, tìm điểm giống và khác giữa chúng rồi chọn đặc điểm chính.",
        "Giới thiệu cả hai biểu đồ ở mở bài, sau đó so sánh thông tin trong chúng.",
        "Dùng từ quy chiếu (it, they, this, these, their, one) để tránh lặp.",
        "Dùng từ của mình, không chép tiêu đề; có số liệu; không nêu ý kiến; luôn có overview."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"I met my best friend in age of 16.", good:"I met my best friend at the age of 16.", why:"at the age of + số."},
    {k:"vocab", bad:"People ages between 35 and 40 have many relationships.", good:"People aged between 35 and 40 have many relationships.", why:"aged (tính từ) đứng sau danh từ chỉ người."},
    {k:"vocab", bad:"Most of the people I work with are in the 20–35 aged group.", good:"Most of the people I work with are in the 20–35 age group.", why:"age group (danh từ ghép), số tuổi đứng trước."},
    {k:"vocab", bad:"Relationships are important for the group age 60 and above.", good:"Relationships are important for the 60-and-over age group.", why:"Thứ tự đúng: the + số tuổi + age group."},
    {k:"vocab", bad:"Children in the age group 5 to 11 change friends often.", good:"Children in the 5–11 age group change friends often.", why:"Số tuổi đặt trước age group (hoặc dùng children aged 5 to 11)."},
    {k:"grammar", bad:"Globalisation can only happen if people will all think the same way.", good:"Globalisation can only happen if people all think the same way.", why:"Không dùng will trong mệnh đề if."},
    {k:"grammar", bad:"If people would agree with each other all the time, the world would be boring.", good:"If people agreed with each other all the time, the world would be boring.", why:"Không dùng would trong mệnh đề if; loại 2 dùng quá khứ đơn."},
    {k:"grammar", bad:"Some youngsters think that if they leave home, they would be unhappy.", good:"Some youngsters think that if they leave home, they will be unhappy.", why:"if + hiện tại đơn → will (loại 1)."},
    {k:"grammar", bad:"Some people will not smile if they did not want to.", good:"Some people will not smile if they do not want to.", why:"Không trộn will với quá khứ đơn."},
    {k:"grammar", bad:"People have more friends if they were rich.", good:"People would have more friends if they were rich.", why:"Mệnh đề if ở quá khứ → would + V."}
  ],
  fix:[
    {t:"gap", q:"If you only think about yourself, you never understood other people. → Sửa: ___", a:["understand"], e:"Zero conditional: hiện tại đơn ở cả hai vế."},
    {t:"gap", q:"Petra said she'd join us if she would finish her work in time. → Sửa: ___", a:["finished"], e:"Không dùng would sau if."},
    {t:"gap", q:"The old woman won't get across the road if someone didn't help her. → Sửa: ___", a:["doesn't help","does not help"], e:"Loại 1: if + hiện tại đơn."},
    {t:"gap", q:"Harim's changed so much that if I will meet him now, I wouldn't recognise him. → Sửa: ___", a:["met"], e:"Loại 2: if + quá khứ đơn."},
    {t:"gap", q:"Children will disobey an instruction if they thought no one is watching. → Sửa: ___", a:["think"], e:"Loại 1: if + hiện tại đơn."},
    {t:"gap", q:"You shouldn't give up the course unless you'll find it too hard. → Sửa: ___", a:["find"], e:"Không dùng will sau unless."},
    {t:"gap", q:"Many babies 10–20 months begin to form strong relationships. → Sửa: Many babies ___ 10–20 months", a:["aged"], e:"babies aged 10–20 months."},
    {t:"gap", q:"Are you going to target a particular group of age? → Sửa: a particular ___", a:["age group"], e:"age group."},
    {t:"gap", q:"An organisation will not function well if their members are unhappy. → Sửa: ___", a:["its"], e:"organisation (số ít) → its."},
    {t:"gap", q:"Wherever it occur, it is important that people understand each other. → Sửa: Wherever ___ occur", a:["they"], e:"Quy chiếu về relationships (số nhiều) → they."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u7 = [
  {q:"If you heat ice, it ___.",o:["melts","will melt","would melt"],a:0,e:"Zero conditional: sự thật.",k:"c"},
  {q:"If it rains tomorrow, we ___ at home.",o:["will stay","would stay","stayed"],a:0,e:"Loại 1.",k:"c"},
  {q:"If I ___ you, I'd apologise to her.",o:["were","am","will be"],a:0,e:"Loại 2: If I were you.",k:"c"},
  {q:"What would you do if you ___ a famous person?",o:["met","meet","will meet"],a:0,e:"Loại 2.",k:"c"},
  {q:"If she ___ the bus, she'll be late.",o:["misses","will miss","missed"],a:0,e:"Loại 1: không dùng will sau if.",k:"c"},
  {q:"I ___ more friends if I lived in a big city.",o:["would have","will have","have"],a:0,e:"Loại 2.",k:"c"},
  {q:"You won't make friends ___ you talk to people.",o:["unless","if","when"],a:0,e:"unless = if … not.",k:"c"},
  {q:"My parents get angry if I ___ home late.",o:["come","will come","would come"],a:0,e:"Zero conditional: thói quen.",k:"c"},
  {q:"She was born ___ 2005.",o:["in","at","on"],a:0,e:"in + năm.",k:"c"},
  {q:"He left home ___ the age of 18.",o:["at","in","on"],a:0,e:"at the age of.",k:"c"},
  {q:"The toys are for children ___ four to six.",o:["aged","ages","age"],a:0,e:"aged + số tuổi.",k:"c"},
  {q:"The show appeals to people of all ___.",o:["ages","aged","age group"],a:0,e:"people of all ages.",k:"c"},
  {t:"gap",q:"If you ___ (not plan) your essay, it will be hard to write.",a:["don't plan","do not plan"],e:"Loại 1.",k:"g"},
  {t:"gap",q:"If I ___ (have) more time, I'd learn the guitar.",a:["had"],e:"Loại 2.",k:"g"},
  {t:"gap",q:"Where would you live if you ___ (have) the choice?",a:["had"],e:"Loại 2.",k:"g"},
  {t:"gap",q:"If I keep quiet about the mistake, no one ___ (find out).",a:["will find out"],e:"Loại 1.",k:"g"},
  {t:"gap",q:"If politicians ___ (stop) talking, they might learn something.",a:["stopped"],e:"Loại 2 với might.",k:"g"},
  {t:"gap",q:"My father is very decisive. If he says he'll do something, he ___ (mean) it.",a:["means"],e:"Zero conditional.",k:"g"},
  {t:"gap",q:"The 18 to 25 ___ ___ is the largest group of users.",a:["age group"],e:"age group.",k:"g"},
  {t:"gap",q:"Twelve percent of users are under 17 years of ___.",a:["age"],e:"years of age.",k:"g"},
  {t:"gap",q:"Ninety-seven percent of users are under the ___ of 55.",a:["age"],e:"under the age of.",k:"g"},
  {q:"Câu nào đúng?",o:["If I will see him, I'll tell him.","If I see him, I'll tell him."],a:1,e:"Không dùng will sau if.",k:"s"},
  {q:"Câu nào đúng?",o:["If I had a car, I would drive to work.","If I would have a car, I drove to work."],a:0,e:"Loại 2.",k:"s"},
  {q:"Câu nào đúng?",o:["Unless you don't hurry, you'll miss the train.","Unless you hurry, you'll miss the train."],a:1,e:"unless đã mang nghĩa phủ định.",k:"s"},
  {q:"Câu nào đúng?",o:["I'd do well if I worked harder.","I'd do well if I would work harder."],a:0,e:"Không dùng would sau if.",k:"s"},
  {q:"Câu nào đúng?",o:["My son, aged six, loves drawing.","My son, ages six, loves drawing."],a:0,e:"aged + số tuổi.",k:"s"},
  {q:"Câu nào đúng?",o:["She is in the 30–40 age group.","She is in the age group 30–40 aged."],a:0,e:"Số tuổi đứng trước age group.",k:"s"},
  {q:"Câu nào đúng?",o:["If you mix red and white, you get pink.","If you mix red and white, you got pink."],a:0,e:"Zero conditional.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u7:blame (for)":{s:["hold responsible","accuse"],a:["praise","excuse"]},
  "b2u7:clue":{s:["sign","hint","indication"]},
  "b2u7:confess":{s:["admit","own up"],a:["deny"]},
  "b2u7:consistent":{s:["regular","similar","unchanging"],a:["inconsistent","variable"]},
  "b2u7:deception":{s:["deceit","dishonesty","lying"],a:["honesty","truthfulness"]},
  "b2u7:detect":{s:["notice","discover","spot"],a:["miss","overlook"]},
  "b2u7:display":{s:["show","exhibit"],a:["hide","conceal"]},
  "b2u7:incident":{s:["event","episode","occurrence"]},
  "b2u7:intentional":{s:["deliberate","planned"],a:["accidental","unintentional"]},
  "b2u7:predict":{s:["forecast","foresee"]},
  "b2u7:anxious":{s:["worried","nervous"],a:["calm","relaxed"]},
  "b2u7:reassuring":{s:["comforting","encouraging"],a:["worrying","alarming"]},
  "b2u7:irritating":{s:["annoying","frustrating"],a:["pleasant","soothing"]},
  "b2u7:upset":{s:["unhappy","hurt","distressed"],a:["pleased","happy"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u7|Can You Spot a Liar?"] = [["mislead","v","đánh lừa"],["in the wild","phrase","ngoài tự nhiên"],["nest","n","tổ"],["research station","n phr","trạm nghiên cứu"],["on one occasion","phrase","có một lần"],["playroom","n","phòng chơi"],["convincing","adj","thuyết phục"],["verdict","n","phán quyết, kết luận"],["toss a coin","phrase","tung đồng xu"],["eye contact","n phr","giao tiếp bằng mắt"],["make a special effort","phrase","cố gắng đặc biệt"],["reliable","adj","đáng tin cậy"],["account","n","lời kể, bản tường thuật"],["barely","adv","chỉ vừa, hầu như không"],["distract","v","làm xao nhãng"],["accuracy rate","n phr","tỉ lệ chính xác"]];
})();
