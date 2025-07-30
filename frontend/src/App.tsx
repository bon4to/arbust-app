import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import Album from "./pages/AlbumPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<AuthPage />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/album/:id" element={<Album />} /> 
      </Routes>
    </BrowserRouter>
  );
}