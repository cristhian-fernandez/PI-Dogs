const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('race', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    height_min: {
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    height_max: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },
    height : {
      type : DataTypes.VIRTUAL,
      get(){
        let result = (this.height_max && this.height_max !== this.height_min) ? `${this.height_min} - ${this.height_max}` : `${this.height_min}`;
        return result;
      }
    },
    weight_min: {
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    weight_max: {
      type: DataTypes.FLOAT,
      allowNull:true,
    },
    weight : {
      type : DataTypes.VIRTUAL,
      get(){
        let result = (this.weight_max && this.weight_max !== this.weight_min) ? `${this.weight_min} - ${this.weight_max}` : `${this.weight_min}`;
        return result;
      }
    },
    life_span_min: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    life_span_max: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    life_span: {
      type: DataTypes.VIRTUAL,
      get(){
        let result = this.life_span_min ? (this.life_span_max ? (this.life_span_min !== this.life_span_max ? `${this.life_span_min} - ${this.life_span_max}` : this.life_span_min) : this.life_span_min): (this.life_span_max ? this.life_span_max : '-');
        return result;
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull:true,
    },

  },{
    timestamps: false
  });
};
