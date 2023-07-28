import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import './App.css';
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home"  element={ <Home /> } />
      <Route path="/blogs"  element={ <Blogs /> } />
      <Route path="/contact"  element={ <Contact /> } />
    </Routes>
    </BrowserRouter>
  );
}

//home -> <Home />
//contact -> <contact /> 

export default App;
