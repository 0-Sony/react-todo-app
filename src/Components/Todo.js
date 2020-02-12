import React from 'react'

function Todo({lists, completeTodo}) {

    const handleClick = (id) => {
        completeTodo(id)
    }
    return(
        lists.map(function(list){
            return <li className={"list-group-item " + (list.completed ? 'completed list-group-item-success':'')} key={list.id}>{list.task} <button onClick={()=> handleClick(list.id)} >X</button></li>
        })
    )
}

export default Todo;