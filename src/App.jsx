import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"
import { Meteo } from "./components/Meteo/Meteo"
import { Details } from "./components/Meteo/DetailsMeteo"
import { SearchForm } from "./components/SearchForm/SearchForm"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/meteo" Component={Meteo} />
        <Route path="/" Component={Home} />
        <Route path="/details/:insee" Component={Details} />
        <Route path="/search" Component={SearchForm} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
