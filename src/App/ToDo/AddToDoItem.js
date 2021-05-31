import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddToDoItem = ({onCreate}) => {
    const [newToDo, setNewToDo] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (newToDo.trim()) {
            onCreate(newToDo)
            setNewToDo('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text' value={newToDo} onChange={event => setNewToDo(event.target.value)} />
            <button className='add-btn' type='submit'>
                Add to do item
            </button>
        </form>
    )
}

AddToDoItem.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddToDoItem
