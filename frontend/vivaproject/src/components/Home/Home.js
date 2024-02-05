import React, { useState, useEffect } from 'react';
import Slider from '../Slider/Slider';
import Category from '../Category/Category';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import Chat from '../Chats/Chat';
import TopicProduct from '../TopicProducts/TopicProduct';
import Navbar2 from '../Navbar2/Navbar2';
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.removeItem('selectedCategory');
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
       
      <Navbar2 />
      
          <Slider />
          <TopicProduct />
          <Category />
          <Products />
       
          <Chat />
        </>
      )}
    </div>
  );
};

export default Home;
