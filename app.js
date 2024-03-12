const express = require('express')
const app = express()

const allRoutes = require('./routes/route')

app.use(allRoutes)

app.use((req, res, next) => {
    res.send('<h1>Page not found</h1>');
});


app.listen(8080)