// https://leetcode.com/problems/distance-between-bus-stops/
import { assert } from "../tester.js";

// Tags: Array

const distanceBetweenBusStops = function(distance, start, destination) {
    let total = distance.reduce((a,b) => a+b,0);
    let clockwise = 0;
    
    let begin = Math.min(start, destination);
    let finish = Math.max(start, destination);
    
    for (let i = begin; i < finish; i++) {
        clockwise += distance[i];
    }

    let counterclockwise = total - clockwise;

    return Math.min(clockwise, counterclockwise);
};

assert(1, distanceBetweenBusStops([1,2,3,4], 0, 1), 1);
assert(2, distanceBetweenBusStops([1,2,3,4], 0, 2), 3);
assert(3, distanceBetweenBusStops([1,2,3,4], 0, 3), 4);
assert(4, distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2), 17)