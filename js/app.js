let settings = { mode: 'oefenen', direction: 'nl_jp', selectedCats: [] };
let session = { queue: [], index: 0, correct: 0, mistakes: [] };

window.onload = () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    renderCategories();
};

function renderCategories() {
    const cats = [...new Set(allWords.map(w => w.cat))];
    const grid = document.getElementById('category-grid');
    if (!grid) return;
    grid.innerHTML = '';
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'option-btn p-3 rounded-lg text-xs uppercase font-bold';
        btn.innerText = cat;
        btn.onclick = () => {
            btn.classList.toggle('active');
            if (settings.selectedCats.includes(cat)) {
                settings.selectedCats = settings.selectedCats.filter(c => c !== cat);
            } else {
                settings.selectedCats.push(cat);
            }
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
    const countInput = document.getElementById('word-count');
    const count = countInput ? parseInt(countInput.value) : 10;
    
    session = { queue: list.slice(0, count), index: 0, correct: 0, mistakes: [] };
    
    if (session.queue.length === 0) return alert("Kies eerst een categorie!");

    document.getElementById('screen-setup').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    
    const hintBtn = document.getElementById('btn-hint');
    if (hintBtn) hintBtn.style.visibility = settings.mode === 'toets' ? 'hidden' : 'visible';
    
    renderWord();
}

function renderWord() {
    const w = session.queue[session.index];
    const display = document.getElementById('display-word');
    const badge = document.getElementById('category-badge');
    
    display.innerText = settings.direction === 'nl_jp' ? w.nl : w.jp;
    document.getElementById('quiz-counter').innerText = `WOORD ${session.index + 1} / ${session.queue.length}`;
    
    // Toont: Categorie | Taal (Hoofdklank)
    let extraInfo = `${w.cat} | ${w.taal}`;
    if (w.hoofdklank) extraInfo += ` (${w.hoofdklank})`;
    badge.innerText = extraInfo;

    document.getElementById('progress-bar').style.width = `${(session.index / session.queue.length) * 100}%`;
    const input = document.getElementById('user-input');
    input.value = '';
    input.focus();
    document.getElementById('feedback-msg').innerText = '';
}

function checkAnswer() {
    const input = document.getElementById('user-input');
    const val = input.value.trim().toLowerCase();
    const w = session.queue[session.index];
    const correct = (settings.direction === 'nl_jp' ? w.jp : w.nl).toLowerCase();

    if (val === correct) {
        session.correct++;
        showFeedback("Correct!", "text-green-500");
        setTimeout(nextWord, 600);
    } else {
        if (settings.mode === 'toets') {
            session.mistakes.push({...w, userAnswer: val});
            showFeedback("Fout", "text-red-500");
            setTimeout(nextWord, 600);
        } else {
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 400);
            showFeedback(`Niet goed. Hint: ${w.romaji}`, "text-red-400");
        }
    }
}

document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

function nextWord() {
    session.index++;
    if (session.index < session.queue.length) renderWord();
    else finishSession();
}

function finishSession() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-results').classList.remove('hidden');
    document.getElementById('final-score').innerText = Math.round((session.correct / session.queue.length) * 100) + '%';
    document.getElementById('stat-correct').innerText = session.correct;

    if (session.mistakes.length > 0) {
        document.getElementById('mistakes-container').classList.remove('hidden');
        const list = document.getElementById('mistakes-list');
        list.innerHTML = session.mistakes.map(m => 
            `<div class="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex justify-between items-center">
                <div class="flex flex-col">
                    <span class="font-bold text-lg">${m.jp}</span>
                    <span class="text-xs text-zinc-400">${m.romaji}</span>
                </div>
                <span class="text-red-500 font-bold">${m.nl}</span>
            </div>`
        ).join('');
    }
}

function getHint() {
    const w = session.queue[session.index];
    showFeedback(`Romaji: ${w.romaji}`, "text-zinc-400");
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
