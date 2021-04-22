const express = require('express');
const eventsRouter = require('./routes/events')
const app = express()


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/events', eventsRouter)

app.listen(3000, () => {
    console.log('Running on port 3000');
})