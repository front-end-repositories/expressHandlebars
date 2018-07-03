1. npm install express --save
2. npm install express-handlebars
3. Add this line to scripts -> "start": "node app.js"
4. Create app.js file
5. This is going to be the structure of the project
<pre><code>
    .
    ├── app.js
    └── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
</code></pre>
6. This is the basic example 
    //app.js file
    var express = require('express');
    var exphbs  = require('express-handlebars');

    var app = express();

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.listen(3000);

7. Create the main layout - The main layout is going to be the html wrapper, and can be used for the views in the app. A layout is a handlebar template with a {{{body}}} placeholder. The way we say which one is the layout that is going to render is:

    app.get('/', function (req, res) {
        res.render('index');
    });
    
    main.handlebars
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Example App</title>
    </head>
    <body>

        {{{body}}}

    </body>
    </html>

8. In the index.handlebars add this: 
    <h1>Example App: Home</h1>

9. To run this example 
    npm start
