import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/etablissement/Acceuil";
import Presentation from "./pages/ecole/Presentation";
import EcoleRoutes from "./pages/ecole/EcoleRoutes";
import Blog from "./pages/etablissement/Blog";
import Contact from "./pages/etablissement/Contact";
import CollegeRoutes from "./pages/college/CollegeRoutes";
import ParentsRoutes from "./pages/parents/ParentsRoutes";
import AdminRoutes from "./pages/admin/AdminRoutes";
import About from "./pages/college/AboutCollege";
import CGU from "./pages/etablissement/CGU";
import BlogArticle from "./pages/etablissement/BlogArticle";
import ScrollToTop from "components/shared/ScrollToTop";
import InscriptionParent from "pages/etablissement/InscriptionParent";
import style from "styles/settings.scss";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/etablissement/*" element={<Acceuil />} />
        <Route path="/ecole/*" element={<EcoleRoutes />} />
        <Route path="/college/*" element={<CollegeRoutes />} />
        <Route path="/etablissement/blog" element={<Blog />} />
        <Route path="/etablissement/blog/:id" element={<BlogArticle />} />
        <Route path="/etablissement/contact" element={<Contact />} />
        <Route path="/etablissement/qui-sommes-nous" element={<About />} />
        <Route path="/parents/*" element={<ParentsRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/etablissement/CGU" element={<CGU />} />
        <Route path="/inscription-parent" element={<InscriptionParent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
