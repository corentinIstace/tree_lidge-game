import TreeModel from "../models/TreeModel.js";

// Get trees from bounds
const getTrees = async (request, response) => {
    try {
        const bounds = request.body.bounds;
        // Validate bounds values
        if (
            !bounds ||
            Number.isNaN(bounds.lon[0]) ||
            Number.isNaN(bounds.lon[1]) ||
            Number.isNaN(bounds.lat[0]) ||
            Number.isNaN(bounds.lat[1])
        ) {
            return response.status(400).json({
                errorMessage: "Bounds format not correct",
                inBounds: request.body,
            });
        }

        const Trees = await TreeModel.find({
            geoloc: {
                $geoWithin: {
                    $box: [
                        bounds.lon, // longitude first
                        bounds.lat, // latitude
                    ],
                },
            },
        });

        // Up to client to check if array is null
        return response.status(200).json(Trees);
    } catch (error) {
        return response.status(500).json({error: "Could not retrieve trees"});
    }
};

// Get data of a single tree
const getSingleTree = async (request, response) => {
    try {
        await console.log("Get single tree");
    } catch (error) {
        response.status(500).send("Could not retrieve tree");
    }
};

export {getTrees, getSingleTree};
