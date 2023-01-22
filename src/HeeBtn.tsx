import { useState, useEffect } from 'react';

const HeeBtn = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < 20) setCount(count + 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
      <div id="hee-btn-component" onClick={addCount}>
        <img src="hee_btn.jpg" alt="へえボタン"></img>
        <audio id="hee-audio" src="hee.mp3"></audio>
      </div>
      < div><span><strong>{count}</strong></span>へえ</div>
      <button onClick={resetCount}>リセット</button>
    </>
  )
}

export default HeeBtn;