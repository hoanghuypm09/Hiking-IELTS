/* IPA chart: the 44 sounds of British English.
   Each sound: s = symbol, ex = "word:letters" examples (first one is the key word), vi = Vietnamese hint, v = voiced (consonants). */
window.IPA = {
  groups: [
    { k: "short", title: "Nguyên âm ngắn", note: "Đọc nhanh, dứt khoát.", sounds: [
      {s:"ɪ",  ex:["ship:i","sit:i","big:i","village:i"], vi:"i ngắn, dứt khoát"},
      {s:"e",  ex:["bed:e","pen:e","head:ea","said:ai"], vi:"e ngắn, miệng hơi mở"},
      {s:"æ",  ex:["cat:a","map:a","bag:a","black:a"], vi:"giữa a và e, miệng mở rộng, kéo khoé môi"},
      {s:"ʌ",  ex:["cup:u","up:u","love:o","money:o"], vi:"gần như ă ngắn"},
      {s:"ɒ",  ex:["hot:o","dog:o","stop:o","watch:a"], vi:"o ngắn, tròn môi (Anh-Anh)"},
      {s:"ʊ",  ex:["good:oo","book:oo","put:u","woman:o"], vi:"u ngắn, môi hơi tròn"},
      {s:"ə",  ex:["teacher:er","about:a","banana:a","doctor:or"], vi:"ơ rất nhẹ, không nhấn (âm schwa, xuất hiện nhiều nhất)"}
    ]},
    { k: "long", title: "Nguyên âm dài", note: "Có dấu ː: kéo dài hơn âm ngắn tương ứng.", sounds: [
      {s:"iː", ex:["sheep:ee","tea:ea","see:ee","key:ey"], vi:"i kéo dài, khoé môi căng"},
      {s:"ɑː", ex:["car:ar","father:a","park:ar","half:a"], vi:"a kéo dài, miệng mở rộng"},
      {s:"ɔː", ex:["door:oor","four:our","walk:a","saw:aw"], vi:"o kéo dài, tròn môi"},
      {s:"uː", ex:["shoot:oo","food:oo","blue:ue","two:wo"], vi:"u kéo dài, môi tròn và đẩy ra trước"},
      {s:"ɜː", ex:["bird:ir","work:or","learn:ear","girl:ir"], vi:"ơ kéo dài"}
    ]},
    { k: "diph", title: "Nguyên âm đôi", note: "Trượt từ âm đầu sang âm sau.", sounds: [
      {s:"eɪ", ex:["day:ay","say:ay","rain:ai","great:ea"], vi:"gần như ây"},
      {s:"aɪ", ex:["my:y","five:i","buy:uy","high:igh"], vi:"gần như ai"},
      {s:"ɔɪ", ex:["boy:oy","toy:oy","coin:oi","noise:oi"], vi:"gần như oi"},
      {s:"əʊ", ex:["go:o","home:o","know:ow","boat:oa"], vi:"gần như âu (Anh-Anh)"},
      {s:"aʊ", ex:["now:ow","house:ou","mouth:ou","cow:ow"], vi:"gần như ao"},
      {s:"ɪə", ex:["here:ere","near:ear","ear:ear","idea:ea"], vi:"gần như ia"},
      {s:"eə", ex:["hair:air","there:ere","wear:ear","care:are"], vi:"e trượt sang ơ"},
      {s:"ʊə", ex:["tour:our","sure:ure","cure:ure"], vi:"gần như ua (ngày nay nhiều người đọc thành ɔː)"}
    ]},
    { k: "pair", title: "Phụ âm theo cặp", note: "Mỗi cặp đặt miệng giống nhau: âm trái vô thanh (cổ không rung), âm phải hữu thanh (cổ rung).", sounds: [
      {s:"p",  v:0, ex:["pen:p","pay:p","stop:p","happy:pp"], vi:"p bật hơi mạnh (khác p tiếng Việt)"},
      {s:"b",  v:1, ex:["bad:b","book:b","job:b","rubber:bb"], vi:"b"},
      {s:"t",  v:0, ex:["tea:t","time:t","cat:t","letter:tt"], vi:"t bật hơi, đầu lưỡi chạm lợi trên"},
      {s:"d",  v:1, ex:["did:d","day:d","bed:d","ladder:dd"], vi:"giống đ nhưng đầu lưỡi chạm lợi trên"},
      {s:"tʃ", v:0, ex:["cheese:ch","chair:ch","watch:tch","picture:t"], vi:"ch bật hơi, môi tròn ra trước"},
      {s:"dʒ", v:1, ex:["June:J","job:j","page:g","bridge:dg"], vi:"như tʃ nhưng cổ rung (gần giống \"dj\")"},
      {s:"k",  v:0, ex:["cat:c","key:k","book:k","school:ch"], vi:"k bật hơi"},
      {s:"g",  v:1, ex:["go:g","game:g","bag:g","bigger:gg"], vi:"g"},
      {s:"f",  v:0, ex:["fish:f","phone:ph","laugh:gh","coffee:ff"], vi:"ph, răng trên chạm môi dưới"},
      {s:"v",  v:1, ex:["very:v","van:v","love:v","river:v"], vi:"v, răng trên chạm môi dưới, cổ rung"},
      {s:"θ",  v:0, ex:["think:th","three:th","mouth:th","month:th"], vi:"đặt đầu lưỡi giữa hai răng rồi thổi hơi (không phải t hay th tiếng Việt)"},
      {s:"ð",  v:1, ex:["this:th","they:th","mother:th","with:th"], vi:"lưỡi giữa hai răng, cổ rung (không phải đ hay d)"},
      {s:"s",  v:0, ex:["see:s","sit:s","city:c","class:ss"], vi:"x"},
      {s:"z",  v:1, ex:["zoo:z","zero:z","easy:s","rose:s"], vi:"như s nhưng cổ rung (không đọc thành d)"},
      {s:"ʃ",  v:0, ex:["shoe:sh","she:sh","sugar:s","station:ti"], vi:"s uốn lưỡi, môi tròn ra trước"},
      {s:"ʒ",  v:1, ex:["television:s","usually:s","vision:s","measure:s"], vi:"như ʃ nhưng cổ rung"}
    ]},
    { k: "other", title: "Phụ âm khác", note: "Đều là âm hữu thanh, trừ h.", sounds: [
      {s:"m",  v:1, ex:["man:m","map:m","home:m","summer:mm"], vi:"m"},
      {s:"n",  v:1, ex:["now:n","name:n","sun:n","dinner:nn"], vi:"n"},
      {s:"ŋ",  v:1, ex:["sing:ng","long:ng","think:n","English:ng"], vi:"ng"},
      {s:"h",  v:0, ex:["hat:h","home:h","happy:h","who:wh"], vi:"h nhẹ, chỉ là hơi thở"},
      {s:"l",  v:1, ex:["leg:l","love:l","hotel:l","yellow:ll"], vi:"l; ở cuối từ (hotel) lưỡi vẫn chạm lợi trên"},
      {s:"r",  v:1, ex:["red:r","rain:r","very:r","sorry:rr"], vi:"r cong lưỡi, không rung lưỡi; Anh-Anh không đọc r ở cuối từ (car)"},
      {s:"w",  v:1, ex:["wet:w","we:w","window:w","one:o"], vi:"gần như u/qu, môi tròn"},
      {s:"j",  v:1, ex:["yes:y","you:y","yellow:y","use:u"], vi:"gần như d trong \"dê\" (giọng miền Nam) / y trong \"yêu\""}
    ]}
  ],
  // Minimal pairs Vietnamese learners often mix up.
  pairs: [
    ["ship","sheep","/ɪ/ – /iː/"], ["full","fool","/ʊ/ – /uː/"], ["bed","bad","/e/ – /æ/"], ["cut","cart","/ʌ/ – /ɑː/"],
    ["hot","hut","/ɒ/ – /ʌ/"], ["walk","work","/ɔː/ – /ɜː/"], ["think","sink","/θ/ – /s/"], ["three","tree","/θ/ – /t/"],
    ["they","day","/ð/ – /d/"], ["fan","van","/f/ – /v/"], ["sea","she","/s/ – /ʃ/"], ["rice","lice","/r/ – /l/"],
    ["light","like","/t/ – /k/ cuối"], ["bag","back","/g/ – /k/ cuối"], ["price","prize","/s/ – /z/ cuối"], ["wine","white","/n/ – /t/ cuối"]
  ],
  tips: [
    "Người Việt hay bỏ âm cuối (like → /laɪ/). Hãy luôn đọc rõ phụ âm cuối, nhất là /s/, /z/, /t/, /d/, /k/.",
    "Dấu ː nghĩa là âm dài. Đọc sai độ dài có thể đổi nghĩa: ship /ʃɪp/ (con tàu) và sheep /ʃiːp/ (con cừu).",
    "Dấu ˈ đứng trước âm tiết được nhấn trọng âm: teacher /ˈtiːtʃə/ nhấn âm đầu, about /əˈbaʊt/ nhấn âm sau.",
    "Biết âm cuối là vô thanh hay hữu thanh giúp đọc đúng đuôi -s/-es và -ed (xem hai tab bên cạnh)."
  ]
};
