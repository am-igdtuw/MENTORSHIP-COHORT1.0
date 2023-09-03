import React, {useState} from 'react';

function Form(){
    const [info, setInfo] = useState({
        name: '', batch:'', course:'', email:''
    });

    const [submit, setSubmit]=useState(null);

    const handleChange=(e) =>{
        const {name, value} = e.target;
        setInfo({...info, [name]: value});
    };

    const handleSubmit = (e) =>{
        e.preventDEfault();
        setSubmit(info);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input type="text" name="name" value={info.name} onChange={handleChange} />
                </label>
                <label>
                    Batch:
                    <input type="text" name="batch" value={info.batch} onChange={handleChange} />
                </label>
                <label>
                    Course:
                    <input type="text" name="course" onChange={handleChange} value={info.course} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" onChnage={handleChange} value={info.email} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {submit && (
                <div className="submitted">
                    <h2>Submitted data</h2>
                    <p>Name: {submit.name}</p>
                    <p>Batch: {submit.batch}</p>
                    <p>Course: {submit.course}</p>
                    <p>Email: {submit.email}</p>
                </div>
            )}
        </div>
    );
}

export default Form;