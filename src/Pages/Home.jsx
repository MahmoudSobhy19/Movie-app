import React, { useEffect ,useState } from 'react';
import axios from "axios";
import Nav from '../Components/Nav';
import Card from '../Components/Card';

const Home = () => {
    const [movies, setMovies] = useState([]);

    const loadMovies = () => {
        axios.get("http://api.tvmaze.com/shows")
        .then(Response => {
            setMovies(Response.data)
        })
    }

    useEffect(() => {
        loadMovies();
    }, []);

    return ( 
        <div className="home">
            <Nav/>
            {
                movies &&
                <ul>
                    {movies.map(el => <li key={el.id}><Card {...el}/></li>)}
                </ul>
            }
        </div>
     );
}
 
export default Home;