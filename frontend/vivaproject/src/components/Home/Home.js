// Home.js

import React from 'react';
import Slider from '../Slider/Slider';
import Category from '../Category/Category';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import Chat from '../Chats/Chat';
import TopicProduct from '../TopicProducts/TopicProduct';
import Navbar2 from '../Navbar2/Navbar2';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <Slider></Slider>
      <TopicProduct></TopicProduct>
      <Category></Category>
      <Products></Products>
      <Footer></Footer>
      <Chat></Chat>
    </div>
  );
};

export default Home;
