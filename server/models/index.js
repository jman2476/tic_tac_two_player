import Game from './Game.js'
import User from './User.js'
import User_Game from './User_Game.js'
import sequelize from '../config/connection.js'

Game.belongsToMany(User, {
    through: User_Game,
})
User.belongsToMany(Game, {
    through: User_Game,
})

await sequelize.sync()

export {
    Game, User
};

// const user1 = await User.create({
//     username: 'bobby',
//     password: 'billybobbins'
// })

// const user2 = await User.create({
//     username: 'dobags',
//     password: 'frobobbins'
// })

// const game = await Game.create()

const user1 = await User.findByPk(1)
const user2 = await User.findByPk(2)
const game = await Game.findByPk(1)

await User_Game.create({
    GameId: game.id,
    UserId: user1.id,
    side: 'X'
})
await User_Game.create({
    GameId: game.id,
    UserId: user2.id,
    side: 'O'
})