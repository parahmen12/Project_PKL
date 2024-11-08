import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { registerUser } from '../store/authSlice';
import '../style/register.css';

const Register = () => {
  useEffect(() => {
    document.title = 'Register';
  }, []);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username wajib diisi')
        .min(5, 'Minimal 5 karakter')
        .max(15, 'Maksimal 15 karakter'),
      password: Yup.string()
        .required('Password wajib diisi')
        .min(8, 'Password minimal 8 karakter')
        .matches(/[a-z]/, 'Password harus mengandung huruf kecil')
        .matches(/[A-Z]/, 'Password harus mengandung huruf besar')
        .matches(/[0-9]/, 'Password harus mengandung angka'),
    }),
    onSubmit: async (values) => {
      try {
        // Mengirim data ke backend melalui Redux Thunk
        const response = await dispatch(registerUser(values)).unwrap();

        // Tampilkan popup jika berhasil registrasi
        Swal.fire({
          icon: 'success',
          title: 'Registrasi Berhasil',
          text: 'Akun Anda berhasil dibuat!',
          confirmButtonText: 'OK',
        }).then(() => {
          window.location.href = '/login'; // Redirect ke halaman login
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Registrasi Gagal',
          text: error || 'Terjadi kesalahan saat registrasi',
        });
      }
    },
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.errors.username && (
              <div className="invalid-feedback d-block">
                {formik.errors.username}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <div className="invalid-feedback d-block">
                {formik.errors.password}
              </div>
            )}
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Register
            </button>
          </div>
          <p className="register-link">
            Sudah punya akun? <a href="/login">Login di sini</a>
          </p>
        </form>
      </div>
      <div className="login-image">
        <img src="" />
      </div>
    </div>
  );
};

export default Register;