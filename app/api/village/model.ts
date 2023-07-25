import { DataTypes } from 'sequelize'
import db from '../../../config/db'
// Define schema
export const villageSchema = db.define(
  'village',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    district_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: 'indonesia_villages',
    timestamps: false,
  },
)
