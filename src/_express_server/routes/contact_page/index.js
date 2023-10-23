const express = require('express');
const router = express.Router();

router.get('/contact', (req, res, next) => {
  res.render('contact_page/index', { layout: 'layout/index' });
});

module.exports = (app) => {
  app.use('/', router);
}