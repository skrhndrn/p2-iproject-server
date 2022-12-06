"use strict";
const { Favorite, Cat } = require("../models");

class FavoriteController {
  static async getAllFavs(req, res, next) {
    try {
      const UserId = req.user.id;
      const favs = await Favorite.findAll({
        include: { model: Cat, as: "My Favorite Cats" },
        where: { UserId },
      });
      res.status(200).json(favs);
    } catch (error) {
      next(error);
    }
  }

  static async addToFavs(req, res, next) {
    try {
      const { catId } = req.params
      const cat = await Cat.findOne({ where: {id: catId}})
      if (!cat) {
        throw {name: "notFound"}
      }

      const UserId = req.user.id
      const CatId = catId
      const newFavs = await Favorite.create({ UserId, CatId})

      res.status(201).json({message: `Success added ${cat.name} to favorite`, newFavs})

    } catch (error) {
      next(error);
    }
  }
}

module.exports = FavoriteController;
