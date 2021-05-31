import React, {useState, useEffect} from 'react'
import ToDoList from './ToDo/ToDoList'
import '../style/base.css'
import Context from './Context/Context'
import AddToDoItem from './ToDo/AddToDoItem'
import Loader from './Loader'

const App = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://run.mocky.io/v3/a32632dc-66b6-4af0-bb3c-34c9cfcde48a')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
                setLoading(false)
            })
    }, [])

    function toggleToDo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeToDo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addToDo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false,
                },
            ])
        )
    }

    return (
        <Context.Provider value={{removeToDo}}>
            <div className='wrapper'>
                <h1>TO DO LIST</h1>
                <AddToDoItem onCreate={addToDo} />
                {loading && <Loader />}
                {todos.length ? <ToDoList todos={todos} onToggle={toggleToDo} /> : loading ? null : <p>TO DO LIST IS EMPTY:)</p>}
            </div>
        </Context.Provider>
    )
}

export default App
