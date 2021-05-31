/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)
*/

var kClosest = function(points, K) {
    let m = new Map(), res = [];
    for (let [x, y] of points) {
        let distance = Math.sqrt(x**2 + y**2).toFixed(5);
        if (!m.has(distance)) m.set(distance, []);
        m.get(distance).push([x,y]);
    }
    let pairs = Array.from(m.entries()); // (key, value) in m is (distance, [points])
    pairs.sort((a,b) => a[0] - b[0]); // sort from shortest to farthest distance
    
    for (let [distance, points] of pairs) {
        if (points.length < K) {
            res.push(...points);
            K -= points.length;
        }
        else {
            res.push(...points.slice(0, K));
            break;
        }
    }
    return res;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};