// DE VOLLEDIGE WOORDENLIST UIT JOUW INPUT
const allWords = [
    {jp: "りんご", nl: "appel", romaji: "ringo", cat: "voedsel"},
    {jp: "みかん", nl: "sinaasappel", romaji: "mikan", cat: "voedsel"},
    {jp: "ぶどう", nl: "druif", romaji: "budou", cat: "voedsel"},
    {jp: "もも", nl: "perzik", romaji: "momo", cat: "voedsel"},
    {jp: "いちご", nl: "aardbei", romaji: "ichigo", cat: "voedsel"},
    {jp: "きゅうり", nl: "komkommer", romaji: "kyuuri", cat: "voedsel"},
    {jp: "にんじん", nl: "wortel", romaji: "ninjin", cat: "voedsel"},
    {jp: "じゃがいも", nl: "aardappel", romaji: "jagaimo", cat: "voedsel"},
    {jp: "たまねぎ", nl: "ui", romaji: "tamanegi", cat: "voedsel"},
    {jp: "にんにく", nl: "knoflook", romaji: "ninniku", cat: "voedsel"},
    {jp: "ぎゅうにく", nl: "rundvlees", romaji: "gyuuniku", cat: "voedsel"},
    {jp: "ぶたにく", nl: "varkensvlees", romaji: "butaniku", cat: "voedsel"},
    {jp: "とりにく", nl: "kippenvlees", romaji: "toriniku", cat: "voedsel"},
    {jp: "さつまいom", nl: "zoete aardappel", romaji: "satsumaimo", cat: "voedsel"},
    {jp: "おかあさん", nl: "moeder", romaji: "okaasan", cat: "familie"},
    {jp: "おとうさん", nl: "vader", romaji: "otoosan", cat: "familie"},
    {jp: "おねえさん", nl: "oudere zus", romaji: "oneesan", cat: "familie"},
    {jp: "おにいさん", nl: "oudere broer", romaji: "oniisan", cat: "familie"},
    {jp: "いもうと", nl: "jonger zusje", romaji: "imooto", cat: "familie"},
    {jp: "おとうと", nl: "jonger broertje", romaji: "otooto", cat: "familie"},
    {jp: "けんこう", nl: "gezondheid", romaji: "kenkou", cat: "lichaam"},
    {jp: "は", nl: "gebit", romaji: "ha", cat: "lichaam"},
    {jp: "くち", nl: "mond", romaji: "kuchi", cat: "lichaam"},
    {jp: "のど", nl: "keel", romaji: "nodo", cat: "lichaam"},
    {jp: "せなか", nl: "rug", romaji: "senaka", cat: "lichaam"},
    {jp: "ひざ", nl: "knie", romaji: "hiza", cat: "lichaam"},
    {jp: "かた", nl: "schouder", romaji: "kata", cat: "lichaam"},
    {jp: "はな", nl: "neus", romaji: "hana", cat: "lichaam"},
    {jp: "くび", nl: "nek", romaji: "kubi", cat: "lichaam"},
    {jp: "こころ", nl: "geest", romaji: "kokoro", cat: "lichaam"},
    {jp: "よろこび", nl: "plezier", romaji: "yorokobi", cat: "emotie"},
    {jp: "あんしん", nl: "gerust", romaji: "anshin", cat: "emotie"},
    {jp: "おこる", nl: "boos", romaji: "okoru", cat: "emotie"},
    {jp: "はずかしい", nl: "verlegen", romaji: "hazukashii", cat: "emotie"},
    {jp: "ゆうき", nl: "moed", romaji: "yuuki", cat: "emotie"},
    {jp: "ともだち", nl: "vriend", romaji: "tomodachi", cat: "cultuur"},
    {jp: "かぞく", nl: "gezin", romaji: "kazoku", cat: "cultuur"},
    {jp: "じんじゃ", nl: "shrine", romaji: "jinja", cat: "cultuur"},
    {jp: "おてら", nl: "temple", romaji: "otera", cat: "cultuur"},
    {jp: "ぶんか", nl: "cultuur", romaji: "bunka", cat: "cultuur"},
    {jp: "えいが", nl: "film", romaji: "eiga", cat: "cultuur"},
    {jp: "うつくしい", nl: "schoon", romaji: "utsukushii", cat: "cultuur"},
    {jp: "せんせい", nl: "leraar", romaji: "sensei", cat: "school"},
    {jp: "こうこう", nl: "high school", romaji: "kookoo", cat: "school"},
    {jp: "じゅぎょう", nl: "les", romaji: "jugyou", cat: "school"},
    {jp: "しけん", nl: "examen", romaji: "shiken", cat: "school"},
    {jp: "としょかん", nl: "bibliotheek", romaji: "toshokan", cat: "school"},
    {jp: "かがく", nl: "scheikunde", romaji: "kagaku", cat: "school"},
    {jp: "すうがく", nl: "wiskunde", romaji: "suugaku", cat: "school"},
    {jp: "にほんご", nl: "Japanse taal", romaji: "nihongo", cat: "school"},
    {jp: "だいがく", nl: "universiteit", romaji: "daigaku", cat: "school"},
    {jp: "がくせい", nl: "student", romaji: "gakusee", cat: "school"},
    {jp: "やま", nl: "berg", romaji: "yama", cat: "natuur"},
    {jp: "もり", nl: "bos", romaji: "mori", cat: "natuur"},
    {jp: "かわ", nl: "rivier", romaji: "kawa", cat: "natuur"},
    {jp: "うみ", nl: "zee", romaji: "umi", cat: "natuur"},
    {jp: "そら", nl: "lucht", romaji: "sora", cat: "natuur"},
    {jp: "ねこ", nl: "kat", romaji: "neko", cat: "natuur"},
    {jp: "いぬ", nl: "hond", romaji: "inu", cat: "natuur"},
    {jp: "くるま", nl: "auto", romaji: "kuruma", cat: "transport"},
    {jp: "バス", nl: "bus", romaji: "basu", cat: "transport"},
    {jp: "くつ", nl: "schoenen", romaji: "kutsu", cat: "kleding"},
    {jp: "シャツ", nl: "shirt", romaji: "shatsu", cat: "kleding"},
    {jp: "おはようございます", nl: "goedemorgen", romaji: "ohayou", cat: "groeten"},
    {jp: "こんにちは", nl: "hallo", romaji: "konnichiwa", cat: "groeten"},
    {jp: "あ", nl: "a", romaji: "a", cat: "hiragana alfabet"},
    {jp: "い", nl: "i", romaji: "i", cat: "hiragana alfabet"},
    {jp: "う", nl: "u", romaji: "u", cat: "hiragana alfabet"},
    {jp: "え", nl: "e", romaji: "e", cat: "hiragana alfabet"},
    {jp: "お", nl: "o", romaji: "o", cat: "hiragana alfabet"}
];

let settings = { mode: 'oefenen', direction: 'nl_jp', selectedCats: [] };
let session = { queue: [], index: 0, correct: 0, mistakes: [] };

window.onload = () => {
    lucide.createIcons();
    renderCategories();
};

function renderCategories() {
    const cats = [...new Set(allWords.map(w => w.cat))];
    const grid = document.getElementById('category-grid');
    grid.innerHTML = '';
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'option-btn p-3 rounded-lg text-xs uppercase font-bold';
        btn.innerText = cat;
        btn.onclick = () => {
            btn.classList.toggle('active');
            settings.selectedCats.includes(cat) ? 
                settings.selectedCats = settings.selectedCats.filter(c => c !== cat) : 
                settings.selectedCats.push(cat);
        };
        grid.appendChild(btn);
    });
}

function selectOption(key, value, btn) {
    settings[key] = value;
    btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function startSession() {
    let list = allWords.filter(w => settings.selectedCats.length === 0 || settings.selectedCats.includes(w.cat));
    list.sort(() => Math.random() - 0.5);
    const count = parseInt(document.getElementById('word-count').value) || 10;
    
    session = { queue: list.slice(0, count), index: 0, correct: 0, mistakes: [] };
    
    if(session.queue.length === 0) return alert("Kies eerst een categorie!");

    document.getElementById('screen-setup').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    document.getElementById('btn-hint').style.visibility = settings.mode === 'toets' ? 'hidden' : 'visible';
    
    renderWord();
}

function renderWord() {
    const w = session.queue[session.index];
    document.getElementById('display-word').innerText = settings.direction === 'nl_jp' ? w.nl : w.jp;
    document.getElementById('quiz-counter').innerText = `WOORD ${session.index + 1} / ${session.queue.length}`;
    document.getElementById('category-badge').innerText = w.cat;
    document.getElementById('progress-bar').style.width = `${(session.index / session.queue.length) * 100}%`;
    document.getElementById('user-input').value = '';
    document.getElementById('user-input').focus();
    document.getElementById('feedback-msg').innerText = '';
}

document.getElementById('user-input').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') checkAnswer();
});

function checkAnswer() {
    const input = document.getElementById('user-input');
    const val = input.value.trim().toLowerCase();
    const w = session.queue[session.index];
    const correct = (settings.direction === 'nl_jp' ? w.jp : w.nl).toLowerCase();

    if(val === correct) {
        session.correct++;
        showFeedback("Correct!", "text-green-500");
        setTimeout(nextWord, 600);
    } else {
        if(settings.mode === 'toets') {
            session.mistakes.push({...w, userAnswer: val});
            showFeedback("Fout", "text-red-500");
            setTimeout(nextWord, 600);
        } else {
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 400);
            showFeedback("Probeer het nog eens...", "text-red-400");
        }
    }
}

function nextWord() {
    session.index++;
    if(session.index < session.queue.length) renderWord();
    else finishSession();
}

function finishSession() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-results').classList.remove('hidden');
    document.getElementById('final-score').innerText = Math.round((session.correct / session.queue.length) * 100) + '%';
    document.getElementById('stat-correct').innerText = session.correct;

    if(session.mistakes.length > 0) {
        document.getElementById('mistakes-container').classList.remove('hidden');
        const list = document.getElementById('mistakes-list');
        list.innerHTML = session.mistakes.map(m => 
            `<div class="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex justify-between items-center">
                <span class="font-bold">${m.jp}</span>
                <span class="text-red-500 font-bold">${m.nl}</span>
            </div>`
        ).join('');
    }
}

function getHint() {
    const w = session.queue[session.index];
    const hint = settings.direction === 'nl_jp' ? w.jp[0] : w.nl[0];
    showFeedback(`Begint met: ${hint}`, "text-zinc-400");
}

function showFeedback(msg, color) {
    const f = document.getElementById('feedback-msg');
    f.innerText = msg;
    f.className = `h-8 mt-4 text-sm font-bold ${color}`;
}

function skipWord() {
    const w = session.queue[session.index];
    session.mistakes.push({...w, userAnswer: "Overgeslagen"});
    nextWord();
}
