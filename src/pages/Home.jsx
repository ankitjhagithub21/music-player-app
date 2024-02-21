import React from 'react'
import songs from '../data'
import { useDispatch } from 'react-redux'
import { setCurrSong } from '../redux/slices/songSlice'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick  = (song) =>{
    navigate(`/song/${song.id}`)
    dispatch(setCurrSong(song))
  }
  return (
    <section>
  <div className="container px-5 py-24 mx-auto">
  
    <div className="flex flex-wrap">
     {
      songs.map((song)=>{
        return  <div className="p-3 lg:w-1/6 md:w-1/3 w-1/2 cursor-pointer" key={song.id} onClick={()=>handleClick(song)}>
       <img
            alt={song.name}
            className="w-full rounded-lg"
            src={`/cover/cover-${song.id}.jpg`}
          />
      </div>
      })
     }
      
    </div>
  </div>
</section>

  )
}

export default Home