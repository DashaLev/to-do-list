import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../Context/Context'

const ToDoItem = ({todo, index, onChange}) => {
    const {removeToDo} = useContext(Context)

    return (
        <li className={todo.completed ? 'done-li' : ''}>
            <span className={todo.completed ? 'done-span' : ''}>
                <input type='checkbox' onChange={() => onChange(todo.id)} checked={todo.completed} />
                <strong>{index + 1}.</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='delete-btn' onClick={() => removeToDo(todo.id)}>
                X
            </button>
        </li>
    )
}
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}
export default ToDoItem
