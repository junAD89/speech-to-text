import './App.css'
import ShowTextcomponent from "./components/ShowText.component";
import UserSpeechTransciptcompent from './components/UserSpeech-Transcipt.compent';
import NavBarComponent from './components/NavBar.component';



import { TransciptProvider } from "./contexts/Transcipt.context";
import { useEffect, useState } from 'react';
import SignUp from './UserAuth/SignUp';


// Import Firebase initialization
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { app } from "./firebase-config";

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);


function App() {


  const [userAuthState, setUserAuthState] = useState(false)



  // on verifie si user est deja auth ou pas grace au  local storage 
  // et apres on attribue au state en fonction 
  //  
  useEffect(() => {


    if (localStorage.getItem("userAuthState") === "true") {
      setUserAuthState(true)
    } else {

      setUserAuthState(false)

    }
  }, [])


  // si le state est false on affiche le composant SignUp
  if (!userAuthState) {
    return <SignUp />
  }


  // sinon le code continue sa route et affiche 
  //  le reste de la page
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
      </TransciptProvider>


    </>
  )
}

export default App
