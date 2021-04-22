const express = require('express');
const eventsRouter = require('./routes/events')
const app = express()


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const events = [{
        title: 'Test tile',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test tile 222',
        createdAt: new Date(),
        description: 'Test description 222'
    }]
    res.render('index', { events: events })
})

app.use('/events', eventsRouter)

app.listen(3000, () => {
    console.log('Running on port 3000');
})