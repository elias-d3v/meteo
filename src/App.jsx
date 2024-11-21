import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { Navbar } from "./components/Navbar/Navbar"
import { Meteo } from "./components/Meteo/Meteo"
import { Details } from "./components/Meteo/DetailsMeteo"
import { SearchForm } from "./components/SearchForm/SearchForm"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { ListeFav } from "./components/Favoris/listeFav"


function App() {

  return (
    <Provider store={store}>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/meteo" Component={Meteo} />
        <Route path="/" Component={Home} />
        <Route path="/details/:insee" Component={Details} />
        <Route path="/search" Component={SearchForm} />
        <Route path="/fav" Component={ListeFav} />
      </Routes>
    </BrowserRouter>

     </Provider>
  )
}

export default App
