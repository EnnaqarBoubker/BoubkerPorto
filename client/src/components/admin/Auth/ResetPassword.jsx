import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: "", password2: "" });
  const { password, password2 } = formData;
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const { token } = useParams();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const url = `http://localhost:8080/api/auth/resetPassword/${token}`;
  const data = { password, password2 };

  const hundelSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length == 0 || formData.password2.length == 0) {
      setError(true);
    } else if (formData.password != formData.password2) {
      setErrorPassword(true);
    }

    axios
      .post(url, data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.mess,
          showConfirmButton: true,
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        console.log(res);
        setMessage(res.data.mess);
        // navigate('/message')
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: true,
        });
        console.log(err);
        setMessage(err.response.data.message);
      });
  };

  return (
    <>
      <form className="coral" onSubmit={(e) => hundelSubmit(e)}>
        <div class="form-outline mb-4">
          <label class="form-label">password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="*******"
            onChange={onChange}
            value={password}
          />
          {error && formData.password.length <= 0 ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              {" "}
              password can not be empty
            </p>
          ) : (
            ""
          )}
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            name="password2"
            placeholder="*******"
            onChange={onChange}
            value={password2}
          />
          {error && formData.password2.length <= 0 ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              {" "}
              Password can not be empty
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
