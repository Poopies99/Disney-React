const firebase = require('firebase/compat/app')
const firestore = require('firebase/compat/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyD63CqCAYPe5lVAP1UnCtdUebHnmUBLRtU",
    authDomain: "disney-react-952fa.firebaseapp.com",
    projectId: "disney-react-952fa",
    storageBucket: "disney-react-952fa.appspot.com",
    messagingSenderId: "552935372907",
    appId: "1:552935372907:web:bd8d23d2ad0faa0757192e",
    measurementId: "G-2Y8C076E38"
});
  
var db = firebase.firestore();

var movies = [
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C991A3CFF43C60C068B04DE9BB06EAA44C6CFEF55DDA8E85AB23F86379267B4B/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1D837158922BCC402EE328E333CF82CBAB76291D727DED16C3B2B17A53E2D7DB/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "The Rebels scatter after the Empire attacks their base on the ice planet Hoth. Han Solo and Princess Leia are pursued by Imperials, while Luke trains with Jedi Master Yoda. But when Luke battles Darth Vader, he  learns the shocking truth of his past.",
      "subTitle": "1980 • 2h 7m • Science Friction, Action-Adventure",
      "title": "The Empire Strikes Back",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2AF469BCDFF1B66514BF2820CBF9E0CECE855CE3F5D6B5A1F126C178240006C7/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "recommend"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F42B2617451E809C064A01CB5623A4061893CB5A61F61D27340045EC3BDCBDA6/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C8DF7B893EDCCFFDEDB67CBB0D9CF2F33A690A2B35838EC95677819C8C7B8A9A/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "`Marvel Studios’ Eternals follows a group of ancient heroes from beyond the stars who had protected Earth since the dawn of man. When monstrous creatures called Deviants, long thought lost to history, mysteriously return, the Eternals are forced to reunite in order to defend humanity once again.",
      "subTitle": "2021 • 2h 37min • Science Fiction, Super Hero, Action-Adventure",
      "title": "Eternals",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/981C622938CC86A1AD726720839F9FEF76F9AB44479512FE1530A66ACF91DE19/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "new"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7A8076F6683065C95F2C474C8FFBB714D2F867129C3BC1FD7F1D6B12E47862B6/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B4708D7F9552291DF6B4685C1378CD35A6F0783432E6F39ADF9698B433BBD761/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace. Experience the motion picture event of a generation in Star Wars: The Force Awakens.",
      "subTitle": "2015 • 2h 19m • Science Fiction, Action-Adventure",
      "title": "The Force Awakens",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3A1D20EE4E0269BDD283155104F4BA8CB9D770B403840EED6ED5D4550F5B8000/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "recommend"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8AF56F262D7D01D976BD5B0DB6B899140ACC75C18F4D95366BE4572245456AFE/scale?width=2880&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CF503DE0F5DD9284A3B8C865FC3344A7A42985D46CF2D368154FAFE9DCB362BD/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.",
      "subTitle": "2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical",
      "title": "Tangled",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",
      "type": "trending"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
      "description": "Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar’s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life’s biggest questions.",
      "subTitle": "2020 • 1h 49m • Family, Comedy, Fantasy, Animation, Music",
      "title": "Soul",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E837DDE901CD036DD87A00F2D63E2F2458FAA798E62BE91F973AECCEA313A67E/scale?width=1440&aspectRatio=1.78",
      "type": "original"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6548230CF307C2FC1201963367161187EC593E88FBA138BB03011550DBA35E11/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4C123159C993227B099A26AFAB346496145E0BE6180BF9F3C5B697D98E0F8D27/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      "description": "Clint and Kate’s partnership is put to the test as they face the devastating consequences of exposing the conspiracy.",
      "subTitle": "2021 • 1 Season • Super Hero, Action-Adventure",
      "title": "hawkeye",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC59E8EE95346169414CF19EF45F8407FD943882B59E97CCA9853212028AAC58/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "trending"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/65A6BCBCB9BF34EED46C47617068C74DFA1DC5D183AB09744BBBCBF56C5FEABE/scale?width=2880&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6D0DD73EDCDE04349FD69E9BBE92C93E34D6F55FE0A0AEB54A646B5DEF1B8714/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "When the Empire prepares to crush the Rebellion with a more powerful Death Star, the Rebel fleet counters with a massive attack on the space station. In a final climactic duel, Luke Skywalker confronts Darth Vader.",
      "subTitle": "1983 • 2h 14min • Science Fiction, Action-Adventure",
      "title": "Return Of The Jedi",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78",
      "type": "recommend"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9BBF8523011CEADB976C3D511292C18BC4E2A8D183A6BC01E6AF9A27A6C3DCF1/scale?width=2880&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
      "description": "ASSEMBLED is an immersive series of documentary-style specials examining the creation of Marvel Studios’ thrilling new shows and theatrical releases.",
      "subTitle": "2021 • 1 Season • Docuseries, Anthology",
      "title": "Assembled",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4449503FF8D57E72F4F4DAEF7C78C016F22B1B8AD84F2933780FE8873C37DFC9/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "original"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
      "description": "A young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she’s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble. After hitting (bed)rock bottom, she learns there is no shame in asking for help.",
      "subTitle": "2020 • 6m • Family, Animation",
      "title": "Burrow",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD8BBA864E290FBC03A244A488FFC8DC8365FBF2F95A122B1D57BF3772D717FD/scale?width=1440&aspectRatio=1.78",
      "type": "original"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8FB3561E057B0BF7E66E32048CCFA5E2A53833A4A1830B46E6A878D690357C21/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2638CB63DD5DC681D86987AED9CC1253C4CDEF3B6F23B4DAC820E531FD7CDBA3/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "Kim, Jong-kook, HaHa, Jee, Seok-jin, Song, Ji-hyo, Yang and Se-chan are all united and going big in this original spin-off of the hit Running Man series - from wild competition matches to superstar guests!",
      "subTitle": "2021 • 1 Season • Variety, Game Show / Competition",
      "title": "OutRun",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8218DD504E0A6BE7D9E1C1DD1F40745396B89AB12735845F8E51EA1AA8BA816B/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "trending"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/16E5ED404575E7FBD43496A1226D3796378F261A5E29FDD40D03CE9F061CE75F/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      "description": "Marvel Studios LEGENDS serves as an exciting refresher for the various heroes and villains making their way to the highly anticipated streaming shows premiering on Disney+, setting the stage for the upcoming adventures.",
      "subTitle": "2021 • 1 Season • Science Fiction, Fantasy, Action-Adventure",
      "title": "Legends",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5261F79197672324891029A1A97231BB816A0EB22580BEA7A46DF991A721620/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "original"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0860129E0E973E4B53C46BB0AF0A6594FD1FC06F7E035B5078B4C5C8416A2F3C/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B69C1CFE62468AD0D679AE7957B02F65E1704CA724CCB1F78EF9D7913397BC2A/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
      "description": "No longer just a hired gun, Boba Fett reinvents himself on Tatooine alongside Fennec Shand.",
      "subTitle": "2021 • 1 Season • Science Fiction, Action-Adventure",
      "title": "The Book of Boba Fett",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52FCE9DF4FBEEC619EEE15D5882474CB0914A54CBC246A1A0659D98748D84A21/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "new"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F69153F0A76D77FEE3E3E2805ADF33F0866BC8963AC1BB1AF21378CFE0CE7D55/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D16203DFEEBB7FB0CA4EACCBE6775101B636084448CE04E41D40B60DAE86928/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "Marvel Studios’ Captain Marvel takes you on a spectacular adventure from the 1990s, tracing the path of Carol Danvers (Brie Larson) as she becomes one of the universe’s most powerful heroes. When a galactic war reaches Earth, she meets young agent Nick Fury (Samuel L. Jackson) at the center of a maelstrom, leading to her ultimate destiny as an Avenger!",
      "subTitle": "2019 • 2h 5m • Science Fiction, Fantasy, Action-Adventure",
      "title": "Captain Marvel",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/878A5EF48AFE65F6A3D9C148953D231333E78CCD130D7BC5FFACE82D4844875B/scale?width=1344&aspectRatio=1.78&format=png",
      "type": "recommend"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AA981A690091C8E86970309E845AB10A383016D9687F47BC99D91BEBADBF5A4A/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/392A8967B5B2D1A5296B93C259D88D93EDA342693DEEF05980EE6E10B0090B12/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "A comedy series about a guy in his twenties and the romance between him and the woman who will be his wife and the mother of his children.",
      "subTitle": "2005 - 2013 • 9 Seasons • Romance, Romantic Comedy, Comedy",
      "title": "How I Met Your Mother",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/10DB35CE97397D88566E367E20F225050AE8F1CE2842C5704A16DC5DAE264DA9/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "trending"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FEE09DEEAEA1429EE6992F5880FEE21F70464AE7932201A85CD9E61E2E51C06D/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7E215BC0F491618D11FA4070B846550CBC7378A562C98F8A2D70577252835B31/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "In a city of the dead, long since ruined and far from human civilization, lives a boy named Will, who's being raised by three undead: the hearty skeletal warrior, Blood; the graceful mummified priestess, Mary; and the crotchety spectral sorcerer, Gus. When Will unravels the mysteries of this faraway dead man’s land, the boy will take his first step on the path to becoming a Paladin.",
      "subTitle": "2021 • 1 Season • Anime, Fantasy, Animation, Action-Adventure",
      "title": "The Faraway Paladin",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB7FDDF2A349BBC0DB2E9A216229DB790A654F0519D74B3F636F34F0D34F3DB6/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "new"
    },
    {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/173B39C2E3D6A52900A8C3EE3519B975CB0D335DBDC162F16C81631CDE2DD32F/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D3833A773710D06FB2CA988281AE95509326CAC95FD9B8288C33015B175C0161/badging?width=400&aspectRatio=1.78&format=jpeg&label=staroriginal",
      "description": "Private detectives Cassie Dewell and Cody Hoyt join forces with his estranged wife and ex-cop, Jenny Hoyt, to search for two sisters who were kidnapped by a trucker on a remote highway in Montana. When they discover that these are not the only girls to have disappeared in the area, they must race to stop the killer before another woman is taken.",
      "subTitle": "2020 • 1 Season • Drama, Police/Cop, Thriller",
      "title": "Big Sky",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72E3A94243A4B1D47C70DF896CFA52718E949C7D86430A1D9DFDC52DC1CD9372/scale?width=1920&aspectRatio=1.78&format=png",
      "type": "new"
    }
]

movies.forEach(function(obj) {
    db.collection("movies").add({
      backgroundImg: obj.backgroundImg,
      cardImg: obj.cardImg,
      description: obj.description,
      subTitle: obj.subTitle,
      title: obj.title,
      titleImg: obj.titleImg,
      type: obj.type
    }).then(function(docRef) {
      console.log("Document written with title: ", docRef.title);
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });
});

