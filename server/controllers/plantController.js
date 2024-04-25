const uuid = require('uuid');
const path = require('path');
const { Plant, PlantInfo } = require('../models/model');
const ApiError = require('../error/ApiError');

class plantController {
    async create(req, res) {
        try {
            const { name, price, typeId, info } = req.body;
            const { img } = req.files;

            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    PlantInfo.create({
                        description: i.description,
                        sku: i.sku,
                        plantId: plant.id,
                    })
                );
            }

            const plant = await Plant.create({ name, price, typeId, info, img: fileName });

            return res.json(plant);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let plants;
        if (!typeId) {
            plants = await Plant.findAndCountAll({ limit, offset });
        }

        if (typeId) {
            plants = await Plant.findAndCountAll({ where: { typeId }, limit, offset });
        }

        return res.json(plants);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const plant = await Plant.findOne({
            where: { id },
            include: [{ model: PlantInfo, as: 'info' }],
        },
        );
        return res.json(plant)
    }
}

module.exports = new plantController();
