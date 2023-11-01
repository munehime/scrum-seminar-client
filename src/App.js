import './App.css';
import Employees from './components/Employees'
import Manager from './components/Manager.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Router>
          <Routes>
            <Route path="/Employee" element={<Employees />} />
            <Route path="/Manager" element={<Manager />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
