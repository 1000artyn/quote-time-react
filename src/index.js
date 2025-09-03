import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Aurelius from "./pages/Aurelius";
import Confucius from "./pages/Confucius";
import Plato from "./pages/Plato";
import Laozi from "./pages/Laozi";
import Doctor from "./pages/Doctor";
import NoPage from "./pages/NoPage";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aurelius" element={<Aurelius />} />
          <Route path="confucius" element={<Confucius />} />
          <Route path="plato" element={<Plato />} />
          <Route path="laozi" element={<Laozi />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
