1. 설치 (버전 지정을 팀원들끼리 꼭 해야됨.)
npm install react-router-dom @reduxjs/toolkit react-redux redux-thunk axios


** PWA 적용 **
1. PWA 설치 
    npm install -D vite-plugin-pwa

2. Manifest 설정
    -`vite.config.js`에 PWA Manifest 설정을 추가
    - 아이콘 이미지는 아래의 사이즈 별로 필요
        - 180x180(IOS), 192X192(web | Android), 512X512(web | Android)

3. Service worker 작성
    - `src/sw.js`, `src/swRegister.js` 파일 생성 

4. `src/main.jsx`에 (커스텀)서비스 워커 레지스터 추가

5. `index.html`에 meta데이터 설정. (IOS 대응 및 Manifest 기본 설정)

6. 위 설정 완료 후 먼저 build
    npm run build

7. 빌드 된 것으로 동작하는 내장 서버 실행
    npm run preview

8. 
