import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

/* 
Following tutorial from:
https://reactrouter.com/docs/en/v6/getting-started/tutorial
Not using all points. Keeping it easy breezy */

export default App;
