import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
const Player = () => {
    const currSong = useSelector((state)=>state.song.value)
    if(!currSong){
        return <></>
    }
  return (
    <AudioPlayer
    className='fixed bottom-0 w-full'
    autoPlay
    src={`/mp3/song-${currSong.id}.mp3`}
    onEnded={handleSongEnd}
    // other props here
  />
  )
}

export default Player