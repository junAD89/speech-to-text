import { useState } from 'react'
import './App.css'
import ShowTextcomponent from "./components/ShowText.component";
import UserSpeechTransciptcompent from './components/UserSpeech-Transcipt.compent';
import NavBarComponent from './components/NavBar.component';
function App() {
  return (
    <>
      <NavBarComponent />
      <main
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4"
      >
        <div className="container mx-auto max-w-4xl space-y-8">
          <ShowTextcomponent />
          <UserSpeechTransciptcompent />
        </div>
      </main>
    </>
  )
}

export default App
