/**
 * Coordinate of Liège center.
 * Give center position of the map.
 */
const initialCenterCoordinates = [50.6382, 5.5683];

/**
 * Limit of the map. Player is pushed back into the limits if try to go out these bounds.
 */
const mapLimits = [
    [50.5722, 5.4983],
    [50.7022, 5.68683],
];

/**
 * Limits of zoom. Player cannot zoom too close or too away.
 */
const minZoomLimit = 16;
const maxZoomLimit = 20;

export {initialCenterCoordinates, mapLimits, minZoomLimit, maxZoomLimit};
