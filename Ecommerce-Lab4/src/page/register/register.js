import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUserInfo } from '../../store/slices/profileSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(12, 'Password must be at most 12 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addUserInfo(values));
      navigate('/'); 
    },
  });
  const handlePhotoChange = (e) => {
    formik.setFieldValue('photo', e.currentTarget.files[0]);
  };
  return (
    <form onSubmit={formik.handleSubmit} className='w-75 m-5 border p-5 rounded-2 shadow mx-auto'>
      <div className="mb-3">
        <input
          type="text"
          placeholder='Name'
          className="form-control"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder='Email'
          className="form-control"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder='Password'
          className="form-control"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder='Confirm Password'
          className="form-control"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && <div className="text-danger">{formik.errors.confirmPassword}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="photo" className="form-label">Upload Photo:</label>
        <input
          id="photo"
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        {formik.errors.photo && <div className="text-danger">{formik.errors.photo}</div>}
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
};

export default RegisterForm;

