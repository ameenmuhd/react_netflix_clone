import React, { useEffect, useState } from 'react'
import './Row.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube';

function Row(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('ERROR')
    })
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('null');
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="poster" className={props.isSmall ? 'smallPoster' : 'poster'} />
          )}
        </div>
        {urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default Row