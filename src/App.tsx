import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailScreen from './screens/DetailScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <HomeScreen />
          }>
          </Route>
          <Route path="/detail" element={
            <DetailScreen />
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
