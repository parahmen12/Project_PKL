import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../store/authSlice';
import '../style/login.css';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Tolong isi username!'),
      password: Yup.string().required('Tolong isi password!'),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(loginUser(values)).unwrap();
        toast.success('Berhasil Login!', {
          position: 'top-center',
          autoClose: 1000,
          onClose: () => navigate('/'), // Redirect ke halaman utama setelah login
        });
      } catch (err) {
        console.error('Error during login:', err);
        toast.error(`Gagal Login: ${err?.message || 'Username atau password salah!'}`, {
          position: 'top-center',
          autoClose: 3000,
        });
      }
      
    },
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="invalid-feedback d-block">{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback d-block">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          </div>
          <p className="register-link">
            Belum punya akun? <a href="/register">Register di sini</a>
          </p>
        </form>
      </div>
      <div className="login-image"></div>
      <ToastContainer />
    </div>
  );
};

export default Login;
