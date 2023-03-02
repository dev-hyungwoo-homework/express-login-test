function App() {
  const userAgent = navigator.userAgent;

  if (userAgent.indexOf("KAKAOTALK") >= 0) {
    alert("현재 접속중인 브라우저는 카카오톡 인앱 브라우저입니다.");
    // window.location.href = "naversearchapp://default?version=5" // 네이버 앱으로 정상 연결
    window.location.href = "colavosalon://"
  } else if (userAgent.indexOf("CriOS") >= 0) {
    alert("현재 접속중인 브라우저는 IOS 크롬 브라우저입니다.");
    window.location.href = "colavosalon://expresssign?id=123&browser=chrome&ip=123.12.3.2&browser_app_custom_url_scheme=naversearchapp://default?version=1" // 네이버 앱으로 정상 연결
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
