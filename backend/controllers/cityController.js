const City = require('../models/cityModel');

//get all cities
const getCities = async (req, res) => {
  try {
      // const cities = await City.find({});
      // filter out famousFood
      const cities = await City.find({}, { famousFood: 0 });

      res.status(200).json(cities);
  }
  catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error', err.message);
  }
}

//get cities by limit

//get a city by id
const getCityById = async (req, res) => {
  const { id } = req.params;
  console.log("id----->", id)
  try {
    const city = await City.findById(id);
    res.status(200).json(city);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error', err.message);
  }
}

//create a city
const createCity = async (req, res) => {
  const { District, Division, FamousFood, ImageUrl } = req.body;
  console.log("req.body", req.body);
  try {
      const city = new City({
          District,
          Division,
          FamousFood,
          ImageUrl,
      });
      await city.save();
      res.status(200).json(city);
  }
  catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error', err.message);
  }
  
}

//create multiple cities
const createManyCities = async (req, res) => {
  const cities  = req.body;
  console.log("cities----->", cities);
  try {
    const createdCities = await City.insertMany(cities);
    res.status(200).json(createdCities);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  createCity,
  getCities,
  createManyCities,
  getCityById,
};