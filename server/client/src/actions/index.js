import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup =
  ({ name, email, password }, callback) =>
  async (dispatch) => {
    try {
      const res = await axios.post("/api/signup", { name, email, password });

      dispatch({ type: AUTH_USER, payload: res.data.token });
      //store token in localStorage in browser
      localStorage.setItem("token", res.data.token);
      //callback fn is from Signup component to redirect to 'feature' once done
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: "Email account already exists" });
    }
  };

export const signin =
  ({ email, password }, callback) =>
  async (dispatch) => {
    try {
      const res = await axios.post("/api/signin", { email, password });

      dispatch({ type: AUTH_USER, payload: res.data.token });
      //store token in localStorage in browser
      localStorage.setItem("token", res.data.token);
      //callback fn is from Signin component to redirect to 'feature' once done
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: "Email or Password is incorrect" });
    }
  };

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};
