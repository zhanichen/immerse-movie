const toggle_button = document.getElementById("toggle");

toggle_button.onclick = function(){
  toggle_button.classList.toggle("light");
}

$(document).ready(function(){
  $(".toggle").click(function(){
    $(".hot_bgc").toggleClass("light");
    $(".light_bgc").toggleClass("nav_light");
    $(".search_bgc").toggleClass("search_light");
    $(".copyright").toggleClass("copyright_light");
    $(".introduce_bgc").toggleClass("introduce_light");
  })
})



var titleMovie = {
  name: "侏羅紀世界",
  cover: "https://play-lh.googleusercontent.com/icnxssBP9SOAIkiJAa7tRI6n4Q0yMI3Cs3e0Aasj0CUKLUpU_J4qwxNDdXzTYd89SSyKVw=w400-h600-rw",
  price: 360,
  open: false
} 

var vm = new Vue({
    el:"#app",
    data:{
      hot_movies:[
    {
      name: "怪獸與牠們的產地",
      type: "2016年  132分鐘",
      cover: "https://play-lh.googleusercontent.com/9TxVxAOeoGSlmN_wXA4bPLvRNMTWT0_LlXcEZmOcwummAt0pW91V8sN-0IDTn3OIGxlEZkiVhMinrgV8xMD9=w400-h600-rw",
      description: "紐特斯卡曼德剛剛完成了一次全球性的遠足，發現並記錄了一系列非凡的神奇生物。在抵達紐約短暫停留期間，要不是因為一個名為雅各布的非神奇人士、一個放錯地方的神奇箱子，以及紐特一些神奇動物的逃逸，紐特的來去可能會平安無事。這可能會給巫師和非神奇人士的世界造成麻煩。",
      price: 550,
      open: false
    },
    {
      name: "侏羅紀世界",
      type: "2015年  124分鐘",
      cover: "https://play-lh.googleusercontent.com/icnxssBP9SOAIkiJAa7tRI6n4Q0yMI3Cs3e0Aasj0CUKLUpU_J4qwxNDdXzTYd89SSyKVw=w400-h600-rw",
      description: "22年前，約翰哈蒙德博士有個夢想：建立一座主題樂園，讓世界各地的遊客可以體驗親眼目睹真實恐龍的驚奇。現在他的夢想終於實現了。歡迎來到侏羅紀世界，這座設施完備的奢華渡假村可容納數萬名遊客，讓他們每天都能近距離接觸活生生的史前恐龍，感受無限驚奇與讚嘆。侏羅紀世界位於哥斯大黎加的離島，裡面建造了熙熙攘攘的主要大街，擁有讓人驚奇不斷的先進設施。",
      price: 360,
      open: false
    },
    {
      name: "湯姆貓與傑利鼠",
      type: "2021年  101分鐘",
      cover: "https://play-lh.googleusercontent.com/XNC6pfziCfeFzeSKOpawGmO5ZnwpscxL0gZ1NJm_oQpelUDfhwajFoIlHLNCSIvaCTeKvbRgXIIzZj7ZBxo=w400-h600-rw",
      description: "傑利鼠在「世紀婚禮」前夕搬進了紐約最豪華的飯店，他將為史上最逗趣的爭鬥重燃戰火，迫使婚禮策劃師委託湯姆貓將他除之而後快。戰況激烈的貓捉老鼠，勢必給策劃師本人的職業生涯、婚禮現場以至飯店本身帶來不少麻煩。然而，更大的陰謀蠢蠢欲動... 飯店內部早就有位員工滿懷惡意野心，密謀將策劃師、湯姆貓與傑利鼠三者一網打盡！經典動畫融合動作場面，湯姆貓與傑利鼠兩大傳奇角色涉足全新領域，在大銀幕上挑戰前所未有的冒險，他們將同心協力、拯救世界！",
      price: 330,
      open: false
    },
    {
      name: "吹夢巨人",
      type: "2016年  117分鐘",
      cover: "https://play-lh.googleusercontent.com/fcQ6-j7ID5d6gTogMYdgZHXyd_ww3D5e-o6db33zeruMMKrRuGLoegN1ZoCPCIPpQgE=w400-h600-rw",
      description: "小女孩蘇菲，在一個失眠的夜晚，被大巨人偷偷從孤兒院帶走，原來，每天晚上，當所有的人都進入了夢鄉，卻有九個大巨人卡滋卡滋的把孩童當豆子嚼。幸運的蘇菲，遇上的是第10個友善的巨人，他不吃人肉，只吃臭瓜，還能穿越到夢境之地，捕捉像螢火蟲一樣的好夢，然後在深夜裡，吹進寂寞孩子的夢鄉。 友善的巨人不是9個壞巨人的對手，勇敢的蘇菲就想了個妙計，兩人聯手，要把壞巨人一網打盡，讓他們不能再出沒抓孩童",
      price: 290,
      open: false
    },
    {
      name: "決戰中途島",
      type: "2019年  136分鐘",
      cover: "https://play-lh.googleusercontent.com/niGFQ_H2PBss2LlN6eNhYj0Exnqg8KM2sHq0bNEOSDpA3zJq9ZIuCBhuNK1lEv9AGuFCz59kvrNweqjYfg=w400-h600-rw",
      description: "打造1942年二次世界大戰期間，著名的太平洋戰爭中一場關鍵性戰役--史上聞名的「中途島戰役」，此戰被認為是大戰中扭轉局勢的轉捩點！ 本片集結好萊塢重量級卡司一同參與，導演羅蘭·艾默瑞克在磅礡戰爭中更試圖添入人性，能展現恢弘史詩，又兼顧私人情感敘事，也強調戰時日方情況，導演希望讓觀眾了解：「發動戰爭的政客從來不打仗。最終付出代價都是普通士兵。在我看來，在中途島戰役中展現出日軍和美軍一樣值得尊敬十分重要！」",
      price: 290,
      open: false
    },
      {
      name: "松露獵人",
      type: "2020年  83分鐘",
      cover: "https://play-lh.googleusercontent.com/x0nAs5mrKnKf_zWWh5BGQYFCSvplyQcJWr27lzofgSQBVVUfvxCZwHB1qXnOYqsPP2Nbn1u2d5_t-D-68w=w400-h600-rw",
      description: "在意大利皮埃蒙特森林深處，一眾七、八十歲的老人仍獵尋稀有寶貴的白松露，一種現今科學也難以種出的食物。他們由代代相傳的獨特文化和訓練，以及專業受訓的愛犬之鼻子指引。他們簡樸慢活，與忠誠的動物和油畫般的風景和諧並存，生活有如童話。松露獵人與手機螢幕和互聯網隔絕，選擇手工烹調食物和飲料，重視親身與社區建立聯繫。即使白松露的供應減少，其需求仍逐年遞增。隨著氣候變化、森林砍伐，以及青黃不接等問題，松露獵人的秘訣更為世人所渴求。然而，這群飽歷風雨的獵人藏有更寶貴的秘密：富足而充實的人生秘訣。",
      price: 450,
      open: false
    },
    {
      name: "紫羅蘭永恆花園",
      type: "2021年  140分鐘",
      cover: "https://play-lh.googleusercontent.com/JXCN1Jlufo9k4Wc54Rlk9E0oehxTHlxe5Z5yXhVm-G_ToWWGk-a9tEFviaJMo2oWltzmtJ6mhi2vuDA-pdc=w400-h600-rw",
      description: "從事代筆職業的她，名叫薇爾莉特·伊芙加登（石川由依配音）。在讓人們傷痕累累的戰爭結束後數年，嶄新的時代來臨，世界也逐漸恢復平穩，生活並隨著新技術開發而改變。就在讓人們開始往前邁進之時，心懷思念重要之人的薇爾莉特，卻必須在沒有「那個人」的世界中活著。直到某天，她看到了一封信",
      price: 290,
      open: false
    },
    {
      name: "為了與你相遇",
      type: "2017年  100分鐘",
      cover: "https://play-lh.googleusercontent.com/dyfXzfmH8qWJ4VBZQnwTkw-tKi8-ym4OD7EwVvE0cTejHFW2QS1yssE1yJF6-QuwbbQ=w400-h600-rw",
      description: "電影講述一隻狗貝利（喬許·蓋德 配音）歷經四次輪迴冒險，且每一次的生離死別都讓貝利有了新的學習與成長，也懂得牠存在的真正意義與使命",
      price: 290,
      open: false
    },
    {
      name: "天氣之子",
      type: "2019年  112分鐘",
      cover: "https://play-lh.googleusercontent.com/AsdAa_7Oq283y1PmESjbdAQcP5KneTJoyG_700ZegrR8R85JUppSGSIVyUcDRu7E7S_iFWhovd2W-EDIrvOz=w400-h600-rw",
      description: "高一那年夏天，帆高離開位在離島的家鄉，獨自一人來到東京，拮据的生活迫使他不得不找份工作，最後來到一間專門出版奇怪超自然刊物的出版社擔任寫手不久，東京開始下起連日大雨，彷彿暗示著帆高不順遂的未來，在這座繁忙城市裡到處取材的帆高邂逅了與弟弟相依為命，不可思議的美少女陽菜。「等等就會放晴了喔。」陽菜這樣告訴著帆高，不久，頭頂的烏雲逐漸散去，耀眼的陽光灑落街道。原來，陽菜擁有「改變天氣」的奇妙能力",
      price: 450,
      open: false
    },
    {
      name: "動物方城市",
      type: "2019年  112分鐘",
      cover: "https://play-lh.googleusercontent.com/0ijkX9qi2kwieZGq__F49piPjCmfHnbJUgp6cSj4P4hdXMhTO9eaMQT7iQBOebiV-CSk9g=w400-h600-rw",
      description: "動物方城市裡沒有人類的存在，也就如同一般的大都會，彷彿一個種族的大熔爐，在這個只有哺乳類動物存在的城市裡，獵物與獵食者處於一個巧妙的平衡。不過在這個看似相安無事的世界裡，似乎正醞釀著一個足以動搖平衡的陰謀… 富有正義感的菜鳥女警官必須要與一隻狡詐的狐狸聯手辦案，解決動物方城市中最大的危機",
      price: 450,
      open: false
    },
  ],
      movies: [
    {
      name: "湯姆貓與傑利鼠",
      type: "闔家觀賞",
      level: "pic/0+.png",
      time:"2021年 101分鐘",
      cover: "https://play-lh.googleusercontent.com/XNC6pfziCfeFzeSKOpawGmO5ZnwpscxL0gZ1NJm_oQpelUDfhwajFoIlHLNCSIvaCTeKvbRgXIIzZj7ZBxo=w400-h600-rw",
      description: "傑利鼠在「世紀婚禮」前夕搬進了紐約最豪華的飯店，他將為史上最逗趣的爭鬥重燃戰火，迫使婚禮策劃師委託湯姆貓將他除之而後快。戰況激烈的貓捉老鼠，勢必給策劃師本人的職業生涯、婚禮現場以至飯店本身帶來不少麻煩。然而，更大的陰謀蠢蠢欲動...",
      price: 590,
      open: false
    },
    {
      name: "父親",
      type: "劇情",
      level: "pic/0+.png",
      time:"2021年 96分鐘",
      cover: "https://play-lh.googleusercontent.com/1hzaWywsZb_FAIJYnjsUROuNL4jNtC_Pyt1eDoMbmgGWoAFX_2ScM8GFDAMIgfmLMU_RD3N1ndpFp_hhTSUG=w400-h600-rw",
      description: "《父親》是一部2020年的劇情片，由弗洛里安·澤勒擔任導演兼編劇，改編自他2012年的舞台劇《父親》，由安東尼·霍普金斯、奧莉薇亞·柯爾曼、馬克·加蒂斯、伊莫珍·蓋伊·波茨、盧夫斯·塞維爾和奧利維婭·威廉斯演出，講述了一位老年人迷失在失智症幻覺中的故事。",
      price: 290,
      open: false
    },
    {
      name: "羊男的迷宮",
      type: "劇情",
      level: "pic/12+.png",
      time:"2006年 118分鐘",
      cover: "https://play-lh.googleusercontent.com/mwvJeqXZd4WfCZZR9ETM28iNGrMWigOZLxg_6N6gwxWqqOm0kO6hLSc2-1X-Ta2bqrrgswDGko4t-gAG5g=w400-h600-rw",
      description: "《羊男的迷宮》以西班牙內戰為背景，孤獨、敏感的Ofelia每天都目睹著悲劇的上演，於是她在內心深處創造出了一個奇幻的世界。 電影對青少年成長問題的關注與對戰爭的批判精神，充分顯示出了戴托羅的人文關懷精神。 ",
      price: 590,
      open: false
    },
    {
      name: "為了與你相遇",
      type: "闔家觀賞",
      level: "pic/0+.png",
      time:"2017年 100分鐘",
      cover: "https://play-lh.googleusercontent.com/dyfXzfmH8qWJ4VBZQnwTkw-tKi8-ym4OD7EwVvE0cTejHFW2QS1yssE1yJF6-QuwbbQ=w400-h600-rw",
      description: "電影講述一隻狗貝利（喬許·蓋德 配音）歷經四次輪迴冒險，且每一次的生離死別都讓貝利有了新的學習與成長，也懂得牠存在的真正意義與使命。",
      price: 290,
      open: false
    },
    {
      name: "明日進行曲",
      type: "紀錄片",
      level: "pic/0+.png",
      time:"2016年 119分鐘",
      cover: "https://play-lh.googleusercontent.com/15q99s8VofKgRxogQ5TXkEPZcDr9QC_avWDbhM4AaSj4RuneeskProvCWcgH03G08SFY=w400-h600-rw",
      description: "四年前，法國新生代女星梅蘭妮·蘿倫產下一子，從好友西席爾·迪昂口中得知，如果人類再不改變目前的消費與生活模式，將在2040到2100年之間徹底滅亡。兩位年輕導演都是為人父母，在震驚之餘，決定出發到全球各地，從法國開始，他們帶著一小批志同道合的電影與社運界朋友，足跡踏遍了五大洲，尋求解決危機之道。",
      price: 290,
      open: false
    },
    {
      name: "紫羅蘭永恆花園",
      type: "闔家觀賞",
      level: "pic/0+.png",
      time:"2021年 140分鐘",
      cover: "https://play-lh.googleusercontent.com/JXCN1Jlufo9k4Wc54Rlk9E0oehxTHlxe5Z5yXhVm-G_ToWWGk-a9tEFviaJMo2oWltzmtJ6mhi2vuDA-pdc=w400-h600-rw",
      description: "從事代筆職業的她，名叫薇爾莉特·伊芙加登（石川由依配音）。在讓人們傷痕累累的戰爭結束後數年，嶄新的時代來臨，世界也逐漸恢復平穩，生活並隨著新技術開發而改變。就在讓人們開始往前邁進之時，心懷思念重要之人的薇爾莉特，卻必須在沒有「那個人」的世界中活著。直到某天，她看到了一封信。",
      price: 290,
      open: false
    },
    {
      name: "松露獵人",
      type: "紀錄片",
      level: "pic/0+.png",
      time:"2020年 83分鐘",
      cover: "https://play-lh.googleusercontent.com/x0nAs5mrKnKf_zWWh5BGQYFCSvplyQcJWr27lzofgSQBVVUfvxCZwHB1qXnOYqsPP2Nbn1u2d5_t-D-68w=w400-h600-rw",
      description: "在意大利皮埃蒙特森林深處，一眾七、八十歲的老人仍獵尋稀有寶貴的白松露，一種現今科學也難以種出的食物。他們由代代相傳的獨特文化和訓練，以及專業受訓的愛犬之鼻子指引。他們簡樸慢活，與忠誠的動物和油畫般的風景和諧並存，生活有如童話。松露獵人與手機螢幕和互聯網隔絕，選擇手工烹調食物和飲料，重視親身與社區建立聯繫。",
      price: 450,
      open: false
    },
    {
      name: "決戰中途島",
      type: "劇情",
      level: "pic/12+.png",
      time:"2019年 136分鐘",
      cover: "https://play-lh.googleusercontent.com/niGFQ_H2PBss2LlN6eNhYj0Exnqg8KM2sHq0bNEOSDpA3zJq9ZIuCBhuNK1lEv9AGuFCz59kvrNweqjYfg=w400-h600-rw",
      description: "打造1942年二次世界大戰期間，著名的太平洋戰爭中一場關鍵性戰役--史上聞名的「中途島戰役」，此戰被認為是大戰中扭轉局勢的轉捩點！ 本片集結好萊塢重量級卡司一同參與，導演羅蘭·艾默瑞克在磅礡戰爭中更試圖添入人性，能展現恢弘史詩，又兼顧私人情感敘事，也強調戰時日方情況，導演希望讓觀眾了解：「發動戰爭的政客從來不打仗。最終付出代價都是普通士兵。在我看來，在中途島戰役中展現出日軍和美軍一樣值得尊敬十分重要！」",
      price: 290,
      open: false
    },
    {
      name: "拆彈專家2",
      type: "動作與冒險",
      level: "pic/12+.png",
      time:"2020年 120分鐘",
      cover: "https://play-lh.googleusercontent.com/42_PoTInLRf9V3_x4JVsMKDgaccncuVsSY1m0-HCMB88CysldeNqP68QdXnLiRvZ_ENU_S-wlr5WfMiieA=w400-h600-rw",
      description: "香港發生連環爆炸案，令全城人心惶惶。前拆彈專家潘乘風（劉德華飾）昏迷於案發現場，被警方列為頭號嫌疑犯，懷疑他跟邪惡組織復生會有密切聯繫。甦醒後的潘乘風，面對警方施壓式的盤問和牢獄之災，決定逃走親自查明真相。",
      price: 290,
      open: false
    },
    {
      name: "怪獸與牠們的產地",
      type: "劇情",
      level: "pic/6+.png",
      time:"2016年 132分鐘",
      cover: "https://play-lh.googleusercontent.com/9TxVxAOeoGSlmN_wXA4bPLvRNMTWT0_LlXcEZmOcwummAt0pW91V8sN-0IDTn3OIGxlEZkiVhMinrgV8xMD9=w400-h600-rw",
      description: "紐特斯卡曼德剛剛完成了一次全球性的遠足，發現並記錄了一系列非凡的神奇生物。在抵達紐約短暫停留期間，要不是因為一個名為雅各布的非神奇人士、一個放錯地方的神奇箱子，以及紐特一些神奇動物的逃逸，紐特的來去可能會平安無事。這可能會給巫師和非神奇人士的世界造成麻煩。",
      price: 550,
      open: false
    }
  ],
      cart:[],
      currentMovie:null,
      isCartOpen: false,
      isTitleDetailOpen: false,
      titleMovie: titleMovie,
      keyword: "",
      isDetailOpen: false,
      currentMovieDetail:null,
      MovieDetail: [],
      movieType:["闔家觀賞","紀錄片","劇情","動作與冒險"]
    },
    methods:{
      bgcss(url){
        return {'background-image': 'url('+url+')',
        'background-size': 'cover',
        'background-position':'center center'}
      },
      wheel(evt){
        console.log(evt.deltaY)
        TweenMax.to(".cards",0.8,{
          left: "+="+evt.deltaY*-2+"px"
        })
      },
      add(movie,evt){
        this.currentMovie= movie
          setTimeout(()=>{
            this.cart.push(movie) 
          },800)
      },
      addTitleMovie(titleMovie,evt){
        this.currentMovie= titleMovie
        this.$nextTick(()=>{
          TweenMax.from(".buybox",0.8,{
            left: $(evt.target).offset().left,
            top: $(evt.target).offset().top,
            opacity: 1,
            ease: Power1.easeIn
          }),
          setTimeout(()=>{
            this.cart.push(titleMovie) 
          },800)
        })
      },
      movieDetail(movie){
        this.currentMovieDetail= movie
        this.MovieDetail.pop(movie) 
        this.MovieDetail.push(movie) 
      },
      more(){
        $(".more").addClass("remove_more"),
        $(".more").css("opacity","0"),
        this.movies.push(
        {
          name: "侏羅紀世界",
          type: "劇情",
          level: "pic/6+.png",
          time:"2015年 124分鐘",
          cover: "https://play-lh.googleusercontent.com/icnxssBP9SOAIkiJAa7tRI6n4Q0yMI3Cs3e0Aasj0CUKLUpU_J4qwxNDdXzTYd89SSyKVw=w400-h600-rw",
          description: "22年前，約翰哈蒙德博士有個夢想：建立一座主題樂園，讓世界各地的遊客可以體驗親眼目睹真實恐龍的驚奇。現在他的夢想終於實現了。歡迎來到侏羅紀世界，這座設施完備的奢華渡假村可容納數萬名遊客，讓他們每天都能近距離接觸活生生的史前恐龍，感受無限驚奇與讚嘆。侏羅紀世界位於哥斯大黎加的離島，裡面建造了熙熙攘攘的主要大街，擁有讓人驚奇不斷的先進設施。",
          price: 360,
          open: false
        },
        {
          name: "小王子公主心",
          type: "紀錄片",
          level: "pic/0+.png",
          time:"2021年 84分鐘",
          cover: "https://play-lh.googleusercontent.com/FHovFumGj8krT9s-ArawyJuKeDSMeCdu3nbD3vF2Yn6vM2q9ufRvW1uV6V9oZ4FibVEpOu0Dqn7YU7mvLmo=w400-h600-rw",
          description: "每個人都會被觸動的內在靈魂，關於愛與勇氣的真實故事。四歲的兒子有一天對母親說：「長大後，我想當女孩。」媽媽對她說：「這是我們要一起打的仗，讓我們一同面對。」",
          price: 450,
          open: false
        },
        {
          name: "終極王者",
          type: "劇情",
          level: "pic/6+.png",
          time:"2021年 111分鐘",
          cover: "https://play-lh.googleusercontent.com/GvtDyWVfUByAXmS7lMHq84oVg6XsjFyg_e1F_CGcfQuXOqc4oa0HTDMD55jLbaPFASHG9JgkK3Plyy1Eu64=w400-h600-rw",
          description: "在杜拜舉行的一場地下的浴血激戰中，格鬥界的傳奇人物密奇·凱利〈西恩·派屈克·福納瑞 飾〉意外敗給了巨星布雷恩。 多年之後網路上卻出現了一則影片，證明布雷恩在這場比賽中作弊，於是全球各地開始出現要求兩人再次比賽的呼聲。 上了年紀體力開始退化的米奇能否在時間內鍛鍊回他的巔峰狀態， 擊敗仇人並奪回屬於他的榮耀。",
          price: 290,
          open: false
        },
        {
          name: "吹夢巨人",
          type: "動作與冒險",
          level: "pic/0+.png",
          time:"2016年 117分鐘",
          cover: "https://play-lh.googleusercontent.com/fcQ6-j7ID5d6gTogMYdgZHXyd_ww3D5e-o6db33zeruMMKrRuGLoegN1ZoCPCIPpQgE=w400-h600-rw",
          description: "小女孩蘇菲，在一個失眠的夜晚，被大巨人偷偷從孤兒院帶走，原來，每天晚上，當所有的人都進入了夢鄉，卻有九個大巨人卡滋卡滋的把孩童當豆子嚼。幸運的蘇菲，遇上的是第10個友善的巨人，他不吃人肉，只吃臭瓜，還能穿越到夢境之地，捕捉像螢火蟲一樣的好夢，然後在深夜裡，吹進寂寞孩子的夢鄉。 友善的巨人不是9個壞巨人的對手，勇敢的蘇菲就想了個妙計，兩人聯手，要把壞巨人一網打盡，讓他們不能再出沒抓孩童。",
          price: 290,
          open: false
        },
        {
          name: "2040",
          type: "紀錄片",
          level: "pic/0+.png",
          time:"2019年 91分鐘",
          cover: "https://play-lh.googleusercontent.com/0I8aQ_LmQWEHOY3lXr_Wx7kZP9GiWqeovpC7ggHcKbjzuzipvygy7n5Ti0inS6gKJhuMPbhBeyHQqDC4FSY=w400-h600-rw",
          description: "曾執導《一部關於糖的電影》的獲獎導演戴蒙．加梅展開探討的是，假如我們妥善利用現有的科技及解決方案來改善地球，到了2040年世界會是何種面貌。戴蒙運用傳統紀錄片戲劇化的鏡頭，結合高端的視覺效果，將此電影作為一封寫給四歲女兒的信，來呈現這些解決方案將如何能夠扭轉氣候變遷，留給後代一個乾淨的地球。",
          price: 350,
          open: false
        }
        )
      } 
    },
    computed: { 
        totalPrice(){
        return this.cart.reduce((total,a)=>total+a.price,0)
      }
    },
    watch:{
      cart(){
          TweenMax.from(".fa-shopping-cart",0.3,{
            scale: 1.3
        })
      }
    }
  }) 

