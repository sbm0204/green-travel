import './Main.css';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <img className='title-img' onClick={() => { navigate('/festivals') }} src='/base/festival.png' alt="축제 대문" />
      <br></br>
      <img className='title-img' onClick={() => { navigate('/stays') }} src='/base/accommodation.png' alt="숙박시설 대문" />
    </>
  )
}

export default Main;