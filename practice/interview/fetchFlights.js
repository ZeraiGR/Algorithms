// Функция поиска вариантов перелётов из точки
/*
    from: string
    return: Promise<string[]>
*/
function fetchFlights (from) {
    const graph = {'A': ['B', 'D'], 'B': ['C', 'N', 'Z'], 'D': ['E', 'F'], 'F': ['S']};

    if (Array.isArray(graph[from])) {
        return Promise.resolve(graph[from]);
    } else {
        return Promise.resolve([]);
    }
}

// Например, для
// graph = {A: [B, D], B: [C, N, Z], D: [E, F], F: [S]}

findPath('A', 'N', fetchFlights).then(console.log); // Promise.resolve(['A', 'B', 'N'])
findPath('A', 'S', fetchFlights).then(console.log); // Promise.resolve(['A', 'D', 'F', 'S'])
findPath('B', 'S', fetchFlights).catch(console.log); // Promise.reject(new Error('No way'))

// Функция поиска составного авиабилета
function findPath(from, to, fetchFlights) {
    return new Promise(async (resolve, reject) => {
        const res = [];
        const history = {};
        const stack = [from];

        while (stack.length > 0) {
            const pos = stack.pop();
            const arr = await fetchFlights(pos);

            if (arr.length > 0) {
                for (const item of arr) {
                    history[item] = pos;
                    stack.push(item);

                    if (item === to) {
                        res.push(item);
                        let cur = item;
                        while(history[cur]) {
                            res.push(history[cur]);
                            cur = history[cur];
                        }
                        res.reverse();
                        resolve(res);
                    }
                }
            }
        }

        reject('No way');
    });
}