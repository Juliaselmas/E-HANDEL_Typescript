import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layouts/MainLayout';
import { HomePage } from './Pages/HomePage';
import { ItemsPage } from './Pages/ItemsPage';
import { ItemPage } from './Pages/ItemPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/:id" element={<ItemPage />} /> {/* Dynamisk route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
