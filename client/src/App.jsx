import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

axios.defaults.baseURL = "http://127.0.0.1:6066";
function App() {
  return (
    <>
      <Navbar />
      <h3 className="text-primary text-center text-3xl font-thin">
        Welcome to Wasan Rooms
      </h3>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
