import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetter/AnimatedLetters';
import './Home.scss';
import Logo from './Logo/Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = [' ', 'M', 'o', 'h', 'a', 'm', 'm', 'e', 'd', ' ', 'F', 'a', 'r', 'h', 'a', 'd', ' ', 'U', 'd', 'd', 'i', 'n'];
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={35}
              />
            </h1>
            <h2>Front End Developer / MERN Stack Developer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div>
  
        <Loader type="pacman" />
      </>
    );
};

export default Home;