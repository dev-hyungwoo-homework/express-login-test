function App() {
  const userAgent = navigator.userAgent;

  // if (userAgent.match(/Mozilla/)) {
  // }

  const handleButtonClick = async () => {
    alert(userAgent)
  }

  return (
    <div>
      <h1>{"[POC] Express login App to Web"}</h1>
      <p>현재 로그인 브라우저 환경</p>
      <p>{userAgent}</p>
      <button type="button" onClick={handleButtonClick}>로그인 하기</button>
    </div>
  );
}

export default App;
