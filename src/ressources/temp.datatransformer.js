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
    console.log(
        "resulting data set",
        Trees.map(tree => {
            const newTree = {
                geoloc: tree.geoloc,
                value: tree.hauteur_totale * tree.diametre_cime,
                name: tree.nom_complet,
                owner: null,
                isLocked: false,
            };
            return newTree;
        }),
    );
    return null;
};
