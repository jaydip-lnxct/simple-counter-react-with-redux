import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, logoutAction } from "./redux/action";
import CounterContainer from "./components/CounterContainer";
import Button from "./components/Button";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.logged);
  const onPressLogout = () => {
    dispatch(logoutAction());
  };
  const onPressLogin = () => {
    dispatch(loginAction());
  };
  return (
    <div className="App">
      {!isLogged ? (
        <div className="loginContainer">
          <Button title="Login" onClick={onPressLogin} color="green" />
        </div>
      ) : (
        <div className="loginContainer">
          <Button title="Logout" onClick={onPressLogout} color="red" />
        </div>
      )}
      <h2 className="welcomeText">
        {isLogged ? "WelCome To Our World" : "Please First Login"}
      </h2>
      <hr></hr>
      {isLogged && <CounterContainer />}
    </div>
  );
}

export default App;
