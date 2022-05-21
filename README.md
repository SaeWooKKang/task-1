# Task

## 진행 순서(커밋)

1. 'npx create-next-app@latest --ts' 명령어로 next 프로젝트 생성
2. 프로젝트 구조 잡기
   - dashBoardA 페이지 생성
   - dashBoardA 페이지의 하위 컴포넌트 Main.tsx, SideBar 컴포넌트 생성
   - styled-components로 Wrapper 태그 만들어서 구조 잡기
3. SideBar 구조 및 스타일링 
   - 기존 SideBar.tsx 컴포넌트를 확장성을 고려하여 구조 변경
      - components/dashBoardA/SideBar
         - sections
      - Company.tsx
         - List.tsx
         - index.tsx
   - styled-components로 스타일링
4. Main 구조 잡기 
   - 기존Main.tsx 컴포넌트를 확장성을 고려하여 구조 변경
   - 섹션 나눔
5. Main 구분선 적용 
6. SideBar의 버튼 클릭시 색상 변경 
   - useState로 상태 저장
   - 클릭시 이벤트핸들러로 상태 변경 -> 클래스 명 추가,변경
7. AppLayout 컴포넌트로 SideBar 컴포넌트, Main의 스타일을 재사용
   - SideBar와 Main 컴포넌트 재사용하기 위해서 AppLayout 컴포넌트 제작
   - AppLayout 사용시 SideBar와 Main영역 스타일링 되어있음
   - 해당 페이지에서 Main 영역만 태그 안에 넣는걸로 변경 가능
   - SideBar의 list 클릭시 색상 변화를 useState로 변경 ->  useRouter 사용으로 변경
   - 구조 잡기 위해 설정해둔 background-color 주석 삭제
8. 자잘한 수정
   - AppLayout 경로, List.tsx style 수정
   - _document.tsx 폰트 설정  
9. dummy 데이터로 라인 차트 구현
   - 차트 높이에 따라 구분선 움직이므로 구분선을 Top.tsx -> Down.tsx로 이동
   - DateChart의 박스 컨테이너는 컴포넌트 상단으로 이동
   - rechart 라이브러리 react 18 버전 지원 안해서 react, react-om, @types/react @types/react-dom 버전 17로 내림
   - Top 컴포넌트 차트 영역에 recharts 라이브러리에 dummy 데이터 붙임
10. dummy 데이터로 파이 차트 구현
   - GenderChart의 박스 레퍼는 Down 컴포넌트로 이동
   - GenderChart 컴포넌트에 rechart 라이브러리, dummy 데이터를 사용하여 파이 차트 구현
11. dummy 데이터로 bar 차트 구현
   - AgeChart의 박스 레퍼는 Down 컴포넌트로 이동
   - AgeChart 컴포넌트에 rechart 라이브러리, dummy 데이터를 사용하여 bar 차트 구현
   
## 패키지 초기화 방법
- npm install

## 서버 스타트 방법
- npm run dev
