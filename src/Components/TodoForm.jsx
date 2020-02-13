import React, { useState } from "react";

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const updateValue = e => {
        setValue(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        let newTodo = {
            id: new Date().getTime(),
            task: value,
            completed: false
        };
        addTodo(newTodo);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <input
                    className="form-control form-control-lg"
                    type="text"
                    onChange={updateValue}
                    value={value}
                    placeholder="Add Your Todo here :)"
                />
            </div>
            <div className="row">
                <button className="btn btn-primary myBtn"> Add Todo </button>
            </div>
        </form>
    );
}

export default TodoForm;
