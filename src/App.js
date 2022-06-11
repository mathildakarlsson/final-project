import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Home from './components/Home';
import SingleRentalsItem from './components/SingleRentalsItem';
import Rentals from './components/Rentals';
import NavBar from './components/NavBar';
import WishList from './components/WishList';
import SuccessPage from './components/SuccessPage';
import About from './components/About';
import Flowers from './components/Flowers';
import Contact from './components/Contact';
import Services from './components/Services';


import { wishlist } from './reducers/wishlist'

const reducer = combineReducers({
	wishlist: wishlist.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<SingleRentalsItem />} path='product/:slug' />
          <Route element={<Rentals />} path='/rentals' />
          <Route element={<WishList />} path='/wishlist' />
          <Route element={<SuccessPage />} path='/success' />
          <Route element={<Services />} path='/services' />
          <Route element={<Flowers />} path='/flowers' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
