var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var messages = [
    {text: 'Java, Angular', owner: 'Tim'},
    {text: 'Agile, CSS, HTML', owner: 'Jane'},
    {text: 'Bootstrap, CSS, HTML', owner: 'Mike'},
    {text: 'Bootstrap, Communication, HTML', owner: 'Brian'},
    {text: 'Presenter, CSS, HTML', owner: 'Derek'},
    {text: 'Bootstrap, CSS, MySQL', owner: 'Peter'},
    {text: 'NoSQL, CSS, HTML', owner: 'David'},
    {text: 'Bootstrap, Ambarri, HTML', owner: 'Troy'},
    {text: 'Bootstrap, CSS, HTML', owner: 'Luke'},
    {text: 'Nagios, CSS, HTML', owner: 'Eric'},
    {text: 'Bootstrap, CSS, HTML', owner: 'Tommy'},
    {text: 'D3.js, AWS, Microsoft Office', owner: 'Russ'},
    {text: 'Bootstrap, CSS, HTML', owner: 'Nick'},
    {text: 'Bootstrap, Photoshop, HTML', owner: 'Kate'},
    {text: 'Bootstrap, CSS, HTML', owner: 'John'},
    {text: 'Web Design, CSS, HTML', owner: 'Greg'},
    {text: 'Bootstrap, Big Data, HTML', owner: 'Phil'},
    {text: 'Azure, Hadoop, HTML', owner: 'Gia An'},
    {text: 'NodeJS, Angular 2, Python', owner: 'Ivy'},

    ];
var users= [{firstName: 'a', email: 'a', password: 'a', id: 0}];
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

var api = express.Router();
var auth = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);

    res.json(result);
})

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
    //res.sendStatus(200);
})


api.get('/users/me', checkAuthenticated, (req,res) => {
    
    res.json(users[req.user]);
})

api.post('/users/me', checkAuthenticated, (req,res) => {
    var user = users[req.user];

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    res.json(user);
})

auth.post('/login', (req, res) => {
    var user = users.find(user => user.email == req.body.email);

    if (!user) 
        sendAuthError(res);

    if (user.password == req.body.password)
        sendToken(user, res);
    else
        sendAuthError(res);
})

auth.post('/register', (req,res)=>{
    var index = users.push(req.body) - 1;
    
    var user = users[index];
    user.id = index;

    sendToken(user, res);
})

function sendToken(user, res) {
    var token = jwt.sign(user.id, '123');
    res.json({ firstName: user.firstName, token });
}

function sendAuthError(res) {
    return res.json({ success: false, message: 'email or password incorrect' });
}

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization'))
        return res.status(401).send({message: 'Unauthorized requested. Missing authentication header'});

    var token = req.header('authorization').split(' ')[1];

    var payload = jwt.decode(token, '123');

    if(!payload)
        return res.status(401).send({message: 'Unauthorized requested. Authentication header invalid'});

    req.user = payload;

    next();
}

app.use('/api', api);
app.use('/auth', auth);

app.listen(61345);