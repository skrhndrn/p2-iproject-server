"use strict"
const petfinder = require('@petfinder/petfinder-js');
const axios = require('axios');
const client = new petfinder.Client({apiKey: process.env.PETFINDER_API_KEY, secret: process.env.PETFINDER_SECRET})

class CatController {
  static async showAllCats(req, res, next) {
    try {
      const cats = await axios.get({
        url: "https://api.petfinder.com/v2/types/{type}",
        params: {
          name: 'Cat'
        },
        headers: {
          Authorization: `Bearer ${process.env.PETFINDER_API_KEY}`
        }
      })

      res.status(200).json(cats)
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}

module.exports = CatController