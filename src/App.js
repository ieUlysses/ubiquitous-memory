import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { ThemeProvider } from '@mui/material/styles';
import { React, useContext } from "react"
import Context from './Context/Context';


function App() {
  const context = useContext(Context)
  const { darkModeTheme } = context

  return (
    <>
      <ThemeProvider theme={darkModeTheme}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

      </ThemeProvider>
    </>
  );
}

/* 
Following tutorial from:
https://reactrouter.com/docs/en/v6/getting-started/tutorial
Not using all points. Keeping it easy breezy */

export default App;
