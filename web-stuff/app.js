const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen req
app.listen(3000);

//middleware
/*
app.use((req, res, next) => {
    console.log('\nnew req made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method, '\n');
    next();
});

app.use((req, res, next) => {
    console.log('\nnext middleware\n');
    next();
});
*/

app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    //res.sendFile('./views/index.html', { root: __dirname })

    const blogs = [
        {title: 'aaa', snippet: 'chksabfibfisbfbf'},
        {title: 'bbb', snippet: 'chksabfibfisbfbf'},
        {title: 'ccc', snippet: 'chksabfibfisbfbf'}
    ];

    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    //res.send('<p>About page</p>');
    //res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

/*
//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
*/

//404 a végén kell hogy legyen
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});