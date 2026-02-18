const allWords = [
    // --- VOEDSEL ---
    {jp: "りんご", nl: "appel", romaji: "ringo", cat: "voedsel", type: "hiragana"},
    {jp: "みかん", nl: "sinaasappel", romaji: "mikan", cat: "voedsel", type: "hiragana"},
    {jp: "ぶどう", nl: "druif", romaji: "budou", cat: "voedsel", type: "hiragana"},
    {jp: "もも", nl: "perzik", romaji: "momo", cat: "voedsel", type: "hiragana"},
    {jp: "いちご", nl: "aardbei", romaji: "ichigo", cat: "voedsel", type: "hiragana"},
    {jp: "きゅうり", nl: "komkommer", romaji: "kyuuri", cat: "voedsel", type: "hiragana"},
    {jp: "にんじん", nl: "wortel", romaji: "ninjin", cat: "voedsel", type: "hiragana"},
    {jp: "じゃがいも", nl: "aardappel", romaji: "jagaimo", cat: "voedsel", type: "hiragana"},
    {jp: "たまねぎ", nl: "ui", romaji: "tamanegi", cat: "voedsel", type: "hiragana"},
    {jp: "にんにく", nl: "knoflook", romaji: "ninniku", cat: "voedsel", type: "hiragana"},
    {jp: "ぎゅうにく", nl: "rundvlees", romaji: "gyuuniku", cat: "voedsel", type: "hiragana"},
    {jp: "ぶたにく", nl: "varkensvlees", romaji: "butaniku", cat: "voedsel", type: "hiragana"},
    {jp: "とりにく", nl: "kippenvlees", romaji: "toriniku", cat: "voedsel", type: "hiragana"},
    {jp: "さつまいも", nl: "zoete aardappel", romaji: "satsumaimo", cat: "voedsel", type: "hiragana"},

    // --- FAMILIE ---
    {jp: "おかあさん", nl: "moeder", romaji: "okaasan", cat: "familie", type: "hiragana"},
    {jp: "おとうさん", nl: "vader", romaji: "otoosan", cat: "familie", type: "hiragana"},
    {jp: "おねえさん", nl: "oudere zus", romaji: "oneesan", cat: "familie", type: "hiragana"},
    {jp: "おにいさん", nl: "oudere broer", romaji: "oniisan", cat: "familie", type: "hiragana"},
    {jp: "いもうと", nl: "jonger zusje", romaji: "imooto", cat: "familie", type: "hiragana"},
    {jp: "おとうと", nl: "jonger broertje", romaji: "otooto", cat: "familie", type: "hiragana"},

    // --- TRANSPORT (Mix) ---
    {jp: "クルマ", nl: "auto", romaji: "kuruma", cat: "transport", type: "katakana"},
    {jp: "じてんしゃ", nl: "fiets", romaji: "jitensha", cat: "transport", type: "hiragana"},
    {jp: "でんしゃ", nl: "trein", romaji: "densha", cat: "transport", type: "hiragana"},
    {jp: "ヒコウキ", nl: "vliegtuig", romaji: "hikouki", cat: "transport", type: "katakana"},
    {jp: "ふね", nl: "boot", romaji: "fune", cat: "transport", type: "hiragana"},
    {jp: "バス", nl: "bus", romaji: "basu", cat: "transport", type: "katakana"},

    // --- KLEDING (Mix) ---
    {jp: "くつ", nl: "schoenen", romaji: "kutsu", cat: "kleding", type: "hiragana"},
    {jp: "マフラー", nl: "sjaal", romaji: "mafuraa", cat: "kleding", type: "katakana"},
    {jp: "スカート", nl: "rok", romaji: "sukaato", cat: "kleding", type: "katakana"},
    {jp: "シャツ", nl: "shirt", romaji: "shatsu", cat: "kleding", type: "katakana"},
    {jp: "ズボン", nl: "broek", romaji: "zubon", cat: "kleding", type: "katakana"},
    {jp: "ワンピース", nl: "jurk", romaji: "wanpiisu", cat: "kleding", type: "katakana"},

    // --- ALFABET (Voorbeeld Hiragana) ---
    {jp: "あ", nl: "a", romaji: "a", cat: "hiragana alfabet", type: "hiragana"},
    {jp: "い", nl: "i", romaji: "i", cat: "hiragana alfabet", type: "hiragana"},
    {jp: "う", nl: "u", romaji: "u", cat: "hiragana alfabet", type: "hiragana"},
    {jp: "え", nl: "e", romaji: "e", cat: "hiragana alfabet", type: "hiragana"},
    {jp: "お", nl: "o", romaji: "o", cat: "hiragana alfabet", type: "hiragana"},

    // --- ALFABET (Voorbeeld Katakana) ---
    {jp: "ア", nl: "a", romaji: "a", cat: "katakana alfabet", type: "katakana"},
    {jp: "イ", nl: "i", romaji: "i", cat: "katakana alfabet", type: "katakana"},
    {jp: "ウ", nl: "u", romaji: "u", cat: "katakana alfabet", type: "katakana"},
    {jp: "エ", nl: "e", romaji: "e", cat: "katakana alfabet", type: "katakana"},
    {jp: "オ", nl: "o", romaji: "o", cat: "katakana alfabet", type: "katakana"}
    
    // ... Je kunt hier de rest van je lijst op dezelfde manier plakken ...
];
