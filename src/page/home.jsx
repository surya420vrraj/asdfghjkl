import React, { useCallback, useState } from 'react'
import Header from '../component/header'
import Popup from '../component/popup'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  const [show,setShow]=useState(false);
  const [shows,setShows]=useState(0);
  const addShow=useCallback(()=>{
    console.log(`${shows}`)
    setShow(true)
  },[show])
  // const addShow=()=>{
  //   console.log(`${shows}`)
  //   setShow(true)
  // }
  const handleMove=()=>{
    navigate("/dash")
  }
  const closeShow=()=>{
    setShow(false)
  }
  return (
    <div>
      <Header setShow={addShow}/>
      {show?<Popup setShow={addShow} close={closeShow}/>:<Test shows={shows} setShows={setShows}/>}
      <button onClick={handleMove}>Dash</button>
    </div>
  )
}

export default Home
const Test=({shows,setShows})=>{
  return(
    <div>
      {shows}
      <button onClick={()=>setShows(shows+1)}>test</button>
    </div>
  )
}
