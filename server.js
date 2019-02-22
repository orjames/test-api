var express = require('express');
var app = express();

var db = require('./models');
app.use(express.urlencoded({extended: false}));

app.get('/players', function(req, res) {
    db.player.findAll().then(function(players) {
        res.json(players);
    });
});

app.post('/players', function(req, res) {
    db.player.findOrCreate({
        where: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: parseInt(req.body.age)
        }
    }).spread(function(player, created) {
        res.redirect('/players');
    });
});

app.delete('/players/:id', function(req, res) {
    db.player.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/players');
    });
});

app.get('/players/:id', function(req, res) {
    db.player.findById(req.params.id).then(function(player) {
        res.json(player);
    });
});

app.put('/players/:id', function(req, res) {
    db.player.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: parseInt(req.body.age)
    }, {where: {id: req.params.id}}).then(function(player) {
        res.json(player);
    });
});

app.listen(process.env.PORT || 3000);