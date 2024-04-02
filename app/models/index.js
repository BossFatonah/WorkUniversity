const config = require("../config/db");

const DataType = require("sequelize");
const seqelize = new DataType(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};
db.DataType = DataType;
db.seqelize = seqelize;

db.List = require("../models/List.models")(seqelize,DataType);
db.setting = require("../models/setting.model")(seqelize,DataType);

db.List.hasOne(db.setting,{
    onDelete: 'CASCADE'
});
db.setting.belongsTo(db.list);

module.exports = db;