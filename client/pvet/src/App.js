
import Landing from './Pages/Landing';
import Content from './Pages/Content'
import './App.css';
import useState from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    
    <Router>
      <Routes>

        <Route path = "*" element = {<Landing />} />
        <Route path = "/content" element = {<Content />} />
      </Routes>

    </Router>
  );
}
export default App;
