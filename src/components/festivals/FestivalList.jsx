import { useDispatch, useSelector } from 'react-redux';
import './FestivalList.css';
import { useEffect } from 'react';
import { festivalIndex } from '../../store/thunks/festivalThunk.js';
import { dateFormatter } from '../../utils/dateFormatter.js';
import { setScrollEventFlg } from '../../store/slices/festivalSlice.js';

function FestivalList() {
  const dispatch = useDispatch();
  const festivalList = useSelector(state => state.festival.list);
  const scrollEventFlg = useSelector(state => state.festival.scrollEventFlg);

  useEffect(() => {
    
    // - 숙제 - 
    // FestivalList 에 관한 마운트라서 여기서 진행함. 
    // 1. 로컬 스토리지에 저장된 날짜를 획득. 
    // (저장된 날짜가 없으면 로컬 스토리지에 현재 날짜를 저장. 저장된 날짜가 있으면 아래 처리 속행)
    // 1-2. 오늘 날짜와 비교.
    // 1-3. 날짜가 과거면 로컬 스토리지 및 스테이트 초기화.
    // 1-4. 아직 과거가 아니면 처리 속행.

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
            <div className="card" key={item.contentid}>
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
      <button type="type" onClick={addNextPage}>더 보기</button>
    </>
  )
}

export default FestivalList;