import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    const [theme, setTheme] = useState(false);
    const [modeText, setModeText] = useState('Dark Mode');
    const [isVisible, setIsvisible] = useState(false);

    const darkmode = () => {
        if (!(theme)) {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';
            setModeText('Light Mode')
            document.querySelector
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            setModeText('Dark Mode')
        }
        setTheme(!theme)
    };

    function sideNavbarVisible() {
        if (!isVisible) {
            const span1 = document.querySelector('#span1');
            const span2 = document.querySelector('#span2');
            const span3 = document.querySelector('#span3');
            const sideNavbarToggler = document.querySelector('#sideNavbarToggler')
            const sideNavbar = document.querySelector('#sideNavbar');
            span2.style.display = 'none';
            span1.style.transform = 'rotate(45deg)';
            span1.style.position = 'absolute'
            span3.style.transform = 'rotate(-45deg)';
            sideNavbarToggler.style.gap = '0px';
            sideNavbar.style.display = 'flex'
        }
        else {
            span2.style.display = 'flex';
            span1.style.transform = 'rotate(0deg)';
            span1.style.position = 'static'
            span3.style.transform = 'rotate(-0deg)';
            sideNavbarToggler.style.gap = '7px';
            sideNavbar.style.display = 'none'
        }
        setIsvisible(!isVisible)
    }


    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li className={styles.myapigenerator}>PulseAPI</li>
                        <li className={styles.displayNone}><Link to="/">Home</Link></li>
                        <li className={styles.displayNone}><Link to="/calender">Calender</Link></li>
                        <li className={styles.displayNone}><Link to="/images">Images</Link></li>
                        <li className={styles.displayNone}><Link to="/movies">Movies</Link></li>
                        <li className={styles.displayNone}><Link to="/songs">Songs</Link></li>
                    </ul>
                    <ul>
                        <li className={styles.darkMode} onClick={darkmode}>
                            {!theme ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
                                </svg>
                            ) :
                                (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                                )}
                            <span className={styles.darktheme}>{modeText}</span>
                        </li>
                        <p className={styles.sideNavbarToggler} id='sideNavbarToggler' onClick={sideNavbarVisible}>
                            <span className={styles.span1} id='span1'></span>
                            <span className={styles.span3} id='span2'></span>
                            <span className={styles.span3} id='span3'></span>
                        </p>
                    </ul>
                </nav>
            </div>
            <div className={styles.sideNavbar} id='sideNavbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calender">Calender</Link></li>
                <li><Link to="/images">Images</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/songs">Songs</Link></li>
            </div>
        </>
    );
};

export default Navbar;
