let tasks = [
    {title: "Create smth", assignee: 'John'},
    {title: "Create smth else", assignee: 'John'},
    {title: "do smth", assignee: 'Adam'},
    {title: "Create more smth", assignee: 'Ann'},
    {title: "Create smth", assignee: 'John'},
    {title: "Create more smth", assignee: 'Ann'}
 ]

let reducedTasks = tasks.reduce((stats,task) => {
	stats[task.assignee] = [];
	return stats
	
},{});

console.log('finaltasks',reducedTasks)