/* Complete IELTS Bands 5–6.5 · Unit 2: It's good for you!
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u2", title:"It's good for you!", vi:"Ăn uống & sức khoẻ",
  focus:{reading:"Matching headings · Pick from a list", listening:"Section 2: Multiple choice · Labelling a map or plan", speaking:"Part 2: dùng ghi chú, giới thiệu các ý, mở đầu và kết thúc bài nói", writing:"Task 2: đề có hai câu hỏi, phân tích đề, lên ý, chia đoạn", vocab:"Word formation: hậu tố và tiền tố (health → healthy → healthily)", pron:"Intonation 1: lên giọng khi chưa nói xong hoặc thông tin mới, xuống giọng khi kết thúc"},
  vocab:[
    {g:"Word list của sách",w:"approach",p:"n",ipa:"/əˈprəʊtʃ/",vi:"cách tiếp cận, phương pháp",ex:"The school is trying a new approach to healthy eating.",exvi:"Trường đang thử một cách tiếp cận mới về ăn uống lành mạnh."},
    {g:"Word list của sách",w:"artificial",p:"adj",ipa:"/ˌɑːtɪˈfɪʃl/",vi:"nhân tạo",ex:"This drink contains artificial colours and flavours.",exvi:"Đồ uống này có chứa màu và hương liệu nhân tạo."},
    {g:"Word list của sách",w:"attitudes (towards)",p:"n",ipa:"/ˈætɪtjuːdz/",vi:"thái độ, quan niệm (đối với)",ex:"Attitudes towards fast food are slowly changing.",exvi:"Quan niệm về đồ ăn nhanh đang dần thay đổi."},
    {g:"Word list của sách",w:"avoid",p:"v",ipa:"/əˈvɔɪd/",vi:"tránh",ex:"My doctor told me to avoid sugary drinks.",exvi:"Bác sĩ bảo tôi tránh đồ uống nhiều đường."},
    {g:"Word list của sách",w:"conventional",p:"adj",ipa:"/kənˈvenʃənl/",vi:"thông thường, truyền thống",ex:"Conventional farming uses chemical fertilisers.",exvi:"Canh tác thông thường sử dụng phân bón hoá học."},
    {g:"Word list của sách",w:"create",p:"v",ipa:"/kriˈeɪt/",vi:"tạo ra",ex:"The new market has created jobs for local farmers.",exvi:"Khu chợ mới đã tạo việc làm cho nông dân địa phương."},
    {g:"Word list của sách",w:"crop yields",p:"n",ipa:"/krɒp jiːldz/",vi:"năng suất cây trồng, sản lượng thu hoạch",ex:"Better irrigation has increased crop yields in the region.",exvi:"Hệ thống tưới tốt hơn đã làm tăng năng suất cây trồng trong vùng."},
    {g:"Word list của sách",w:"emit",p:"v",ipa:"/iˈmɪt/",vi:"thải ra, phát ra",ex:"Transporting food by plane emits a lot of carbon dioxide.",exvi:"Vận chuyển thực phẩm bằng máy bay thải ra rất nhiều CO₂."},
    {g:"Word list của sách",w:"farming techniques",p:"n",ipa:"/ˈfɑːmɪŋ tekˈniːks/",vi:"kỹ thuật canh tác",ex:"Modern farming techniques help farmers grow more rice.",exvi:"Kỹ thuật canh tác hiện đại giúp nông dân trồng được nhiều lúa hơn."},
    {g:"Word list của sách",w:"food stall",p:"n",ipa:"/fuːd stɔːl/",vi:"quầy/sạp bán đồ ăn",ex:"There is a food stall selling bánh mì outside my office.",exvi:"Có một sạp bán bánh mì ngay ngoài văn phòng tôi."},
    {g:"Word list của sách",w:"for one thing",p:"phrase",ipa:"/fər ˈwʌn θɪŋ/",vi:"một là, trước hết (dùng để nêu lý do)",ex:"I don't eat there. For one thing, it's too expensive.",exvi:"Tôi không ăn ở đó. Trước hết là vì nó quá đắt."},
    {g:"Word list của sách",w:"frozen food",p:"n",ipa:"/ˈfrəʊzn fuːd/",vi:"thực phẩm đông lạnh",ex:"Busy workers often buy frozen food.",exvi:"Người đi làm bận rộn thường mua thực phẩm đông lạnh."},
    {g:"Word list của sách",w:"gain access to",p:"phrase",ipa:"/ɡeɪn ˈækses tə/",vi:"có được quyền/cơ hội sử dụng",ex:"Poor farmers need to gain access to modern equipment.",exvi:"Nông dân nghèo cần được tiếp cận máy móc hiện đại."},
    {g:"Word list của sách",w:"greenhouse gases",p:"n",ipa:"/ˈɡriːnhaʊs ˈɡæsɪz/",vi:"khí nhà kính",ex:"Cattle farming produces large amounts of greenhouse gases.",exvi:"Chăn nuôi bò thải ra lượng lớn khí nhà kính."},
    {g:"Word list của sách",w:"hygiene",p:"n",ipa:"/ˈhaɪdʒiːn/",vi:"vệ sinh",ex:"Good hygiene is essential in a hospital kitchen.",exvi:"Vệ sinh tốt là điều thiết yếu trong bếp bệnh viện."},
    {g:"Word list của sách",w:"influence",p:"v",ipa:"/ˈɪnfluəns/",vi:"ảnh hưởng đến",ex:"Advertising influences what children want to eat.",exvi:"Quảng cáo ảnh hưởng đến việc trẻ em muốn ăn gì."},
    {g:"Word list của sách",w:"likely to",p:"phrase",ipa:"/ˈlaɪkli tə/",vi:"có khả năng, có lẽ sẽ",ex:"People who cook at home are more likely to eat healthily.",exvi:"Người nấu ăn ở nhà có nhiều khả năng ăn uống lành mạnh hơn."},
    {g:"Word list của sách",w:"locally",p:"adv",ipa:"/ˈləʊkəli/",vi:"tại địa phương",ex:"Most of the vegetables in this restaurant are grown locally.",exvi:"Hầu hết rau của nhà hàng này được trồng tại địa phương."},
    {g:"Word list của sách",w:"luxury",p:"n",ipa:"/ˈlʌkʃəri/",vi:"thứ xa xỉ",ex:"For many families, eating out is a luxury.",exvi:"Với nhiều gia đình, ăn ngoài là một sự xa xỉ."},
    {g:"Word list của sách",w:"man-made",p:"adj",ipa:"/ˌmæn ˈmeɪd/",vi:"nhân tạo, do con người làm ra",ex:"Organic farmers do not use man-made chemicals.",exvi:"Nông dân hữu cơ không dùng hoá chất nhân tạo."},
    {g:"Word list của sách",w:"nutrition",p:"n",ipa:"/njuˈtrɪʃn/",vi:"dinh dưỡng",ex:"Good nutrition is important for students during exams.",exvi:"Dinh dưỡng tốt rất quan trọng với học sinh trong mùa thi."},
    {g:"Word list của sách",w:"point out",p:"phr v",ipa:"/pɔɪnt aʊt/",vi:"chỉ ra",ex:"The nurse pointed out that I wasn't drinking enough water.",exvi:"Y tá chỉ ra rằng tôi uống không đủ nước."},
    {g:"Word list của sách",w:"reject",p:"v",ipa:"/rɪˈdʒekt/",vi:"bác bỏ, từ chối",ex:"Scientists rejected the claim that the product cures headaches.",exvi:"Các nhà khoa học bác bỏ tuyên bố rằng sản phẩm chữa được đau đầu."},
    {g:"Word list của sách",w:"sound",p:"v",ipa:"/saʊnd/",vi:"nghe có vẻ",ex:"‘Organic’ sounds healthier, but is it really?",exvi:"‘Hữu cơ’ nghe có vẻ tốt cho sức khoẻ hơn, nhưng có thật vậy không?"},
    {g:"Word list của sách",w:"trend",p:"n",ipa:"/trend/",vi:"xu hướng",ex:"Plant-based diets are a growing trend among young people.",exvi:"Chế độ ăn thuần thực vật là xu hướng ngày càng phổ biến ở người trẻ."},
    {g:"Word list của sách",w:"ultimately",p:"adv",ipa:"/ˈʌltɪmətli/",vi:"rốt cuộc, suy cho cùng",ex:"Ultimately, it is the parents who decide what children eat.",exvi:"Suy cho cùng, chính cha mẹ quyết định con cái ăn gì."},
    {g:"Word list của sách",w:"value",p:"n",ipa:"/ˈvæljuː/",vi:"giá trị",ex:"Fresh vegetables have a high nutritional value.",exvi:"Rau tươi có giá trị dinh dưỡng cao."},
    {g:"Word list của sách",w:"weather conditions",p:"n",ipa:"/ˈweðə kənˈdɪʃnz/",vi:"điều kiện thời tiết",ex:"Poor weather conditions damaged this year's harvest.",exvi:"Thời tiết xấu đã làm hư hại vụ thu hoạch năm nay."},
    {g:"Thực phẩm & canh tác",w:"organic",p:"adj",ipa:"/ɔːˈɡænɪk/",vi:"hữu cơ",ex:"Organic vegetables are more expensive in supermarkets.",exvi:"Rau hữu cơ đắt hơn ở siêu thị."},
    {g:"Thực phẩm & canh tác",w:"pesticide",p:"n",ipa:"/ˈpestɪsaɪd/",vi:"thuốc trừ sâu",ex:"Wash fruit carefully to remove pesticides.",exvi:"Rửa trái cây kỹ để loại bỏ thuốc trừ sâu."},
    {g:"Thực phẩm & canh tác",w:"fertiliser",p:"n",ipa:"/ˈfɜːtəlaɪzə/",vi:"phân bón",ex:"Natural fertiliser is made from animal waste.",exvi:"Phân bón tự nhiên được làm từ chất thải động vật."},
    {g:"Thực phẩm & canh tác",w:"crop rotation",p:"n",ipa:"/krɒp rəʊˈteɪʃn/",vi:"luân canh",ex:"Crop rotation keeps the soil healthy.",exvi:"Luân canh giúp đất luôn màu mỡ."},
    {g:"Thực phẩm & canh tác",w:"genetic engineering",p:"n",ipa:"/dʒəˈnetɪk ˌendʒɪˈnɪərɪŋ/",vi:"kỹ thuật biến đổi gen",ex:"Genetic engineering can make plants resistant to disease.",exvi:"Kỹ thuật biến đổi gen có thể giúp cây kháng bệnh."},
    {g:"Thực phẩm & canh tác",w:"balanced diet",p:"n",ipa:"/ˈbælənst ˈdaɪət/",vi:"chế độ ăn cân bằng",ex:"A balanced diet includes plenty of fruit and vegetables.",exvi:"Chế độ ăn cân bằng gồm nhiều rau và trái cây."},
    {g:"Thực phẩm & canh tác",w:"processed food",p:"n",ipa:"/ˈprəʊsest fuːd/",vi:"thực phẩm chế biến sẵn",ex:"Processed food often contains a lot of salt.",exvi:"Thực phẩm chế biến sẵn thường chứa nhiều muối."},
    {g:"Thực phẩm & canh tác",w:"nutritious",p:"adj",ipa:"/njuˈtrɪʃəs/",vi:"bổ dưỡng",ex:"Phở can be a nutritious breakfast.",exvi:"Phở có thể là một bữa sáng bổ dưỡng."},
    {g:"Word formation (cấu tạo từ)",w:"health / healthy / healthily",p:"n / adj / adv",ipa:"/helθ/ /ˈhelθi/ /ˈhelθɪli/",vi:"sức khoẻ / khoẻ mạnh, lành mạnh / một cách lành mạnh",ex:"If you want to be healthy, you need to eat healthily.",exvi:"Nếu muốn khoẻ mạnh, bạn cần ăn uống lành mạnh."},
    {g:"Word formation (cấu tạo từ)",w:"harmful",p:"adj",ipa:"/ˈhɑːmfl/",vi:"có hại",ex:"Some pesticides may be harmful to our health.",exvi:"Một số thuốc trừ sâu có thể gây hại cho sức khoẻ."},
    {g:"Word formation (cấu tạo từ)",w:"inconvenient",p:"adj",ipa:"/ˌɪnkənˈviːniənt/",vi:"bất tiện",ex:"Shopping at the market every day is inconvenient for workers.",exvi:"Đi chợ mỗi ngày là bất tiện với người đi làm."},
    {g:"Word formation (cấu tạo từ)",w:"stressful",p:"adj",ipa:"/ˈstresfl/",vi:"căng thẳng",ex:"Night shifts can be very stressful.",exvi:"Ca đêm có thể rất căng thẳng."},
    {g:"Word formation (cấu tạo từ)",w:"inactive",p:"adj",ipa:"/ɪnˈæktɪv/",vi:"ít vận động",ex:"Inactive people are at greater risk of heart disease.",exvi:"Người ít vận động có nguy cơ mắc bệnh tim cao hơn."},
    {g:"Word formation (cấu tạo từ)",w:"wealthy",p:"adj",ipa:"/ˈwelθi/",vi:"giàu có",ex:"Organic food is mainly bought by wealthy shoppers.",exvi:"Thực phẩm hữu cơ chủ yếu do người mua giàu có mua."},
    {g:"Word formation (cấu tạo từ)",w:"dramatically",p:"adv",ipa:"/drəˈmætɪkli/",vi:"một cách đột ngột, mạnh mẽ",ex:"Sales of fast food have increased dramatically.",exvi:"Doanh số đồ ăn nhanh đã tăng mạnh."}
  ],
  phrases:[
    {g:"Tính từ + danh từ",w:"natural fertiliser",p:"noun phrase",ipa:"/ˈnætʃrəl ˈfɜːtəlaɪzə/",vi:"phân bón tự nhiên",ex:"Many farmers in the Mekong Delta use natural fertiliser.",exvi:"Nhiều nông dân ở đồng bằng sông Cửu Long dùng phân bón tự nhiên."},
    {g:"Tính từ + danh từ",w:"a healthy lifestyle",p:"noun phrase",ipa:"/ə ˈhelθi ˈlaɪfstaɪl/",vi:"lối sống lành mạnh",ex:"Walking to work is part of a healthy lifestyle.",exvi:"Đi bộ đi làm là một phần của lối sống lành mạnh."},
    {g:"Tính từ + danh từ",w:"fresh produce",p:"noun phrase",ipa:"/freʃ ˈprɒdjuːs/",vi:"nông sản tươi",ex:"The market sells fresh produce from nearby farms.",exvi:"Chợ bán nông sản tươi từ các trang trại gần đó."},
    {g:"Tính từ + danh từ",w:"natural toxins",p:"noun phrase",ipa:"/ˈnætʃrəl ˈtɒksɪnz/",vi:"độc tố tự nhiên",ex:"Some common vegetables contain natural toxins.",exvi:"Một số loại rau thông thường chứa độc tố tự nhiên."},
    {g:"Tính từ + danh từ",w:"special offers",p:"noun phrase",ipa:"/ˈspeʃl ˈɒfəz/",vi:"chương trình khuyến mãi",ex:"Families with little money look for special offers.",exvi:"Gia đình ít tiền thường tìm các chương trình khuyến mãi."},
    {g:"Tính từ + danh từ",w:"pre-cooked meals",p:"noun phrase",ipa:"/ˌpriː ˈkʊkt miːlz/",vi:"món ăn nấu sẵn",ex:"Pre-cooked meals save time but are often salty.",exvi:"Món nấu sẵn tiết kiệm thời gian nhưng thường mặn."},
    {g:"Danh từ + danh từ",w:"food production",p:"noun phrase",ipa:"/fuːd prəˈdʌkʃn/",vi:"sản xuất lương thực, thực phẩm",ex:"Food production must increase as the population grows.",exvi:"Sản xuất lương thực phải tăng khi dân số tăng."},
    {g:"Danh từ + danh từ",w:"soil quality",p:"noun phrase",ipa:"/sɔɪl ˈkwɒləti/",vi:"chất lượng đất",ex:"Crop rotation improves soil quality.",exvi:"Luân canh cải thiện chất lượng đất."},
    {g:"Danh từ + danh từ",w:"junk food",p:"noun phrase",ipa:"/dʒʌŋk fuːd/",vi:"đồ ăn vặt, đồ ăn không lành mạnh",ex:"Schools should stop selling junk food.",exvi:"Trường học nên ngừng bán đồ ăn vặt không lành mạnh."},
    {g:"Danh từ + danh từ",w:"shift work",p:"noun phrase",ipa:"/ʃɪft wɜːk/",vi:"làm việc theo ca",ex:"Shift work makes it hard to eat regular meals.",exvi:"Làm việc theo ca khiến khó ăn uống đúng bữa."},
    {g:"Danh từ + danh từ",w:"health benefits",p:"noun phrase",ipa:"/helθ ˈbenɪfɪts/",vi:"lợi ích cho sức khoẻ",ex:"The health benefits of regular exercise are well known.",exvi:"Lợi ích sức khoẻ của việc tập thể dục đều đặn ai cũng biết."},
    {g:"Danh từ + danh từ",w:"country of origin",p:"noun phrase",ipa:"/ˈkʌntri əv ˈɒrɪdʒɪn/",vi:"nước xuất xứ",ex:"Many shoppers check the country of origin on the label.",exvi:"Nhiều người mua kiểm tra nước xuất xứ trên nhãn."},
    {g:"Lượng từ (Writing Task 2)",w:"a wide range of",p:"noun phrase",ipa:"/ə waɪd reɪndʒ əv/",vi:"nhiều loại khác nhau",ex:"Supermarkets offer a wide range of food products.",exvi:"Siêu thị bày bán rất nhiều loại thực phẩm khác nhau."},
    {g:"Lượng từ (Writing Task 2)",w:"a great deal of",p:"noun phrase",ipa:"/ə ɡreɪt diːl əv/",vi:"rất nhiều (đi với danh từ không đếm được)",ex:"A great deal of importance is placed on freshness.",exvi:"Người ta rất coi trọng độ tươi."},
    {g:"Lượng từ (Writing Task 2)",w:"a considerable amount of",p:"noun phrase",ipa:"/ə kənˈsɪdərəbl əˈmaʊnt əv/",vi:"một lượng đáng kể (không đếm được)",ex:"Some people spend a considerable amount of money on food.",exvi:"Một số người chi một khoản tiền đáng kể cho ăn uống."},
    {g:"Lượng từ (Writing Task 2)",w:"a large number of",p:"noun phrase",ipa:"/ə lɑːdʒ ˈnʌmbər əv/",vi:"một số lượng lớn (đếm được)",ex:"A large number of children eat fast food every week.",exvi:"Một số lượng lớn trẻ em ăn đồ ăn nhanh mỗi tuần."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"eat a balanced diet",p:"collocation",ipa:"/iːt ə ˈbælənst ˈdaɪət/",vi:"ăn uống cân bằng",ex:"Nurses on night shifts find it hard to eat a balanced diet.",exvi:"Y tá làm ca đêm khó ăn uống cân bằng."},
    {g:"Động từ + danh từ",w:"keep fit",p:"collocation",ipa:"/kiːp fɪt/",vi:"giữ dáng, giữ sức khoẻ",ex:"I keep fit by cycling to work.",exvi:"Tôi giữ sức khoẻ bằng cách đạp xe đi làm."},
    {g:"Động từ + danh từ",w:"take regular breaks",p:"collocation",ipa:"/teɪk ˈreɡjələ breɪks/",vi:"nghỉ giải lao đều đặn",ex:"Take regular breaks when you study for a long time.",exvi:"Hãy nghỉ giải lao đều đặn khi học trong thời gian dài."},
    {g:"Động từ + danh từ",w:"grow crops",p:"collocation",ipa:"/ɡrəʊ krɒps/",vi:"trồng trọt, trồng cây lương thực",ex:"Farmers grow crops without chemicals on this farm.",exvi:"Nông dân ở trang trại này trồng trọt không dùng hoá chất."},
    {g:"Động từ + danh từ",w:"reduce the risk of",p:"collocation",ipa:"/rɪˈdjuːs ðə rɪsk əv/",vi:"giảm nguy cơ",ex:"Exercise reduces the risk of heart disease.",exvi:"Tập thể dục giúp giảm nguy cơ bệnh tim."},
    {g:"Động từ + danh từ",w:"make a decision",p:"collocation",ipa:"/meɪk ə dɪˈsɪʒn/",vi:"đưa ra quyết định",ex:"Shoppers make quick decisions in the supermarket.",exvi:"Người mua đưa ra quyết định rất nhanh trong siêu thị."},
    {g:"Động từ + danh từ",w:"take into consideration",p:"collocation",ipa:"/teɪk ˈɪntə kənˌsɪdəˈreɪʃn/",vi:"cân nhắc, xem xét",ex:"People take price and quality into consideration.",exvi:"Người ta cân nhắc cả giá và chất lượng."},
    {g:"Động từ + danh từ",w:"place importance on",p:"collocation",ipa:"/pleɪs ɪmˈpɔːtns ɒn/",vi:"coi trọng",ex:"Vietnamese cooks place great importance on fresh herbs.",exvi:"Người nấu ăn Việt rất coi trọng rau thơm tươi."},
    {g:"Tính từ + giới từ",w:"harmful to",p:"collocation",ipa:"/ˈhɑːmfl tə/",vi:"có hại cho",ex:"Too much sugar is harmful to children's teeth.",exvi:"Quá nhiều đường có hại cho răng của trẻ."},
    {g:"Tính từ + giới từ",w:"responsible for",p:"collocation",ipa:"/rɪˈspɒnsəbl fə/",vi:"chịu trách nhiệm về",ex:"Both parents and schools are responsible for children's health.",exvi:"Cả cha mẹ lẫn nhà trường đều chịu trách nhiệm về sức khoẻ của trẻ."},
    {g:"Tính từ + giới từ",w:"concerned about",p:"collocation",ipa:"/kənˈsɜːnd əˈbaʊt/",vi:"lo ngại về",ex:"Some shoppers are concerned about how animals are treated.",exvi:"Một số người mua lo ngại về cách đối xử với động vật."},
    {g:"Trạng từ + tính từ",w:"organically produced",p:"collocation",ipa:"/ɔːˈɡænɪkli prəˈdjuːst/",vi:"được sản xuất theo phương pháp hữu cơ",ex:"These eggs were organically produced.",exvi:"Số trứng này được sản xuất theo phương pháp hữu cơ."},
    {g:"Trạng từ + tính từ",w:"strictly regulated",p:"collocation",ipa:"/ˈstrɪktli ˈreɡjuleɪtɪd/",vi:"được quản lý chặt chẽ",ex:"The use of chemicals in farming is strictly regulated.",exvi:"Việc dùng hoá chất trong nông nghiệp được quản lý chặt chẽ."},
    {g:"Trạng từ + tính từ",w:"generally active",p:"collocation",ipa:"/ˈdʒenrəli ˈæktɪv/",vi:"năng động nói chung",ex:"Being generally active is better than exercising once a month.",exvi:"Vận động thường xuyên tốt hơn tập thể dục mỗi tháng một lần."}
  ],
  grammar:{
    title:"Countable and uncountable nouns",
    rules:[
      {h:"Danh từ đếm được [C]",use:["Có số ít và số nhiều: a farm, two farms","Đi với a/an, many, a few, few, a (large) number of"],form:"many vegetables · a few stalls · a number of studies",ex:"A large number of consumers buy organic food.",sig:"many, a few, few, a number of"},
      {h:"Danh từ không đếm được [U]",use:["Không có dạng số nhiều, không đi với a/an","Hay gặp: advice, information, research, knowledge, pollution, money, equipment, furniture, work"],form:"much information · a little time · a great deal of research",ex:"We need more research into organic farming.",sig:"much, a little, little, a great deal of, an amount of"},
      {h:"Dùng được cho cả hai loại",use:["a lot of, lots of, plenty of, some, any, most","Một số danh từ vừa đếm được vừa không: a coffee / coffee, a chicken / chicken"],form:"a lot of vegetables · a lot of money",ex:"Plenty of people care about price.",sig:"a lot of, plenty of, some, any"},
      {h:"few / a few · little / a little · number / amount",use:["a few / a little = một ít (đủ, tích cực)","few / little = rất ít (gần như không, tiêu cực)","the number of + danh từ đếm được; the amount of + không đếm được"],form:"I have a little time. · I have little time to cook.",ex:"The amount of fast food eaten has increased.",sig:"chọn theo loại danh từ"}
    ],
    quiz:[
      {q:"Can you give me some ___ on how to stay fit?",o:["advice","advices","an advice"],a:0,e:"advice không đếm được."},
      {q:"Recently, the ___ of fast food eaten has increased.",o:["amount","number","many"],a:0,e:"fast food không đếm được → amount."},
      {q:"Technology brings ___ advantages to our lives.",o:["many","much","a little"],a:0,e:"advantages đếm được."},
      {q:"You can't get ___ information about health without the Internet.",o:["much","many","a few"],a:0,e:"information không đếm được."},
      {q:"Unfortunately, I have ___ time to cook when I get home.",o:["little","a few","few"],a:0,e:"Ý tiêu cực, time không đếm được → little."},
      {q:"Organic farming causes less ___ than traditional farming.",o:["pollution","pollutions","a pollution"],a:0,e:"pollution không đếm được."},
      {q:"Only a small ___ of consumers buy organic food.",o:["number","amount","deal"],a:0,e:"consumers đếm được → number."},
      {q:"More ___ is needed to make genetic engineering safe.",o:["research","researches","a research"],a:0,e:"research không đếm được."}
    ]
  },
  reading:{
    title:"Is Local Food Always Better?", est:"khoảng 480 từ · 18 phút",
    paras:[
      "In recent years, ‘eat local’ has become one of the most popular slogans in the food industry. Supermarkets put pictures of smiling farmers on their packaging, and restaurants proudly list the villages their vegetables come from. For many consumers, buying food grown close to home feels like the responsible choice. But is it really as simple as that?",
      "The main argument for local food concerns transport. Food that travels thousands of kilometres by plane or lorry, campaigners say, must be responsible for large amounts of greenhouse gases. It is certainly true that air freight emits far more carbon dioxide than other forms of transport. However, only a very small proportion of food is transported by air. Most of it travels by ship, which is surprisingly efficient.",
      "A study carried out in Britain compared tomatoes grown in heated greenhouses near London with tomatoes grown outdoors in Spain and transported by lorry. The researchers found that the Spanish tomatoes were responsible for fewer emissions, because heating greenhouses through the British winter uses enormous amounts of energy. In other words, where and how food is grown matters far more than the distance it travels.",
      "Supporters of local food also claim that it is fresher and therefore more nutritious. There is some truth in this: certain vegetables lose vitamins quickly after they are picked. Yet nutritionists point out that frozen vegetables, which are prepared within hours of being harvested, may contain more vitamins than ‘fresh’ ones that have spent several days on a shop shelf. The way food is stored and cooked also has a large effect on its nutritional value.",
      "There is, however, a strong economic case for buying locally. When consumers buy directly from farmers at markets, a much larger share of the money stays in the local community. Small farms are able to survive, and young people have a reason to stay in rural areas rather than moving to the city. Some economists believe this is the most important benefit of the local food movement.",
      "Finally, it is worth remembering that many poorer countries depend on selling food abroad. Farmers in Kenya, for example, grow beans and flowers for European supermarkets, and this trade provides jobs for hundreds of thousands of people. If wealthy consumers stopped buying imported food, some of the world's poorest families would lose their income.",
      "So what should a responsible shopper do? Most experts agree that there is no single rule. Choosing food that is in season, avoiding products flown in by air, and wasting less food at home will probably do more good than worrying about how many kilometres a carrot has travelled."
    ],
    note:"Bài đọc tự viết để luyện tập; các nghiên cứu được mô tả chung chung.",
    quiz:[
      {t:"head",text:"Câu 1–6: The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G. (Paragraph A: v · A popular idea that needs to be examined)"},
      {q:"Paragraph B",o:["i Money that stays in the community","ii The real facts about moving food","iii An unexpected result from an experiment","iv How long food has been kept","v A popular idea that needs to be examined","vi Practical advice for shoppers","vii The needs of farmers in other countries"],a:1,e:"Đoạn B bàn về vận chuyển: máy bay, xe tải, tàu biển."},
      {q:"Paragraph C",o:["i Money that stays in the community","ii The real facts about moving food","iii An unexpected result from an experiment","iv How long food has been kept","v A popular idea that needs to be examined","vi Practical advice for shoppers","vii The needs of farmers in other countries"],a:2,e:"Nghiên cứu cà chua cho kết quả bất ngờ."},
      {q:"Paragraph D",o:["i Money that stays in the community","ii The real facts about moving food","iii An unexpected result from an experiment","iv How long food has been kept","v A popular idea that needs to be examined","vi Practical advice for shoppers","vii The needs of farmers in other countries"],a:3,e:"Độ tươi, thời gian để trên kệ và cách bảo quản."},
      {q:"Paragraph E",o:["i Money that stays in the community","ii The real facts about moving food","iii An unexpected result from an experiment","iv How long food has been kept","v A popular idea that needs to be examined","vi Practical advice for shoppers","vii The needs of farmers in other countries"],a:0,e:"'a much larger share of the money stays in the local community'."},
      {q:"Paragraph F",o:["i Money that stays in the community","ii The real facts about moving food","iii An unexpected result from an experiment","iv How long food has been kept","v A popular idea that needs to be examined","vi Practical advice for shoppers","vii The needs of farmers in other countries"],a:6,e:"Nông dân Kenya phụ thuộc vào xuất khẩu."},
      {q:"Paragraph G",o:["i Money that stays in the community","ii The real facts about moving food","iii An unexpected result from an experiment","iv How long food has been kept","v A popular idea that needs to be examined","vi Practical advice for shoppers","vii The needs of farmers in other countries"],a:5,e:"Lời khuyên: ăn theo mùa, tránh hàng bay, giảm lãng phí."},
      {t:"head",text:"Câu 7–10: Choose TWO letters, A–E."},
      {t:"pick",q:"Which TWO facts about transporting food does the writer mention?",o:["A Most food is moved by ship.","B Lorries are the cheapest form of transport.","C Air freight produces a lot of carbon dioxide.","D Food prices rise when fuel is expensive.","E Local food is never transported."],a:[0,2],e:"Đoạn B."},
      {t:"pick",q:"According to the writer, which TWO things affect the nutritional value of vegetables?",o:["A the colour of the vegetable","B how the vegetable is stored","C who sells the vegetable","D how the vegetable is cooked","E the price of the vegetable"],a:[1,3],e:"Đoạn D: 'The way food is stored and cooked…'."}
    ]
  },
  listening:{
    title:"Section 2 · Welcome talk at a sports centre",
    intro:"Quản lý một trung tâm thể thao nói chuyện với nhân viên mới về sức khoẻ và chỉ đường quanh khu trung tâm.",
    script:[
      ["A","Good morning, everyone, and welcome to Riverside Sports Centre. My name's Helen and I'm the staff manager. Before you start work, I want to say a few words about looking after yourselves."],
      ["A","Many of our staff work long and irregular hours. People often tell me they don't eat properly, not because they can't cook, but because they're too tired when they get home. So we've arranged for the café to sell healthy meals that you can take home at a discount."],
      ["A","You'll be surrounded by gym equipment, but I'm not going to tell you to spend hours in the gym. What I'd really like you to do is make small changes to your daily routine, like cycling to work or taking the stairs instead of the lift."],
      ["A","Of course, exercise is good for your heart and helps you sleep, but for me the main benefit is that it keeps your mind sharp. Staff who exercise regularly make fewer mistakes at work."],
      ["A","Now, a word about safety. When you're working a long shift, please make sure you stop for ten minutes every two hours. It's very easy to forget, but tired staff are more likely to have accidents."],
      ["A","And finally, hygiene. Our cleaners do a great job, but with so many visitors, we need everyone to help. If you see a spill or rubbish, please clean it up or report it immediately."],
      ["A","Now let me tell you where things are. Look at the plan in front of you. We're in the main building, at the bottom of the plan, by the car park."],
      ["A","The staff room is easy to find: go out of the main entrance, turn left, and it's the first building on your left, next to the car park."],
      ["A","The indoor pool is behind the main building. Go out of the back exit and walk straight on. It's the large building in front of you."],
      ["A","If you need first aid, the medical room is opposite the tennis courts. From the main entrance, go straight up the path, and it's on your right, just past the tennis courts on the left."],
      ["A","The healthy café I mentioned is at the end of the main path, beside the river, so customers can sit outside and enjoy the view."],
      ["A","And the equipment store is on the corner where the main path meets River Lane, on the right-hand side, just before the café."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–5: Choose the correct letter, A, B or C."},
      {q:"According to Helen, why do some staff fail to eat properly?",o:["A They don't know how to cook.","B They feel too tired after work.","C They can't afford healthy food."],a:1},
      {q:"Helen recommends that staff should keep fit by",o:["A using the gym every day.","B taking up a team sport.","C changing some daily habits."],a:2},
      {q:"Which benefit of exercise does Helen think is most important?",o:["A It helps you sleep.","B It keeps your heart healthy.","C It improves your thinking."],a:2},
      {q:"What advice does Helen give about safety?",o:["A take short breaks regularly","B avoid working long shifts","C report all accidents"],a:0},
      {q:"When she talks about hygiene, Helen asks staff to",o:["A wash their hands often.","B help keep the centre clean.","C stay away from visitors."],a:1},
      {t:"head",text:"Câu 6–10: Label the plan. Sơ đồ: Main building ở dưới cùng, cạnh car park. Một con đường chính (main path) đi thẳng từ cửa chính lên phía sông. Bên trái đường: A (cạnh car park), C (tennis courts). Bên phải đường: D, E (ở góc với River Lane). Sau main building: B. Cuối đường, cạnh sông: F."},
      {q:"Staff room",o:["A","B","C","D","E","F"],a:0},
      {q:"Indoor pool",o:["A","B","C","D","E","F"],a:1},
      {q:"Medical room",o:["A","B","C","D","E","F"],a:3},
      {q:"Healthy café",o:["A","B","C","D","E","F"],a:5},
      {q:"Equipment store",o:["A","B","C","D","E","F"],a:4}
    ]
  },
  writing:{
    type:"Task 2", min:250, time:"40 phút",
    prompt:"Many children these days have an unhealthy lifestyle. Both schools and parents are responsible for solving this problem. To what extent do you agree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
    plan:["Phân tích đề: có HAI ý cần bàn: (1) trẻ em có lối sống thiếu lành mạnh không, vì sao; (2) cả trường và cha mẹ có trách nhiệm không, mức độ đồng ý","Brainstorm: đồ ăn nhanh, màn hình, ít vận động; cha mẹ quyết định bữa ăn ở nhà; trường quyết định căng tin và giờ thể dục; ai khác? chính phủ, quảng cáo","Mở bài: paraphrase + nêu quan điểm (đồng ý phần lớn)","Thân 1: vai trò của cha mẹ + ví dụ","Thân 2: vai trò của nhà trường + ví dụ","Thân 3: các bên khác (chính phủ hạn chế quảng cáo đồ ăn vặt)","Kết bài: tóm tắt quan điểm"],
    model:"In many countries, including my own, children today eat more processed food and spend more time in front of screens than any previous generation. As a result, a growing number of young people are overweight and unfit. I largely agree that parents and schools should share the responsibility for changing this situation, although I believe they cannot solve the problem alone.\n\nParents clearly have the greatest influence on their children's habits. They decide what food is bought and cooked at home, and children usually copy the way their parents live. For example, if a family regularly goes for walks at the weekend, the children are likely to see exercise as a normal part of life. On the other hand, parents who work long hours may rely on fast food, and their children soon learn to prefer it.\n\nSchools also play an important role, because children spend a large amount of time there. A school can provide nutritious lunches, remove sugary drinks from its canteen and make sure that pupils do physical activity every day. In Vietnam, some primary schools have started teaching basic cooking skills, which helps children understand where their food comes from.\n\nHowever, I do not think the responsibility belongs only to parents and teachers. Food companies spend a great deal of money on advertisements aimed at children, and governments should limit this kind of marketing. Local authorities can also help by building safe parks and sports facilities.\n\nIn conclusion, parents and schools are mainly responsible for children's lifestyles, but they need support from governments and businesses if the situation is to improve."
  },
  speaking:{
    tip:"Part 2: bạn có 1 phút để ghi chú và nói 1–2 phút. Ghi vài ý chính cho mỗi gạch đầu dòng, dùng các gạch đầu dòng để dẫn dắt bài nói. Dùng cụm mở đầu (I'm going to talk about…), cụm giới thiệu ý (So let me tell you…, As I've mentioned…) và cụm kết thúc (All in all,…). Lên giọng khi ý chưa hết hoặc thông tin mới, xuống giọng khi kết thúc câu.",
    p1:["Do you enjoy cooking?","What did you eat for breakfast this morning?","How often do you eat out?","Do you think you have a healthy lifestyle?"],
    p1sample:{q:"How often do you eat out?",a:"Not very often, actually, maybe once or twice a week. I'm a student, so I can't afford to eat in restaurants all the time. Usually I eat out at the weekend with my friends, and we go to a small noodle shop near the university because it's cheap and really tasty."},
    cue:{t:"Describe somewhere you like to shop for food.",pts:["where this place is","what this place is like","what you buy there"],end:"and explain why you like buying food at this place."},
    p2sample:"I'm going to talk about a local market near my home in Hue. I really like going there, especially on Sunday mornings. So, let me tell you where it is. It's in a narrow street about five minutes' walk from my house, opposite an old temple, and the street is closed to cars in the morning, so it's quite safe to walk around. The market is always crowded and noisy, but in a nice way. There are dozens of stalls selling fruit, vegetables, fish and meat, and also some stalls that sell snacks like bánh bèo. What I usually buy there is vegetables and herbs, and sometimes fresh fish for dinner. I've got a favourite stall, which is run by an old lady who has known my family for years. She always gives me a little extra coriander for free! As I've mentioned, I like it because the food is fresh and cheap, but also because it's a very sociable place. You can chat with the sellers and hear all the local news. All in all, I like it because going there is a colourful experience, much more interesting than a supermarket.",
    p3:["Why do some people prefer supermarkets to traditional markets?","Is it the government's responsibility to make people eat healthily?","How have people's eating habits changed in your country?"],
    p3sample:{q:"Is it the government's responsibility to make people eat healthily?",a:"I think the government has some responsibility, but it can't make people change completely. For one thing, it can control advertising, especially adverts for sweets and fizzy drinks aimed at children. It can also make sure school meals are nutritious. But ultimately, what we eat is a personal choice, so I'd say education is more effective than strict rules."},
    phrases:["I'm going to talk about…","So, let me tell you where it is.","What I usually buy there is…","As I've mentioned,…","Another thing is…","All in all,…"]
  },
  lesson:[
    {g:"Mở đầu: thực phẩm hữu cơ",w:"battery farming",p:"n phr",ipa:"/ˈbætri ˈfɑːmɪŋ/",vi:"chăn nuôi công nghiệp nhốt chuồng",ex:"Many people believe battery farming is cruel to chickens.",exvi:"Nhiều người cho rằng chăn nuôi nhốt chuồng là tàn nhẫn với gà."},
    {g:"Mở đầu: thực phẩm hữu cơ",w:"outdoor farming",p:"n phr",ipa:"/ˈaʊtdɔː ˈfɑːmɪŋ/",vi:"chăn nuôi thả ngoài trời",ex:"Outdoor farming gives animals more space.",exvi:"Chăn nuôi thả ngoài trời cho vật nuôi nhiều không gian hơn."},
    {g:"Mở đầu: thực phẩm hữu cơ",w:"packaging",p:"n",ipa:"/ˈpækɪdʒɪŋ/",vi:"bao bì",ex:"Too much plastic packaging is bad for the environment.",exvi:"Quá nhiều bao bì nhựa gây hại cho môi trường."},
    {g:"Mở đầu: thực phẩm hữu cơ",w:"freshness",p:"n",ipa:"/ˈfreʃnəs/",vi:"độ tươi",ex:"Freshness is the most important thing when I buy fish.",exvi:"Độ tươi là điều quan trọng nhất khi tôi mua cá."},
    {g:"Mở đầu: thực phẩm hữu cơ",w:"appearance",p:"n",ipa:"/əˈpɪərəns/",vi:"vẻ bề ngoài",ex:"Shoppers often choose fruit by its appearance.",exvi:"Người mua thường chọn trái cây theo vẻ bề ngoài."},
    {g:"Reading: organic food",w:"promote",p:"v",ipa:"/prəˈməʊt/",vi:"khuyến khích, quảng bá",ex:"The government promotes natural farming methods.",exvi:"Chính phủ khuyến khích các phương pháp canh tác tự nhiên."},
    {g:"Reading: organic food",w:"compensate for",p:"v phr",ipa:"/ˈkɒmpenseɪt fə/",vi:"bù đắp cho",ex:"Higher prices compensate for lower yields.",exvi:"Giá cao hơn bù đắp cho năng suất thấp hơn."},
    {g:"Reading: organic food",w:"inefficient",p:"adj",ipa:"/ˌɪnɪˈfɪʃnt/",vi:"kém hiệu quả",ex:"This method is inefficient in its use of land.",exvi:"Phương pháp này sử dụng đất kém hiệu quả."},
    {g:"Reading: organic food",w:"statistically significant",p:"adj phr",ipa:"/stəˈtɪstɪkli sɪɡˈnɪfɪkənt/",vi:"có ý nghĩa thống kê",ex:"There was no statistically significant difference between the groups.",exvi:"Không có khác biệt nào có ý nghĩa thống kê giữa các nhóm."},
    {g:"Reading: organic food",w:"misleading",p:"adj",ipa:"/ˌmɪsˈliːdɪŋ/",vi:"gây hiểu lầm",ex:"The label on this product is misleading.",exvi:"Nhãn trên sản phẩm này gây hiểu lầm."},
    {g:"Reading: organic food",w:"flavour",p:"n",ipa:"/ˈfleɪvə/",vi:"hương vị",ex:"Fresh herbs add a lot of flavour to the soup.",exvi:"Rau thơm tươi làm món canh thêm đậm đà hương vị."},
    {g:"Reading: organic food",w:"contradict",p:"v",ipa:"/ˌkɒntrəˈdɪkt/",vi:"mâu thuẫn với, trái ngược với",ex:"The new findings contradict earlier research.",exvi:"Kết quả mới mâu thuẫn với nghiên cứu trước đó."},
    {g:"Reading: organic food",w:"additives",p:"n",ipa:"/ˈædətɪvz/",vi:"chất phụ gia",ex:"This bread contains no additives.",exvi:"Loại bánh mì này không chứa chất phụ gia."},
    {g:"Reading: organic food",w:"irrelevant",p:"adj",ipa:"/ɪˈreləvənt/",vi:"không liên quan, không quan trọng",ex:"For poor farmers, the debate is irrelevant.",exvi:"Với nông dân nghèo, cuộc tranh luận này chẳng liên quan gì."},
    {g:"Listening: bài nói chào mừng",w:"supervisor",p:"n",ipa:"/ˈsuːpəvaɪzə/",vi:"người giám sát, quản lý",ex:"My supervisor showed me around on my first day.",exvi:"Người quản lý dẫn tôi đi xem một vòng vào ngày đầu tiên."},
    {g:"Listening: bài nói chào mừng",w:"canteen",p:"n",ipa:"/kænˈtiːn/",vi:"căng tin",ex:"The hospital canteen is open 24 hours a day.",exvi:"Căng tin bệnh viện mở cửa 24 giờ mỗi ngày."},
    {g:"Listening: bài nói chào mừng",w:"germs",p:"n",ipa:"/dʒɜːmz/",vi:"vi trùng",ex:"Washing your hands removes germs.",exvi:"Rửa tay giúp loại bỏ vi trùng."},
    {g:"Listening: chỉ đường",w:"roundabout",p:"n",ipa:"/ˈraʊndəbaʊt/",vi:"vòng xuyến",ex:"Turn left at the roundabout.",exvi:"Rẽ trái ở vòng xuyến."},
    {g:"Listening: chỉ đường",w:"opposite",p:"prep",ipa:"/ˈɒpəzɪt/",vi:"đối diện",ex:"The pharmacy is opposite the bank.",exvi:"Hiệu thuốc nằm đối diện ngân hàng."},
    {g:"Listening: chỉ đường",w:"go straight on",p:"v phr",ipa:"/ɡəʊ streɪt ɒn/",vi:"đi thẳng",ex:"Go straight on until you reach the traffic lights.",exvi:"Đi thẳng cho đến khi gặp đèn giao thông."},
    {g:"Speaking Part 2",w:"pedestrian street",p:"n phr",ipa:"/pəˈdestriən striːt/",vi:"phố đi bộ",ex:"The market is in a pedestrian street.",exvi:"Khu chợ nằm trên một phố đi bộ."},
    {g:"Speaking Part 2",w:"bargain",p:"v",ipa:"/ˈbɑːɡɪn/",vi:"mặc cả",ex:"You can bargain with the sellers at the night market.",exvi:"Bạn có thể mặc cả với người bán ở chợ đêm."},
    {g:"Speaking Part 2",w:"reasonable",p:"adj",ipa:"/ˈriːznəbl/",vi:"(giá) phải chăng, hợp lý",ex:"The prices at this stall are always reasonable.",exvi:"Giá ở sạp này luôn phải chăng."},
    {g:"Speaking Part 2",w:"sociable",p:"adj",ipa:"/ˈsəʊʃəbl/",vi:"vui vẻ, có không khí giao lưu",ex:"The market is a very sociable place.",exvi:"Chợ là nơi rất vui vẻ, đông vui."},
    {g:"Writing Task 2: thói quen mua thực phẩm",w:"suit your lifestyle",p:"v phr",ipa:"/suːt jɔː ˈlaɪfstaɪl/",vi:"phù hợp với lối sống của bạn",ex:"Most people shop in a way that suits their lifestyle.",exvi:"Phần lớn mọi người mua sắm theo cách phù hợp với lối sống của họ."},
    {g:"Writing Task 2: thói quen mua thực phẩm",w:"finances",p:"n",ipa:"/ˈfaɪnænsɪz/",vi:"tình hình tài chính",ex:"Large families have to think about their finances.",exvi:"Gia đình đông con phải tính toán chuyện tài chính."},
    {g:"Writing Task 2: thói quen mua thực phẩm",w:"purchase",p:"v",ipa:"/ˈpɜːtʃəs/",vi:"mua",ex:"Customers can purchase tickets online.",exvi:"Khách hàng có thể mua vé trực tuyến."},
    {g:"Ôn tập Unit 2",w:"toxic",p:"adj",ipa:"/ˈtɒksɪk/",vi:"độc hại",ex:"Some cleaning products are toxic.",exvi:"Một số chất tẩy rửa có độc."},
    {g:"Ôn tập Unit 2",w:"exhausted",p:"adj",ipa:"/ɪɡˈzɔːstɪd/",vi:"kiệt sức",ex:"I was exhausted after the long shift.",exvi:"Tôi kiệt sức sau ca làm dài."}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u2 = {
  tips:{
    reading:[
      {type:"Matching headings (Reading 2)", tips:[
        "Phần tiêu đề nằm trước bài đọc. Đọc các tiêu đề trước và gạch chân ý chính của từng tiêu đề.",
        "Đọc từng đoạn cẩn thận, lần lượt, rồi chọn tiêu đề tóm đúng ý chính của cả đoạn, không chỉ một câu.",
        "Có nhiều tiêu đề hơn số đoạn. Cẩn thận với tiêu đề có từ giống trong bài nhưng sai ý.",
        "Làm đoạn dễ trước, gạch bỏ tiêu đề đã dùng."
      ]},
      {type:"Pick from a list", tips:[
        "Dùng ý chính trong câu hỏi để tìm đúng chỗ trong bài.",
        "Gạch chân đáp án trong bài rồi đối chiếu với các phương án.",
        "Đáp án có thể nằm ở một đoạn hoặc rải rác ở nhiều đoạn.",
        "Thứ tự hai đáp án không quan trọng, nhưng phải chọn đủ hai."
      ]}
    ],
    listening:[
      {type:"Multiple choice (Section 2)", tips:[
        "Section 2 là một người nói về chủ đề đời sống.",
        "Nghe ý đúng, đừng chỉ chọn phương án có từ giống từ bạn nghe thấy.",
        "Trả lời đủ tất cả câu hỏi, kể cả khi không chắc."
      ]},
      {type:"Labelling a map or plan", tips:[
        "Trước khi nghe, xem vị trí của từng phương án trên sơ đồ và tìm điểm bắt đầu.",
        "Đáp án xuất hiện theo đúng thứ tự câu hỏi.",
        "Nghe tên từng địa điểm rồi đi theo lời chỉ đường: opposite, next to, behind, on the corner, go past.",
        "Ôn trước các từ chỉ hướng: turn left/right, go straight on, east/west of."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 2", tips:[
        "Ghi vài ý chính cho mỗi gạch đầu dòng trên thẻ để nhắc bạn.",
        "Dùng ghi chú và các gạch đầu dòng để dẫn dắt bài nói theo thứ tự.",
        "Dùng cụm từ để giới thiệu ý và giữ cho bài nói liền mạch (So let me tell you…, As I've mentioned…).",
        "Dùng ngữ điệu để làm nổi bật thông tin quan trọng, giúp giám khảo theo dõi.",
        "Nói đến khi giám khảo bảo dừng (khoảng 2 phút)."
      ]}
    ],
    writing:[
      {type:"Writing Task 2", tips:[
        "Phân tích đề kỹ trước. Bạn sẽ mất điểm nếu không trả lời hết các phần của đề.",
        "Brainstorm ý rồi viết dàn ý nhanh.",
        "Viết theo đoạn, mỗi đoạn một ý chính, theo đúng dàn ý.",
        "Không viết gạch đầu dòng, không chép nguyên văn đề. Kiểm tra chính tả.",
        "Viết ít nhất 250 từ trong khoảng 40 phút."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"In general, people should eat more healthy.", good:"In general, people should eat more healthily.", why:"Bổ nghĩa cho động từ eat → trạng từ healthily."},
    {k:"vocab", bad:"Pesticides may be harmy to our health.", good:"Pesticides may be harmful to our health.", why:"harm + -ful → harmful."},
    {k:"vocab", bad:"Using natural fertiliser is too unconvenient.", good:"Using natural fertiliser is too inconvenient.", why:"Tiền tố phủ định của convenient là in-."},
    {k:"vocab", bad:"The media often give usefull advice.", good:"The media often give useful advice.", why:"Hậu tố -ful chỉ có một chữ l."},
    {k:"vocab", bad:"There has been a slightly drop in fast-food sales.", good:"There has been a slight drop in fast-food sales.", why:"Bổ nghĩa cho danh từ drop → tính từ slight."},
    {k:"vocab", bad:"Most people can easy do some exercise.", good:"Most people can easily do some exercise.", why:"Bổ nghĩa cho động từ → trạng từ easily."},
    {k:"grammar", bad:"Can you give me some advices?", good:"Can you give me some advice?", why:"advice không đếm được."},
    {k:"grammar", bad:"Children need clear informations about food.", good:"Children need clear information about food.", why:"information không đếm được."},
    {k:"grammar", bad:"Recently, the number of fast food eaten has increased.", good:"Recently, the amount of fast food eaten has increased.", why:"fast food không đếm được → amount."},
    {k:"grammar", bad:"Some children eat much oily food.", good:"Some children eat a lot of oily food.", why:"Trong câu khẳng định, a lot of tự nhiên hơn much."}
  ],
  fix:[
    {t:"gap", q:"The number of people who live to 100 has increased dramaticaly. → Sửa: ___", a:["dramatically"], e:"-ic + -ally."},
    {t:"gap", q:"I don't think that wealth people should get the best food. → Sửa: ___", a:["wealthy"], e:"Tính từ đứng trước danh từ → wealthy."},
    {t:"gap", q:"Organic farming causes less pollutions. → Sửa: ___", a:["pollution"], e:"Không đếm được."},
    {t:"gap", q:"More researches is needed on organic farming. → Sửa: ___", a:["research"], e:"research không đếm được."},
    {t:"gap", q:"I go to fast-food shop as little as possible. → Sửa: ___", a:["fast-food shops","shops"], e:"Danh từ đếm được số ít cần a/the; ở đây dùng số nhiều."},
    {t:"gap", q:"A shift worker can have very stressful lifestyle. → Sửa: ___", a:["a very stressful lifestyle"], e:"lifestyle đếm được số ít → cần a."},
    {t:"gap", q:"Technology brings much advantages to our lives. → Sửa: ___", a:["many","many advantages"], e:"advantages đếm được."},
    {t:"gap", q:"Few years ago there were not many microwaves here. → Sửa: ___", a:["A few","a few"], e:"a few years ago = vài năm trước."},
    {t:"gap", q:"Some people say a little knowledges can be dangerous. → Sửa: ___", a:["knowledge"], e:"knowledge không đếm được."},
    {t:"gap", q:"The key to good healthy is a balanced diet. → Sửa: ___", a:["health"], e:"Sau good cần danh từ health."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u2 = [
  {q:"There isn't ___ fresh fruit in the fridge.",o:["much","many","a few"],a:0,e:"fruit không đếm được.",k:"c"},
  {q:"How ___ vegetables do you eat every day?",o:["many","much","little"],a:0,e:"vegetables đếm được.",k:"c"},
  {q:"I only have ___ money left, so I'll buy rice.",o:["a little","a few","many"],a:0,e:"money không đếm được.",k:"c"},
  {q:"___ students eat breakfast before class, which is worrying.",o:["Few","Little","Much"],a:0,e:"students đếm được, ý tiêu cực → few.",k:"c"},
  {q:"She gave me some useful ___ about running.",o:["tips","advices","informations"],a:0,e:"tip đếm được; advice/information không.",k:"c"},
  {q:"We bought new ___ for the kitchen.",o:["equipment","equipments","an equipment"],a:0,e:"equipment không đếm được.",k:"c"},
  {q:"A large ___ of fertiliser is used on this farm.",o:["amount","number","many"],a:0,e:"fertiliser không đếm được → amount.",k:"c"},
  {q:"There are ___ of healthy options on the menu.",o:["plenty","much","a great deal"],a:0,e:"plenty of dùng cho cả hai loại.",k:"c"},
  {q:"I need ___ time to finish my essay.",o:["a little more","a few more","many more"],a:0,e:"time không đếm được.",k:"c"},
  {q:"The doctor did ___ tests on my blood.",o:["a few","a little","much"],a:0,e:"tests đếm được.",k:"c"},
  {q:"___ research has been done on this topic.",o:["A great deal of","A large number of","Many"],a:0,e:"research không đếm được.",k:"c"},
  {q:"There were too ___ people at the market.",o:["many","much","little"],a:0,e:"people đếm được.",k:"c"},
  {t:"gap",q:"I'd like ___ (a/an/some) information about the gym.",a:["some"],e:"information không đi với a/an.",k:"g"},
  {t:"gap",q:"She ate ___ (a/an/some) apple after lunch.",a:["an"],e:"apple đếm được, bắt đầu bằng nguyên âm.",k:"g"},
  {t:"gap",q:"The ___ (number/amount) of fast-food restaurants has doubled.",a:["number"],e:"restaurants đếm được.",k:"g"},
  {t:"gap",q:"We don't have ___ (many/much) homework this week.",a:["much"],e:"homework không đếm được.",k:"g"},
  {t:"gap",q:"There are only ___ (a few/a little) organic shops in my town.",a:["a few"],e:"shops đếm được.",k:"g"},
  {t:"gap",q:"Can you give me ___ (a/some) advice?",a:["some"],e:"advice không đếm được.",k:"g"},
  {t:"gap",q:"Eating ___ (health) is not always expensive.",a:["healthily"],e:"Trạng từ bổ nghĩa cho eating.",k:"g"},
  {t:"gap",q:"The water in that river is ___ (pollute).",a:["polluted"],e:"Tính từ -ed.",k:"g"},
  {t:"gap",q:"Fried food is ___ (health) if you eat it every day.",a:["unhealthy"],e:"Tiền tố un- → nghĩa phủ định.",k:"g"},
  {q:"Câu nào đúng?",o:["I bought some breads at the bakery.","I bought some bread at the bakery."],a:1,e:"bread không đếm được.",k:"s"},
  {q:"Câu nào đúng?",o:["A balanced diet is important.","Balanced diet is important."],a:0,e:"diet đếm được số ít → cần a.",k:"s"},
  {q:"Câu nào đúng?",o:["There is less traffic today.","There is fewer traffic today."],a:0,e:"traffic không đếm được → less.",k:"s"},
  {q:"Câu nào đúng?",o:["We had a lot of fun at the festival.","We had a lot of funs at the festival."],a:0,e:"fun không đếm được.",k:"s"},
  {q:"Câu nào đúng?",o:["The news are surprising.","The news is surprising."],a:1,e:"news là danh từ không đếm được, động từ số ít.",k:"s"},
  {q:"Câu nào đúng?",o:["I have little time, so I can't cook.","I have a little time, so I can't cook."],a:0,e:"Ý tiêu cực → little.",k:"s"},
  {q:"Câu nào đúng?",o:["There are many furnitures in the room.","There is a lot of furniture in the room."],a:1,e:"furniture không đếm được.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u2:approach":{s:["method","way"]},
  "b2u2:artificial":{s:["man-made","synthetic"],a:["natural"]},
  "b2u2:avoid":{s:["stay away from","keep away from"],a:["seek","choose"]},
  "b2u2:conventional":{s:["traditional","usual"],a:["unconventional","alternative"]},
  "b2u2:create":{s:["make","produce"],a:["destroy"]},
  "b2u2:emit":{s:["release","give off"],a:["absorb"]},
  "b2u2:influence":{s:["affect","shape"]},
  "b2u2:luxury":{s:["treat","extravagance"],a:["necessity"]},
  "b2u2:man-made":{s:["artificial","synthetic"],a:["natural"]},
  "b2u2:reject":{s:["refuse","turn down","dismiss"],a:["accept","approve"]},
  "b2u2:trend":{s:["tendency","fashion"]},
  "b2u2:ultimately":{s:["in the end","finally"]},
  "b2u2:value":{s:["worth","importance"]},
  "b2u2:nutritious":{s:["healthy","nourishing"],a:["unhealthy"]},
  "b2u2:harmful":{s:["damaging","dangerous"],a:["harmless","beneficial"]},
  "b2u2:wealthy":{s:["rich","well-off"],a:["poor"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u2|Is Local Food Always Better?"] = [["slogan","n","khẩu hiệu"],["packaging","n","bao bì"],["campaigner","n","nhà vận động"],["air freight","n phr","vận chuyển hàng không"],["proportion","n","tỉ lệ"],["efficient","adj","hiệu quả"],["heated greenhouse","n phr","nhà kính có sưởi"],["emissions","n","khí thải"],["nutritionist","n","chuyên gia dinh dưỡng"],["harvest","v","thu hoạch"],["economic case","n phr","lý lẽ về mặt kinh tế"],["rural areas","n phr","vùng nông thôn"],["imported","adj","nhập khẩu"],["in season","phrase","đúng mùa"]];
})();
