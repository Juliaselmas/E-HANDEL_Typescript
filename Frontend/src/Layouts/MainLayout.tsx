import { Outlet } from 'react-router-dom';
import { Header } from '../Components/UI/Header';

export const MainLayout = () => {
  return (
    <main>
      <Header />
      <div style={{ padding: '1rem' }}>
        <Outlet /> {/* Dynamiskt innehåll baserat på nuvarande route */}
      </div>
    </main>
  );
};
