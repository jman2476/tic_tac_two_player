import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/connection.js'


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