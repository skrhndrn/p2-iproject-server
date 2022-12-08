const axios = require("axios");
const petfinder = require("@petfinder/petfinder-js");

class CatController {
  static async getAllCats(req, res, next) {
    try {
      const client = new petfinder.Client({
        apiKey: process.env.PETFINDER_API_KEY,
        secret: process.env.PETFINDER_SECRET
      })
      let page = 1
      const result = await client.animal.search({
        type: "cat",
        page,
        limit: 50
      })
      let index = (page-1)*100;
      const responseData = result.data.animals.map((el) => {
        if (el.primary_photo_cropped !== 0 || el.primary_photo_cropped === true) {
          return { 
            id: el.id,
            name: el.name,
            type: el.breeds.primary,
            age: el.age,
            gender: el.gender,
            imgUrl: el.primary_photo_cropped,
            about: el.attributes
          }
        }
      })
      page++
      res.status(200).json(responseData)

    } catch (error) {
      next(error)
    }
  }
}

module.exports = CatController;
