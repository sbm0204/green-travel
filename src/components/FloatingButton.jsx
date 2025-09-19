import { useNavigate } from 'react-router-dom';
import './FloatingButton.css';

const FloatingButton = ({ to = '/', label = 'Back to the main' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className="fab-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default FloatingButton;