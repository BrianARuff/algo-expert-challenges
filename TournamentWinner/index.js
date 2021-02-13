function tournamentWinner(competitions, results) {
    // Write your code here.
    let teamsData = {};
    let highScore = {score: 0, name: ""};
    for (var i = 0; i < competitions.length; i++) {
        if (results[i] === 1) {
            let winner = competitions[i][0]
            let winnerScore = teamsData[winner] ? teamsData[winner] += 1 : teamsData[winner] = 1;
            winnerScore === 0 ? winnerScore += 1 : 0;
            if (winnerScore > highScore.score) {
                highScore.score = winnerScore 
                highScore.name = winner
            }
        }
        else {
            let winner = competitions[i][1]
            let winnerScore = teamsData[winner] ? teamsData[winner] += 1 : teamsData[winner] = 1;
            winnerScore === 0 ? winnerScore += 1 : 0;
            if (winnerScore > highScore.score) {
                highScore.score = winnerScore 
                highScore.name = winner
            }
        }
    }
    return highScore.name;
}

console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1]));
