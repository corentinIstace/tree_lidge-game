import Trees from "../models/TreeModel.js";
/* import UserModel from "../models/UserModel.js"; */

// Get trees from bounds
const getTrees = async (request, response) => {
    try {
        const bounds = request.body.bounds;
        const complete =
            typeof request.body.complete == "boolean"
                ? request.body.complete
                : false;
        // Validate bounds values
        if (
            !bounds ||
            Number.isNaN(bounds.lon[0]) ||
            Number.isNaN(bounds.lon[1]) ||
            Number.isNaN(bounds.lat[0]) ||
            Number.isNaN(bounds.lat[1])
        ) {
            return response.status(400).json({
                message: "Bounds format not correct",
                requestParams: request.body,
            });
        }
        // Find trees filtered by in bounds area
        return await Trees.find({
            geoloc: {
                $geoWithin: {
                    $box: [
                        bounds.lon, // longitude first
                        bounds.lat, // latitude
                    ],
                },
            },
        })
            .populate({
                path: "owner",
                select: "UserName -_id",
                model: "users",
            })
            // Filter fields to send according to what the client ask
            .select(
                complete
                    ? "_id geoloc value name isLocked owner"
                    : "_id geoloc -owner",
            )
            .exec((err, data) => {
                if (err) {
                    throw err;
                }

                // Test
                // ----
                // TODO player payement and leaves halfing

                // Cannot get value of trees, receive undefined

                /* UserModel.find().then(players => {
                    players.forEach(async player => {
                        const playerTrees = await Trees.find({
                            owner: player._id,
                        });
                        console.log("controll", player.UserName, playerTrees);
                        const paye = await playerTrees.reduce(
                            (previous, current) => {
                                console.log(
                                    "tree",
                                    current._id, // get correct value
                                    current.isLocked, // get undefined
                                );
                                return previous + current.value;
                            },
                            0,
                        );
                        console.log("player", player.UserName, "get", paye);
                    });
                }); */

                return response.status(200).json(data);
            });
    } catch (error) {
        console.log(error);
        return response.status(500).json({message: "Could not retrieve trees"});
    }
};

// Get data of a single tree
const getSingleTree = async (request, response) => {
    try {
        await console.log("Get single tree");
    } catch (error) {
        response.status(500).json({message: "Could not retrieve tree"});
    }
};

export {getTrees, getSingleTree};
