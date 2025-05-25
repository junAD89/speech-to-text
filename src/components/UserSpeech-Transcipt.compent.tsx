import React from 'react'

export default function UserSpeechTransciptcompent() {
    return (
        <div className="w-full">
            <div className="card bg-white/10 backdrop-blur-lg shadow-xl transition-all hover:shadow-2xl">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-bold text-white mb-4">
                        User Speech
                    </h2>
                    <div className="bg-gray-800/50 rounded-lg p-4 min-h-[150px] text-gray-300">
                        {/* Transcript content will go here */}
                    </div>
                </div>
            </div>
        </div>
    )
}
