import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetter/AnimatedLetters';
import './Portfolio.scss';
import portfolioData from '../../Data/portfolio.json';
import ecommerce from '../../assets/images/Ecommerce.PNG';
import tinder from '../../assets/images/Tinder.PNG';
import amazon from '../../assets/images/Amazon.PNG';



const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    // const renderPortfolio = (portfolio) => {
    //     return (
    //         <div className="images-container">
    //             {
    //                 portfolio?.map((port, idx) => {
    //                     return (
    //                         <div className="image-box" key={idx}>
    //                             <img
    //                                 src={port.image}
    //                                 className="portfolio-image"
    //                                 alt="portfolio" />
    //                             <div className="content">
    //                                 <p className="title">{port.name}</p>
    //                                 <h4 className="description">{port.description}</h4>
    //                                 <button
    //                                     className="btn"
    //                                     onClick={() => window.open(port.url)}
    //                                 >View</button>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     );
    // }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {/* <div>{renderPortfolio(portfolioData.portfolio)}</div> */}
                <div>
                    <div className="images-container">
                        <div className="image-box">
                            <img
                                src={ecommerce}
                                className="portfolio-image"
                                alt="portfolio" />
                            <div className="content">
                                <p className="title">MERN Ecommerce</p>
                                <h4 className="description">React, Express, Mongoose, Redux, JWT, Stripe</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open('https://github.com/Mohammed-Farhad-Uddin/MERN-Ecommerce')}
                                >View</button>
                            </div>
                        </div>

                        <div className="image-box">
                            <img
                                src={tinder}
                                className="portfolio-image"
                                alt="portfolio" />
                            <div className="content">
                                <p className="title">Tinder Clone</p>
                                <h4 className="description">React, Firebase</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open('https://github.com/Mohammed-Farhad-Uddin/tinder-clone-app')}
                                >View</button>
                            </div>
                        </div>

                        <div className="image-box">
                            <img
                                src={amazon}
                                className="portfolio-image"
                                alt="portfolio" />
                            <div className="content">
                                <p className="title">Amazon</p>
                                <h4 className="description">React, Firebase , Stripe</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open('https://github.com/Mohammed-Farhad-Uddin/amazon-clone')}
                                >View</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;