import Developers from "../data";

export default function generateNewTodo() {
    return {
        id: Math.floor(1000 + Math.random() * 9000),
        priority: Math.floor( Math.random() * 3 ),
        title: 'title',
        desicription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        assigneeName: Developers[Math.floor(Math.random() * Developers.length)].name,
        assigneeID: Developers[Math.floor(Math.random() * Developers.length)].id,
        completed: false
    }
}