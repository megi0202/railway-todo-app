import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
<<<<<<< HEAD
import { Redirect, useHistory, Link } from "react-router-dom";
import { Header } from "../components/Header";
import "./signin.css";
=======
import { Navigate, useNavigate, Link } from "react-router-dom";
import { Header } from "../components/Header";
import "./signin.scss";
>>>>>>> 28b21a0 (クリア済み)
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../authSlice";
import { url } from "../const";

<<<<<<< HEAD

export const SignIn = () => {
  const auth = useSelector((state) => state.auth.isSignIn)
  const dispatch = useDispatch();
  const history = useHistory();
=======
export const SignIn = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
>>>>>>> 28b21a0 (クリア済み)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const onSignIn = () => {
<<<<<<< HEAD
    axios.post(`${url}/signin`, {email: email, password: password})
      .then((res) => {
        setCookie("token", res.data.token);
        dispatch(signIn());
        history.push("/");
      })
      .catch((err) => {
        setErrorMessage(`サインインに失敗しました。${err}`);
      })
  }

  if(auth) return <Redirect to="/" />

  return (
    <div>
      <Header/>
=======
    axios
      .post(`${url}/signin`, { email: email, password: password })
      .then((res) => {
        setCookie("token", res.data.token);
        dispatch(signIn());
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(`サインインに失敗しました。${err}`);
      });
  };

  if (auth) return <Navigate to="/" />;
  return (
    <div>
      <Header />
>>>>>>> 28b21a0 (クリア済み)
      <main className="signin">
        <h2>サインイン</h2>
        <p className="error-message">{errorMessage}</p>
        <form className="signin-form">
<<<<<<< HEAD
          <label className="email-label">メールアドレス</label><br />
          <input type="email" className="email-input" onChange={handleEmailChange} /><br />
          <label className="password-label">パスワード</label><br />
          <input type="password" className="password-input" onChange={handlePasswordChange} /><br />
          <button type="button" className="signin-button" onClick={onSignIn}>サインイン</button>
=======
          <label className="email-label">メールアドレス</label>
          <br />
          <input
            type="email"
            className="email-input"
            onChange={handleEmailChange}
          />
          <br />
          <label className="password-label">パスワード</label>
          <br />
          <input
            type="password"
            className="password-input"
            onChange={handlePasswordChange}
          />
          <br />
          <button type="button" className="signin-button" onClick={onSignIn}>
            サインイン
          </button>
>>>>>>> 28b21a0 (クリア済み)
        </form>
        <Link to="/signup">新規作成</Link>
      </main>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 28b21a0 (クリア済み)
