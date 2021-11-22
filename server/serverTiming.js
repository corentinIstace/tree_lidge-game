/* import UserModel from "../models/UserModel.js";
import Trees from "../models/TreeModel.js";

const payeInterval = setInterval(() => {
    UserModel.find().then(players => {
        players.forEach(async player => {
            const playerTrees = await Trees.find({owner: player._id});
            const paye = playerTrees.reduce(
                (previous = 0, current) => previous + current.value,
            );
            console.log("player", player.UserName, "get", paye);
        });
    });
}, 900000); */

//const halfingInterval = setInterval(() => {}, 1800000);
