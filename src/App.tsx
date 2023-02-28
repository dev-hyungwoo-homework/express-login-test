import axios from "axios";

function App() {
  const userAgent = navigator.userAgent;
  // console.log(userAgent);

  // if (userAgent.match(/Mozilla/)) {
  // }

  const handleButtonClick = async () => {
    console.log("click!")
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
