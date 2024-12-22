import React from 'react'

function TodoList(props) {
  return (
      <li className='list-item'>
          {props.item}
          <span className='icons'>
              <li className="fa-solid fa-trash-can icon-delete" onClick={e => {
                  props.deleteItem(props.item)
              }}></li>
          </span>
      </li>
  )
}

export default TodoList