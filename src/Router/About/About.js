import React from 'react'
import './About.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../context/userSlice'

function About() {



  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [surName, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')



    const handleSumbit = (e) => {
    e.preventDefault()

    let newUsers = {
      id: new Date().getTime(),
      name,
      surName,
      email,
      url,
    }

    setName('')
    setSurname('')
    setEmail('')
    setUrl('')
    dispatch(addToUsers(newUsers))
  }




  return (
    <div className='About' >


      <h2>Create user</h2>


<form onSubmit={handleSumbit}>
      <div className="input">
        <p>User Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder='Name' />
      </div>

      <div className="input_2">
        <p>SurName</p>
        <input value={surName} onChange={(e) => setSurname(e.target.value)} type="text" placeholder='SurName' />
      </div>

    
      <div className="input_3">
        <p>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
      </div>

      <div className="input_4">
        <p>U.R.L</p>
        <input value={url} onChange={(e) => setUrl(e.target.value)} type="url" placeholder='Url' />
      </div>

      <button type='Submit' >Submit</button>
      </form>

    </div>
  )
}

export default About