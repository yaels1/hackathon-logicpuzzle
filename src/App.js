import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage.js";
import Header from "./components/Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters/:characterId" element={<HomePage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
