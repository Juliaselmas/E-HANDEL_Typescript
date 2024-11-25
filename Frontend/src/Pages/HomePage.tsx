import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      <button onClick={() => navigate('/items')}>Go to Items Page</button>
    </div>
  );
};