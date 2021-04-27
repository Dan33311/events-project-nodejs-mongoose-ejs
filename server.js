require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/event');
const eventsRouter = require('./routes/events')
const app = express()


mongoose.connect(process.env.DB_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
})
try {
  console.log('Database connected');
} catch (error) {
  console.log(error);
}

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
    res.render('events/index', { events: events })
})

app.use('/events', eventsRouter)

app.listen(3000, () => {
    console.log('Running on port 3000');
})