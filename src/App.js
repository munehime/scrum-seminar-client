import './App.css';
import Employees from './components/Employees'
import Manager from './components/Manager.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Signin from './components/Signin';
function App() {
  return (
        <Router>
          <Routes>
            <Route path="/employee" element={<Employees />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Router>
  
  );
}

export default App;
