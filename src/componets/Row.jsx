import { useEffect, useState } from 'react'
import './Row.css'
import axios from '../api/axios'
import MovieModal from './MovieModal';


const Row = ({title, id, fechUrl}) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setmovieSelected] = useState({})

  const handleclick = (movie) => {
    setModalOpen(true);
    setmovieSelected(movie);
  }
  

  useEffect(() => {
      const fetchMoviesData = async () => {
      const response = await axios.get(fechUrl);
      setMovies(response.data.results);
    }

    fetchMoviesData();
  }, [fechUrl])

  

  return (
    <div>
      <h2 className='poster_title'>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'
            onClick={
              () => {
                document.getElementById(id).scrollLeft -= window.innerWidth -80;
              }
            }
          >
            {"<"}
          </span>
        </div>
        <div id={id} className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className='row__poster'
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleclick(movie)}
          />
        ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'
            onClick={
              () => {
                document.getElementById(id).scrollLeft += window.innerWidth -80;
              }
            }
          >
            {">"}
          </span>
        </div>

      </div>

            {modalOpen ?
              <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            :null}

    </div>
  )
}

export default Row