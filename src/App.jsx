import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"
import { Meteo } from "./components/Meteo/Meteo"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/meteo" Component={Meteo} />
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
