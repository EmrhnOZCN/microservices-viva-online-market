// Home.js

import React from 'react';
import Slider from '../Slider/Slider';
import Category from '../Category/Category';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import Chat from '../Chats/Chat';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <Products></Products>
      <Footer></Footer>
      <Chat></Chat>
    </div>
  );
};

export default Home;
