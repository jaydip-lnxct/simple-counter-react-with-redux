import { incrementAction, decrementAction } from "./../redux/action";
import { useSelector, useDispatch } from "react-redux";
import Button from './Button'
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
      <div className="card card-1">
        <h1 className="card-title title-1">Counter</h1>
        <h2 className="card-title title-sub">{count}</h2>
      </div>
      <Button title="Increase" color="green" onClick={onPressIncrement} />
      <Button title="Decrease" color="red" onClick={onPressDecrement} />
    </div>
  );
};
export default CounterContainer;
