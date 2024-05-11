import React from 'react'
import { useSelector } from 'react-redux'
import Users from '../../Components/users/Users'
import Empty from '../../Components/Empty/Empty'
function Services() {
  let users = useSelector(state => state.users.value)
  return (
    <div>
      {
        users.length ? <Users data={users} /> : <Empty />
      }
    </div>
  )
}

export default Services