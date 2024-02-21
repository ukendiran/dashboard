import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
