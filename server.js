require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Event = require('./models/event');
const eventsRouter = require('./routes/events')
const app = express()


mongoose.connect(process.env.DB_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
try {
  console.log('Database connected');
} catch (error) {
  console.log(error);
}

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const events = await Event.find().sort({ createdAt: 'desc' })
    res.render('events/index', { events: events })
  })

app.use('/events', eventsRouter)

app.listen(3000, () => {
    console.log('Running on port 3000');
})