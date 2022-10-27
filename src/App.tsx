import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'layout';
import { HomePage, CatalogPage, ObjectCard } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<CatalogPage />} />
        <Route path="/properties/:id" element={<ObjectCard />} />
        {/* <Route path="/cabinet-assets/" element={<Cabinet />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
