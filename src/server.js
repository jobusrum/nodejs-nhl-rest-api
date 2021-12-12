import express from 'express';
import { getTeams } from './nhl.js';

const app = express();
const port = 8080;

app.use(express.json());

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Hockey app listening at http://localhost:${port}`);
});

app.get('/', async function (req, res) {
    const teamNames = await getTeams();
    console.log(teamNames);
    res.render('home', {teamNames: teamNames});
});

/*app.get('/', async function (req, res) {
    getTeams()
        .then(teamNames => {
            console.log(`---------------results 1 ${JSON.stringify(teamNames)}`);
            res.render('home', {teamNames: teamNames});
        })
        .catch(err => {
            console.log(`---------------error in app.get`);
            console.log(err);
        });
});*/

/*app.get('/teams/:teamName?', function (req, res) {
    if (req.params.id) {
        res.send(`here is customer ${req.params.teamName}`);
    } else {
        res.send('here is a teamName');
    }
});*/












/*app.get('/', function (req, res) {
    getTeams()
        .then(teamNames => {
            console.log(teamNames);
            res.render('home');
        })
        .catch(err => {
            console.log(err);
        })
});*/

/*app.get('/', function (req, res) {
    res.send('this is the home page');
});

app.get('/customer/:id?', function (req, res) {
    if (req.params.id) {
        res.send(`here is customer ${req.params.id}`);
    } else {
        res.send('here is a list of customers');
    }
});

app.post('/customer', function (req, res) {
    console.log(req.body.name);
    res.send('created new customer');
});

app.put('/customer/:id', function (req, res) {
    console.log(req.body.name);
    res.send(`updated customer ${req.params.id}`);
});

app.delete('/customer/:id', function (req, res) {

    res.send(`deleted customer ${req.params.id}`);
});*/

