import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './FestivalList.css';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk.js';
import { dateFormatter } from '../../utils/dateFormatter.js';
import { setScrollEventFlg } from '../../store/slices/festivalSlice.js';

function FestivalList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const festivalList = useSelector(state => state.festival.list);
  const scrollEventFlg = useSelector(state => state.festival.scrollEventFlg);

  useEffect(() => {
    window.addEventListener('scroll', addNextPage);

    if(festivalList.length === 0) {
      dispatch(festivalIndex()); // 마운트 단계. 계속 진행
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
      dispatch(festivalIndex());
    }
  }

  function redirectShow(item) {
    // dispatch(setFestivalInfo(item));
    navigate(`/festivals/${item.contentid}`);
  }
  
  return (
    <>
      <div className="container">
        {/* 1. festivalList가 배열인지 먼저 확인해야 한다.초기값이 []이면 .map()은 실행되지만 아무것도 렌더링되지 않음.
            2. **데이터가 있을 때만** 렌더링하고 싶다면 festivalList.length > 0을 사용.
            3. festivalList가 **undefined이거나 null**일 가능성이 있다면 festivalList && festivalList.map(...)으로 방어 코드 작성. 
            4. festivalList가 무조건 배열([])이라면 .map()만 써도 상관없습니다. */}
         {
          festivalList && festivalList.map(item => {
            return (
            <div className="card" onClick={() => { redirectShow(item) }} key={item.contentid}>
              <div className="card-img" 
              style={{backgroundImage: `url('${item.firstimage}')`}}>
              </div>
              <p className="card-title">{item.title}</p>
              <p className="card-period">{dateFormatter.withHyphenYMD(item.eventstartdate)} ~ {dateFormatter.withHyphenYMD(item.eventenddate)}</p>
            </div>
            );
          })
        }
      </div>
      {/* <button type="type" onClick={addNextPage}>더 보기</button> */}
    </>
  )
}

export default FestivalList;