"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class myPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      myPost.belongsTo(models.user)
    }
  }
  myPost.init(
    {
      content: DataTypes.STRING,
      translation: DataTypes.STRING,
      status: DataTypes.STRING,
      language: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      }
    },

    {
      sequelize,
      modelName: "myPost"
    }
  )
  return myPost
}
