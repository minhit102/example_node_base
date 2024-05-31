class LoginController{
    login(req,res){
        res.render('login');
    }
    showTable(req,res){
        res.render('table');
    }
}
module.exports =  new LoginController;