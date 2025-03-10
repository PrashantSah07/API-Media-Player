import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import BoxItem from './components/BoxItem'
import Loading from './components/Loading'
import './App.css'

const Calender = () => {

    const [data, setData] = useState([]);
    const [year, setYear] = useState(2025);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getHolidays() {
            setLoading(true);
            try {
                let response = fetch(`https://calendarific.com/api/v2/holidays?&api_key=5jroa4u9A2uPplePhFhNxmvhFBXg4p5o&country=in&year=${year}`)
                let res = await response;
                let res2 = await res.json();
                setData(res2.response.holidays);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        getHolidays();
    }, [year]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setYear(value.trim() === '' ? 2025 : value);
    };

    return (
        <>
            <div className='news-container'>
                <Navbar title='RandomIMG' />
                <SearchBox
                    heading='Holidays – Get to Know Your Days Off'
                    placeholder='Search Holidays By Year'
                    onChange={handleSearchChange}
                />
                {loading && <Loading />}
                <div className="news-card">
                    {data.map((responses, index) => (
                        <BoxItem
                            buttonName='See More'
                            key={index}
                            src={'https://images.unsplash.com/photo-1642618717985-a681a41d04bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhbGVuZGVyfGVufDB8fDB8fHww'}
                            alt_description={responses.name}
                            description={responses.description}
                            likes={`${responses.country.name}`}
                            created_at={`Date: ${responses.date.iso}`}
                            download={responses.canonical_url}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Calender
