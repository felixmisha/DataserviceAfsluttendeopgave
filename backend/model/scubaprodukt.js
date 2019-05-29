const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Produkt = new Schema({

    produktnavn: {
        type: String
    },
    produktbeskrivelse: {
        type: String
    },
    pris: {
        type: String
    },
    produktfoto: {
        type: String
    },
});

module.exports = mongoose.model('Produkter', Produkt, 'Produkter');