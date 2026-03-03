
import React, { useState } from 'react'
import './App.css'

function App() {

  const [point, setPoint]=useState(0)
  const [win, setWin]=useState("")
  const [win2, setWin2]=useState("")
  const [color, setColor]=useState("black")
  const [color2, setColor2]=useState("black")
    


  



   

  const dcr=()=>{
    
      setPoint(point-1)
      if(point==-10){
        setPoint(point)
      }
      if(point===-9){
      setWin("You won")
      setWin2("You lost")
      }
      if(point==-9){
        setColor("blue")
        setColor2("red")

      }
   
  }

  const icr=()=>{
    
       setPoint(point+1)
       if(point==10){
        setPoint(point)
       }
       if(point==9){
        setWin2("You won")
        setWin("You lost")
       }
      if(point==9){
         setColor("red")
         setColor2("blue")
      }
  }



  

  return (
    <>
    <div className="w-full h-screen bg-black flex wrap justify-center items-center">
      <div className="p-2 bg-white backdrop-blur-lg rounded-2xl">
        <div className=''>
          <button  onClick={dcr} className="bg-red-600 px-30 py-2 text-2xl rounded-2xl text-white cursor-pointer">-1</button>
        </div>
        <div className='text-center'>
                    <p className='p-10 text-2xl text-center' style={{color:color}} >{win}</p>
                    <p className='p-10 text-2xl text-center'>{point}</p>
                    <p className='p-10 text-2xl text-center hidden'>{}</p>
                    <p className='p-10 text-2xl text-center' style={{color:color2}}>{win2}</p>

        </div>
        <div>
          <button onClick={icr} className="bg-blue-600 px-29  rounded-2xl py-2 text-2xl text-white ">+1</button>
        </div>



      </div>

    </div>

    </>
  )
}

export default App
