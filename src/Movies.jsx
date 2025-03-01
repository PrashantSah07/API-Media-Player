import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import BoxItem from './components/BoxItem'
import NextPreviousButtonPage from './components/NextPreviousButtonPage'
import './App.css'

const Movies = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('spider man');
    const [pageCount, setPageCount] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        async function movieData() {
            try {
                let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=6b03720f12b1780deb6f627085df7549&page=${pageCount}`)
                let res = await response;
                let res2 = await res.json();
                setData(res2.results);
                setTotalResults(res2.total_results);
            }
            catch (error) {
                console.log(error);
            }
        }

        movieData();
    }, [query, pageCount]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value.trim() === '' ? 'spider man' : value);
    };

    function previousPage() {
        setPageCount(prev => Math.max(prev - 1, 1));
    }

    function nextPage() {
        if (pageCount < Math.ceil(totalResults / 20)) {
            setPageCount((prev) => prev + 1);
        }
    }

    return (
        <>
            <div className='news-container'>
                <Navbar title='RandomIMG' />
                <SearchBox
                    heading='MoviesHub - Discover & Explore Your Favorite Films'
                    placeholder='Search Movies'
                    onChange={handleSearchChange}
                />
                <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
                <div className="news-card">
                    {data.map((movies, index) => (
                        <BoxItem
                            buttonName='Watch Now'
                            key={index}
                            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                            alt_description={movies.original_title}
                            description={movies.overview}
                            likes={`Rating: ${movies.vote_average}`}
                            created_at={`Release date: ${movies.release_date}`}
                            download={`https://www.themoviedb.org/movie/${movies.id}`}
                        />
                    ))}
                </div>
                <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
            </div>
        </>
    )
}

export default Movies
