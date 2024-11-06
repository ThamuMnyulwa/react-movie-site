import React from 'react'; // Import React
import '../styles.css'; // Import style from the css

// Create a Header component
export default function Header() {
  return (
    <div className='header'>
        <img className='logo' src='logo_moviedux.png' alt='Duck Movies Logo' />
        <h2 className='app-subtitle'>Welcome to Duck Movies! Grab some popcorn 🍿</h2>
    </div>
  );
}

// We can now import the Header component in the App component since we have exported it as a default.
// We can also do this using a named export.

// If you return something from a component it always has to be wrapped in a single parent element.