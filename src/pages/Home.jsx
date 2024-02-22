import React from 'react'
import songs from '../data'
import { useDispatch } from 'react-redux'
import { setCurrSongIndex } from '../redux/slices/songSlice'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick  = (index) =>{

    navigate(`/song/${songs[index].name.replace(/\s+/g, '-')}`);
    dispatch(setCurrSongIndex(index))
  }
  return (
    <section>
  <div className="container px-5 py-24 mx-auto">
  
    <div className="flex flex-wrap">
     {
      songs.map((song,index)=>{
        return  <div className="p-3 lg:w-1/6 md:w-1/3 w-1/2 cursor-pointer" key={song.id} onClick={()=>handleClick(index)}>
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