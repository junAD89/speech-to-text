import { useState } from 'react'
import './App.css'
import ShowTextcomponent from "./components/ShowText.component";
import UserSpeechTransciptcompent from './components/UserSpeech-Transcipt.compent';
import NavBarComponent from './components/NavBar.component';
function App() {

  return (
    < >
      <NavBarComponent />

      <div
        style={{
          backgroundColor: "#212227"
        }}
        className=' h-screen flex flex-col items-center justify-center'>

        <ShowTextcomponent />


        <UserSpeechTransciptcompent />

      </div>

    </>
  )
}

export default App
