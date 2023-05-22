import "../css/login.css";
import React from "react";
import { useForm } from "react-hook-form";

// form tag and
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [controlType, setControlType] = React.useState("password");

  const submitfunction = (data) => {
    console.log(data);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="loginform">
      <div id="title">
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit(submitfunction)}>
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
            type={controlType}
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
              controlType === "password"
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            id="eye"
            onClick={() =>
              setControlType(controlType === "password" ? "text" : "password")
            }
          ></i>
        </div>
        <p style={{ marginTop: 0 }}>
          {!errors?.username && (
            <small style={{ color: "red" }}>{errors?.password?.message}</small>
          )}
        </p>
        <div>
          <button id="btn">Login</button>
          <h4>
            Forgot Password? or
            <a href="/signup">
              <u style={{ marginLeft: 4 }}>Signup</u>
            </a>
          </h4>
        </div>
      </form>
    </div>
  );
}

export default Login;
