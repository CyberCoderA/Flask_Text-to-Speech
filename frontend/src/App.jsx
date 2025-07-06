import { useState } from 'react'
import axios from 'axios';

function App() {
  const [text, setText] = useState({});

  const text_to_speech = async() => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/text-to-speech?text=${text}`);

      console.log(`"${response.data}" has been spoken.`);
    } catch(error) {
      
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-200 justify-between items-center">
      <div className='flex justify-between items-center px-5 h-20 lg:h-30 w-full bg-white shadow-md'>
        <h1 className='font-extrabold text-xl lg:text-4xl'>Text-to-Speech</h1>
      </div>

      <input type="text" placeholder='Type or paste your text here...' id='text-field' className='border-2 w-100 p-3 mr-2 rounded'  onChange={(e) => {setText(e.target.value)}}/>

      <div className='flex justify-center items-center h-20 w-full bg-white shadow-md'>
        <form onSubmit={(e) => {e.preventDefault(); text_to_speech();}} className='flex items-center'>
          <button type='submit' className='border-2 border-black rounded py-1 px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default App;