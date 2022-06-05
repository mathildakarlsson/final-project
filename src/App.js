import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Home from './components/Home';
import SingleRentalsItem from './components/SingleRentalsItem';
import Rentals from './components/Rentals';
import NavBar from './components/NavBar';
import WishList from './components/WishList';

import { wishlist } from './reducers/wishlist'

const reducer = combineReducers({
	wishlist: wishlist.reducer,
});

// solving merging conflicts

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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
