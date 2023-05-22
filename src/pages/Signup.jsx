import React from "react";
import "../css/signup.css";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [controls1, setControls1] = React.useState("password");
  const [controls2, setControls2] = React.useState("password");

  const sumbitfnt = (data) => {
    console.log(data);
  };
  return (
    <div className="signupform">
      <div id="title">
        <h3>Signup</h3>
      </div>
      <form onSubmit={handleSubmit(sumbitfnt)}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="username"
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
              minLength: {
                value: 3,
                message: "username should atleast 3 character",
              },
              maxLength: {
                value: 8,
                message: "username can be maxium 8 character",
              },
            })}
          />
        </div>
        <p style={{ marginTop: 0 }}>
          <small style={{ color: "red" }}>{errors?.username?.message}</small>
        </p>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={controls1}
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 8,
                message: "password should atleast 8 character",
              },
              maxLength: {
                value: 20,
                message: "password can be maxium 20 character",
              },
            })}
          />
          <i
            className={
              controls1 === "password"
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            id="eye"
            onClick={() =>
              setControls1(controls1 === "password" ? "text" : "password")
            }
          ></i>
        </div>
        <p style={{ marginTop: 0 }}>
          <small style={{ color: "red" }}>{errors?.password?.message}</small>
        </p>
        <div className="form-group">
          <label htmlFor="repassword">Confirm Password</label>
          <input
            type={controls2}
            name="repassword"
            {...register("repassword", {
              required: {
                value: true,
                message: "repassword is required",
              },
              minLength: {
                value: 8,
                message: "repassword should atleast 8 character",
              },
              maxLength: {
                value: 20,
                message: "repassword can be maxium 20 character",
              },
            })}
          />
          <i
            className={
              controls2 === "password"
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            id="eye2"
            onClick={() =>
              setControls2(controls2 === "password" ? "text" : "password")
            }
          ></i>
        </div>
        <p style={{ marginTop: 0 }}>
          <small style={{ color: "red" }}>{errors?.repassword?.message}</small>
        </p>
        <div>
          <button id="btn">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
