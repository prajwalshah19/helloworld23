
import Landing from './Pages/Landing';
import './App.css';
import useState from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
      <Routes>

        <Route path = "*" element = {<Landing />} />

      </Routes>

    </Router>
  );
}
export default App;
