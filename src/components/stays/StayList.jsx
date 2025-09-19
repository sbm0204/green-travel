import './StayList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { stayIndex } from '../../store/thunks/stayThunk.js';
import { setScrollEventFlg } from '../../store/slices/staySlice.js';
import FloatingButton from '../FloatingButton.jsx'; 

function StayList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stayList = useSelector(state => state.stay.list);
  const scrollEventFlg = useSelector(state => state.stay.scrollEventFlg);

  useEffect(() => {
    window.addEventListener('scroll', addNextPage);

    if(stayList.length === 0) {
      dispatch(stayIndex()); // 마운트 단계. 계속 진행
    }
    
    return () => {
      window.removeEventListener('scroll', addNextPage);
    }}
  , []);

  // 다음 페이지 가져오기. 
  function addNextPage() {
    // 스크롤 관련 처리
    const docHeight = document.documentElement.scrollHeight; // 문서의 Y축 총 길이
    const winHeight = window.innerHeight; // 윈도우의 Y축 총 길이
    const nowHeight = Math.ceil(window.scrollY); // 현재 스크롤의 Y축 위치
    const viewHeight = docHeight - winHeight; // 스크롤을 끝까지 내렸을 때의 Y축 위치
    // console.log(viewHeight, nowHeight);

    // 디바운싱(버튼 중복 입력 막는 법) 처리를 해줘야한다. 
    if(viewHeight === nowHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(stayIndex());
    }
  }

  function redirectDetail(item) {
    // dispatch(setStayInfo(item));
    navigate(`/stays/${item.contentid}`);
  }

  function redirectBackToTheMain() {
    navigate(-1);
  }
  
  return (
    <>
      <button type="button" className="btnToTheMain" onClick={redirectBackToTheMain}>Back to the main</button>
      <div className="container">
          { stayList && stayList.map(item => {
            return (
            <div className="card" onClick={() => { redirectDetail(item) }} key={item.contentid}>
              <div className="card-img" 
              style={{backgroundImage: `url('${item.firstimage}')`}}>
              </div>
              <p className="card-title">{item.title}</p>
              <p className="card-phonenumber">{item.tel}</p>
            </div>
            );
          })
        }        
      </div>
      {/* <button type="type" onClick={addNextPage}>더 보기</button> */}
      <FloatingButton to="/" label="Back to the main" />
    </>
  )
}

export default StayList;