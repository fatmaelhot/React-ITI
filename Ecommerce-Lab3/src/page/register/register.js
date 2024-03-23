import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email should be in valid format';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password should be at least 8 characters';
    } else if (formData.password.length > 12) {
      formErrors.password = 'Password should be at most 12 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.image) {
      formErrors.image = 'Image is required';
    }

    setErrors(formErrors);

    // If form is error free, submit data
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-75 m-5 border p-5 rounded-2 shadow mx-auto'>
      <div className="mb-3 ">
        <input type="text" placeholder='Name' className="form-control" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <input type="email" placeholder='Email' className="form-control" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <input type="password" placeholder='Password' className="form-control" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <div className="text-danger">{errors.password}</div>}
      </div>
      <div className="mb-3">
        <input type="password" placeholder='Confirm Password' className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Upload Image:</label>
        <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
        {errors.image && <div className="text-danger">{errors.image}</div>}
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
};

export default RegisterForm;
