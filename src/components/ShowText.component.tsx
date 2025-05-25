export default function ShowTextcomponent() {
    return (
        <div className="space-y-6">
            <div className="card bg-white/10 backdrop-blur-lg shadow-xl transition-all hover:shadow-2xl">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-bold text-white mb-4">
                        Text to Read
                    </h2>
                    <div className="bg-gray-800/50 rounded-lg p-4 min-h-[100px]">
                        {/* Text content will go here */}
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="btn btn-primary btn-lg transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-600 border-none text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-500/50">
                    <span className="text-2xl">Start</span>
                </button>
            </div>
        </div>
    )
}
