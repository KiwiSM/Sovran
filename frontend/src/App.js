import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from './pages/Start';
import Order from './pages/Order';

function App() {

  return (
    <Router>
      <main>
        <Link to="/order">Check out available companies:</Link>
        <Routes>
          <Route path="/" element={<Start />} /> 
          <Route path="/order" element={<Order/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
