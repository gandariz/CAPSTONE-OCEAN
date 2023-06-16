const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  field1: {
    type: String,
    required: true,
  },
  field2: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;