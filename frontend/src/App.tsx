import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<AuthPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}