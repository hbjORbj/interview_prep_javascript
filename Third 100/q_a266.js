/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

- If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
- All airports are represented by three capital letters (IATA code).
- You may assume all tickets form at least one valid itinerary.
- One must use all the tickets once and only once.
*/

var findItinerary = function(tickets) {
    tickets.sort((a,b) => a[1].localeCompare(b[1]));

    // Convert input into adjacency list 
    let adjList = new Map();
    let edges = tickets.length;
    for (let i = 0; i < tickets.length; i++) {
        let [from, to] = tickets[i];
        if (adjList.has(from)) adjList.get(from).push({to: to, visited: false});
        else adjList.set(from, [{to: to, visited: false}]);
    }
    
    // Perform dfs backtracking on the adjacency list starting from JFK
    let res = [];
    dfs("JFK", ["JFK"]);
    return res;
    
    function dfs(vertex, cur) {
        if (cur.length === edges + 1) {
            res = cur.slice();
            return;
        }
        if (!adjList.has(vertex)) return;
        
        for (let obj of adjList.get(vertex)) {
            if (obj.visited == false) {
                obj.visited = true;
                cur.push(obj.to);
            
                dfs(obj.to, cur);
                
                obj.visited = false;
                cur.pop();    
                if (res.length > 0) return;
            }
        }
    }
    // Time Complexity: O(E^k), k = maximum # of flights from an airport and k can be at most V-1 | we need to form a sequence of edges using all edges here. if we have k to choose from for each edge, that is E^k
    // Space Complexity: O(V+E), for adjacency list
};

// We start from JFK and try to find a valid itinerary. A valid itinerary is one that uses all edges (tickets) given.
// Anytime we encounter an invalid itinerary (no more airport to go further but hasn't used all edges), we backtrack and travel to another airport.
// Since we already sorted the adjacency list, the first valid itinerary is the answer (smallest lexical order).