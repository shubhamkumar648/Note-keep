import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div>
      <main className="authentic_container">
        <div className="login_container flex flex-col p-2">
          <h3 className="text_center font-xl login_color">Login</h3>

          <form action="#0">
            <div className=" flex flex-col">
              <label for="Email" className="font-xl fs-l">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-1 mb-1 inp_area"
                required
              />
            </div>
            <div className=" flex flex-col pt-3">
              <label for="password" className="font-xl fs-l">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="p-1 mb-1 inp_area"
                required
              />
            </div>

            <div className="forgot_pass flex">
              <input type="checkbox" id="Pass" />
              <label for="Pass">Remember me</label>
              <span className="font-xxl ">
                <a href="#" className="link__nostyle theme_color">
                  Forgot your password?
                </a>
              </span>
            </div>
            <button
              className="btn btn__primary m-auto pt-2 log_btn"
              type="submit"
            >
              SUBMIT
            </button>
            <button
              className="btn btn__primary m-auto pt-2 log_btn"
              type="submit"
            >
              LOGIN AS A GUEST
            </button>
          </form>
          <span className="mt-1">
            Don't have an account?
            <Link className="link__nostyle create_acc" to="/signup">
              Sign up
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
};