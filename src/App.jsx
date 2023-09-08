
import './App.css'
import Counter from './counter';
import Team from './Team';
import User from './user';

import Friends from './Friends';
import Friend from './Friend';

function App() {

  function handleClick() {
    alert("Handle clicked");
  }

  const handleClick2 = () => {
    alert('clicked 2');
  }
  const FiveNum = (num) => {
    alert(num + 3);
  }

  return (
    <>
      <h3> React core Concepts 2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={() => {alert("third click")}}>third</button>
      <button onClick={() => FiveNum(4)}>third</button>
    </>
  )
}

export default App
