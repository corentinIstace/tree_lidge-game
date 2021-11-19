import TreeModel from "../models/TreeModel.js";

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
        const Trees = await TreeModel.find(
            {
                geoloc: {
                    $geoWithin: {
                        $box: [
                            bounds.lon, // longitude first
                            bounds.lat, // latitude
                        ],
                    },
                },
            },
            // Filter fields to send according to what the client ask
            /* complete ? "_id Geoloc Value Name IsLocked Owner_id" : "_id Geoloc", */
        ).select(complete ? "geoloc value name isLocked owner_id" : "geoloc");

        // Up to client to check if array is null
        return response.status(200).json(Trees);
    } catch (error) {
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
