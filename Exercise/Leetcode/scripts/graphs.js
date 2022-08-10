/**
 * Graph
*/


/*----------Course Schedule-----------*/
const canFinish = (numCourses, prerequisites) => {
    const graph = Array.from(Array(numCourses), () => []);
    const ranks = Array(numCourses).fill(0);
    for (const [u,v] of prerequisites) {
        graph[v].push(u);
        ++ranks[u];
    }
    const queue = [];
    //push nodes with no dependency (rank 0) to queue
    ranks.forEach((r, i) => {
        if (!r) queue.push(i);
    })
    //bfs kahn
    while (queue.length) {
        const f = queue.shift();
        --numCourses;
        //reduce neighbour rank by 1
        //push nodes with no dependency (rank 0) to queue
        graph[f].forEach(neigh => {
            if (!--ranks[neigh]) queue.push(neigh);
        })
    }
    return !numCourses;
}

console.log(canFinish(2, [[1,0], [0,1]]));