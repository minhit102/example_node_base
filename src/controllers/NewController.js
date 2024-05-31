class NewController{
    index(req,res){
        res.render('home');
    }
    showNew(req,res){
        res.render('newnew');
    }
}
module.exports = new NewController;