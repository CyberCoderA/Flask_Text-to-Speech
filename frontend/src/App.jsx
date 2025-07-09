import { useState } from 'react'
import axios from 'axios';

function App() {
  const [text, setText] = useState("");
  const [isPlaying, setPlayingState] = useState(false);

  async function text_to_speech(){
    try {
      if (text.length == 0) {
        alert("No text provided!");
        return;
      }
      
      setPlayingState(true);
      const response = await axios.get(`http://127.0.0.1:5000/api/text-to-speech?text=${text}`);
      setPlayingState(false);

      console.log(`"${response.data}" has been spoken.`);
      setText("")
    } catch(error) {
      console.log(error)
    }
  }

  const renderPlayButton = () => {
    if (!isPlaying) {
      return(
        /* Play Button */
        <button type='submit' className='border-2 border-indigo-600 rounded py-1 px-2 hover:cursor-pointer hover:bg-indigo-600'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4f46e5" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </button>
      )
    } else {
      return (
        /* Pause Button */
        <button type="submit" className="group border-2 border-indigo-600 rounded py-1 px-2 hover:cursor-pointer hover:bg-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4f46e5" className="size-8 group-hover:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        </button>
      )
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-200 justify-between items-center">
      <div className='flex justify-between items-center px-5 h-20 lg:h-30 w-full bg-white shadow-md'>
        <h1 className='font-extrabold text-indigo-600 text-xl lg:text-4xl'>T2S</h1>
      </div>

      <div className='flex justify-between items-start p-5 bg-white shadow-md rounded-2xl h-200 w-300'>
        <textarea placeholder='Type or paste your text here...' id='text-field' value={text} className='h-full w-full pr-3 pb-3 mr-2 flex align-top text-2xl focus:outline-none' onChange={(e) => {setText(e.target.value)}}/>

        <div className='flex justify-end hover:cursor-pointer' onClick={() => {setText("")}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      <div className='flex justify-between items-center h-24 w-full px-5 bg-white shadow-md'>
        <div className='flex gap-5 justify-between items-center'>
          <button type="button" className='py-1 px-2 hover:cursor-pointer hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#737373" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          <button type="button" className='py-1 px-2 hover:cursor-pointer hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#737373" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>

        <form onSubmit={(e) => {e.preventDefault(); text_to_speech();}} className='flex gap-5 justify-between items-center'>
          {/* Next Button */}
          <button type="submit" className="group border-2 border-indigo-600 rounded py-1 px-2 hover:cursor-pointer bg-white hover:bg-indigo-600">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="#4f46e5"
              className="size-8 group-hover:stroke-white"
            >

            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </button>

          {
            renderPlayButton()
          }


          {/* Next Button */}
          <button type="submit" className="group border-2 border-indigo-600 rounded py-1 px-2 hover:cursor-pointer bg-white hover:bg-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#4f46e5"
              className="size-8 group-hover:stroke-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
            </svg>
          </button>
        </form>

        <div className='flex gap-5 justify-between items-center'>
          <button type='button' className='py-1 px-2 hover:cursor-pointer hover:bg-gray-100'>
            <h1 className='text-xl text-gray-600 hover:text-gray-800'>1.0x</h1>
          </button>

          <button type="button" className='py-1 px-2 hover:cursor-pointer hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#737373" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>
          </button>

          <button type="button" className='py-1 px-2 hover:cursor-pointer hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#737373" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;