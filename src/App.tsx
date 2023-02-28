function App() {
  const userAgent = navigator.userAgent;

  if (userAgent.indexOf("Android") >= 0) {
    if (userAgent.indexOf("KAKAOTALK") >= 0) {
      alert("현재 접속중인 브라우저는 카카오톡 인앱 브라우저입니다.");
      // window.location.href = "naversearchapp://default?version=5" // 네이버 앱으로 정상 연결
      window.location.href = "colavosalon://"
    } else if (userAgent.indexOf("Instagram") >= 0) {
      alert("현재 접속중인 브라우저는 인스타 인앱 브라우저입니다.");
    } else if (userAgent.indexOf("NAVER") >= 0) {
      alert("현재 접속중인 브라우저는 모바일 네이버 앱입니다.");
    } else {
      alert("현재 접속중인 브라우저는 모바일 크롬입니다.");
      window.location.href = "naversearchapp://default?version=1" // 크롬, 네이버중 선택창뜸. 크롬 선택하면 아무 동작 없음
    }
  }

  const handleButtonClick = async () => {
    alert(userAgent);
  };

  return (
    <div>
      <h1>{"[POC] Express login App to Web"}</h1>
      <p>현재 로그인 브라우저 환경</p>
      <p>{userAgent}</p>
      <button type="button" onClick={handleButtonClick}>
        로그인 하기
      </button>
    </div>
  );
}

export default App;
