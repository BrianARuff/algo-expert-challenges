HOME_TEAM_WON = 1


def tournamentWinner(competitions: list, results: list):
    currentBestTeam = ""
    scores = {currentBestTeam: 0}
    for idx, competition in enumerate(competitions):
        result = results[idx]
        homeTeam, awayTeam = competition
        winningTeam = homeTeam if result else awayTeam
        updateScores(winningTeam, 3, scores)
        if scores[winningTeam] > scores[currentBestTeam]:
            currentBestTeam = winningTeam
    return currentBestTeam


def updateScores(winningTeam, points, scores):
    if winningTeam not in scores:
        scores[winningTeam] = 0
    scores[winningTeam] += points


tournamentWinner([["HTML", "C#"], ["C#", "Python"],
                  ["Python", "HTML"]], [0, 0, 1])
