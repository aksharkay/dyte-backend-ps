var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const urlSchema = Schema( 
    {
        webhookId:
        {
            type: String,
            required: true,
        },
        targetUrl:
        {
            type: String,
            required: true,
        },
    },
)

module.exports = urlSchema;