const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('<h1>Home page</h1>');
});

router.get('/login', (req, res, next) => {
    res.send('<h1>Login page</h1>');
});

router.get('/register', (req, res, next) => {
    res.send('<h1>Register page</h1>');
});

module.exports = router