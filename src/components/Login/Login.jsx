import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/ContextProvider";
import axios from "axios";
import UserData from "../UserData/UserData";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = () => {
  const [err, setError] = useState(false);
  const formRef = useRef(null);

  const { setToken, token, setEmail } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const name = e.target[0].value;
    const password = e.target[1].value;
    e.preventDefault();
    axios
      .post("https://dummyjson.com/auth/login", {
        username: name,
        password: password,
      })
      .then((res) => {
        const token = res.data.accessToken;
        localStorage.setItem("token", token);
        setToken(token);
        formRef.current.reset();
        navigate("/userData");
      })
      .catch((err) => {
        console.error(err.message);
        formRef.current.reset();
        setError(true);
      });
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setEmail(null);
    navigate("/");
  };

  return (
    <>
      {token ? (
        <div>
          <UserData token={token} logOut={logOut} />
        </div>
      ) : (
        <>
          <h2>Login</h2>
          <form ref={formRef} onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input style={{borderRadius:12}} type="text" />
            </div>
            <div>
              <label>Password:</label>
              <input style={{borderRadius:12}} type="password" />
            </div>
            <Button variant="secondary" type="submit">Login</Button>
          </form>
          {err && <p className="errorInput">error</p>}
        </>
      )}
    </>
  );
};

export default Login;
