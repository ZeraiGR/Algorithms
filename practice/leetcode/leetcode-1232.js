// https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
// Tags: Array, Math, Geometry

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] 
// represents the coordinate of a point. Check if these points make a straight 
// line in the XY plane.

// My solution
var checkStraightLine = function(coordinates) {
    let angles = [];
    for (let i = 0; i < coordinates.length - 1; i++) {
        angles.push(calcAngle(coordinates, i, i+1));
    }

		angles.push(calcAngle(coordinates));

    for (let i = 0; i < angles.length - 1; i++) {
        if (angles[i] !== angles[i+1]) return false;
    }
    return true; 
};

function calcAngle (coord, f = 0, l = coord.length - 1) {
	const [x1, y1] = coord[f];
  const [x2, y2] = coord[l];
	return Math.atan2(Math.abs(y2-y1),Math.abs(x2-x1));
}

