import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    course: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: '',
      batch: '',
      course: '',
      email: '',
    });
  };

  return (
    <div className="app">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Batch:
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
            />
          </label>
          <label>
            Course:
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="submitted-data">
        {submittedData && (
          <div>
            <h2>Submitted Data:</h2>
            <p>Name: {submittedData.name}</p>
            <p>Batch: {submittedData.batch}</p>
            <p>Course: {submittedData.course}</p>
            <p>Email: {submittedData.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

