import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Material from "./pages/Material";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Student from "./pages/Student";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="material" element={<Material />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="student" element={<Student />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}