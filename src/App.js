import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MasterLayout from './components/MasterLayout'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
