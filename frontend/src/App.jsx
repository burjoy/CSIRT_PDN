import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Services from '../pages/Services';
import Organisasi from '../pages/Organisasi';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/services" element={<Services />} />
          <Route path="/organisasi" element={<Organisasi />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;