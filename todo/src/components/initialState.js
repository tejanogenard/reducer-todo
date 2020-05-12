import id from 'uuid/v4';

const initalState = [
    {
        id: id(),
        task: 'Learn React', 
        details: "learn react for lambda school!",
        completed: false
    },
    {
        id: id(),
        task: 'Learn Reducer', 
        details: "learn the Reducer Method",
        completed: false
    },
    {
        id: id(),
        task: 'Learn to learn', 
        details: "look for new ways for learning how to learn",
        completed: false
    },
    {
        id: id(),
        task: 'Reduce re-use reducer', 
        details: "Learn how to reduce re-use the reducer",
        completed: false
    },
    {
        id: id(),
        task: 'task', 
        details: 'task details',
        completed: false
    },
    {
        id: id(),
        task: 'another task', 
        details: 'another task details',
        completed: false
    },
]

export default initalState