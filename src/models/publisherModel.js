const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
      publisherName:String,
      headQuarter: String
})

module.exports = mongoose.model('publishers', publisherSchema )
