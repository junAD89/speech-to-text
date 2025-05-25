import React from 'react'

export default function ShowTextcomponent() {
    return (
        <>
            <div className=' flex flex-col items-center justify-center '>
                <div
                    ///conteneur of Text to read
                    className="bg-blue-500 card bg-base-100 w-96 shadow-sm"
                >
                    <div className="card-body">
                        <h1 className='justify-center text-black-600  card-title'>
                            Text to read
                        </h1>
                    </div>

                </div>

                <div>
                    <button className='btn w-40 h-14 bg-blue-500 m-10 rounded-xl text-4xl border-none '>
                        <h1 className=''>

                            Start
                        </h1>

                    </button>
                </div>
            </div>
        </>
    )
}
