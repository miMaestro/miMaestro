import React from 'react';
import Header from './components/Header'
import StudRoutes from './Routes/StudRoutes'
import TeachRoutes from './Routes/TeachRoutes'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
     {StudRoutes}
     {TeachRoutes}

    </div>
  );
}

export default App;
