import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MasterLayout from './components/Layout'
 import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

//   const theme = createTheme({
//     typography: {
//       fontFamily: 'Open Sans, sans-serif',
//     },
// });


  return (
    // <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/*" element={<MasterLayout />} />
      </Routes>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
