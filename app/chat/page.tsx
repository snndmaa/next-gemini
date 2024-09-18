"use client"
import React, { useState } from 'react';
import TextModal from '../components/textModal';
import { chatWithGemini } from '../utils/geminiChat';

function Chat() {
  const [ mailBody, setMailBody ] = useState<string>('');
  const [ openModal, setOpenModal ] = useState<boolean>(false);
  const [ parsedData, setParsedData ] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMailBody(e.target.value)
  } 

  const handleButtonClick = async(e) => {
    const response = await chatWithGemini(`Extract identifying information from this message and return a message asking for confirmation to record it with the info and title listed: ${mailBody}`)
    setParsedData(response)
    setOpenModal(true)
  }

  return (
    <div className='bg-gray-800 w-full h-screen flex justify-center items-center'>
      <div className='w-2/5 flex flex-col justify-center items-center'>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-white">Vanquish Mail Parser</label>
        <textarea value={mailBody} onChange={handleTextChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste email here..."></textarea>
        <br />
        <button type="button" onClick={handleButtonClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </div>

      <TextModal openModal={openModal} setOpenModal={setOpenModal} parsedData={parsedData}/>
    </div>
  )
}

export default Chat