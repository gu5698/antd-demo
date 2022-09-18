import { useEffect, useState } from "react";
import axios from "axios";


// const callApi = (postData, req) => get('https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79')
const callApi = (postData, req) => {
  return Promise.resolve({
    status: "ok",
    totalResults: 34,
    articles: [
      {
        source: {
          id: null,
          name: "Ettoday.net",
        },
        author: "ETtoday新聞雲",
        title:
          "常常覺得累？「這10症狀中4」＝你身體很濕 他激推喝1杯茶有效 - ETtoday健康雲",
        description:
          "中醫師出身的知識型YouTuber《77老大》近日在粉專PO出網友們的疑問，「我體濕怎麼辦？濕氣重怎麼辦？」並說超多人關心這議題。他指出，首先必須知道什麼是「濕氣重」，並列舉10大症狀，要大家自行鑑定，一旦中超過4點，即屬於寒濕體質。但只要搭配1款茶飲，連續喝2～3週，就能替身體除濕一波。",
        url: "https://health.ettoday.net/news/2337929",
        urlToImage: "https://cdn2.ettoday.net/images/2895/d2895841.jpg",
        publishedAt: "2022-09-16T13:28:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Cna.com.tw",
        },
        author: "中央通訊社 Central News Agency",
        title:
          "毅力號採得火星岩石樣本 發現古代微生物潛在跡象[影] - 中央社即時新聞",
        description:
          "美國國家航空暨太空總署的火星探測車「毅力號」探測到迄今為止濃度最高的有機分子，這可能意味古代曾有微生物存在，科學家迫不及待想迎接相關岩石樣本回到地球以確認此事。",
        url: "https://www.cna.com.tw/news/ait/202209160324.aspx",
        urlToImage:
          "https://imgcdn.cna.com.tw/www/webphotos/WebOg/600/20220916/1190x625_468157608438.jpg",
        publishedAt: "2022-09-16T13:07:00Z",
        content:
          "15\r\nNASAPerseveranceDavid Shuster\r\nMars Sample ReturnNASAESA2033\r\nPercy20212Jezero Crater\r\n35\r\nWildcat Ridge12720\r\naromatics\r\nNASASunanda Sharma\r\nCuriosity/1110916",
      },
      {
        source: {
          id: null,
          name: "msnNOW",
        },
        author: null,
        title: "AV女優恐染愛滋！爆被3中國留學生惡意散播風暴續擴大 - MSN",
        description: null,
        url: "https://www.msn.com/zh-tw/entertainment/news/av女優恐染愛滋！爆被3中國留學生惡意散播-風暴續擴大/ar-AA11U9CI",
        urlToImage: null,
        publishedAt: "2022-09-16T12:07:45Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Yahoo奇摩（即時新聞）",
        title:
          "WTT男單進8強 桌球林昀儒直落三淘汰德國華裔范博孟 - Yahoo奇摩新聞",
        description:
          "單日3戰成了台灣桌球一哥林昀儒的常態，今天他在WTT阿拉木圖挑戰賽男雙、混雙都晉級4強後，男單也以3比0擊敗德國華裔球員范博孟，順利挺進8強。在哈薩克舉辦的WTT阿拉木圖挑戰賽，今天進行第2天會內賽，林昀儒先與搭檔「山豬」廖振珽在男雙合力以直落三橫掃地主哈薩克組合，再與陳思羽攜手於混雙橫掃美國搭檔，雙雙闖進4強。",
        url: "https://tw.news.yahoo.com/%E6%A1%8C%E7%90%83%E6%9E%97%E6%98%80%E5%84%92%E7%9B%B4%E8%90%BD%E4%B8%89%E6%B7%98%E6%B1%B0%E5%BE%B7%E5%9C%8B%E8%8F%AF%E8%A3%94%E8%8C%83%E5%8D%9A%E5%AD%9F-wt-t%E7%94%B7%E5%96%AE%E6%8C%BA%E9%80%B2-8-%E5%BC%B7-111343453.html",
        urlToImage:
          "https://s.yimg.com/uu/api/res/1.2/QjDzBUJZDJpjRRQNLR88DQ--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/ko/nownews.com/948072d0070d023e3b97a87ec86bef66",
        publishedAt: "2022-09-16T11:13:43Z",
        content:
          "20Big32552028 6ATP 30023712000Rafael Nadal2004(Andy Roddick) 237 - 2008818100",
      },
      {
        source: {
          id: null,
          name: "Eprice.com.tw",
        },
        author: "dddd204",
        title:
          "蘋果公佈了iPhone 14 Pro 系列在8 個狀況下，還是會關閉AOD 螢幕 - ePrice",
        description:
          "iPhone 14 這次發表仍然帶來了新功能，其中 iPhone 14 Pro 系列也帶來了 Always-On Display（AOD）的功能，不過也不是傻傻的永遠將螢幕開著，在八種狀況下，iPhone 14 Pro 還是會把螢幕整個關掉。AOD 功能正式在 iPhone 14 Pro 登場，不過在官網的功能介紹，蘋果列出了八種不需要 AOD 顯示的狀況，讓手機的螢幕完全進入關閉以節省電力，其中",
        url: "https://m.eprice.com.tw/mobile/talk/4544/5750301/1/",
        urlToImage: "https://img.eprice.com.tw/img/news/35646/fb1663340360.jpg",
        publishedAt: "2022-09-16T10:41:11Z",
        content:
          "iPhone 14 iPhone 14 Pro Always-On DisplayAODiPhone 14 Pro \r\nAOD iPhone 14 Pro AOD AOD \r\niPhone 14 Pro CarPlay AOD iPhone Apple Watch AOD AOD \r\nMacRumors",
      },
      {
        source: {
          id: null,
          name: "Ltn.com.tw",
        },
        author: "自由時報",
        title: "中職》味全14戰9敗季後賽拉警報葉總點出關鍵- 自由體育 - 自由時報",
        description:
          "味全龍競爭季後賽門票近期有些疲軟，近14場戰績只有3勝9敗2和，年度勝率逐漸被統一獅拉近，總教練葉君璋坦言，「看得出來選手都已經累了。」葉總說，去年球季中間還有疫情延賽喘息，今年幾乎沒有，這是很大的挑戰，球員沒有遇過賽季打那麼久，「他們相當辛苦，盡最大力量去比賽就好了。」",
        url: "https://sports.ltn.com.tw/news/breakingnews/4060419",
        urlToImage:
          "https://img.ltn.com.tw/Upload/sports/page/800S/2022/09/16/phpeyV0fT.jpg",
        publishedAt: "2022-09-16T09:55:00Z",
        content: "© 2022 The Liberty Times. All Rights Reserved.",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "呂欣芷",
        title:
          "崩潰聞到暈！桃園深夜飄「濃濃惡臭味」 原因找到了 - Yahoo奇摩新聞",
        description:
          "桃園市中壢區、楊梅區、平鎮區一帶，昨（15）日晚間陸續傳出有民眾聞到濃濃燒焦及塑膠味，不少人直呼「是火災嗎？聞到頭超暈」、「聞久了會想吐」。不過消防局並沒有接獲火警通報，稍早調查結果出爐，環保局今（16）日在龍潭乳姑山區隱密處查獲民眾大面積露天燃燒廢棄物，初步研判應為昨晚造成南桃園區域異味的元凶，現場依違反《廢棄...",
        url: "https://tw.news.yahoo.com/%E6%A1%83%E5%9C%92%E6%B7%B1%E5%A4%9C%E9%A3%84-%E5%A1%91%E8%86%A0%E6%83%A1%E8%87%AD%E5%91%B3-%E7%86%B1%E5%8D%80%E5%9C%A8%E9%80%99%E8%A3%A1-%E7%92%B0%E4%BF%9D%E5%B1%80%E7%A8%BD%E6%9F%A5%E4%B8%AD-013857726.html",
        urlToImage:
          "https://s.yimg.com/uu/api/res/1.2/SNIr4xzxtowxrQmxVgbD8w--~B/aD01OTY7dz0xMDYwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/ko/news_tvbs_com_tw_938/1866ae0a7a1aafa78cf27371e7857963",
        publishedAt: "2022-09-16T09:35:01Z",
        content: "/ (15)253025030020015925302002&amp;nbsp;",
      },
      {
        source: {
          id: null,
          name: "Ltn.com.tw",
        },
        author: "自由時報",
        title:
          "長沙中國電信大樓整棟起火 網友挖出招標公告「消防設備存隱患」 - 自由時報",
        description:
          "首次上稿：16:57更新時間：17:30（更新事故大樓消防招標資訊）中國長沙電信大樓今下午發生火警，火勢猛烈，目前未發現人員傷亡。",
        url: "https://news.ltn.com.tw/news/world/breakingnews/4060331",
        urlToImage:
          "https://img.ltn.com.tw/Upload/news/600/2022/09/16/phpeWx4rz.jpg",
        publishedAt: "2022-09-16T09:30:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Cnyes.com",
        },
        author: "https://www.facebook.com/cnYES",
        title: "〈台幣〉貶1.63角、單周重挫3.98角 不排除下探32元大關 - Anue鉅亨",
        description:
          "〈台幣〉貶 1.63 角、單周重挫 3.98 角 不排除下探 32 元大關",
        url: "https://news.cnyes.com/news/id/4956706",
        urlToImage:
          "https://cimg.cnyes.cool/prod/news/4956706/l/309c0ff567b722936e63e1f17ffc9d0e.jpg",
        publishedAt: "2022-09-16T09:21:22Z",
        content:
          "(16) 174.14 31.293 1.63 3.98 14.99 \r\n 108 14561.76 174.15 \r\n 8 4 2 7 1 7 \r\n 31.15 31.36 1.63 31.293 31 30 31 32 \r\n()",
      },
      {
        source: {
          id: null,
          name: "Soundofhope.org",
        },
        author: null,
        title: "身上長瘊子要留意這幾點 - SOH_NEWS_CN",
        description:
          "日常生活中，人們會不經意地發現手上、腳上或脖子上長了膚色的小疙瘩。其實就是尋常疣，中醫也叫“千日瘡”，是病毒感染所致。",
        url: "https://www.soundofhope.org/post/653366?lang=b5",
        urlToImage: "https://img.soundofhope.org/2022-09/1663081740983.gif",
        publishedAt: "2022-09-16T08:59:46Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "The Central News Agency 中央通訊社",
        title: "谷德溫跟大谷翔平文化交流 被中職中場休息嚇一跳 - Yahoo奇摩新聞",
        description:
          "（中央社記者謝靜雯台北16日電）中職味全龍隊新洋砲谷德溫今天升上一軍馬上先發，谷德溫與前隊友大谷翔平有文化交流，「來到亞洲就知道這邊的好」；二軍出賽經驗，谷德溫點出被5局中場休息嚇到。",
        url: "https://tw.news.yahoo.com/%E8%B0%B7%E5%BE%B7%E6%BA%AB%E8%B7%9F%E5%A4%A7%E8%B0%B7%E7%BF%94%E5%B9%B3%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81-%E8%A2%AB%E4%B8%AD%E8%81%B7%E4%B8%AD%E5%A0%B4%E4%BC%91%E6%81%AF%E5%9A%87-%E8%B7%B3-083741587.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/TaoCBKRQtUYpn_5rr1Va6Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NjQ-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/38428870-359f-11ed-bff3-9a6fcc556d30",
        publishedAt: "2022-09-16T08:37:41Z",
        content:
          "155Brayan Belloleyber TorresAlex VerdugoThe Red Sox just want the 2022 season to end. Play the Yakety Sax music pic.twitter.com/9xfVRO7vCM Barstool Sports (@barstoolsports) September 15, 2022 Aaron H… [+28 chars]",
      },
      {
        source: {
          id: null,
          name: "Ettoday.net",
        },
        author: "ETtoday新聞雲",
        title:
          "突傳疫情怕被封控！ 上海好市多顧客拔腿狂奔：不跑就跑不掉了 - ETtoday新聞雲",
        description:
          "有民眾昨（15）日在上海市閔行區的好市多（Costco）購物時，突然發現一大群人拔腿往外跑，原來是當地有疫情傳出，民眾購物到一半深怕被「就地封控」，連排隊的推車都不管了，拔退就往外跑，拍攝的民眾還表示，「全部在往外跑了，說不跑（就）跑不掉了！」(上海,好市多,Costco,新冠肺炎,疫情,封控,購物)",
        url: "https://www.ettoday.net/news/20220916/2339585.htm",
        urlToImage: "https://cdn2.ettoday.net/images/6573/d6573342.jpg",
        publishedAt: "2022-09-16T08:18:00Z",
        content: "7489159371919087174462https://reurl.cc/2ZWkKO188303",
      },
      {
        source: {
          id: null,
          name: "Ettoday.net",
        },
        author: "ETtoday新聞雲",
        title:
          "重陽節要發錢了！10萬人受惠 住這縣市最高爽領9千元 - ETtoday新聞雲",
        description:
          "下個月（10月）4日是農曆9月9日，也就是傳統的重陽節，嘉義縣長翁章梁為表達重陽節對老人家祝賀之意，9月下旬起將發放「老勢大」（台語，指老人家）3000元、6000元、9000元不等的重陽敬老禮金，請家中長輩備妥身分證正本及印章，縣府將派員親自到村里發放。(重陽節 , 嘉義 , 敬老禮金)",
        url: "https://www.ettoday.net/news/20220916/2339578.htm",
        urlToImage: "https://cdn2.ettoday.net/images/6573/d6573280.jpg",
        publishedAt: "2022-09-16T08:16:00Z",
        content:
          "9\r\n104999300060009000\r\n111721.43656165105,40365893,00090996,0009,0003.29\r\n10725,13380,138(2,5822,000)\r\n926301(9261026)923",
      },
      {
        source: {
          id: null,
          name: "udn 聯合新聞網",
        },
        author: "綜合報導",
        title: "這款iPhone經典神機已無殘值 果粉曝2用途持續服役中 - 聯合新聞網",
        description:
          "蘋果最新款手機iPhone 14系列今天（16日）開賣了，許多果粉一早就排隊等著搶先入手，不過隨著新款手機的上市，舊手機的殘值也受到關注。有網友就在臉書發文哀怨iPhone 6s、iPhone 6s Plus被踢出折抵名單，已經無殘值，但不少使用者認為相當耐用，還可以當作備用機或聽音樂使用。",
        url: "https://udn.com/news/story/7098/6617683",
        urlToImage:
          "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/02/20/1/5945998.jpg&s=Y&x=0&y=0&sw=1279&sh=835&exp=3600",
        publishedAt: "2022-09-16T08:10:36Z",
        content:
          "iPhone 1416iPhone 6siPhone 6s Plus\r\niPhone 6siPhone 13 Pro Max21800iPhone 71700\r\niPhone 6s6s6s6s6i6s2GB RAM6si666s673\r\n6si6 plus26s plus6s plus",
      },
      {
        source: {
          id: null,
          name: "Ltn.com.tw",
        },
        author: "自由時報",
        title: "張善政若確定侵權 農委會：將追回5736萬並須賠償 - 自由時報",
        description:
          "國民黨桃園市長參選人張善政過去任職宏碁期間擔任農委會計畫的主持人，3年總計21篇的子報告內容「複製」、「貼上」程度不一，農委會今公布初步調查結果，其中有6篇子報告高度重疊，今寄出雙掛號公文請張善政與宏碁公司於月底前用書面說明，副主委陳駿季今（16）表示，待收到書面說明後，就會進一步彙整研判是否有侵權之虞，若有就會組成專案會議，其中成員半數以上會是外部專家；依照當初契約，張善政也必須負起賠償責任。張善政過去任職宏碁副總期間，擔任農委會3年期研究計劃（2007-2009）「農業電子化發展策略分析與規劃」主持人，整體經…",
        url: "https://news.ltn.com.tw/news/politics/breakingnews/4060189",
        urlToImage:
          "https://img.ltn.com.tw/Upload/news/600/2022/09/16/4060189_2_1.jpg",
        publishedAt: "2022-09-16T07:59:48Z",
        content:
          "103\r\n2022/09/16 15:59321616\r\n32007-20095736GRB20072008GRB20092NCC\r\n...\r\n8502iThenticate®6\r\n2\r\n1035736\r\nAPP \r\n APP",
      },
      {
        source: {
          id: null,
          name: "Ettoday.net",
        },
        author: "ETtoday新聞雲",
        title:
          "樹林男持菜刀追砍！16歲高中生躲進超商 他一句「認錯了」閃人 - ETtoday新聞雲",
        description:
          "新北市樹林區一名黑衣男子15日下午1點多，持菜刀在大安路上追著一名年僅16歲的高中生！高中生以百米衝刺的速度進入超商求救，男子尾隨且邊走邊嗆聲，直到高中生把口罩拿下，男子才突然改口說，「我認錯了」掉頭離去，留下錯愕的眾人。警方獲報循線找到男子並壓制，評估後強制送醫。(菜刀,追砍,高中生,影音)",
        url: "https://www.ettoday.net/news/20220916/2339572.htm",
        urlToImage: "https://cdn2.ettoday.net/images/6573/d6573256.jpg",
        publishedAt: "2022-09-16T07:51:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "中廣新聞網",
        title: "日本德仁天皇伉儷週六出發 啟程參加英女王國葬 - Yahoo奇摩新聞",
        description:
          "日本內閣會議今（16）日正式敲定了德仁天皇夫婦親自赴英，參加英國女王伊麗莎白二世國葬的行程。據日本宮內廳表示，德仁天皇伉儷，會在明（17）日上午，從東京羽田機場出發，19日出席在西敏寺大教堂舉行的女王國葬。天皇伉儷在稍事停留之後，就啟程返日，預定20日下午，抵達羽田機場。宮內廳表示，日本政府在接到了英國政府致國家...",
        url: "https://tw.news.yahoo.com/%E6%97%A5%E6%9C%AC%E5%BE%B7%E4%BB%81%E5%A4%A9%E7%9A%87%E4%BC%89%E5%84%B7%E9%80%B1%E5%85%AD%E5%87%BA%E7%99%BC-%E5%95%9F%E7%A8%8B%E5%8F%83%E5%8A%A0%E8%8B%B1%E5%A5%B3%E7%8E%8B%E5%9C%8B%E8%91%AC-073751882.html",
        urlToImage:
          "https://s.yimg.com/uu/api/res/1.2/4vYVCgTstIJhnZknVdKxHQ--~B/aD04MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/zh-tw/bcc.com.tw/4d82d66d6c3690507b51ebad98315024",
        publishedAt: "2022-09-16T07:37:51Z",
        content: "Queen Elizabeth II19The SunPrince AndrewPrince Harry",
      },
      {
        source: {
          id: null,
          name: "Ettoday.net",
        },
        author: "ETtoday新聞雲",
        title:
          "梅根要回宮了？獲「少女擁抱」後計劃返英 專家：她自認很受愛戴 - ETtoday新聞雲",
        description:
          "英國哈利王子的妻子梅根10日陪同哈利，與威廉、凱特一同現身溫莎城堡外，向哀悼女王的民眾致意時，意外得到了14歲少女扎克的溫暖擁抱，歡迎梅根返英。對此，有王室專家表示，梅根可能會在感受到民眾的熱烈歡迎後，計劃從美國搬回英國。(英國,英女王,哈利,梅根,Amelka Zak)",
        url: "https://www.ettoday.net/news/20220916/2339227.htm",
        urlToImage: "https://cdn2.ettoday.net/images/6572/d6572550.jpg",
        publishedAt: "2022-09-16T07:20:00Z",
        content:
          '"Oh my gosh, I was not expecting them to be there."\r\nCNN\'s @scottmclean caught up with the girl who got a hug from the Duchess of Sussex, Meghan Markle. She said she wanted to show the Duchess that "… [+103 chars]',
      },
      {
        source: {
          id: null,
          name: "Eprice.com.tw",
        },
        author: "Jason",
        title:
          "iPhone 14 Pro Max 入手開箱、效能測試（同場加映與iPhone 13 Pro Max 對比） - ePrice",
        description:
          "蘋果年度旗艦智慧手機：iPhone 14 系列，於今（16）日正式在台開賣，不知道各位果粉們有沒有第一時間入手呢？由於蘋果官方並沒有提供給我們測試機，因此在預購開跑時，我們也直接訂購了一台 iPhone 14 Pro Max 256GB 來寫開箱與實測。",
        url: "https://www.eprice.com.tw/mobile/talk/4544/5750254/1/rv/apple-iphone-14-128gb-review/",
        urlToImage: "https://img.eprice.com.tw/img/news/35636/fb1663340360.jpg",
        publishedAt: "2022-09-16T07:00:16Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Chinatimes.com",
        },
        author: "藍孝威",
        title:
          "4度登陸中國刷新多項紀錄「梅花」成本世紀首個登陸東北颱風 - 中時新聞網 Chinatimes.com",
        description:
          "據「@中國天氣」消息，颱風「梅花」今天（9月16日）12時40分前後以熱帶風暴級在遼寧大連第四次登陸中國，為2000年以來首個登陸遼寧的颱風，也是1949年以來登陸中國最北的秋颱。隨著「梅花」到來，遼寧、吉林、黑龍江",
        url: "https://www.chinatimes.com/realtimenews/20220916002912-260409",
        urlToImage:
          "https://images.chinatimes.com/newsphoto/2022-09-16/656/20220916002913.jpg",
        publishedAt: "2022-09-16T06:45:57Z",
        content:
          "@916124020001949\r\n9161240923990\r\n14203015030160\r\n891012\r\n8195020001950\r\n1950199012Yancy201416\r\n9\r\n100160204050\r\n<ol></ol>",
      },
    ],
  });
};

const useTemplateData = () => {
  const [TemplateData, setTemplateData] = useState([]);

  async function fetchData() {
    const res = await callApi();

    const data = res.articles ?? {};
    setTemplateData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return [TemplateData];
};

export function get(url, params, option) {
  return axios({
    method: "get",
    url: url,
  })
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
    });
}
export default useTemplateData;
