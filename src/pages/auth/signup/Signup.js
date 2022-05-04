import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export const Signup = () => {
  return (
    <div>
      <main className="authentic_container">
        <div className="login_container flex flex-col p-2">
          <h3 className="text_center font-xl login_color">Sign up</h3>

          <form action="#0">
            <div className=" flex flex-col">
              <label for="Email" className="font-xl fs-l">
                FIRSTNAME
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
                LASTNAME
              </label>
              <input
                type="password"
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
                type="password"
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
                placeholder="Enter your Password"
                className="p-1 mb-1 inp_area"
                required
              />
            </div>
            <div className="forgot_pass flex">
              <input type="checkbox" id="condtion" />
              <label for="condition">Remember me</label>
              <span className="font-xxl ">
                <a href="#" className="link__nostyle theme_color">
                  I accept all Terms and Condition
                </a>
              </span>
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