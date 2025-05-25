import { useState } from 'react'
import './App.css'
import ShowTextcomponent from "./components/ShowText.component";
import UserSpeechTransciptcompent from './components/UserSpeech-Transcipt.compent';
import NavBarComponent from './components/NavBar.component';


import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import { TransciptProvider } from "./contexts/transcipt.context";

function App() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-US'
  });
  return (
    <>

      <TransciptProvider>
        <NavBarComponent />
        <main
          className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4"
        >
          <div className="container mx-auto max-w-4xl space-y-8">
            <ShowTextcomponent />
            <UserSpeechTransciptcompent />
          </div>
        </main>



        <div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button onClick={startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <p>{transcript}</p>
        </div>

      </TransciptProvider>

    </>
  )
}

export default App
