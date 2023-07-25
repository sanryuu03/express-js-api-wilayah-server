import { DataTypes } from 'sequelize'
import db from '../../../config/db'
// Define schema
export const provincesSchema = db.define(
  'provinces',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: 'indonesia_provinces',
    timestamps: false,
  },
)
