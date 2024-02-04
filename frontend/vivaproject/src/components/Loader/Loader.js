import React, { useState, useEffect } from 'react';
import './Loader.css';
import loadgif from '../../assets/reloadgif.gif';


const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const timer = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 1200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <img src={loadgif} alt="loading" className="loader-gif" />
      </div>
    );
  }

  return null;
};

export default Loader;
