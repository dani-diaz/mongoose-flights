const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required:true,
        min:10,
        max:9999 
    },
    date: {
        type: Date,
        default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() +1));
        }
    }
});

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    date: {
        type: Date,
        default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() +1));
        }
    }
});


module.exports = mongoose.model('Flight', flightSchema);