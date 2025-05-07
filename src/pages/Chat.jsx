import React, { useEffect, useState } from 'react'
import {db} from '../Firebase'
import { collection, onSnapshot } from 'firebase/firestore'

function Chat() {

  const[users, setUsers] = useState([])
  const[messages, setMessages] = useState([])

  useEffect(()=>{
    const fetchUsers =  ()=>{
        const userCollection = collection(db, "users")
      
        onSnapshot(userCollection, (snapshot)=>{
          const userList = snapshot.docs.map(doc=>doc.data())
          setUsers(userList)
          console.log(userList)
        })
    };
    fetchUsers();
  },[])


  

  return (
    <>
      <h1>Chat Room</h1>

      <div>
          {users.map((usr, index)=>(<p key={index}>{usr.name}</p>))}
      </div>

      <div>
        {}
      </div>
    </>
  )
}

export default Chat