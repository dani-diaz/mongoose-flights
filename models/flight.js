const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DFW", "LAX", "DEN", "SAN"],
    },

    arrival: {
      type: Date,
      default: function () {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      },
    },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
    },

    airport: {
      type: String,
      enum: ["AUS", "DFW", "LAX", "DEN", "SAN"],
      default: "DEN",
    },

    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
    },

    departs: {
      type: Date,
      default: function () {
        return new Date().getFullYear + 1;
      },
    },

    destination: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);