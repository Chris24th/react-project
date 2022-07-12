import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {};
  const handleChange = async (e) => {};
  const onSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div className="container-md">
      <div className="row m-3 justify-content-center">
        <h1 className="text-center my-5">Welcome to PostIT</h1>
      </div>
      <div className="row m-3 justify-content-center">
        <div className="col-sm-6">
          <div className=" mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="e.g. example@email.com"
            />
          </div>
          <div className="mb-3">
            <label>Username</label>
            <input type="email" className="form-control" id="floatingInput" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="row mb-3 px-3">
            <input
              type="submit"
              onClick={onSubmit}
              className="btn btn-primary"
              value="Create Account"
              onClick={onSignIn}
            />
          </div>
          <div>
            <label>Already have an Account?</label>{" "}
            <label
              type="button"
              className="text-decoration-underline"
              onClick={onSignIn}
            >
              Sign In
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
