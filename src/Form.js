import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      batch,
      course,
      email,
    };
    setSubmittedData(formData);

    // Optional: You can clear the input fields after submission if desired
    setName('');
    setBatch('');
    setCourse('');
    setEmail('');
  };

  return (
    <div className="form">
      <h1>Student Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="batch">Batch:</label>
          <input
            type="text"
            id="batch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="custom-button">Submit</button>
      </form>
      <div className="submitted-data">
        <h2>Submitted Data:</h2>
        <p>Name: {submittedData.name}</p>
        <p>Batch: {submittedData.batch}</p>
        <p>Course: {submittedData.course}</p>
        <p>Email: {submittedData.email}</p>
      </div>
    </div>
  );
}

export default Form;
