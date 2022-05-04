import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useReducer } from "react"
import { signupReducer } from "../../../reducer/signupReducer";



export const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [state, dispatch] = useReducer(signupReducer, initialState);

  const { firstName, lastName, email, password } = state;

  return (
    <div>
      <main className="authentic_container">
        <div className="login_container flex flex-col p-2">
          <h3 className="text_center font-xl login_color">Sign up</h3>

          <form>
            <div className=" flex flex-col">
              <label for="Email" className="font-xl fs-l">
                FIRSTNAME
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => dispatch({ type: "FIRST_NAME", payload: e.target.value })}
                placeholder="Enter your Email"
                className="p-1 mb-1 inp_area"
                required
              />
            </div>

            <div className=" flex flex-col pt-3">
              <label for="password" className="font-xl fs-l">
                LASTNAME
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) =>
                  dispatch({ type: "LAST_NAME", payload: e.target.value })}
                placeholder="Enter your Password"
                className="p-1 mb-1 inp_area"
                required
              />
            </div>

            <div className=" flex flex-col pt-3">
              <label for="password" className="font-xl fs-l">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
                placeholder="Enter your Password"
                className="p-1 mb-1 inp_area"
                required
              />
            </div>

            <div className=" flex flex-col pt-3">
              <label for="password" className="font-xl fs-l">
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) =>
                  dispatch({ type: "PASSWORD", payload: e.target.value })}
                placeholder="Enter your Password"
                className="p-1 mb-1 inp_area"
                required
              />
            </div>

            <button
              className="btn btn__primary m-auto pt-2 log_btn"
              type="submit"
            >
              SUBMIT
            </button>
          </form>

          <span className="mt-1">
            All ready have an account
            <Link className="link__nostyle create_acc" to="/login">
              Login
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
};
