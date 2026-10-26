/* Pronunciation: -s/-es and -ed endings (rules, spelling, usage, practice).
   Word lists are "word:final sound of the base word". */
window.PRON = {
  s: {
    title: "Đuôi -s / -es",
    use: [
      ["Danh từ số nhiều", "one book → two books · a bus → many buses", "Không thêm -s cho danh từ không đếm được (information, advice, furniture, homework) và danh từ bất quy tắc (children, people, men, women)."],
      ["Động từ hiện tại đơn, ngôi thứ ba số ít", "He works. · She watches TV. · My city has a big park.", "Chủ ngữ là he / she / it / một danh từ số ít. Sau does / doesn't / can / will thì động từ giữ nguyên: He doesn't like (không phải likes)."],
      ["Sở hữu cách 's", "Huy's book · my mother's job", "'s đọc theo đúng quy tắc phát âm bên dưới: Tom's /z/, Mike's /s/, Alice's /ɪz/."]
    ],
    spell: [
      ["Thêm -es sau s, ss, sh, ch, x, z, o", "bus → buses · watch → watches · box → boxes · go → goes · potato → potatoes", "Một số từ tận cùng -o chỉ thêm -s: photos, pianos, radios, videos."],
      ["Phụ âm + y → bỏ y, thêm -ies", "city → cities · study → studies · try → tries", "Nguyên âm + y thì giữ y: days, plays, boys, keys."],
      ["-f / -fe → -ves", "leaf → leaves · knife → knives · life → lives · wife → wives", "Ngoại lệ hay gặp: roofs, chefs, cliffs."],
      ["Còn lại: thêm -s", "book → books · play → plays · river → rivers", ""]
    ],
    groups: [
      { k: "iz", ipa: "/ɪz/", when: "Âm cuối là /s/ /z/ /ʃ/ /ʒ/ /tʃ/ /dʒ/", letters: "Chữ cuối thường là -s, -ss, -ce, -se, -x, -z, -sh, -ch, -ge",
        mnemo: "Sóng gió chẳng sợ xấu zì (s · ge · ch · sh · x · z)",
        words: "buses:s classes:s boxes:ks watches:tʃ dishes:ʃ pages:dʒ bridges:dʒ prizes:z oranges:dʒ villages:dʒ finishes:ʃ teaches:tʃ washes:ʃ misses:s changes:dʒ languages:dʒ places:s faces:s roses:z garages:ʒ wishes:ʃ fixes:ks relaxes:ks churches:tʃ beaches:tʃ sizes:z judges:dʒ quizzes:z matches:tʃ brushes:ʃ noises:z glasses:s" },
      { k: "s", ipa: "/s/", when: "Âm cuối là âm vô thanh /p/ /t/ /k/ /f/ /θ/", letters: "Chữ cuối thường là -p, -t, -k, -f, -ph, -gh, -th",
        mnemo: "Thời phong kiến phương Tây (th · p · k · ph/f · t)",
        words: "books:k cups:p maps:p cats:t hats:t students:t roofs:f laughs:f months:θ graphs:f parks:k shops:p stops:p helps:p walks:k works:k looks:k likes:k writes:t eats:t gets:t cooks:k coughs:f chefs:f cliffs:f lakes:k desks:k streets:t plants:t tourists:t results:t tips:p sports:t weeks:k photographs:f" },
      { k: "z", ipa: "/z/", when: "Âm cuối là nguyên âm hoặc phụ âm hữu thanh còn lại", letters: "/b/ /d/ /g/ /v/ /l/ /m/ /n/ /ŋ/ /r/ và mọi nguyên âm",
        mnemo: "Không thuộc hai nhóm trên thì đọc /z/.",
        words: "bags:g dogs:g pens:n cars:ɑː trees:iː days:eɪ plays:eɪ rooms:m friends:d cities:i boys:ɔɪ schools:l hotels:l rivers:ə goes:əʊ sees:iː knows:əʊ calls:l opens:n travels:l studies:i tries:aɪ songs:ŋ homes:m birds:d clubs:b jobs:b families:i museums:m islands:d farms:m drives:v gloves:v movies:i kids:d rains:n ideas:ə" }
    ],
    notes: [
      ["Nghe âm, không nhìn chữ", "laughs đọc /s/ vì gh ở đây là âm /f/. likes đọc /s/ vì chữ e câm, âm cuối là /k/. places đọc /ɪz/ vì âm cuối là /s/."],
      ["houses", "house /haʊs/ nhưng houses đọc /ˈhaʊzɪz/: âm /s/ chuyển thành /z/."],
      ["says, does", "Hai từ này đổi cả nguyên âm: says /sez/ (không phải /seɪz/), does /dʌz/."],
      ["Mẹo vô thanh / hữu thanh", "Đặt tay lên cổ rồi đọc âm cuối. Cổ không rung là âm vô thanh (→ /s/), cổ rung là hữu thanh (→ /z/)."]
    ]
  },
  ed: {
    title: "Đuôi -ed",
    use: [
      ["Quá khứ đơn", "I visited Hue last year. · We played football yesterday.", "Việc đã xảy ra và kết thúc trong quá khứ. Sau did / didn't thì động từ giữ nguyên: Did you enjoy…?"],
      ["Quá khứ phân từ (V3)", "I have visited Hue twice. · The bridge was opened in 2010.", "Dùng trong thì hoàn thành (have + V3) và câu bị động (be + V3)."],
      ["Tính từ đuôi -ed và -ing", "I'm bored. ↔ The film is boring. · She was interested in the lesson.", "-ed nói về cảm xúc của người; -ing nói về tính chất của sự vật, sự việc gây ra cảm xúc đó."]
    ],
    spell: [
      ["Tận cùng -e: chỉ thêm -d", "live → lived · dance → danced · close → closed", ""],
      ["Phụ âm + y → bỏ y, thêm -ied", "study → studied · try → tried · cry → cried", "Nguyên âm + y thì giữ y: played, stayed, enjoyed."],
      ["Gấp đôi phụ âm cuối", "stop → stopped · plan → planned · prefer → preferred · travel → travelled", "Khi từ kết thúc bằng 1 nguyên âm + 1 phụ âm và trọng âm ở âm tiết cuối. Không gấp đôi w, x, y (showed, fixed) và khi trọng âm không ở cuối (visited, opened). Riêng travel → travelled là cách viết Anh-Anh."],
      ["Động từ bất quy tắc không thêm -ed", "go → went · buy → bought · see → saw", "Học thuộc theo bảng động từ bất quy tắc."]
    ],
    groups: [
      { k: "id", ipa: "/ɪd/", when: "Âm cuối là /t/ hoặc /d/", letters: "Chữ cuối thường là -t, -te, -d, -de",
        mnemo: "Tiền đô (t · d): thêm hẳn một âm tiết /ɪd/.",
        words: "wanted:t needed:d visited:t decided:d started:t waited:t painted:t added:d invited:t ended:d collected:t created:t protected:t attended:d included:d landed:d rented:t repeated:t shouted:t hated:t completed:t expected:t divided:d provided:d recorded:d connected:t graduated:t printed:t" },
      { k: "t", ipa: "/t/", when: "Âm cuối là âm vô thanh /p/ /k/ /f/ /s/ /ʃ/ /tʃ/ /θ/", letters: "Chữ cuối thường là -p, -k, -f, -gh, -s, -ss, -ce, -x, -sh, -ch",
        mnemo: "Khi sang sông phải chờ thu phí (k · s · sh · p · ch · th · ph/f)",
        words: "worked:k stopped:p watched:tʃ washed:ʃ helped:p looked:k liked:k finished:ʃ laughed:f missed:s danced:s fixed:ks cooked:k walked:k talked:k hoped:p dropped:p kissed:s relaxed:ks reached:tʃ shopped:p passed:s picked:k asked:k produced:s increased:s developed:p jumped:p booked:k practised:s coughed:f" },
      { k: "d", ipa: "/d/", when: "Âm cuối là nguyên âm hoặc phụ âm hữu thanh còn lại", letters: "/b/ /g/ /v/ /z/ /ʒ/ /dʒ/ /l/ /m/ /n/ /ŋ/ /r/ và mọi nguyên âm",
        mnemo: "Không thuộc hai nhóm trên thì đọc /d/.",
        words: "played:eɪ lived:v opened:n called:l studied:i cleaned:n enjoyed:ɔɪ moved:v arrived:v changed:dʒ travelled:l listened:n used:z stayed:eɪ closed:z loved:v planned:n rained:n tried:aɪ showed:əʊ explored:ɔː improved:v preferred:ɜː returned:n followed:əʊ cried:aɪ saved:v believed:v organised:z compared:eə managed:dʒ earned:n" }
    ],
    notes: [
      ["Nghe âm, không nhìn chữ", "danced, fixed đọc /t/ vì âm cuối là /s/ (chữ e câm, x = /ks/). laughed đọc /t/ vì gh = /f/."],
      ["Không thêm âm tiết với /t/ và /d/", "Lỗi rất hay gặp: đọc worked thành /ˈwɜːkɪd/. Chỉ nhóm t / d mới có thêm âm tiết /ɪd/: worked /wɜːkt/ có 1 âm tiết, wanted /ˈwɒntɪd/ có 2 âm tiết."],
      ["Tính từ đặc biệt đọc /ɪd/", "naked /ˈneɪkɪd/, wicked, crooked, beloved. learned và aged khi là tính từ (a learned man, an aged woman) đọc /ɪd/, nhưng khi là động từ thì đọc /d/."],
      ["Mẹo vô thanh / hữu thanh", "Đặt tay lên cổ rồi đọc âm cuối. Cổ không rung là âm vô thanh (→ /t/), cổ rung là hữu thanh (→ /d/)."]
    ]
  },
  // Usage and spelling: put the word in the right form.
  use: [
    {q:"My sister ___ (watch) the news every evening.", a:["watches"], e:"Chủ ngữ số ít, hiện tại đơn; watch tận cùng -ch nên thêm -es."},
    {q:"He usually ___ (go) to work by bus.", a:["goes"], e:"Ngôi thứ ba số ít; go tận cùng -o nên thêm -es."},
    {q:"This city ___ (have) two big parks.", a:["has"], e:"have đổi thành has với chủ ngữ số ít."},
    {q:"Lan ___ (study) English at a language centre.", a:["studies"], e:"Phụ âm + y → -ies."},
    {q:"My father ___ (fix) old bikes in his free time.", a:["fixes"], e:"Tận cùng -x nên thêm -es."},
    {q:"There are three ___ (box) on the table.", a:["boxes"], e:"Danh từ số nhiều, tận cùng -x nên thêm -es."},
    {q:"Many ___ (city) in Asia are very crowded.", a:["cities"], e:"Phụ âm + y → -ies."},
    {q:"The children are playing with their ___ (toy).", a:["toys"], e:"Nguyên âm + y thì giữ y, chỉ thêm -s."},
    {q:"In autumn the ___ (leaf) turn yellow and red.", a:["leaves"], e:"-f → -ves."},
    {q:"We need two ___ (knife) to cut the cake.", a:["knives"], e:"-fe → -ves."},
    {q:"My parents ___ (live) in a small village.", a:["live"], e:"Chủ ngữ số nhiều (my parents) nên KHÔNG thêm -s."},
    {q:"She doesn't ___ (like) spicy food.", a:["like"], e:"Sau doesn't động từ giữ nguyên mẫu."},
    {q:"Every student ___ (need) a dictionary.", a:["needs"], e:"Every + danh từ số ít → động từ thêm -s."},
    {q:"The museum ___ (open) at nine o'clock.", a:["opens"], e:"Chủ ngữ số ít (the museum) → thêm -s."},
    {q:"He ___ (wash) the dishes after dinner.", a:["washes"], e:"Tận cùng -sh nên thêm -es."},
    {q:"I took a lot of ___ (photo) on holiday.", a:["photos"], e:"photo là ngoại lệ: chỉ thêm -s."},
    {q:"Nam ___ (try) to run five kilometres every morning.", a:["tries"], e:"Phụ âm + y → -ies."},
    {q:"These ___ (bus) go to the city centre.", a:["buses"], e:"Tận cùng -s nên thêm -es."},
    {q:"A lot of tourists ___ (visit) Hoi An every year.", a:["visit"], e:"Chủ ngữ số nhiều (tourists) nên không thêm -s."},
    {q:"My grandmother always ___ (say) that health is the most important thing.", a:["says"], e:"Ngôi thứ ba số ít → says (đọc /sez/)."},
    {q:"Can you give me some ___ (advice) about the test?", a:["advice"], e:"advice là danh từ không đếm được, không thêm -s."},
    {q:"Two ___ (child) are waiting outside.", a:["children"], e:"child → children là số nhiều bất quy tắc."},
    {q:"We ___ (visit) Ha Long Bay last summer.", a:["visited"], e:"last summer → quá khứ đơn, thêm -ed."},
    {q:"The bus ___ (stop) suddenly in front of the school.", a:["stopped"], e:"stop: 1 nguyên âm + 1 phụ âm → gấp đôi p."},
    {q:"She ___ (study) very hard for the exam last month.", a:["studied"], e:"Phụ âm + y → -ied."},
    {q:"They ___ (plan) a trip to Da Lat in 2023.", a:["planned"], e:"plan → gấp đôi n."},
    {q:"I ___ (stay) at my aunt's house last weekend.", a:["stayed"], e:"Nguyên âm + y thì giữ y, thêm -ed."},
    {q:"He ___ (try) to call you three times yesterday.", a:["tried"], e:"Phụ âm + y → -ied."},
    {q:"The old bridge was ___ (repair) last year.", a:["repaired"], e:"Bị động: was + V3."},
    {q:"Have you ever ___ (travel) abroad?", a:["travelled","traveled"], e:"Hiện tại hoàn thành: have + V3. Anh-Anh: travelled, Anh-Mỹ: traveled."},
    {q:"When he was young, my brother ___ (prefer) tea to coffee.", a:["preferred"], e:"prefer có trọng âm ở cuối → gấp đôi r."},
    {q:"The film was so long that I felt ___ (bore).", a:["bored"], e:"Cảm xúc của người → tính từ -ed."},
    {q:"I was very ___ (interest) in the history lesson.", a:["interested"], e:"Cảm xúc của người → interested."},
    {q:"The history lesson was very ___ (interest).", a:["interesting"], e:"Tính chất của sự vật → tính từ -ing."},
    {q:"We ___ (go) to the beach yesterday.", a:["went"], e:"go là động từ bất quy tắc: go → went."},
    {q:"Did you ___ (enjoy) the party?", a:["enjoy"], e:"Sau did động từ giữ nguyên mẫu."},
    {q:"The shop ___ (close) early last Sunday.", a:["closed"], e:"Tận cùng -e chỉ thêm -d."},
    {q:"My father ___ (drop) his phone in the river.", a:["dropped"], e:"drop → gấp đôi p."},
    {q:"The students ___ (relax) after the final test.", a:["relaxed"], e:"Không gấp đôi x: relaxed."},
    {q:"It ___ (rain) all day yesterday.", a:["rained"], e:"Quá khứ đơn, thêm -ed."}
  ]
};
