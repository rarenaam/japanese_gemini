const logic = {
    currentIndex: 0,
    score: { goed: 0, fout: 0 },
    currentList: [],
    nl_jp: false,

    start: (lijst, richting) => {
        logic.currentList = lijst.sort(() => Math.random() - 0.5);
        logic.nl_jp = richting === 'jp';
        ui.showScreen('screen-quiz');
        logic.render();
    },

    render: () => {
        const word = logic.currentList[logic.currentIndex];
        document.getElementById('display-word').innerText = logic.nl_jp ? word.nl : word.jp;
        document.getElementById('stat-count').innerText = `Woord ${logic.currentIndex + 1}/${logic.currentList.length}`;
    },

    check: (input) => {
        const word = logic.currentList[logic.currentIndex];
        const answer = logic.nl_jp ? word.jp : word.nl;

        if (input.toLowerCase().trim() === answer.toLowerCase()) {
            logic.score.goed++;
            logic.next();
        } else {
            ui.showFeedback('Helaas!', 'error');
        }
    },

    next: () => {
        logic.currentIndex++;
        if (logic.currentIndex < logic.currentList.length) {
            logic.render();
        } else {
            alert(`Klaar! Score: ${logic.score.goed}/${logic.currentList.length}`);
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
        setTimeout(() => f.innerText = "", 1500);
    }
};

document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        logic.check(e.target.value);
        e.target.value = "";
    }
});
