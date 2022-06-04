import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './components/Home';
import SingleRentalsItem from './components/SingleRentalsItem';
import Rentals from './components/Rentals';
import NavBar from './components/NavBar';


export const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<SingleRentalsItem />} path='rentals/:slug' />
        <Route element={<Rentals />} path='/rentals' />
      </Routes>
    </BrowserRouter>
  );
};
