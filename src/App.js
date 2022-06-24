import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Home from './components/Home';
import SingleRentalsItem from './components/SingleRentalsItem';
import Rentals from './components/Rentals';
import BookingForm from './components/BookingForm';
import SuccessPage from './components/SuccessPage';
import About from './components/About';
import Flowers from './components/Flowers';
import Contact from './components/Contact';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';

import { wishlist } from './reducers/wishlist'

const reducer = combineReducers({
	wishlist: wishlist.reducer,
});


// Get our local storage and set it as the preloadedState
const persistedStateJSON = localStorage.getItem("usersWishlist");
let preloadedState = {};

if (persistedStateJSON) {
  preloadedState = JSON.parse(persistedStateJSON);
}

// Configure redux store with preloadedState
const store = configureStore({ reducer, preloadedState });

// Store the state in local storage on Redux state change
store.subscribe(() => {
  localStorage.setItem("usersWishlist", JSON.stringify(store.getState()));
});


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<SingleRentalsItem />} path='product/:slug' />
          <Route element={<Rentals />} path='/rentals' />
          <Route element={<SuccessPage />} path='/success' />
          <Route element={<Services />} path='/services' />
          <Route element={<Flowers />} path='/flowers' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<BookingForm />} path='/wishlist' />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
};
