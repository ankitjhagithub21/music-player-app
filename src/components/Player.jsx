import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import songs from "../data.js";
import { setCurrSongIndex } from '../redux/slices/songSlice.js';
import { useNavigate } from 'react-router-dom';

const Player = () => {
    const currSongIndex = useSelector((state) => state.song.value);
    const dispatch = useDispatch();
     const navigate = useNavigate()
    const handleSongEnd = () => {
        if (currSongIndex < songs.length - 1) {
            dispatch(setCurrSongIndex(currSongIndex + 1));
            
        } else {
            dispatch(setCurrSongIndex(0));
        }
        navigate(`/song/${songs[currSongIndex].name.replace(/\s+/g, '-')}`);
    };

    
    return (
        <AudioPlayer
            className='fixed bottom-0 w-full'
            src={songs[currSongIndex].path}
            onEnded={handleSongEnd}
            
            
        />
    );
};

export default Player;
