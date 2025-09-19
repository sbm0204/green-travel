import { useNavigate, useParams } from "react-router-dom";
import './FestivalShow.css';
import { useDispatch, useSelector } from "react-redux";
import { dateFormatter } from "../../utils/dateFormatter.js";
import { setFestivalInfo } from "../../store/slices/festivalShowSlice.js";
import { useEffect } from "react";

function FestivalShow() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const festivalInfo = useSelector(state => state.festivalShow.festivalInfo);
  const festivalList = useSelector(state => state.festival.list);
  
  // console.log(festivalList, params.id, festivalInfo);

  useEffect(() => {
    const item = festivalList.find(item => params.id === item.contentid);
    dispatch(setFestivalInfo(item)); // useEffect 안에 담길 수도 있고 안 담길 수도 있다.
  }, []);

  function redirectBackToTheList() {
    navigate(-1);
  }
  return (
    <>
      { 
        festivalInfo.title && 
        <div className="show-container">
          <button type="button" className="btnToTheList" onClick={redirectBackToTheList}>Back to the festival list</button>
          <p className="show-title">{festivalInfo.title}</p>
          <p className="show-period">{dateFormatter.withHyphenYMD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHyphenYMD(festivalInfo.eventenddate)}</p>
          <img className="show-img" src={festivalInfo.firstimage} alt={`${festivalInfo.title} 사진`}></img>
          <p className="show-addr">{`${festivalInfo.addr1}, ${festivalInfo.addr2}`}</p>
        </div> 
      }
    </>
  )
}

export default FestivalShow;