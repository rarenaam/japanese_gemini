const logic = {
    currentIndex: 0,
    score: { goed: 0, fout: 0 },
    currentList: [],
    nl_jp: false,
    hintLevel: 1,

    // Start de quiz
    start: (lijst, richting) => {
        logic.currentList = lijst.sort(() => Math.random() - 0.5);
        logic.nl_jp = richting === 'jp';
        ui.showScreen('screen-quiz');
        logic.render();
    },

    // Tekent het woord op het scherm
    render: () => {
        const word = logic.currentList[logic.currentIndex];
        document.getElementById('display-word').innerText = logic.nl_jp ? word.nl : word.jp;
        document.getElementById('stat-count').innerText = `Woord ${logic.currentIndex + 1}/${logic.currentList.length}`;
        logic.hintLevel = 1; // Reset hints bij nieuw woord
        document.getElementById('feedback').innerText = ""; // Maak feedback leeg
    },

    // Controleert het antwoord
    check: (input) => {
        const word = logic.currentList[logic.currentIndex];
        const answer = logic.nl_jp ? word.jp : word.nl;

        if (input.toLowerCase().trim() === answer.toLowerCase()) {
            logic.score.goed++;
            ui.showFeedback('Goedzo! ✅', 'success');
            setTimeout(() => {
                logic.next();
            }, 600);
        } else {
            ui.showFeedback('Helaas! ❌', 'error');
            // Optioneel: schud de kaart (als je de CSS hebt toegevoegd)
            document.querySelector('.quiz-card').classList.add('shake');
            setTimeout(() => {
                document.querySelector('.quiz-card').classList.remove('shake');
            }, 500);
        }
    },

    // Hint functie (werkt nu!)
    getHint: () => {
        const word = logic.currentList[logic.currentIndex];
        const answer = logic.nl_jp ? word.jp : word.nl;
        const hint = answer.substring(0, logic.hintLevel);
        
        const feedbackDisplay = document.getElementById('feedback'); 
        feedbackDisplay.innerText = `Hint: ${hint}...`;
        feedbackDisplay.style.color = "#f59e0b";
        
        logic.hintLevel++; 
    },

    // Skip functie (werkt nu!)
    skip: () => {
        const word = logic.currentList[logic.currentIndex];
        const answer = logic.nl_jp ? word.jp : word.nl;
        
        ui.showFeedback(`Het was: ${answer}`, 'error');
        
        setTimeout(() => {
            logic.score.fout++;
            logic.next();
        }, 1500);
    },

    // Ga naar het volgende woord
    next: () => {
        logic.currentIndex++;
        if (logic.currentIndex < logic.currentList.length) {
            logic.render();
        } else {
            alert(`Klaar! \n✅ Goed: ${logic.score.goed} \n❌ Fout: ${logic.score.fout}`);
            location.reload();
        }
    }
};

const ui = {
    showScreen: (id) => {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    },
    setTaal: (taal) => logic.start(alleWoorden, taal),
    showFeedback: (msg, type) => {
        const f = document.getElementById('feedback');
        f.innerText = msg;
        f.style.color = type === 'error' ? '#ef4444' : '#22c55e';
        // Alleen leegmaken als het geen skip-bericht is
        if (!msg.includes("Het was:")) {
            setTimeout(() => { if(f.innerText === msg) f.innerText = ""; }, 1500);
        }
    }
};

// Luister naar de Enter-toets
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        logic.check(e.target.value);
        e.target.value = "";
    }
});
