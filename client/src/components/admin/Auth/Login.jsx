import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './login.css'


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [name, setName] = useState("");
  

  const navigate = useNavigate();
 
  const from = "/admin";

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const url = "http://localhost:8080/api/auth/login";
  const data = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(inputValidation(values));

    if (formData.email.length == 0 || formData.password.length == 0) {
      setError(true);
    }

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      console.log(JSON.stringify(res?.data));
      console.log(res);
      const roles = res?.data?.role;
      const name = res?.data?.name;
      console.log(name);
      setName(name);

      localStorage.setItem("role", roles);
      localStorage.setItem("email", email);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <form className="coral" onSubmit={(e) => handleSubmit(e)}>
        <div class="form-outline mb-4">
          <label class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" name='email' placeholder='youremail.@gmail.com' onChange={onChange} value={email}/>
          {error && formData.email.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Email can not be empty</p> : ''}
        </div>

        <div class="form-outline mb-4">
          <label class="form-label" >
            Password
          </label>
          <input type="password" class="form-control" name='password' placeholder='*******' onChange={onChange} value={password}/>
          {error && formData.password.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Password can not be empty</p> : ''}
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center"></div>

          <div class="col">
            <a href="/forgetPassword">Forgot password?</a>
          </div>
        </div>

        <div className="mt-4">
            <button type="submit"
                className="btn btn-primary btn-block mb-4">Sign In</button>
        </div>
      </form>
    </>
  );
};

export default Login;
