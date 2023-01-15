'use strict';
const DataTypes = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'user_',
      timestamps: false
    }
  );
  return User;
};