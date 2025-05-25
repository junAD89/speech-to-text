import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useTranscript } from "../contexts/transcipt.context";
import { useEffect } from 'react';

export default function ShowTextcomponent() {
    const { transcriptText, setTranscriptText } = useTranscript(); // ✅ Ajoute transcriptText
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startListening = () => SpeechRecognition.startListening({
        continuous: true,
        language: 'en-US'
    });

    useEffect(() => {
        setTranscriptText(transcript)
    }, [transcript, setTranscriptText])

    return (
        <div className="space-y-6">
            <div className="card bg-white/10 backdrop-blur-lg shadow-xl transition-all hover:shadow-2xl">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-bold text-white mb-4">
                        Text to Read
                    </h2>
                    <div className="bg-gray-800/50 rounded-lg p-4 min-h-[100px]">
                        {/* ✅ Affiche le texte ici ! */}
                        <p className="text-white text-lg">{transcriptText || "Start speaking to see your text here..."}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                {listening ?
                    <div className="text-center">
                        <p className="text-white mb-4">
                            Talk now
                        </p>
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
        </div>
    )
}
