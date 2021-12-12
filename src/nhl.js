import axios from 'axios';

/*export async function getTeams() {
    let teamNames = [];
    const u = 'https://statsapi.web.nhl.com/api/v1/teams';
    const results = await axios.get(u);
    if (!results) {
        return teamNames;
    }

    for (const team of results.data.teams) {
        teamNames.push(team.name);
    }

    return teamNames;
}*/

export function getTeams() {
    let teamNames = [];
    const url = 'https://statsapi.web.nhl.com/api/v1/teams';
    return axios.get(url)
        .then(results => {
            if (results) {
                for (const team of results.data.teams) {
                    teamNames.push(team.name);
                }
            }
            return teamNames;
        })
        .catch(err => {
            console.log(err);
        })
}

export function getTeam() {
    let teamNames = [];
    const url = 'https://statsapi.web.nhl.com/api/v1/teams';
    return axios.get(url)
        .then(results => {
            if (results) {
                for (const team of results.data.teams) {
                    teamNames.push(team.name);
                }
            }
            return teamNames;
        })
        .catch(err => {
            console.log(err);
        })
}

