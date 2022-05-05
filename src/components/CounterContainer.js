import { incrementAction, decrementAction } from "./../redux/action";
import { useSelector, useDispatch } from "react-redux";
const CounterContainer = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onPressIncrement = () => {
    dispatch(incrementAction());
  };
  const onPressDecrement = () => {
    dispatch(decrementAction());
  };
  return (
    <div className="counterContainer">
      {/* //   <h1>Counter: {count}</h1>
    //   <div className="buttonContainer">
    //     <button onClick={onPressIncrement}>+</button>
    //     <button onClick={onPressDecrement}>-</button>
    //   </div> */}
      <div className="card card-1">
        <h1 className="card-title title-1">Counter</h1>
        <h2 className="card-title title-sub">{count}</h2>
      </div>
      <button
        className="btn"
        id="btn-hello"
        title="Login"
        onClick={onPressIncrement}
      >
        Increase
      </button>
      <button
        className="btn"
        id="btn-bye"
        title="Logout"
        onClick={onPressDecrement}
      >
        Decrease
      </button>
    </div>
  );
};
export default CounterContainer;
