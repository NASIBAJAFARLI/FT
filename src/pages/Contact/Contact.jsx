import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const Contact = () => {
  return (
    <div>Contact</div>
  );
};

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <Contact />
      </div>
      <div className="map-container">
      <LoadScript 
  googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
  loading="async"
>

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, like markers, polylines, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ContactPage;
