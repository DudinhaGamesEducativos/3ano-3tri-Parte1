const GAME_DATA = {
    science: {
        title: "Ciências: Grupos de Animais",
        type: "quiz",
        questions: [
            { q: "Qual grupo de animais tem penas, bico e muitas voam?", options: ["Aves", "Mamíferos", "Répteis", "Peixes"], answer: "Aves", hint: "Lembre-se: a galinha e o tucano são aves!" },
            { q: "O jabuti e a cobra fazem parte de qual grupo que tem carapaça ou escamas?", options: ["Répteis", "Anfíbios", "Mamíferos", "Aves"], answer: "Répteis", hint: "Os répteis geralmente têm a pele bem grossa ou escamas." },
            { q: "Animais que nadam e respiram por brânquias na água são os:", options: ["Peixes", "Mamíferos", "Anfíbios", "Aves"], answer: "Peixes", hint: "Pense no tubarão e no peixinho dourado!" },
            { q: "Têm pelos e mamam quando filhotes. Quem são?", options: ["Mamíferos", "Répteis", "Anfíbios", "Peixes"], answer: "Mamíferos", hint: "Você, o cachorro e o gato mamam quando filhotes!" },
            { q: "Pele úmida, vivem na água e na terra. Exemplo: Sapo.", options: ["Anfíbios", "Répteis", "Mamíferos", "Aves"], answer: "Anfíbios", hint: "Anfíbios começam na água (girinos) e depois vão para a terra." }
        ]
    },
    geography: {
        title: "Geografia: Paisagens",
        type: "quiz",
        questions: [
            { q: "Uma floresta sem construções humanas é uma:", options: ["Paisagem Natural", "Paisagem Humanizada", "Paisagem Urbana", "Paisagem Industrial"], answer: "Paisagem Natural", hint: "Se só tem natureza, é Natural!" },
            { q: "A construção de pontes, estradas e prédios transforma a paisagem em:", options: ["Humanizada", "Natural", "Mágica", "Selvagem"], answer: "Humanizada", hint: "Se foi modificada pelo ser humano, chamamos de Humanizada." },
            { q: "Qual dessas ações transforma MUITO a paisagem natural?", options: ["Mineração e Construção", "Observar os pássaros", "Plantar uma flor", "Tirar fotos"], answer: "Mineração e Construção", hint: "Mineração e construção mexem com grandes pedaços de terra." },
            { q: "A agricultura (plantações) e a pecuária (criação de gado) fazem parte de qual paisagem?", options: ["Humanizada", "Natural", "Invisível", "Espacial"], answer: "Humanizada", hint: "Para plantar ou criar gado, o ser humano precisou modificar a terra." }
        ]
    },
    history: {
        title: "História: Comunidades",
        type: "quiz",
        questions: [
            { q: "O que é viver em comunidade?", options: ["Ajudar uns aos outros e compartilhar valores", "Viver sozinho e isolado", "Brigar com os vizinhos", "Não falar com ninguém"], answer: "Ajudar uns aos outros e compartilhar valores", hint: "Comunidade rima com união e amizade!" },
            { q: "Qual é um benefício de trabalhar em grupo na comunidade?", options: ["Resolver problemas mais rápido", "Ficar mais cansado", "Criar mais problemas", "Gastar mais dinheiro"], answer: "Resolver problemas mais rápido", hint: "Muitas mãos ajudando fazem o trabalho terminar logo." },
            { q: "Em uma praça suja, qual a melhor ação coletiva?", options: ["Organizar um mutirão de limpeza", "Deixar como está", "Sujar mais", "Mudar de bairro"], answer: "Organizar um mutirão de limpeza", hint: "Um mutirão é quando todo mundo se junta para ajudar." },
            { q: "As atitudes importantes em comunidade são:", options: ["Respeito e Solidariedade", "Egoísmo e Preguiça", "Inveja e Raiva", "Desrespeito e Grito"], answer: "Respeito e Solidariedade", hint: "Sempre devemos tratar os outros como queremos ser tratados." }
        ]
    },
    math: {
        title: "Matemática: Multiplicação e Saltos",
        type: "quiz",
        questions: [
            { q: "Se eu somar 5 + 5 + 5, é a mesma coisa que multiplicar:", options: ["3 x 5", "5 x 5", "3 + 5", "5 x 2"], answer: "3 x 5", hint: "Você tem o número 5 aparecendo 3 vezes." },
            { q: "Pulando de 4 em 4: 0, 4, 8, __, 16. Qual falta?", options: ["12", "10", "14", "15"], answer: "12", hint: "Some 8 + 4 para descobrir o próximo salto!" },
            { q: "Na Tábua Pitagórica, a coluna do 4 é o ____ da coluna do 2.", options: ["Dobro", "Triplo", "Metade", "Igual"], answer: "Dobro", hint: "O 4 é duas vezes maior que o 2, ou seja, é o dobro!" },
            { q: "Se eu dou 4 saltos de 5 na reta numérica (4 x 5), onde eu paro?", options: ["20", "15", "9", "25"], answer: "20", hint: "Some 5 quatro vezes: 5, 10, 15, 20." },
            { q: "Pulando de 10 em 10: 10, 20, __, 40.", options: ["30", "25", "35", "50"], answer: "30", hint: "A dezena aumenta de 1 em 1: 10, 20, 30..." }
        ]
    },
    portuguese: {
        title: "Português: Contos e Palavras",
        type: "quiz",
        questions: [
            { q: "No final dos contos populares, geralmente aprendemos uma:", options: ["Lição ou Moral", "Receita de bolo", "Música chata", "Piada ruim"], answer: "Lição ou Moral", hint: "As historinhas sempre querem nos ensinar algo de bom (a moral)." },
            { q: "Qual é a escrita CORRETA da palavra?", options: ["Dinheiro", "Dinhero", "Dimheiro", "Dinheru"], answer: "Dinheiro", hint: "Dinheiro tem 'nh' e 'ei'." },
            { q: "Qual palavra está escrita de forma CORRETA?", options: ["Português", "Portugues", "Purtuguês", "Portoguez"], answer: "Português", hint: "Lembre-se do acento circunflexo (^) no final: 'guês'." },
            { q: "Personagens como 'o rei' e 'o camponês' são comuns em:", options: ["Contos Populares", "Receitas", "Manuais de TV", "Notícias"], answer: "Contos Populares", hint: "Essas são as histórias que nossos avós contavam." },
            { q: "Escolha a palavra correta para a frase: A panela abriu ____.", options: ["Fervura", "Fervóra", "Fervúra", "Fervurã"], answer: "Fervura", hint: "Fervura se escreve com U no meio e sem acento." }
        ]
    }
};

const CHALLENGES_DATA = {
    math: {
        mult_problems: {
            title: "Desafio: Problemas de Multiplicação",
            type: "quiz",
            questions: [
                { q: "João comprou 3 pacotes de figurinhas. Cada pacote tem 5 figurinhas. Quantas figurinhas ele tem ao todo?", options: ["15", "8", "10", "20"], answer: "15", hint: "Pense: 3 vezes o 5 (5 + 5 + 5)." },
                { q: "Uma aranha tem 8 patas. Quantas patas têm 2 aranhas juntas?", options: ["16", "10", "18", "14"], answer: "16", hint: "Duas vezes o 8 (8 + 8)." },
                { q: "Em uma sala há 4 fileiras com 5 carteiras em cada uma. Quantas carteiras há no total?", options: ["20", "9", "15", "25"], answer: "20", hint: "Quatro vezes o 5 (5 + 5 + 5 + 5)." }
            ]
        },
        mult_calc: {
            title: "Desafio: Continhas de Multiplicação",
            type: "quiz",
            questions: [
                { q: "Quanto é 3 x 4?", options: ["12", "7", "10", "15"], answer: "12", hint: "Três vezes o quatro." },
                { q: "Quanto é 6 x 2?", options: ["12", "8", "10", "14"], answer: "12", hint: "O dobro de seis." },
                { q: "Quanto é 5 x 5?", options: ["25", "10", "20", "30"], answer: "25", hint: "Cinco vezes o cinco." },
                { q: "Quanto é 4 x 8?", options: ["32", "12", "24", "40"], answer: "32", hint: "Quatro vezes o oito." }
            ]
        },
        div_calc: {
            title: "Desafio: Continhas de Divisão",
            type: "quiz",
            questions: [
                { q: "Se temos 10 balas e vamos dividir para 2 crianças, quantas balas cada uma recebe? (10 ÷ 2)", options: ["5", "8", "12", "2"], answer: "5", hint: "A metade de 10." },
                { q: "Quanto é 12 ÷ 3?", options: ["4", "9", "15", "3"], answer: "4", hint: "Qual número vezes 3 dá 12?" },
                { q: "Quanto é 20 ÷ 5?", options: ["4", "15", "25", "5"], answer: "4", hint: "Qual número vezes 5 dá 20?" },
                { q: "Se eu tenho 15 lápis e guardo igualmente em 3 estojos, quantos lápis ficam em cada estojo? (15 ÷ 3)", options: ["5", "12", "18", "3"], answer: "5", hint: "Qual número vezes 3 dá 15?" }
            ]
        }
    }
};

const app = {
    state: {
        user: {
            name: '',
            avatar: '🦊',
            stars: 0,
            coins: 0,
            scores: {
                science: { correct: 0, total: 0 },
                geography: { correct: 0, total: 0 },
                history: { correct: 0, total: 0 },
                math: { correct: 0, total: 0 },
                portuguese: { correct: 0, total: 0 }
            }
        },
        currentGameId: null,
        currentQuestionIndex: 0
    },

    init() {
        this.bindEvents();
        this.loadState();
        
        setTimeout(() => {
            if (this.state.user.name) {
                this.updateHeader();
                this.showScreen('screen-map');
            } else {
                this.showScreen('screen-login');
            }
        }, 1000);
    },

    bindEvents() {
        document.querySelectorAll('.avatar-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
                e.target.classList.add('selected');
                this.state.user.avatar = e.target.dataset.avatar;
            });
        });
    },

    loadState() {
        const saved = localStorage.getItem('dudinha_state');
        if (saved) {
            this.state = JSON.parse(saved);
        }
    },

    saveState() {
        localStorage.setItem('dudinha_state', JSON.stringify(this.state));
        this.updateHeader();
    },

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        document.getElementById(screenId).classList.remove('hidden');
        
        if(screenId !== 'screen-login' && screenId !== 'screen-loading') {
            document.getElementById('main-header').classList.remove('hidden');
        } else {
            document.getElementById('main-header').classList.add('hidden');
        }
    },

    updateHeader() {
        document.getElementById('header-avatar').innerText = this.state.user.avatar;
        document.getElementById('header-name').innerText = this.state.user.name;
        document.getElementById('header-stars').innerText = this.state.user.stars;
        document.getElementById('header-coins').innerText = this.state.user.coins;
    },

    login() {
        const nameInput = document.getElementById('input-username').value.trim();
        if (!nameInput) {
            alert("Por favor, digite seu nome para começar!");
            return;
        }
        this.state.user.name = nameInput;
        this.saveState();
        this.showScreen('screen-map');
        this.playSound('success');
    },

    showHome() {
        this.showScreen('screen-map');
    },

    showChallenges() {
        this.showScreen('screen-challenges');
    },

    startChallenge(subjectId, challengeId) {
        this.state.isChallengeMode = true;
        this.state.currentChallengeSubject = subjectId;
        this.state.currentGameId = challengeId;
        this.state.currentQuestionIndex = 0;
        this.showScreen('screen-game');
        
        const game = CHALLENGES_DATA[subjectId][challengeId];
        document.getElementById('game-title').innerText = game.title;
        
        this.renderQuestion();
    },

    startSubject(subjectId) {
        this.state.isChallengeMode = false;
        this.state.currentGameId = subjectId;
        this.state.currentQuestionIndex = 0;
        this.showScreen('screen-game');
        
        const game = GAME_DATA[subjectId];
        document.getElementById('game-title').innerText = game.title;
        
        this.renderQuestion();
    },

    renderQuestion() {
        const game = this.state.isChallengeMode ? CHALLENGES_DATA[this.state.currentChallengeSubject][this.state.currentGameId] : GAME_DATA[this.state.currentGameId];
        const qIndex = this.state.currentQuestionIndex;
        
        const progress = (qIndex / game.questions.length) * 100;
        document.getElementById('game-progress').style.width = progress + '%';

        if (qIndex >= game.questions.length) {
            this.finishGame();
            return;
        }

        const qData = game.questions[qIndex];
        const area = document.getElementById('game-area');
        
        // Shuffle options
        let options = [...qData.options].sort(() => Math.random() - 0.5);

        area.innerHTML = `
            <div class="question-card">${qData.q}</div>
            <div class="options-grid">
                ${options.map(opt => `<button class="option-btn" onclick="app.checkAnswer(this, '${opt}', '${qData.answer}')">${opt}</button>`).join('')}
            </div>
        `;
    },

    checkAnswer(btn, selected, correct) {
        const game = this.state.isChallengeMode ? CHALLENGES_DATA[this.state.currentChallengeSubject][this.state.currentGameId] : GAME_DATA[this.state.currentGameId];
        const qData = game.questions[this.state.currentQuestionIndex];
        const isCorrect = selected === correct;
        
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true); // Disable all

        const subjectKey = this.state.isChallengeMode ? this.state.currentChallengeSubject : this.state.currentGameId;

        if (isCorrect) {
            btn.classList.add('correct');
            this.playSound('success');
            this.showFeedback(true, qData.hint);
            
            // Add points
            this.state.user.stars += 1;
            this.state.user.coins += 5;
            
            // Register score
            this.state.user.scores[subjectKey].correct += 1;
        } else {
            btn.classList.add('wrong');
            // Highlight correct one
            buttons.forEach(b => {
                if(b.innerText === correct) b.classList.add('correct');
            });
            this.playSound('error');
            this.showFeedback(false, qData.hint);
        }
        
        this.state.user.scores[subjectKey].total += 1;
        this.saveState();

        setTimeout(() => {
            this.state.currentQuestionIndex++;
            this.renderQuestion();
        }, 4000);
    },

    showFeedback(isCorrect, hint) {
        const area = document.getElementById('screen-game');
        const overlay = document.createElement('div');
        overlay.className = 'feedback-overlay star-animation';
        
        if (isCorrect) {
            overlay.innerHTML = `
                <div class="feedback-icon text-warning"><i class="fas fa-star"></i></div>
                <h2 class="text-success">Muito Bem! +1 Estrela</h2>
                <p style="margin-top:15px; font-size:1.2rem; max-width:80%; text-align:center;"><strong>Dica:</strong> ${hint}</p>
            `;
        } else {
            overlay.innerHTML = `
                <div class="feedback-icon text-info"><i class="fas fa-book-open"></i></div>
                <h2 class="text-info">Quase lá! Vamos aprender!</h2>
                <p style="margin-top:15px; font-size:1.2rem; max-width:80%; text-align:center; color:#e74c3c;"><strong>Dica:</strong> ${hint}</p>
            `;
        }
        
        area.appendChild(overlay);
        setTimeout(() => overlay.remove(), 3800);
    },

    finishGame() {
        document.getElementById('game-progress').style.width = '100%';
        const area = document.getElementById('game-area');
        
        const returnFunc = this.state.isChallengeMode ? "app.showChallenges()" : "app.showHome()";
        const returnText = this.state.isChallengeMode ? "Voltar aos Desafios" : "Voltar ao Mapa";

        area.innerHTML = `
            <div class="question-card">
                <h2><i class="fas fa-trophy text-gold"></i> Concluído!</h2>
                <p>Você completou os desafios desta etapa.</p>
                <button class="btn btn-large btn-primary mt-4" onclick="${returnFunc}">${returnText}</button>
            </div>
        `;
    },

    showReport() {
        this.showScreen('screen-report');
        document.getElementById('report-name').innerText = this.state.user.name;
        
        const grid = document.getElementById('report-grid');
        grid.innerHTML = '';
        
        const subjects = {
            science: { name: "Ciências", color: "#27ae60", icon: "fa-leaf" },
            geography: { name: "Geografia", color: "#2980b9", icon: "fa-globe-americas" },
            history: { name: "História", color: "#f39c12", icon: "fa-monument" },
            math: { name: "Matemática", color: "#e74c3c", icon: "fa-calculator" },
            portuguese: { name: "Português", color: "#8e44ad", icon: "fa-book" }
        };

        for (const [key, data] of Object.entries(this.state.user.scores)) {
            const sub = subjects[key];
            const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            
            grid.innerHTML += `
                <div class="report-card" style="border-color: ${sub.color}">
                    <h3 style="color: ${sub.color}"><i class="fas ${sub.icon}"></i> ${sub.name}</h3>
                    <div class="report-score">${percentage}%</div>
                    <p>${data.correct} acertos de ${data.total} jogadas</p>
                    ${percentage < 50 && data.total > 0 ? '<p class="text-warning"><small>Precisa revisar um pouco mais!</small></p>' : ''}
                    ${percentage >= 80 && data.total > 0 ? '<p class="text-success"><small>Excelente!</small></p>' : ''}
                </div>
            `;
        }
    },

    playSound(type) {
        // Fallback or optional real sound logic here
        // We included base64 empty/tiny MP3s in HTML just to avoid errors.
        // We can create simple web audio API beeps.
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            if (type === 'success') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.3);
            } else {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(300, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.3);
            }
        } catch (e) {
            console.log("Audio not supported");
        }
    }
};

window.onload = () => app.init();
