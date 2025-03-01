import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import BoxItem from './components/BoxItem';
import NextPreviousButtonPage from './components/NextPreviousButtonPage';
import './App.css';

const Songs = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('Pehle Bhi Mai');
    const [pageCount, setPageCount] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchSongs() {
            try {
                let response = await fetch(`https://saavn.dev/api/search/songs?query=${query}&page=${pageCount}`);
                let res2 = await response.json();
                setData(res2.data.results);
                setTotalResults(res2.data.total);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        }

        fetchSongs();
    }, [query, pageCount]);

    const handleSearchChange = (e) => {
        const value = e.target.value.trim();
        setQuery(value === '' ? 'Pehle Bhi Mai' : value);
    };

    const previousPage = () => setPageCount(prev => Math.max(prev - 1, 1));
    const nextPage = () => {
        if (pageCount < Math.ceil(totalResults / 20)) {
            setPageCount(prev => prev + 1);
        }
    };

    return (
        <div className="news-container">
            <Navbar />
            <SearchBox
                heading='MusicHub - Discover & Enjoy Your Favorite Songs'
                placeholder="Search Songs"
                onChange={handleSearchChange}
            />
            <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
            <div className="news-card">
                {data.map((song, index) => (
                    <BoxItem
                        buttonName="Play Now"
                        key={index}
                        src={song.image?.find(img => img.quality === "500x500")?.url || 'fallback-image-url'}
                        alt_description={song.name}
                        description={song.type}
                        likes={`Year: ${song.year}`}
                        created_at={`Label: ${song.label}`}
                        optional1={`Artist Name: ${song.artists?.primary?.[0]?.name || 'Unknown Artist'}`}
                        optional2={`PlayCount: ${song.playCount}`}
                        optional3={`Language: ${song.language}`}
                        optional4={`Album: ${song.album.name}`}
                        download={song.url}
                    />
                ))}
            </div>
            <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
        </div>
    );
};

export default Songs;
