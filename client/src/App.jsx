import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookingPage from "./pages/BookingPage";

axios.defaults.baseURL = "http://127.0.0.1:6066";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/:roomId" excat element={<BookingPage />} />
      </Routes>

      <footer className="bg-primary text-white text-center p-4 h-25 w-full">
        &copy; 2024 Wasan Rooms
      </footer>
    </>
  );
}

export default App;
