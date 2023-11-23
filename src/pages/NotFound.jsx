import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className="notfound">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please, return to site homepage.</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;