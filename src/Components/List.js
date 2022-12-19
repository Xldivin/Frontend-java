import React from 'react'

function List({user}) {
  return (
    <ul class="list">
    <li class="list-item">
      <div class="list-item-content">
        <h4 className='name'>{user.firstname}</h4>
      </div>
      <div>
        <p className='role'>{user.role}</p>
      </div>
    </li>
    </ul>
  )
}

export default List