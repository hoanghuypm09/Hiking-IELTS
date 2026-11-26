/* Complete IELTS Bands 5–6.5 · Unit 6: Making money, spending money.
   Chủ đề, điểm ngữ pháp, dạng câu hỏi và Word list theo sách; bài đọc, bài nghe, câu hỏi, bài mẫu và câu ví dụ là nội dung tự viết. */
(function(){
const U = {
  id:"b2u6", title:"Making money, spending money", vi:"Tiền bạc & mua sắm",
  focus:{reading:"Labelling a diagram · True / False / Not Given · Flow-chart completion", listening:"Section 2: Matching · Labelling a diagram", speaking:"Part 2 và 3: đưa lý do và ví dụ, tự sửa lỗi và diễn đạt lại cho rõ", writing:"Task 2: ưu điểm có lớn hơn nhược điểm không, mỗi đoạn một khía cạnh", vocab:"Verb + to do / verb + doing (afford to buy, enjoy browsing)", pron:"Word stress: trọng âm của từ nhiều âm tiết"},
  vocab:[
    {g:"Word list của sách",w:"afford",p:"v",ipa:"/əˈfɔːd/",vi:"đủ khả năng (chi trả)",ex:"Many students can't afford to buy new textbooks.",exvi:"Nhiều sinh viên không đủ tiền mua sách giáo khoa mới."},
    {g:"Word list của sách",w:"attract publicity",p:"phrase",ipa:"/əˈtrækt pʌbˈlɪsəti/",vi:"thu hút sự chú ý của truyền thông",ex:"Internet fraud attracts the most publicity.",exvi:"Lừa đảo trên mạng thu hút nhiều sự chú ý của truyền thông nhất."},
    {g:"Word list của sách",w:"bargain",p:"n",ipa:"/ˈbɑːɡɪn/",vi:"món hời, hàng giá rẻ",ex:"These shoes were a real bargain at half price.",exvi:"Đôi giày này đúng là món hời với giá giảm một nửa."},
    {g:"Word list của sách",w:"become common",p:"phrase",ipa:"/bɪˈkʌm ˈkɒmən/",vi:"trở nên phổ biến",ex:"Paying by QR code has become common in Vietnam.",exvi:"Thanh toán bằng mã QR đã trở nên phổ biến ở Việt Nam."},
    {g:"Word list của sách",w:"boost sales",p:"phrase",ipa:"/buːst seɪlz/",vi:"tăng doanh số",ex:"Free samples help boost sales of new products.",exvi:"Hàng mẫu miễn phí giúp tăng doanh số sản phẩm mới."},
    {g:"Word list của sách",w:"branded product",p:"n",ipa:"/ˈbrændɪd ˈprɒdʌkt/",vi:"sản phẩm có thương hiệu",ex:"Branded products are usually placed at eye level.",exvi:"Sản phẩm có thương hiệu thường được đặt ngang tầm mắt."},
    {g:"Word list của sách",w:"efficient",p:"adj",ipa:"/ɪˈfɪʃnt/",vi:"hiệu quả",ex:"Central bakeries are more efficient than in-store ones.",exvi:"Lò bánh trung tâm hiệu quả hơn lò bánh trong siêu thị."},
    {g:"Word list của sách",w:"end up",p:"phr v",ipa:"/end ʌp/",vi:"rốt cuộc, cuối cùng lại",ex:"I went in for milk and ended up buying a new T-shirt.",exvi:"Tôi vào mua sữa và rốt cuộc lại mua thêm cái áo phông mới."},
    {g:"Word list của sách",w:"forecast",p:"v",ipa:"/ˈfɔːkɑːst/",vi:"dự báo",ex:"Oil prices are forecast to rise next year.",exvi:"Giá dầu được dự báo sẽ tăng vào năm tới."},
    {g:"Word list của sách",w:"go from shop to shop",p:"phrase",ipa:"/ɡəʊ frəm ʃɒp tə ʃɒp/",vi:"đi hết cửa hàng này sang cửa hàng khác",ex:"Online, you can compare prices without going from shop to shop.",exvi:"Trên mạng, bạn có thể so giá mà không phải đi hết cửa hàng này sang cửa hàng khác."},
    {g:"Word list của sách",w:"highly profitable",p:"phrase",ipa:"/ˈhaɪli ˈprɒfɪtəbl/",vi:"rất có lãi",ex:"Selling coffee can be highly profitable.",exvi:"Bán cà phê có thể rất có lãi."},
    {g:"Word list của sách",w:"living standards",p:"n",ipa:"/ˈlɪvɪŋ ˈstændədz/",vi:"mức sống",ex:"Living standards have improved a lot in the last twenty years.",exvi:"Mức sống đã cải thiện nhiều trong hai mươi năm qua."},
    {g:"Word list của sách",w:"in the medium term",p:"phrase",ipa:"/ɪn ðə ˈmiːdiəm tɜːm/",vi:"trong trung hạn",ex:"Prices are expected to stay high in the medium term.",exvi:"Giá cả được dự kiến sẽ ở mức cao trong trung hạn."},
    {g:"Word list của sách",w:"outweigh",p:"v",ipa:"/ˌaʊtˈweɪ/",vi:"lớn hơn, vượt trội hơn",ex:"The advantages of online shopping outweigh the disadvantages.",exvi:"Ưu điểm của mua sắm trực tuyến lớn hơn nhược điểm."},
    {g:"Word list của sách",w:"own-label product",p:"n",ipa:"/ˌəʊn ˈleɪbl ˈprɒdʌkt/",vi:"sản phẩm mang nhãn riêng của cửa hàng",ex:"Own-label products are often cheaper than famous brands.",exvi:"Sản phẩm nhãn riêng thường rẻ hơn hàng thương hiệu nổi tiếng."},
    {g:"Word list của sách",w:"promotion",p:"n",ipa:"/prəˈməʊʃn/",vi:"khuyến mãi, quảng bá",ex:"The supermarket has a big promotion on rice this week.",exvi:"Siêu thị đang có chương trình khuyến mãi lớn cho gạo tuần này."},
    {g:"Word list của sách",w:"purchase",p:"v / n",ipa:"/ˈpɜːtʃəs/",vi:"mua / món hàng đã mua",ex:"You can purchase tickets online.",exvi:"Bạn có thể mua vé trực tuyến."},
    {g:"Word list của sách",w:"at a rate of",p:"phrase",ipa:"/ət ə reɪt əv/",vi:"với tỉ lệ / tốc độ",ex:"Customers who tried clothes on bought them at a rate of 85%.",exvi:"Khách đã thử quần áo mua với tỉ lệ 85%."},
    {g:"Word list của sách",w:"reckon",p:"v",ipa:"/ˈrekən/",vi:"cho rằng, nghĩ rằng",ex:"Many stores reckon eye level is the best position.",exvi:"Nhiều cửa hàng cho rằng ngang tầm mắt là vị trí tốt nhất."},
    {g:"Word list của sách",w:"retailer",p:"n",ipa:"/ˈriːteɪlə/",vi:"nhà bán lẻ",ex:"Walmart is the world's biggest retailer.",exvi:"Walmart là nhà bán lẻ lớn nhất thế giới."},
    {g:"Word list của sách",w:"take time",p:"phrase",ipa:"/teɪk taɪm/",vi:"mất thời gian",ex:"It takes time to save enough money for a house.",exvi:"Phải mất thời gian mới tiết kiệm đủ tiền mua nhà."},
    {g:"Word list của sách",w:"tempt",p:"v",ipa:"/tempt/",vi:"cám dỗ, dụ dỗ",ex:"Sweets at the checkout tempt children.",exvi:"Kẹo ở quầy thanh toán dụ dỗ trẻ em."},
    {g:"Word list của sách",w:"think in terms of",p:"phrase",ipa:"/θɪŋk ɪn tɜːmz əv/",vi:"nghĩ theo góc độ",ex:"Young people think in terms of experiences rather than things.",exvi:"Người trẻ nghĩ theo góc độ trải nghiệm hơn là đồ vật."},
    {g:"Ngân hàng & tiền bạc",w:"account",p:"n",ipa:"/əˈkaʊnt/",vi:"tài khoản",ex:"I opened a bank account when I started university.",exvi:"Tôi mở tài khoản ngân hàng khi bắt đầu học đại học."},
    {g:"Ngân hàng & tiền bạc",w:"balance",p:"n",ipa:"/ˈbæləns/",vi:"số dư",ex:"You can check your balance on the app.",exvi:"Bạn có thể kiểm tra số dư trên ứng dụng."},
    {g:"Ngân hàng & tiền bạc",w:"branch",p:"n",ipa:"/brɑːntʃ/",vi:"chi nhánh",ex:"The bank has a branch on the campus.",exvi:"Ngân hàng có một chi nhánh trong khuôn viên trường."},
    {g:"Ngân hàng & tiền bạc",w:"direct debit",p:"n",ipa:"/dəˌrekt ˈdebɪt/",vi:"lệnh ghi nợ tự động",ex:"I pay my phone bill by direct debit.",exvi:"Tôi trả hoá đơn điện thoại bằng lệnh ghi nợ tự động."},
    {g:"Ngân hàng & tiền bạc",w:"in credit",p:"phrase",ipa:"/ɪn ˈkredɪt/",vi:"(tài khoản) còn tiền, dư có",ex:"Keep your account in credit to avoid charges.",exvi:"Giữ tài khoản luôn còn tiền để tránh bị tính phí."},
    {g:"Ngân hàng & tiền bạc",w:"interest rate",p:"n",ipa:"/ˈɪntrəst reɪt/",vi:"lãi suất",ex:"Some banks offer special interest rates for students.",exvi:"Một số ngân hàng có lãi suất ưu đãi cho sinh viên."},
    {g:"Ngân hàng & tiền bạc",w:"overdraft",p:"n",ipa:"/ˈəʊvədrɑːft/",vi:"khoản thấu chi",ex:"Students can have an overdraft without paying interest.",exvi:"Sinh viên có thể thấu chi mà không phải trả lãi."},
    {g:"Ngân hàng & tiền bạc",w:"savings",p:"n",ipa:"/ˈseɪvɪŋz/",vi:"tiền tiết kiệm",ex:"She spent all her savings on a trip to Japan.",exvi:"Cô ấy tiêu hết tiền tiết kiệm cho chuyến đi Nhật."},
    {g:"Ngân hàng & tiền bạc",w:"take out a loan",p:"phrase",ipa:"/teɪk aʊt ə ləʊn/",vi:"vay tiền (ngân hàng)",ex:"He took out a loan to pay his university fees.",exvi:"Anh ấy vay tiền để trả học phí đại học."},
    {g:"Ngân hàng & tiền bạc",w:"expiry date",p:"n",ipa:"/ɪkˈspaɪəri deɪt/",vi:"ngày hết hạn",ex:"Check the expiry date on your card.",exvi:"Kiểm tra ngày hết hạn trên thẻ của bạn."},
    {g:"Mua sắm",w:"aisle",p:"n",ipa:"/aɪl/",vi:"lối đi giữa các kệ hàng",ex:"Milk is usually in the last aisle.",exvi:"Sữa thường ở lối đi cuối cùng."},
    {g:"Mua sắm",w:"impulse buy",p:"n",ipa:"/ˈɪmpʌls baɪ/",vi:"món đồ mua theo cảm hứng (không định trước)",ex:"Chocolate at the checkout is a typical impulse buy.",exvi:"Sô-cô-la ở quầy thanh toán là món điển hình được mua theo cảm hứng."},
    {g:"Mua sắm",w:"internet fraud",p:"n",ipa:"/ˈɪntənet frɔːd/",vi:"lừa đảo trên mạng",ex:"Internet fraud is a serious risk of online shopping.",exvi:"Lừa đảo trên mạng là một rủi ro lớn khi mua sắm trực tuyến."},
    {g:"Mua sắm",w:"refund",p:"n",ipa:"/ˈriːfʌnd/",vi:"tiền hoàn lại",ex:"If the product is damaged, you can ask for a refund.",exvi:"Nếu sản phẩm bị hỏng, bạn có thể yêu cầu hoàn tiền."},
    {g:"Verb + to do / doing",w:"enjoy doing",p:"phrase",ipa:"/ɪnˈdʒɔɪ ˈduːɪŋ/",vi:"thích làm gì (+ V-ing)",ex:"Customers enjoy browsing magazines in the chill zone.",exvi:"Khách hàng thích xem lướt tạp chí ở ‘khu thư giãn’."},
    {g:"Verb + to do / doing",w:"recommend doing",p:"phrase",ipa:"/ˌrekəˈmend ˈduːɪŋ/",vi:"khuyên làm gì (+ V-ing)",ex:"I strongly recommend using small local shops.",exvi:"Tôi rất khuyến khích mua ở các cửa hàng nhỏ địa phương."},
    {g:"Verb + to do / doing",w:"expect to do",p:"phrase",ipa:"/ɪkˈspekt tə duː/",vi:"mong đợi, dự kiến làm gì (+ to V)",ex:"Supermarkets do not expect to sell much near the entrance.",exvi:"Siêu thị không mong bán được nhiều ở gần lối vào."},
    {g:"Verb + to do / doing",w:"enable someone to do",p:"phrase",ipa:"/ɪˈneɪbl ˈsʌmwʌn tə duː/",vi:"giúp ai có thể làm gì",ex:"Pocket money enables children to buy small things.",exvi:"Tiền tiêu vặt giúp trẻ có thể mua những thứ nhỏ."}
  ],
  phrases:[
    {g:"Tính từ + danh từ",w:"unplanned purchases",p:"noun phrase",ipa:"/ʌnˈplænd ˈpɜːtʃəsɪz/",vi:"những món mua ngoài dự định",ex:"Magazines near the entrance tempt unplanned purchases.",exvi:"Tạp chí gần lối vào dụ khách mua ngoài dự định."},
    {g:"Tính từ + danh từ",w:"everyday items",p:"noun phrase",ipa:"/ˈevrideɪ ˈaɪtəmz/",vi:"đồ dùng hằng ngày",ex:"Everyday items like milk are placed at the back.",exvi:"Đồ dùng hằng ngày như sữa được đặt ở phía sau."},
    {g:"Tính từ + danh từ",w:"ready meals",p:"noun phrase",ipa:"/ˈredi miːlz/",vi:"món ăn làm sẵn",ex:"The smell of bread makes people buy ready meals too.",exvi:"Mùi bánh mì khiến người ta mua cả món ăn làm sẵn."},
    {g:"Tính từ + danh từ",w:"pocket money",p:"noun phrase",ipa:"/ˈpɒkɪt ˈmʌni/",vi:"tiền tiêu vặt",ex:"Should parents give children pocket money?",exvi:"Cha mẹ có nên cho con tiền tiêu vặt không?"},
    {g:"Tính từ + danh từ",w:"a secure website",p:"noun phrase",ipa:"/ə sɪˈkjʊə ˈwebsaɪt/",vi:"trang web bảo mật",ex:"Only enter your card details on a secure website.",exvi:"Chỉ nhập thông tin thẻ trên trang web bảo mật."},
    {g:"Tính từ + danh từ",w:"a part-time job",p:"noun phrase",ipa:"/ə ˌpɑːt ˈtaɪm dʒɒb/",vi:"việc làm bán thời gian",ex:"Many students take a part-time job to pay their fees.",exvi:"Nhiều sinh viên làm thêm bán thời gian để trả học phí."},
    {g:"Danh từ + danh từ",w:"shopping list",p:"noun phrase",ipa:"/ˈʃɒpɪŋ lɪst/",vi:"danh sách đồ cần mua",ex:"Always take a shopping list to the supermarket.",exvi:"Luôn mang theo danh sách đồ cần mua khi đi siêu thị."},
    {g:"Danh từ + danh từ",w:"credit card details",p:"noun phrase",ipa:"/ˈkredɪt kɑːd ˈdiːteɪlz/",vi:"thông tin thẻ tín dụng",ex:"Hackers may copy your credit card details.",exvi:"Tin tặc có thể sao chép thông tin thẻ tín dụng của bạn."},
    {g:"Danh từ + danh từ",w:"bank charges",p:"noun phrase",ipa:"/bæŋk ˈtʃɑːdʒɪz/",vi:"phí ngân hàng",ex:"Students pay no bank charges at this bank.",exvi:"Sinh viên không phải trả phí ngân hàng tại ngân hàng này."},
    {g:"Danh từ + danh từ",w:"dwell time",p:"noun phrase",ipa:"/dwel taɪm/",vi:"thời gian khách ở lại trong cửa hàng",ex:"Supermarkets try to increase dwell time.",exvi:"Siêu thị cố tăng thời gian khách ở lại trong cửa hàng."},
    {g:"Danh từ + danh từ",w:"shelf position",p:"noun phrase",ipa:"/ʃelf pəˈzɪʃn/",vi:"vị trí trên kệ",ex:"Companies pay for the best shelf positions.",exvi:"Các công ty trả tiền để có vị trí trên kệ đẹp nhất."},
    {g:"Danh từ + danh từ",w:"customer service",p:"noun phrase",ipa:"/ˈkʌstəmə ˈsɜːvɪs/",vi:"dịch vụ khách hàng",ex:"Good customer service keeps people coming back.",exvi:"Dịch vụ khách hàng tốt khiến khách quay lại."},
    {g:"Danh từ + of + danh từ",w:"value for money",p:"noun phrase",ipa:"/ˈvæljuː fə ˈmʌni/",vi:"đáng đồng tiền",ex:"This phone is good value for money.",exvi:"Chiếc điện thoại này rất đáng đồng tiền."},
    {g:"Danh từ + of + danh từ",w:"people from all walks of life",p:"noun phrase",ipa:"/ˈpiːpl frəm ɔːl wɔːks əv laɪf/",vi:"mọi tầng lớp trong xã hội",ex:"People from all walks of life enjoy shopping.",exvi:"Mọi tầng lớp trong xã hội đều thích mua sắm."}
  ],
  collocs:[
    {g:"Động từ + danh từ",w:"save money",p:"collocation",ipa:"/seɪv ˈmʌni/",vi:"tiết kiệm tiền",ex:"I'm trying to save money for a laptop.",exvi:"Tôi đang cố tiết kiệm tiền mua máy tính xách tay."},
    {g:"Động từ + danh từ",w:"waste money on",p:"collocation",ipa:"/weɪst ˈmʌni ɒn/",vi:"phí tiền vào",ex:"Don't waste money on things you don't need.",exvi:"Đừng phí tiền vào những thứ bạn không cần."},
    {g:"Động từ + danh từ",w:"make a profit",p:"collocation",ipa:"/meɪk ə ˈprɒfɪt/",vi:"có lãi",ex:"Small shops find it hard to make a profit.",exvi:"Các cửa hàng nhỏ khó có lãi."},
    {g:"Động từ + danh từ",w:"run a business",p:"collocation",ipa:"/rʌn ə ˈbɪznəs/",vi:"điều hành công việc kinh doanh",ex:"My aunt runs a small business selling coffee.",exvi:"Dì tôi điều hành một cơ sở kinh doanh nhỏ bán cà phê."},
    {g:"Động từ + danh từ",w:"compare prices",p:"collocation",ipa:"/kəmˈpeə ˈpraɪsɪz/",vi:"so sánh giá",ex:"Websites make it easy to compare prices.",exvi:"Các trang web giúp so sánh giá dễ dàng."},
    {g:"Động từ + danh từ",w:"pay in cash",p:"collocation",ipa:"/peɪ ɪn kæʃ/",vi:"trả bằng tiền mặt",ex:"My grandmother always pays in cash.",exvi:"Bà tôi luôn trả bằng tiền mặt."},
    {g:"Động từ + danh từ",w:"pay by credit card",p:"collocation",ipa:"/peɪ baɪ ˈkredɪt kɑːd/",vi:"trả bằng thẻ tín dụng",ex:"People who pay by credit card often spend more.",exvi:"Người trả bằng thẻ tín dụng thường tiêu nhiều hơn."},
    {g:"Động từ + danh từ",w:"try on clothes",p:"collocation",ipa:"/traɪ ɒn kləʊðz/",vi:"thử quần áo",ex:"I prefer to try on clothes before buying them.",exvi:"Tôi thích thử quần áo trước khi mua."},
    {g:"Động từ + danh từ",w:"leave empty-handed",p:"collocation",ipa:"/liːv ˌempti ˈhændɪd/",vi:"ra về tay không",ex:"Many customers leave empty-handed because they can't decide.",exvi:"Nhiều khách ra về tay không vì không quyết định được."},
    {g:"Tính từ + danh từ",w:"a well-paid job",p:"collocation",ipa:"/ə ˌwel ˈpeɪd dʒɒb/",vi:"công việc lương cao",ex:"Most people dream of a secure, well-paid job.",exvi:"Phần lớn mọi người mơ về một công việc ổn định, lương cao."},
    {g:"Tính từ + danh từ",w:"a large profit",p:"collocation",ipa:"/ə lɑːdʒ ˈprɒfɪt/",vi:"lợi nhuận lớn",ex:"The bank made a large profit last year.",exvi:"Ngân hàng có lợi nhuận lớn năm ngoái."},
    {g:"Động từ + giới từ",w:"spend money on",p:"collocation",ipa:"/spend ˈmʌni ɒn/",vi:"tiêu tiền vào",ex:"Teenagers spend a lot of money on clothes.",exvi:"Thanh thiếu niên tiêu nhiều tiền vào quần áo."}
  ],
  grammar:{
    title:"Relative clauses & relative pronouns",
    rules:[
      {h:"who / which / that",use:["who: chỉ người","which: chỉ vật","that: chỉ người hoặc vật (trong mệnh đề xác định)"],form:"People who pay by card… · Shops which/that sell fashion…",ex:"Someone who wants to buy clothes should visit shops.",sig:"đứng ngay sau danh từ"},
      {h:"whose / where / when / why",use:["whose: của người/vật đó","where: nơi chốn (= in/at which)","when: thời điểm","why: lý do (the reason why)"],form:"the town where I was born · the age when I left school",ex:"Results are better in countries where teachers are well paid.",sig:"thay cho giới từ + which"},
      {h:"what = the thing(s) which",use:["what không đứng sau danh từ","Sai: something what → đúng: something that/which"],form:"What most people dream of is a secure job.",ex:"It's not difficult to spend money on what they want.",sig:"không có danh từ đứng trước"},
      {h:"Mệnh đề xác định & không xác định",use:["Xác định: cần thiết để biết nói về ai/cái gì, không có dấu phẩy","Không xác định: thêm thông tin, có dấu phẩy, không dùng that"],form:"My brother, who lives in Hue, is a teacher.",ex:"Walmart, which is the world's biggest retailer, employs greeters.",sig:"dấu phẩy"}
    ],
    quiz:[
      {q:"It is easy for young people to spend money on ___ they want.",o:["what","which","who"],a:0,e:"what = the things which."},
      {q:"Internet shopping is hard in places ___ do not have good delivery services.",o:["which","who","where"],a:0,e:"places làm chủ ngữ của do → which/that."},
      {q:"The Internet can be used by people ___ are travelling.",o:["who","which","whose"],a:0,e:"Chỉ người → who."},
      {q:"We'd like to spend our money on something ___ makes us happy.",o:["that","what","who"],a:0,e:"Sau something → that, không dùng what."},
      {q:"My parents moved from the town ___ I was born.",o:["where","which","when"],a:0,e:"Nơi chốn → where."},
      {q:"Parents should give pocket money to children ___ help with the housework.",o:["who","which","whose"],a:0,e:"Chỉ người."},
      {q:"I got my first job in a town ___ my cousin lives.",o:["where","which","who"],a:0,e:"Nơi chốn."},
      {q:"This is the shop ___ owner is my neighbour.",o:["whose","who","which"],a:0,e:"Sở hữu → whose."}
    ]
  },
  reading:{
    title:"Why We Pay More Online", est:"khoảng 500 từ · 19 phút",
    paras:[
      "When online shopping first became popular, many economists predicted that it would make prices lower and shoppers wiser. With every product and price just a click away, they argued, customers would always find the cheapest option. Twenty years later, the reality is rather different. Online retailers have become extremely skilled at persuading us to spend more than we planned.",
      "The process often begins before we even visit a shopping website. Advertisements follow us from page to page, reminding us of products we looked at days earlier. Once we arrive on the site, the home page is carefully designed. Products that the company most wants to sell are placed in the top left-hand corner, because research shows that this is where most people look first.",
      "One of the most effective techniques is what designers call ‘social proof’. Messages such as ‘17 people are looking at this hotel right now’ or ‘Only 2 left in stock!’ create a sense of urgency. Shoppers worry that they will miss an opportunity, so they decide more quickly and compare fewer alternatives. A study at a European university found that adding such messages increased sales by around 10 percent, even when the information was not completely accurate.",
      "Free delivery is another powerful tool. Many websites offer free delivery only when customers spend more than a certain amount. Rather than paying a small delivery fee, people add extra items to their basket in order to reach the limit, and so they end up spending more than the delivery would have cost. Retailers also know that customers dislike surprises at the end of the process, so some show low prices at the beginning and add taxes and charges only at the final stage, when shoppers have already invested time in their choice.",
      "Payment itself has become almost invisible. With saved card details and ‘one-click’ buttons, there is very little time to reconsider a purchase. Psychologists say that paying with cash feels painful because we physically hand over money, but digital payments remove this feeling. In one experiment, people who paid by card were willing to pay almost twice as much for the same concert tickets as those who paid in cash.",
      "However, consumers are not completely powerless. Consumer organisations recommend a few simple habits. Waiting 24 hours before buying anything that is not essential gives people time to think. Removing saved card details adds a small but useful barrier. Price-comparison websites can also help, although some are owned by the same companies whose products they compare.",
      "Governments have started to take action too. In several countries, laws now require websites to show the full price from the beginning and ban false messages about stock levels. Whether these rules can keep up with new techniques remains to be seen."
    ],
    note:"Bài đọc tự viết để luyện tập; các nghiên cứu được mô tả chung chung.",
    quiz:[
      {t:"head",text:"Câu 1–4: Label the diagram ‘How a shopping website persuades you’. Choose NO MORE THAN THREE WORDS from the passage."},
      {t:"gap",q:"Before visiting the site: ___ follow you from page to page",a:["advertisements","adverts"],e:"Đoạn B."},
      {t:"gap",q:"Home page: best-selling products in the top ___ corner",a:["left-hand","left hand","left"],e:"Đoạn B."},
      {t:"gap",q:"Product page: messages create a sense of ___",a:["urgency"],e:"Đoạn C."},
      {t:"gap",q:"Checkout: taxes and charges added at the ___",a:["final stage"],e:"Đoạn D."},
      {t:"head",text:"Câu 5–10: Do the following statements agree with the information given in the passage? Chọn TRUE / FALSE / NOT GIVEN."},
      {q:"Economists expected online shopping to reduce prices.",o:["TRUE","FALSE","NOT GIVEN"],a:0,e:"Đoạn A."},
      {q:"Messages about other shoppers make people compare more products.",o:["TRUE","FALSE","NOT GIVEN"],a:1,e:"Đoạn C: 'compare fewer alternatives'."},
      {q:"The messages in the European study were always true.",o:["TRUE","FALSE","NOT GIVEN"],a:1,e:"Đoạn C: 'not completely accurate'."},
      {q:"Free delivery is more popular with younger shoppers.",o:["TRUE","FALSE","NOT GIVEN"],a:2,e:"Bài không nói về tuổi."},
      {q:"People paid more for concert tickets when using a card.",o:["TRUE","FALSE","NOT GIVEN"],a:0,e:"Đoạn E."},
      {q:"All price-comparison websites are independent.",o:["TRUE","FALSE","NOT GIVEN"],a:1,e:"Đoạn F: 'some are owned by the same companies'."},
      {t:"head",text:"Câu 11–13: Complete the flow chart ‘How free delivery increases spending’. Choose NO MORE THAN TWO WORDS from the passage."},
      {t:"gap",q:"Website offers free delivery above a certain amount → shoppers add ___ to their basket",a:["extra items","items"],e:"Đoạn D."},
      {t:"gap",q:"They want to reach the ___",a:["limit"],e:"Đoạn D."},
      {t:"gap",q:"They spend more than the delivery ___ would have been",a:["fee","cost"],e:"Đoạn D: 'paying a small delivery fee'."}
    ]
  },
  listening:{
    title:"Section 2 · Opening a bank account",
    intro:"Một nhân viên tư vấn nói chuyện với sinh viên quốc tế mới đến về các ngân hàng và cách đọc thông tin trên thẻ ghi nợ.",
    script:[
      ["A","Good morning, everyone. Today I'm going to give you some advice about choosing a bank. There are six banks near the university, and they all want your money!"],
      ["A","If you'd like to be able to visit your bank between lectures, Northern Star is the one for you, because it has a branch right here on the campus, next to the library."],
      ["A","Finley's is trying hard to attract new customers this year. Anyone who opens an account before the end of October gets a free gift, a set of headphones, I think."],
      ["A","Great Western offers special interest rates for students on its savings accounts, which are better than anything else I've seen."],
      ["A","Evergreen doesn't charge for anything, but only if you're under twenty-five. Older students will have to pay a monthly fee."],
      ["A","Moneysafe and International Union are fine, but they don't offer anything special for students."],
      ["A","Now, when you open your account, you'll receive a debit card. Let's look at the picture on your handout. On the front, at the top, you'll see the name of the bank or the card company."],
      ["A","Under that, on the left, there's a small gold chip. This contains your information and is used when you pay in a shop."],
      ["A","On the right, there's a hologram with a moving picture, usually a bird. This makes the card difficult to copy."],
      ["A","Across the middle is your long card number, sixteen digits."],
      ["A","Below that, on the left, is the expiry date. After this date the card won't work, and the bank will send you a new one."],
      ["A","On the back, there's a black magnetic strip, and under it a white panel with the three-digit security number and the holder's signature. Please sign your card as soon as you get it."]
    ],
    quiz:[
      {t:"head",text:"Câu 1–4: Which bank provides the following? A Evergreen · B Finley's · C Great Western · D International Union · E Moneysafe · F Northern Star"},
      {q:"a branch on the campus",o:["A","B","C","D","E","F"],a:5},
      {q:"a free gift for new customers",o:["A","B","C","D","E","F"],a:1},
      {q:"special interest rates for students",o:["A","B","C","D","E","F"],a:2},
      {q:"no bank charges for certain customers",o:["A","B","C","D","E","F"],a:0},
      {t:"head",text:"Câu 5–10: Label the diagram of the debit card. Write ONE OR TWO WORDS."},
      {t:"gap",q:"Front, top: name of the bank or card ___",a:["company"]},
      {t:"gap",q:"Front, left: a small gold ___",a:["chip"]},
      {t:"gap",q:"Front, right: hologram with a moving ___",a:["picture"]},
      {t:"gap",q:"Front, middle: sixteen-digit card ___",a:["number"]},
      {t:"gap",q:"Front, bottom left: ___ date",a:["expiry"]},
      {t:"gap",q:"Back: security number and holder's ___",a:["signature"]}
    ]
  },
  writing:{
    type:"Task 2", min:250, time:"40 phút",
    prompt:"Some people decide to start their own business instead of working for a company or organisation. Do the advantages for people working for their own business outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
    plan:["Brainstorm ưu điểm (tự do, tự quyết, thu nhập có thể cao, làm điều mình đam mê) và nhược điểm (rủi ro tài chính, làm nhiều giờ, không có lương ổn định, cô đơn)","Không cần nêu hết mọi ý: chọn 2–3 ý mạnh nhất cho mỗi bên","Mở bài: giới thiệu xu hướng + quan điểm (ưu điểm lớn hơn, nếu chuẩn bị kỹ)","Thân 1: câu chủ đề ngắn ‘There are two main disadvantages…’ + giải thích + ví dụ","Thân 2: ‘On the other hand, … has several points in its favour.’ + ví dụ","Kết bài: nhắc lại quan điểm và điều kiện"],
    model:"In many countries, including Vietnam, more and more young people are choosing to open their own cafés, online shops or small companies rather than working for an employer. Although running a business involves real risks, I believe the advantages generally outweigh the disadvantages, provided that people prepare carefully.\n\nThere are two main disadvantages to working for yourself. The first is financial insecurity. Unlike employees, business owners do not receive a regular salary, and many new businesses fail within their first few years. Someone who has borrowed money to start a company may therefore lose their savings or even their home. A further drawback is the workload. Business owners often work evenings and weekends, which can damage their health and their relationships.\n\nOn the other hand, having your own business has several points in its favour. The main one is independence. Owners can make their own decisions, choose the projects they find interesting and organise their time in a way that suits them. For example, a friend of mine who left her job at a bank to open a bakery says she works longer hours than before, but she enjoys every one of them. Another advantage is that successful businesses can be highly profitable, and the owner, rather than a large company, receives the rewards of their hard work.\n\nAll in all, I think that working for yourself is worthwhile for people who are willing to take risks and who have a clear plan. However, anyone who needs a stable income, for instance to support a young family, should consider gaining experience as an employee first."
  },
  speaking:{
    tip:"Part 2 và 3: đưa lý do và ví dụ cụ thể cho mỗi ý. Nếu thấy mình chưa diễn đạt rõ, hãy nói lại bằng từ khác (I mean…, In other words…). Nếu nói sai, tự sửa ngay. Khi quên từ, dùng What's the word…? / How do you say…? rồi diễn đạt vòng. Chú ý trọng âm: ADvertising nhưng adVERtisement, ENergy nhưng eneRGEtic.",
    p1:["Do you enjoy shopping?","Do you prefer shopping online or in shops?","Is it easy for young people to save money?","Did you get pocket money when you were a child?"],
    p1sample:{q:"Do you prefer shopping online or in shops?",a:"It depends on what I'm buying. For books and electronics, I usually shop online, because it's cheaper and I can compare prices easily. But for clothes, I prefer going to a shop. I mean, I need to try things on, otherwise I end up sending them back, which is a waste of time."},
    cue:{t:"Describe an advertisement which you found very persuasive.",pts:["what the advertisement was for","where you saw or read it","what the advertisement consisted of"],end:"and why you found it so persuasive."},
    p2sample:"I'd like to describe an advertisement for a language-learning app that I saw last year. I first saw it on social media, actually, while I was scrolling through videos late at night, and later I noticed it on a big screen at a bus stop too. The advert consisted of a short video, about thirty seconds long. It showed a young Vietnamese woman arriving at an airport in Seoul, looking nervous and lost. Then it went back three months, and we saw her practising Korean for ten minutes a day on the app, on the bus, in the kitchen, before bed. At the end, she was chatting confidently with a taxi driver and laughing. The final message was something like ‘Ten minutes a day. That's all it takes.’ I found it persuasive for several reasons. Firstly, the woman was an ordinary person, not a celebrity, so it was easy to imagine myself in her place. In other words, it felt realistic. Secondly, it made learning seem easy, which is exactly what busy people want to hear. And it worked: I downloaded the app the same night, although, to be honest, I only used it for about two weeks!",
    p3:["How important is it for companies to advertise their products?","How do advertisements influence people to buy things?","In what ways can advertising be bad or harmful to society?","Apart from advertising, what other factors influence people's decisions to buy things?"],
    p3sample:{q:"In what ways can advertising be bad or harmful to society?",a:"Well, I think the main problem is that it can make people feel that they always need more. Adverts often show perfect families with expensive cars and the latest phones, so people, especially teenagers, may feel unhappy with what they have. Another issue is advertising aimed at children, for example adverts for sweets and fast food. Children can't really, what's the word, judge whether an advert is honest, so I think it should be strictly controlled."},
    phrases:["I mean,…","In other words,…","Sorry, what I meant was…","What's the word…?","For example,…","That's why…"]
  },
  lesson:[
    {g:"Reading: siêu thị và hành vi mua sắm",w:"decompression zone",p:"n phr",ipa:"/ˌdiːkəmˈpreʃn zəʊn/",vi:"khu ‘giảm áp’ (ngay sau lối vào cửa hàng)",ex:"Few things are sold in the decompression zone.",exvi:"Rất ít hàng được bán ở khu ngay sau lối vào."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"take stock of",p:"v phr",ipa:"/teɪk stɒk əv/",vi:"quan sát, đánh giá tình hình",ex:"Shoppers need time to take stock of their surroundings.",exvi:"Người mua cần thời gian để quan sát xung quanh."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"shoplifting",p:"n",ipa:"/ˈʃɒplɪftɪŋ/",vi:"ăn cắp hàng trong cửa hàng",ex:"A friendly welcome is said to cut shoplifting.",exvi:"Lời chào thân thiện được cho là giúp giảm nạn ăn cắp hàng."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"guilty",p:"adj",ipa:"/ˈɡɪlti/",vi:"cảm thấy có lỗi",ex:"Buying fruit makes people feel less guilty about buying sweets.",exvi:"Mua trái cây khiến người ta bớt áy náy khi mua đồ ngọt."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"invariably",p:"adv",ipa:"/ɪnˈveəriəbli/",vi:"luôn luôn, lúc nào cũng",ex:"Milk is invariably placed at the back of the store.",exvi:"Sữa lúc nào cũng được đặt ở cuối cửa hàng."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"fishmonger",p:"n",ipa:"/ˈfɪʃmʌŋɡə/",vi:"người/quầy bán cá",ex:"The fishmonger is next to the butcher.",exvi:"Quầy bán cá nằm cạnh quầy thịt."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"arouse",p:"v",ipa:"/əˈraʊz/",vi:"khơi dậy, kích thích",ex:"The smell of bread arouses people's appetites.",exvi:"Mùi bánh mì kích thích cảm giác thèm ăn."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"manipulate",p:"v",ipa:"/məˈnɪpjuleɪt/",vi:"thao túng, điều khiển",ex:"Stores use many tricks to manipulate shoppers.",exvi:"Cửa hàng dùng nhiều mẹo để thao túng người mua."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"visibility",p:"n",ipa:"/ˌvɪzəˈbɪləti/",vi:"khả năng được nhìn thấy",ex:"Goods at the end of aisles have the greatest visibility.",exvi:"Hàng ở cuối lối đi dễ được nhìn thấy nhất."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"fitting room",p:"n phr",ipa:"/ˈfɪtɪŋ ruːm/",vi:"phòng thử đồ",ex:"Customers who use the fitting room usually buy.",exvi:"Khách dùng phòng thử đồ thường sẽ mua."},
    {g:"Reading: siêu thị và hành vi mua sắm",w:"decoy",p:"n",ipa:"/ˈdiːkɔɪ/",vi:"mồi nhử",ex:"A decoy item makes the choice easier.",exvi:"Món hàng ‘mồi nhử’ giúp việc lựa chọn dễ hơn."},
    {g:"Listening: ngân hàng",w:"Citizens Advice Bureau",p:"n phr",ipa:"/ˈsɪtɪznz ədˈvaɪs ˈbjʊərəʊ/",vi:"văn phòng tư vấn công dân (Anh)",ex:"The Citizens Advice Bureau helps newcomers with money problems.",exvi:"Văn phòng tư vấn công dân giúp người mới đến giải quyết chuyện tiền bạc."},
    {g:"Listening: ngân hàng",w:"hologram",p:"n",ipa:"/ˈhɒləɡræm/",vi:"hình ba chiều (chống giả)",ex:"The hologram makes the card hard to copy.",exvi:"Hình ba chiều khiến thẻ khó bị làm giả."},
    {g:"Listening: ngân hàng",w:"holder",p:"n",ipa:"/ˈhəʊldə/",vi:"chủ (thẻ, tài khoản)",ex:"The card holder must sign the back.",exvi:"Chủ thẻ phải ký ở mặt sau."},
    {g:"Speaking: quảng cáo",w:"persuasive",p:"adj",ipa:"/pəˈsweɪsɪv/",vi:"có sức thuyết phục",ex:"The advert was very persuasive.",exvi:"Quảng cáo đó rất có sức thuyết phục."},
    {g:"Speaking: quảng cáo",w:"implications",p:"n",ipa:"/ˌɪmplɪˈkeɪʃnz/",vi:"hệ quả, tác động",ex:"Advertising has wider implications for society.",exvi:"Quảng cáo có những tác động rộng hơn đến xã hội."},
    {g:"Speaking: quảng cáo",w:"energetic",p:"adj",ipa:"/ˌenəˈdʒetɪk/",vi:"tràn đầy năng lượng",ex:"The presenter in the advert was very energetic.",exvi:"Người dẫn trong quảng cáo rất tràn đầy năng lượng."},
    {g:"Writing Task 2: mua sắm trực tuyến",w:"groceries",p:"n",ipa:"/ˈɡrəʊsəriz/",vi:"thực phẩm và đồ dùng hằng ngày",ex:"I order groceries online once a week.",exvi:"Mỗi tuần tôi đặt mua thực phẩm trực tuyến một lần."},
    {g:"Writing Task 2: mua sắm trực tuyến",w:"hacker",p:"n",ipa:"/ˈhækə/",vi:"tin tặc",ex:"Hackers may steal your money.",exvi:"Tin tặc có thể đánh cắp tiền của bạn."},
    {g:"Writing Task 2: mua sắm trực tuyến",w:"in its favour",p:"phrase",ipa:"/ɪn ɪts ˈfeɪvə/",vi:"có lợi, là điểm cộng",ex:"Online shopping has several points in its favour.",exvi:"Mua sắm trực tuyến có nhiều điểm cộng."},
    {g:"Writing Task 2: mua sắm trực tuyến",w:"self-employed",p:"adj",ipa:"/ˌself ɪmˈplɔɪd/",vi:"tự kinh doanh, làm chủ",ex:"Many people prefer not to be self-employed.",exvi:"Nhiều người không muốn tự kinh doanh."},
    {g:"Writing Task 2: mua sắm trực tuyến",w:"boutique",p:"n",ipa:"/buːˈtiːk/",vi:"cửa hàng thời trang nhỏ",ex:"There's an excellent boutique on Main Street.",exvi:"Có một cửa hàng thời trang rất đẹp trên phố Main."},
    {g:"Ôn tập Unit 6",w:"school leaver",p:"n phr",ipa:"/skuːl ˈliːvə/",vi:"người vừa học xong phổ thông",ex:"School leavers often find badly paid jobs.",exvi:"Người vừa học xong phổ thông thường chỉ tìm được việc lương thấp."},
    {g:"Ôn tập Unit 6",w:"university fees",p:"n phr",ipa:"/ˌjuːnɪˈvɜːsəti fiːz/",vi:"học phí đại học",ex:"A part-time job helps pay university fees.",exvi:"Việc làm thêm giúp trả học phí đại học."}
  ]
};
(window.UNITS_B2 = window.UNITS_B2 || []).push(U);

window.TIPS = window.TIPS || {};
window.TIPS.b2u6 = {
  tips:{
    reading:[
      {type:"Labelling a diagram", tips:[
        "Dùng tiêu đề của sơ đồ để tìm đúng phần trong bài.",
        "Kiểm tra mỗi chỗ trống cần bao nhiêu từ.",
        "Viết đáp án đúng y như trong bài."
      ]},
      {type:"True / False / Not Given", tips:[
        "Không đọc lại cả bài. Tìm đúng những đoạn trả lời từng câu.",
        "Gạch chân một từ/cụm từ trong mỗi câu giúp bạn tìm đúng chỗ."
      ]},
      {type:"Flow-chart completion", tips:[
        "Dùng tiêu đề flow chart để tìm đúng phần trong bài.",
        "Kiểm tra cần bao nhiêu từ cho mỗi chỗ trống.",
        "Gạch chân từ cần dùng rồi chép đúng vào phiếu trả lời."
      ]}
    ],
    listening:[
      {type:"Matching (Section 2)", tips:[
        "Gạch chân ý chính trong mỗi câu hỏi. Đôi khi phải gạch cả cụm (no bank charges for certain customers).",
        "Mỗi câu chỉ viết một chữ cái. Bạn không cần dùng hết các chữ cái."
      ]},
      {type:"Labelling a diagram", tips:[
        "Nhìn tiêu đề sơ đồ để biết nó nói về gì.",
        "Tìm chỗ trống đầu tiên: đó là thông tin bạn nghe đầu tiên.",
        "Các chỗ trống được sắp xếp theo trình tự hợp lý trên sơ đồ, bạn sẽ nghe theo đúng thứ tự đó."
      ]}
    ],
    speaking:[
      {type:"Speaking Part 2 và 3", tips:[
        "Nếu thấy mình chưa diễn đạt rõ, hãy nói lại ý đó bằng từ khác (I mean…, in other words…).",
        "Nếu biết mình vừa nói sai, hãy tự sửa.",
        "Khi tìm từ, dùng What's the word? / How do you say…? thay vì im lặng.",
        "Luôn đưa lý do và ví dụ để trả lời đầy đủ."
      ]}
    ],
    writing:[
      {type:"Writing Task 2: ưu điểm & nhược điểm", tips:[
        "Mỗi đoạn nên bàn một khía cạnh khác nhau của điều bạn muốn nói.",
        "Nếu không biết bắt đầu đoạn thế nào, mở đầu bằng một câu ngắn nói đoạn đó về gì (There are two main disadvantages…).",
        "Không thể đưa hết mọi ý: chọn những ý mạnh nhất, có ví dụ và hệ quả.",
        "Nêu rõ quan điểm: ưu điểm có lớn hơn nhược điểm không."
      ]}
    ]
  },
  mistakes:[
    {k:"vocab", bad:"When people think of shopping, they think of buy something pleasant.", good:"When people think of shopping, they think of buying something pleasant.", why:"Sau giới từ (of) dùng V-ing."},
    {k:"vocab", bad:"I suggest to improve the situation by spending more money.", good:"I suggest improving the situation by spending more money.", why:"suggest + V-ing."},
    {k:"vocab", bad:"Many people cannot afford buying expensive clothes.", good:"Many people cannot afford to buy expensive clothes.", why:"afford + to V."},
    {k:"vocab", bad:"Oil prices are forecast increasing in the medium term.", good:"Oil prices are forecast to increase in the medium term.", why:"be forecast + to V."},
    {k:"vocab", bad:"Pocket money enables them buying the things they want.", good:"Pocket money enables them to buy the things they want.", why:"enable someone + to V."},
    {k:"vocab", bad:"Some people spend all their spare time to shop.", good:"Some people spend all their spare time shopping.", why:"spend time + V-ing."},
    {k:"grammar", bad:"Young people spend money on which they want.", good:"Young people spend money on what they want.", why:"Không có danh từ đứng trước → what."},
    {k:"grammar", bad:"Internet shopping is not easy in places who do not have delivery services.", good:"Internet shopping is not easy in places which do not have delivery services.", why:"Chỉ vật → which/that."},
    {k:"grammar", bad:"The Internet can be used by people who they are travelling.", good:"The Internet can be used by people who are travelling.", why:"Không lặp lại chủ ngữ sau who."},
    {k:"grammar", bad:"We spend money on something what makes us happy.", good:"We spend money on something that makes us happy.", why:"Sau danh từ dùng that/which, không dùng what."}
  ],
  fix:[
    {t:"gap", q:"Shopping is one activity where families can enjoy doing together. → Sửa: ___", a:["which","that"], e:"activity làm tân ngữ của enjoy doing → which/that."},
    {t:"gap", q:"Debate on what we do online, especially those who are related to buying things. → Sửa: ___", a:["which","that"], e:"those (chỉ vật) → which/that."},
    {t:"gap", q:"Supermarkets know how to persuade people buying things. → Sửa: ___", a:["to buy"], e:"persuade someone to V."},
    {t:"gap", q:"Customers can enjoy to browse magazines. → Sửa: ___", a:["browsing"], e:"enjoy + V-ing."},
    {t:"gap", q:"Often a customer ends up not to buy either. → Sửa: ___", a:["not buying"], e:"end up + V-ing."},
    {t:"gap", q:"Many employers avoid to employ someone who has never had a job. → Sửa: ___", a:["employing"], e:"avoid + V-ing."},
    {t:"gap", q:"I believe every young person should consider to work for a year before university. → Sửa: ___", a:["working"], e:"consider + V-ing."},
    {t:"gap", q:"Many young people waste a lot of time to play online games. → Sửa: ___", a:["playing"], e:"waste time + V-ing."},
    {t:"gap", q:"Some students fail saving enough money. → Sửa: ___", a:["to save"], e:"fail + to V."},
    {t:"gap", q:"Results are better in countries which teachers are well paid. → Sửa: ___", a:["where"], e:"Nơi chốn + mệnh đề đầy đủ → where."}
  ]
};

window.GRAMMAR_BANK = window.GRAMMAR_BANK || {};
window.GRAMMAR_BANK.b2u6 = [
  {q:"The woman ___ owns this shop is my aunt.",o:["who","which","whose"],a:0,e:"Chỉ người, làm chủ ngữ.",k:"c"},
  {q:"This is the phone ___ I bought online.",o:["that","what","who"],a:0,e:"Chỉ vật.",k:"c"},
  {q:"___ I need is a cheaper flat.",o:["What","Which","That"],a:0,e:"What = the thing which.",k:"c"},
  {q:"That's the market ___ my mother buys fish.",o:["where","which","when"],a:0,e:"Nơi chốn.",k:"c"},
  {q:"I remember the day ___ I got my first salary.",o:["when","which","where"],a:0,e:"Thời điểm.",k:"c"},
  {q:"He's the student ___ laptop was stolen.",o:["whose","who's","which"],a:0,e:"Sở hữu.",k:"c"},
  {q:"That's the reason ___ I left my job.",o:["why","which","what"],a:0,e:"the reason why.",k:"c"},
  {q:"My laptop, ___ I bought in 2020, still works well.",o:["which","that","what"],a:0,e:"Mệnh đề không xác định → which (không dùng that).",k:"c"},
  {q:"I can't afford ___ a new car.",o:["to buy","buying","buy"],a:0,e:"afford + to V.",k:"c"},
  {q:"She enjoys ___ in small boutiques.",o:["shopping","to shop","shop"],a:0,e:"enjoy + V-ing.",k:"c"},
  {q:"He promised ___ me back on Friday.",o:["to pay","paying","pay"],a:0,e:"promise + to V.",k:"c"},
  {q:"I recommend ___ a shopping list.",o:["making","to make","make"],a:0,e:"recommend + V-ing.",k:"c"},
  {t:"gap",q:"People ___ pay by credit card often spend more.",a:["who","that"],e:"Chỉ người.",k:"g"},
  {t:"gap",q:"I like shops ___ sell second-hand books.",a:["which","that"],e:"Chỉ vật.",k:"g"},
  {t:"gap",q:"Kiri can never afford ___ she likes.",a:["what"],e:"Không có danh từ đứng trước.",k:"g"},
  {t:"gap",q:"The city ___ I grew up has changed a lot.",a:["where"],e:"Nơi chốn.",k:"g"},
  {t:"gap",q:"We decided ___ (save) money for a holiday.",a:["to save"],e:"decide + to V.",k:"g"},
  {t:"gap",q:"Have you finished ___ (pay) for your new phone?",a:["paying"],e:"finish + V-ing.",k:"g"},
  {t:"gap",q:"Governments should encourage people ___ (save) money.",a:["to save"],e:"encourage someone + to V.",k:"g"},
  {t:"gap",q:"I'm looking forward to ___ (receive) my first salary.",a:["receiving"],e:"look forward to + V-ing.",k:"g"},
  {t:"gap",q:"Some people can't stop ___ (buy) new clothes.",a:["buying"],e:"stop + V-ing (thôi làm).",k:"g"},
  {q:"Câu nào đúng?",o:["The man which I met was a banker.","The man who I met was a banker."],a:1,e:"Chỉ người → who.",k:"s"},
  {q:"Câu nào đúng?",o:["This is the shop what sells cheap shoes.","This is the shop that sells cheap shoes."],a:1,e:"Sau danh từ → that/which.",k:"s"},
  {q:"Câu nào đúng?",o:["I want to avoid spending too much.","I want to avoid to spend too much."],a:0,e:"avoid + V-ing.",k:"s"},
  {q:"Câu nào đúng?",o:["She agreed lending me some money.","She agreed to lend me some money."],a:1,e:"agree + to V.",k:"s"},
  {q:"Câu nào đúng?",o:["My sister, who lives in Da Nang, runs a café.","My sister, that lives in Da Nang, runs a café."],a:0,e:"Mệnh đề không xác định không dùng that.",k:"s"},
  {q:"Câu nào đúng?",o:["What surprised me was the price.","Which surprised me was the price."],a:0,e:"What = the thing that.",k:"s"},
  {q:"Câu nào đúng?",o:["I spent two hours to choose a gift.","I spent two hours choosing a gift."],a:1,e:"spend time + V-ing.",k:"s"}
];

window.SYNANT = window.SYNANT || {};
Object.assign(window.SYNANT, {
  "b2u6:afford":{s:["have enough money for","manage to pay for"]},
  "b2u6:bargain":{s:["good deal","good value"],a:["rip-off"]},
  "b2u6:boost sales":{s:["increase sales","raise sales"],a:["reduce sales"]},
  "b2u6:efficient":{s:["effective","productive"],a:["inefficient","wasteful"]},
  "b2u6:end up":{s:["finally","finish by"]},
  "b2u6:forecast":{s:["predict","expect"]},
  "b2u6:highly profitable":{s:["very lucrative","money-making"],a:["unprofitable","loss-making"]},
  "b2u6:outweigh":{s:["be greater than","exceed"]},
  "b2u6:promotion":{s:["advertising","marketing"]},
  "b2u6:purchase":{s:["buy","acquire"],a:["sell"]},
  "b2u6:reckon":{s:["think","believe","consider"]},
  "b2u6:retailer":{s:["seller","shop","store"],a:["wholesaler"]},
  "b2u6:tempt":{s:["attract","persuade","lure"],a:["discourage"]},
  "b2u6:savings":{s:["money saved","funds"],a:["debts"]}
});

window.READ_WORDS = window.READ_WORDS || {};
window.READ_WORDS["b2u6|Why We Pay More Online"] = [["predict","v","dự đoán"],["persuade","v","thuyết phục"],["social proof","n phr","bằng chứng xã hội (người khác cũng đang mua)"],["in stock","phrase","còn hàng"],["sense of urgency","n phr","cảm giác cấp bách"],["alternative","n","lựa chọn khác"],["delivery fee","n phr","phí giao hàng"],["basket","n","giỏ hàng"],["invisible","adj","vô hình"],["reconsider","v","cân nhắc lại"],["powerless","adj","bất lực"],["barrier","n","rào cản"],["stock level","n phr","lượng hàng tồn"],["remains to be seen","phrase","vẫn còn phải chờ xem"]];
})();
