const express = require('express');
const Consultant = require('../models/consultant');
const router = express.Router();

// GET all consultants
router.get('/', async (req, res) => {
  try {
    const consultants = await Consultant.find();
    res.json(consultants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new consultant
router.post('/', async (req, res) => {
  const consultant = new Consultant({
    name: req.body.name,
    expertise: req.body.expertise,
    experience: req.body.experience,
    email: req.body.email,
  });

  try {
    const newConsultant = await consultant.save();
    res.status(201).json(newConsultant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update a consultant
router.put('/:id', async (req, res) => {
  try {
    const updatedConsultant = await Consultant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedConsultant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a consultant
router.delete('/:id', async (req, res) => {
  try {
    await Consultant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Consultant deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
