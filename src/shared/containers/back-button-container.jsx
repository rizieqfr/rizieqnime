import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/ui/back-button';

export function BackButtonContainer({ href = '/home', children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return <BackButton onClick={handleClick}>{children}</BackButton>;
}
