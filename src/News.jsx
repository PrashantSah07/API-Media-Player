import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import BoxItem from './components/BoxItem'
import NextPreviousButtonPage from './components/NextPreviousButtonPage'
import './App.css'

const News = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('sports');
    const [pageCount, setPageCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        async function newsData() {
            try {
                let response = fetch(`https://newsapi.org/v2/everything?apiKey=10b350f973904758864df79511b44789&q=${query}&page=${pageCount}`);
                let res = await response;
                let res2 = await res.json();
                if (!res.ok) {
                    if (res.status === 429) {
                        navigate('/too-many-request');
                        return;
                    } else {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                }
                setData(res2.articles);
            }
            catch (error) {
                console.log(error);
            }
        }

        newsData();
    }, [query, pageCount]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value.trim() === '' ? 'sports' : value);
    };

    function previousPage() {
        setPageCount(prev => Math.max(prev - 1, 1));
    }

    function nextPage() {
        setPageCount(prev => prev + 1);
    }

    return (
        <>
            <div className='news-container'>
                <Navbar />
                <SearchBox
                    heading='NewsMonkey - Top Headlines'
                    placeholder='Search News'
                    onChange={handleSearchChange}
                />
                <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
                <div className="news-card">
                    {data.map((article, index) => (
                        <BoxItem
                            buttonName='Know More'
                            key={index}
                            src={article.urlToImage}
                            alt_description={article.author}
                            description={article.description}
                            likes={article.title}
                            download={article.url}
                        />
                    ))}
                </div>
                <NextPreviousButtonPage previousPage={previousPage} nextPage={nextPage} />
            </div>
        </>
    )
}

export default News
