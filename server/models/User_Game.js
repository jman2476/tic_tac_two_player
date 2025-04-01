import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/connection.js'

import User from './User.js'
import Game from './Game.js'

class User_Game extends Model{}

User_Game.init(
    {
        GameId: {
            type: DataTypes.INTEGER,
            references: {
                model: Game,
                key: 'id'
            }
        },
        UserId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        side: {
            type: DataTypes.ENUM,
            values: ['X', 'O'],
            allowNull: false,
            validate: {
                isIn: [['X', 'O']]
            }
        }
    }, {
        sequelize,
        timestamps: false,
        indexes: [
            {unique: true, fields: ['GameId', 'UserId']}
        ]
    }
)

export default User_Game