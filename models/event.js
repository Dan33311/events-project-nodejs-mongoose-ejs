const mongoose = require('mongoose');
const slugify = require('slugify');
const marked = require('marked');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
})

EventSchema.pre('validate', function (next) {
  if(this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }
  next()
})
module.exports = mongoose.model('Event', EventSchema)