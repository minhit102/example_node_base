const newRouter = require("./news");
const loginRouter = require("./login")
 
function route(app) {

    app.use("/news" , newRouter);
    app.use("/login" , loginRouter)
    app.post('/search', (req, res) => {
        let ct = req.body;
        console.log(ct)
        res.render('home')
    });
    app.get('/search', (req, res) => {
        res.render('search')
    });
}
module.exports = route;