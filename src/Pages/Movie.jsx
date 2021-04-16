import React, { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from '../Components/Nav';

const Movie = (props) => {

    const [movie, setMovie] = useState();

    useEffect(() => {
        loadMovie();
    }, []);
    
    const loadMovie = () => {
        axios.get(`http://api.tvmaze.com/shows/${props.match.params.id}`)
        .then(Response => {
            setMovie(Response.data);
        })
    }

    return ( 
        <>
            <Nav/>
            <div className="movie">
                <Link to={`/`}><button className="button">Back</button></Link>
                {
                    movie &&
                    <div className="info">
                        <div className="photo"><img src={movie.image.original} alt={movie.name}></img></div>
                        <div className="det">
                            <h1>{movie.name}</h1>
                            <p><span>language : </span> {movie.language}</p>
                            <div className="genres">
                                <p><span>genres :  </span> </p>
                                {
                                <ul>
                                    {movie.genres.map(el => <li key={el}>{el},</li>)}
                                </ul>
                                }
                            </div>
                            <p><span>Publish Date : </span>{movie.premiered}</p>
                            <p><span>Rating : </span>{movie.rating.average}</p>
                            <p className="descripe" dangerouslySetInnerHTML = {{__html:movie.summary}}></p>
                        </div>
                    </div>
                }
            </div>
        </>
     );
}
 
export default Movie;