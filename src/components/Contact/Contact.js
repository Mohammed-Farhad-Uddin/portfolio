import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetter/AnimatedLetters';
import './Contact.scss';

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    //   e.preventDefault()

    //   emailjs
    //     .sendForm(
    //       'gmail',
    //       'template_YeJhZkgb',
    //       form.current,
    //       'your-token'
    //     )
    //     .then(
    //       () => {
    //         alert('Message successfully sent!')
    //         window.location.reload(false)
    //       },
    //       () => {
    //         alert('Failed to send the message, please try again')
    //       }
    //     )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in great organization with best team play - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mohammed Farhad Uddin,
          <br />
          Chittagong,
          Bangladesh <br />
          <br />
          <span>i.m.farhad999@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[22.68, 91.79]} zoom={9}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.68, 91.79]}>
              <Popup>Farhad lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;