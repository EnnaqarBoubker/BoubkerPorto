import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('')
  const [mess, setMess] = useState("");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const { email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const url = "http://localhost:8080/api/auth/forgetpassword";
  const data = { email };

  const hundelSubmit = (e) => {
    e.preventDefault();

    if (formData.email.length === 0) {
      setError(true);
    }

    axios
      .post(url, data, { withCredentials: true })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.mess,
          showConfirmButton: true,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: true,
          timer: 1500,
        });

        console.log(err);
        setMess(err.response.data);
      });
  };

  return (
    <>
      <form className="coral" onSubmit={(e) => hundelSubmit(e)}>
        <div class="form-outline mb-4">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="youremail.@gmail.com"
            onChange={onChange}
            value={email}
          />
          {error && formData.email.length <= 0 ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              {" "}
              Email can not be empty
            </p>
          ) : (
            ""
          )}
        </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign In
            </button>
          </div>
      </form>
    </>
  );
};

export default ForgetPassword;
