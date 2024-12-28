import React from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux/es/exports";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import  { signOut } from "../authSlice";
import "./header.css";

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn)
  const dispatch = useDispatch();
  const history = useHistory();
=======
import { useNavigate } from "react-router-dom";
import { signOut } from "../authSlice";
import "./header.scss";

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
>>>>>>> 28b21a0 (クリア済み)
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleSignOut = () => {
    dispatch(signOut());
    removeCookie("token");
<<<<<<< HEAD
    history.push("/signin");
  }
=======
    navigate("/signin");
  };
>>>>>>> 28b21a0 (クリア済み)

  return (
    <header className="header">
      <h1>Todoアプリ</h1>
<<<<<<< HEAD
      {auth ? <button onClick={handleSignOut} className="sign-out-button">サインアウト</button> : <></>}
    </header>
  )
}
=======
      {auth ? (
        <button onClick={handleSignOut} className="sign-out-button">
          サインアウト
        </button>
      ) : (
        <></>
      )}
    </header>
  );
};
>>>>>>> 28b21a0 (クリア済み)
