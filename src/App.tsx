function App() {
  const userAgent = navigator.userAgent;
  const url: string = process.env.REACT_APP_CUSTOM_URL_SCHEME as string

  if (userAgent.indexOf("KAKAOTALK") >= 0) {
    alert("현재 접속중인 브라우저는 카카오톡 인앱 브라우저입니다.");
    window.location.href = "naversearchapp://default?version=1" // 네이버 앱으로 정상 연결
  } else if (userAgent.indexOf("CriOS") >= 0) {
    alert("현재 접속중인 브라우저는 IOS 크롬 브라우저입니다.");
    window.location.href = url
  }

  const handleButtonClick = async () => {
    if (userAgent.indexOf("CriOS") >= 0) {
      window.location.href = url
    } else {
      alert(`미지원 기기 : ${userAgent}`);
    }
  };

  return (
    <div>
      <h1>{"[POC] Express login App to Web"}</h1>
      <p>현재 로그인 브라우저 환경 : </p>
      <p>{userAgent}</p>
      <button type="button" onClick={handleButtonClick}>
        콜라보 살롱 앱으로 계속하기
      </button>
    </div>
  );
}

export default App;
