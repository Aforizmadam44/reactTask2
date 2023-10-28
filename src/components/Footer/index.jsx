import  { useContext } from 'react'
import { DataContext } from '../DataContext'
const Footer= () => {
    const {username, email}= useContext(DataContext)
  return (
    <div>
        <h1 style={{textAlign:"center", color:"darkychan"}}>{username}</h1>
        <h3 style={{textAlign:"center"}}>{email}</h3>
    </div>
  )
}

export default Footer