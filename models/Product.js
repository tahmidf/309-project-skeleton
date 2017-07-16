var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },
  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'
  },
  price: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'
  },
  
  quantity: {
    type: String,
    default: '',
    trim: true,
    required: 'Quatity required'
  },


  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
