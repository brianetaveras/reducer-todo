import React, {useState} from 'react';

const TodoForm = ({addItem}) =>{

    const [item, setItem] = useState({item: ''})

    const handleChange = (e) =>{
        setItem(e.target.value)
    }

    return (
        <div className="todo-form">
            <form 
            onSubmit={(e)=>{
                e.preventDefault();
                console.log(e)
                addItem({item: item, completed: false, id: Math.random()});
                setItem({item: ''})

            }}
            onChange={handleChange}
            >
                <input value={item.item} placeholder="Type your new item and hit [Enter] " type="text"/>
            </form>
        </div>
    );
}

export default TodoForm;