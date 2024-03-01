import { HashRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/header/Navbar"
import Home from "./components/Home"
import HeaderSection from "./components/header/HeaderSection"
import Footer from "./components/Footer"
import OnlineAdmission from "./components/OnlineAdmission"
import ExamResult from "./components/ExamResult"
import About from "./components/About"
import SmartClassRoom from "./components/SmartClassRoom"
import ComputerLab from "./components/ComputerLab"
import Library from "./components/Library"
import MusicDance from "./components/MusicDance"
import Sports from "./components/Sports"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Academic from "./components/Academic"
import LoginForm from "./components/LoginForm"
import MainPannel from "./components/Dashboard/MainPannel"
import ShowAndHideComponent from "./components/header/ShowAndHideComponent"

function App() {
  

  return (
    <>
    <HashRouter>
      <ShowAndHideComponent>
      <HeaderSection/>
      <Navbar/>
      </ShowAndHideComponent>
      
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/online-admission" element={<OnlineAdmission/>}/>
            <Route path="/exam-result" element={<ExamResult/>}/>
            <Route path="/smart-class" element={<SmartClassRoom/>}/>
            <Route path="/computer-lab" element={<ComputerLab/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/music-lab" element={<MusicDance/>}/>
            <Route path="/sports" element={<Sports/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/academic" element={<Academic/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/dashboard" element={<MainPannel/>}/>
        </Routes>

        <ShowAndHideComponent>
          <Footer/>
        </ShowAndHideComponent>
    </HashRouter>
      
    </>
  )
}

export default App
