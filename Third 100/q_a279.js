/*
Create a timebased key-value store class TimeMap, that supports two operations.

1. set(string key, string value, int timestamp)

- Stores the key and value, along with the given timestamp.

2. get(string key, int timestamp)

- Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
- If there are multiple such values, it returns the one with the largest timestamp_prev.
- If there are no values, it returns the empty string ("").
*/

/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */

// (key, value) in map represents (key, values[timestamp]) where values[timestamp] is the value given with the particular timestamp.
// We are using timestamp as index.
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);
    let values = this.map.get(key);
    values[timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

// We simply scan through the values array from the back starting at the given timestamp and return the first value found.
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return "";
    let values = this.map.get(key);
    for (let i = timestamp; i >= 0; i--) {
        if (values[i] !== undefined) return values[i];
    }
    return "";
};