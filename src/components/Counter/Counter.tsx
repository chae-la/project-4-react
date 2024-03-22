import "./Counter.scss";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <img src={minus} onClick={handleDecrement} className="counter__button"/>
      <h1>{counter}</h1>
      <img src={plus} onClick={handleIncrement} className="counter__button"/>
    </div>


  )


};

export default Counter;
