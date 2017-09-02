let tasks = [
    {title: "Create smth", assignee: 'John'},
    {title: "Create smth else", assignee: 'John'},
    {title: "do smth", assignee: 'Adam'},
    {title: "Create more smth", assignee: 'Ann'},
    {title: "Create smthjjjj", assignee: 'John'},
    {title: "Create more smth", assignee: 'Ann'}
 ];

let reducedTasks = tasks.reduce((stats,task) => {
	stats[task.assignee] = stats[task.assignee] || [];
    stats[task.assignee]++;
	return stats;

},{});

let final = Object.keys(reducedTasks).map(function(key) {
    return { assignee: key, doneTasks: reducedTasks[key] };
});


console.log('finaltasks',reducedTasks);
console.log('finaltasks',final);