var reorderLogFiles = function(logs) {
    let letterLogs = [], digitLogs = [];
    for (let i = 0; i < logs.length; i++) {
        let idx = logs[i].indexOf(" ");
        if (logs[i][idx+1] >= "0" && logs[i][idx+1] <= "9") {
            digitLogs.push(logs[i]);
        } else {
            let id = logs[i].substring(0, idx);
            let content = logs[i].substring(idx + 1);
            letterLogs.push([id, content]);
        }
    }
    letterLogs.sort((a,b) => {
        if (a[1] === b[1]) return a[0].localeCompare(b[0]);
        else return a[1].localeCompare(b[1]);
    });
    letterLogs = letterLogs.map(log => log.join(" "));
    return [...letterLogs, ...digitLogs];
    // T.C: O(Nlog(N) + KN) , N = # of logs, K = maximum length of a log
    // S.C: O(N)
};