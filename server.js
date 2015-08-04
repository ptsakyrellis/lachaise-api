// server.js

// BASE SETUP
// 
// ======================================================================================
var mongoose   = require('mongoose');
var db = require('./app/config/db.js')

mongoose.connect(db.dsn);

var lachaise   = require('./app/models/lachaise');
var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;  

// API Route
// =============================================================================
var router = express.Router();              

// middleware to use for all requests
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

// Route to get monuments list
router.route('/monuments')
    .get(function(req, res) {
        lachaise.find(function(err, monuments) {
            if (err)
                res.send(err);

            res.json(monuments);
        });
    });

// Route to get infos on a particular monument
router.route('/monuments/:monument_id')
    .get(function(req, res) {
        lachaise.findById(req.params.monument_id, function(err, monument) {
            if (err)
                res.send(err);
            res.json(monument);
        });
    });    

// Default route with welcome message. 
router.get('/', function(req, res) {
    res.json({ message: 'Bienvenue sur lachaiseapi.' });   
});

// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
