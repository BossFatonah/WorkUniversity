module.exports = (sequelize,DataType) => {
    const Setting = sequelize.define("setting", {
        id:{
            type: DataType.INTEGER,
            autoIncrement: false,
            primaryKey: true
        },
        theme:{
            type: DataType.STRING,
            allowNull: false
        },
    });
};