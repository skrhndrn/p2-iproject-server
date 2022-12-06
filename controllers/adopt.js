"use strict";
const { Adopt, Cat } = require("../models");

class AdoptController {
  static async adoptCat(req, res, next) {
    try {
      const { catId } = req.params;
      const cat = await Cat.findOne({ where: { id: catId } });
      if (!cat) {
        throw { name: "notFound" };
      }

      const { fullName, phoneNumber, address, donation } = req.body;

      const UserId = req.user.id;
      const CatId = catId;
      const adoption = await Adopt.create({
        UserId,
        CatId,
        fullName,
        phoneNumber,
        address,
        donation,
      });

      res
        .status(201)
        .json({ message: `Success send adoption request of cat ${cat.name}`, adoption });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AdoptController;
