// function App({count}) { /*count is passed as a parameter*/
//   return (
//     <div className="App">
//       {/* count = count +1 ;  NOT ALLOWED AS THIS IS PASSED AS PROP HERE*/} 
//       <h1>Hello from functional Component</h1>
//       <p>Count is: {count}</p>  {/*count is passed as a prop to this functional component*/} 
//     </div>
//   );
// }

// SECOND WAY OF PASSING PROPS:
// function App(props) { /*count is passed as a parameter*/
//   return (
//     <div className="App">
//       {/* count = count +1 ;  NOT ALLOWED AS THIS IS PASSED AS PROP HERE*/} 
//       <h1>Hello from functional Component</h1>
//       <p>Count is: {props.counter} {props.name}</p>  {/*count is passed as a prop to this functional component*/} 
//     </div>
//   );
// }

// After OBJECT DESTRUCTURING
// function App({counter, name}) { /*count is passed as a parameter*/
//   return (
//     <div className="App">
//       {/* count = count +1 ;  NOT ALLOWED AS THIS IS PASSED AS PROP HERE*/} 
//       {/* <h1>Hello from functional Component</h1> */}
//       <p>Count is: {counter} </p>  {/*count is passed as a prop to this functional component*/}
//       <p>Made By {name}</p> 
//     </div>
//   );
// }

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