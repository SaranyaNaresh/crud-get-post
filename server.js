/**
 * Created by Sony on 3/16/2017.
 */
/**
 * Created by Sony on 3/16/2017.
 */
const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
// Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
// Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})


var db

MongoClient.connect('mongodb://admin:admin@ds145289.mlab.com:45289/sampledb', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
    console.log('listening on 3000')
})
})
app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
res.redirect('/')
})
})
app.get('/', (req, res) => {
    var cursor = db.collection('quotes').find()
})