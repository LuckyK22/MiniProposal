
import './App.css'
import { useState } from 'react'
import first from "./1.mp4"

function App() {

  const [ text, setText ] = useState("Do You Love Me ?")
  const [ image, setImage ] = useState('https://media1.tenor.com/m/bBBciyLH9dgAAAAC/cony-rabbit.gif')
  const [ enable, setEnable ] = useState(false)
  const [ no , setNo ] = useState("No")

  const Reject = [
    {
      image : "https://media.tenor.com/vjTzvpw95mwAAAAi/admire-holic.gif",
      name : "Sure ?"
    },
    {
      image : "https://media1.tenor.com/m/ILfXs8b6hagAAAAC/heart-in-love.gif",
      name : "Think it Twice",
    },
    {
      image : "https://media1.tenor.com/m/Kuu1H6FxX_gAAAAC/cutie-smiling.gif",
      name : "Are you Sure ?"
    },
    {
      image : "https://media.tenor.com/2X9f85ds0kkAAAAi/lovey-dovey-adorable.gif",
      name : "Do you Wanna Lose me ?"
    },
    {
      image : "https://media.tenor.com/JHJUVySX_4YAAAAi/dovey-bunny-bite-butt-bite-butt.gif",
      name : "You are not want to be mine ?"
    },
    {
      image : "https://media.tenor.com/idA5k-ZOELMAAAAi/milk-and-mocha.gif",
      name : "I will cry !"
    }
  ]

  const ChangeRejectedText = () => {
    const randomNumber = Math.floor(Math.random() * Reject.length);
    setText(Reject[randomNumber].name);
    setImage(Reject[randomNumber].image);
  }
  
  const ChangeAcceptedText = () => {
    setText("I knew it! deep inside you love me :-)")
    setImage("https://media1.tenor.com/m/PmCzgZ6Z7qEAAAAC/eandl.gif")
    setEnable(true)
    setNo("I Love you Too")
  }


  return (
    <>
      <div>
      <img className='w-48 rounded-xl m-auto' src={image} autoPlay={true} loop={true}/>
      <div className='mt-2 text-2xl font-semibold'>
        {text}
      </div>
        <div className='mt-5'>
        <button type="button" className={enable ? "mx-5 focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-pink-600 dark:pink:bg-purple-700 dark:focus:ring-purple-900" : "mx-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"}
        onClick={ChangeRejectedText}
        disabled={enable}
        >
          {no}
        </button> 
        <button type="button" className="mx-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={ChangeAcceptedText}
        >
          Yes
        </button>
        
        </div>
      </div>
    </>
  )
}

export default App
