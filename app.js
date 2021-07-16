var mongoose = require('mongoose');
const Url = require('./models/Url');

module.exports = function(app){
    app.get('/register/:id', async (req,res) => {
        var targetUrl = req.params.targetUrl;
        var id = req.params.id;
        var webhook = new Url({
            webhookId: id,
            targetUrl: targetUrl,
        })
        await webhook.save((err,res) => {
            if(err){
                return 'An Error Occurred :(';
            }
            return 'Registration Success!';
        });
    });
    app.get('/list', async (req,res) => {
        var urls = await Url.find({});
        return urls;
    });
    app.get('/update', (req,res) => {
        var newTargetUrl = req.params.newTargetUrl;
        var id = req.params.id;
        var urls = await Url.findOneAndUpdate({webhookId: id}, {targetUrl: newTargetUrl}, {new: false}, (err,res)=>{
            if (err) return err;
            return "Updation Success!";
        });
    });
    app.get('/delete', async (req,res) => {
        var id = req.params.id;
        await Url.deleteOne({webhookId: id}, (err)=>{
            if(err) return err;
        })
    });
    app.get('/trigger', async (req,res) => {
        var ip = req.params.idAddress;
        var query = await Url.find({}).select({'targetUrl':1, 'webhookId':0});
        return query;
    });
}