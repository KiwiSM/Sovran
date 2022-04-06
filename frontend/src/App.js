import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from './pages/Start';
import Order from './pages/Order';
import Tickets from './pages/Tickets';
import Cart from './pages/Cart';
import Receit from './pages/Receit';

function App() {

  return (
    <Router>
      <main>
        <Link to="/order">Check out available companies:</Link>
        <Routes>
          <Route path="/" element={<Start />} /> 
          <Route path="/order" element={<Order/>} />
          <Route path="/tickets/" element={<Tickets/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/receit/" element={<Receit/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
