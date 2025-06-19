import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import Organisasi from "../pages/Organisasi";
import Contact from "../pages/Contact";
import Activity from "../pages/Activity";
import Rfc from "../pages/Rfc";
import Article from "../pages/Article";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/rfc"
            element={<Rfc />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/article/:slug"
            element={<Article />}
          />
          <Route
            path="/organisasi"
            element={<Organisasi />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/activity"
            element={<Activity />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
