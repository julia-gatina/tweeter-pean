'use strict';

module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define(
    'Person',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      age: {
        type: DataTypes.SMALLINT
      }
    },
    {
      tableName: 'person',
      timestamps: false
    }
  );
  return Person;
};
