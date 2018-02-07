'use strict';

var router = require('express').Router();

module.exports = router;

router.use('/', require('./home'));
router.use('/user', require('./user'));

router.use(function(req, res){
    res.status(404).end();
})
