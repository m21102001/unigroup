import { Route, Routes } from "react-router";
import './App.css'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Serveies from "./pages/Serveies";
import About from "./pages/About";
import Careers from "./pages/Careers";
import { useState } from "react";
import CircularIndeterminate from "./components/loader/CircularIndeterminate";

function App() {
  const [loading ,setLoading] = useState(false)
  return (
    <div className="App">
      
      {loading?(
        <div>
          loading...
        <CircularIndeterminate/>
      </div>
      ):(
        <Routes>
          <Route
            path="/"
            element = {<Home/>}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Serveies />} />
          <Route path="/about" element={<About />} />
          <Route path="/Careers" element={<Careers />} />
        </Routes>
      )}
      </div>
  )
}

export default App
