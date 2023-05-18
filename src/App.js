import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import MoviesPage from "./Components/MoviesPage/MoviesPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  )
}

export default App
