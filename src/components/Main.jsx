import './Main.css';
import titleImg from '../assets/andong_festival.png';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <img className='title-img' onClick={() => { navigate('/festivals') }} src={titleImg} alt="대문" />
    </>
  )
}

export default Main;