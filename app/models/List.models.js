module.exports = (require, DataType) => {
    const List = seqelize.define("List of names", {
        id:{
            type: DataType.INTEDER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type:DataType.STRING,   
            allowNull: false
        },
        BachelorDdegree: {
            type:DataType.STRING,   
            allowNull: false
        },
        atBachelor: {
            type:DataType.STRING,   
            allowNull: false
        },
        MasterDegree: {
            type:DataType.STRING,   
            allowNull: false
        },
        atMaster: {
            type:DataType.STRING,   
            allowNull: false
        },
        
    });
};