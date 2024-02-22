import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrSongIndex } from '../redux/slices/songSlice';
import { useNavigate } from 'react-router-dom';
import songs from '../data';
import { MdSkipNext,MdSkipPrevious } from "react-icons/md";

const SingleSong = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const songIndex = useSelector((state) => state.song.value);
    const [song, setSong] = useState(songs[songIndex]);

    const handleDownload = async () => {
        try {
            const response = await fetch(song.path);
            const blob = await response.blob();

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${song.name}.mp3`;

            // Append the link to the document
            document.body.appendChild(link);

            // Trigger a click event on the link
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };

    const playNextSong = () => {
        let nextIndex = (songIndex + 1) % songs.length;
        dispatch(setCurrSongIndex(nextIndex));
        setSong(songs[nextIndex]);
        navigate(`/song/${songs[nextIndex].name.replace(/\s+/g, '-')}`);
    };

    const playPrevSong = () => {
        let prevIndex = songIndex === 0 ? songs.length - 1 : songIndex - 1;
        dispatch(setCurrSongIndex(prevIndex));
        setSong(songs[prevIndex]);
        navigate(`/song/${songs[prevIndex].name.replace(/\s+/g, '-')}`);
    };

    return (
        <div className='container px-5 text-center min-h-screen flex items-center w-full justify-center'>
            <div className='md:w-2/3 w-full flex flex-col gap-3 items-center justify-center'>
                <div className='album'>
                <img src={`/cover/cover-${songIndex + 1}.jpg`} alt={song.name} className='mx-auto rounded-full p-3' width={300} />
                </div>
                <h2 className='text-xl font-bold'>{song.name}</h2>
                <div className='flex items-center justify-center gap-2'>
                    <button onClick={playPrevSong}>
                        <MdSkipPrevious size={40}/>
                    </button>
                    <button onClick={handleDownload}>
                        <img src='/download.png' alt='download' width={35} />
                    </button>
                    <button onClick={playNextSong}>
                    <MdSkipNext size={40}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleSong;
