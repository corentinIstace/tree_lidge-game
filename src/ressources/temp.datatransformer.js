/**
 * File to transform data from arbustum.json to more light and useful set of data.
 *
 * HOW TO USE - NODE.JS
 * --------------------
 *
 * import {Collection} from "../ressources/temp.datatransformer";
 *
 * const MyPage = () => (
 *    <>
 *        <Collection />
 *    </>
 * )
 */
import Trees from "./arbustum.json";

export const Collection = () => {
    console.log("raw dataset", Trees);
    console.log(
        "resulting data set",
        // Filter out trees missing both size and circonference values
        Trees.filter(tree => tree.hauteur_totale > 0 && tree.circonf > 0).map(
            tree => {
                const newTree = {
                    geoloc: tree.geoloc,
                    value: tree.hauteur_totale * (tree.circonf / Math.PI),
                    name: tree.nom_complet,
                    owner: null,
                    isLocked: false,
                };
                return newTree;
            },
        ),
    );
    return null;
};
