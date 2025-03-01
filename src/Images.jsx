import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import BoxItem from './components/BoxItem'
import NextPreviousButtonPage from './components/NextPreviousButtonPage'
import './App.css'

const Images = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('games');
    const [pageCount, setPageCount] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const navigate = useNavigate();

    useEffect(() => {
        async function getImages() {
            try {
                let response = fetch(`https://api.unsplash.com/search/photos?client_id=suXDuzS6gUrw7JeW7kzKHTNA7lJqQqZDmuIbnn6k_Fw&query=${query}&page=${pageCount}&pageSize=${pageSize}`)
                let res = await response;
                let res2 = await res.json();
                setData(res2.results);
                setTotalResults(res2.total_pages);
            }
            catch (error) {
                console.log(error);
            }
        }

        getImages();
    }, [query, pageCount]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value.trim() === '' ? 'games' : value);
    };

    function previousPage() {
        setPageCount(prev => Math.max(prev - 1, 1));
    }

    function nextPage() {
        if (pageCount < Math.ceil(totalResults / pageSize)) {
            setPageCount((prev) => prev + 1);
        }
    }

    return (
        <>
            <div className='news-container'>
                <Navbar title='RandomIMG' />
                <SearchBox
                    heading='RandomIMG - Free Image Generator'
                    placeholder='Search Images'
                    onChange={handleSearchChange}
                />
                <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
                <div className="news-card">
                    {data.map((images, index) => (
                        <BoxItem
                            buttonName='Download'
                            key={index}
                            src={images.urls.regular}
                            img_alt_desc={images.alt_description}
                            alt_description={images.alt_description}
                            description={images.description}
                            likes={`likes: ${images.likes}`}
                            created_at={`Created on: ${images.created_at}`}
                            download={images.links.download}
                        />
                    ))}
                </div>
                <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
            </div>
        </>
    )
}

export default Images
