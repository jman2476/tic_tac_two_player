import { User }from "../models/index.js";

export default authController = {
    async signUp(username, password){
        try{
            const user = await User.create({
                username: username,
                password: password
            }) 
        } catch (err) {
            console.error('signUp error:', err)
        }
    },
    async logIn(username, password){
        try{

        } catch (err) {
            console.error('logIn error:', err)
        }
    },
    logOut(){

    }
}