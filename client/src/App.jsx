import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/pages/Login';
import Netflix from './components/pages/Netflix';
import Player from './components/pages/Player';
import Signup from './components/pages/Signup';
import Movies from "./components/pages/Movies";
import TVShows from './components/pages/TVShows';
import UserLiked from './components/pages/UserLiked';

export default function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/player" element={<Player />}/>
          <Route exact path="/movies" element={<Movies />}/>
          <Route exact path="/tv" element={<TVShows />}/>
          <Route exact path="/mylist" element={<UserLiked />}/>
          <Route exact path="/" element={<Netflix />}/>
        </Routes>
     </BrowserRouter>
  )
}

