/* 
BASIC EXAMPLE
    var express = require('express');
    var exphbs  = require('express-handlebars');

    var app = express();

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.listen(3000);*/

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

var hbs = exphbs.create({
    helpers: {
        hello: function () { return 'HELLO!'; },
        world: function () { return 'WORLD!'; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
    res.render('index', {
        showTitle: true,
        helpers: {
            hello: function () { return 'hello!.'; }
        }
    });
});

app.listen(3000);