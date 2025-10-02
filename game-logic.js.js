/* ================================
   GAME STATE
   ================================ */

let gameState = {
    playerName: '',
    currentRound: 1,
    totalRounds: 40,
    selectedAnswerEmotion: null,
    allAnswers: [],
    currentGuide: null,
    selectedElement: null
};

/* ================================
   INITIALIZATION
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    initBackground();
    checkSavedSession();
});

function initBackground() {
    const bg = document.getElementById('mystical-bg');
    
    // Create stars
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        bg.appendChild(star);
    }
    
    // Create floating orbs
    const orbColors = [
        'rgba(186, 104, 200, 0.15)',
        'rgba(156, 39, 176, 0.12)',
        'rgba(233, 30, 99, 0.1)',
        'rgba(103, 58, 183, 0.13)'
    ];
    
    for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        orb.style.width = (Math.random() * 200 + 150) + 'px';
        orb.style.height = (Math.random() * 200 + 150) + 'px';
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        orb.style.background = orbColors[Math.floor(Math.random() * orbColors.length)];
        orb.style.animationDelay = Math.random() * 10 + 's';
        orb.style.animationDuration = (Math.random() * 10 + 15) + 's';
        bg.appendChild(orb);
    }
    
    // Create shooting stars periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar();
        }
    }, 30000);
}

function createShootingStar() {
    const bg = document.getElementById('mystical-bg');
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = Math.random() * 50 + '%';
    star.style.top = Math.random() * 30 + '%';
    bg.appendChild(star);
    
    setTimeout(() => star.remove(), 3000);
}

function getCurrentElement() {
    if (gameState.currentRound <= 5) return 'fire';
    if (gameState.currentRound <= 10) return 'earth';
    if (gameState.currentRound <= 15) return 'water';
    if (gameState.currentRound <= 20) return 'air';
    if (gameState.currentRound <= 25) return 'fire';
    if (gameState.currentRound <= 30) return 'earth';
    if (gameState.currentRound <= 35) return 'water';
    if (gameState.currentRound <= 40) return 'air';
    return 'fire'; // Default
}

function updateBackgroundForElement() {
    const currentElement = getCurrentElement();
    const body = document.body;
    
    body.classList.remove('element-fire', 'element-earth', 'element-water', 'element-air');
    body.classList.add(`element-${currentElement}`);
}

function checkSavedSession() {
    const saved = localStorage.getItem('echoesGameState');
    if (saved) {
        const confirm = window.confirm('You have a saved session. Would you like to continue?');
        if (confirm) {
            gameState = JSON.parse(saved);
            showScreen('game');
            loadSavedRound();
        } else {
            localStorage.removeItem('echoesGameState');
        }
    }
}

/* ================================
   SCREEN NAVIGATION
   ================================ */

function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(`${screenName}-screen`);
    if (screen) screen.classList.add('active');
}

function showStoryScreen() {
    const saved = localStorage.getItem('echoesGameState');
    if (saved) {
        const continueSession = window.confirm('You have a saved session. Would you like to continue where you left off?');
        if (continueSession) {
            gameState = JSON.parse(saved);
            showScreen('game');
            initEmotionWheel();
            loadSavedRound();
        } else {
            localStorage.removeItem('echoesGameState');
            showScreen('story');
        }
    } else {
        showScreen('story');
    }
}

function showNameInput() {
    showScreen('name');
}

/* ================================
   GAME START
   ================================ */

function startGame() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    gameState.playerName = name;
    gameState.currentRound = 1;
    gameState.allAnswers = [];
    
    showScreen('game');
    initEmotionWheel();
    loadNewQuestion();
}

/* ================================
   EMOTION SELECTOR
   ================================ */

function initEmotionWheel() {
    const tabsContainer = document.getElementById('emotion-tabs');
    tabsContainer.innerHTML = '';
    
    Object.entries(emotionWheel).forEach(([key, data]) => {
        const tab = document.createElement('div');
        tab.className = 'emotion-tab';
        tab.style.setProperty('--tab-color', data.color);
        tab.innerHTML = `
            <span class="emotion-tab-emoji">${data.emoji}</span>
            <span class="emotion-tab-label">${key}</span>
        `;
        tab.onclick = () => showEmotionVariations(key);
        tabsContainer.appendChild(tab);
    });
}

function showEmotionVariations(coreEmotion) {
    const variationsPanel = document.getElementById('emotion-variations');
    const emotionData = emotionWheel[coreEmotion];
    
    document.querySelectorAll('.emotion-tab').forEach(tab => tab.classList.remove('active'));
    event.target.closest('.emotion-tab').classList.add('active');
    
    variationsPanel.innerHTML = '<div class="emotion-variations-grid"></div>';
    const grid = variationsPanel.querySelector('.emotion-variations-grid');
    
    Object.entries(emotionData.emotions).forEach(([emotion, definition]) => {
        const option = document.createElement('div');
        option.className = 'emotion-option';
        option.innerHTML = `
            <div class="emotion-option-name">${emotion}</div>
            <div class="emotion-option-definition">${definition}</div>
        `;
        option.onclick = () => selectEmotion(coreEmotion, emotion);
        grid.appendChild(option);
    });
    
    variationsPanel.classList.add('show');
}

function closeEmotionVariations() {
    const panel = document.getElementById('emotion-variations');
    if (panel) panel.classList.remove('show');
    document.querySelectorAll('.emotion-tab').forEach(tab => tab.classList.remove('active'));
}

function selectEmotion(coreEmotion, specificEmotion) {
    gameState.selectedAnswerEmotion = { core: coreEmotion, specific: specificEmotion };
    const emotionDefinition = emotionWheel[coreEmotion].emotions[specificEmotion];
    
    const display = document.getElementById('selected-emotion-display');
    if (display) {
        display.className = 'emotion-selected';
        display.innerHTML = `${emotionWheel[coreEmotion].emoji} ${specificEmotion} (${emotionDefinition}) <span class="checkmark-icon">✓</span>`;
    }
    
    closeEmotionVariations();
    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.disabled = false;
}

/* ================================
   ROUND LOGIC - LINEAR
   ================================ */

function loadNewQuestion() {
    if (gameState.currentRound > gameState.totalRounds) {
        showResults();
        return;
    }
    
    updateBackgroundForElement();
    
    const roundData = linearJourney[gameState.currentRound - 1];
    
    if (roundData.type === 'element') {
        loadElementScenario(roundData.scenario);
    } else {
        loadGuideRound(roundData);
    }
    
    updateRoundDisplay();
    resetEmotionSelection();
}

function loadGuideRound(roundData) {
    const guideKey = roundData.guide;
    gameState.currentGuide = spiritGuides[guideKey];
    
    // Display guide story
    const storySection = document.getElementById('guide-story-section');
    storySection.innerHTML = `
        <div class="guide-story">
            <div class="guide-header">
                <span class="guide-symbol">${gameState.currentGuide.symbol}</span>
                <div>
                    <div>${gameState.currentGuide.name} Guide</div>
                    <div class="guide-meta">${gameState.currentGuide.element}</div>
                </div>
            </div>
            <div class="guide-story-text">${gameState.currentGuide.story}</div>
        </div>
    `;
    
    const container = document.getElementById('prompt-container');
    document.getElementById('element-container').style.display = 'none';
    
    // Show emotion selector for guide rounds
    const emotionSelector = document.getElementById('emotion-selector-container');
    if (emotionSelector) emotionSelector.style.display = 'block';
    
    container.innerHTML = `
        <div class="prompt-part" id="entry-part">
            <div class="prompt-label">Entry</div>
            <div class="prompt-question">${roundData.entry}</div>
            <textarea id="prompt-entry" class="prompt-textarea" maxlength="300"></textarea>
            <div class="char-counter"><span id="entry-count">0</span>/300</div>
        </div>
        
        <div class="prompt-part" id="why-part">
            <div class="prompt-label">Why</div>
            <div class="prompt-question">${roundData.why}</div>
            <textarea id="prompt-why" class="prompt-textarea" maxlength="300"></textarea>
            <div class="char-counter"><span id="why-count">0</span>/300</div>
        </div>
        
        <div class="prompt-part" id="action-part">
            <div class="prompt-label">Action</div>
            <div class="prompt-question">${roundData.action}</div>
            <textarea id="prompt-action" class="prompt-textarea" maxlength="300"></textarea>
            <div class="char-counter"><span id="action-count">0</span>/300</div>
        </div>
    `;
    
    // Add character counter listeners
    ['entry', 'why', 'action'].forEach(part => {
        const el = document.getElementById(`prompt-${part}`);
        if (el) {
            el.addEventListener('input', function() {
                const counter = document.getElementById(`${part}-count`);
                if (counter) counter.textContent = this.value.length;
                if (this.value.trim()) {
                    const partEl = document.getElementById(`${part}-part`);
                    if (partEl) partEl.classList.add('filled');
                }
            });
        }
    });
}

function loadElementScenario(scenarioIndex) {
    const scenario = elementScenarios[scenarioIndex];
    
    const storySection = document.getElementById('guide-story-section');
    storySection.innerHTML = `
        <div style="background: rgba(255, 193, 7, 0.1); border: 2px solid rgba(255, 193, 7, 0.3); border-radius: 15px; padding: 1.5rem; margin-bottom: 1.5rem; text-align: center;">
            <div style="color: #fff3c4; font-size: 1.2rem; margin-bottom: 0.5rem;">Wisdom Round ${gameState.currentRound}</div>
            <div style="color: #fff3c4; font-size: 0.9rem;">Share your wisdom. Your choice reveals your values.</div>
        </div>
        
        <div class="guide-story">
            <div style="font-weight: 600; color: #ba68c8; margin-bottom: 1rem; font-size: 1.1rem;">${scenario.title}</div>
            <div style="margin-bottom: 1.5rem;">${scenario.situation}</div>
            <div style="font-size: 0.95rem; color: #d1c4e9; font-style: italic;">What advice feels wisest to you?</div>
        </div>
    `;
    
    // Hide emotion selector for element rounds
    const emotionSelector = document.getElementById('emotion-selector-container');
    if (emotionSelector) emotionSelector.style.display = 'none';
    
    const container = document.getElementById('element-container');
    document.getElementById('prompt-container').innerHTML = '';
    container.style.display = 'block';
    
    container.innerHTML = `
        <div style="margin: 2rem 0;">
            <div class="prompt-label" style="text-align: center; margin-bottom: 1.5rem;">Choose Your Advice</div>
            
            ${Object.entries(scenario.advice_options).map(([element, advice]) => `
                <div class="prompt-part" id="element-choice-${element}" 
                     onclick="selectElementChoice('${element}')"
                     style="cursor: pointer; transition: all 0.3s ease;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <div class="prompt-label" style="margin: 0;">${advice.label}</div>
                        <div id="check-${element}" style="display: none; color: #4caf50; font-size: 1.5rem;">✓</div>
                    </div>
                    <div style="font-size: 0.95rem; line-height: 1.6;">${advice.text}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function selectElementChoice(element) {
    gameState.selectedElement = element;
    
    ['fire', 'earth', 'water', 'air'].forEach(el => {
        const choice = document.getElementById(`element-choice-${el}`);
        const check = document.getElementById(`check-${el}`);
        if (choice && check) {
            if (el === element) {
                choice.style.borderColor = '#4caf50';
                choice.classList.add('filled');
                check.style.display = 'block';
            } else {
                choice.style.borderColor = 'rgba(103, 58, 183, 0.3)';
                choice.classList.remove('filled');
                check.style.display = 'none';
            }
        }
    });
    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.disabled = false;
}

function updateRoundDisplay() {
    document.getElementById('current-round').textContent = gameState.currentRound;
    document.getElementById('progress-round').textContent = gameState.currentRound;
    
    const progressPercent = (gameState.currentRound / gameState.totalRounds) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';
}

function resetEmotionSelection() {
    gameState.selectedAnswerEmotion = null;
    gameState.selectedElement = null;
    
    const display = document.getElementById('selected-emotion-display');
    if (display) {
        display.className = 'emotion-display-placeholder';
        display.innerHTML = '<span id="selected-emotion-text">Choose a category below, then select a specific emotion</span>';
    }
    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.disabled = true;
    
    closeEmotionVariations();
}

/* ================================
   VISUAL FEEDBACK
   ================================ */

function showLoadingTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'round-transition show';
    overlay.innerHTML = `
        <div class="round-transition-content">
            <div class="round-transition-number">Round ${gameState.currentRound + 1}</div>
            <div class="round-transition-text">Your next echo awaits...</div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 400);
    }, 1800);
}

function showPhaseTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'phase-transition-overlay';
    overlay.id = 'phase-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'phase-transition-modal';
    modal.id = 'phase-modal';
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, rgba(26, 0, 51, 0.98), rgba(74, 20, 140, 0.98)); backdrop-filter: blur(20px); border: 3px solid rgba(186, 104, 200, 0.6); border-radius: 25px; padding: 3rem; max-width: 700px; margin: 0 auto; box-shadow: 0 0 40px rgba(186, 104, 200, 0.4), 0 20px 60px rgba(0, 0, 0, 0.5); text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1.5rem; animation: bounce 1s ease-in-out;">✨</div>
            <div style="color: #ba68c8; font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; text-shadow: 0 0 20px rgba(186, 104, 200, 0.5);">Phase One Complete!</div>
            <div style="color: #e1bee7; font-size: 1.15rem; line-height: 1.8; margin-bottom: 2rem;">
                You've listened to all sixteen guides. You've shared your stories, your wisdom, your experiences.<br><br>
                <strong style="color: #d1c4e9;">The guides thank you.</strong>
            </div>
            <div style="background: rgba(186, 104, 200, 0.15); border: 2px solid rgba(186, 104, 200, 0.3); border-radius: 15px; padding: 2rem; margin: 2rem 0;">
                <div style="color: #ba68c8; font-size: 1.3rem; font-weight: 600; margin-bottom: 1rem;">Phase Two: The Mirror</div>
                <div style="color: #e1bee7; font-size: 1rem; line-height: 1.8;">
                    Each guide will return one more time.<br>
                    But now the questions turn inward.<br><br>
                    You'll complete sentences about yourself. No more helping others, just honest recognition.<br><br>
                    <strong style="color: #d1c4e9;">This part is harder. That's intentional.</strong>
                </div>
            </div>
            <button onclick="window.continueToPhaseTwo()" class="mystical-btn" style="margin-top: 1.5rem; font-size: 1.1rem; padding: 1rem 2.5rem;">
                Continue to Phase Two
            </button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    // Force show with small delay
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);
}

window.continueToPhaseTwo = function() {
    console.log('Continue clicked');
    
    // Remove ALL possible overlays and transitions
    document.querySelectorAll('.phase-transition-modal').forEach(el => {
        console.log('Removing phase modal');
        el.remove();
    });
    document.querySelectorAll('.phase-transition-overlay').forEach(el => {
        console.log('Removing phase overlay');
        el.remove();
    });
    document.querySelectorAll('.modal-overlay').forEach(el => {
        console.log('Removing modal overlay');
        el.remove();
    });
    document.querySelectorAll('.round-transition').forEach(el => {
        console.log('Removing round transition');
        el.remove();
    });
    
    // Remove any backdrop filters
    document.body.style.filter = '';
    document.body.style.backdropFilter = '';
    
    console.log('Advancing to round 21');
    
    // Advance to round 21 (Phase 2 start)
    gameState.currentRound = 21;
    saveGameState();
    
    // Small delay then load
    setTimeout(() => {
        console.log('Loading round 21');
        loadNewQuestion();
    }, 100);
}

/* ================================
   ANSWER SUBMISSION
   ================================ */

function submitAnswer() {
    const roundData = linearJourney[gameState.currentRound - 1];
    
    if (roundData.type === 'element') {
        if (!gameState.selectedElement) {
            alert('Please select an advice option');
            return;
        }
        
        gameState.allAnswers.push({
            round: gameState.currentRound,
            isElementRound: true,
            element: gameState.selectedElement
        });
        
        showToast(`Round ${gameState.currentRound} saved!`);
    } else {
        if (!gameState.selectedAnswerEmotion) {
            alert('Please select an emotion');
            return;
        }
        
        const entry = document.getElementById('prompt-entry');
        const why = document.getElementById('prompt-why');
        const action = document.getElementById('prompt-action');
        
        if (!entry || !why || !action || !entry.value.trim() || !why.value.trim() || !action.value.trim()) {
            alert('Please answer all three prompts');
            return;
        }
        
        gameState.allAnswers.push({
            round: gameState.currentRound,
            parts: {
                entry: entry.value.trim(),
                why: why.value.trim(),
                action: action.value.trim()
            },
            emotion: gameState.selectedAnswerEmotion,
            guideName: gameState.currentGuide.name
        });
        
        showToast(`Round ${gameState.currentRound} saved!`);
    }
    
    saveGameState();
    
    // Show Phase 2 transition after round 20
    if (gameState.currentRound === 20) {
        showPhaseTransition();
        return;
    }
    
    showLoadingTransition();
    setTimeout(() => {
        gameState.currentRound++;
        loadNewQuestion();
    }, 1500);
}

/* ================================
   SAVE/LOAD
   ================================ */

function saveGameState() {
    localStorage.setItem('echoesGameState', JSON.stringify(gameState));
}

function loadSavedRound() {
    initEmotionWheel();
    loadNewQuestion();
}

function saveAndExit() {
    saveGameState();
    showToast('Progress saved! Come back anytime.');
    setTimeout(() => showScreen('join'), 2000);
}

/* ================================
   PAST REFLECTIONS
   ================================ */

function showPastReflections() {
    const list = document.getElementById('reflections-list');
    list.innerHTML = '';
    
    if (gameState.allAnswers.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #9575cd;">No reflections yet</p>';
    } else {
        gameState.allAnswers.forEach((answer) => {
            const item = document.createElement('div');
            item.className = 'reflection-item';
            
            let textDisplay = '';
            if (answer.isElementRound) {
                textDisplay = `<div><strong>Advice Element:</strong> ${answer.element}</div>`;
            } else {
                textDisplay = `
                    <div><strong>Entry:</strong> ${answer.parts.entry}</div>
                    <div><strong>Why:</strong> ${answer.parts.why}</div>
                    <div><strong>Action:</strong> ${answer.parts.action}</div>
                `;
            }
            
            item.innerHTML = `
                <div class="reflection-round">Round ${answer.round}${answer.isElementRound ? ' (Wisdom)' : ''} ${answer.guideName ? '- ' + answer.guideName : ''}</div>
                ${answer.emotion ? `<div class="reflection-emotion">${emotionWheel[answer.emotion.core].emoji} ${answer.emotion.specific}</div>` : ''}
                <div class="reflection-text">${textDisplay}</div>
            `;
            list.appendChild(item);
        });
    }
    
    document.getElementById('reflections-overlay').classList.add('show');
    document.getElementById('reflections-modal').style.display = 'block';
}

function closePastReflections() {
    document.getElementById('reflections-overlay').classList.remove('show');
    document.getElementById('reflections-modal').style.display = 'none';
}

/* ================================
   RESULTS
   ================================ */

function showResults() {
    showScreen('results');
    document.getElementById('total-rounds').textContent = gameState.totalRounds;
    
    const container = document.getElementById('stats-container');
    container.innerHTML = '';
    
    // Analyze the data
    const emotionCounts = {};
    const guideCounts = { fire: 0, earth: 0, water: 0, air: 0 };
    const elementChoices = { fire: 0, earth: 0, water: 0, air: 0 };
    
    gameState.allAnswers.forEach(answer => {
        if (answer.emotion) {
            const key = `${answer.emotion.core}-${answer.emotion.specific}`;
            emotionCounts[key] = (emotionCounts[key] || 0) + 1;
        }
        
        if (answer.isElementRound && answer.element) {
            elementChoices[answer.element]++;
        }
        
        // Count guide encounters by element
        if (answer.guideName) {
            const guide = Object.values(spiritGuides).find(g => g.name === answer.guideName);
            if (guide) {
                const element = guide.element.toLowerCase();
                guideCounts[element]++;
            }
        }
    });
    
    // Create opening reflection
    const openingCard = document.createElement('div');
    openingCard.className = 'stat-card full-width';
    openingCard.innerHTML = `
        <div style="text-align: center; padding: 1rem 0;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✨</div>
            <div style="color: #ba68c8; font-size: 1.3rem; font-weight: 600; margin-bottom: 1rem;">
                The Echo Chamber Reveals Its Patterns
            </div>
            <div style="color: #e1bee7; line-height: 1.8; font-size: 1.05rem;">
                You've completed your journey through all four chambers. These guides weren't teaching you, they were showing you what was already there. Here's what echoed back.
            </div>
        </div>
    `;
    container.appendChild(openingCard);
    
    // Four Chambers Visual Overview
    const chambersCard = document.createElement('div');
    chambersCard.className = 'stat-card full-width';
    chambersCard.innerHTML = `
        <div class="stat-title">The Four Chambers of Your Journey</div>
        <div class="chambers-grid">
            <div class="chamber-item chamber-fire">
                <div class="chamber-icon">🔥</div>
                <div class="chamber-name">Fire Chamber</div>
                <div class="chamber-guides">Phoenix • Lion • Dragon • Peacock</div>
                <div class="chamber-pattern">Action, Protection, Creation, Recognition</div>
                <div class="chamber-count">${guideCounts.fire} reflections</div>
            </div>
            <div class="chamber-item chamber-earth">
                <div class="chamber-icon">🌍</div>
                <div class="chamber-name">Earth Chamber</div>
                <div class="chamber-guides">Bear • Turtle • Elephant • Cat</div>
                <div class="chamber-pattern">Rest, Pace, Memory, Control</div>
                <div class="chamber-count">${guideCounts.earth} reflections</div>
            </div>
            <div class="chamber-item chamber-water">
                <div class="chamber-icon">💧</div>
                <div class="chamber-name">Water Chamber</div>
                <div class="chamber-guides">Whale • Dolphin • Octopus • Chameleon</div>
                <div class="chamber-pattern">Depth, Connection, Authenticity, Adaptation</div>
                <div class="chamber-count">${guideCounts.water} reflections</div>
            </div>
            <div class="chamber-item chamber-air">
                <div class="chamber-icon">🌪️</div>
                <div class="chamber-name">Air Chamber</div>
                <div class="chamber-guides">Owl • Hawk • Raven • Butterfly</div>
                <div class="chamber-pattern">Wisdom, Vision, Intelligence, Transformation</div>
                <div class="chamber-count">${guideCounts.air} reflections</div>
            </div>
        </div>
    `;
    container.appendChild(chambersCard);
    
    // Your Dominant Emotions
    const emotionCard = document.createElement('div');
    emotionCard.className = 'stat-card';
    emotionCard.innerHTML = '<div class="stat-title">Your Emotional Landscape</div><div style="color: #d1c4e9; font-size: 0.95rem; margin-bottom: 1rem;">The emotions that showed up most in your reflections</div>';
    
    const total = Object.values(emotionCounts).reduce((a, b) => a + b, 0);
    if (total > 0) {
        Object.entries(emotionCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .forEach(([key, count]) => {
                const [core, specific] = key.split('-');
                const percent = Math.round((count / total) * 100);
                emotionCard.innerHTML += `
                    <div class="emotion-bar">
                        <div class="emotion-bar-label">
                            <span>${emotionWheel[core].emoji} ${specific}</span>
                            <span>${count} times (${percent}%)</span>
                        </div>
                        <div style="background: rgba(186, 104, 200, 0.2); border-radius: 4px; overflow: hidden;">
                            <div class="emotion-bar-fill" style="width: ${percent}%; background: ${emotionWheel[core].color};"></div>
                        </div>
                    </div>
                `;
            });
    }
    container.appendChild(emotionCard);
    
    // Your Values (from element choices)
    const valuesCard = document.createElement('div');
    valuesCard.className = 'stat-card';
    
    const totalChoices = Object.values(elementChoices).reduce((a, b) => a + b, 0);
    const dominantElement = Object.entries(elementChoices).sort((a, b) => b[1] - a[1])[0];
    
    const elementInsights = {
        fire: { text: "Your instinct is to act with courage and passion", color: "#ff6b6b" },
        earth: { text: "Your instinct is to build slowly and steadily", color: "#51cf66" },
        water: { text: "Your instinct is to connect and empathize", color: "#339af0" },
        air: { text: "Your instinct is to understand and analyze", color: "#cc5de8" }
    };
    
    valuesCard.innerHTML = `
        <div class="stat-title">Your Wisdom Style</div>
        <div style="color: #d1c4e9; font-size: 0.95rem; margin-bottom: 1.5rem;">When giving advice, you most often chose ${dominantElement[0]} guidance</div>
        <div style="background: rgba(${dominantElement[0] === 'fire' ? '255, 107, 107' : dominantElement[0] === 'earth' ? '81, 207, 102' : dominantElement[0] === 'water' ? '51, 154, 240' : '204, 93, 232'}, 0.15); border: 2px solid rgba(${dominantElement[0] === 'fire' ? '255, 107, 107' : dominantElement[0] === 'earth' ? '81, 207, 102' : dominantElement[0] === 'water' ? '51, 154, 240' : '204, 93, 232'}, 0.4); border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${dominantElement[0] === 'fire' ? '🔥' : dominantElement[0] === 'earth' ? '🌍' : dominantElement[0] === 'water' ? '💧' : '🌪️'}</div>
            <div style="color: ${elementInsights[dominantElement[0]].color}; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; text-transform: capitalize;">${dominantElement[0]} Wisdom</div>
            <div style="color: #e1bee7; font-size: 0.95rem;">${elementInsights[dominantElement[0]].text}</div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
            ${Object.entries(elementChoices).map(([element, count]) => `
                <div style="background: rgba(186, 104, 200, 0.1); border-radius: 8px; padding: 0.75rem; text-align: center;">
                    <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">${element === 'fire' ? '🔥' : element === 'earth' ? '🌍' : element === 'water' ? '💧' : '🌪️'}</div>
                    <div style="color: #d1c4e9; font-size: 0.85rem; text-transform: capitalize;">${element}</div>
                    <div style="color: #ba68c8; font-weight: 600;">${count}</div>
                </div>
            `).join('')}
        </div>
    `;
    container.appendChild(valuesCard);
    
    // Closing reflection
    const closingCard = document.createElement('div');
    closingCard.className = 'stat-card full-width';
    closingCard.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 0;">
            <div style="color: #ba68c8; font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem;">
                What Now?
            </div>
            <div style="color: #e1bee7; line-height: 1.8; font-size: 1rem; max-width: 600px; margin: 0 auto;">
                These patterns aren't fixed. You're not "a Phoenix person" or "a Turtle person." You're all of them at different times. The goal isn't to change who you are. It's to recognize which guide is speaking when you act, and whether that's the one you want to listen to in that moment.
            </div>
        </div>
    `;
    container.appendChild(closingCard);
}

/* ================================
   REPORT
   ================================ */

function downloadReport() {
    let report = `THE FOUR CHAMBERS - JOURNEY REPORT\n`;
    report += `================================\n\n`;
    report += `Player: ${gameState.playerName}\n`;
    report += `Rounds Completed: ${gameState.totalRounds}\n`;
    report += `Date: ${new Date().toLocaleDateString()}\n\n`;
    
    gameState.allAnswers.forEach((answer) => {
        report += `\n--- Round ${answer.round} ---\n`;
        
        if (answer.isElementRound) {
            report += `Type: Wisdom Round\n`;
            report += `Element Choice: ${answer.element}\n`;
        } else {
            report += `Guide: ${answer.guideName}\n`;
            report += `Entry: ${answer.parts.entry}\n`;
            report += `Why: ${answer.parts.why}\n`;
            report += `Action: ${answer.parts.action}\n`;
        }
        
        if (answer.emotion) {
            report += `Emotion: ${answer.emotion.specific} (${answer.emotion.core})\n`;
        }
    });
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `four-chambers-journey-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

/* ================================
   UTILITIES
   ================================ */

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'save-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function playAgain() {
    localStorage.removeItem('echoesGameState');
    gameState = {
        playerName: '',
        currentRound: 1,
        totalRounds: 40,
        selectedAnswerEmotion: null,
        allAnswers: [],
        currentGuide: null,
        selectedElement: null
    };
    showScreen('join');
}