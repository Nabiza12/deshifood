const express = require('express');
const {createCity, getCities, createManyCities, getCityById} = require('../controllers/cityController');

const router = express.Router();

//get all cities
router.get('/', getCities);

//get a city by id
router.get('/:id', getCityById);

//create a city
router.post('/', createCity);

//create multiple cities
router.post('/many', createManyCities);

module.exports = router;