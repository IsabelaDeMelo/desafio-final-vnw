import Main from "./Components/Main/Main"
import MoviesPage from "./Components/MoviesPage/MoviesPage"
import TVShows from "./Components/TVShowsPage/TVShows"
import Login from "./Components/Login/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Movies" element={<MoviesPage />} />
        <Route path="/TVShows" element={<TVShows />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
