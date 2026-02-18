let allWords = [
    {jp: "ねこ", nl: "kat", romaji: "neko", cat: "dieren"},
    {jp: "いぬ", nl: "hond", romaji: "inu", cat: "dieren"},
    {jp: "たべる", nl: "eten", romaji: "taberu", cat: "werkwoorden"},
    {jp: "みず", nl: "water", romaji: "mizu", cat: "basis"},
    {jp: "こんにちは", nl: "hallo", romaji: "konnichiwa", cat: "groeten"}
];

let settings = { mode: 'oefenen', direction: 'nl_jp', selectedCats: [] };
let session = { queue: [], index: 0, correct: 0, mistakes: [] };

window.onload = () => {
    lucide.createIcons();
    renderCategories();
};

function renderCategories() {
    const cats = [...new Set(allWords.map(w => w.cat || 'overig'))];
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
    
    document.getElementById('screen-setup').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    document.getElementById('btn-hint').style.display = settings.mode === 'toets' ? 'none' : 'block';
    
    renderWord();
}

function renderWord() {
    const w = session.queue[session.index];
    document.getElementById('display-word').innerText = settings.direction === 'nl_jp' ? w.nl : w.jp;
    document.getElementById('quiz-counter').innerText = `VRAGEN ${session.index + 1} / ${session.queue.length}`;
    document.getElementById('category-badge').innerText = w.cat || 'algemeen';
    document.getElementById('progress-bar').style.width = `${(session.index / session.queue.length) * 100}%`;
    document.getElementById('user-input').value = '';
    document.getElementById('user-input').focus();
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
        nextWord();
    } else {
        if(settings.mode === 'toets') {
            session.mistakes.push({...w, userAnswer: val});
            nextWord();
        } else {
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 400);
            document.getElementById('feedback-msg').innerText = "Probeer het nog eens...";
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
            `<div class="p-3 bg-red-50 text-red-700 rounded-lg text-sm font-bold">${m.jp} = ${m.nl}</div>`
        ).join('');
    }
}

function getHint() {
    const w = session.queue[session.index];
    document.getElementById('feedback-msg').innerText = `Begint met: ${settings.direction === 'nl_jp' ? w.jp[0] : w.nl[0]}`;
}
