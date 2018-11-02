// jshint asi: true, esversion: 6, laxcomma: true
'use strict()'

const express = require('express')
    , app = express()
    , PORT = process.env.PORT || 4242
;

app.use(express.static(`${__dirname }/`))

app.get('*', (req, res) => res.sendfile(`${__dirname }/index.html`))


app.listen(PORT, () => console.log(`${new Date().toTimeString()} -- Started`))

/* 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", allowed.filter(x => x === req.headers.origin).toString())
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, PUT, OPTIONS")
    next()
})
*/