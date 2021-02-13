export function tournamentWinner(competitions: [string,string][], results: number[]): string {
	// Write your code here.
	let winner;
	let winnerScore
	interface HighScore {
		score: number,
		name: string
	}
	interface TeamsData {
		[key: string]: number;
	}
	let teamsData: TeamsData = {};
	let highScore: HighScore = {score: 0, name: ""};
	for (let i: number = 0; i < competitions.length; i++) {
			if (results[i] === 1) {
					winner = competitions[i][0]
					winnerScore = teamsData[winner] ? teamsData[winner] += 1 : teamsData[winner] = 1;
					winnerScore === 0 ? winnerScore += 1 : 0;
					if (winnerScore > highScore.score) {
							highScore.score = winnerScore 
							highScore.name = winner
					}
			}
			else {
					winner = competitions[i][1]
					winnerScore = teamsData[winner] ? teamsData[winner] += 1 : teamsData[winner] = 1;
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
