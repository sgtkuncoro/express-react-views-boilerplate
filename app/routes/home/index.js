'use strict';

var router = require('express').Router();

module.exports = router;

router.get('/', (req, res, next) => {
    res.sendFile('views/index', {
        title: 'Home'
    });
    console.log(next);
})