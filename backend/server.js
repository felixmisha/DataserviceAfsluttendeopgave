const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const scubaRoutes = express.Router();
const PORT = 4012;

let Produkt = require('./model/scubaprodukt')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/scuba', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully")
})

scubaRoutes.route('/').get(function(req, res) {
    Produkt.find(function(err, produkter) {
        if (err) {
            console.log(err);
        } else {
            res.json(produkter);
        }
    });
});

scubaRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Produkt.findById(id, function(err, produkt) {
        res.json(produkt);
    });
});

scubaRoutes.route('/add').post(function(req, res) {
    let produkt = new Produkt(req.body);
    produkt.save()
        .then(produkt => {
            res.status(200).json({'produkt': 'produkt tilføjet'});
        })
        .catch(err => {
            res.status(400).send('nyt produkt ikke tilføjet');
        });
});

scubaRoutes.route('/update/:id').post(function(req, res) {
    Produkt.findById(req.params.id, function(err, produkt) {
        if (!produkt)
            res.status(404).send('produkt ikke fundet');
        else 
            produkt.produktnavn = req.body.produktnavn;
            produkt.produktbeskrivelse = req.body.produktbeskrivelse;
            produkt.pris = req.body.pris;
            produkt.produktfoto = req.body.produktfoto;

            produkt.save(),then(produkt => {
                res.json('Produkt opdateret');
            })
            .catch(err => {
                res.status(400).send("Opdatering ikke mulig");
            });
    });
});

app.use('/produkter', scubaRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});