import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import TodoList from './components/TodoList'

function App() {
  const [listTodo, setListTodo] = useState([])
  const addList = (inputText) => {
       setListTodo([...listTodo, inputText])
  }

  const deleteItem = (item) => {
    setListTodo(listTodo.filter((e) => {
      return e !== item;
       }))
  }
  return (
    <>
      <div className='main-container'>
        <div className='center-container'>
          <Todos addList={addList} />
          {listTodo.map((item, i) => {
            return (
              <TodoList key={i} index={i} item={item} deleteItem = {deleteItem} />
             )
           })}
        </div>
     </div>
    </>
  )
}

export default App
