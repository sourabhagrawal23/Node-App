const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

//This route is like a mini Express app which can be tied to the other Express apps
const router = express.Router();

const products = [];

router.get('/add-product',(req, res, next) => {
    console.log('In users!');
    //send method automatically sets content type to HTML
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product',formsCSS: true, productCSS: true, activeAddProduct: true})
});

//delete,put,patch,use can be used instead of post:
router.post('/add-product', (req,res,next) => {
    products.push({ title: req.body.title });
    // console.log(req.body);
    res.redirect('/');
});


// module.exports = router;

exports.routes = router;
exports.products = products;