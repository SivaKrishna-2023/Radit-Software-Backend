const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Consultant = mongoose.model('Consultant', consultantSchema);

module.exports = Consultant;