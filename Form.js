import React, { useState } from 'react';
function Form() {
  const [inputs, setInputs] = useState({});
  const [Data,setData]=useState(null);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setData(inputs);
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label style={{padding:"10px",display:'block',margin:"15px"}}>Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name} 
        onChange={handleChange}
      />
      </label>
      <label style={{padding:"10px",display:'block',margin:"8px"}}>Course:
        <input 
          type="text" 
          name="course" 
          value={inputs.course} 
          onChange={handleChange}
        />
        </label>
        <label style={{padding:"10px",display:'block',margin:"18px"}}>Email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email} 
          onChange={handleChange}
        />
        </label>
        <button style={{color:"#008000",margin:"18px"}} type="submit">Submit</button>
    </form>
    {Data &&(
      <div style={{fontSize:"20px",backgroundColor:"#007bff",margin:"18px"}}>
      <p>Name: {Data.name}</p>
      <p>Course: {Data.course}</p>
      <p>Email:  {Data.email}</p>
      </div>
      )}
      </div>
  );
}
export default Form;
