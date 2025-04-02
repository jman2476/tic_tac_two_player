// TODO: Write controllers to handle the game table
//      - checkGameStatus
//      - verifyHistory
//      - updateHistory
//      - 
//      - 

import { Game } from "../models/index.js";
import sequelize from "../config/connection.js";
import User_Game from "../models/User_Game.js";

// async function verifyHistory(hist, game){
//     const refHist = JSON.parse(game.history)
//     if (hist.length >= game.history.len){

//     }
//     return false 
// }
const gameController = {
    async newGame(player1, player2) {
        // player 1 plays X
        // player 2 plays O
        const game = await Game.create()

        await User_Game.create({
            GameId: game.id,
            UserId: player1.id,
            side: 'X'
        })
        await User_Game.create({
            GameId: game.id,
            UserId: player2.id,
            side: 'O'
        })

        return game
    },

    async updateHistory(newHistory, game) {

        console.log('original game: ', game.history)
        game.history = JSON.stringify(newHistory)
        if (game.status === 'new') game.status = 'in progress'
        
        console.log('updated game: ', game.history)
    
        game.save()
    },
}

export default gameController
