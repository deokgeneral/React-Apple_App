/* eslint-disable react/prop-types */
import { imgBasePath } from "../constant"
import "./index.css";

const MovieModal = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_data,
    vote_average,
    setModalOpen,
}) => {
  return (
    <div className="presentation" role="presentation">
        <div className="wrapper-modal">
            <div className="modal">
                <span
                onClick={() => setModalOpen(false)}
                className="modal-close"
                >
                    X
                </span>

                <img
                className="modal__poster-img"
                src={`${imgBasePath}${backdrop_path}`}
                alt="modal_poster-img"
                />
                <div className="modal__content">
                <p className="modal__details">
                    <span> 100% for you </span>
                    {release_date ? release_date : first_air_data}
                </p>
                <h2 className="modal_title">
                {title ? title : name}
                </h2>
                <p className="modal_overview">평점: {vote_average.toFixed(1)}</p>
                <p className="modal_overview">{overview}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieModal