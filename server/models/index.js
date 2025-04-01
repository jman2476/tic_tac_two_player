import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/connection.js'

import {Game} from './Game.js'
import {User} from './User.js'

export {
    Game, User
};