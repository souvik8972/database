const fs = require('fs');
const path = require('path');
const db=require('../util/database')


const Cart = require('./cart');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    db.execute("insert into products(title ,price,description,image)values(?,?,?,?"),[this.title,this.price,this.description,this.imageUrl]
  }

  static deleteById(id) {
   
  }

  static fetchAll() {
    return db.execute("select * from products")


  }

  static findById(id) {
   
  }
};
