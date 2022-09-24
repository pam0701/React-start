// import React from 'react';
// import ReactDOM from 'react-dom';
// 함수형 컴포넌트
function HelloWorldButton() {
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? "이제 클릭됨" : "아직 클릭 안됨";

  return (
    <button onClick={() => setClickState(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(<HelloWorldButton />);
