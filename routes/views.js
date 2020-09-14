const express = require('express');
const router = express.Router();

const views = [
  'index'
];

views.forEach(view => {
  router.get(`/${view}`, (req, res) => res.render(view));
});

router.get('/', (req, res) => res.render('index'));

module.exports = router
