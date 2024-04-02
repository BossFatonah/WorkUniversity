const db = require('../models');
const List = db.list;
const Setting = db.setting;

exports.findAll = (req, res) => {
    try {
        List.findAll({
            attributes: ["id", "name", "Bachelor's degree", "Graduated with a bachelor's degree at", "Master's degree", "Graduated with a master's degree at"],
            include: [
                {
                    model: Setting,
                    attributes: ["theme"]
                },
                {
                    model: University,
                    attributes: ["theme"],
                },
                {
                    model: Degree,
                    attributes: ["theme"],
                }
            ]
        })
            .then(list => {
                res.status(200).json(list);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }  catch (e) {
        console.log(e);
    }
};

exports.create = (req, res) => {
    try {
        if (!req.body.name | !req.body.position) {
            res.status(400).json({ message: "cannot empty!"});
            return;
        }

        const listObj = {
            name: req.body.name,
            position: req.body.position,
            universityId: req.body.universityId,
        };

        
    }
}