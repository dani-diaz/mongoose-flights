var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var ticketsCtrl = require('../controllers/tickets');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/tickets/new', ticketsCtrl.new)


router.post('/', flightsCtrl.create);
router.post('/:id/tickets/create', ticketsCtrl.create);


module.exports = router;

