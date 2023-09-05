import React, { useState } from 'react'

export default function FormText() {
    const [Text,setText]=useState({
        Name:"",
        Batch:"",
        Course:"",
        Email:""

    });
    const handleInput=(event)=>{
                const name= event.target.name;
                const value=event.target.value;
                // console.log(name,value);
                setText({ ...Text,[name] :value});
    }
    const [Record,setRecord]= useState([]);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newRecord={ ...Text , id:new Date().getTime().toString()};
        setRecord([...Record,newRecord]);
        //console.log(newRecord);
        //setText({Name:"",Batch:"",Course:"",Email:""});
    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="Name">Name</label>
            <input type="text" value={Text.Name} onChange={handleInput} name="Name" id="Name"/>
        </div>

        <div>
            <label htmlFor="Batch">Batch</label>
            <input type="text" value={Text.Batch} onChange={handleInput} name="Batch" id="Batch"/>
        </div>

        <div>
            <label htmlFor="Course">Course</label>
            <input type="text" value={Text.Course} onChange={handleInput} name="Course" id="Course"/>
        </div>

        <div>
            <label htmlFor="Email">Email</label>
            <input type="email" value={Text.Email} onChange={handleInput} name="Email" id="Email"/>
        </div>
        <button type="submit">Submit</button>
    </form>
      <div>
        {
            Record.map((currEle)=>{
                return (
                    <div>
                        <p>Name: {currEle.Name}</p>
                        <p>Batch: {currEle.Batch}</p>
                        <p>Course: {currEle.Course}</p>
                        <p>Email: {currEle.Email}</p>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}
