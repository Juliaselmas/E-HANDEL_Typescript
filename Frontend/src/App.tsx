import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layouts/MainLayout';
import { HomePage } from './Pages/HomePage';
import { ItemsPage } from './Pages/ItemsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;