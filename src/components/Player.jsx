import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import songs from "../data.js";
import { setCurrSongIndex } from '../redux/slices/songSlice.js';

const Player = () => {
    const currSongIndex = useSelector((state) => state.song.value);
    const dispatch = useDispatch();

    const handleSongEnd = () => {
        if (currSongIndex < songs.length - 1) {
            dispatch(setCurrSongIndex(currSongIndex + 1));
        } else {
            dispatch(setCurrSongIndex(0));
        }
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
