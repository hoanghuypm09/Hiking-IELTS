/* Complete IELTS Bands 5–6.5 · Unit 5: The world in our hands.
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u5", title:"The world in our hands", vi:"Môi trường & năng lượng",
  focus:{reading:"Matching information · Matching features · Summary completion", listening:"Section 1: Note completion · Table completion", speaking:"Part 2 và 3: chuẩn bị ghi chú, dùng tính từ, trả lời khái quát về một chủ đề", writing:"Task 1: mô tả sơ đồ / quy trình, so sánh hai vị trí", vocab:"nature / the environment / the countryside · tourist / tourism", pron:"Sentence stress 2: nhấn vào tính từ thể hiện cảm xúc"},
  vocab:[
    {g:"Word list của sách",w:"advance payment",p:"n",ipa:"/ədˈvɑːns ˈpeɪmənt/",vi:"khoản trả trước",ex:"You need to make an advance payment to book the tour.",exvi:"Bạn cần trả trước một khoản để đặt tour."},
    {g:"Word list của sách",w:"calculate",p:"v",ipa:"/ˈkælkjuleɪt/",vi:"tính toán",ex:"Scientists calculated how much energy the desert receives.",exvi:"Các nhà khoa học đã tính lượng năng lượng mà sa mạc nhận được."},
    {g:"Word list của sách",w:"challenge",p:"n",ipa:"/ˈtʃælɪndʒ/",vi:"thách thức",ex:"Storing solar energy is still a big challenge.",exvi:"Lưu trữ năng lượng mặt trời vẫn là một thách thức lớn."},
    {g:"Word list của sách",w:"climate change",p:"n",ipa:"/ˈklaɪmət tʃeɪndʒ/",vi:"biến đổi khí hậu",ex:"Climate change is affecting rice farmers in the Mekong Delta.",exvi:"Biến đổi khí hậu đang ảnh hưởng đến nông dân trồng lúa ở đồng bằng sông Cửu Long."},
    {g:"Word list của sách",w:"dependence (on)",p:"n",ipa:"/dɪˈpendəns/",vi:"sự phụ thuộc (vào)",ex:"We must reduce our dependence on coal.",exvi:"Chúng ta phải giảm sự phụ thuộc vào than đá."},
    {g:"Word list của sách",w:"destruction",p:"n",ipa:"/dɪˈstrʌkʃn/",vi:"sự phá huỷ",ex:"The destruction of forests threatens many animals.",exvi:"Việc phá rừng đe doạ nhiều loài động vật."},
    {g:"Word list của sách",w:"drawback",p:"n",ipa:"/ˈdrɔːbæk/",vi:"nhược điểm",ex:"One drawback of wind power is that it depends on the weather.",exvi:"Một nhược điểm của điện gió là phụ thuộc vào thời tiết."},
    {g:"Word list của sách",w:"endangered species",p:"n",ipa:"/ɪnˈdeɪndʒəd ˈspiːʃiːz/",vi:"loài có nguy cơ tuyệt chủng",ex:"The saola is an endangered species found in Vietnam.",exvi:"Sao la là loài có nguy cơ tuyệt chủng được tìm thấy ở Việt Nam."},
    {g:"Word list của sách",w:"estimate the cost",p:"phrase",ipa:"/ˈestɪmeɪt ðə kɒst/",vi:"ước tính chi phí",ex:"Engineers estimated the cost at about $59 billion.",exvi:"Các kỹ sư ước tính chi phí khoảng 59 tỉ đô la."},
    {g:"Word list của sách",w:"focus on",p:"phr v",ipa:"/ˈfəʊkəs ɒn/",vi:"tập trung vào",ex:"The government is focusing on solar and wind power.",exvi:"Chính phủ đang tập trung vào điện mặt trời và điện gió."},
    {g:"Word list của sách",w:"fossil fuels",p:"n",ipa:"/ˈfɒsl ˈfjuːəlz/",vi:"nhiên liệu hoá thạch",ex:"Burning fossil fuels releases carbon dioxide.",exvi:"Đốt nhiên liệu hoá thạch thải ra khí CO₂."},
    {g:"Word list của sách",w:"fresh air",p:"n",ipa:"/freʃ eə/",vi:"không khí trong lành",ex:"We went hiking to get some fresh air.",exvi:"Chúng tôi đi bộ đường dài để hít thở không khí trong lành."},
    {g:"Word list của sách",w:"harness energy",p:"phrase",ipa:"/ˈhɑːnɪs ˈenədʒi/",vi:"khai thác năng lượng",ex:"This machine harnesses energy from waves.",exvi:"Cỗ máy này khai thác năng lượng từ sóng biển."},
    {g:"Word list của sách",w:"infrastructure",p:"n",ipa:"/ˈɪnfrəstrʌktʃə/",vi:"cơ sở hạ tầng",ex:"The country needs better infrastructure for electric cars.",exvi:"Đất nước cần cơ sở hạ tầng tốt hơn cho xe điện."},
    {g:"Word list của sách",w:"a major source of electricity",p:"phrase",ipa:"/ə ˈmeɪdʒə sɔːs əv ɪˌlekˈtrɪsəti/",vi:"một nguồn điện chính",ex:"Hydropower is a major source of electricity in Vietnam.",exvi:"Thuỷ điện là một nguồn điện chính ở Việt Nam."},
    {g:"Word list của sách",w:"natural habitat",p:"n",ipa:"/ˈnætʃrəl ˈhæbɪtæt/",vi:"môi trường sống tự nhiên",ex:"Elephants are losing their natural habitat.",exvi:"Loài voi đang mất dần môi trường sống tự nhiên."},
    {g:"Word list của sách",w:"nature reserve",p:"n",ipa:"/ˈneɪtʃə rɪˈzɜːv/",vi:"khu bảo tồn thiên nhiên",ex:"Cuc Phuong is Vietnam's oldest nature reserve.",exvi:"Cúc Phương là khu bảo tồn thiên nhiên lâu đời nhất của Việt Nam."},
    {g:"Word list của sách",w:"the next step",p:"phrase",ipa:"/ðə nekst step/",vi:"bước tiếp theo",ex:"The next step will be to lay the cables.",exvi:"Bước tiếp theo sẽ là lắp đặt cáp."},
    {g:"Word list của sách",w:"power station",p:"n",ipa:"/ˈpaʊə ˈsteɪʃn/",vi:"nhà máy điện",ex:"The old coal power station will close next year.",exvi:"Nhà máy nhiệt điện than cũ sẽ đóng cửa vào năm sau."},
    {g:"Word list của sách",w:"produce profitably",p:"phrase",ipa:"/prəˈdjuːs ˈprɒfɪtəbli/",vi:"sản xuất có lãi",ex:"Can solar power be produced profitably in the desert?",exvi:"Điện mặt trời có thể được sản xuất có lãi ở sa mạc không?"},
    {g:"Word list của sách",w:"release into the atmosphere",p:"phrase",ipa:"/rɪˈliːs ˈɪntə ði ˈætməsfɪə/",vi:"thải vào khí quyển",ex:"Factories release harmful gases into the atmosphere.",exvi:"Các nhà máy thải khí độc hại vào khí quyển."},
    {g:"Word list của sách",w:"renewable energy",p:"n",ipa:"/rɪˈnjuːəbl ˈenədʒi/",vi:"năng lượng tái tạo",ex:"Renewable energy comes from the sun, wind and water.",exvi:"Năng lượng tái tạo đến từ mặt trời, gió và nước."},
    {g:"Word list của sách",w:"rising sea levels",p:"n",ipa:"/ˈraɪzɪŋ siː ˈlevlz/",vi:"mực nước biển dâng",ex:"Rising sea levels threaten coastal cities.",exvi:"Mực nước biển dâng đe doạ các thành phố ven biển."},
    {g:"Word list của sách",w:"sceptical",p:"adj",ipa:"/ˈskeptɪkl/",vi:"hoài nghi",ex:"I was sceptical until I saw the results myself.",exvi:"Tôi đã hoài nghi cho đến khi tự mình thấy kết quả."},
    {g:"Word list của sách",w:"scenery",p:"n",ipa:"/ˈsiːnəri/",vi:"phong cảnh",ex:"The scenery in Ha Giang is breathtaking.",exvi:"Phong cảnh ở Hà Giang đẹp đến ngỡ ngàng."},
    {g:"Word list của sách",w:"switch (to)",p:"v",ipa:"/swɪtʃ/",vi:"chuyển sang",ex:"Many families have switched to electric motorbikes.",exvi:"Nhiều gia đình đã chuyển sang dùng xe máy điện."},
    {g:"Word list của sách",w:"unspoilt countryside",p:"n",ipa:"/ʌnˈspɔɪlt ˈkʌntrisaɪd/",vi:"vùng nông thôn còn hoang sơ",ex:"The island has miles of unspoilt countryside.",exvi:"Hòn đảo có những vùng quê hoang sơ trải dài hàng dặm."},
    {g:"Word list của sách",w:"wildlife conservation programme",p:"n",ipa:"/ˈwaɪldlaɪf ˌkɒnsəˈveɪʃn ˈprəʊɡræm/",vi:"chương trình bảo tồn động vật hoang dã",ex:"Tourists can join a wildlife conservation programme as volunteers.",exvi:"Du khách có thể tham gia chương trình bảo tồn động vật hoang dã với tư cách tình nguyện viên."},
    {g:"Word list của sách",w:"yield",p:"v",ipa:"/jiːld/",vi:"sản sinh, mang lại",ex:"A small area of desert could yield huge amounts of electricity.",exvi:"Một khu vực sa mạc nhỏ có thể tạo ra lượng điện khổng lồ."},
    {g:"Word list của sách",w:"zero emissions",p:"n",ipa:"/ˈzɪərəʊ iˈmɪʃnz/",vi:"không phát thải",ex:"Electric buses produce zero emissions in the city.",exvi:"Xe buýt điện không phát thải trong thành phố."},
    {g:"Môi trường & năng lượng",w:"solar panel",p:"n",ipa:"/ˈsəʊlə ˈpænl/",vi:"tấm pin mặt trời",ex:"We installed solar panels on our roof last year.",exvi:"Năm ngoái chúng tôi lắp tấm pin mặt trời trên mái nhà."},
    {g:"Môi trường & năng lượng",w:"wind turbine",p:"n",ipa:"/wɪnd ˈtɜːbaɪn/",vi:"tua-bin gió",ex:"Wind turbines line the coast of Bac Lieu.",exvi:"Các tua-bin gió nằm dọc bờ biển Bạc Liêu."},
    {g:"Môi trường & năng lượng",w:"generate",p:"v",ipa:"/ˈdʒenəreɪt/",vi:"tạo ra, phát (điện)",ex:"This dam generates electricity for the whole province.",exvi:"Con đập này phát điện cho cả tỉnh."},
    {g:"Môi trường & năng lượng",w:"eco-holiday",p:"n",ipa:"/ˈiːkəʊ ˌhɒlədeɪ/",vi:"kỳ nghỉ sinh thái",ex:"On an eco-holiday, you stay close to nature without damaging it.",exvi:"Trong kỳ nghỉ sinh thái, bạn ở gần thiên nhiên mà không gây hại cho nó."},
    {g:"Môi trường & năng lượng",w:"subsidy",p:"n",ipa:"/ˈsʌbsədi/",vi:"trợ cấp",ex:"Government subsidies made solar panels cheaper.",exvi:"Trợ cấp của chính phủ giúp tấm pin mặt trời rẻ hơn."},
    {g:"Từ dễ nhầm",w:"nature",p:"n",ipa:"/ˈneɪtʃə/",vi:"thiên nhiên (mọi thứ tự nhiên, không dùng the)",ex:"I feel calm when I'm close to nature.",exvi:"Tôi thấy bình yên khi được gần gũi thiên nhiên."},
    {g:"Từ dễ nhầm",w:"the environment",p:"n",ipa:"/ði ɪnˈvaɪrənmənt/",vi:"môi trường (đất, nước, không khí; nói về việc con người sử dụng/huỷ hoại)",ex:"Plastic waste is harming the environment.",exvi:"Rác thải nhựa đang gây hại cho môi trường."},
    {g:"Từ dễ nhầm",w:"the countryside",p:"n",ipa:"/ðə ˈkʌntrisaɪd/",vi:"vùng nông thôn, vùng quê",ex:"We spent the weekend in the countryside.",exvi:"Chúng tôi dành cuối tuần ở vùng quê."},
    {g:"Từ dễ nhầm",w:"tourism",p:"n",ipa:"/ˈtʊərɪzəm/",vi:"ngành du lịch (không đếm được)",ex:"Tourism brings money to many small towns.",exvi:"Du lịch mang lại tiền cho nhiều thị trấn nhỏ."},
    {g:"Từ dễ nhầm",w:"tourist",p:"n",ipa:"/ˈtʊərɪst/",vi:"khách du lịch (đếm được)",ex:"Thousands of tourists visit Ha Long Bay every day.",exvi:"Hàng nghìn khách du lịch đến vịnh Hạ Long mỗi ngày."}
  ],
  phrases:[
    {g:"Tính từ + danh từ",w:"spectacular views",p:"noun phrase",ipa:"/spekˈtækjələ vjuːz/",vi:"quang cảnh ngoạn mục",ex:"From the top, there are spectacular views of the sea.",exvi:"Từ trên đỉnh có quang cảnh biển ngoạn mục."},
    {g:"Tính từ + danh từ",w:"remote areas",p:"noun phrase",ipa:"/rɪˈməʊt ˈeəriəz/",vi:"vùng sâu vùng xa",ex:"Solar power can bring electricity to remote areas.",exvi:"Điện mặt trời có thể đưa điện đến vùng sâu vùng xa."},
    {g:"Tính từ + danh từ",w:"mass tourism",p:"noun phrase",ipa:"/mæs ˈtʊərɪzəm/",vi:"du lịch đại trà",ex:"Mass tourism has damaged many beaches.",exvi:"Du lịch đại trà đã làm hỏng nhiều bãi biển."},
    {g:"Tính từ + danh từ",w:"harmful gases",p:"noun phrase",ipa:"/ˈhɑːmfl ˈɡæsɪz/",vi:"khí độc hại",ex:"Cars release harmful gases into the air.",exvi:"Ô tô thải khí độc hại ra không khí."},
    {g:"Tính từ + danh từ",w:"a tourist destination",p:"noun phrase",ipa:"/ə ˈtʊərɪst ˌdestɪˈneɪʃn/",vi:"điểm đến du lịch",ex:"Sa Pa has become a popular tourist destination.",exvi:"Sa Pa đã trở thành điểm đến du lịch nổi tiếng."},
    {g:"Danh từ + danh từ",w:"energy crisis",p:"noun phrase",ipa:"/ˈenədʒi ˈkraɪsɪs/",vi:"khủng hoảng năng lượng",ex:"Renewable energy could help end the energy crisis.",exvi:"Năng lượng tái tạo có thể giúp chấm dứt khủng hoảng năng lượng."},
    {g:"Danh từ + danh từ",w:"carbon footprint",p:"noun phrase",ipa:"/ˈkɑːbən ˈfʊtprɪnt/",vi:"dấu chân carbon (lượng khí thải do một người/hoạt động tạo ra)",ex:"Flying less is the best way to reduce your carbon footprint.",exvi:"Bay ít hơn là cách tốt nhất để giảm dấu chân carbon của bạn."},
    {g:"Danh từ + danh từ",w:"wave energy",p:"noun phrase",ipa:"/weɪv ˈenədʒi/",vi:"năng lượng sóng biển",ex:"Wave energy is still very expensive to produce.",exvi:"Năng lượng sóng biển vẫn rất tốn kém để sản xuất."},
    {g:"Danh từ + danh từ",w:"installation costs",p:"noun phrase",ipa:"/ˌɪnstəˈleɪʃn kɒsts/",vi:"chi phí lắp đặt",ex:"Installation costs are lower near the coast.",exvi:"Chi phí lắp đặt thấp hơn ở gần bờ."},
    {g:"Danh từ + danh từ",w:"plastic waste",p:"noun phrase",ipa:"/ˈplæstɪk weɪst/",vi:"rác thải nhựa",ex:"Plastic waste ends up in rivers and oceans.",exvi:"Rác thải nhựa trôi ra sông và đại dương."},
    {g:"Danh từ + of + danh từ",w:"the destruction of forests",p:"noun phrase",ipa:"/ðə dɪˈstrʌkʃn əv ˈfɒrɪsts/",vi:"nạn phá rừng",ex:"The destruction of forests contributes to climate change.",exvi:"Nạn phá rừng góp phần gây biến đổi khí hậu."},
    {g:"Danh từ + of + danh từ",w:"a way of life",p:"noun phrase",ipa:"/ə weɪ əv laɪf/",vi:"lối sống",ex:"On an eco-holiday you learn about a local way of life.",exvi:"Trong kỳ nghỉ sinh thái, bạn tìm hiểu lối sống của người địa phương."},
    {g:"Dùng trong Writing Task 1 (quy trình)",w:"the first stage of the process",p:"noun phrase",ipa:"/ðə fɜːst steɪdʒ əv ðə ˈprəʊses/",vi:"giai đoạn đầu của quy trình",ex:"In the first stage of the process, water enters the chamber.",exvi:"Ở giai đoạn đầu của quy trình, nước tràn vào buồng."},
    {g:"Dùng trong Writing Task 1 (quy trình)",w:"high output",p:"noun phrase",ipa:"/haɪ ˈaʊtpʊt/",vi:"sản lượng cao",ex:"Large waves give a high output of electricity.",exvi:"Sóng lớn cho sản lượng điện cao."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"protect the environment",p:"collocation",ipa:"/prəˈtekt ði ɪnˈvaɪrənmənt/",vi:"bảo vệ môi trường",ex:"Everyone can help protect the environment.",exvi:"Ai cũng có thể góp phần bảo vệ môi trường."},
    {g:"Động từ + danh từ",w:"reduce emissions",p:"collocation",ipa:"/rɪˈdjuːs iˈmɪʃnz/",vi:"giảm khí thải",ex:"Cities are trying to reduce emissions from traffic.",exvi:"Các thành phố đang cố giảm khí thải từ giao thông."},
    {g:"Động từ + danh từ",w:"save energy",p:"collocation",ipa:"/seɪv ˈenədʒi/",vi:"tiết kiệm năng lượng",ex:"Turning off lights is an easy way to save energy.",exvi:"Tắt đèn là cách dễ dàng để tiết kiệm năng lượng."},
    {g:"Động từ + danh từ",w:"spoil the countryside",p:"collocation",ipa:"/spɔɪl ðə ˈkʌntrisaɪd/",vi:"làm hỏng cảnh quan nông thôn",ex:"Huge solar farms could spoil the countryside.",exvi:"Những cánh đồng pin mặt trời khổng lồ có thể làm hỏng cảnh quan nông thôn."},
    {g:"Động từ + danh từ",w:"run out of",p:"collocation",ipa:"/rʌn aʊt əv/",vi:"cạn kiệt, hết",ex:"One day the world will run out of oil.",exvi:"Một ngày nào đó thế giới sẽ cạn kiệt dầu mỏ."},
    {g:"Động từ + danh từ",w:"lay cables",p:"collocation",ipa:"/leɪ ˈkeɪblz/",vi:"lắp đặt (rải) cáp",ex:"Engineers will lay cables under the sea.",exvi:"Các kỹ sư sẽ rải cáp dưới biển."},
    {g:"Động từ + danh từ",w:"take public transport",p:"collocation",ipa:"/teɪk ˈpʌblɪk ˈtrænspɔːt/",vi:"đi phương tiện công cộng",ex:"If more people took public transport, the air would be cleaner.",exvi:"Nếu nhiều người đi phương tiện công cộng hơn, không khí sẽ sạch hơn."},
    {g:"Động từ + danh từ",w:"recycle waste",p:"collocation",ipa:"/ˌriːˈsaɪkl weɪst/",vi:"tái chế rác thải",ex:"Our building recycles almost half of its waste.",exvi:"Toà nhà của chúng tôi tái chế gần một nửa lượng rác."},
    {g:"Tính từ + giới từ",w:"close to nature",p:"collocation",ipa:"/kləʊs tə ˈneɪtʃə/",vi:"gần gũi thiên nhiên",ex:"Staying in a tree house, you feel close to nature.",exvi:"Ở trong nhà trên cây, bạn thấy gần gũi thiên nhiên."},
    {g:"Tính từ + giới từ",w:"in harmony with",p:"collocation",ipa:"/ɪn ˈhɑːməni wɪð/",vi:"hài hoà với",ex:"Traditional villages live in harmony with nature.",exvi:"Những ngôi làng truyền thống sống hài hoà với thiên nhiên."},
    {g:"Trạng từ + tính từ",w:"environmentally friendly",p:"collocation",ipa:"/ɪnˌvaɪrənˈmentəli ˈfrendli/",vi:"thân thiện với môi trường",ex:"Bamboo straws are an environmentally friendly choice.",exvi:"Ống hút tre là lựa chọn thân thiện với môi trường."},
    {g:"Trạng từ + tính từ",w:"heavily polluted",p:"collocation",ipa:"/ˈhevɪli pəˈluːtɪd/",vi:"ô nhiễm nặng",ex:"Some rivers near industrial zones are heavily polluted.",exvi:"Một số con sông gần khu công nghiệp bị ô nhiễm nặng."}
  ],
  grammar:{
    title:"The passive (câu bị động)",
    rules:[
      {h:"Cấu trúc",use:["be (chia theo thì) + V3/V-ed","Hiện tại đơn: is/are + V3 · Quá khứ: was/were + V3 · Hiện tại hoàn thành: has/have been + V3 · Tương lai/modal: will/can/should be + V3"],form:"Electricity is generated by the turbine.",ex:"Some nuclear power plants have been closed down.",sig:"be + past participle"},
      {h:"Khi nào dùng bị động",use:["Không biết ai làm","Không cần nói ai làm","Việc xảy ra quan trọng hơn người làm"],form:"Thêm by + người/vật làm nếu cần",ex:"Many animals are now protected by conservation programmes.",sig:"rất hay dùng khi mô tả quy trình (Task 1)"},
      {h:"Lỗi thường gặp",use:["Thiếu be: which caused by → which is caused by","Thiếu V3: are easily influence → are easily influenced","Dùng -ing thay vì V3: are doing by women → are done by women","Động từ nội động (rise, happen, occur) không có dạng bị động"],form:"The water level rises. (không nói: is risen)",ex:"Household tasks are done mainly by women.",sig:"kiểm tra be + V3"}
    ],
    quiz:[
      {q:"Children ___ easily by others.",o:["are influenced","are influence","influence"],a:0,e:"be + V3."},
      {q:"Some problems in this world can ___ by money.",o:["be solved","solve","solved"],a:0,e:"modal + be + V3."},
      {q:"The damage ___ by mass tourism is serious.",o:["caused","which caused","is causing"],a:0,e:"Rút gọn: which is caused → caused."},
      {q:"Unnecessary restrictions should ___ by the government.",o:["be reduced","reduce","reduced"],a:0,e:"should be + V3."},
      {q:"In the UK, most household tasks ___ by women.",o:["are done","are doing","do"],a:0,e:"Bị động hiện tại đơn."},
      {q:"New wind-turbine installations ___ by the government next year.",o:["will be subsidised","will subsidise","are subsidising"],a:0,e:"Tương lai bị động."},
      {q:"As a result, the water level inside the chamber ___.",o:["rises","is risen","is rising by"],a:0,e:"rise là nội động từ, không có bị động."},
      {q:"Twenty percent of the nation's energy ___ using renewable sources.",o:["is generated","generates","is generating"],a:0,e:"Bị động hiện tại đơn."}
    ]
  },
  reading:{
    title:"Turning Rubbish into Power", est:"khoảng 520 từ · 20 phút",
    paras:[
      "Every day, a city of ten million people produces thousands of tonnes of household waste. For decades, most of it was simply buried in huge landfill sites on the edge of town. Today, however, a growing number of cities are trying a different approach: burning their rubbish to generate electricity. Supporters call these plants ‘waste-to-energy’ facilities. Critics prefer a simpler name: incinerators.",
      "The basic technology is not new. Rubbish is delivered by lorry and stored in a large pit, from which a crane lifts it into a furnace. The heat from the burning waste turns water into steam, and the steam drives a turbine connected to a generator. A modern plant can reduce the volume of waste by around 90 percent, leaving only ash, some of which can be used to make building materials such as bricks.",
      "Denmark is often described as the world leader in this field. In Copenhagen, a plant called CopenHill burns around 440,000 tonnes of waste a year and supplies electricity to tens of thousands of homes, as well as heating for many more. Its designers, the architecture firm BIG, added an unusual feature: an artificial ski slope on the roof, which has become a popular tourist attraction. According to the city council, this was intended to show that an energy plant can be a pleasant part of urban life.",
      "In Asia, interest is growing rapidly. China now has several hundred waste-to-energy plants, and Vietnam opened one of its largest facilities near Hanoi in 2022. The Hanoi plant was built by a private company and is designed to process 4,000 tonnes of waste a day, around half of the city's total. Officials hope it will help close the overcrowded Nam Son landfill, which has caused frequent complaints from local residents about smells and polluted water.",
      "However, not everyone is convinced. Environmental groups such as Zero Waste Europe argue that incinerators discourage recycling, because plants need a constant supply of rubbish to operate profitably. In some Scandinavian cities, waste is actually imported from other countries to keep the furnaces running. Critics also point out that burning plastic releases carbon dioxide, so electricity from waste is not as clean as solar or wind power.",
      "There are also concerns about air quality. Older incinerators released dangerous chemicals into the atmosphere, and the memory of these plants makes many communities reluctant to accept new ones. Engineers insist that modern filters remove almost all harmful substances. The International Energy Agency has stated that well-managed plants are safe, but it warns that strict monitoring is essential, particularly in countries where regulations are weak.",
      "For most experts, the conclusion is that waste-to-energy is useful but limited. It is certainly better than burying rubbish in landfill, which releases methane, a powerful greenhouse gas. But it should be seen as the final step after reducing, reusing and recycling, rather than an excuse to keep producing more waste."
    ],
    note:"Bài đọc tự viết để luyện tập; một số số liệu được làm tròn hoặc đơn giản hoá.",
    quiz:[
      {t:"head",text:"Câu 1–5: The passage has seven paragraphs, A–G. Which paragraph contains the following information? (Có thể dùng một chữ cái nhiều lần.)"},
      {q:"a description of how electricity is produced from waste",o:["A","B","C","D","E","F","G"],a:1,e:"Đoạn B."},
      {q:"an example of waste being brought in from abroad",o:["A","B","C","D","E","F","G"],a:4,e:"Đoạn E: 'waste is actually imported'."},
      {q:"a reason why some people oppose new plants near their homes",o:["A","B","C","D","E","F","G"],a:5,e:"Đoạn F: 'reluctant to accept new ones'."},
      {q:"a mention of a plant that also attracts visitors",o:["A","B","C","D","E","F","G"],a:2,e:"Đoạn C: ski slope."},
      {q:"a comparison between burning waste and burying it",o:["A","B","C","D","E","F","G"],a:6,e:"Đoạn G."},
      {t:"head",text:"Câu 6–9: Match each statement with the correct organisation. A BIG · B Copenhagen city council · C a private company · D Zero Waste Europe · E The International Energy Agency"},
      {q:"believes that incinerators can reduce recycling",o:["A BIG","B Copenhagen city council","C a private company","D Zero Waste Europe","E The International Energy Agency"],a:3,e:"Đoạn E."},
      {q:"wanted to show that a power plant can improve city life",o:["A BIG","B Copenhagen city council","C a private company","D Zero Waste Europe","E The International Energy Agency"],a:1,e:"Đoạn C: 'According to the city council…'."},
      {q:"says that close supervision of plants is necessary",o:["A BIG","B Copenhagen city council","C a private company","D Zero Waste Europe","E The International Energy Agency"],a:4,e:"Đoạn F."},
      {q:"constructed a plant that can handle half of a city's waste",o:["A BIG","B Copenhagen city council","C a private company","D Zero Waste Europe","E The International Energy Agency"],a:2,e:"Đoạn D."},
      {t:"head",text:"Câu 10–13: Complete the summary. Choose NO MORE THAN TWO WORDS from the passage."},
      {t:"gap",q:"Rubbish is kept in a large ___ before a crane moves it into a furnace.",a:["pit"],e:"Đoạn B."},
      {t:"gap",q:"Heat from the fire changes water into ___, which drives a turbine.",a:["steam"],e:"Đoạn B."},
      {t:"gap",q:"About 90 percent of the waste disappears, and the remaining ___ can be used for bricks.",a:["ash"],e:"Đoạn B."},
      {t:"gap",q:"Landfill sites release ___, a powerful greenhouse gas.",a:["methane"],e:"Đoạn G."}
    ]
  },
  listening:{
    title:"Section 1 · Booking an eco-holiday",
    intro:"Một khách hàng gọi điện cho công ty du lịch để hỏi về kỳ nghỉ sinh thái. Hoàn thành ghi chú và bảng.",
    script:[
      ["A","Green Earth Travel, good afternoon. Sarah speaking."],
      ["B","Hello. I phoned earlier about an eco-holiday, one of those holidays where you don't damage the environment and you get close to nature."],
      ["A","Ah yes. Can I take your name again?"],
      ["B","It's Daniel Petrov. P-E-T-R-O-V."],
      ["A","Thank you. And how long would you like to go for?"],
      ["B","About two weeks. Fourteen nights would be ideal."],
      ["A","And how much are you hoping to spend?"],
      ["B","I can pay up to two thousand five hundred pounds, but not more than that."],
      ["A","OK. Just so you know, we ask for an advance payment of twenty percent when you book."],
      ["B","That's fine."],
      ["A","You'll also need some vaccinations before you travel, so please speak to your doctor at least six weeks before."],
      ["B","Right. And I'm vegetarian. Is that a problem on the flight?"],
      ["A","Not at all. I'll ask the airline for a vegetarian meal. Oh, and you should check whether you need a visa. It depends on your passport."],
      ["B","I'll do that. So, what holidays do you have?"],
      ["A","Well, the first is in the Green Valley rainforest. It's mainly for people who enjoy watching animals. You stay in quite a luxurious house built high up in a tree, so you're really close to nature."],
      ["B","Sounds amazing. What else?"],
      ["A","There's a holiday at Bago Nature Reserve, where you live with a farming family in a village house away from other tourists. The advantage is that you learn about the local way of life."],
      ["B","And the third?"],
      ["A","On Coral Island, you work in a marine research centre helping scientists, and you stay in a simple hostel. The island is lovely because international tourism hasn't spoilt it yet, so there are no crowds."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–6: Complete the notes. Write NO MORE THAN TWO WORDS AND/OR A NUMBER."},
      {t:"gap",q:"Customer's name: Daniel ___",a:["petrov"]},
      {t:"gap",q:"Length of holiday: ___ nights",a:["14","fourteen"]},
      {t:"gap",q:"Will pay up to £___",a:["2500","2,500"]},
      {t:"gap",q:"Advance payment: ___ percent",a:["20","twenty"]},
      {t:"gap",q:"Needs some ___ before travelling",a:["vaccinations"]},
      {t:"gap",q:"Must check if he needs a ___",a:["visa"]},
      {t:"head",text:"Câu 7–10: Complete the table. Write ONE OR TWO WORDS."},
      {t:"gap",q:"Green Valley · watching animals · accommodation: house in a ___",a:["tree"]},
      {t:"gap",q:"Bago Nature Reserve · live with a ___ · village house",a:["farming family","family"]},
      {t:"gap",q:"Coral Island · working in a marine ___",a:["research centre","research center"]},
      {t:"gap",q:"Coral Island · advantage: holiday location without ___",a:["crowds"]}
    ]
  },
  writing:{
    type:"Task 1", min:150, time:"20 phút",
    prompt:"The diagram below shows how a tidal energy plant generates electricity, and the table compares two possible locations for the plant. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    charts:[
      {type:"process",title:"How a tidal energy plant works",steps:["Tide rises and sea water flows through gates in a barrier","Water is stored in a basin behind the barrier","Gates are closed at high tide","At low tide, gates open and water flows back to the sea","Moving water turns turbines","Turbines drive generators and electricity is produced"]},
      {type:"table",title:"Two possible locations",head:["","River estuary","Open coast"],rows:[["Difference between high and low tide","8 metres","3 metres"],["Electricity output","High","Low"],["Construction cost","$1.2 billion","$400 million"],["Effect on wildlife","Serious","Small"]]}
    ],
    note:"Sơ đồ và số liệu giả định để luyện tập.",
    plan:["Mở bài: The diagram illustrates… and the table compares…","Overview: quy trình 6 bước, dùng sức nước thuỷ triều; cửa sông cho nhiều điện hơn nhưng đắt và ảnh hưởng động vật hoang dã","Thân 1: mô tả quy trình theo thứ tự, dùng bị động (water is stored, gates are closed) và từ nối trình tự (first, next, as a result, at the same time)","Thân 2: so sánh hai vị trí bằng số liệu trong bảng"],
    model:"The diagram illustrates how electricity is generated in a tidal energy plant, while the table compares two locations where such a plant could be built.\n\nOverall, the process uses the movement of the tides to drive turbines, and it consists of six main stages. Of the two locations, the river estuary would produce more electricity, but it would be more expensive and more harmful to wildlife.\n\nThe process starts when the tide rises and sea water flows through gates in a barrier. The water is then stored in a basin behind the barrier, and the gates are closed at high tide. Later, when the tide goes down, the gates are opened and the water flows back towards the sea. As it does so, it turns a number of turbines, which are connected to generators. As a result, electricity is produced.\n\nAs far as location is concerned, the difference between high and low tide is much greater in the river estuary (8 metres) than on the open coast (3 metres), so the output of electricity would be high rather than low. However, building the plant in the estuary would cost $1.2 billion, three times as much as on the coast. In addition, the effect on wildlife would be serious, compared with only a small effect on the open coast."
  },
  speaking:{
    tip:"Part 2: khi nói về nơi bạn thích, hãy tỏ ra hào hứng và dùng nhiều tính từ tích cực (spectacular, unspoilt, breathtaking), nhấn giọng vào những tính từ đó. Dùng từ của bạn thay vì lặp lại từ trên thẻ. Part 3: trả lời khái quát, không nói về bản thân; dùng các cụm như In general, Generally, People tend to…, Usually… và thì hiện tại đơn.",
    p1:["Do you enjoy spending time in the countryside?","What do you do to protect the environment?","Is recycling common where you live?","Do you prefer the beach or the mountains?"],
    p1sample:{q:"What do you do to protect the environment?",a:"I try to do small things every day. For example, I always carry a reusable water bottle, so I don't buy plastic bottles, and I take the bus to university instead of riding a motorbike. It doesn't sound like much, but I think if everyone made small changes like these, it would make a real difference."},
    cue:{t:"Describe a beautiful place you have visited in your country.",pts:["when you visited it","who you went with","what you did there"],end:"and explain why you think the place is so beautiful."},
    p2sample:"I'd like to talk about Ha Giang, a mountainous province in the far north of Vietnam. I went there about two years ago with three friends from university, just after our final exams. We hired motorbikes and spent four days riding along the famous loop road. Some parts of the road were really steep, so we had to drive very slowly, but every time we stopped, there were these absolutely spectacular views of the valleys and rivers below. One morning we climbed to the top of a hill to watch the sunrise, and it was one of the most wonderful moments of my life. We also stayed with a local family in a traditional wooden house, and they cooked us a fantastic meal with corn wine and fresh vegetables from their garden. Why is the place so beautiful? I think it's because it's still largely unspoilt. There are no big hotels or shopping centres, just mountains, rice terraces and small villages. The air is incredibly fresh, and it feels very peaceful. I'd love to go back one day, although I hope mass tourism doesn't change it too much.",
    p3:["What things attract tourists to a place?","How do places change when too many tourists visit them?","Whose responsibility is it to deal with environmental problems?","What can ordinary people do to protect the environment?"],
    p3sample:{q:"How do places change when too many tourists visit them?",a:"Well, in general, places tend to become more crowded and more expensive. Usually local people benefit from the extra money at first, but over time, traditional houses are often replaced by hotels and souvenir shops. There's also more rubbish and pollution, especially on beaches. So I think, generally speaking, the place can lose the very things that made it attractive in the first place."},
    phrases:["In general,…","People tend to…","Generally speaking,…","Usually…","There were these absolutely spectacular views…","It's such an unspoilt area."]
  },
  lesson:[
    {g:"Mở đầu: vấn đề môi trường",w:"protect natural habitats",p:"v phr",ipa:"/prəˈtekt ˈnætʃrəl ˈhæbɪtæts/",vi:"bảo vệ môi trường sống tự nhiên",ex:"Nature reserves are a way of protecting natural habitats.",exvi:"Khu bảo tồn là một cách bảo vệ môi trường sống tự nhiên."},
    {g:"Mở đầu: vấn đề môi trường",w:"urgent",p:"adj",ipa:"/ˈɜːdʒənt/",vi:"khẩn cấp, cấp bách",ex:"Which problem do you think is the most urgent?",exvi:"Bạn nghĩ vấn đề nào cấp bách nhất?"},
    {g:"Listening: kỳ nghỉ sinh thái",w:"travel agent",p:"n phr",ipa:"/ˈtrævl ˈeɪdʒənt/",vi:"nhân viên/đại lý du lịch",ex:"The travel agent recommended an eco-holiday.",exvi:"Nhân viên du lịch gợi ý một kỳ nghỉ sinh thái."},
    {g:"Listening: kỳ nghỉ sinh thái",w:"luxurious",p:"adj",ipa:"/lʌɡˈʒʊəriəs/",vi:"sang trọng",ex:"The cabin was surprisingly luxurious.",exvi:"Căn nhà gỗ sang trọng một cách bất ngờ."},
    {g:"Listening: kỳ nghỉ sinh thái",w:"cabin",p:"n",ipa:"/ˈkæbɪn/",vi:"nhà gỗ nhỏ",ex:"We stayed in a cabin by the lake.",exvi:"Chúng tôi ở trong một căn nhà gỗ bên hồ."},
    {g:"Listening: kỳ nghỉ sinh thái",w:"hostel",p:"n",ipa:"/ˈhɒstl/",vi:"nhà nghỉ giá rẻ (thường ở phòng chung)",ex:"Volunteers stay in a simple hostel.",exvi:"Tình nguyện viên ở trong một nhà nghỉ đơn giản."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"storehouse",p:"n",ipa:"/ˈstɔːhaʊs/",vi:"kho, nguồn dự trữ lớn",ex:"The desert is a natural storehouse of solar energy.",exvi:"Sa mạc là một kho năng lượng mặt trời tự nhiên."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"astonished",p:"adj",ipa:"/əˈstɒnɪʃt/",vi:"kinh ngạc",ex:"Scientists were astonished at the answer.",exvi:"Các nhà khoa học kinh ngạc trước câu trả lời."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"staggering",p:"adj",ipa:"/ˈstæɡərɪŋ/",vi:"đáng kinh ngạc, khổng lồ",ex:"The potential of the Sahara is staggering.",exvi:"Tiềm năng của Sahara thật đáng kinh ngạc."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"convert",p:"v",ipa:"/kənˈvɜːt/",vi:"chuyển đổi",ex:"Solar panels convert sunlight directly into electricity.",exvi:"Tấm pin mặt trời chuyển trực tiếp ánh sáng thành điện."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"purify",p:"v",ipa:"/ˈpjʊərɪfaɪ/",vi:"lọc sạch",ex:"Sea water is purified before it is used.",exvi:"Nước biển được lọc sạch trước khi sử dụng."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"irrigation",p:"n",ipa:"/ˌɪrɪˈɡeɪʃn/",vi:"thuỷ lợi, tưới tiêu",ex:"Waste water could be used for irrigation.",exvi:"Nước thải có thể được dùng để tưới tiêu."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"consortium",p:"n",ipa:"/kənˈsɔːtiəm/",vi:"liên doanh, tập đoàn",ex:"An international consortium is planning the project.",exvi:"Một liên doanh quốc tế đang lên kế hoạch dự án."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"electrical grid",p:"n phr",ipa:"/ɪˈlektrɪkl ɡrɪd/",vi:"lưới điện",ex:"Europe will need new electrical grids.",exvi:"Châu Âu sẽ cần lưới điện mới."},
    {g:"Reading: năng lượng mặt trời từ Sahara",w:"joint venture",p:"n phr",ipa:"/dʒɔɪnt ˈventʃə/",vi:"liên doanh",ex:"The plant is being built by a joint venture.",exvi:"Nhà máy đang được một liên doanh xây dựng."},
    {g:"Speaking Part 2",w:"steep",p:"adj",ipa:"/stiːp/",vi:"dốc",ex:"It was a very steep hill.",exvi:"Đó là một ngọn đồi rất dốc."},
    {g:"Speaking Part 2",w:"stone column",p:"n phr",ipa:"/stəʊn ˈkɒləm/",vi:"cột đá",ex:"There's a wonderful stone column at the top.",exvi:"Trên đỉnh có một cột đá tuyệt đẹp."},
    {g:"Speaking Part 2",w:"have a picnic",p:"v phr",ipa:"/hæv ə ˈpɪknɪk/",vi:"đi dã ngoại, ăn ngoài trời",ex:"We had a picnic on the cliffs.",exvi:"Chúng tôi ăn dã ngoại trên vách đá."},
    {g:"Writing Task 1: máy năng lượng sóng",w:"chamber",p:"n",ipa:"/ˈtʃeɪmbə/",vi:"buồng, khoang",ex:"The machine consists of two chambers.",exvi:"Cỗ máy gồm hai buồng."},
    {g:"Writing Task 1: máy năng lượng sóng",w:"consist of",p:"v phr",ipa:"/kənˈsɪst əv/",vi:"bao gồm",ex:"The process consists of five stages.",exvi:"Quy trình gồm năm giai đoạn."},
    {g:"Writing Task 1: máy năng lượng sóng",w:"suck in",p:"v phr",ipa:"/sʌk ɪn/",vi:"hút vào",ex:"Air is sucked in from outside.",exvi:"Không khí được hút vào từ bên ngoài."},
    {g:"Writing Task 1: máy năng lượng sóng",w:"simultaneously",p:"adv",ipa:"/ˌsɪmlˈteɪniəsli/",vi:"đồng thời",ex:"Two things happen simultaneously.",exvi:"Hai việc diễn ra đồng thời."},
    {g:"Writing Task 1: máy năng lượng sóng",w:"meanwhile",p:"adv",ipa:"/ˈmiːnwaɪl/",vi:"trong khi đó",ex:"Meanwhile, the turbine continues to turn.",exvi:"Trong khi đó, tua-bin tiếp tục quay."},
    {g:"Ôn tập Unit 5",w:"inflate",p:"v",ipa:"/ɪnˈfleɪt/",vi:"bơm phồng",ex:"Hot air is used to inflate the balloon.",exvi:"Khí nóng được dùng để bơm phồng khinh khí cầu."},
    {g:"Ôn tập Unit 5",w:"asphalt",p:"n",ipa:"/ˈæsfælt/",vi:"nhựa đường",ex:"Could solar panels replace asphalt on our roads?",exvi:"Liệu tấm pin mặt trời có thể thay thế nhựa đường trên đường phố?"}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u5 = {
  tips:{
    reading:[
      {type:"Matching information", tips:[
        "Đọc kỹ hướng dẫn: không cần dùng hết các đoạn, và có thể có hai đáp án trong cùng một đoạn.",
        "Đọc kỹ câu hỏi, gạch chân ý chính (ví dụ: estimates, comparison, description).",
        "Nhanh chóng tìm đúng phần trong bài rồi đọc kỹ để chắc nó có thông tin đó."
      ]},
      {type:"Matching features", tips:[
        "Đôi khi có nhiều lựa chọn hơn số câu hỏi; các lựa chọn được liệt kê theo thứ tự xuất hiện trong bài. Tìm và gạch chân chúng trước.",
        "Gạch chân ý chính trong mỗi câu hỏi.",
        "Đọc kỹ những gì bài nói về từng lựa chọn rồi ghép mỗi câu với một lựa chọn."
      ]},
      {type:"Summary completion", tips:[
        "Đọc kỹ bản tóm tắt trước.",
        "Dùng tiêu đề để tìm đúng phần trong bài, rồi đọc kỹ phần đó.",
        "Kiểm tra lại bản tóm tắt khi điền xong (ngữ pháp, số từ)."
      ]}
    ],
    listening:[
      {type:"Note & table completion", tips:[
        "Kiểm tra được phép viết bao nhiêu từ.",
        "Đánh vần đáp án cẩn thận.",
        "Viết số bằng chữ số, không viết bằng chữ.",
        "Với bảng, đọc tiêu đề cột để biết đang cần loại thông tin gì (chỗ ở, ưu điểm…)."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 2", tips:[
        "Đề có thể yêu cầu nói về điều bạn thích. Hãy tỏ ra hào hứng và nghĩ trước những tính từ tích cực để mô tả.",
        "Khi có thể, dùng từ của bạn thay vì từ trên thẻ, điều này cho thấy khả năng diễn đạt.",
        "Nhấn giọng vào tính từ thể hiện cảm xúc (fantastic, spectacular)."
      ]},
      {type:"Speaking Part 3", tips:[
        "Trả lời khái quát, không nói về bản thân.",
        "Dùng từ và cụm từ cho thấy bạn đang nói điều chung: in general, generally, usually, people tend to.",
        "Thường dùng thì hiện tại đơn khi khái quát."
      ]}
    ],
    writing:[
      {type:"Writing Task 1: mô tả sơ đồ", tips:[
        "Mô tả các giai đoạn chính theo thứ tự hợp lý.",
        "So sánh thông tin (ví dụ hai vị trí) và có một câu tổng quan ngắn.",
        "Dùng bị động để mô tả quy trình (water is stored, electricity is produced).",
        "Dùng từ nối trình tự: first, the process starts when, next, following this, as a result, at the same time, meanwhile."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"The increase in the amount of tourist is inevitable.", good:"The increase in the amount of tourism is inevitable.", why:"Ngành du lịch (không đếm được) → tourism."},
    {k:"vocab", bad:"The nature we live in is very important to us.", good:"The environment we live in is very important to us.", why:"Môi trường sống của con người → the environment."},
    {k:"vocab", bad:"There is a positive side to tourists because it brings money.", good:"There is a positive side to tourism because it brings money.", why:"Nói về ngành/hoạt động du lịch → tourism."},
    {k:"vocab", bad:"People leave their rubbish in the nature.", good:"People leave their rubbish in the countryside.", why:"nature không dùng the; nơi chốn cụ thể ngoài thành phố → the countryside."},
    {k:"grammar", bad:"Children are easily influence by others.", good:"Children are easily influenced by others.", why:"Bị động cần V3."},
    {k:"grammar", bad:"Some problems can solve by money.", good:"Some problems can be solved by money.", why:"Bị động với modal: can be + V3."},
    {k:"grammar", bad:"Not all subjects teach by computer.", good:"Not all subjects are taught by computer.", why:"Môn học không tự dạy → bị động."},
    {k:"grammar", bad:"The damage to the environment which caused by mass tourism.", good:"The damage to the environment which is caused by mass tourism.", why:"Thiếu be trong mệnh đề bị động."},
    {k:"grammar", bad:"Household tasks are doing by women.", good:"Household tasks are done by women.", why:"Bị động: be + V3, không phải V-ing."},
    {k:"grammar", bad:"This diagram presents the process of brick manufacturing which is used for the building industry.", good:"This diagram shows how bricks are manufactured for the building industry.", why:"Diễn đạt quy trình rõ hơn bằng bị động."}
  ],
  fix:[
    {t:"gap", q:"Unnecessary restrictions should reduce by the government. → Sửa: ___", a:["be reduced","should be reduced"], e:"should be + V3."},
    {t:"gap", q:"They live in an old house surrounded by beautiful nature. (vùng quê) → Sửa: ___", a:["countryside","beautiful countryside"], e:"Vùng đất ngoài thành phố → countryside."},
    {t:"gap", q:"Governments should do more to protect the nature by limiting pollution. → Sửa: ___", a:["the environment","environment"], e:"Bảo vệ khỏi ô nhiễm → the environment."},
    {t:"gap", q:"Tourist is a big industry in my country. → Sửa: ___", a:["tourism"], e:"Ngành → tourism."},
    {t:"gap", q:"The water level inside the chamber is risen. → Sửa: ___", a:["rises"], e:"rise không có dạng bị động."},
    {t:"gap", q:"Electricity is generate by the turbine. → Sửa: ___", a:["generated","is generated"], e:"be + V3."},
    {t:"gap", q:"Many animals protect by conservation programmes. → Sửa: ___", a:["are protected"], e:"Bị động."},
    {t:"gap", q:"Solar panels will installed next year. → Sửa: ___", a:["will be installed","be installed"], e:"will be + V3."},
    {t:"gap", q:"The bridge was build in 1990. → Sửa: ___", a:["built","was built"], e:"build → built."},
    {t:"gap", q:"Plastic waste has been find on every beach. → Sửa: ___", a:["found","has been found"], e:"find → found."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u5 = [
  {q:"Rice ___ in many parts of Asia.",o:["is grown","grows by","is growing by"],a:0,e:"Bị động hiện tại đơn.",k:"c"},
  {q:"The new dam ___ in 2015.",o:["was completed","completed","has completed"],a:0,e:"Bị động quá khứ.",k:"c"},
  {q:"Thousands of trees ___ every year.",o:["are cut down","cut down","are cutting down"],a:0,e:"Bị động.",k:"c"},
  {q:"The results ___ next month.",o:["will be announced","will announce","are announcing"],a:0,e:"Tương lai bị động.",k:"c"},
  {q:"Several species ___ already ___ extinct.",o:["have / become","have / been become","are / become"],a:0,e:"become là nội động từ, không bị động.",k:"c"},
  {q:"This park ___ by volunteers.",o:["is cleaned","cleans","is cleaning"],a:0,e:"Bị động.",k:"c"},
  {q:"Plastic bags ___ in some supermarkets since 2020.",o:["have been banned","have banned","were banning"],a:0,e:"Hiện tại hoàn thành bị động.",k:"c"},
  {q:"The turbine ___ to a generator.",o:["is connected","connects to","is connecting"],a:0,e:"Bị động mô tả cấu tạo.",k:"c"},
  {q:"Rubbish should ___ before it is collected.",o:["be sorted","sort","sorted"],a:0,e:"should be + V3.",k:"c"},
  {q:"An accident ___ on the bridge yesterday.",o:["happened","was happened","has been happened"],a:0,e:"happen không có bị động.",k:"c"},
  {q:"The letter ___ by the time I arrived.",o:["had been sent","had sent","was sending"],a:0,e:"Quá khứ hoàn thành bị động.",k:"c"},
  {q:"Too much energy ___ by air conditioners.",o:["is used","uses","is using"],a:0,e:"Bị động.",k:"c"},
  {t:"gap",q:"Solar panels ___ (install) on the school roof last month.",a:["were installed"],e:"Quá khứ bị động.",k:"g"},
  {t:"gap",q:"The forest ___ (protect) by law since 2005.",a:["has been protected"],e:"Hiện tại hoàn thành bị động.",k:"g"},
  {t:"gap",q:"Waste ___ (burn) to produce electricity in this plant.",a:["is burned","is burnt"],e:"Bị động hiện tại.",k:"g"},
  {t:"gap",q:"The new park ___ (open) next year.",a:["will be opened","will open"],e:"Tương lai.",k:"g"},
  {t:"gap",q:"Sea water ___ (purify) and then used to wash the mirrors.",a:["is purified"],e:"Bị động mô tả quy trình.",k:"g"},
  {t:"gap",q:"Plastic can ___ (recycle) into new products.",a:["be recycled"],e:"can be + V3.",k:"g"},
  {t:"gap",q:"I love visiting the ___ (countryside/nature) at weekends.",a:["countryside"],e:"Nơi chốn → countryside.",k:"g"},
  {t:"gap",q:"___ (tourism/tourist) creates many jobs in coastal areas.",a:["tourism"],e:"Ngành → tourism.",k:"g"},
  {t:"gap",q:"Cars are a major source of pollution and damage ___ (the environment/nature).",a:["the environment"],e:"Ô nhiễm → the environment.",k:"g"},
  {q:"Câu nào đúng?",o:["The temperature was risen by 2 degrees.","The temperature rose by 2 degrees."],a:1,e:"rise nội động từ.",k:"s"},
  {q:"Câu nào đúng?",o:["English is spoken in many countries.","English is speaking in many countries."],a:0,e:"Bị động: be + V3.",k:"s"},
  {q:"Câu nào đúng?",o:["The tickets must be booked in advance.","The tickets must booked in advance."],a:0,e:"must be + V3.",k:"s"},
  {q:"Câu nào đúng?",o:["We should protect nature.","We should protect the nature."],a:0,e:"nature không dùng the.",k:"s"},
  {q:"Câu nào đúng?",o:["Many tourists visit Hoi An every year.","Many tourism visit Hoi An every year."],a:0,e:"Người → tourists.",k:"s"},
  {q:"Câu nào đúng?",o:["This house was built by my grandfather.","This house built by my grandfather."],a:0,e:"Thiếu be.",k:"s"},
  {q:"Câu nào đúng?",o:["The problem was occurred last year.","The problem occurred last year."],a:1,e:"occur không có bị động.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u5:calculate":{s:["work out","compute"],a:["guess"]},
  "b2u5:challenge":{s:["difficulty","problem","test"]},
  "b2u5:dependence (on)":{s:["reliance"],a:["independence"]},
  "b2u5:destruction":{s:["damage","ruin"],a:["protection","conservation"]},
  "b2u5:drawback":{s:["disadvantage","downside"],a:["advantage","benefit"]},
  "b2u5:focus on":{s:["concentrate on","pay attention to"],a:["ignore"]},
  "b2u5:infrastructure":{s:["basic systems","facilities"]},
  "b2u5:sceptical":{s:["doubtful","unconvinced"],a:["convinced","certain"]},
  "b2u5:scenery":{s:["landscape","view"]},
  "b2u5:switch (to)":{s:["change (to)","move (to)"]},
  "b2u5:yield":{s:["produce","provide","generate"]},
  "b2u5:generate":{s:["produce","create"]},
  "b2u5:renewable energy":{s:["green energy","clean energy"],a:["fossil fuels"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u5|Turning Rubbish into Power"] = [["household waste","n phr","rác thải sinh hoạt"],["landfill site","n phr","bãi chôn lấp rác"],["incinerator","n","lò đốt rác"],["furnace","n","lò đốt"],["volume","n","thể tích, khối lượng"],["ash","n","tro"],["urban life","n phr","đời sống đô thị"],["overcrowded","adj","quá tải"],["convinced","adj","bị thuyết phục"],["operate profitably","v phr","hoạt động có lãi"],["reluctant","adj","miễn cưỡng, ngần ngại"],["filter","n","bộ lọc"],["monitoring","n","sự giám sát"],["methane","n","khí mê-tan"]];
})();
