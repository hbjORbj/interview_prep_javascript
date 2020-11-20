/*
You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.

For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. 

They have importance value 15, 10 and 5, respectively. 

Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. 

Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all their subordinates.
*/

var GetImportance = function(employees, id) {
    let adjList = new Array();
    for (let i = 0; i < employees.length; i++) {
        let id = employees[i].id, subordinates = employees[i].subordinates;
        let importance = employees[i].importance;
        adjList[id] = {value: importance, subordinates: subordinates};
    }
    return getValue(adjList, id);
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

function getValue(adjList, id) {
    let {value, subordinates} = adjList[id];
    for (let subId of subordinates) {
        value += getValue(adjList, subId);
    }
    return value;
}