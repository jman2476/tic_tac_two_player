import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/connection.js'
import bcrypt from 'bcryptjs'

class User extends Model{
    async comparePassword(password){
        return bcrypt.compare(password, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'This username is already in use'
            },
            validate: {
                len: {
                    args: [4, 12],
                    msg: 'Username must be between 4 and 12 characters in length'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 20],
                    msg: 'Password must be more than 8 characters, less than 20'
                }
            }
        }
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true,
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10)
                    user.password = await bcrypt.hash(user.password, salt)
                }
            },
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    const salt = await bcrypt.hash(user.password, salt)
                }
            }
        }
    }
)

export default User;