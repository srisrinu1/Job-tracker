const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();


// Example route that requires 'applyForJobs' permission
router.post('/apply-job', auth('applyForJobs'), (req, res) => {
  res.json({ message: 'Job application submitted successfully' });
});

// Example route that requires 'manageUsers' permission (for admins)
router.post('/manage-users', auth('manageUsers'), (req, res) => {
  res.json({ message: 'User management action performed' });
});

module.exports = router;
