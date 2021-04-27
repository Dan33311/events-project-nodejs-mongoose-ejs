const express = require('express');
const Event = require('./../models/event')
const router = express.Router()



router.get('/new', (req, res) => {
  res.render('events/new', { event: new Event })
})

router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id)
  if (event === null) res.redirect('/')
  res.render('events/show', { event: event })
})

router.post('/', async (req, res) => {
  let event = new Event({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })
  try {
    event = await event.save()
    res.redirect(`events/${event.id}`)
  } catch (error) {
    console.log(error)
    res.render('events/new', { event: event})
  }
})

module.exports = router