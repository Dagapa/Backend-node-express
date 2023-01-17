const express = require('express');

const ProductService = require('../services/productService');

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});

// los endpoins especificos deben ir antes de los dinamicos
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);

  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const product = service.update(id, body);

  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);

  res.json(product);
});

module.exports = router;
