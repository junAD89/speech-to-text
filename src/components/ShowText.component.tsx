/**
 * ShowTextComponent - A React component for speech recognition and text comparison
 * 
 * This component provides a speech recognition interface that allows users to:
 * - Start/stop voice recording
 * - Display predefined text for reading
 * - Compare spoken text with predefined text
 * 
 * Features:
 * - Real-time speech-to-text conversion
 * - Continuous listening mode
 * - English language support
 * - Visual feedback for recording status
 * - Text comparison functionality
 */

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useTranscript } from "../contexts/Transcipt.context";
import { useEffect, useState } from 'react';

export default function ShowTextcomponent() {
    // Context hook for managing transcript text across components
    const {
        //  transcriptText, 
        setTranscriptText } = useTranscript();

    // Speech recognition hooks for managing voice input
    const {
        transcript,      // Current transcribed text
        listening,      // Boolean indicating if recording is active
        resetTranscript // Function to clear current transcript
    } = useSpeechRecognition();

    // State for storing the current word to be read
    const [wordRead, setWordRead] = useState("")

    /**
     * Starts the speech recognition with specified configuration
     */
    const startListening = () => SpeechRecognition.startListening({
        continuous: true,
        language: 'en-US'
    });

    // Update transcript text in context when transcript changes
    useEffect(() => {
        setTranscriptText(transcript)
    }, [transcript, setTranscriptText])

    // Predefined words for reading practice
    const worldLevel = [
        {
            word: "hello I'm happy",
        },
        {
            word: "I'm happy to see You",
        },
        {
            word: "Nearby to the end of the road",
        },
        {
            word: "Road is not clear",
        },
        {
            word: "I'm going to the end of the road",
        }
    ]

    // Log changes to wordRead state
    useEffect(() => {
        console.log('wordRead a changé :', wordRead);
    }, [wordRead]);

    // Initialize first word on component mount
    useEffect(() => {
        getWord();
    }, [])

    /**
     * Retrieves the first word from worldLevel array
     */
    const getWord = async () => {
        const { word } = worldLevel[0];
        setWordRead(word)
    }

    /**
     * Compares user's spoken text with the target word
     * Displays alert based on match result
     */
    const checkUserResponse = () => {
        if (wordRead === transcript) {
            console.log("Trouve")
            alert("Trouve")
        }
        else {
            console.log("Faux")
            alert("Faux")
        }
    }

    return (
        <div className="space-y-6">
            <div className="card bg-white/10 backdrop-blur-lg shadow-xl transition-all hover:shadow-2xl">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-bold text-white mb-4">
                        Read
                    </h2>
                    <div className="bg-gray-800/50 rounded-lg p-4 min-h-[100px]">
                        {/* ✅ Affiche le texte ici ! */}
                        {/* <p className="text-white text-lg">{transcriptText || "Start speaking to see your text here..."}</p> */}
                        <p>
                            {wordRead}
                        </p>



                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                {listening ?
                    <div className="text-center">
                        <button onClick={SpeechRecognition.stopListening} className="btn btn-primary btn-lg transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-red-500 to-red-600 border-none text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-red-500/50">
                            <span className="text-2xl">Stop</span>
                        </button>
                    </div>
                    :
                    <button onClick={startListening} className="btn btn-primary btn-lg transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-600 border-none text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-500/50">
                        <span className="text-2xl">Start</span>
                    </button>
                }
                <button onClick={() => {
                    resetTranscript();
                    setTranscriptText('');
                }} className="btn btn-secondary">Reset</button>
            </div>
            {/* ✅ Retire cette ligne, le texte est maintenant dans la belle zone */}


            <button
                className='btn'
                onClick={() => {
                    checkUserResponse()
                }}
            >
                Check
            </button>
        </div>
    )
}
