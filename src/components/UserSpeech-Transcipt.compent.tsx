import { useTranscript } from '../contexts/transcipt.context';

export default function UserSpeechTransciptcompent() {
    const { transcriptText, setTranscriptText } = useTranscript();

    return (
        <div className="w-full">
            <div className="card bg-white/10 backdrop-blur-lg shadow-xl transition-all hover:shadow-2xl">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-bold text-white mb-4">
                        User Speech
                    </h2>
                    <div className="bg-gray-800/50 rounded-lg p-4 min-h-[150px] text-gray-300">
                        {/* ✅ Affiche le texte dans la belle zone */}
                        {transcriptText ? (
                            <p className="text-white text-lg leading-relaxed">
                                {transcriptText}
                            </p>
                        ) : (
                            <p className="text-gray-400 italic">
                                Your speech will appear here...
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* ✅ Optionnel : Zone de debug (tu peux la retirer) */}
            <div className="mt-4 text-white text-sm">
                Debug: {transcriptText || "No text yet"}
            </div>
        </div>
    )
}
