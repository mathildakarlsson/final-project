import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Home from './pages/Home';
import SingleRentalsItem from './pages/SingleRentalsItem';
import Rentals from './pages/Rentals';
import BookingForm from './pages/BookingForm';
import About from './pages/About';
import Flowers from './pages/Flowers';
import Contact from './pages/Contact';
import Services from './pages/Services';

import Header from './components/Header';
import Footer from './components/Footer';

import { wishlist } from './reducers/wishlist'
// import { ui } from './reducers/ui'


import ScrollToTop from './utils/ScrollToTop';

const reducer = combineReducers({
	wishlist: wishlist.reducer,
  // ui: ui.reducer
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
        <ScrollToTop />
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<SingleRentalsItem />} path='product/:slug' />
          <Route element={<Rentals />} path='/rentals' />
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
