// Onze 'State' (wat de app onthoudt)
let quizData = {
    words: [{jp: "こんにちは", nl: "hallo", romaji: "konnichiwa"}],
    currentIndex: 0,
    score: 0,
    startTime: 0,
    direction: 'nl_jp', // of 'jp_nl'
    isTest: false
};

// 1. CSV Bestanden inladen
document.getElementById('csv-upload')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
            quizData.words = results.data;
            alert(`${results.data.length} woorden succesvol geladen!`);
        }
    });
});

// 2. De Quiz Starten
function startQuiz(mode, direction) {
    quizData.isTest = mode === 'toets';
    quizData.direction = direction;
    quizData.currentIndex = 0;
    quizData.score = 0;
    quizData.startTime = Date.now();
    
    // Shuffle woorden
    quizData.words.sort(() => Math.random() - 0.5);
    
    showScreen('session-screen');
    renderWord();
}

// 3. Het woord op het scherm zetten
function renderWord() {
    const current = quizData.words[quizData.currentIndex];
    const displayElement = document.getElementById('question-display');
    
    // Kies welke taal we tonen
    displayElement.innerText = quizData.direction === 'nl_jp' ? current.nl : current.jp;
    
    // Update voortgang
    const progress = (quizData.currentIndex / quizData.words.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// 4. Antwoord controleren
function checkAnswer() {
    const inputField = document.getElementById('answer-input');
    const userAnswer = inputField.value.trim().toLowerCase();
    const currentWord = quizData.words[quizData.currentIndex];
    const correctAnswer = quizData.direction === 'nl_jp' ? currentWord.jp : currentWord.nl;

    if (userAnswer === correctAnswer.toLowerCase()) {
        quizData.score++;
        showFeedback("Correct! 🎉", "success");
        nextWord();
    } else {
        if (quizData.isTest) {
            showFeedback(`Fout! Het was: ${correctAnswer}`, "error");
            nextWord();
        } else {
            // In oefenmodus schudden we de kaart en mag je het opnieuw proberen
            document.querySelector('.glass-card').classList.add('shake');
            setTimeout(() => document.querySelector('.glass-card').classList.remove('shake'), 500);
            showFeedback("Probeer het nog eens...", "hint");
        }
    }
    inputField.value = "";
}

// 5. Naar het volgende woord of resultaten
function nextWord() {
    quizData.currentIndex++;
    if (quizData.currentIndex < quizData.words.length) {
        setTimeout(renderWord, 600);
    } else {
        setTimeout(showResults, 1000);
    }
}

function showResults() {
    const duration = Math.round((Date.now() - quizData.startTime) / 1000);
    const percentage = Math.round((quizData.score / quizData.words.length) * 100);
    
    document.getElementById('final-score').innerText = `${percentage}%`;
    document.getElementById('time-taken').innerText = `${duration} seconden`;
    showScreen('results-screen');
}

// Helper: Schermen wisselen
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function showFeedback(text, type) {
    const fb = document.getElementById('feedback');
    fb.innerText = text;
    fb.className = `feedback-${type} animate-fade-in-up`;
}
