import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay"

const App = () => {
  const[isGameStarted,setisGameStarted]=useState(false)
  const toggleGamePlay = ()=>{
    setisGameStarted(!isGameStarted)
  }
  return (
    <>
    {isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App