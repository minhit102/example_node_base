
const coursesRouter = require('./courses.router');
const homeRouter = require('./homePage.router')

function route(app) {

    app.use('/courses' , coursesRouter);
    app.use('/' ,homeRouter )


    /*app.use('/', newRouter);
    //app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/login', loginRouter);

    app.post('/search', (req, res) => {
        let ct = req.body;
        console.log(ct);
        res.render('home');
    });
    app.get('/search', (req, res) => {
        res.render('search');
    });*/
}
module.exports = route;
