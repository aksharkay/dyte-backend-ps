const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    secret: 'yoursecret',
    database: `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ne7er.mongodb.net/${DB_COL}?retryWrites=true&w=majority`,
}