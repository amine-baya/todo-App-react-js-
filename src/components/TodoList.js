import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
const TodoList = (props) => {

    const [todos,setTodos] = useState([])


    useEffect(()=>{
        const temp = localStorage.getItem(`${props.localstorage}`)
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            setTodos(loadedTodos)
        }

    },[props.localstorage])

    useEffect(()=>{
        const temp = JSON.stringify(todos)
        localStorage.setItem(`${props.localstorage}`,temp)
    },[props.localstorage,todos])


    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo,...todos]
        setTodos(newTodos)
    }

    const updateTodo = (todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev=>prev.map(item => item.id === todoId ? newValue : item))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo=>todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo= id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id ){
                todo.iscompleted = !todo.iscompleted
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} completeTodo={completeTodo}  />
        </div>
    )
}

export default TodoList

