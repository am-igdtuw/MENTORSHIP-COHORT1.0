import React, { useState } from 'react';
import './App.css';

function FromForm() {
  const [name,setName]=useState("");
  const [mail,setMail]=useState("");
  const[fName,setFName]=useState();
  const [email,setEmail]=useState("");
  const [lastname,setLastname]=useState("");
  const [lname,setLname]=useState("");

  const onSubmit=() => {
    setFName(name);
    setEmail(mail);
    setLname(lastname);
  }

  const change=(c)=>{//event handler
    //console.log(c.target.value);
    setName(c.target.value);
  }
  const changetwo=(c)=>{//event hnadler
    //console.log(c.target.value);
    setMail(c.target.value);
  }
  const changethree=(c)=>{//
    setLastname(c.target.value);
  }
  return(
    <>
      <div>
        <br></br>
        <h1>Hello {fName} {lname}  !</h1>
        
        <input type="text" placeholder="enter name " onChange={change} value={name}/>
        <br></br>
        <input type="text" placeholder="enter email " onChange={changethree} value={lastname}/>
        <br></br>
        <input type="text" placeholder="enter email " onChange={changetwo} value={mail}/>
        <br></br>
        
        <button type="submit" className="but" onClick={onSubmit}>Submit me please
        </button>
        <h2>your name is {fName} {lname}</h2>
        
        <h2>your email id is {email}</h2>



      </div>
      </>  
    

  );
  
};

export default FromForm;
