'use strict';
const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  const Tweet = sequelize.define(
    'Tweet',
    {
      id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      message: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE
      },
      user_id: {
        type: DataTypes.UUIDV4,
        references: 'user_',
        referencesKey: 'id'
      }
    },
    {
      tableName: 'tweet',
      timestamps: false
    }
  );
  return Tweet;
};
