import React from 'react'
import { useSelector } from 'react-redux'
import NotFound from './NotFound'
import songs from '../data'

const SingleSong = () => {
    const songIndex = useSelector((state) => state.song.value)
    
    return (
        <>
            <div className='container px-5 text-center min-h-screen flex items-center w-full justify-center'>
                <div className='md:w-2/3 w-full'>
                    <img src={`/cover/cover-${songIndex+1}.jpg`} alt={songs[songIndex].name} className='mx-auto mb-5 rounded-md' width={250} />
                    <h2 className='text-xl font-bold'>{songs[songIndex].name}</h2>
                </div>


            </div>

        </>
    )
}

export default SingleSong