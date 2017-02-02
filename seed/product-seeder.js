var Product = require ('../models/product');

const mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
var products = [
  new Product({
  imagePath: 'http://www.amd.com/PublishingImages/photography/product/375px/amd-radeon-rx460-graphics-card-9644.jpg',
  title: 'Radeon rx460',
  description: 'Boost Clock: 1220 MHz Video Memory: 2GB GDDR5',
  price: 1000
  }),

  new Product({
  imagePath: 'http://www.amd.com/PublishingImages/photography/product/375px/amd-radeon-rx460-graphics-card-9644.jpg',
  title: 'Radeon rx480',
  description: 'Boost Clock: 2600 MHz Video Memory: 2GB GDDR5',
  price: 1600
  }),

  new Product({
  imagePath: 'http://www.amd.com/PublishingImages/photography/product/375px/amd-radeon-rx460-graphics-card-9644.jpg',
  title: 'Radeon rx490',
  description: 'Boost Clock: 3600 MHz Video Memory: 2GB GDDR5',
  price: 1600
  })

];

var done = 0;

for(var i = 0; i < products.length; i++) {
  products[i].save((err, res) => {
    done++;
    if(done === products.length){
      exit();
    }
  });

}
function exit() {
  mongoose.disconnect();
}
