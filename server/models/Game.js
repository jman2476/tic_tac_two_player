import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/connection.js'

import User from './User.js'

class Game extends Model{}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        history: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '[]'
        },
        playerX: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        playerO: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        status: {
            type: DataTypes.ENUM,
            values: ['new', 'in progress', 'complete'],
            defaultValue: 'new'
        }
    },
    {
        sequelize,
        modelName: 'Game',
        timestamps: true
    }
)

export default Game;