import React from 'react'
import { useSelector } from 'react-redux'


const SingleSong = () => {
    const currSong = useSelector((state) => state.song.value)
    
    return (
        <>
            <div className='container px-5 text-center min-h-screen flex items-center w-full justify-center'>
                <div className='md:w-2/3 w-full'>
                    <img src={`/cover/cover-${currSong.id}.jpg`} alt={currSong.name} className='mx-auto mb-5 rounded-md' />
                    <h2 className='text-xl font-bold'>{currSong.name}</h2>
                </div>


            </div>

        </>
    )
}

export default SingleSong