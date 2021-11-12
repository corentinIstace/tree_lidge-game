/**
 * File to transform data from arbustum.json to more light and useful set of data.
 */
import Trees from "arbustum.json";
import {v4 as uuidv4} from "uuid";

console.log(
    "resulting data set",
    Trees.map(tree => {
        const newTree = {
            geoloc: tree.geoloc,
            id: uuidv4(),
        };
        return newTree;
    }),
);
