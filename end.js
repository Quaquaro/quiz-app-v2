const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//Anzahl in der Highscore Liste
const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    //Es wird ein Objekt score erzeugt.
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    //Sortieren der einzelnen Punktzahlen
    highScores.sort( (a,b) => b.score  - a.score);

    //Nach der 5. Stelle werden die Einträge im Array gelöscht.
    highScores.splice(5);

    // Update der HighScores
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //Weiterleitung zur Startseite
    window.location.assign("/");

    
};