import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, logoutAction } from "./redux/action";
import CounterContainer from "./components/CounterContainer";

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
          {/* <button onClick={onPressLogin}>Login</button> */}

          <button
            className="btn"
            id="btn-hello"
            title="Login"
            onClick={onPressLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="loginContainer">
          <button
            className="btn"
            id="btn-bye"
            title="Logout"
            onClick={onPressLogout}
          >
            Logout
          </button>
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
