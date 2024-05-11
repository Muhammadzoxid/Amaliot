import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Services from './Router/Services/Services';
import About from './Router/About/About';
import Home from './Router/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />


<Routes>
<Route path="/" element={<Home />} />
<Route path="/About" element={<About /> } />
<Route path="/Services" element={<Services />} />

</Routes>



    </div>
  );
}

export default App;
