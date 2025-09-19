import './StayDetail.css';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStayInfo } from "../../store/slices/stayDetailSlice.js";
import { useEffect } from "react";

function StayDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stayInfo = useSelector(state => state.stayDetail.stayInfo);
  const stayList = useSelector(state => state.stay.list);
  
  // console.log(stayList, params.id, stayInfo);

  useEffect(() => {
    const item = stayList.find(item => params.id === item.contentid);
    dispatch(setStayInfo(item)); // useEffect 안에 담길 수도 있고 안 담길 수도 있다.
  }, []);

  function redirectBackToTheList() {
    navigate(-1);
  }
  return (
    <>
      { 
        stayInfo.title && 
        <div className="detail-container">
          <button type="button" className="btnToTheList" onClick={redirectBackToTheList}>Back to the accommodation list</button>
          <p className="detail-title">{stayInfo.title}</p>
          <p className="detail-phonenumber">{stayInfo.tel}</p>
          <img className="detail-img" src={stayInfo.firstimage} alt={`${stayInfo.title} 사진`}></img>
          <p className="detail-addr">{`${stayInfo.addr1}, ${stayInfo.addr2}`}</p>
        </div> 
      }
    </>
  )
}

export default StayDetail;