
function ShowInfo({name,batch,course,email}) { 
  return (
    <div>
      <p>Name: {name} </p>  
      <p>Batch: {batch}</p> 
      <p>Course: {course}</p> 
      <p>Email id: {email}</p> 
    </div>
  );
}

export default ShowInfo; 
