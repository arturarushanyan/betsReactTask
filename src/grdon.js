APP > BACKLOG,STATISTICS

let count = -1;
const generatetodo = ()=>{
    count++;
    return {
        'ggdf': {
            d: 43432,
            title: 'fdsfdsfd',
            ...other shit
        }
    }
}

// app
app -> state(todos: [])

didmount(){
    let newState = {
        ...this.state,
        ...generateNewTodo(),
        "444343": {
            ...this.state[45554],
            completed: true
        }
    }
    this.intervalID = setInterval(()=>{
        this.setState(generatetodo(),5000)
    })
}

//todolist

render(){
    let {todos,proirity} = this.props;
    filtershit
    ul -> todolistitem
}