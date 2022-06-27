import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  const baseURL = "http://localhost:8000/api/user";
  useEffect(() => {
    axios.get(baseURL).then(function (response) {
      setList(response.data);
    });
  }, []);
  const handleSubmit = (e) => {
    const data = { username, password };
    e.preventDefault();
    console.log(data);
    axios.post(baseURL, data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="login-parent">
      <div className="login-child">
        <div className="img-contianer">
          <img
            src="https://i.postimg.cc/JhQ1MgJp/tel.jpg"
            alt="logo"
            className="logo"
          />
        </div>
        <div>
          <form className="form-parent" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text accent" id="basic-addon1">
                <span className="material-symbols-outlined">mail</span>
              </span>
              <input
                type="text"
                value={username}
                className="form-control dropdown-toggle"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                data-bs-toggle="dropdown"
                required
              />
              <ul className="dropdown-menu scrollable-menu" role="menu">
                {list.map(function (value) {
                  return (
                    <li>
                      <div
                        id={value._id}
                        className="dropdown-item"
                        onClick={(e) => setUsername(value.username)}
                      >
                        {value.username}
                      </div>
                    </li>
                  );
                })}
                {/* <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => setUsername("Action")}
                  >
                    Action
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => setUsername("Another Action")}
                  >
                    Another action
                  </div>
                </li>
                <li>
                  <div className="dropdown-item">Another action</div>
                </li>
                <li>
                  <div className="dropdown-item">Another action</div>
                </li> */}
              </ul>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text accent" id="basic-addon1">
                <span className="material-symbols-outlined">lock</span>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div className="button-container">
              <button className="login-container">Login</button>
              <button className="signup-container">Sign-Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
