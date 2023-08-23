import EndPage from "./components/EndPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutOne from "./components/AboutOne";
import CardComponent from "./components/CardComponent";
import CompanyDatabase from "./components/CompanyDatabase";
import ListComponent from "./components/ListComponent";
import About from "./components/About";
import UpdateDatabase from './components/UpdateDatabase'
import TForm from "./components/FormComponent";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from "./components/NavBar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  const company = "Google"
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<CompanyDatabase/>} path="/searchdata"/>
        <Route element={<UpdateDatabase/>} path="/updatedata"/>
        <Route element={<TForm company={company}/>} path="/applyuser"/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
